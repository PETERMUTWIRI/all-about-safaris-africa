'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image'; // ✅ FIXED
import { Playfair_Display } from 'next/font/google';
import { MapPin, ArrowRight } from 'lucide-react'; // ✅ FIXED

const playfair = Playfair_Display({ subsets: ['latin'] });

export function JourneyOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const journeySteps = [
    {
      number: "01",
      title: "Dream",
      desc: "Share your vision. We listen like the savanna listens to the wind.",
    },
    {
      number: "02",
      title: "Design",
      desc: "Craft a bespoke itinerary as unique as your fingerprint.",
    },
    {
      number: "03",
      title: "Embark",
      desc: "Step into a story written by the land and lived by you.",
    },
  ];

  return (
    <section 
      ref={ref}
      className="relative py-32 bg-gradient-to-b from-neutral-900 to-neutral-800 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="container mx-auto px-4"
      >
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Text Section */}
          <div className="space-y-8">
            <motion.h5
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-[var(--savanna-gold)] text-sm font-semibold tracking-widest uppercase mb-4"
            >
              Your Journey, Unscripted
            </motion.h5>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className={`${playfair.className} text-5xl lg:text-7xl font-bold text-white leading-tight`}
            >
              We Don't Do
              <span className="block text-[var(--savanna-gold)]">Tourist Traps</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="text-neutral-300 text-lg leading-relaxed"
            >
              Every itinerary is a blank canvas. We paint with the colors of your curiosity—whether that's tracking leopards at dawn or dining under a galaxy few have seen.
            </motion.p>

            {/* Journey steps */}
            <motion.div
              variants={{ animate: { transition: { staggerChildren: 0.2 } } }}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              className="space-y-6 mt-12"
            >
              {journeySteps.map((step, i) => (
                <motion.div
                  key={i}
                  variants={{
                    initial: { opacity: 0, x: -30 },
                    animate: { opacity: 1, x: 0 }
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex gap-6 items-start group"
                >
                  <div className="text-5xl font-bold text-[var(--savanna-gold)]/20 group-hover:text-[var(--savanna-gold)] transition-colors duration-300">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[var(--savanna-gold)] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-neutral-400">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.8, duration: 1 }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/lion.jpg"
                alt="Lion at sunset"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 to-transparent" />
            </div>
            
            {/* Floating stat card */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 bg-[var(--savanna-gold)] p-6 rounded-2xl shadow-2xl"
            >
              <p className="text-neutral-900 font-bold text-2xl">500+</p>
              <p className="text-neutral-700 text-sm">Private Safaris</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}