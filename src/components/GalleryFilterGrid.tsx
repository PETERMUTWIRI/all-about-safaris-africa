'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';
import { useState, useMemo } from 'react';
import { GalleryTab } from './GalleryTab';
import { GalleryImage } from './GalleryImage';
import { GalleryLightbox } from './GalleryLightbox';

const playfair = Playfair_Display({ subsets: ['latin'] });

// Comprehensive gallery using your existing images - NOT blog/gallery specific
const allImages = [
  // Wildlife
  { id: 18, src: '/images/wildbist.jpg', title: 'Wildlife Action', category: 'wildlife', description: 'Predator in motion' },
  { id: 19, src: '/images/lion.jpg', title: 'Majestic Lion', category: 'wildlife', description: 'King of the savannah' },
  { id: 20, src: '/images/elepant-calf.jpeg', title: 'Elephant Family', category: 'wildlife', description: 'Protective mother and calf' },
  { id: 21, src: '/images/giraffe.jpg', title: 'Towering Giraffe', category: 'wildlife', description: 'Reaching for acacia leaves' },
  { id: 22, src: '/images/chetah-hill.jpeg', title: 'Cheetah on Hill', category: 'wildlife', description: 'Scouting for prey' },
  
  // Landscapes & Scenery
  { id: 23, src: '/images/rift-valley.jpg', title: 'Great Rift Valley', category: 'landscape', description: 'African geological wonder' },
  { id: 24, src: '/images/about-hero-savanna.jpg', title: 'Savannah Vista', category: 'landscape', description: 'Endless plains at golden hour' },
  { id: 25, src: '/images/newsletter-bg.jpg', title: 'Golden Savannah', category: 'landscape', description: 'Sunset over the plains' },
  
  // Culture & People
  { id: 26, src: '/images/masai-cultural.jpg', title: 'Masai Ceremony', category: 'culture', description: 'Traditional dance performance' },
  { id: 27, src: '/images/team-peter.jpg', title: 'Expert Safari Guide', category: 'culture', description: 'Sharing wildlife knowledge' },
  
  // Adventure
  { id: 28, src: '/images/hot-air-ballon.jpg', title: 'Balloon Sunrise', category: 'adventure', description: 'Floating over the Mara' },
  { id: 29, src: '/images/mount-kenya.jpg', title: 'Mountain Expedition', category: 'adventure', description: 'High-altitude trekking' },
  { id: 30, src: '/images/hells-gate.jpg', title: 'Hells Gate Cycling', category: 'adventure', description: 'Ride among wildlife' },
];

const categories = [
  { id: 'all', label: 'All Images', count: allImages.length },
  { id: 'wildlife', label: 'Wildlife', count: allImages.filter(img => img.category === 'wildlife').length },
  { id: 'landscape', label: 'Landscapes', count: allImages.filter(img => img.category === 'landscape').length },
  { id: 'culture', label: 'Culture', count: allImages.filter(img => img.category === 'culture').length },
  { id: 'adventure', label: 'Adventure', count: allImages.filter(img => img.category === 'adventure').length },
];

export function GalleryFilterGrid() {
  const [activeTab, setActiveTab] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages = useMemo(() => {
    return activeTab === 'all' ? allImages : allImages.filter(img => img.category === activeTab);
  }, [activeTab]);

  const handleImageClick = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handleNavigate = (direction: 'prev' | 'next') => {
    setCurrentIndex(prev => {
      if (direction === 'prev') return prev > 0 ? prev - 1 : filteredImages.length - 1;
      return prev < filteredImages.length - 1 ? prev + 1 : 0;
    });
  };

  return (
    <section className="py-32 bg-gradient-to-b from-neutral-900 to-neutral-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h5 className="text-yellow-400 text-sm uppercase tracking-[0.3em] mb-4">
            Complete Portfolio
          </h5>
          <h2 className={`${playfair.className} text-5xl lg:text-6xl font-bold text-white`}>
            Explore by
            <span className="block text-yellow-400">Category</span>
          </h2>
        </motion.div>

        {/* Filter Tabs */}
        <GalleryTab
          tabs={categories}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* Image Grid */}
        <motion.div
          layout
          className="mt-12"
        >
          <AnimatePresence>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
            >
              {filteredImages.map((image, index) => (
                <GalleryImage
                  key={image.id}
                  image={image}
                  onOpen={() => handleImageClick(index)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      <GalleryLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={filteredImages}
        currentIndex={currentIndex}
        onNavigate={handleNavigate}
      />
    </section>
  );
}