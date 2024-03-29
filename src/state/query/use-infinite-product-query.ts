import { useInfiniteQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "./query-key-store";
import { getProducts } from "@/api/endpoint";

export const useInfiniteProductQuery = () => {
  return useInfiniteQuery({
    queryKey: QUERY_KEYS.products.queryKey,
    queryFn: getProducts,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages, lastPageParam) => lastPageParam + 1,
  });
};
