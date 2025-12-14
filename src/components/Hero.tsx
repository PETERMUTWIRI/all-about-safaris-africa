'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';
import { ChevronDown, Calendar, MapPin } from 'lucide-react';

const playfair = Playfair_Display({ subsets: ['latin'] });

export function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section 
      className="relative h-64 overflow-hidden"
      style={{ opacity }}
    >
      {/* Background image with subtle Ken Burns effect */}
      <motion.div
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
        style={{ y }}
      >
        <Image
          src="/hero.jpg" // Use a wide, cinematic landscape
          alt="African savanna at golden hour"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/20 to-transparent" />
      </motion.div>

      {/* Loading spinner (replaces jQuery spinner) */}
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 flex items-center justify-center bg-neutral-900 z-50"
        >
          <div className="w-16 h-16 rounded-full border-4 border-white/20 border-t-savanna-gold animate-spin" />
        </motion.div>
      )}

      {/* Hero content - centered like a movie title */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center max-w-5xl"
        >
          <motion.h1 
            className={`${playfair.className} text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 tracking-wide`}
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, duration: 1.2, ease: "easeOut" }}
          >
            Where Your Journey
            <motion.span
              className="block text-savanna-gold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1.5 }}
            >
              Becomes Legend
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-neutral-200 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            Intimate safaris crafted for those who seek more than a vacation—
            for those who crave a transformation.
          </motion.p>

          {/* CTA Group - feels like exclusive invitations */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, type: "spring", stiffness: 80 }}
          >
            <button className="group relative px-10 py-4 bg-savanna-gold hover:bg-earth-ochre text-neutral-900 font-bold rounded-full text-lg transition-all duration-300 shadow-2xl hover:shadow-savanna-gold/50">
              <span className="relative z-10">Explore Journeys →</span>
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </button>

            <button className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-neutral-900 rounded-full font-semibold transition-all duration-300">
              Watch Film <span className="ml-2">▶</span>
            </button>
          </motion.div>

          {/* Trust indicators - subtle, like a luxury watch */}
          <motion.div
            className="absolute bottom-8 left-0 right-0 flex justify-center gap-12 text-white/80 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 1 }}
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Since 2014</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Nairobi, Kenya</span>
            </div>
            <div className="flex items-center gap-2">
              <span>⭐ 4.9/5</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator - bounces like a heartbeat */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </motion.section>
  );
}