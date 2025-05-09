"use server";

import { initialProducts, type ProductSPU } from "@/constant/products";

let products = [...initialProducts]; // 模拟数据库

export async function getProducts(
  page: 1,
  pageSize: 10
): Promise<{
  data: ProductSPU[];
  total: number;
}> {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  return {
    data: products.slice(start, end),
    total: products.length,
  };
}

export async function createProduct(
  product: Omit<ProductSPU, "id" | "create_time">
) {
  const newProduct: ProductSPU = {
    ...product,
    id: Date.now().toString(),
    create_time: new Date().toISOString(),
    is_deleted: 0,
  };
  products.unshift(newProduct);
  return newProduct;
}

export async function updateProduct(id: string, product: Partial<ProductSPU>) {
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) throw new Error("Product not found");

  products[index] = { ...products[index], ...product };
  return products[index];
}

export async function deleteProduct(id: string) {
  products = products.filter((p) => p.id !== id);
  return { success: true };
}
