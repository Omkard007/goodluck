'use client'


import { motion } from 'framer-motion'
import { Star, MessageSquare, Users } from 'lucide-react'
import Navbar from "../home/navbar2"
import Cta from "../home/cta"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
}

export default function ReviewsPage() {
  const reviews = [
    {
      id: 1,
      author: 'Aditi M.',
      rating: 5,
      date: '2024',
      text: 'The Irani chai here is incomparable. It\'s like a warm hug in a cup. Goodluck Cafe is not just about food, it\'s about feeling at home.',
      highlight: 'Signature Chai',
    },
    {
      id: 2,
      author: 'Rajesh P.',
      rating: 5,
      date: '2024',
      text: 'I\'ve been coming here for 20 years. Every visit is the same—warm, welcoming, and the Bun Maska is still as good as the first day I had it.',
      highlight: 'Legacy & Consistency',
    },
    {
      id: 3,
      author: 'Priya N.',
      rating: 5,
      date: '2024',
      text: 'Brought my parents here and they felt the same magic I felt as a child. That\'s what Goodluck is—a connection across generations.',
      highlight: 'Family Memories',
    },
    {
      id: 4,
      author: 'Vikram S.',
      rating: 5,
      date: '2024',
      text: 'The staff knows every regular by name. The prices are honest, the food is authentic, and the atmosphere is priceless.',
      highlight: 'Genuine Warmth',
    },
    {
      id: 5,
      author: 'Anjali K.',
      rating: 5,
      date: '2024',
      text: 'In a world of trendy cafes, Goodluck remains beautifully simple. Every item tells the story of Pune\'s food culture.',
      highlight: 'Authenticity',
    },
    {
      id: 6,
      author: 'Sanjay D.',
      rating: 5,
      date: '2024',
      text: 'A place where time slows down. Where conversations matter more than WiFi. Where you\'re not just a customer, you\'re family.',
      highlight: 'Community',
    },
    {
      id: 7,
      author: 'Meera J.',
      rating: 5,
      date: '2024',
      text: 'The Dosa is perfectly crisp, the Samosa melts in your mouth, and the chai is eternal. Goodluck Cafe is Pune\'s heartbeat.',
      highlight: 'Signature Items',
    },
    {
      id: 8,
      author: 'Arun C.',
      rating: 5,
      date: '2024',
      text: 'Decades of excellence packed into a humble café. This is what real hospitality looks like.',
      highlight: 'Excellence',
    },
  ]

  return (
    <div className="relative">
         <div className="relative bg-secondary">
         <Navbar />
      {/* Page Header */}
      <section className="py-12 md:py-16 px-4 lg:py-30 bg-secondary">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-background mb-4 text-balance">
              What People Say
            </h1>
            <p className="text-lg text-background/70 max-w-2xl mx-auto">
              Over 51,000 reviews celebrating Goodluck Cafe
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rating Summary */}
      <section className="py-12 md:py-16 px-4 bg-card border-b border-border">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <motion.div
              variants={fadeInUp}
              className="text-center p-8 bg-background rounded-lg border border-border"
            >
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={24} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-4xl font-serif font-bold text-primary mb-2">4.2</p>
              <p className="text-foreground/70">Overall Rating</p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="text-center p-8 bg-background rounded-lg border border-border"
            >
              <MessageSquare size={32} className="text-primary mx-auto mb-4" />
              <p className="text-4xl font-serif font-bold text-primary mb-2">51K+</p>
              <p className="text-foreground/70">Google Reviews</p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="text-center p-8 bg-background rounded-lg border border-border"
            >
              <Users size={32} className="text-primary mx-auto mb-4" />
              <p className="text-4xl font-serif font-bold text-primary mb-2">Decades</p>
              <p className="text-foreground/70">Of Trusted Service</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {reviews.map((review) => (
              <motion.div
                key={review.id}
                variants={fadeInUp}
                whileHover={{ y: -4 }}
                className="bg-card rounded-lg p-6 border border-border hover:shadow-lg hover:border-primary/30 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-serif font-bold text-foreground mb-1">{review.author}</h3>
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-accent/20 text-accent text-xs font-medium rounded-full">
                      <Star size={12} className="fill-current" />
                      {review.rating}.0
                    </span>
                  </div>
                  <span className="text-xs text-foreground/50">{review.date}</span>
                </div>

                <p className="text-foreground/80 leading-relaxed mb-4 italic">"{review.text}"</p>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-xs font-medium px-3 py-1 bg-primary/10 text-primary rounded-full">
                    {review.highlight}
                  </span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="fill-accent text-accent"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why We're Loved */}
      <section className="py-16 md:py-24 px-4 bg-card border-t border-border">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4 text-balance">
              The Goodluck Difference
            </h2>
            <p className="text-lg text-foreground/70">
              What makes our guests keep coming back for decades
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
                title: 'Authentic Heritage',
                description:
                  'We\'re not trying to be trendy—we\'re living our history. Every cup, every plate carries the weight and warmth of decades.',
              },
              {
                title: 'Genuine Hospitality',
                description:
                  'Your server isn\'t just taking your order; they\'re welcoming you into a space where you matter. That\'s the difference.',
              },
              {
                title: 'Honest Prices',
                description:
                  'Quality comfort food at prices that respect your wallet. We believe good food and warmth shouldn\'t be luxury.',
              },
              {
                title: 'Consistency Across Time',
                description:
                  'The Bun Maska today tastes like it did 20 years ago. The chai warms your heart the same way. That consistency is priceless.',
              },
              {
                title: 'Community First',
                description:
                  'We\'re not a transaction point; we\'re a gathering place. Where strangers become friends and every face is familiar.',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ x: 8 }}
                className="flex gap-6 p-6 bg-background rounded-lg border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      </div>
      <Cta />
    </div>
    
  )
}
