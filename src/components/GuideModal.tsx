"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { Playfair_Display } from 'next/font/google';
import { Button } from '@/components/ui/button';

const playfair = Playfair_Display({ subsets: ['latin'] });

interface Guide {
  title: string;
  subtitle?: string;
  content: string;
  image?: string;
}

interface GuideModalProps {
  guide: Guide | null;
  isOpen: boolean;
  onClose: () => void;
}

export function GuideModal({ guide, isOpen, onClose }: GuideModalProps) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!guide) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-3xl max-h-[92vh] overflow-y-auto bg-neutral-900 border border-neutral-700 rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 bg-neutral-800/80 border border-neutral-600 rounded-full flex items-center justify-center text-white hover:bg-yellow-400 hover:text-neutral-900 transition-all z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {guide.image && (
              <div className="relative h-56 rounded-t-2xl overflow-hidden">
                <Image src={guide.image} alt={guide.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60" />
              </div>
            )}

            <div className="p-8">
              <h2 className={`${playfair.className} text-3xl font-bold text-white mb-3`}>{guide.title}</h2>
              {guide.subtitle && <p className="text-neutral-300 mb-6">{guide.subtitle}</p>}

              <div className="prose prose-invert max-w-none text-neutral-300">
                {guide.content.split('\n\n').map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="mt-6 flex justify-end">
                <Button className="bg-yellow-400 hover:bg-orange-500 text-neutral-900 font-bold rounded-full" onClick={onClose}>
                  Close
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
