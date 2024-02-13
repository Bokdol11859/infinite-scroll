import { Product } from "@/types/product";

export const getProducts = async (size: number): Promise<Product[]> => {
  try {
    const response = await fetch("/api/products", {
      method: "GET",
    });
    const jsonData = await response.json();
    const idx = Math.max(Math.floor(Math.random() * jsonData.data.length) - size, 0);

    const data = jsonData.data.slice(idx, idx + size);

    return data;
  } catch (e) {
    throw e;
  }
};
