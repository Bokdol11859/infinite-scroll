import { Product } from "@/types/product";

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch("/api/products", {
      method: "GET",
    }).then((res) => res.json());

    return response;
  } catch (e) {
    throw e;
  }
};
