'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import Image from 'next/image';
import { X, Calendar,ArrowRight, User, Clock, MessageCircle, ThumbsUp } from 'lucide-react';
import { Playfair_Display } from 'next/font/google';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { BlogPost } from '@/types/blog';

const playfair = Playfair_Display({ subsets: ['latin'] });

interface BlogModalProps {
  post: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
}

export function BlogModal({ post, isOpen, onClose }: BlogModalProps) {
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

  if (!post) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative max-w-4xl max-h-[95vh] overflow-y-auto bg-neutral-900 border border-neutral-700 rounded-3xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-12 h-12 bg-neutral-800/80 border border-neutral-600 rounded-full flex items-center justify-center text-white hover:bg-yellow-400 hover:text-neutral-900 transition-all z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Hero Image */}
            <div className="relative h-96 overflow-hidden rounded-t-3xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent" />
              
              {/* Meta Overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="flex items-center gap-4 text-sm mb-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-yellow-400" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-yellow-400" />
                    <span>{post.readTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-yellow-400" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <span className="inline-block px-3 py-1 bg-yellow-400 text-neutral-900 text-xs font-bold rounded-full mb-4">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-12">
              <h1 className={`${playfair.className} text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight`}>
                {post.title}
              </h1>

              <div className="prose prose-invert max-w-none text-lg text-neutral-300 leading-relaxed space-y-6 mb-8">
                {post.content.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Engagement */}
              <div className="flex items-center justify-between py-6 border-t border-b border-neutral-700 mb-8">
                <div className="flex items-center gap-6">
                  <button className="flex items-center gap-2 text-neutral-400 hover:text-yellow-400 transition-colors group">
                    <ThumbsUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-2 text-neutral-400 hover:text-yellow-400 transition-colors group">
                    <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>{post.comments}</span>
                  </button>
                </div>
                
                <Button className="bg-yellow-400 hover:bg-orange-500 text-neutral-900 font-bold rounded-full">
                  Share Story
                </Button>
              </div>

              {/* CTAs */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Link href="https://wa.me/254700064857" target="_blank">
                  <Button className="w-full bg-yellow-400 hover:bg-orange-500 text-neutral-900 font-bold py-4 rounded-full transition-all duration-300 hover:scale-105">
                    Plan Your Safari
                    <MessageCircle className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/packages">
                  <Button variant="outline" className="w-full border-neutral-600 text-white hover:bg-white hover:text-neutral-900 font-bold py-4 rounded-full transition-all duration-300">
                    View Packages
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}