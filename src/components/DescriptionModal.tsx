'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, Calendar, User, Star, Phone, BookOpen, CheckCircle, XCircle } from 'lucide-react';
import { Playfair_Display } from 'next/font/google';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import Image from 'next/image';

const playfair = Playfair_Display({ subsets: ['latin'] });

interface DescriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  pkg: any;
}

export function DescriptionModal({ isOpen, onClose, pkg }: DescriptionModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!pkg) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl p-4 md:p-8 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-5xl mx-auto bg-neutral-900 rounded-2xl md:rounded-3xl overflow-hidden border border-neutral-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative h-64 md:h-80 overflow-hidden">
              <Image
                src={`/images/${pkg.originalImage}`}
                alt={pkg.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/30 to-transparent" />
              
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center text-white transition-all border border-neutral-600"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-16">
                <h2 className={`${playfair.className} text-3xl md:text-5xl font-bold text-white mb-2`}>
                  {pkg.title}
                </h2>
                <div className="flex flex-wrap gap-4 text-white/90 text-sm md:text-base">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{pkg.locations}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span>Min 2 Persons</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-10 space-y-8">
              {/* Description */}
              <div className="space-y-4">
                <h3 className={`${playfair.className} text-2xl md:text-3xl font-bold text-yellow-400 flex items-center gap-3`}>
                  <BookOpen className="w-6 h-6" />
                  Safari Overview
                </h3>
                <div className="text-neutral-300 leading-relaxed text-base md:text-lg">
                  <p>{pkg.fullDescription}</p>
                </div>
              </div>

              {/* Itinerary */}
              <div className="space-y-4">
                <h3 className={`${playfair.className} text-2xl md:text-3xl font-bold text-yellow-400 flex items-center gap-3`}>
                  <MapPin className="w-6 h-6" />
                  Detailed Itinerary
                </h3>
                <div className="space-y-6">
                  {pkg.itinerary.map((day: any, index: number) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-neutral-800 rounded-xl p-5 border border-neutral-700"
                    >
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-yellow-400 text-neutral-900 rounded-full flex items-center justify-center font-bold text-lg">
                          Day {day.day}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-white mb-2 text-lg">{day.title}</h4>
                          <p className="text-neutral-400 leading-relaxed">{day.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Includes/Excludes */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className={`${playfair.className} text-xl md:text-2xl font-bold text-green-400 flex items-center gap-3`}>
                    <CheckCircle className="w-5 h-5" />
                    Included in Your Safari
                  </h3>
                  <ul className="space-y-2">
                    {pkg.includes.map((item: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                        <span className="text-neutral-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className={`${playfair.className} text-xl md:text-2xl font-bold text-red-400 flex items-center gap-3`}>
                    <XCircle className="w-5 h-5" />
                    Not Included
                  </h3>
                  <ul className="space-y-2">
                    {pkg.excludes.map((item: string, index: number) => (
                      <li key={index} className="flex items-start gap-3">
                        <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-1" />
                        <span className="text-neutral-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-xl p-6 border border-yellow-400/20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-1">
                      {pkg.price}
                      <span className="text-sm text-neutral-400 ml-2">per person</span>
                    </div>
                    <div className="text-neutral-400 text-sm">Based on double occupancy</div>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={`https://wa.me/254700064857?text=${encodeURIComponent(
                        `Booking Inquiry - ${pkg.title}\n\nPackage Details:\n${pkg.duration} | ${pkg.locations}\nPrice: ${pkg.price}\n\nPlease send me more details and availability.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-green-600 hover:bg-green-700 text-white">
                        <Phone className="w-4 h-4 mr-2" />
                        WhatsApp Inquiry
                      </Button>
                    </a>
                    <Button className="bg-yellow-400 hover:bg-orange-500 text-neutral-900 font-bold">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Book This Safari
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}