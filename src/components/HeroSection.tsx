'use client';

import { motion } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';
import { Button } from './ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const playfair = Playfair_Display({ subsets: ['latin'] });

export function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-masai-mara-sunset.jpg"
          alt="Masai Mara Sunset"
          fill
          priority
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/20 to-transparent" />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [-10, 10, -10], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-10 text-9xl text-yellow-400/20 font-serif"
      >
        *
      </motion.div>

      <motion.div
        animate={{ y: [10, -10, 10], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, delay: 4, repeat: Infinity }}
        className="absolute bottom-20 right-10 text-9xl text-yellow-400/20 font-serif"
      >
        ✦
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          <h5 className="text-yellow-400 text-sm uppercase tracking-[0.3em] mb-6">
            Africa's Premier Safari
          </h5>
          <h1 className={`${playfair.className} text-7xl lg:text-9xl font-bold text-white leading-tight mb-8`}>
            Where Luxury
            <span className="block text-yellow-400">Meets Wild</span>
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed">
            Trusted by 50,000+ explorers. Crafting bespoke journeys across Africa's most iconic landscapes since 2009.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/packages">
              <Button className="bg-yellow-400 hover:bg-orange-500 text-neutral-900 font-bold px-10 py-6 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-2xl shadow-yellow-400/40">
                Start Your Safari
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
            </Link>
            <Link href="https://wa.me/254700064857" target="_blank">
              <Button className="border-2 border-white text-white hover:bg-white hover:text-neutral-900 font-bold px-10 py-6 rounded-full text-lg transition-all duration-300">
                Chat on WhatsApp
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-10"
        >
          <ChevronDown className="w-12 h-12 text-yellow-400 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}