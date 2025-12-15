'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Calendar, User, Star, ArrowRight, Phone } from 'lucide-react';
import { Playfair_Display } from 'next/font/google';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BookingModal } from '@/components/BookingModal';
import { useState } from 'react';
const playfair = Playfair_Display({ subsets: ['latin'] });

interface PackageCardProps {
  id: number;
  title: string;
  duration: string;
  price: string;
  originalImage: string; // Exact legacy name
  locations: string;
  description: string;
  days: string;
  category: string;
  index: number;
}

export function PackageCard({ 
  id, 
  title, 
  duration, 
  price, 
  originalImage, 
  locations, 
  description, 
  days, 
  category,
  index 
}: PackageCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const whatsappNumber = '254700064857';
  const packageDetails = `Duration: ${duration}\nDays: ${days}\nCategory: ${category}\nPrice: ${price}\nLocations: ${locations}\nDescription: ${description}`;
  const customPricingMessage = `Booking Inquiry - ${title} (ID: ${id})\n${packageDetails}\n\nI'm interested in custom pricing for this package. Please advise.`;
  const customPricingLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(customPricingMessage)}`;
  return (
    <>
      <motion.div
        layout
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ 
          delay: index * 0.15, 
          duration: 0.8, 
          ease: [0.25, 0.46, 0.45, 0.94],
          type: "spring",
          stiffness: 100
        }}
        whileHover={{ 
          y: -12,
          scale: 1.02,
          rotateX: 2,
          boxShadow: "0 25px 70px rgba(86, 125, 70, 0.4)"
        }}
        className="group relative overflow-hidden rounded-3xl bg-neutral-800 border border-neutral-700 cursor-pointer"
      >
      {/* Image with overlay info (replicating legacy structure) */}
      <div className="relative h-80 overflow-hidden">
        <Image
          src={`/images/${originalImage}`}  // ✅ EXACT LEGACY NAME
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          priority={index < 2}
        />
        
        {/* Legacy-style info bar at bottom */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 + (index * 0.1) }}
          className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm border-t border-neutral-700"
        >
          <div className="flex divide-x divide-neutral-700">
            <div className="flex-1 p-3">
              <div className="flex items-center justify-center gap-2 text-white text-xs">
                <MapPin className="w-3 h-3 text-[var(--savanna-gold)]" />
                <span className="truncate">{locations}</span>
              </div>
            </div>
            <div className="flex-1 p-3">
              <div className="flex items-center justify-center gap-2 text-white text-xs">
                <Calendar className="w-3 h-3 text-[var(--savanna-gold)]" />
                <span>{duration}</span>
              </div>
            </div>
            <div className="flex-1 p-3">
              <div className="flex items-center justify-center gap-2 text-white text-xs">
                <User className="w-3 h-3 text-[var(--savanna-gold)]" />
                <span>1 Person</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Price badge - glows like a jewel */}
        <motion.div
          initial={{ scale: 0, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.3 + (index * 0.1), type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="absolute top-4 right-4 bg-[var(--savanna-gold)] text-neutral-900 px-4 py-2 rounded-full font-bold text-lg shadow-lg shadow-[var(--savanna-gold)]/30"
        >
          {price}
        </motion.div>

        {/* Gradient overlay on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent"
        />
      </div>

      {/* Content */}
      <div className="p-6 lg:p-7 space-y-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 + (index * 0.1) }}
          className="space-y-3"
        >
          <h3 className={`${playfair.className} text-2xl lg:text-3xl font-bold text-white group-hover:text-[var(--savanna-gold)] transition-colors`}>
            {title}
          </h3>
          
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[var(--savanna-gold)] text-[var(--savanna-gold)]" />
            ))}
          </div>

          <p className="text-neutral-400 leading-relaxed text-sm lg:text-base">
            {description}
          </p>
        </motion.div>

        {/* Action buttons - animated split */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 + (index * 0.1), type: "spring", stiffness: 80 }}
          className="grid grid-cols-2 gap-3 pt-2"
        >
          <Link href={customPricingLink} target="_blank" rel="noopener noreferrer">
            <Button 
              variant="outline"
              className="w-full border-[var(--savanna-gold)] text-[var(--savanna-gold)] hover:bg-[var(--savanna-gold)] hover:text-neutral-900 transition-all duration-300 flex items-center justify-center gap-2 py-3"
            >
              <Phone className="w-4 h-4" />
              Custom Pricing
            </Button>
          </Link>

          <Button 
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-[var(--acacia-green)] hover:bg-[var(--earth-ochre)] text-white font-bold transition-all duration-300 flex items-center justify-center gap-2 py-3 group"
          >
            Book Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </motion.div>

    <BookingModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      packageTitle={title}
      packageDetails={packageDetails}
      whatsappNumber={whatsappNumber}
    />
    </>
  );
}