'use client';

import { motion } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';
import { BlogCard } from './BlogCard';
import { Newsletter } from './Newsletter';
import { BackToTop } from './BackToTop';
import { BlogPost } from '@/types/blog';
import { GuideModal } from './GuideModal';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const playfair = Playfair_Display({ subsets: ['latin'] });

interface BlogContentProps {
  posts: BlogPost[];
  onReadMore?: (post: BlogPost) => void;
}

export function BlogContent({ posts, onReadMore }: BlogContentProps) {
  const [selectedGuide, setSelectedGuide] = useState<{
    title: string;
    subtitle?: string;
    content: string;
    image?: string;
  } | null>(null);
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  const openGuide = (guide: { title: string; subtitle?: string; content: string; image?: string }) => {
    setSelectedGuide(guide);
    setIsGuideOpen(true);
  };

  return (
    // ✅ PREVENTS NAVBAR STRETCH: overflow-x-hidden on wrapper
    <div className="overflow-x-hidden">
      {/* SECTION 1: Hero */}
      <section className="relative py-24 md:py-40 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/newsletter-bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-black/70" />

        {/* ✅ STRICT CONTAINER: prevents content overflow */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center max-w-5xl mx-auto"
          >
            <h5 className="text-yellow-400 text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] mb-4 md:mb-6">
              Since 2009
            </h5>
            <h1 className={`${playfair.className} text-4xl md:text-7xl lg:text-9xl font-bold text-white leading-tight mb-4 md:mb-8`}>
              Safari Stories
              <span className="block text-yellow-400">From the Field</span>
            </h1>
            <p className="text-base md:text-xl text-white/80 max-w-3xl mx-auto">
              15 years of guiding adventures across Africa's most iconic landscapes. 
              Real stories from the bush, written by the experts who lived them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Latest Articles */}
      <section className="py-20 md:py-32 bg-neutral-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12 md:mb-16"
          >
            <div>
              <h5 className="text-yellow-400 text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] mb-3 md:mb-4">
                Latest Stories
              </h5>
              <h2 className={`${playfair.className} text-3xl md:text-5xl lg:text-6xl font-bold text-white`}>
                Recent
                <span className="block text-yellow-400">Adventures</span>
              </h2>
            </div>
            <Link href="/blog/archive">
              <Button className="bg-yellow-400 hover:bg-orange-500 text-neutral-900 font-bold px-6 py-3 rounded-full text-sm md:text-base transition-all duration-300">
                View Archive
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>

          {/* ✅ RESPONSIVE GRID: prevents overflow */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
              >
                <BlogCard post={post} onReadMore={() => (onReadMore ? onReadMore(post) : undefined)} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Safari Tips & Guides */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-neutral-900 to-neutral-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-12 md:mb-20"
          >
            <h5 className="text-yellow-400 text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] mb-3 md:mb-4">
              Safari Mastery
            </h5>
            <h2 className={`${playfair.className} text-3xl md:text-5xl lg:text-6xl font-bold text-white`}>
              Expert Tips
              <span className="block text-yellow-400">& Guides</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: '📸',
                title: 'Photography Masterclass',
                subtitle: "Capture wildlife like a pro — 15 years of field-tested techniques",
                image: '/images/photography-hero.jpg',
                content: `...`
              },
              // ... (other guides)
            ].map((tip, index) => (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="text-center p-6 md:p-8 rounded-2xl md:rounded-3xl bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 hover:bg-neutral-800 transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl mb-4">{tip.icon}</div>
                <h3 className={`${playfair.className} text-xl md:text-2xl font-bold text-white mb-3`}>
                  {tip.title}
                </h3>
                <p className="text-neutral-400 mb-6 text-sm md:text-base">{tip.subtitle}</p>
                <button
                  onClick={() => openGuide(tip)}
                  className="inline-flex items-center gap-2 border border-yellow-400 text-yellow-400 px-4 md:px-5 py-2 rounded-full hover:bg-yellow-400 hover:text-neutral-900 transition-all text-sm md:text-base"
                >
                  Read Guide
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Conservation Stories */}
      <section className="py-20 md:py-32 bg-neutral-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center"
          >
            <div>
              <h5 className="text-yellow-400 text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] mb-3 md:mb-4">
                Our Commitment
              </h5>
              <h2 className={`${playfair.className} text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8`}>
                Conservation
                <span className="block text-yellow-400">In Action</span>
              </h2>
              <p className="text-base md:text-lg text-neutral-300 mb-6 md:mb-8 leading-relaxed">
                Every safari contributes directly to wildlife protection and community development. 
                Read stories of rhino rescues, anti-poaching successes, and community transformations.
              </p>
              <Link href="/blog/conservation">
                <Button className="bg-yellow-400 hover:bg-orange-500 text-neutral-900 font-bold px-6 md:px-8 py-3 md:py-4 rounded-full text-sm md:text-base">
                  Read Conservation Stories
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="relative h-80 md:h-96 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/commitment-conservation.jpg"
                alt="Conservation in action"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ✅ NEWSLETTER & BACK-TO-TOP: Outside sections to avoid spacing issues */}
      <Newsletter />
      <BackToTop />

      <GuideModal guide={selectedGuide} isOpen={isGuideOpen} onClose={() => setIsGuideOpen(false)} />
    </div>
  );
}