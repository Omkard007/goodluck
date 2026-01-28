'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export function FooterCTA() {
  return (
    <section className="relative px-6 md:px-12 py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
            Ready for your chai experience?
          </h2>
          <p className="text-lg text-foreground/70 mb-8">
            Visit Goodluck Cafe and taste the legacy. Located at Deccan Gymkhana, Pune.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/contact"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Get Directions
            </Link>
            <Link
              href="/menu"
              className="px-8 py-3 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary/5 transition-colors"
            >
              View Full Menu
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
