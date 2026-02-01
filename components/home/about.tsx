"use client";

import { motion } from "framer-motion";
import { Heart, BookOpen, Users, Coffee } from "lucide-react";
import Navbar from "../home/navbar2"
import Cta from "../home/cta";
const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

export default function AboutPage() {
    return (
        <div className="relative">
             <div className="relative bg-secondary">
             <Navbar />
            {/* Page Header */}
            <section className="py-12 md:py-16 px-4 bg-secondary">
                <div className="max-w-6xl mx-auto text-center min-h-[40vh] flex items-center justify-center ">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-serif font-bold text-background mb-4 drop-shadow-xs drop-shadow-black">
                            Our Story
                        </h1>
                        <p className="text-lg text-background/70 max-w-2xl mx-auto">
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
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8">
                            An Icon of Pune Culture
                        </h2>
                        <div className="space-y-6 text-lg text-foreground/80">
                            <p>
                                Goodluck Cafe stands as a living testament to Pune's rich cultural
                                heritage, remaining steadfastly true to its roots.
                            </p>
                            <p>
                                It has been a sanctuary for students, artists, and families for
                                generations.
                            </p>
                            <p>
                                Every visit feels like coming home.
                            </p>
                        </div>
                    </motion.div>

                    {/* Values */}
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
                                title: "Warmth & Hospitality",
                                description: "Every visitor is treated as family.",
                            },
                            {
                                icon: BookOpen,
                                title: "Heritage & Authenticity",
                                description: "We honor our past with sincerity.",
                            },
                            {
                                icon: Users,
                                title: "Community & Connection",
                                description: "A gathering place for everyone.",
                            },
                            {
                                icon: Coffee,
                                title: "Quality & Consistency",
                                description: "Tradition in every cup.",
                            },
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className="p-8 bg-card rounded-lg border border-border"
                            >
                                <value.icon className="w-10 h-10 text-primary mb-4" />
                                <h3 className="font-serif font-bold text-xl mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-foreground/70">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                    {/* ================= TIMELINE ================= */}
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
                                        'Goodluck Cafe opens its doors as an Irani café, introducing Pune to chai culture.',
                                },
                                {
                                    era: 'The Golden Years',
                                    title: 'A Place for All',
                                    description:
                                        'Students, artists, and thinkers make Goodluck their second home.',
                                },
                                {
                                    era: 'Through the Decades',
                                    title: 'Steady & Reliable',
                                    description:
                                        'While Pune evolves, Goodluck remains unchanged in spirit.',
                                },
                                {
                                    era: 'Today & Beyond',
                                    title: 'A Living Legacy',
                                    description:
                                        'Over 51,000 Google reviews celebrate generations of memories.',
                                },
                            ].map((milestone, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ x: -50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative border-l-4 border-primary pl-8 py-4"
                                >
                                    <div className="absolute left-[-12px] top-6 w-6 h-6 bg-primary rounded-full border-4 border-background" />
                                    <p className="text-sm font-medium text-accent mb-2">
                                        {milestone.era}
                                    </p>
                                    <h4 className="font-serif font-bold text-xl text-primary mb-2">
                                        {milestone.title}
                                    </h4>
                                    <p className="text-foreground/70 leading-relaxed">
                                        {milestone.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* ================= WHY CHOOSE US ================= */}
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
                                'Iconic Bun Maska breakfast',
                                'Perfect Irani Chai',
                                'Staff that knows your name',
                                'Affordable prices',
                                'Atmosphere rich with history',
                                'Memories created daily',
                                'Authentic South Indian dishes',
                                'Genuine hospitality over trends',
                            ].map((reason, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ x: -20, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                                        <div className="w-2 h-2 rounded-full bg-primary" />
                                    </div>
                                    <p className="text-foreground/80 leading-relaxed">{reason}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
            </div>
            <Cta />
        </div>
    )
}
