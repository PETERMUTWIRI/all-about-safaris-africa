'use client';

import { motion } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';
import Link from 'next/link';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Facebook, 
  Instagram, 
  Shield,
  Award,
  Users,
  Globe,
  Heart,
  CreditCard,
  ChevronRight
} from 'lucide-react';
import Image from 'next/image';

const playfair = Playfair_Display({ subsets: ['latin'] });

const footerSections = [
  {
    title: "Safari Company",
    links: [
      { label: "About Our Story", href: "/about" },
      { label: "Our Team", href: "/about#team" },
      { label: "Awards & Recognition", href: "/about#awards" },
      { label: "Careers", href: "/careers" },
      { label: "Press & Media", href: "/press" },
    ]
  },
  {
    title: "Safari Services",
    links: [
      { label: "Wildlife Tours", href: "/services" },
      { label: "Luxury Lodges", href: "/services#hotels" },
      { label: "Private Safaris", href: "/packages" },
      { label: "Custom Itineraries", href: "/booking" },
      { label: "Travel Insurance", href: "/services#support" },
    ]
  },
  {
    title: "Travel Resources",
    links: [
      { label: "Safari Guide", href: "/blog" },
      { label: "Destination Info", href: "/blog#destinations" },
      { label: "Packing Lists", href: "/blog#guides" },
      { label: "Travel Tips", href: "/blog#tips" },
      { label: "FAQ", href: "/contact#faq" },
    ]
  }
];

const socialLinks = [
  { label: "TikTok", href: "https://www.tiktok.com/@allaboutsafarisafrica ", Icon: () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v13.67a2.4 2.4 0 1 1-2.4-2.4c.2 0 .41.01.61.04V9.41a6.47 6.47 0 0 0-.78-.07A6.47 6.47 0 0 0 5 16.34v4.18A8.86 8.86 0 0 0 14.77 24c4.92 0 8.93-4.01 8.93-8.93V11.5a7.11 7.11 0 0 0 3.3 1.75v-3.74a5.04 5.04 0 0 1-.77-.07Z" />
    </svg>
  ) },
  { label: "Facebook", href: "https://www.facebook.com/rastysphotography/ ", Icon: Facebook },
  { label: "Instagram", href: "https://www.instagram.com/allaboutsafarisafrica/reels/ ", Icon: Instagram },
];

const paymentMethods = [
  { label: "Visa", Icon: CreditCard },
  { label: "Mastercard", Icon: CreditCard },
  { label: "Amex", Icon: CreditCard },
  { label: "PayPal", Icon: CreditCard },
];

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-neutral-900 to-neutral-800 border-t border-neutral-700/50">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
      
      <div className="container mx-auto px-4 pt-12 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-12 h-12 rounded-full border-2 border-yellow-400 shadow-lg overflow-hidden group-hover:border-orange-500 transition-all duration-300">
                <Image
                  src="/images/safaris-logo.jpeg"
                  alt="All About Safaris Africa"
                  width={48}
                  height={48}
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <h3 className={`${playfair.className} text-xl font-bold text-white group-hover:text-yellow-400 transition-colors`}>
                  All About Safaris Africa
                </h3>
                <p className="text-neutral-400 text-xs">Premium Safari Experiences Since 2009</p>
              </div>
            </Link>

            <p className="text-neutral-400 mb-6 text-base leading-relaxed max-w-md">
              Crafting extraordinary journeys across Africa's most iconic landscapes, trusted by 50,000+ explorers worldwide.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a href="tel:+254700064857" className="flex items-center gap-3 text-neutral-300 hover:text-yellow-400 transition-colors group text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="font-medium">+254-700-064-857</span>
              </a>
              
              <a href="mailto:allaboutsafarisafrica@gmail.com" className="flex items-center gap-3 text-neutral-300 hover:text-yellow-400 transition-colors group text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="font-medium">allaboutsafarisafrica@gmail.com</span>
              </a>

              <div className="flex items-center gap-3 text-neutral-300 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                <span className="font-medium">CBD, Nairobi, Kenya</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-2">
              {socialLinks.map(({ href, Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-neutral-700 hover:bg-yellow-400 flex items-center justify-center transition-all duration-300 group"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className={`${playfair.className} text-lg font-bold text-white mb-4 relative pb-2`}>
                {section.title}
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-yellow-400" />
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-neutral-400 hover:text-yellow-400 transition-all duration-300 group text-xs"
                    >
                      <ChevronRight className="w-3 h-3 text-yellow-400/0 group-hover:text-yellow-400 transition-colors" />
                      <span className="group-hover:translate-x-1 transition-transform">
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-neutral-700/50 mt-12 pt-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            {/* Payment Methods */}
            <div className="flex items-center gap-3">
              <span className="text-neutral-400 text-xs">Secure Payments:</span>
              <div className="flex gap-1">
                {paymentMethods.map(({ label, Icon }) => (
                  <div
                    key={label}
                    className="w-8 h-5 rounded bg-neutral-700 flex items-center justify-center text-neutral-300 text-xs hover:bg-yellow-400 hover:text-neutral-900 transition-all duration-300"
                    title={label}
                  >
                    <Icon className="w-3 h-3" />
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-neutral-400 text-xs">
                <Shield className="w-4 h-4 text-yellow-400" />
                <span>100% Secure</span>
              </div>
              <div className="flex items-center gap-1 text-neutral-400 text-xs">
                <Award className="w-4 h-4 text-yellow-400" />
                <span>Award Winning</span>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center mt-6 pt-4 border-t border-neutral-700/30"
          >
            <p className="text-neutral-500 text-xs">
              2009-2024 All About Safaris Africa. All rights reserved. | 
              Designed with passion by 
              <a href="https://mutsynchub.com " className="text-yellow-400 hover:text-white transition-colors ml-1">
                Mutsynchub
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}