'use client';

import { motion ,AnimatePresence} from 'framer-motion';
import Image from 'next/image';
import { Eye, Heart, Share2, MapPin } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface GalleryImageProps {
  image: {
    id: number;
    src: string;
    title: string;
    category: string;
    description: string;
  };
  onOpen: (img: any) => void;
}

export function GalleryImage({ image, onOpen }: GalleryImageProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.div
      layout
      layoutId={`gallery-item-${image.id}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-2xl bg-neutral-800 border border-neutral-700 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onOpen(image)} // ✅ Click to expand
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={image.src}
          alt={image.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Gradient overlay on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/20 to-transparent"
        />
      </div>

      {/* Content overlay - appears on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-x-0 bottom-0 p-4"
          >
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-yellow-400 text-xs">
                <MapPin className="w-3 h-3" />
                <span>{image.category}</span>
              </div>
              
              <h3 className="text-sm font-bold text-white group-hover:text-yellow-400 transition-colors">
                {image.title}
              </h3>
              
              <p className="text-neutral-300 text-xs leading-relaxed line-clamp-2">
                {image.description}
              </p>

              {/* View Button */}
              <motion.button
                className="w-full mt-3 bg-yellow-400 hover:bg-orange-500 text-neutral-900 text-xs font-bold py-2 px-3 rounded-full transition-all duration-300 flex items-center justify-center gap-1"
                whileHover={{ scale: 1.05 }}
              >
                <Eye className="w-3 h-3" />
                View Full Size
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}