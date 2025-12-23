'use client';

import { motion } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';
import { useState } from 'react';
import Image from 'next/image';
import { GalleryLightbox } from './GalleryLightbox';

const playfair = Playfair_Display({ subsets: ['latin'] });

// ✅ ORIGINAL IMAGE URLs PRESERVED
const adventureImages = [
  { id: 14, src: '/images/hot-air-ballon.jpg', title: 'Hot Air Balloon Safari', category: 'Adventure', description: 'Sunrise over the Mara' },
  { id: 15, src: '/images/mount-kenya.jpg', title: 'Mount Kenya Trek', category: 'Adventure', description: 'High-altitude expedition' },
  { id: 16, src: '/images/balloon-mara.jpg', title: 'Balloon Over Herds', category: 'Adventure', description: 'Aerial wildlife viewing' },
  { id: 17, src: '/images/hells-gate.jpg', title: 'Hells Gate Cycling', category: 'Adventure', description: 'Ride with wildlife' },
];

export function GalleryAdventure() {
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
            Thrilling Experiences
          </h5>
          <h2 className={`${playfair.className} text-3xl md:text-5xl lg:text-6xl font-bold text-white`}>
            Adventure
            <span className="block text-yellow-400">Awaits</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {adventureImages.map((image, index) => (
            <div
              key={image.id}
              className="relative h-80 md:h-96 rounded-2xl md:rounded-3xl overflow-hidden group cursor-pointer"
              onClick={() => {
                setCurrentIndex(index);
                setLightboxOpen(true);
              }}
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-yellow-400/0 group-hover:bg-yellow-400/10 transition-colors duration-300" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-yellow-400 text-xs uppercase tracking-widest mb-2">{image.category}</p>
                <h3 className="text-xl md:text-2xl font-bold mb-2">{image.title}</h3>
                <p className="text-neutral-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <GalleryLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={adventureImages}
        currentIndex={currentIndex}
        onNavigate={(direction) => {
          setCurrentIndex(prev => {
            if (direction === 'prev') return prev > 0 ? prev - 1 : adventureImages.length - 1;
            return prev < adventureImages.length - 1 ? prev + 1 : 0;
          });
        }}
      />
    </section>
  );
}