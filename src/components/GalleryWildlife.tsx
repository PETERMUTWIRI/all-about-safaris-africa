'use client';

import { motion } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';
import { GalleryImage } from './GalleryImage';
import { useState } from 'react';
import { GalleryLightbox } from './GalleryLightbox';

const playfair = Playfair_Display({ subsets: ['latin'] });

const wildlifeImages = [
  { id: 5, src: '/images/wildlife-tours.jpg', title: 'The Big Five', category: 'Wildlife', description: 'Lion pride in Masai Mara' },
  { id: 6, src: '/images/big-cat-safari.jpg', title: 'Leopard in Tree', category: 'Wildlife', description: 'Stealth predator at sunset' },
  { id: 7, src: '/images/giraffe.jpg', title: 'Towering Grace', category: 'Wildlife', description: 'Giraffe silhouette at dawn' },
  { id: 8, src: '/images/elepant-calf.jpeg', title: 'Gentle Giants', category: 'Wildlife', description: 'Elephant family crossing' },
  { id: 9, src: '/images/flamingo.jpeg', title: 'Pink Flamingo Dance', category: 'Birds', description: 'Flamingos at Lake Nakuru' },
];

export function GalleryWildlife() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="py-32 bg-gradient-to-b from-neutral-800 to-neutral-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h5 className="text-yellow-400 text-sm uppercase tracking-[0.3em] mb-4">
            Africa's Wildlife
          </h5>
          <h2 className={`${playfair.className} text-5xl lg:text-6xl font-bold text-white`}>
            Wildlife
            <span className="block text-yellow-400">Spectacle</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {wildlifeImages.map((image, index) => (
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
        images={wildlifeImages}
        currentIndex={currentIndex}
        onNavigate={(direction) => {
          setCurrentIndex(prev => {
            if (direction === 'prev') return prev > 0 ? prev - 1 : wildlifeImages.length - 1;
            return prev < wildlifeImages.length - 1 ? prev + 1 : 0;
          });
        }}
      />
    </section>
  );
}