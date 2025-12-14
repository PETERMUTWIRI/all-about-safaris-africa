'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { PackageCard } from './PackageCard';
import { Playfair_Display } from 'next/font/google';
import { cn } from '@/lib/utils';

const playfair = Playfair_Display({ subsets: ['latin'] });

const packages = [
  // LEGACY PACKAGES (Keep these with exact image names)
  {
    id: 1,
    title: "Maasai Mara",
    duration: "12 days",
    price: "$3,100",
    originalImage: "packages-1.jpg",
    locations: "Maasai Mara/Mount kenya/Amboseli/Nakuru/Nairobi",
    description: "Embark on breathtaking 12-day adventure through Maasai Mara, Nakuru, Amboseli, and Mount Kenya for $3,100, experiencing spectacular wildlife,culture.",
    days: "12 Day Package",
    category: "Premium Safari",
    variant: 'left' as const,
  },
  {
    id: 2,
    title: "Lake Nakuru",
    duration: "2 days",
    price: "$449",
    originalImage: "packages-2.jpeg",
    locations: "Lake Nakuru/Lake Bogoria",
    description: "Enjoy a 2-day adventure to Lake Nakuru and Lake Bogoria for $449, featuring flamingos, wildlife, hot springs, guided drives, and comfortable accommodations.",
    days: "2 Day Package",
    category: "Short Escape",
    variant: 'right' as const,
  },
  {
    id: 3,
    title: "Amboseli",
    duration: "5 days",
    price: "$1,150",
    originalImage: "packages-3.jpg",
    locations: "Amboseli/Tsavo East/West",
    description: "Experience a 5-day safari to Amboseli, Tsavo East, and West for $1,150, featuring stunning wildlife, scenic views, guided drives, and cozy lodges.",
    days: "5 Days Package",
    category: "Classic Safari",
    variant: 'left' as const,
  },
  {
    id: 4,
    title: "Nairobi City",
    duration: "3 days",
    price: "$649",
    originalImage: "Packages-n.jpg",
    locations: "Nairobi City",
    description: "Discover Nairobi on a 3-day city tour for $649, featuring wildlife parks, cultural sites, guided tours, vibrant markets, and comfortable accommodations.",
    days: "Nairobi Tour",
    category: "Urban Adventure",
    variant: 'right' as const,
  },

  // NEW PACKAGES - OCEANS & BEACHES
  {
    id: 5,
    title: "Zanzibar Beach Escape",
    duration: "7 days",
    price: "$1,899",
    originalImage: "zanzibar-beach.jpg",
    locations: "Zanzibar/Stone Town",
    description: "Crystal-clear waters, pristine beaches, and Swahili culture. Luxury beach resort with spice tours, dhow cruises, and snorkeling.",
    days: "7 Days Package",
    category: "Beach & Ocean",
    variant: 'left' as const,
  },
  {
    id: 6,
    title: "Lamu Island Culture",
    duration: "5 days",
    price: "$1,299",
    originalImage: "lamu-cultural.jpg",
    locations: "Lamu/Shela Beach",
    description: "UNESCO World Heritage site exploration. Traditional dhow sailing, Swahili architecture, and authentic cultural immersion.",
    days: "5 Days Package",
    category: "Cultural Beach",
    variant: 'right' as const,
  },
  {
    id: 7,
    title: "Diani Reef Explorer",
    duration: "6 days",
    price: "$1,449",
    originalImage: "diani-reef.jpg",
    locations: "Diani Beach/Wasini Island",
    description: "Kenya's premier beach destination with coral reef snorkeling, dolphin watching, and luxury coastal resorts.",
    days: "6 Days Package",
    category: "Marine Safari",
    variant: 'left' as const,
  },

  // NEW PACKAGES - ADVENTURE & SPORTS
  {
    id: 8,
    title: "Hot Air Balloon Safari",
    duration: "3 days",
    price: "$2,299",
    originalImage: "balloon-mara.jpg",
    locations: "Masai Mara Reserve",
    description: "Sunrise balloon flight over the Mara, champagne breakfast, and exclusive game drives with expert guides.",
    days: "3 Days Package",
    category: "Adventure Safari",
    variant: 'right' as const,
  },
  {
    id: 9,
    title: "Hell's Gate Adventure",
    duration: "2 days",
    price: "$399",
    originalImage: "hells-gate.jpg",
    locations: "Hell's Gate/Naivasha",
    description: "Rock climbing, cycling safaris, gorge hiking, and hot springs. Perfect for active travelers seeking thrills.",
    days: "2 Days Package",
    category: "Active Adventure",
    variant: 'left' as const,
  },
  {
    id: 10,
    title: "Mount Kenya Trek",
    duration: "7 days",
    price: "$2,899",
    originalImage: "mount-kenya.jpg",
    locations: "Mount Kenya National Park",
    description: "High-altitude trekking to Point Lenana. Glacial valleys, alpine lakes, and world-class mountaineering experience.",
    days: "7 Days Package",
    category: "Mountain Expedition",
    variant: 'right' as const,
  },

  // NEW PACKAGES - GREAT RIFT VALLEY
  {
    id: 11,
    title: "Great Rift Valley Explorer",
    duration: "8 days",
    price: "$1,799",
    originalImage: "rift-valley.jpg",
    locations: "Lake Naivasha/Lake Elementaita/Lake Bogoria",
    description: "Journey through the world's most spectacular valley. Flamingos, geysers, and crater lakes with stunning viewpoints.",
    days: "8 Days Package",
    category: "Geological Wonder",
    variant: 'left' as const,
  },
  {
    id: 12,
    title: "Lake Turkana Expedition",
    duration: "10 days",
    price: "$3,199",
    originalImage: "turkana-desert.jpg",
    locations: "Lake Turkana/Sibiloi National Park",
    description: "The 'Jade Sea' expedition. Remote desert landscapes, prehistoric sites, and authentic cultural encounters.",
    days: "10 Days Package",
    category: "Extreme Expedition",
    variant: 'right' as const,
  },

  // NEW PACKAGES - PREMIUM & LUXURY
  {
    id: 13,
    title: "Presidential Safari",
    duration: "14 days",
    price: "$12,500",
    originalImage: "presidential-safari.jpg",
    locations: "Masai Mara/Serengeti/Ngorongoro",
    description: "Ultra-luxury private safari. Presidential suites, private charters, exclusive access, and personal concierge.",
    days: "14 Days Package",
    category: "Ultra Luxury",
    variant: 'left' as const,
  },
  {
    id: 14,
    title: "Honeymoon Safari",
    duration: "10 days",
    price: "$5,999",
    originalImage: "honeymoon-safari.jpg",
    locations: "Masai Mara/Diani Beach",
    description: "Romance meets adventure. Private bush dinners, luxury lodges, spa treatments, and secluded beaches.",
    days: "10 Days Package",
    category: "Romance & Honeymoon",
    variant: 'right' as const,
  },

  // NEW PACKAGES - WILDLIFE SPECIALISTS
  {
    id: 15,
    title: "Big Cat Specialist",
    duration: "7 days",
    price: "$2,699",
    originalImage: "big-cat-safari.jpg",
    locations: "Masai Mara/Amboseli/Tsavo",
    description: "Dedicated lion, leopard, and cheetah tracking. Expert guides, radio tracking, and predator behavior insights.",
    days: "7 Days Package",
    category: "Wildlife Specialist",
    variant: 'left' as const,
  },
  {
    id: 16,
    title: "Birding Paradise",
    duration: "9 days",
    price: "$2,099",
    originalImage: "birding-safari.jpg",
    locations: "Lake Naivasha/Lake Baringo/Lake Bogoria",
    description: "450+ bird species. Expert ornithologist guides, specialized equipment, and prime birding locations.",
    days: "9 Days Package",
    category: "Birding Safari",
    variant: 'right' as const,
  },

  // NEW PACKAGES - CULTURAL & PHOTOGRAPHY
  {
    id: 17,
    title: "Masai Cultural Deep Dive",
    duration: "5 days",
    price: "$1,299",
    originalImage: "masai-cultural.jpg",
    locations: "Loita Hills/Masai Mara",
    description: "Immersive cultural experience. Traditional villages, warrior training, beadwork, and authentic ceremonies.",
    days: "5 Days Package",
    category: "Cultural Immersion",
    variant: 'left' as const,
  },
  {
    id: 18,
    title: "Photography Safari",
    duration: "8 days",
    price: "$3,499",
    originalImage: "photography-safari.jpg",
    locations: "Masai Mara/Amboseli/Samburu",
    description: "Professional photography guidance. Golden hour shoots, hides, specialized vehicles, and expert wildlife photography tips.",
    days: "8 Days Package",
    category: "Photography Tour",
    variant: 'right' as const,
  },

  // NEW PACKAGES - FAMILY & EDUCATIONAL
  {
    id: 19,
    title: "Family Safari Adventure",
    duration: "7 days",
    price: "$2,799",
    originalImage: "family-safari.jpg",
    locations: "Masai Mara/Lake Naivasha",
    description: "Child-friendly activities, educational programs, junior ranger training, and family bonding experiences.",
    days: "7 Days Package",
    category: "Family Safari",
    variant: 'left' as const,
  },
  {
    id: 20,
    title: "Student Expedition",
    duration: "10 days",
    price: "$1,899",
    originalImage: "student-safari.jpg",
    locations: "Nairobi/Masai Mara/Lake Nakuru",
    description: "Educational wildlife programs. Conservation lessons, field research, and university-level ecology seminars.",
    days: "10 Days Package",
    category: "Educational Tour",
    variant: 'right' as const,
  },
];

export function PackagesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-slide effect
  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => {
        const nextIndex = prev + 1;
        if (nextIndex >= packages.length) return 0;
        return nextIndex;
      });
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const slide = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      const nextIndex = prev + newDirection;
      if (nextIndex < 0) return packages.length - 1;
      if (nextIndex >= packages.length) return 0;
      return nextIndex;
    });
    // Pause auto-play briefly when user interacts
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 5000);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section className="py-32 bg-gradient-to-b from-neutral-900 to-neutral-800">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h5 className="text-yellow-400 text-sm uppercase tracking-[0.3em] mb-4">
             Curated Adventures for you 
          </h5>
          <h2 className={`${playfair.className} text-5xl lg:text-7xl font-bold text-white`}>
            Your Perfect Safari
            <span className="block text-yellow-400">Awaits</span>
          </h2>
          <p className="text-neutral-400 text-lg mt-6 max-w-3xl mx-auto">
            From ocean escapes to mountain peaks, cultural immersions to wildlife spectacles—every journey crafted for the discerning explorer.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto mb-24">
          <div className="overflow-hidden rounded-3xl">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute inset-0"
              >
                <PackageCard 
                  {...packages[currentIndex]} 
                  index={0}
                />
              </motion.div>
            </AnimatePresence>
            
            {/* Placeholder to maintain height */}
            <div className="invisible">
              <PackageCard {...packages[0]} index={0} />
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={() => slide(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 w-14 h-14 bg-neutral-800/80 border border-neutral-700 rounded-full flex items-center justify-center text-white hover:bg-yellow-400 hover:text-neutral-900 transition-all backdrop-blur-sm"
            aria-label="Previous package"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => slide(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 w-14 h-14 bg-neutral-800/80 border border-neutral-700 rounded-full flex items-center justify-center text-white hover:bg-yellow-400 hover:text-neutral-900 transition-all backdrop-blur-sm"
            aria-label="Next package"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {packages.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > currentIndex ? 1 : -1);
                  setCurrentIndex(i);
                }}
                className={cn(
                  "w-3 h-3 rounded-full transition-colors",
                  i === currentIndex ? "bg-yellow-400" : "bg-neutral-600 hover:bg-neutral-500"
                )}
              />
            ))}
          </div>
        </div>

        {/* All Packages Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className={`${playfair.className} text-3xl lg:text-4xl font-bold text-center text-white mb-12`}>
            Complete Safari Collection
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {packages.map((pkg, index) => (
              <PackageCard key={pkg.id} {...pkg} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}