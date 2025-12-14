'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';
import { GalleryImage } from './GalleryImage';
import { GalleryLightbox } from './GalleryLightbox';
import { GalleryTab } from './GalleryTab';
import { Newsletter } from './Newsletter';
import { BackToTop } from './BackToTop';
import { galleryCategories } from '@/lib/gallery-data';

const playfair = Playfair_Display({ subsets: ['latin'] });

const tabs = [
  { id: 'all', label: 'All', count: galleryCategories.all.length },
  { id: 'world-tour', label: 'World Tour', count: galleryCategories['world-tour'].length },
  { id: 'ocean-tour', label: 'Ocean Tour', count: galleryCategories['ocean-tour'].length },
  { id: 'summer-tour', label: 'Summer Tour', count: galleryCategories['summer-tour'].length },
  { id: 'sport-tour', label: 'Sport Tour', count: galleryCategories['sport-tour'].length },
];

export function GalleryContent() {
  const [activeTab, setActiveTab] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [allImages] = useState(galleryCategories.all);

  const currentImages = galleryCategories[activeTab as keyof typeof galleryCategories];

  const handleImageClick = (index: number) => {
    const globalIndex = allImages.findIndex(img => img.id === currentImages[index].id);
    setCurrentImageIndex(globalIndex);
    setLightboxOpen(true);
  };

  const handleNavigate = (direction: 'prev' | 'next') => {
    setCurrentImageIndex(prev => {
      if (direction === 'prev') {
        return prev > 0 ? prev - 1 : allImages.length - 1;
      }
      return prev < allImages.length - 1 ? prev + 1 : 0;
    });
  };

  return (
    <>
      <section className="py-32 bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h5 className="text-[var(--savanna-gold)] text-sm font-semibold tracking-widest uppercase mb-4">
              Visual Journey
            </h5>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className={`${playfair.className} text-5xl lg:text-6xl font-bold text-white`}
            >
              Safari
              <span className="block text-[var(--savanna-gold)]">Portfolio</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-neutral-300 text-lg mt-6 max-w-2xl mx-auto"
            >
              Every photo is a portal to an experience. Click to step inside the story.
            </motion.p>
          </motion.div>

          {/* Tabs */}
          <GalleryTab
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />

          {/* Grid */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-12"
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
              {currentImages.map((image, index) => (
                <GalleryImage
                  key={image.id}
                  image={image}
                  onOpen={() => handleImageClick(index)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <GalleryLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={allImages}
        currentIndex={currentImageIndex}
        onNavigate={handleNavigate}
      />

      <Newsletter />
      <BackToTop />
    </>
  );
}