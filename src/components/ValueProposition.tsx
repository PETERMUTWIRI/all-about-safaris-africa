'use client';

import { motion } from 'framer-motion';
import { Shield, Award, Users, Globe, MapPin, Phone } from 'lucide-react';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });

const values = [
  {
    title: "Expert Local Guides",
    description: "Handpicked guides with 15+ years of experience in African wildlife and culture",
    Icon: Users,
  },
  {
    title: "Safety First",
    description: "100% safety record with comprehensive insurance and 24/7 support",
    Icon: Shield,
  },
  {
    title: "Award Winning",
    description: "Voted Africa's Leading Safari Operator 2023 by World Travel Awards",
    Icon: Award,
  },
  {
    title: "Sustainable Tourism",
    description: "Supporting local communities and wildlife conservation in every journey",
    Icon: Globe,
  },
];

export function ValueProposition() {
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
            Why Choose Us
          </h5>
          <h2 className={`${playfair.className} text-5xl lg:text-6xl font-bold text-white`}>
            The Gold Standard
            <span className="block text-yellow-400">In African Travel</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center p-8 rounded-3xl bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 hover:bg-neutral-800 transition-all duration-300"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-yellow-400 flex items-center justify-center">
                <value.Icon className="w-10 h-10 text-neutral-900" />
              </div>
              <h3 className={`${playfair.className} text-2xl font-bold text-white mb-3`}>
                {value.title}
              </h3>
              <p className="text-neutral-400">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}