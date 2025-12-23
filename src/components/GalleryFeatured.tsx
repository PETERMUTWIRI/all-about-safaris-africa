'use client';

import { motion } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';
import { GalleryImage } from './GalleryImage';
import { useState } from 'react';
import { GalleryLightbox } from './GalleryLightbox';

const playfair = Playfair_Display({ subsets: ['latin'] });

// ✅ ORIGINAL IMAGE URLs PRESERVED
const featuredImages = [
  { id: 1, src: '/images/presidential-safari.jpg', title: 'Presidential Safari Experience', category: 'Luxury', description: 'Ultra-luxury private safari experience' },
  { id: 2, src: '/images/featured-migration.jpg', title: 'Great Migration Crossing', category: 'Wildlife', description: 'Wildebeest crossing the Mara River' },
  { id: 3, src: '/images/honeymoon-safari.jpg', title: 'Romance in the Wild', category: 'Honeymoon', description: 'Private bush dinner under African stars' },
  { id: 4, src: '/images/family-safari.jpg', title: 'Family Safari Adventure', category: 'Family', description: 'Creating memories for all generations' },
];

export function GalleryFeatured() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-neutral-950 to-neutral-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16 md:mb-20"
        >
          <h5 className="text-yellow-400 text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] mb-3 md:mb-4">
            Signature Collection
          </h5>
          <h2 className={`${playfair.className} text-3xl md:text-5xl lg:text-6xl font-bold text-white`}>
            Our Finest
            <span className="block text-yellow-400">Moments</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {featuredImages.map((image, index) => (
            <GalleryImage
              key={image.id}
              image={image}
              onOpen={() => {
                setCurrentIndex(index);
                setLightboxOpen(true);
              }}
            />
          ))}
        </div>
      </div>

      <GalleryLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={featuredImages}
        currentIndex={currentIndex}
        onNavigate={(direction) => {
          setCurrentIndex(prev => {
            if (direction === 'prev') return prev > 0 ? prev - 1 : featuredImages.length - 1;
            return prev < featuredImages.length - 1 ? prev + 1 : 0;
          });
        }}
      />
    </section>
  );
}