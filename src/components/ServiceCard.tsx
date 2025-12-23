'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { Playfair_Display } from 'next/font/google';
import { cn } from '@/lib/utils';

const playfair = Playfair_Display({ subsets: ['latin'] });

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  variant?: 'left' | 'right';
  index: number;
}

export function ServiceCard({ title, description, Icon, variant = 'right', index }: ServiceCardProps) {
  return (
    <motion.div
      custom={index}
      variants={{
        initial: { opacity: 0, y: 40 },
        animate: (i: number) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.1 * i,
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }
        }),
        hover: {
          scale: 1.02,
          boxShadow: "0 20px 60px rgba(86, 125, 70, 0.3)",
          transition: { duration: 0.3 }
        }
      }}
      initial="initial"
      whileInView="animate"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-neutral-800 border border-neutral-700 p-6 md:p-8 cursor-pointer",
        variant === 'left' ? "text-right" : "text-left"
      )}
    >
      {/* Animated gradient border */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "linear-gradient(135deg, var(--savanna-gold), var(--earth-ochre), var(--acacia-green))"
        }}
      />
      <div className="relative z-10 flex items-center gap-4 md:gap-6 flex-col md:flex-row">
        {variant === 'left' ? (
          <>
            <div className="flex-1 space-y-3 md:space-y-4">
              <motion.h5
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`${playfair.className} text-lg md:text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors`}
              >
                {title}
              </motion.h5>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.3 }}
                className="text-neutral-400 text-sm md:text-base leading-relaxed"
              >
                {description}
              </motion.p>
            </div>
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
              className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-yellow-400/10 rounded-full flex items-center justify-center group-hover:bg-yellow-400 transition-colors"
            >
              <Icon className="w-6 h-6 md:w-10 md:h-10 text-yellow-400 group-hover:text-neutral-900 transition-colors" />
            </motion.div>
          </>
        ) : (
          <>
            <motion.div
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
              className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-yellow-400/10 rounded-full flex items-center justify-center group-hover:bg-yellow-400 transition-colors"
            >
              <Icon className="w-6 h-6 md:w-10 md:h-10 text-yellow-400 group-hover:text-neutral-900 transition-colors" />
            </motion.div>
            <div className="flex-1 space-y-3 md:space-y-4">
              <motion.h5
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`${playfair.className} text-lg md:text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors`}
              >
                {title}
              </motion.h5>
              <motion.p
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.3 }}
                className="text-neutral-400 text-sm md:text-base leading-relaxed"
              >
                {description}
              </motion.p>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}