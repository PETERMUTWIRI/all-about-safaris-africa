'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Quote } from 'lucide-react';
import { Playfair_Display } from 'next/font/google';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const playfair = Playfair_Display({ subsets: ['latin'] });

const testimonials = [
  {
    id: 1,
    text: "The most life-changing experience of my life. Every detail was perfect. Seeing the Great Migration from our private camp was beyond anything I imagined.",
    name: "Sarah Mitchell",
    location: "New York, USA",
    image: "/images/testimonial-1.jpg",
    rating: 5
  },
  {
    id: 2,
    text: "Luxury in the wild. They exceeded every expectation we had. The gorilla trekking was intimate, safe, and absolutely magical.",
    name: "James Chen",
    location: "Singapore",
    image: "/images/testimonial-2.jpg",
    rating: 5
  },
  {
    id: 3,
    text: "Professional, passionate, and perfect. The Big Five in one day! Our guide's knowledge made every sighting special.",
    name: "Maria Santos",
    location: "Madrid, Spain",
    image: "/images/testimonial-3.jpg",
    rating: 5
  }
];

export function TestimonialsParallax() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative py-40 bg-neutral-900 overflow-hidden">
      {/* Parallax Background Layer */}
      <motion.div
        animate={{ x: [0, -100, 0] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/testimonials-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-black/70" />

      {/* Floating Quote Marks */}
      <motion.div
        animate={{ y: [-20, 20, -20], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-20 left-10 text-[12rem] text-yellow-400/20 font-serif"
      >
        "
      </motion.div>
      <motion.div
        animate={{ y: [20, -20, 20], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 10, delay: 5, repeat: Infinity }}
        className="absolute bottom-20 right-10 text-[12rem] text-yellow-400/20 font-serif"
      >
        "
      </motion.div>

      <div ref={ref} className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h5 className="text-yellow-400 text-sm uppercase tracking-[0.3em] mb-6 text-white">
            Stories from the Safari
          </h5>
          <h2 className={`${playfair.className} text-6xl lg:text-8xl font-bold text-white mb-8`}>
            Voices of
            <span className="block text-yellow-400">African Dreams</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <Quote className="w-16 h-16 text-yellow-400/40 mb-6" />
              
              <p className="text-xl text-white leading-relaxed mb-8 italic font-light">
                {testimonial.text}
              </p>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-400">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h5 className={`${playfair.className} text-lg font-bold text-white`}>
                    {testimonial.name}
                  </h5>
                  <p className="text-neutral-400 text-sm">{testimonial.location}</p>
                  <div className="flex gap-1 mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}