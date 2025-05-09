// lib/actions/skuActions.ts
"use server";

import { initialSKUs, type ProductSKU } from "@/constant/product_sku";

let skus = [...initialSKUs]; // 模拟数据库

export async function getSKUs(page: number | 1, pageSize: number | 10) {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  return {
    data: skus.slice(start, end),
    total: skus.length,
  };
}

export async function createSKU(
  sku: Omit<ProductSKU, "id" | "create_time" | "lock_stock" | "version">
) {
  const newSKU: ProductSKU = {
    ...sku,
    id: Date.now().toString(),
    lock_stock: 0, // 默认值
    version: 0, // 默认值
    create_time: new Date().toISOString(),
    is_deleted: 0,
  };
  skus.unshift(newSKU);
  return newSKU;
}

export async function updateSKU(
  id: string,
  sku: Partial<Omit<ProductSKU, "lock_stock" | "version">>
) {
  const index = skus.findIndex((s) => s.id === id);
  if (index === -1) throw new Error("SKU not found");

  skus[index] = {
    ...skus[index],
    ...sku,
  };
  return skus[index];
}

export async function deleteSKU(id: string) {
  skus = skus.filter((s) => s.id !== id);
  return { success: true };
}
