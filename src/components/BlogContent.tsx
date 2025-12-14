"use client";

import { motion } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';
import { BlogCard } from './BlogCard';
import { Newsletter } from './Newsletter';
import { BackToTop } from './BackToTop';
import { BlogPost } from '@/types/blog';
import { GuideModal } from './GuideModal';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const playfair = Playfair_Display({ subsets: ['latin'] });

interface BlogContentProps {
  posts: BlogPost[];
  onReadMore?: (post: BlogPost) => void; // ✅ Modal trigger (optional)
}

export function BlogContent({ posts, onReadMore }: BlogContentProps) {
  const [selectedGuide, setSelectedGuide] = useState<{
    title: string;
    subtitle?: string;
    content: string;
    image?: string;
  } | null>(null);
  const [isGuideOpen, setIsGuideOpen] = useState(false);

  function openGuide(guide: { title: string; subtitle?: string; content: string; image?: string }) {
    setSelectedGuide(guide);
    setIsGuideOpen(true);
  }

  return (
    <>
      {/* SECTION 1: Featured Blog Hero */}
      <section className="relative py-40 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/newsletter-bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-black/70" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center max-w-5xl mx-auto"
          >
            <h5 className="text-yellow-400 text-sm uppercase tracking-[0.3em] mb-6">
              Since 2009
            </h5>
            <h1 className={`${playfair.className} text-7xl lg:text-9xl font-bold text-white leading-tight mb-8`}>
              Safari Stories
              <span className="block text-yellow-400">From the Field</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              15 years of guiding adventures across Africa's most iconic landscapes. 
              Real stories from the bush, written by the experts who lived them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Latest Articles Grid */}
      <section className="py-32 bg-neutral-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-between mb-16"
          >
            <div>
              <h5 className="text-yellow-400 text-sm uppercase tracking-[0.3em] mb-4">
                Latest Stories
              </h5>
              <h2 className={`${playfair.className} text-5xl lg:text-6xl font-bold text-white`}>
                Recent
                <span className="block text-yellow-400">Adventures</span>
              </h2>
            </div>
            <Link href="/blog/archive">
              <Button className="bg-yellow-400 hover:bg-orange-500 text-neutral-900 font-bold px-6 py-3 rounded-full transition-all duration-300">
                View Archive
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
              >
                <BlogCard post={post} onReadMore={() => (onReadMore ? onReadMore(post) : undefined)} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: Safari Tips & Guides */}
      <section className="py-32 bg-gradient-to-b from-neutral-800 to-neutral-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-20"
          >
            <h5 className="text-yellow-400 text-sm uppercase tracking-[0.3em] mb-4">
              Safari Mastery
            </h5>
            <h2 className={`${playfair.className} text-5xl lg:text-6xl font-bold text-white`}>
              Expert Tips
              <span className="block text-yellow-400">& Guides</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/** Guide cards that open a modal with full guide content */}
            {
              (
                [
                  {
                    icon: '📸',
                    title: 'Photography Masterclass',
                    subtitle: "Capture wildlife like a pro — 15 years of field-tested techniques",
                    image: '/images/photography-hero.jpg',
                    content: `As a guide with 15 years in the field, photographing wildlife reliably comes down to preparation, patience and respect.

Start with the right kit: a reliable telephoto (200-400mm), fast lens (f/2.8–f/4) for low light, and a sturdy yet lightweight tripod or monopod for stability.

Settings: shoot at shutter speeds of at least 1/1000s for action; use continuous autofocus (AF-C) and back-button focus when tracking subjects. Prefer aperture-priority when you need a shallow depth of field for subject isolation.

Composition: anticipate behavior — place space in front of moving animals; use the environment (trees, river bends) to frame subjects. Keep horizons straight and watch distracting backgrounds.

Ethics: never stress wildlife for a shot. Keep distance, avoid flash on sensitive species, and follow your guide’s instructions.

Pro tips:
- Arrive early for golden light and calmer animals
- Practice panning at slower shutter speeds for creative motion
- Use burst mode for decisive moments
- Clean your sensors and carry spare batteries and cards

With practice and respect for wildlife, you'll capture authentic, powerful images.`
                  },
                  {
                    icon: '🎒',
                    title: 'Packing Essentials',
                    subtitle: "The ultimate safari packing list from guides who've seen it all",
                    image: '/images/packing-hero.jpg',
                    content: `After guiding hundreds of safaris, the essentials are consistent: layers, sun protection, and redundancy for kit.

Clothing: neutral, breathable layers — long-sleeve shirts for sun and insects, a warm fleece for mornings, and a windproof outer layer. Avoid white and bright colors.

Gear: binoculars (8x42 or 10x42), camera with spare batteries, universal travel adapter, compact first-aid kit, reusable water bottle, and a daypack for drives.

Documents & logistics: carry photocopies of your passport, printed confirmations, necessary visas and contact numbers in a waterproof sleeve.

Packing tips:
- Roll clothes to save space and avoid creasing
- Use zip-lock bags for electronics and toiletries
- Keep a small wash kit and quick-dry items

Remember: light, flexible packing makes transfers and game drives far easier — lodges often provide laundry.`
                  },
                  {
                    icon: '🦁',
                    title: 'Wildlife Behavior',
                    subtitle: "Understanding animal patterns for better sightings",
                    image: '/images/lion.jpg',
                    content: `Reading animal behavior is the single most valuable skill for reliable sightings. Over 15 seasons I've learned to read signs before the animal appears.

Look for indirect cues: guineafowl alarm calls can point to predators; fresh tracks at waterholes indicate recent activity; grazing patterns suggest where herds will move.

Time of day matters — predators are often crepuscular; herbivores feed at dawn and dusk. Microhabitats (riverine thickets, termite mounds) concentrate wildlife.

Safety and etiquette: stay quiet, follow the vehicle driver's cues, and never exit the vehicle in undesignated areas.

Field techniques:
- Watch smaller species for alarm behavior
- Scan tree canopies for cats and primates
- Learn spoor — different species leave distinct tracks

Patience, local knowledge and a calm vehicle make the difference between a drive and an unforgettable sighting.`
                  }
                ]
              )
              .map((tip, index) => (
                <motion.div
                  key={tip.title}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="text-center p-8 rounded-3xl bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 hover:bg-neutral-800 transition-all duration-300"
                >
                  <div className="text-5xl mb-4">{tip.icon}</div>
                  <h3 className={`${playfair.className} text-2xl font-bold text-white mb-3`}>
                    {tip.title}
                  </h3>
                  <p className="text-neutral-400 mb-6">{tip.subtitle}</p>
                  <button
                    onClick={() => openGuide(tip)}
                    className="inline-flex items-center gap-2 border border-yellow-400 text-yellow-400 px-5 py-2 rounded-full hover:bg-yellow-400 hover:text-neutral-900 transition-all"
                  >
                    Read Guide
                  </button>
                </motion.div>
              ))
            }
          </div>
        </div>
      </section>

      {/* SECTION 4: Conservation Stories */}
      <section className="py-32 bg-neutral-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <h5 className="text-yellow-400 text-sm uppercase tracking-[0.3em] mb-4">
                Our Commitment
              </h5>
              <h2 className={`${playfair.className} text-5xl lg:text-6xl font-bold text-white mb-8`}>
                Conservation
                <span className="block text-yellow-400">In Action</span>
              </h2>
              <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
                Every safari contributes directly to wildlife protection and community development. 
                Read stories of rhino rescues, anti-poaching successes, and community transformations.
              </p>
              <Link href="/blog/conservation">
                <Button className="bg-yellow-400 hover:bg-orange-500 text-neutral-900 font-bold px-8 py-4 rounded-full">
                  Read Conservation Stories
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/commitment-conservation.jpg"
                alt="Conservation in action"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

          <Newsletter />
      <BackToTop />

      <GuideModal guide={selectedGuide} isOpen={isGuideOpen} onClose={() => setIsGuideOpen(false)} />
    </>
  );
}

function GuideCard({ tip, index }: { tip: any; index: number }) {
  // Using dynamic import above, but keep a small helper here to render card and open modal
  // We access BlogContent's openGuide via DOM closure by passing handler in map; to keep file local,
  // we'll leverage a custom event. Simpler: render a button with an inline onClick that finds parent BlogContent's openGuide.
  // To keep things straightforward, this helper will be replaced by a closure in the map.
  return null;
}
