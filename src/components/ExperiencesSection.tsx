'use client';

import { motion } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';
import { ExperienceCard } from './ExperienceCard';

const playfair = Playfair_Display({ subsets: ['latin'] });

interface Experience {
  title: string;
  location: string;
  duration: string;
  price: string;
  image: string;
  description: string;
}

export function ExperiencesSection({ experiences }: { experiences: Experience[] }) {
  return (
    <section className="py-32">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={`${playfair.className} text-5xl font-bold text-center mb-4 text-white`}
        >
          Curated Experiences
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center text-neutral-400 mb-16 max-w-2xl mx-auto"
        >
          Each journey is a masterpiece, painted with the colors of your wildest dreams.
        </motion.p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8, ease: "easeOut" }}
            >
              <ExperienceCard experience={exp} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}