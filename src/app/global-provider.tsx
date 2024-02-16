"use client";

import React from "react";
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Query } from "@nestjs/common";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnMount: false,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools position="right" />
    </QueryClientProvider>
  );
};
