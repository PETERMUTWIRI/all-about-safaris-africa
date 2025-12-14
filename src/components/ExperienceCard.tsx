'use client';

import { motion } from 'framer-motion';
import { ArrowRight,MapPin } from 'lucide-react';
import Image from 'next/image';
import type { Experience } from '@/types/experience';

interface ExperiencesSectionProps {
  experiences: Experience[];
}

export function ExperiencesSection({ experiences }: ExperiencesSectionProps) {
  // ... component code
}

// interface Experience {
//   title: string;
//   location: string;
//   duration: string;
//   price: string;
//   image: string;
//   description: string;
// }

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <motion.div
      whileHover={{ 
        y: -16,
        rotateX: 5,
        boxShadow: "0 25px 80px rgba(86, 125, 70, 0.4)"
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-2xl bg-neutral-800 cursor-pointer"
    >
      {/* Image with reveal on hover */}
      <div className="relative h-80 overflow-hidden">
        <Image
          src={experience.image}
          alt={experience.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent"
        />
        
        {/* Price tag */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute top-4 right-4 bg-savanna-gold text-neutral-900 px-4 py-2 rounded-full font-bold"
        >
          {experience.price}
        </motion.div>
      </div>

      {/* Content */}
      <motion.div 
        className="p-8 space-y-4"
        initial={{ opacity: 0, y: 20 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center gap-2 text-savanna-gold text-sm">
          <MapPin className="w-4 h-4" />
          <span>{experience.location}</span>
        </div>
        
        <h3 className="text-2xl font-bold text-white group-hover:text-savanna-gold transition-colors">
          {experience.title}
        </h3>
        
        <p className="text-neutral-400 leading-relaxed">
          {experience.description}
        </p>
        
        <div className="flex justify-between items-center pt-4 border-t border-neutral-700">
          <span className="text-neutral-500 text-sm">{experience.duration}</span>
          <motion.button
            whileHover={{ x: 5 }}
            className="text-savanna-gold font-semibold flex items-center gap-2"
          >
            Explore <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}