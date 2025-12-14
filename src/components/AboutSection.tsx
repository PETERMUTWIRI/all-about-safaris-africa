'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { Playfair_Display } from 'next/font/google';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const playfair = Playfair_Display({ subsets: ['latin'] });

const features = [
  'First Class Services',
  'Handpicked Hotels',
  'Premium Accommodations',
  'Latest Model Vehicles',
  '150+ Premium City Tours',
  '24/7 Service',
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section 
      ref={ref}
      className="relative py-32 bg-gradient-to-b from-neutral-900 to-neutral-800 overflow-hidden"
    >
      {/* Floating acacia silhouettes */}
      <motion.div
        animate={{ y: [-20, 20, -20], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-10 left-10 w-32 h-32 bg-[var(--acacia-green)]/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [20, -20, 20], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 12, delay: 3, repeat: Infinity }}
        className="absolute bottom-20 right-10 w-48 h-48 bg-[var(--earth-ochre)]/5 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* LEFT: Image with golden frame effect */}
          <motion.div
            initial={{ opacity: 0, x: -80, rotateY: -15 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            {/* Golden border frame (replicating legacy HTML border: 50px solid transparent #567D46) */}
            <div className="relative p-8 lg:p-12 bg-gradient-to-tr from-[var(--acacia-green)]/20 via-transparent to-[var(--acacia-green)]/20 rounded-3xl">
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="relative overflow-hidden rounded-2xl shadow-2xl"
              >
                <Image
                  src="/images/about-imgnew.jpg"  // ✅ EXACT LEGACY NAME
                  alt="All About Safaris Africa - Our Story"
                  width={600}
                  height={700}
                  className="object-cover w-full h-full"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent" />
              </motion.div>
              
              {/* Floating badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1, type: "spring", stiffness: 200 }}
                className="absolute -bottom-6 -right-6 bg-[var(--savanna-gold)] p-6 rounded-2xl shadow-2xl"
              >
                <p className="text-neutral-900 font-bold text-2xl">2014</p>
                <p className="text-neutral-700 text-sm">Since</p>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT: Content with textured background */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            {/* Background texture overlay (replicating legacy img/about-img-1.png) */}
            <div 
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: 'url(/images/about-img-1.png)',  // ✅ EXACT LEGACY NAME
                backgroundBlendMode: 'overlay',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
              }}
            />
            
            <div className="relative z-10 space-y-8 bg-neutral-900/40 p-8 lg:p-12 rounded-3xl backdrop-blur-sm border border-neutral-700/50">
              <motion.h5
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className="text-[var(--savanna-gold)] text-sm font-semibold tracking-widest uppercase mb-4"
              >
                Where Your Journey Begins
              </motion.h5>
              
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
                className={`${playfair.className} text-5xl lg:text-6xl font-bold text-white leading-tight`}
              >
                Welcome to
                <span className="block text-[var(--savanna-gold)]">All About Safaris Africa</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.9 }}
                className="text-neutral-300 text-lg leading-relaxed"
              >
                We believe every journey should be extraordinary. Founded with a vision to inspire wanderlust and connect travelers with authentic experiences, we've become a trusted name for adventurers, dreamers, and explorers.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.1 }}
                className="text-neutral-300 text-lg leading-relaxed"
              >
                What sets us apart? We listen. Every traveler has a unique story, and we're here to help you write yours. With personalized service, a passion for exploration, and an unwavering commitment to creating unforgettable moments, we're not just offering trips—we're crafting memories.
              </motion.p>

              {/* Features Grid */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.3 }}
                className="grid sm:grid-cols-2 gap-4 lg:gap-6 mt-8"
              >
                {features.map((feature, i) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -80, rotateY: -15 }}
                    animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
                    whileHover={{ rotateY: 5, scale: 1.02 }}
                    transition={{ duration: 1.2 }}
                    className="relative preserve-3d"
                  >
                    <div className="w-12 h-12 bg-[var(--savanna-gold)]/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-[var(--savanna-gold)]" />
                    </div>
                    <span className="text-white font-medium text-sm lg:text-base">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 2, type: "spring", stiffness: 80 }}
                className="pt-8"
              >
                <Link href="/booking">
                  <Button className="bg-[var(--acacia-green)] hover:bg-[var(--earth-ochre)] text-white font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 shadow-2xl hover:shadow-[var(--acacia-green)]/40 group">
                    <span className="flex items-center gap-3">
                      Begin Your Story
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </span>
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}