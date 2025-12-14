'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight,ArrowRight, Calendar, MapPin,Phone, Share2, Heart, BookOpen } from 'lucide-react';
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
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
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
        className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4"
        onClick={onClose}
      >
        {/* Close button */}
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ delay: 0.2 }}
          className="absolute top-6 right-6 w-12 h-12 bg-neutral-800/80 border border-neutral-700 rounded-full flex items-center justify-center text-white hover:bg-[var(--savanna-gold)] hover:text-neutral-900 transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label="Close lightbox"
        >
          <X className="w-6 h-6" />
        </motion.button>

        {/* Navigation */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ delay: 0.2 }}
          className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-neutral-800/80 border border-neutral-700 rounded-full flex items-center justify-center text-white hover:bg-[var(--savanna-gold)] hover:text-neutral-900 transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate('prev');
          }}
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>
        
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ delay: 0.2 }}
          className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-neutral-800/80 border border-neutral-700 rounded-full flex items-center justify-center text-white hover:bg-[var(--savanna-gold)] hover:text-neutral-900 transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate('next');
          }}
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
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
            className="object-contain max-h-[80vh] rounded-2xl"
            placeholder="blur"
            blurDataURL="/images/placeholder.jpg"
          />

          {/* Image info overlay */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 rounded-b-2xl"
          >
            <div className="flex items-start justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 text-[var(--savanna-gold)] text-sm mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>{currentImage.category}</span>
                </div>
                
                <h3 className={`${playfair.className} text-3xl font-bold text-white mb-3`}>
                  {currentImage.title}
                </h3>
                
                <p className="text-neutral-300 text-lg leading-relaxed mb-6 max-w-2xl">
                  {currentImage.description}
                </p>

                <div className="flex items-center gap-6">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsLiked(!isLiked);
                    }}
                    className={cn(
                      "flex items-center gap-2 text-sm transition-colors",
                      isLiked ? "text-red-500" : "text-neutral-400 hover:text-white"
                    )}
                  >
                    <Heart className={cn("w-5 h-5", isLiked && "fill-current")} />
                    {isLiked ? 'Saved' : 'Save'}
                  </button>

                  <button className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm">
                    <Share2 className="w-5 h-5" />
                    Share
                  </button>

                  <div className="flex items-center gap-2 text-neutral-400 text-sm">
                    <Calendar className="w-5 h-5" />
                    Available 2025
                  </div>
                </div>
              </div>

              {/* Booking CTA - THE GAME CHANGER */}
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="flex flex-col gap-3 min-w-[280px]"
              >
                <p className="text-neutral-400 text-sm text-center">Inspired by this?</p>
                
                <Link href="/booking">
                  <Button 
                    className="w-full bg-[var(--savanna-gold)] hover:bg-[var(--earth-ochre)] text-neutral-900 font-bold py-4 rounded-full text-lg transition-all duration-300 shadow-2xl hover:shadow-[var(--savanna-gold)]/50 flex items-center justify-center gap-3 group"
                  >
                    <BookOpen className="w-6 h-6 group-hover:scale-110 transition-transform" />
                    Book This Tour
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </Link>

                <Link href="https://wa.me/254700064857">
                  <Button 
                    variant="outline"
                    className="w-full border-[var(--savanna-gold)] text-[var(--savanna-gold)] hover:bg-[var(--savanna-gold)] hover:text-neutral-900 font-medium py-3 rounded-full transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <Phone className="w-5 h-5" />
                    WhatsApp Inquiry
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
            className="absolute top-6 left-6 bg-neutral-800/80 border border-neutral-700 px-4 py-2 rounded-full text-sm text-neutral-300"
          >
            {currentIndex + 1} / {images.length}
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}