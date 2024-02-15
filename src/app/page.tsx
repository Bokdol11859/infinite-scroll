"use client";

import { getProducts } from "@/api/endpoint";
import { Card } from "@/components/card";
import { Product } from "@/types/product";
import React from "react";

export default function Home() {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchMoreProducts = async () => {
    const data = await getProducts(12);
    setProducts((prev) => {
      return [...prev, ...data];
    });
    setIsLoading(false);
  };

  React.useEffect(() => {
    fetchMoreProducts();
  }, []);

  if (isLoading) return null;

  return (
    <div className="max-w-[960px] mx-auto">
      <div className="grid grid-cols-3 gap-4 mx-auto w-full py-8">
        {products?.map((product) => (
          <Card data={product} key={product.id} />
        ))}
      </div>
      {/* <button onClick={fetchMoreProducts}>fetch</button> */}
    </div>
  );
}
