'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface ProductCardProps {
  image: string
  name: string
  description: string
  price: string
}

export function ProductCard({ image, name, description, price }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-foreground/5 border border-foreground/10 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
    >
      {/* Image container */}
      <div className="relative h-64 overflow-hidden bg-secondary">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-serif font-bold text-foreground mb-2">{name}</h3>
        <p className="text-foreground/70 text-sm mb-6">{description}</p>

        {/* Footer with price and button */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-serif font-bold text-foreground">{price}</span>
          <button className="px-6 py-2 bg-accent text-foreground font-serif font-semibold rounded-full hover:bg-accent/90 transition-colors">
            Add to cart
          </button>
        </div>
      </div>
    </motion.div>
  )
}
