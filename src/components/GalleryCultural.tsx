'use client';

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';
import { useState, useRef } from 'react';
import Image from 'next/image';
import { GalleryLightbox } from './GalleryLightbox';

const playfair = Playfair_Display({ subsets: ['latin'] });

const culturalImages = [
  { id: 10, src: '/images/masai-cultural.jpg', title: 'Masai Warrior Dance', category: 'Culture', description: 'Traditional ceremony performance' },
  { id: 11, src: '/images/historic-tours.jpg', title: 'Swahili Architecture', category: 'Culture', description: 'Lamu Old Town UNESCO heritage' },
  { id: 12, src: '/images/team-peter.jpg', title: 'Local Safari Guide', category: 'People', description: 'Expert guide sharing knowledge' },
  { id: 13, src: '/images/lamu-cultural.jpg', title: 'Traditional Dhow Sailing', category: 'Culture', description: 'Ancient sailing vessels' },
];

export function GalleryCultural() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);

  // Parallax effect using useScroll
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section ref={ref} className="relative py-32 bg-neutral-900 overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0"
      >
        <Image
          src="/images/lamu-cultural.jpg"
          alt="Cultural background"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/70" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h5 className="text-yellow-400 text-sm uppercase tracking-[0.3em] mb-4">
            Living Heritage
          </h5>
          <h2 className={`${playfair.className} text-5xl lg:text-6xl font-bold text-white`}>
            Cultural
            <span className="block text-yellow-400">Immersion</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6">
          {culturalImages.map((image, index) => (
            <div key={image.id} className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer"
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="text-yellow-400 text-sm mb-2">{image.category}</p>
                <h3 className="text-xl font-bold">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      <GalleryLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={culturalImages}
        currentIndex={currentIndex}
        onNavigate={(direction) => {
          setCurrentIndex(prev => {
            if (direction === 'prev') return prev > 0 ? prev - 1 : culturalImages.length - 1;
            return prev < culturalImages.length - 1 ? prev + 1 : 0;
          });
        }}
      />
    </section>
  );
}