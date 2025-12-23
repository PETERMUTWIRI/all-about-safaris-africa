'use client';

import { motion, useInView } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';
import { ServiceCard } from './ServiceCard';
import { TestimonialCarousel } from './TestimonialCarousel';
import { Newsletter } from './Newsletter';
import { BackToTop } from './BackToTop';
import { Button } from './ui/button';
import { ArrowRight, Shield, Users, Globe, Phone, Trophy, MapPin, Award, Star, ChevronDown, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const playfair = Playfair_Display({ subsets: ['latin'] });

const services = [
  {
    title: "Wildlife Tours",
    description: "Our knowledgeable guides, passionate about wildlife and conservation, offer deep insights into the animals and their habitats, ensuring unforgettable experiences from safaris in iconic game reserves to tracking the 'Big Five.'",
    searchTerm: "lion in masai mara kenya safari",
    imageName: "wildlife-tours.jpg",
    variant: 'left' as const,
  },
  {
    title: "Hiking Tours",
    description: "Our expert guides, equipped with in-depth knowledge of the terrain, lead you on thrilling hiking adventures through breathtaking landscapes, ensuring every step offers an unforgettable connection with nature.",
    searchTerm: "mount kenya hiking trail landscape",
    imageName: "hiking-tours.jpg",
    variant: 'right' as const,
  },
  {
    title: "Holiday Tours",
    description: "Whether you seek relaxation or adventure, we offer customizable holiday packages that cater to your needs. Enjoy seamless travel experiences to stunning destinations, unwind in luxury resorts, and immerse yourself in local culture.",
    searchTerm: "luxury safari lodge tent kenya",
    imageName: "holiday-tours.jpg",
    variant: 'left' as const,
  },
  {
    title: "Historic Tours",
    description: "Step back in time with our Historic Tours and explore the rich history and culture of iconic landmarks. Our expert guides bring the past to life, offering in-depth stories and insights into ancient civilizations and heritage sites.",
    searchTerm: "lamu old town kenya architecture",
    imageName: "historic-tours.jpg",
    variant: 'right' as const,
  },
  {
    title: "City Tours",
    description: "From historical monuments to modern attractions, our tours give you an authentic experience of the world's most iconic cities. Explore bustling markets, dine in local hotspots, and uncover hidden gems while learning about the city's culture.",
    searchTerm: "nairobi city skyline kenya",
    imageName: "city-tours.jpg",
    variant: 'left' as const,
  },
  {
    title: "Hotel Reservation",
    description: "Our Hotel Reservation service provides you with easy and convenient access to the best accommodations. Whether you're seeking luxury resorts, budget-friendly hotels, or boutique stays, we offer a wide range of options tailored to your preferences.",
    searchTerm: "luxury hotel pool kenya safari",
    imageName: "luxury hotel pool kenya safari.jpg",
    variant: 'right' as const,
  },
  {
    title: "Travel Guides",
    description: "Whether you're exploring bustling cities, serene landscapes, or remote destinations, our experienced guides offer tailored insights into local culture, history, and hidden gems. Every trip becomes an unforgettable adventure.",
    searchTerm: "kenyan safari guide talking to tourists",
    imageName: "travel-guides.jpg",
    variant: 'left' as const,
  },
  {
    title: "Event Management",
    description: "Whether it's a corporate gathering or private celebration, we work closely with you to bring your vision to life, delivering memorable and flawlessly executed events that leave a lasting impression.",
    searchTerm: "african safari bush dinner setup",
    imageName: "event-management.jpg",
    variant: 'right' as const,
  },
];

const stats = [
  { number: "15+", label: "Years Leading Safaris", Icon: Trophy },
  { number: "50K+", label: "Happy Explorers", Icon: Users },
  { number: "100%", label: "Safety Record", Icon: Shield },
  { number: "25+", label: "African Destinations", Icon: Globe },
];

const processSteps = [
  { id: 1, title: "Consultation", description: "We listen to your dreams and craft a personalized safari blueprint", Icon: Phone },
  { id: 2, title: "Design", description: "Our experts design every detail, from lodges to logistics", Icon: MapPin },
  { id: 3, title: "Refine", description: "We fine-tune together until it's your perfect African story", Icon: Award },
  { id: 4, title: "Execute", description: "Your journey begins with 24/7 support and seamless execution", Icon: Star },
];

export function ServicesContent() {
  // ✅ PREVENTS NAVBAR STRETCH: overflow-x-hidden on wrapper
  return (
    <div className="overflow-x-hidden">
      {/* SECTION 1: Premium Header */}
      <section className="relative pt-20 lg:pt-32 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-4"
        >
          <div className="grid lg:grid-cols-5 items-center gap-8 md:gap-16">
            {/* Left Side - Brand Mark */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="lg:col-span-2 flex flex-col items-start"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center">
                  <Star className="w-8 h-8 text-neutral-900" />
                </div>
                <div>
                  <p className="text-yellow-400 text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em]">Since 2009</p>
                  <p className="text-white/70 text-xs">Pioneering Excellence</p>
                </div>
              </div>
              <h5 className="text-yellow-400 text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] mb-4">
                Premium Safari Services
              </h5>
              <div className="relative pl-6 md:pl-8">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-yellow-400/30" />
                <p className="text-base md:text-lg text-white/80 italic leading-relaxed">
                  "Every journey is a masterpiece, painted with the brushstrokes of your wildest dreams and our deep African expertise."
                </p>
              </div>
            </motion.div>

            {/* Right Side - Main Title */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="lg:col-span-3"
            >
              <h1 className={`${playfair.className} text-4xl md:text-6xl lg:text-8xl font-bold text-white leading-tight mb-4 md:mb-6`}>
                Curated Journeys
                <span className="block text-yellow-400">Beyond Imagination</span>
              </h1>
              <p className="text-base md:text-xl text-white/80 max-w-3xl leading-relaxed mb-6 md:mb-8">
                Where luxury meets wilderness. Every experience meticulously crafted for those who demand excellence and cherish authentic African adventures.
              </p>
              <ChevronDown className="w-8 h-8 md:w-10 md:h-10 text-yellow-400 animate-bounce" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 2: Full-Width Alternating Services */}
      <section className="py-20 md:py-32 bg-neutral-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className={`${playfair.className} text-3xl md:text-5xl lg:text-6xl font-bold text-white`}>
              Our Signature
              <span className="block text-yellow-400">Experiences</span>
            </h2>
          </motion.div>

          <div className="space-y-16 md:space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: service.variant === 'left' ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="relative"
              >
                <div className={cn(
                  "grid lg:grid-cols-2 gap-8 md:gap-16 items-center",
                  service.variant === 'right' && "lg:grid-flow-dense"
                )}>
                  {/* Text Content */}
                  <div className={cn(
                    "space-y-4 md:space-y-6",
                    service.variant === 'right' && "lg:col-start-2"
                  )}>
                    <div className="flex items-center gap-4 mb-3 md:mb-4">
                      <span className="text-yellow-400 text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em]">Service {index + 1}</span>
                    </div>
                    <h3 className={`${playfair.className} text-2xl md:text-4xl lg:text-5xl font-bold text-white`}>
                      {service.title}
                    </h3>
                    <p className="text-base md:text-lg text-white/80 leading-relaxed">
                      {service.description}
                    </p>
                    <Link href="https://wa.me/254700064857 " target="_blank">
                      <Button className="bg-yellow-400 hover:bg-orange-500 text-neutral-900 font-bold px-6 md:px-8 py-3 md:py-4 rounded-full text-sm md:text-base transition-all duration-300 hover:scale-105">
                        Learn More
                        <MessageCircle className="w-4 h-4 md:w-5 md:h-5 ml-2" />
                      </Button>
                    </Link>
                  </div>

                  {/* Image */}
                  <div className={cn(
                    "relative h-[400px] md:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-black/30",
                    service.variant === 'right' && "lg:col-start-1"
                  )}>
                    <Image
                      src={`/images/${service.imageName}`}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Why Choose Us with Stats */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-green-900 to-amber-800 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/stats-bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-green-900/80" />
        
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-12 md:mb-20"
          >
            <h5 className="text-yellow-400 text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] mb-3 md:mb-6">
              Proven Excellence
            </h5>
            <h2 className={`${playfair.className} text-3xl md:text-5xl lg:text-6xl font-bold text-white`}>
              Global Explorers Trust
              <span className="block text-yellow-400">Our Legacy</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="text-center p-6 md:p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-yellow-400 flex items-center justify-center">
                    <stat.Icon className="w-8 h-8 md:w-10 md:h-10 text-green-900" />
                  </div>
                </div>
                <motion.div
                  className={`${playfair.className} text-2xl md:text-4xl lg:text-5xl font-bold text-yellow-400 mb-1 md:mb-2`}
                >
                  {stat.number}
                </motion.div>
                <p className="text-white font-medium text-sm md:text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Parallax Testimonials */}
      <section className="relative py-20 md:py-32 bg-neutral-900 overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ x: [0, -50, 0] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/images/testimonials-bg.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <TestimonialCarousel isParallax />
        </div>
      </section>

      {/* SECTION 5: Our Process */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-neutral-950 to-neutral-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-12 md:mb-20"
          >
            <h5 className="text-yellow-400 text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] mb-3 md:mb-6">
              Seamless Process
            </h5>
            <h2 className={`${playfair.className} text-3xl md:text-5xl lg:text-6xl font-bold text-white`}>
              Crafting Your
              <span className="block text-yellow-400">Perfect Journey</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center p-6 md:p-8 rounded-2xl md:rounded-3xl bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 hover:bg-neutral-800 transition-all duration-300"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 rounded-full bg-yellow-400 flex items-center justify-center text-lg md:text-2xl font-bold text-neutral-900">
                  {step.id}
                </div>
                <step.Icon className="w-8 h-8 md:w-10 md:h-10 text-yellow-400 mx-auto mb-3 md:mb-4" />
                <h3 className={`${playfair.className} text-lg md:text-2xl font-bold text-white mb-2 md:mb-3`}>
                  {step.title}
                </h3>
                <p className="text-neutral-400 text-sm md:text-base">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Final CTA */}
      <section className="relative py-24 md:py-40 bg-gradient-to-br from-green-950 via-amber-900 to-orange-800 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/final-cta-bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            <h5 className="text-yellow-400 text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] mb-3 md:mb-6">
              Your African Dream Awaits
            </h5>
            <h2 className={`${playfair.className} text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-6 md:mb-8`}>
              Begin Your
              <span className="block text-yellow-400">Journey</span>
            </h2>
            <p className="text-base md:text-xl text-white/80 mb-8 md:mb-12 max-w-3xl mx-auto">
              The wilderness calls. Answer with a journey crafted exclusively for you by Africa's premier safari architects.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              <Link href="https://wa.me/254700064857 " target="_blank">
                <Button className="bg-yellow-400 hover:bg-orange-500 text-neutral-900 font-bold px-6 md:px-12 py-3 md:py-6 rounded-full text-base md:text-xl transition-all duration-300 hover:scale-105 shadow-lg">
                  Start Planning Today
                  <MessageCircle className="w-5 h-5 md:w-6 md:h-6 ml-2" />
                </Button>
              </Link>
              <Link href="/packages">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-neutral-900 font-bold px-6 md:px-12 py-3 md:py-6 rounded-full text-base md:text-xl transition-all duration-300">
                  View Packages
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <BackToTop />
    </div>
  );
}