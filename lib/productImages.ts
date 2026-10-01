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

/**
 * Distribui as fotos pelas seções. Usa `imageRoles` quando definido;
 * caso contrário, segue a ordem dos arquivos, evitando repetir enquanto houver fotos diferentes.
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
  let cursor = 0;
  for (const role of roles) {
    if (result[role] || all.length === 0) continue;
    const next = all.find((i) => !used.has(i.file)) ?? all[cursor++ % all.length];
    result[role] = next;
    used.add(next.file);
  }
  return { ...result, gallery: all };
}
