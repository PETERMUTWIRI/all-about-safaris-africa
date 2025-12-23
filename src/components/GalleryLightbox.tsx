'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, ArrowRight, Calendar, MapPin, Phone, BookOpen } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });

interface GalleryLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: any[];
  currentIndex: number;
  onNavigate: (direction: 'prev' | 'next') => void;
}

export function GalleryLightbox({ isOpen, onClose, images, currentIndex, onNavigate }: GalleryLightboxProps) {
  const [isLiked, setIsLiked] = useState(false);
  
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

  if (!isOpen || !images[currentIndex]) return null;

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-2 md:p-4"
        onClick={onClose}
      >
        {/* Close button */}
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ delay: 0.2 }}
          className="absolute top-4 md:top-6 right-4 md:right-6 w-10 h-10 md:w-12 md:h-12 bg-neutral-800/80 border border-neutral-700 rounded-full flex items-center justify-center text-white hover:bg-yellow-400 hover:text-neutral-900 transition-colors z-10"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label="Close lightbox"
        >
          <X className="w-5 h-5 md:w-6 md:h-6" />
        </motion.button>

        {/* Navigation */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ delay: 0.2 }}
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-neutral-800/80 border border-neutral-700 rounded-full flex items-center justify-center text-white hover:bg-yellow-400 hover:text-neutral-900 transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate('prev');
          }}
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </motion.button>
        
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ delay: 0.2 }}
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-neutral-800/80 border border-neutral-700 rounded-full flex items-center justify-center text-white hover:bg-yellow-400 hover:text-neutral-900 transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate('next');
          }}
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </motion.button>

        {/* Image container */}
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative max-w-6xl max-h-full"
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={currentImage.src}
            alt={currentImage.title}
            width={1200}
            height={800}
            className="object-contain max-h-[70vh] md:max-h-[80vh] rounded-xl md:rounded-2xl"
          />

          {/* Image info overlay */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-4 md:p-8 rounded-b-xl md:rounded-b-2xl"
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 text-yellow-400 text-sm mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>{currentImage.category}</span>
                </div>
                
                <h3 className={`${playfair.className} text-xl md:text-3xl font-bold text-white mb-3`}>
                  {currentImage.title}
                </h3>
                
                <p className="text-neutral-300 text-sm md:text-lg leading-relaxed mb-4 md:mb-6 max-w-2xl">
                  {currentImage.description}
                </p>

                <div className="flex items-center gap-4 md:gap-6">
                  <div className="flex items-center gap-2 text-neutral-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    Available 2025
                  </div>
                </div>
              </div>

              {/* Booking CTA */}
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="flex flex-col gap-2 md:gap-3 w-full md:w-auto"
              >
                <p className="text-neutral-400 text-xs text-center">Inspired by this?</p>
                
                <Link href="/packages">
                  <Button 
                    className="w-full bg-yellow-400 hover:bg-orange-500 text-neutral-900 font-bold py-3 md:py-4 rounded-full text-sm md:text-lg transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    Book Similar Tour
                    <ArrowRight className="w-4 h-5 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="absolute top-4 md:top-6 left-4 md:left-6 bg-neutral-800/80 border border-neutral-700 px-3 md:px-4 py-1.5 rounded-full text-xs md:text-sm text-neutral-300"
          >
            {currentIndex + 1} / {images.length}
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}