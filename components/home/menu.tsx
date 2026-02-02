'use client'

import { useState, useMemo } from 'react'
import Cta from "../home/cta2"
import { motion } from 'framer-motion'
import { Star, Search } from 'lucide-react'
import { menuItems, categories } from '@/lib/menuData'
import  Navbar  from '@/components/home/Navbar'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
}

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedType, setSelectedType] = useState<'all' | 'veg' | 'egg' | 'non-veg'>('all')

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory = item.category === selectedCategory
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesType = selectedType === 'all' || item.type === selectedType

      return matchesCategory && matchesSearch && matchesType
    })
  }, [selectedCategory, searchQuery, selectedType])

  const typeFilters = [
    { label: 'All', value: 'all' },
    { label: 'Vegetarian', value: 'veg' },
    { label: 'Egg', value: 'egg' },
    { label: 'Non-Veg', value: 'non-veg' },
  ]

  return (
    <div className="relative inset-0 z-0">
        <div className="relative bg-secondary ">
      <Navbar />

      {/* Page Header */}
      <section className="py-12 md:py-16 px-4 bg-secondary">
        <div className="max-w-6xl mx-auto text-center min-h-[40vh] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-background mb-4 text-balance drop-shadow-xs drop-shadow-black">
              Our Menu
            </h1>
            <p className="text-lg text-background/70 max-w-2xl mx-auto">
              Discover the flavors that have made Goodluck Cafe an icon for generations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Menu Section */}
      <section className="py-8 md:py-12 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-8"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-foreground/40" />
              <input
                type="text"
                placeholder="Search menu items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder:text-foreground/40"
              />
            </div>
          </motion.div>

          {/* Type Filter */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-8 flex flex-wrap gap-3"
          >
            {typeFilters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setSelectedType(filter.value as any)}
                className={`px-4 py-2 rounded-full font-medium transition-all text-sm ${
                  selectedType === filter.value
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card border border-border text-foreground hover:border-primary'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8 overflow-x-auto"
          >
            <div className="flex gap-2 pb-4 border-b border-border">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 font-medium whitespace-nowrap transition-all text-sm rounded-t-lg border-b-2 ${
                    selectedCategory === category
                      ? 'border-primary text-primary'
                      : 'border-transparent text-foreground/60 hover:text-foreground'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Menu Items Grid */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.length > 0 ? (
              filteredItems.map((item,idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * idx ,duration:0.3}}
                  className="bg-card rounded-lg p-6 border border-border hover:shadow-lg hover:border-primary/30 transition-all"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-serif font-bold text-lg text-foreground">
                          {item.name}
                        </h3>
                        {item.popular && (
                          <span className="inline-flex items-center gap-1 px-2 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full">
                            <Star size={12} className="fill-current" />
                            Popular
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium px-2 py-1 bg-muted text-muted-foreground rounded capitalize">
                          {item.type === 'non-veg' ? 'Non-Veg' : item.type === 'egg' ? 'Egg' : 'Veg'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {item.description && (
                    <p className="text-sm text-foreground/70 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                  )}

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="text-2xl font-serif font-bold text-primary">₹{item.price}</div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-12"
              >
                <p className="text-lg text-foreground/60 mb-4">
                  No items found matching your search
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedType('all')
                  }}
                  className="text-primary hover:underline font-medium"
                >
                  Clear filters
                </button>
              </motion.div>
            )}
          </motion.div>

          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 text-center"
          >
            <p className="text-foreground/70">
              Showing {filteredItems.length} of {menuItems.length} items
            </p>
          </motion.div>
        </div>
      </section>
      </div>
      <Cta />
   </div>
  )
}
