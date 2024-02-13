"use client";

import { getProducts } from "@/api/endpoint";
import React from "react";

export default function Home() {
  React.useEffect(() => {
    (async () => {
      const data = await getProducts();
      console.log(data);
    })();
  }, []);

  return <div></div>;
}
