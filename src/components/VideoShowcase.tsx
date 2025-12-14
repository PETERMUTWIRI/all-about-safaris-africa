'use client';

import { motion } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';
import Link from 'next/link';
import { Music, Facebook, Instagram } from 'lucide-react';
import Image from 'next/image';

const playfair = Playfair_Display({ subsets: ['latin'] });

export function VideoShowcase() {
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
    <section className="relative py-40 bg-neutral-900 overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/images/video-showcase-bg.jpg"
            alt="Video Background"
            fill
            className="object-cover opacity-40"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/70 to-neutral-900" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <h5 className="text-yellow-400 text-sm uppercase tracking-[0.3em] mb-6">
            Stay Connected
          </h5>
          <h2 className={`${playfair.className} text-6xl lg:text-7xl font-bold text-white mb-8`}>
            Visit Our
            <span className="block text-yellow-400">Social Media Pages</span>
          </h2>
          <p className="text-xl text-white/80 mb-16">
            Follow us for stunning safari photos, travel tips, and exclusive behind-the-scenes content.
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-8 flex-wrap">
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
                <div className="w-20 h-20 rounded-full bg-yellow-400 flex items-center justify-center text-neutral-900 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:bg-orange-500">
                  <Icon className="w-10 h-10" />
                </div>
                <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {name}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}