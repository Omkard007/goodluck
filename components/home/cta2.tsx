"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/moving-border";
import { useRouter } from "next/navigation";

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
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-background mb-4">
          Ready to Order?
          </h2>

          <p className="text-lg text-background/70 mb-8 max-w-2xl mx-auto">
          Visit Goodluck Cafe and experience the warmth of authentic Irani hospitality
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              onClick={() => router.push("/contact")}
              borderRadius="1.75rem"
              className="  border-b-5 border-t-0 border-background/50 text-black hover:text-primary-foreground rounded-lg  font-medium text-xl cursor-pointer"
            >
              Find us
            </Button>

            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
