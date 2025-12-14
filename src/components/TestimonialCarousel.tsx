'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Playfair_Display } from 'next/font/google';
import { cn } from '@/lib/utils';

const playfair = Playfair_Display({ subsets: ['latin'] });

const testimonials = [
  {
    id: 1,
    text: "This company made my dream vacation come true with incredible professionalism. I can't wait to book my next adventure with them.",
    name: "John Abraham",
    location: "New York, USA",
    image: "/images/testimonial-1.jpg",
    rating: 5
  },
  {
    id: 2,
    text: "The customer support was outstanding, and the itinerary was thoughtfully planned. Every moment of the trip felt special and well taken care of.",
    name: "Sarah Mitchell",
    location: "London, UK",
    image: "/images/testimonial-2.jpg",
    rating: 5
  },
  {
    id: 3,
    text: "From booking to the final day, everything was seamless and stress-free. I highly recommend their services for an unforgettable travel experience.",
    name: "David Chen",
    location: "Singapore",
    image: "/images/testimonial-3.jpg",
    rating: 5
  },
  {
    id: 4,
    text: "The trip was perfectly organized, and every detail exceeded my expectations. The team made it easy to relax and fully enjoy my vacation.",
    name: "Emma Rodriguez",
    location: "Madrid, Spain",
    image: "/images/testimonial-4.jpg",
    rating: 5
  }
];

// ✅ ADD THIS INTERFACE
interface TestimonialCarouselProps {
  isParallax?: boolean;
}

export function TestimonialCarousel({ isParallax = false }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Parallax Background */}
      {isParallax && (
        <>
          <motion.div
            animate={{ x: [0, -100, 0] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/images/testimonials-bg.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </>
      )}
      
      {/* Default Background */}
      {!isParallax && (
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 to-neutral-800" />
      )}

      {/* Floating quote marks */}
      <motion.div
        animate={{ y: [-10, 10, -10], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 left-10 text-9xl text-yellow-400/10 font-serif"
      >
        "
      </motion.div>
      <motion.div
        animate={{ y: [10, -10, 10], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, delay: 4, repeat: Infinity }}
        className="absolute bottom-20 right-10 text-9xl text-yellow-400/10 font-serif"
      >
        "
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h5 className={cn(
            "text-sm font-semibold tracking-widest uppercase mb-4",
            isParallax ? "text-white" : "text-yellow-400"
          )}>
            Stories from the Field
          </h5>
          <h2 className={`${playfair.className} text-5xl lg:text-6xl font-bold text-white`}>
            Our Clients Say!!!
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={cn(
                "rounded-3xl p-12 border text-center backdrop-blur-xl",
                isParallax ? "bg-white/10 border-white/20" : "bg-neutral-800/60 border-neutral-700"
              )}
            >
              <Quote className="w-16 h-16 text-yellow-400/30 mx-auto mb-8" />
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xl text-white leading-relaxed mb-10 font-light"
              >
                {testimonials[currentIndex].text}
              </motion.p>

              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                  className="w-24 h-24 rounded-full overflow-hidden border-4 border-yellow-400 mb-6"
                >
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    width={96}
                    height={96}
                    className="object-cover"
                  />
                </motion.div>
                
                <motion.h5
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className={`${playfair.className} text-2xl font-bold text-white mb-2`}
                >
                  {testimonials[currentIndex].name}
                </motion.h5>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="text-neutral-400 mb-4"
                >
                  {testimonials[currentIndex].location}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex gap-2"
                >
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 bg-neutral-800/80 border border-neutral-700 rounded-full flex items-center justify-center text-white hover:bg-yellow-400 hover:text-neutral-900 transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 bg-neutral-800/80 border border-neutral-700 rounded-full flex items-center justify-center text-white hover:bg-yellow-400 hover:text-neutral-900 transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={cn(
                  "w-3 h-3 rounded-full transition-colors",
                  i === currentIndex ? "bg-yellow-400" : "bg-neutral-600 hover:bg-neutral-500"
                )}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}