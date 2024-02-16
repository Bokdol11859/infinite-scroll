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
  return (
    <CardPrimitive className="flex flex-col items-center justify-center h-[400px]">
      <CardHeader className="flex flex-col items-start justify-center w-full">
        <CardTitle className="flex items-center justify-between w-full">
          <p>{data.title.substring(0, 20)}</p>
          <p>${data.price}</p>
        </CardTitle>
        <CardDescription>{data.description.substring(0, 60)}</CardDescription>
      </CardHeader>
      <CardContent>
        <Image src={dummyUrl} alt={data.description} width={260} height={260} className="w-full" />
      </CardContent>
    </CardPrimitive>
  );
});

Card.displayName = "Card";

export const SkeletonCard = () => {
  return (
    <CardPrimitive className="flex flex-col items-center justify-center h-[400px]">
      <CardHeader className="flex flex-col items-start justify-center w-full max-h-[110px]">
        <CardTitle className="flex items-center justify-between w-full">
          <div className="w-full rounded-sm bg-slate-200 animate-pulse h-5" />
        </CardTitle>

        <div className="w-full rounded-sm bg-slate-200 animate-pulse h-5" />
        <div className="w-1/2 rounded-sm bg-slate-200 animate-pulse h-5" />
      </CardHeader>
      <CardContent className="w-full">
        <div className="w-[260px] h-auto aspect-square rounded-sm bg-slate-200 animate-pulse" />
      </CardContent>
    </CardPrimitive>
  );
};
