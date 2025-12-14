'use client';

import { motion } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';
import { Button } from './ui/button';
import { ArrowRight, MessageCircle, Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const playfair = Playfair_Display({ subsets: ['latin'] });

export function FinalCTA() {
  const socialLinks = [
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@allaboutsafarisafrica',
      Icon: () => (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v13.67a2.4 2.4 0 1 1-2.4-2.4c.2 0 .41.01.61.04V9.41a6.47 6.47 0 0 0-.78-.07A6.47 6.47 0 0 0 5 16.34v4.18A8.86 8.86 0 0 0 14.77 24c4.92 0 8.93-4.01 8.93-8.93V11.5a7.11 7.11 0 0 0 3.3 1.75v-3.74a5.04 5.04 0 0 1-.77-.07Z" />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/rastysphotography/',
      Icon: Facebook,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/allaboutsafarisafrica/reels/',
      Icon: Instagram,
    },
  ];

  return (
    <section className="relative py-40 bg-gradient-to-br from-green-900 via-amber-800 to-orange-700 overflow-hidden">
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/final-cta-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-black/70" />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <h5 className="text-yellow-400 text-sm uppercase tracking-[0.3em] mb-6">
            Your African Dream Awaits
          </h5>
          <h2 className={`${playfair.className} text-6xl lg:text-8xl font-bold text-white mb-8`}>
            The Journey of
            <span className="block text-yellow-400">a Lifetime</span>
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto">
            The wilderness calls. Answer with a journey crafted exclusively for you by Africa's premier safari architects.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link href="https://wa.me/254700064857" target="_blank">
              <Button className="bg-yellow-400 hover:bg-orange-500 text-neutral-900 font-bold px-12 py-6 rounded-full text-xl transition-all duration-300 hover:scale-105 shadow-2xl shadow-yellow-400/40">
                Start Planning Today
                <MessageCircle className="w-6 h-6 ml-2" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="border-2 border-white text-white hover:bg-white hover:text-neutral-900 font-bold px-12 py-6 rounded-full text-xl transition-all duration-300">
                Schedule Call
              </Button>
            </Link>
          </div>

          {/* Social Media Section */}
          <div className="border-t border-white/20 pt-12">
            <p className="text-white/80 text-sm uppercase tracking-[0.2em] mb-6">
              Follow Us on Social Media
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              {socialLinks.map(({ name, href, Icon }) => (
                <motion.a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative"
                >
                  <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center text-neutral-900 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:bg-orange-500">
                    <Icon className="w-8 h-8" />
                  </div>
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-yellow-400 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {name}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}