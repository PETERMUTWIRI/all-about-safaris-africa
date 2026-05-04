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
    title: "Nairobi National Park",
    duration: "3 Days",
    price: "$599",
    image: "/images/Packages-n.jpg",
    highlights: ["Wildlife Sanctuaries", "Cultural Sites", "City Safari"],
    locations: "Nairobi City"
  },
  {
    title: "Masai Mara National Reserve",
    duration: "12 Days",
    price: "$2,899",
    image: "/images/packages-1.jpg",
    highlights: ["Big Five", "Great Migration", "Luxury Lodges"],
    locations: "Kenya"
  },
  {
    title: "Amboseli National Park",
    duration: "5 Days",
    price: "$1,099",
    image: "/images/amboseli.jpg",
    highlights: ["Elephants", "Kilimanjaro Views", "Volcanic Landscapes"],
    locations: "Kenya"
  },
  {
    title: "Tsavo East National Park",
    duration: "5 Days",
    price: "$1,099",
    image: "/images/packages-3.jpg",
    highlights: ["Red Elephants", "Aruba Dam", "Theatre of the Wild"],
    locations: "Kenya"
  },
  {
    title: "Samburu National Reserve",
    duration: "12 Days",
    price: "$2,899",
    image: "/images/packages-1.jpg",
    highlights: ["Grevy's Zebra", "Reticulated Giraffe", "Samburu Culture"],
    locations: "Kenya"
  },
  {
    title: "Lake Nakuru National Park",
    duration: "2 Days",
    price: "$399",
    image: "/images/packages-2.jpeg",
    highlights: ["Flamingos", "Rhinos", "Rift Valley"],
    locations: "Kenya"
  },
  {
    title: "Lake Naivasha",
    duration: "8 Days",
    price: "$1,699",
    image: "/images/rift-valley.jpg",
    highlights: ["Boat Rides", "Hippos", "Crescent Island"],
    locations: "Kenya"
  },
  {
    title: "Mount Kenya National Park",
    duration: "7 Days",
    price: "$2,599",
    image: "/images/mount-kenya.jpg",
    highlights: ["Point Lenana", "Alpine Lakes", "High-Altitude Trek"],
    locations: "Kenya"
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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