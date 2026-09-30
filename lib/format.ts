const currency = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

export const brl = (value: number) => currency.format(value).replace(/\u00a0/g, " ");

export const discountPercent = (current: number, previous?: number) =>
  previous && previous > current ? Math.round((1 - current / previous) * 100) : null;

export const discoveryNumber = (n: number) => `nº ${String(n).padStart(2, "0")}`;
