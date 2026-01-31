"use client";

import { DirectionAwareHover } from "../ui/direction-aware-hover";

interface ProductCardProps {
  imageUrl: string;
  name: string;
  description: string;
  price: string;
}

export function ProductCard({
  imageUrl,
  name,
  description,
  price,
}: ProductCardProps) {
  return (
    <div className="relative flex h-[30rem] items-center justify-center">
      <DirectionAwareHover imageUrl={imageUrl}>
        <div className="text-center">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="mt-2 text-sm">{description}</p>
          <p className="mt-1 text-base font-semibold">{price}</p>
        </div>
      </DirectionAwareHover>
    </div>
  );
}
