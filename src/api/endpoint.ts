import { Product } from "@/types/product";

export const getProducts = async ({ pageParam }: { pageParam: number }): Promise<Product[]> => {
  const size = 18;
  try {
    const response = await fetch("/api/products", {
      method: "GET",
    });
    const jsonData = await response.json();
    const idx = Math.max(Math.floor(Math.random() * jsonData.data.products.length) - size, 0);

    const data = jsonData.data.products.slice(idx, idx + size);

    await new Promise((resolve) => setTimeout(resolve, 250));

    return data;
  } catch (e) {
    throw e;
  }
};
