'use client'

import { motion } from 'framer-motion'

const blends = [
  {
    name: 'Heritage Blend',
    description: 'Warm spice, earthy notes',
  },
  {
    name: 'Golden Roast',
    description: 'Smooth, rich, comforting',
  },
]

export function SpecialtiesSection() {
  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-secondary/80">
      <div className="absolute inset-0 bg-black/20"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif font-bold text-muted mb-8"
        >
          Our chai blends
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {blends.map((blend, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-serif font-bold text-muted mb-2">{blend.name}</h3>
              <p className="text-muted/80">{blend.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
