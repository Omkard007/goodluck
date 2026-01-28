'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const FEATURED_DRINKS = [
  {
    name: 'Irani Chai',
    subtitle: 'Signature blend of chai',
    price: '₹20',
    rating: 4.8,
    image: '/images/irani-chai.jpg',
  },
  {
    name: 'Bun Maska',
    subtitle: 'Butter bread combo',
    price: '₹30',
    rating: 4.9,
    image: '/images/bun-maska.jpg',
  },
  {
    name: 'Doodh Pav',
    subtitle: 'Sweet milk with pav',
    price: '₹25',
    rating: 4.7,
    image: '/images/doodh-pav.jpg',
  },
]

function DrinkCard({ item, index }: { item: (typeof FEATURED_DRINKS)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ y: -8 }}
      className="flex flex-col items-center text-center group"
    >
      {/* Circular Background with Image */}
      <div className="relative w-64 h-64 mb-8 rounded-full overflow-hidden shadow-2xl group-hover:shadow-3xl transition-shadow">
        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
      </div>

      {/* Content */}
      <h3 className="text-2xl font-serif font-bold text-foreground mb-2">{item.name}</h3>
      <p className="text-foreground/60 text-sm mb-4">{item.subtitle}</p>

      {/* Rating */}
      <div className="flex items-center justify-center gap-1 mb-4">
        {[...Array(Math.floor(item.rating))].map((_, i) => (
          <Star key={i} size={14} className="fill-accent text-accent" />
        ))}
        <span className="text-sm text-foreground/60 ml-2">{item.rating}</span>
      </div>

      {/* Price */}
      <div className="text-3xl font-serif font-bold text-primary">{item.price}</div>
    </motion.div>
  )
}

export function FeaturedDrinksSection() {
  return (
    <section className="relative px-6 md:px-12 py-20 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4">
            Featured Drinks
          </h2>
          <p className="text-lg text-foreground/70">Our most loved items</p>
        </motion.div>

        {/* Featured Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {FEATURED_DRINKS.map((item, index) => (
            <DrinkCard key={index} item={item} index={index} />
          ))}
        </div>

        {/* View More Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Link
            href="/menu"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            Explore Complete Menu
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
