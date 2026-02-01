"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/moving-border";
import { useRouter } from "next/navigation";
import { PulsatingButton } from "../ui/pulsating-button";
import { ShimmerButton } from "../ui/shimmer-button";

export default function CtaPage() {
  const router = useRouter();

  return (
    <section className="py-16 md:py-24 px-4 bg-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-background mb-4 drop-shadow-xs drop-shadow-black">
            Experience the Goodluck Magic
          </h2>

          <p className="text-lg text-background/70 mb-8 max-w-2xl mx-auto drop-shadow-xs drop-shadow-neutral-900">
            Join thousands of guests who have made Goodluck Cafe part of their
            story. Visit us and become part of ours.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            {/* <Button
              onClick={() => router.push("/menu")}

            >
              
            </Button> */}
            <ShimmerButton
              className="shadow-2xl px-10"
              onClick={() => router.push("/menu")}
            >
              <span className="text-center text-sm leading-none font-medium tracking-tight whitespace-pre-wrap text-black lg:text-lg dark:from-white dark:to-slate-900/10">
                Menu
              </span>
            </ShimmerButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
