'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Calendar, User, Star, ArrowRight, Phone, Info } from 'lucide-react';
import { Playfair_Display } from 'next/font/google';
import { Button } from '@/components/ui/button';
import { BookingModal } from '@/components/BookingModal';
import { DescriptionModal } from './DescriptionModal';
import { useState } from 'react';

const playfair = Playfair_Display({ subsets: ['latin'] });

interface PackageCardProps {
  id: number;
  title: string;
  duration: string;
  price: string;
  originalImage: string;
  locations: string;
  description: string;
  days: string;
  category: string;
  index: number;
  fullDescription: string;
  itinerary: any[];
  includes: string[];
  excludes: string[];
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
  index,
  fullDescription,
  itinerary,
  includes,
  excludes
}: PackageCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const whatsappNumber = '254700064857';
  
  const packageDetails = `Duration: ${duration}\nDays: ${days}\nCategory: ${category}\nPrice: ${price}\nLocations: ${locations}\nDescription: ${description}`;
  const customPricingMessage = `Booking Inquiry - ${title} (ID: ${id})\n${packageDetails}\n\nI'm interested in custom pricing for this package. Please advise.`;
  const customPricingLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(customPricingMessage)}`;

  // ✅ FIX: Create the pkg object from props
  const pkg = {
    id,
    title,
    duration,
    price,
    originalImage,
    locations,
    description,
    days,
    category,
    fullDescription,
    itinerary,
    includes,
    excludes
  };

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
          boxShadow: "0 25px 70px rgba(86, 125, 70, 0.4)"
        }}
        className="group relative overflow-hidden rounded-3xl bg-neutral-800 border border-neutral-700 cursor-pointer"
        onClick={() => setIsDescriptionOpen(true)}
      >
        {/* Image with overlay info */}
        <div className="relative h-72 md:h-80 overflow-hidden">
          <Image
            src={`/images/${originalImage}`}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            priority={index < 2}
          />
          
          {/* Info bar at bottom */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 + (index * 0.1) }}
            className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm border-t border-neutral-700"
          >
            <div className="flex divide-x divide-neutral-700">
              <div className="flex-1 p-3">
                <div className="flex items-center justify-center gap-2 text-white text-xs md:text-sm">
                  <MapPin className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" />
                  <span className="truncate">{locations.split('/')[0]}</span>
                </div>
              </div>
              <div className="flex-1 p-3">
                <div className="flex items-center justify-center gap-2 text-white text-xs md:text-sm">
                  <Calendar className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" />
                  <span>{duration}</span>
                </div>
              </div>
              <div className="flex-1 p-3">
                <div className="flex items-center justify-center gap-2 text-white text-xs md:text-sm">
                  <User className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" />
                  <span>Min 2</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Price badge */}
          <motion.div
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3 + (index * 0.1), type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="absolute top-3 md:top-4 right-3 md:right-4 bg-yellow-400 text-neutral-900 px-3 py-1 md:px-4 md:py-2 rounded-full font-bold text-sm md:text-lg shadow-lg"
          >
            {price}
          </motion.div>

          {/* Gradient overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent"
          />

          {/* Info button - stops propagation */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute top-3 md:top-4 left-3 md:left-4 w-8 h-8 md:w-10 md:h-10 bg-black/70 hover:bg-yellow-400 rounded-full flex items-center justify-center text-white hover:text-neutral-900 transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              setIsDescriptionOpen(true);
            }}
            aria-label="View details"
          >
            <Info className="w-4 h-4 md:w-5 md:h-5" />
          </motion.button>
        </div>

        {/* Content */}
        <div className="p-5 md:p-7 space-y-4 md:space-y-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + (index * 0.1) }}
            className="space-y-3"
          >
            <h3 className={`${playfair.className} text-lg md:text-2xl lg:text-3xl font-bold text-white group-hover:text-yellow-400 transition-colors`}>
              {title}
            </h3>
            
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            <p className="text-neutral-400 leading-relaxed text-xs md:text-sm lg:text-base">
              {description}
            </p>
          </motion.div>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + (index * 0.1), type: "spring", stiffness: 80 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 pt-2"
          >
            <a
              href={customPricingLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <Button 
                variant="outline"
                className="w-full border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-neutral-900 transition-all duration-300 flex items-center justify-center gap-2 py-2 md:py-3 text-xs md:text-sm"
              >
                <Phone className="w-3 h-3 md:w-4 md:h-4" />
                Custom Pricing
              </Button>
            </a>

            <Button 
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(true);
              }}
              className="w-full bg-green-800 hover:bg-orange-500 text-white font-bold transition-all duration-300 flex items-center justify-center gap-2 py-2 md:py-3 text-xs md:text-sm"
            >
              Book Now
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
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

      <DescriptionModal
        isOpen={isDescriptionOpen}
        onClose={() => setIsDescriptionOpen(false)}
        pkg={pkg} // ✅ Now works correctly
      />
    </>
  );
}