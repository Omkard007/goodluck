'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Heart, BookOpen, Users, Coffee } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

export default function AboutPage() {
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
            <Link href="/menu" className="text-sm font-medium hover:text-primary transition-colors">
              Menu
            </Link>
            <Link href="/about" className="text-sm font-medium text-primary font-semibold">
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
              Our Story
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Decades of heritage, warmth, and memories at Goodluck Cafe
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 text-balance">
              An Icon of Pune Culture
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-foreground/80">
              <p>
                Goodluck Cafe stands as a living testament to Pune's rich cultural heritage. Established
                in the mid-20th century, this iconic institution has witnessed the evolution of the city
                while remaining steadfastly true to its roots and values. It is not a modern luxury
                café—it is a historic space that has earned its revered place through authenticity,
                consistency, and genuine warmth.
              </p>
              <p>
                For decades, Goodluck Cafe has been more than just a place to grab a cup of tea or a
                bite to eat. It has been a sanctuary where students gathered to discuss ideas, where
                artists found inspiration, where business deals were sealed over conversations, and where
                families created memories that span generations.
              </p>
              <p>
                The café reflects the spirit of Pune itself—intellectual, creative, welcoming, and
                deeply human. Every corner tells a story, every regular knows another regular's name,
                and every visit feels like coming home.
              </p>
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16"
          >
            {[
              {
                icon: Heart,
                title: 'Warmth & Hospitality',
                description:
                  'Every visitor is treated as family. Our staff remembers your name, your favorite order, your stories.',
              },
              {
                icon: BookOpen,
                title: 'Heritage & Authenticity',
                description:
                  'We honor our past while maintaining the simplicity and genuineness that defines Goodluck.',
              },
              {
                icon: Users,
                title: 'Community & Connection',
                description:
                  'A gathering place where people from all walks of life come together over shared moments.',
              },
              {
                icon: Coffee,
                title: 'Quality & Consistency',
                description:
                  'From our legendary Irani Chai to Bun Maska, every item is crafted with care and tradition.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-8 bg-card rounded-lg border border-border hover:border-primary/30 transition-colors"
              >
                <value.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-serif font-bold text-xl text-foreground mb-3">{value.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Legacy Timeline */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="my-16"
          >
            <h3 className="text-3xl font-serif font-bold text-primary mb-10 text-center">
              Our Journey
            </h3>
            <div className="space-y-8">
              {[
                {
                  era: 'Mid-20th Century',
                  title: 'The Beginning',
                  description:
                    'Goodluck Cafe opens its doors as an Irani café, introducing Pune to authentic chai culture and comfort food.',
                },
                {
                  era: 'The Golden Years',
                  title: 'A Place for All',
                  description:
                    'Students, artists, intellectuals, and everyday people discover Goodluck as their sanctuary. The café becomes woven into the cultural fabric of Deccan Gymkhana.',
                },
                {
                  era: 'Through the Decades',
                  title: 'Steady & Reliable',
                  description:
                    'While Pune transforms around it, Goodluck remains unchanged—a constant source of warmth, tradition, and genuine hospitality for millions.',
                },
                {
                  era: 'Today & Beyond',
                  title: 'A Living Legacy',
                  description:
                    'Goodluck Cafe continues to welcome new generations while honoring the memories and stories of those who came before. Over 51,000 Google reviews celebrate this legacy.',
                },
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  whileInView={{ x: 0, opacity: 1 }}
                  initial={{ x: -50, opacity: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-l-4 border-primary pl-8 py-4 relative"
                >
                  <div className="absolute left-[-12px] top-6 w-6 h-6 bg-primary rounded-full border-4 border-background"></div>
                  <p className="text-sm font-medium text-accent mb-2">{milestone.era}</p>
                  <h4 className="font-serif font-bold text-xl text-primary mb-2">{milestone.title}</h4>
                  <p className="text-foreground/70 leading-relaxed">{milestone.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-card rounded-lg p-8 md:p-12 border border-border my-16"
          >
            <h3 className="text-3xl font-serif font-bold text-primary mb-6 text-center">
              Why Pune Loves Goodluck
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Iconic Bun Maska that defines comfort breakfast',
                'The perfect Irani Chai that tastes like home',
                'Staff that knows your name and your story',
                'Prices that respect your wallet',
                'An atmosphere thick with history and warmth',
                'A place where memories are created daily',
                'Authentic South Indian selections',
                'Genuine hospitality over trendy service',
              ].map((reason, index) => (
                <motion.div
                  key={index}
                  whileInView={{ x: 0, opacity: 1 }}
                  initial={{ x: -20, opacity: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">{reason}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-16"
          >
            <h3 className="text-3xl font-serif font-bold text-primary mb-4">
              Become Part of Our Story
            </h3>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Visit Goodluck Cafe and experience the warmth, heritage, and genuine hospitality that
              has made us an icon for generations.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Find Us & Visit
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
