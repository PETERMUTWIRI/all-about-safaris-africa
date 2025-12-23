'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Playfair_Display } from 'next/font/google';
import { ChevronDown } from 'lucide-react';

const playfair = Playfair_Display({ subsets: ['latin'] });

// ✅ ORIGINAL IMAGE URLs PRESERVED
const heroImages = [
  { src: '/images/hero-masai-mara-sunset.jpg', title: 'Golden Hour in Masai Mara', category: 'Wildlife' },
  { src: '/images/about-hero-savanna.jpg', title: 'African Savannah Vista', category: 'Landscape' },
  { src: '/images/rift-valley.jpg', title: 'Great Rift Valley', category: 'Geological Wonder' },
  { src: '/images/turkana-desert.jpg', title: 'Lake Turkana Desert', category: 'Expedition' },
  { src: '/images/stats-bg.jpg', title: 'Savannah Aerial View', category: 'Landscape' },
];

export function GalleryHeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[70vh] md:h-screen overflow-hidden bg-neutral-950">
      {/* Shuffling Background Layer */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={heroImages[currentIndex].src}
            alt={heroImages[currentIndex].title}
            fill
            priority
            className="object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h5 className="text-yellow-400 text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] mb-4 md:mb-6">
            {heroImages[currentIndex].category}
          </h5>
          <h1 className={`${playfair.className} text-4xl md:text-7xl lg:text-9xl font-bold text-white leading-tight mb-4 md:mb-8`}>
            Moments That
            <span className="block text-yellow-400">Define Africa</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-12 max-w-4xl mx-auto">
            {heroImages[currentIndex].title}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-6 md:bottom-10"
        >
          <ChevronDown className="w-8 h-8 md:w-12 md:h-12 text-yellow-400 animate-bounce" />
        </motion.div>
      </div>

      {/* Image Counter */}
      <div className="absolute top-4 md:top-6 right-4 md:right-6 bg-neutral-800/80 backdrop-blur-md border border-neutral-700 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm text-neutral-300">
        {currentIndex + 1} / {heroImages.length}
      </div>
    </section>
  );
}