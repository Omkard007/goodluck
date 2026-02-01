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
    <div className="relative flex w-full aspect-square items-center justify-center p-4">
      <DirectionAwareHover imageUrl={imageUrl}>
        <div className="text-center">
          <h3 className="text-lg sm:text-xl font-bold">{name}</h3>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm">{description}</p>
          <p className="mt-1 text-sm sm:text-base font-semibold">{price}</p>
        </div>
      </DirectionAwareHover>
    </div>
  );
}
