'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Playfair_Display } from 'next/font/google';
import { Button } from '@/components/ui/button';
import { ArrowRight, MessageCircle, Mail, Users, Globe, Sparkles } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

const playfair = Playfair_Display({ subsets: ['latin'] });

const socialLinks = [
  {
    name: 'TikTok',
    href: 'https://www.tiktok.com/@allaboutsafarisafrica',
    stat: '50K+ Followers',
    color: 'bg-black',
    Icon: () => (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v13.67a2.4 2.4 0 1 1-2.4-2.4c.2 0 .41.01.61.04V9.41a6.47 6.47 0 0 0-.78-.07A6.47 6.47 0 0 0 5 16.34v4.18A8.86 8.86 0 0 0 14.77 24c4.92 0 8.93-4 8.93-8.93V11.5a7.11 7.11 0 0 0 3.3 1.75v-3.74a5.04 5.04 0 0 1-.77-.07Z"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/rastysphotography',
    stat: '25K+ Followers',
    color: 'bg-blue-600',
    Icon: () => <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/allaboutsafarisafrica/reels',
    stat: '100K+ Followers',
    color: 'bg-gradient-to-r from-purple-600 to-pink-600',
    Icon: () => <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>,
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/254700064857',
    stat: '24/7 Support',
    color: 'bg-green-500',
    Icon: MessageCircle,
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@allaboutsafarisafrica',
    stat: '100+ Videos',
    color: 'bg-red-600',
    Icon: () => <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
  },
];

export function Newsletter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Redirect to WhatsApp (converted newsletter to lead gen)
    window.open('https://wa.me/254700064857?text=I%27m%20interested%20in%20your%20safari%20packages.%20Email:%20' + encodeURIComponent(email), '_blank');
    
    setIsSubmitting(false);
    setEmail('');
  };

  return (
    <section 
      ref={ref}
      className="relative py-40 bg-gradient-to-br from-green-900 via-amber-800 to-orange-700 overflow-hidden"
    >
      {/* Animated background */}
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/final-cta-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-black/70" />

      {/* Floating elements */}
      <motion.div
        animate={{ y: [-20, 20, -20], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-10 text-8xl text-yellow-400/20 font-serif"
      >
        ✦
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto text-center"
        >
          {/* Main Icon */}
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
            className="mx-auto mb-8 w-24 h-24 rounded-full bg-yellow-400 flex items-center justify-center shadow-2xl shadow-yellow-400/40"
          >
            <Users className="w-12 h-12 text-neutral-900" />
          </motion.div>

          <motion.h5
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="text-yellow-400 text-sm uppercase tracking-[0.3em] mb-4"
          >
            Join Our Tribe
          </motion.h5>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
            className={`${playfair.className} text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight`}
          >
            Your Safari Journey
            <span className="block text-yellow-400">Starts Here</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.9 }}
            className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Follow along for daily wildlife sightings, behind-the-scenes camp life, 
            and exclusive access to limited expeditions.
          </motion.p>

          {/* Social Media Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.1, type: "spring", stiffness: 80 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto mb-16"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 1.3 + (index * 0.1), type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group relative"
              >
                <div className={cn(
                  "w-full h-32 rounded-2xl flex flex-col items-center justify-center gap-3 text-white font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-yellow-400/20",
                  link.color
                )}>
                  <link.Icon />
                  <div className="text-center">
                    <p>{link.name}</p>
                    <p className="text-xs opacity-80 font-normal">{link.stat}</p>
                  </div>
                </div>
                <motion.span
                  className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-yellow-400 text-xs font-medium"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2 + (index * 0.1) }}
                >
                  Click to follow →
                </motion.span>
              </motion.a>
            ))}
          </motion.div>

          {/* Email Signup - Secondary */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.7 }}
            className="max-w-xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-4 justify-center">
              <Mail className="w-5 h-5 text-yellow-400" />
              <p className="text-neutral-300 text-sm">
                Or get our monthly safari digest
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
                className="w-full px-6 py-4 pr-14 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 backdrop-blur-sm focus:border-yellow-400 transition-colors text-sm"
                required
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="absolute right-2 top-2 rounded-full bg-yellow-400 hover:bg-orange-500 text-neutral-900 p-2 transition-all duration-300"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-4 h-4" />
                  </motion.div>
                ) : (
                  <ArrowRight className="w-4 h-4" />
                )}
              </Button>
            </form>
          </motion.div>

          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 2 }}
            className="mt-12 pt-8 border-t border-white/20 max-w-md mx-auto"
          >
            <p className="text-neutral-400 text-xs flex items-center justify-center gap-2">
              <Globe className="w-4 h-4 text-yellow-400" />
              50,000+ safari enthusiasts worldwide
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}