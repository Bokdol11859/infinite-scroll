import { Product } from "@/types/product";
import Image from "next/image";
import React from "react";
import {
  Card as CardPrimitive,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const dummyUrl = "https://i.imgur.com/cSytoSD.jpeg";

export interface CardProps {
  data: Product;
}

export const Card = React.memo(({ data }: CardProps) => {
  const src = React.useMemo(
    () => (data.images[0].startsWith("http") ? new URL(data.images[0]) : new URL(dummyUrl)),
    [data.images]
  );

  return (
    <CardPrimitive className="flex flex-col items-center justify-center">
      <CardHeader>
        <CardTitle>{data.title.substring(0, 20)}</CardTitle>
        <CardDescription>{data.description.substring(0, 60)}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image src={src.toString()} alt={data.description} width={200} height={200} />
      </CardContent>
    </CardPrimitive>
  );
});

Card.displayName = "Card";
