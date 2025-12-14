'use client';

import { motion } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';
import { Button } from './ui/button';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const playfair = Playfair_Display({ subsets: ['latin'] });

const packages = [
  {
    title: "Masai Mara Migration",
    duration: "7 Days",
    price: "$4,200",
    image: "/images/preview-mara.jpg",
    highlights: ["Big Five", "Great Migration", "Luxury Lodges"],
    locations: "Kenya, Tanzania"
  },
  {
    title: "Gorilla & Chimp Trek",
    duration: "10 Days",
    price: "$6,800",
    image: "/images/gorilla-trek.jpg",
    highlights: ["Gorillas", "Chimps", "Rainforest"],
    locations: "Uganda, Rwanda"
  },
  {
    title: "Southern Africa Explorer",
    duration: "14 Days",
    price: "$8,500",
    image: "/images/preview-southern.jpg",
    highlights: ["Victoria Falls", "Okavango", "Desert"],
    locations: "Zambia, Botswana, Namibia"
  }
];

export function PackagesPreview() {
  return (
    <section className="py-32 bg-gradient-to-b from-neutral-800 to-neutral-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h5 className="text-yellow-400 text-sm uppercase tracking-[0.3em] mb-4">
            Popular Packages
          </h5>
          <h2 className={`${playfair.className} text-5xl lg:text-6xl font-bold text-white`}>
            Handcrafted
            <span className="block text-yellow-400">Safari Collections</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group relative overflow-hidden rounded-3xl bg-neutral-800 border border-neutral-700 hover:border-yellow-400 transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-yellow-400 text-neutral-900 px-4 py-2 rounded-full font-bold">
                  {pkg.price}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className={`${playfair.className} text-2xl font-bold text-white mb-2`}>
                  {pkg.title}
                </h3>
                <div className="flex items-center gap-2 text-neutral-400 text-sm mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>{pkg.locations}</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-400 text-sm mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{pkg.duration}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {pkg.highlights.map((highlight) => (
                    <span key={highlight} className="px-3 py-1 bg-neutral-700 rounded-full text-xs text-neutral-300">
                      {highlight}
                    </span>
                  ))}
                </div>

                <Link href="/packages">
                  <Button className="w-full bg-yellow-400 hover:bg-orange-500 text-neutral-900 font-bold rounded-full transition-all duration-300 hover:scale-105">
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/packages">
            <Button className="bg-yellow-400 hover:bg-orange-500 text-neutral-900 font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105">
              Explore All Packages
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}