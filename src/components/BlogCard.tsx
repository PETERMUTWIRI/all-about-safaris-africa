'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, ThumbsUp, MessageCircle, Clock, User, ArrowRight } from 'lucide-react';
import { Playfair_Display } from 'next/font/google';
import { BlogPost } from '@/types/blog';

const playfair = Playfair_Display({ subsets: ['latin'] });

interface BlogCardProps {
  post: BlogPost;
  onReadMore: () => void; // ✅ Modal trigger
}

export function BlogCard({ post, onReadMore }: BlogCardProps) {
  return (
    <motion.article
      whileHover={{ 
        y: -12,
        rotateX: 2,
        boxShadow: "0 25px 70px rgba(86, 125, 70, 0.3)"
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-2xl bg-neutral-800 border border-neutral-700 cursor-pointer"
      onClick={onReadMore} // ✅ Opens modal
    >
      {/* Image */}
      <div className="relative h-80 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/20 to-transparent"
        />

        {/* Category badge */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-yellow-400 text-neutral-900 text-xs font-bold rounded-full">
          {post.category}
        </div>

        {/* Read Time */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-neutral-800/80 border border-neutral-600 rounded-full text-xs text-neutral-300">
          {post.readTime}
        </div>
      </div>

      {/* Content */}
      <div className="p-8 space-y-4">
        {/* Author & Date */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-between text-neutral-400 text-sm"
        >
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>By {post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-yellow-400" />
            <span>{post.date}</span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={`${playfair.className} text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors leading-tight`}
        >
          {post.title}
        </motion.h3>

        {/* Excerpt */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-neutral-400 leading-relaxed line-clamp-3"
        >
          {post.excerpt}
        </motion.p>

        {/* Engagement */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-between pt-4 border-t border-neutral-700"
        >
          <div className="flex items-center gap-4 text-neutral-400 text-sm">
            <span className="flex items-center gap-1 hover:text-yellow-400 transition-colors">
              <ThumbsUp className="w-4 h-4" /> {post.likes}
            </span>
            <span className="flex items-center gap-1 hover:text-yellow-400 transition-colors">
              <MessageCircle className="w-4 h-4" /> {post.comments}
            </span>
          </div>
          
          <motion.button
            whileHover={{ x: 8 }}
            className="flex items-center gap-2 text-yellow-400 font-semibold group/button"
          >
            Read Full Story
            <ArrowRight className="w-4 h-4 transition-transform group-hover/button:translate-x-2 text-yellow-400" />
          </motion.button>
        </motion.div>
      </div>
    </motion.article>
  );
}