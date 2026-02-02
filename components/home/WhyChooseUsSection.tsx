'use client'

import { motion } from 'framer-motion'
import { Leaf, Users, Heart } from 'lucide-react'

const features = [
  {
    icon: Leaf,
    title: 'Heritage ingredients',
    description:
      'Chai is more than a drink, it\'s a legacy. Our blend preserves authentic flavors passed down through generations, creating unforgettable moments.',
  },
  {
    icon: Users,
    title: 'Expert tea makers',
    description:
      'Creating memorable chai experiences that leave a mark on your heart. Every cup is crafted with passion and precision.',
  },
  {
    icon: Heart,
    title: 'Warm atmosphere',
    description:
      'Creating memorable experiences that warm your heart. A space where chai connects everyone through shared stories and smiles.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function WhyChooseUsSection() {
  return (
    <section className="pb-10 md:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-16 text-balance"
        >
          Why choose us?
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-start"
              >
                <div className="mb-6">
                  <Icon size={48} className="text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
