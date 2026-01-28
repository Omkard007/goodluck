'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export function FeaturedChaiSection() {
  return (
    <section className="relative px-6 md:px-12 py-20 md:py-32 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Featured Item Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-full aspect-square max-w-sm rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/featured-chai-cup.jpg"
                alt="Featured Irani Chai"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary font-serif italic text-lg mb-4">Our Heritage</p>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
              Your <span className="text-primary">Chai Wait</span>
              <br />
              Just In Time
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-8">
              Since the mid-20th century, Goodluck Cafe has been serving the perfect cup of chai to
              students, artists, and everyday folks. Our recipes are guarded secrets passed through
              generations, ensuring every sip tastes like home. This is not just tea—it's a tradition
              you can taste.
            </p>
            <Link
              href="/about"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Taste Now
            </Link>
          </motion.div>
        </div>

        {/* Wavy Divider */}
        <div className="absolute -bottom-1 left-0 right-0 h-20 z-20">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0,50 Q300,10 600,50 T1200,50 L1200,120 L0,120 Z"
              fill="currentColor"
              className="text-background"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
