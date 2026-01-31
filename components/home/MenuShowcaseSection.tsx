'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ProductCard } from './ProductCard'


const menuItems = {
  classics: [
    {
      imageUrl: '/images/irani-chai.jpg',
      name: 'Irani Chai',
      description: 'The signature blend with rich spiced flavors',
      price: '₹20',
    },
    {
      imageUrl: '/images/bun-maska.jpg',
      name: 'Bun Maska',
      description: 'Warm bun with creamy melted butter',
      price: '₹30',
    },
    {
      imageUrl: '/images/doodh-pav.jpg',
      name: 'Doodh Pav',
      description: 'Sweet creamy milk with soft bread',
      price: '₹25',
    },
  ],
  seasonal: [
    {
      imageUrl: '/images/irani-chai.jpg',
      name: 'Masala Chai',
      description: 'Chai with extra spices and warmth',
      price: '₹25',
    },
    {
      imageUrl: '/images/bun-maska.jpg',
      name: 'Toasted Bun',
      description: 'Extra crispy bun with golden butter',
      price: '₹35',
    },
    {
      imageUrl: '/images/featured-chai-cup.jpg',
      name: 'Chai Latte',
      description: 'Rich chai with frothy milk on top',
      price: '₹40',
    },
  ],
  specialty: [
    {
      imageUrl: '/images/featured-chai-cup.jpg',
      name: 'Royal Chai',
      description: 'Premium blend with cardamom and cream',
      price: '₹50',
    },
    {
      imageUrl: '/images/doodh-pav.jpg',
      name: 'Badam Milk',
      description: 'Almond milk with special spices',
      price: '₹45',
    },
    {
      imageUrl: '/images/irani-chai.jpg',
      name: 'Heritage Blend',
      description: 'Traditional recipe from our archives',
      price: '₹55',
    },
  ],
}

type Category = 'classics' | 'seasonal' | 'specialty'

export function MenuShowcaseSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('classics')
  const [scrollPosition, setScrollPosition] = useState(0)

  const categories: { id: Category; label: string }[] = [
    { id: 'classics', label: 'Classics' },
    { id: 'seasonal', label: 'Seasonal' },
    { id: 'specialty', label: 'Specialty' },
  ]

  const items = menuItems[activeCategory]

  const scroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('menu-carousel')
    if (container) {
      const scrollAmount = 400
      const newPosition = direction === 'left' ? scrollPosition - scrollAmount : scrollPosition + scrollAmount
      container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' })
      setScrollPosition(newPosition)
    }
  }

  return (
    <section className="py-2 md:py-10 px-4 sm:px-6  bg-secondary">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-muted">Our mission</h2>

          {/* Tabs */}
          <div className="flex gap-8 ">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`font-serif font-semibold text-lg transition-colors pb-2 border-b-2 ${
                  activeCategory === category.id
                    ? 'text-muted border-accent'
                    : 'text-muted/60 border-transparent hover:text-muted/80'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Carousel */}
        

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            id="menu-carousel"
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 scrollbar-hide"
          >
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="mx-auto"
              >
                <ProductCard {...item} />
              </motion.div>
            ))}
          </motion.div>

        </div>
    </section>
  )
}
