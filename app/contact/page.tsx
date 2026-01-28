'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, Mail } from 'lucide-react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

export default function ContactPage() {
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
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/reviews" className="text-sm font-medium hover:text-primary transition-colors">
              Reviews
            </Link>
            <Link href="/contact" className="text-sm font-medium text-primary font-semibold">
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
              Visit Us
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Fergusson College Rd, near Goodluck Chowk, Deccan Gymkhana, Pune
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 md:py-16 px-4 bg-background">
        <div className="max-w-6xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-lg overflow-hidden border border-border h-96 md:h-[500px] shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.0256252577356!2d73.84127532346896!3d18.534893267289046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0c7c7c7c7c7%3A0x0!2sGoodluck%20Cafe!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24 px-4 bg-card border-b border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <motion.div variants={fadeInUp} className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-foreground mb-2">
                  Location
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Fergusson College Rd,
                  <br />
                  near Goodluck Chowk,
                  <br />
                  Deccan Gymkhana,
                  <br />
                  Pune, Maharashtra 411004
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Clock className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-foreground mb-2">
                  Hours
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Open Daily
                  <br />
                  Morning to Evening
                  <br />
                  <span className="text-sm text-foreground/60">(Exact hours vary by season)</span>
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Phone className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-foreground mb-2">
                  Phone
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Call us to make a reservation
                  <br />
                  or get more information
                  <br />
                  <span className="text-sm text-foreground/60">(Check Google Maps for current number)</span>
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Mail className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-foreground mb-2">
                  Find Us
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Search "Goodluck Cafe Pune"
                  <br />
                  on Google Maps for directions
                  <br />
                  and customer reviews
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Directions Guide */}
      <section className="py-16 md:py-24 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4 text-balance">
              How to Find Us
            </h2>
            <p className="text-lg text-foreground/70">
              Goodluck Cafe is located in the heart of Deccan Gymkhana, one of Pune's most vibrant neighborhoods
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-6"
          >
            {[
              {
                title: 'By Taxi/Uber',
                description:
                  'Search for "Goodluck Cafe, Fergusson College Rd, Deccan Gymkhana" on your ride-sharing app. The café is easily recognizable by the historic storefront.',
              },
              {
                title: 'By Public Transport',
                description:
                  'Deccan Gymkhana is well-connected by PMPML buses. You can reach the area from Central Bus Station or Railway Station. Ask for Goodluck Chowk once you\'re nearby.',
              },
              {
                title: 'By Personal Vehicle',
                description:
                  'Parking is available nearby. The café is located near the iconic Goodluck Chowk, which is easy to find once you\'re in the area. Google Maps will guide you directly.',
              },
              {
                title: 'Best Time to Visit',
                description:
                  'Visit us in the early morning for the freshest Bun Maska and the most relaxed atmosphere. Evenings are perfect for unwinding with a warm Irani Chai.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ x: 8 }}
                className="p-6 bg-card rounded-lg border border-border hover:border-primary/30 transition-colors"
              >
                <h3 className="font-serif font-bold text-lg text-foreground mb-3">{item.title}</h3>
                <p className="text-foreground/80 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Rating Section */}
      <section className="py-16 md:py-24 px-4 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              Rated 4.2/5 ⭐
            </h2>
            <p className="text-lg text-foreground/70 mb-8">
              Over 51,000 Google reviews from guests who have experienced the magic of Goodluck Cafe
            </p>
            <a
              href="https://www.google.com/search?q=Goodluck+Cafe+Pune"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Read Reviews on Google
            </a>
          </motion.div>
        </div>
      </section>

      {/* Nearby Attractions */}
      <section className="py-16 md:py-24 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Explore Deccan Gymkhana
            </h2>
            <p className="text-lg text-foreground/70">
              While you're in the area, visit these iconic landmarks
            </p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              {
                name: 'Aga Khan Palace',
                description: 'Historic palace complex with beautiful gardens, a must-visit heritage site',
              },
              {
                name: 'Fergusson College',
                description: 'One of Pune\'s most prestigious educational institutions with historical significance',
              },
              {
                name: 'Sarasbaug',
                description: 'Historic locality known for temples, museums, and cultural heritage',
              },
              {
                name: 'Peshwe Park',
                description: 'Scenic green space perfect for morning walks and relaxation',
              },
            ].map((place, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="p-6 bg-card rounded-lg border border-border hover:border-primary/30 transition-colors"
              >
                <h3 className="font-serif font-bold text-lg text-foreground mb-2">{place.name}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{place.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Ready to Visit?
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Step into Goodluck Cafe and experience the warmth that has made us an icon for generations
            </p>
            <Link
              href="/menu"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              View Menu
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
