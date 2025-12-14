'use client';

import { motion } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';
import { Button } from './ui/button';
import { ArrowRight, MapPin, Calendar, Star } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import type { Experience } from '@/types/experience';

const playfair = Playfair_Display({ subsets: ['latin'] });

const experiences: Experience[] = [
  {
    title: "Great Migration Camp",
    location: "Masai Mara, Kenya",
    duration: "7 Days",
    price: "From $4,200",
    image: "/images/featured-migration.jpg",
    description: "Witness nature's grandest spectacle from a private mobile camp that follows the herds."
  },
  {
    title: "Mountain Gorilla Trek",
    location: "Bwindi, Uganda",
    duration: "5 Days",
    price: "From $3,800",
    image: "/images/featured-gorilla.jpg",
    description: "Come face-to-face with mountain gorillas in their misty forest kingdom."
  },
  {
    title: "Coastal Dhow Safari",
    location: "Lamu, Kenya",
    duration: "4 Days",
    price: "From $2,600",
    image: "/images/featured-lamu.jpg",
    description: "Sail through history on a traditional dhow, exploring Swahili culture."
  },
  {
    title: "Desert Dune Safari",
    location: "Namib Desert, Namibia",
    duration: "6 Days",
    price: "From $5,200",
    image: "/images/featured-namib.jpg",
    description: "Explore the world's oldest desert from luxury tented camps under starlit skies."
  }
];

export function FeaturedExperiences() {
  return (
    <section className="py-32 bg-neutral-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h5 className="text-yellow-400 text-sm uppercase tracking-[0.3em] mb-4">
            Signature Experiences
          </h5>
          <h2 className={`${playfair.className} text-5xl lg:text-6xl font-bold text-white`}>
            Curated Adventures
            <span className="block text-yellow-400">For Discerning Explorers</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group relative overflow-hidden rounded-3xl bg-neutral-800 border border-neutral-700 hover:border-yellow-400 transition-all duration-300"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-yellow-400 text-neutral-900 px-3 py-1 rounded-full font-bold">
                  {exp.price}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-neutral-900/20 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className={`${playfair.className} text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors`}>
                  {exp.title}
                </h3>
                <div className="flex items-center gap-2 text-neutral-400 text-sm mb-3">
                  <MapPin className="w-4 h-4" />
                  <span>{exp.location}</span>
                </div>
                <p className="text-neutral-500 text-sm mb-4">{exp.description}</p>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-neutral-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/packages">
            <Button className="bg-yellow-400 hover:bg-orange-500 text-neutral-900 font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105">
              View All Experiences
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}