"use client";

import { Card, SkeletonCard } from "@/components/card";
import { useInfiniteScroll } from "@/hooks/use-infinite-scroll";
import { useInfiniteProductQuery } from "@/state/query/use-infinite-product-query";

import React from "react";

export default function Home() {
  const { data, isFetching, fetchNextPage } = useInfiniteProductQuery();
  const intersectorRef = useInfiniteScroll(fetchNextPage, 0.3);

  const products = React.useMemo(() => {
    return data?.pages.flatMap((page) => page.map((product) => product)) ?? [];
  }, [data?.pages]);

  return (
    <div className="max-w-[960px] mx-auto">
      <div className="grid grid-cols-3 gap-4 mx-auto w-full py-8">
        {products.map((product, idx) => {
          return <Card data={product} key={`${product.id}-${idx}`} />;
        })}
        {isFetching &&
          Array(12)
            .fill(0)
            .map((_, idx) => <SkeletonCard key={idx} />)}
      </div>
      <div className="w-full h-2" ref={intersectorRef} />
    </div>
  );
}
