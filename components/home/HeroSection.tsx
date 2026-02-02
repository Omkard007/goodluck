'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export function HeroSection() {
  return (
    <section className=" h-screen flex items-center justify-center overflow-hidden">
     
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0 ">
        <Image
          src="/images/hero-chai-pour.jpg"
          alt="Hero background - Chai brewing"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-xs"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-8 drop-shadow-xl drop-shadow-black/50">
              Steeped with warmth.
              <br />
              Inspired by Goodluck
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Link
                href="/menu"
                className="inline-block px-8 py-3 bg-accent text-foreground font-serif font-semibold rounded-full hover:bg-accent/90 transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              >
                Order now
              </Link>
            </motion.div>
          </motion.div>

          {/* Right side - Featured Chai Cup Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative h-96 hidden md:flex items-center justify-center "
          >
            <div className="relative w-full max-w-md h-full ">
              <Image
                src="/images/featured-chai-cup.jpg"
                alt="Featured Chai Cup"
                fill
                className="object-cover drop-shadow-md drop-shadow-black/50 rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
