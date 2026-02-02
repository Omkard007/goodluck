'use client'
import  Navbar  from '@/components/home/Navbar'
import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, Mail } from 'lucide-react'
import Cta from "../home/cta"

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
        <div className="relative inset-0 z-0">
            <div className="relative bg-secondary">
            <Navbar />
            
            {/* Page Header */}
            <section className=" py-12 md:py-16 px-4 bg-secondary">
                <div className="max-w-6xl mx-auto text-center min-h-[40vh] flex items-center justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-serif font-bold text-background mb-4 text-balance drop-shadow-xs drop-shadow-black">
                            Visit Us
                        </h1>
                        <p className="text-lg text-background/70 max-w-2xl mx-auto">
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
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.256376094627!2d73.8414923!3d18.517313100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf87fad7cce1%3A0x782ac3a113379b17!2sCafe%20Goodluck!5e0!3m2!1sen!2sin!4v1769936389613!5m2!1sen!2sin" width="600" height="450" className="w-full h-full" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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

            {/* Contact Form */}
            </div>
            <Cta />
        </div>
    )
}


