"use client";

import { getProducts } from "@/api/endpoint";
import { Product } from "@/types/product";
import React from "react";

export default function Home() {
  const [products, setProducts] = React.useState<Product[]>([]);

  const fetchMoreProducts = async () => {
    const data = await getProducts(10);
    setProducts((prev) => {
      return [...prev, ...data];
    });
  };

  return (
    <div>
      <div>
        {products.map((product, idx) => (
          <div key={`${product.id}-${idx}`}>{product.title}</div>
        ))}
      </div>
      <button onClick={fetchMoreProducts}>fetch</button>
    </div>
  );
}
