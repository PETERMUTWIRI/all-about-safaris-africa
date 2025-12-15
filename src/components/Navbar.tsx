'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronRight, Phone, Mail, MessageCircle, UserPlus, LogIn, Facebook, Instagram } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';
import Image from 'next/image';

const playfair = Playfair_Display({ subsets: ['latin'] });

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/packages', label: 'Packages' },
  { href: '/blog', label: 'Blog' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setNavHidden(true);
      } else {
        setNavHidden(false);
      }

      setScrolled(currentScrollY > 50);
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const primaryGreen = 'bg-green-800';
  const secondaryBrown = 'bg-amber-700';
  const accentGold = 'text-yellow-400';
  const accentGoldBg = 'bg-yellow-400';
  const accentGoldBorder = 'border-yellow-400';

  return (
    <>
      {/* TOP ROW - Logo + Contact (Hides on scroll down) */}
      <AnimatePresence>
        {!navHidden && (
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`hidden lg:block fixed top-0 left-0 right-0 z-50 ${primaryGreen}`}
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex justify-between items-center">
                {/* Left: Logo + Company Name */}
                <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
                  <div className="w-12 h-12 rounded-full border-2 border-white/30 shadow-lg overflow-hidden group-hover:border-yellow-400 transition-all duration-300">
                    <Image
                      src="/images/safaris-logo.jpeg"
                      alt="All About Safaris Africa"
                      width={48}
                      height={48}
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      priority
                    />
                  </div>
                  <div className="hidden md:block">
                    <h1 className={`${playfair.className} text-lg font-bold text-white group-hover:text-yellow-400 transition-colors`}>
                      All About Safaris Africa
                    </h1>
                    <p className="text-white/60 text-xs">Premium Safari Experiences</p>
                  </div>
                </Link>

                {/* Center: Contact Info + Social */}
                <div className="flex items-center gap-8 flex-grow justify-center">
                  <div className="flex flex-col gap-2">
                    <a href="tel:+254700064857" className="flex items-center gap-2 text-white/80 hover:text-yellow-400 transition-colors text-sm">
                      <Phone className="w-4 h-4 flex-shrink-0" />
                      <span className="whitespace-nowrap">+254-700-064-857</span>
                    </a>
                    <a href="mailto:allaboutsafarisafrica@gmail.com" className="flex items-center gap-2 text-white/80 hover:text-yellow-400 transition-colors text-sm">
                      <Mail className="w-4 h-4 flex-shrink-0" />
                      <span className="hidden lg:inline truncate max-w-xs">allaboutsafarisafrica@gmail.com</span>
                    </a>
                  </div>

                  <div className="w-px h-12 bg-white/20" />

                  <div className="flex items-center gap-4">
                    <a href="https://www.tiktok.com/@allaboutsafarisafrica" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-yellow-400 transition-colors" title="TikTok">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v13.67a2.4 2.4 0 1 1-2.4-2.4c.2 0 .41.01.61.04V9.41a6.47 6.47 0 0 0-.78-.07A6.47 6.47 0 0 0 5 16.34v4.18A8.86 8.86 0 0 0 14.77 24c4.92 0 8.93-4.01 8.93-8.93V11.5a7.11 7.11 0 0 0 3.3 1.75v-3.74a5.04 5.04 0 0 1-.77-.07Z" />
                      </svg>
                    </a>
                    <a href="https://www.facebook.com/rastysphotography/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-yellow-400 transition-colors" title="Facebook">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="https://www.instagram.com/allaboutsafarisafrica/reels/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-yellow-400 transition-colors" title="Instagram">
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Right: Tagline */}
                <div className="flex-shrink-0 max-w-xs text-right pl-6 border-l border-white/20">
                  <p className="text-white/70 text-sm leading-snug italic">
                    Experience the most <span className="text-yellow-400 font-semibold">unforgettable moments</span> of your life with us
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BOTTOM ROW - Navigation */}
      <div className={`fixed left-0 right-0 z-40 transition-all duration-500 bg-neutral-900/95 backdrop-blur-xl`}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Mobile Logo + Site Name */}
            <Link href="/" className="flex items-center gap-1.5 group flex-shrink-0 min-w-0">
              <div className="w-10 h-10 rounded-full border-2 border-yellow-400/50 overflow-hidden group-hover:border-yellow-400 transition-all duration-300 flex-shrink-0">
                <Image
                  src="/images/safaris-logo.jpeg"
                  alt="All About Safaris Africa"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <p className="text-white font-bold text-xs leading-tight truncate lg:text-sm">AllAboutSafarisAfrica</p>
              </div>
            </Link>

            {/* Navigation Links (Desktop only) */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative group text-white font-medium transition-colors hover:text-yellow-400 ${
                    pathname === item.href ? "text-yellow-400" : ""
                  }`}
                >
                  <span className="relative py-2">
                    {item.label}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-yellow-400 transition-all duration-300 ${
                      pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                    }`} />
                  </span>
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              {/* WhatsApp Icon (Desktop only) */}
              <Link
                href="https://wa.me/254700064857"
                target="_blank"
                className="hidden lg:block text-yellow-400 hover:text-yellow-500 transition-colors"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </Link>

              {/* Login/Signup (Desktop only) */}
              <div className="hidden md:flex items-center gap-4">
                <Link href="#" className="text-white hover:text-yellow-400 transition-colors text-sm font-medium">
                  <LogIn className="w-4 h-4 inline mr-1" />
                  Login
                </Link>
                <Link href="#" className="text-white hover:text-yellow-400 transition-colors text-sm font-medium">
                  <UserPlus className="w-4 h-4 inline mr-1" />
                  Sign Up
                </Link>
              </div>

              {/* Book Now Button (Desktop only) */}
              <Link href="/packages" className="hidden md:inline-flex items-center gap-2 bg-yellow-400 hover:bg-orange-500 text-neutral-900 font-bold rounded-full px-6 py-2 text-sm transition-all duration-300 hover:scale-105 shadow-lg">
                Book Now
                <ChevronRight className="w-4 h-4 ml-1" />
              </Link>

              {/* Mobile Menu Button (Right side, only on mobile) */}
              <button
                onClick={() => setIsOpen(true)}
                className="lg:hidden text-white p-2 hover:text-yellow-400 transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 180 }}
              className="fixed right-0 top-0 h-full w-full max-w-sm bg-neutral-900/95 backdrop-blur-xl shadow-2xl"
            >
              {/* Mobile Menu Header */}
              <div className="flex justify-between items-center p-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full border-2 border-white/30 overflow-hidden">
                    <Image
                      src="/images/safaris-logo.jpeg"
                      alt="All About Safaris Africa"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <span className={`${playfair.className} text-white text-sm font-bold`}>
                    All About Safaris
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white p-2 hover:text-yellow-400 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="p-6 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 text-white text-lg font-medium transition-colors hover:text-yellow-400 ${
                      pathname === item.href ? "text-yellow-400" : ""
                    }`}
                  >
                    <span className="flex items-center justify-between">
                      {item.label}
                      {pathname === item.href && (
                        <ChevronRight className="w-5 h-5 text-yellow-400" />
                      )}
                    </span>
                    <span className={`block h-0.5 bg-yellow-400 transition-all duration-300 ${
                      pathname === item.href ? "w-full" : "w-0"
                    }`} />
                  </Link>
                ))}
              </nav>

              {/* Mobile Contact & Social */}
              <div className="p-6 border-t border-white/10 space-y-4">
                <a href="tel:+254700064857" className="flex items-center gap-3 text-white/80 hover:text-yellow-400 transition-colors text-sm">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>+254-700-064-857</span>
                </a>
                <a href="mailto:allaboutsafarisafrica@gmail.com" className="flex items-center gap-3 text-white/80 hover:text-yellow-400 transition-colors text-sm">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="truncate">allaboutsafarisafrica@gmail.com</span>
                </a>

                <div className="flex items-center gap-4 pt-2">
                  <a href="https://www.tiktok.com/@allaboutsafarisafrica" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-yellow-400 transition-colors" title="TikTok">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v13.67a2.4 2.4 0 1 1-2.4-2.4c.2 0 .41.01.61.04V9.41a6.47 6.47 0 0 0-.78-.07A6.47 6.47 0 0 0 5 16.34v4.18A8.86 8.86 0 0 0 14.77 24c4.92 0 8.93-4.01 8.93-8.93V11.5a7.11 7.11 0 0 0 3.3 1.75v-3.74a5.04 5.04 0 0 1-.77-.07Z" />
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/rastysphotography/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-yellow-400 transition-colors" title="Facebook">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://www.instagram.com/allaboutsafarisafrica/reels/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-yellow-400 transition-colors" title="Instagram">
                    <Instagram className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Mobile Actions */}
              <div className="p-6 border-t border-white/10 space-y-4">
                <Link href="https://wa.me/254700064857" target="_blank" className="flex items-center gap-3 text-yellow-400 hover:text-yellow-500 transition-colors font-medium">
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </Link>

                <div className="flex items-center gap-4">
                  <Link href="#" className="text-white hover:text-yellow-400 transition-colors text-sm font-medium">
                    <LogIn className="w-4 h-4 inline mr-1" />
                    Login
                  </Link>
                  <Link href="#" className="text-white hover:text-yellow-400 transition-colors text-sm font-medium">
                    <UserPlus className="w-4 h-4 inline mr-1" />
                    Sign Up
                  </Link>
                </div>

                <Link href="/packages" className="w-full inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-orange-500 text-neutral-900 font-bold rounded-full px-6 py-3 text-sm transition-all duration-300 shadow-lg hover:scale-105">
                  Book Now
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="h-16 lg:h-20" /> 
    </>
  );
}