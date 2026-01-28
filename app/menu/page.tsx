'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Star, Search } from 'lucide-react'
import { menuItems, categories } from '@/lib/menuData'

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
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-serif font-bold text-primary">
            Goodluck Cafe
          </Link>
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/menu" className="text-sm font-medium text-primary font-semibold">
              Menu
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/reviews" className="text-sm font-medium hover:text-primary transition-colors">
              Reviews
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-br from-secondary/10 via-background to-accent/10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-primary mb-4 text-balance">
              Our Menu
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Discover the flavors that have made Goodluck Cafe an icon for generations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Menu Section */}
      <section className="py-8 md:py-12 px-4">
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
              filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={fadeInUp}
                  whileHover={{ y: -4 }}
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
                    <button className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors text-sm">
                      Add
                    </button>
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

      {/* Info Section */}
      <section className="py-12 md:py-16 px-4 bg-card border-t border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">
              Ready to Order?
            </h2>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              Visit Goodluck Cafe and experience the warmth of authentic Irani hospitality
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Find Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-serif font-bold text-foreground mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/menu" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                    About
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-bold text-foreground mb-4">Explore</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/reviews" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-foreground/70 hover:text-primary transition-colors text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-bold text-foreground mb-4">Hours</h4>
              <p className="text-foreground/70 text-sm">Open Daily</p>
              <p className="text-foreground/70 text-sm">Morning to Evening</p>
            </div>
            <div>
              <h4 className="font-serif font-bold text-foreground mb-4">Connect</h4>
              <p className="text-foreground/70 text-sm">
                Fergusson College Rd
                <br />
                Deccan Gymkhana, Pune
              </p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center">
            <p className="text-foreground/60 text-sm">
              © {new Date().getFullYear()} Goodluck Cafe. Crafted with warmth.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
