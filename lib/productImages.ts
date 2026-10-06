import fs from "node:fs";
import path from "node:path";
import type { Product } from "./types";

export type ProductImage = { src: string; file: string; width: number; height: number };

const IMAGE_EXT = /\.(webp|png|jpe?g|avif)$/i;

/** Lê largura e altura do arquivo sem dependências (WEBP, PNG e JPEG). */
function readSize(buf: Buffer): { width: number; height: number } | null {
  try {
    if (buf.toString("ascii", 0, 4) === "RIFF" && buf.toString("ascii", 8, 12) === "WEBP") {
      const chunk = buf.toString("ascii", 12, 16);
      if (chunk === "VP8X") return { width: 1 + buf.readUIntLE(24, 3), height: 1 + buf.readUIntLE(27, 3) };
      if (chunk === "VP8L") {
        const b = buf.readUInt32LE(21);
        return { width: (b & 0x3fff) + 1, height: ((b >> 14) & 0x3fff) + 1 };
      }
      if (chunk === "VP8 ") return { width: buf.readUInt16LE(26) & 0x3fff, height: buf.readUInt16LE(28) & 0x3fff };
    }
    if (buf.readUInt32BE(0) === 0x89504e47) return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
    if (buf[0] === 0xff && buf[1] === 0xd8) {
      let i = 2;
      while (i < buf.length) {
        if (buf[i] !== 0xff) { i++; continue; }
        const marker = buf[i + 1];
        const len = buf.readUInt16BE(i + 2);
        if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
          return { height: buf.readUInt16BE(i + 5), width: buf.readUInt16BE(i + 7) };
        }
        i += 2 + len;
      }
    }
  } catch {
    /* tamanho desconhecido */
  }
  return null;
}

const cache = new Map<string, ProductImage[]>();

/** Todas as fotos reais da pasta do produto, em ordem natural de nome. */
export function getProductImages(folder: string): ProductImage[] {
  if (cache.has(folder)) return cache.get(folder)!;
  const dir = path.join(process.cwd(), "public", "produtos", folder);
  let files: string[] = [];
  try {
    files = fs.readdirSync(dir).filter((f) => IMAGE_EXT.test(f));
  } catch {
    files = [];
  }
  files.sort((a, b) => a.localeCompare(b, "pt-BR", { numeric: true, sensitivity: "base" }));
  const images = files.map((file) => {
    let size = { width: 1000, height: 1000 };
    try {
      const fd = fs.openSync(path.join(dir, file), "r");
      const buf = Buffer.alloc(64 * 1024);
      fs.readSync(fd, buf, 0, buf.length, 0);
      fs.closeSync(fd);
      size = readSize(buf) ?? size;
    } catch {
      /* mantém o tamanho padrão */
    }
    return { file, src: `/produtos/${folder}/${encodeURIComponent(file)}`, ...size };
  });
  cache.set(folder, images);
  return images;
}

export type ImageSet = {
  hero: ProductImage | null;
  solution: ProductImage | null;
  benefits: ProductImage | null;
  summary: ProductImage | null;
  gallery: ProductImage[];
};

/** Nome do arquivo normalizado para comparação: minúsculas e sem acentos. */
const normalize = (file: string) =>
  file.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

const ANIMAL = /(cao|caes|cachorro|dog|golden|gato|gatos|gatinho|filhote|ragdoll|cat|pet)/;

/** Primeiro arquivo, ainda não usado, que combina com uma das dicas (na ordem das dicas). */
function pickByHints(all: ProductImage[], hints: string[] | undefined, used: Set<string>): ProductImage | null {
  if (!hints) return null;
  for (const hint of hints) {
    const test =
      hint === "@sem-animal"
        ? (img: ProductImage) => !ANIMAL.test(normalize(img.file))
        : (img: ProductImage) => new RegExp(hint).test(normalize(img.file));
    const found = all.find((img) => !used.has(img.file) && test(img));
    if (found) return found;
  }
  return null;
}

/**
 * Texto alternativo a partir do nome do arquivo, quando ele é descritivo
 * (ex.: "Gato Ragdoll Bebendo na Fonte.png" → "Gato Ragdoll Bebendo na Fonte").
 * Nomes automáticos (códigos, UUID) retornam null.
 */
export function altFromFile(file: string): string | null {
  if (/\d{3,}/.test(file)) return null; // códigos (ex.: nomes do Mercado Livre) não são descritivos
  const base = file.replace(/\.[a-z0-9]+$/i, "").replace(/[_-]+/g, " ").replace(/\s*\(\d+\)$/, "").trim();
  const words = base.split(/\s+/).filter((w) => /^[\p{L}]{3,}$/u.test(w));
  return words.length >= 3 ? base : null;
}

/**
 * Distribui as fotos pelas seções: 1) `imageRoles` (nome exato); 2) `imageHints` (palavras do nome);
 * 3) para os produtos que não definem nada disso, a ordem dos arquivos (comportamento original).
 */
export function getImageSet(product: Product): ImageSet {
  const all = getProductImages(product.imageFolder);
  const byName = (name?: string) => (name ? all.find((i) => i.file === name) ?? null : null);
  const used = new Set<string>();
  const roles = ["hero", "solution", "benefits", "summary"] as const;
  const result: Record<(typeof roles)[number], ProductImage | null> = { hero: null, solution: null, benefits: null, summary: null };

  for (const role of roles) {
    const chosen = byName(product.imageRoles?.[role]);
    if (chosen) { result[role] = chosen; used.add(chosen.file); }
  }
  for (const role of roles) {
    if (result[role]) continue;
    const hints = product.imageHints?.[role];
    const chosen = pickByHints(all, hints, used);
    if (chosen) { result[role] = chosen; used.add(chosen.file); continue; }
    // produto que escolhe fotos por nome: se a foto não existir, o build para em vez de trocar sozinho
    if (hints && all.length > 0) {
      throw new Error(
        `[imageHints] ${product.slug} → "${role}": nenhum arquivo combina com ${JSON.stringify(hints)} em public/produtos/${product.imageFolder}/\n` +
          all.map((i) => "  - " + i.file).join("\n")
      );
    }
  }
  let cursor = 0;
  for (const role of roles) {
    if (result[role] || all.length === 0) continue;
    const next = all.find((i) => !used.has(i.file)) ?? all[cursor++ % all.length];
    result[role] = next;
    used.add(next.file);
  }
  const gallery = product.galleryFilter ? all.filter((i) => new RegExp(product.galleryFilter!).test(normalize(i.file))) : all;
  return { ...result, gallery };
}

/** Fotos da seção "produto em uso": uma por item, sem repetir, na ordem definida no produto. */
export function getInUseImages(product: Product): { image: ProductImage; caption: string }[] {
  if (!product.inUse) return [];
  const all = getProductImages(product.imageFolder);
  const used = new Set<string>();
  const out: { image: ProductImage; caption: string }[] = [];
  for (const item of product.inUse.items) {
    const image = pickByHints(all, item.hints, used);
    if (image) { used.add(image.file); out.push({ image, caption: item.caption }); }
  }
  return out;
}
