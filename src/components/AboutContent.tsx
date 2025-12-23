'use client';

import { motion, useInView } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';
import { Button } from './ui/button';
import { ArrowRight, Shield, Award, Users, Globe, Trees, Heart, Trophy, Star, MessageCircle, Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

const playfair = Playfair_Display({ subsets: ['latin'] });

interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

const timeline: TimelineItem[] = [
  { year: "2009", title: "Founded in Nairobi", description: "Started with a simple mission: connect travelers to authentic African experiences" },
  { year: "2014", title: "First Luxury Camp", description: "Opened our flagship mobile camp in Masai Mara, setting new luxury standards" },
  { year: "2018", title: "Conservation Partnership", description: "Partnered with WWF to support wildlife protection and community development" },
  { year: "2023", title: "World Travel Award", description: "Voted Africa's Leading Safari Operator by World Travel Awards" },
];

const team = [
  { name: "Martin Kihuria", role: "Founder & Chief Explorer", image: "/images/team-peter.jpg", bio: "15+ years crafting exceptional safaris across East Africa" },
  { name: "Sarah Kiptoo", role: "Head of Operations", image: "/images/team-sarah.jpg", bio: "Ensuring every journey exceeds expectations with precision planning" },
  { name: "John Karanja", role: "Lead Safari Guide", image: "/images/team-john.jpg", bio: "Wildlife expert with unmatched tracking skills in the bush" },
];

export function AboutContent() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });

  return (
    <>
      {/* SECTION 1: Hero Story */}
      <section className="relative py-24 md:py-40 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 30, repeat: Infinity }}
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/about-hero-savanna.jpg')",
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
            <h5 className="text-yellow-400 text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] mb-4 md:mb-6">
              Our Story
            </h5>
            {/* ✅ FIXED: Responsive text sizes */}
            <h1 className={`${playfair.className} text-4xl md:text-7xl lg:text-9xl font-bold text-white leading-tight mb-4 md:mb-8`}>
              Crafting Dreams
              <span className="block text-yellow-400">Since 2009</span>
            </h1>
            <p className="text-base md:text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              Born from a passion for Africa's untamed beauty, we've grown from a small Nairobi outfit to Africa's most trusted safari architects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Mission & Vision */}
      <section className="py-20 md:py-32 bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div
              ref={ref1}
              initial={{ opacity: 0, x: -60 }}
              animate={isInView1 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h5 className="text-yellow-400 text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] mb-3 md:mb-4">Our Mission</h5>
              {/* ✅ FIXED: Responsive heading sizes */}
              <h2 className={`${playfair.className} text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8`}>
                To Connect Souls
                <span className="block text-yellow-400">To Africa's Wild Heart</span>
              </h2>
              <p className="text-base md:text-lg text-neutral-300 mb-6 md:mb-8 leading-relaxed">
                We believe travel should transform. Every safari we craft is designed to create profound connections between our guests, Africa's incredible wildlife, and the communities that protect these treasures.
              </p>
              <p className="text-base md:text-lg text-neutral-300 mb-8 leading-relaxed">
                Our approach blends luxury with authenticity, ensuring every moment feels both indulgent and genuine. From your first inquiry to your final sunset, we're committed to exceeding expectations.
              </p>
              <Link href="/services">
                <Button className="bg-yellow-400 hover:bg-orange-500 text-neutral-900 font-bold px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg transition-all duration-300 hover:scale-105">
                  Our Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              ref={ref1}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView1 ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative h-[400px] md:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/mission-vision.jpg"
                alt="Our Mission"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: The Team */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-neutral-900 to-neutral-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-12 md:mb-20"
          >
            <h5 className="text-yellow-400 text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] mb-3 md:mb-4">
              Meet Our Family
            </h5>
            <h2 className={`${playfair.className} text-3xl md:text-5xl lg:text-6xl font-bold text-white`}>
              The Experts Behind
              <span className="block text-yellow-400">Every Journey</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="text-center p-6 md:p-8 rounded-2xl md:rounded-3xl bg-neutral-800/50 backdrop-blur-sm border border-neutral-700 hover:bg-neutral-800 transition-all duration-300"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 md:mb-6 rounded-full overflow-hidden border-2 md:border-4 border-yellow-400 shadow-xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <h3 className={`${playfair.className} text-lg md:text-2xl font-bold text-white mb-2`}>
                  {member.name}
                </h3>
                <p className="text-yellow-400 font-semibold mb-3 md:mb-4">{member.role}</p>
                <p className="text-neutral-400 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Our Commitment */}
      <section className="py-20 md:py-32 bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div
              ref={ref2}
              initial={{ opacity: 0, x: 60 }}
              animate={isInView2 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] md:h-[500px] rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/commitment-conservation.jpg"
                alt="Our Commitment"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent" />
            </motion.div>

            <motion.div
              ref={ref2}
              initial={{ opacity: 0, x: -60 }}
              animate={isInView2 ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h5 className="text-yellow-400 text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] mb-3 md:mb-4">Our Commitment</h5>
              <h2 className={`${playfair.className} text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8`}>
                Sustainable Tourism
                <span className="block text-yellow-400">For Future Generations</span>
              </h2>
              <p className="text-base md:text-lg text-neutral-300 mb-6 md:mb-8 leading-relaxed">
                We believe the wilderness must be preserved. For every safari booked, we contribute 5% to local conservation projects and community development.
              </p>
              
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <Trees className="w-6 h-6 md:w-8 md:h-8 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-bold text-base md:text-lg">Conservation First</h4>
                    <p className="text-neutral-400 text-sm md:text-base">Supporting wildlife protection in 15+ reserves across East Africa</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <Heart className="w-6 h-6 md:w-8 md:h-8 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-bold text-base md:text-lg">Community Impact</h4>
                    <p className="text-neutral-400 text-sm md:text-base">Employing 200+ local staff and supporting 30+ community projects</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 md:gap-4">
                  <Globe className="w-6 h-6 md:w-8 md:h-8 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-bold text-base md:text-lg">Carbon Neutral</h4>
                    <p className="text-neutral-400 text-sm md:text-base">Offsetting 100% of travel emissions through verified programs</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Awards & Recognition */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-neutral-900 to-neutral-950 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.02, 1] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/awards-bg.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-black/75" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-12 md:mb-20"
          >
            <h5 className="text-yellow-400 text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] mb-3 md:mb-6">
              Recognized Excellence
            </h5>
            <h2 className={`${playfair.className} text-3xl md:text-6xl lg:text-8xl font-bold text-white`}>
              Awards That
              <span className="block text-yellow-400">Validate Our Promise</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              { award: "World Travel Awards", year: "2023", title: "Africa's Leading Safari Operator" },
              { award: "Safari Awards", year: "2022", title: "Best Luxury Mobile Camp" },
              { award: "Travel + Leisure", year: "2023", title: "Top 10 Safari Companies" },
              { award: "Condé Nast", year: "2021", title: "Reader's Choice Award" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <Trophy className="w-12 h-12 md:w-16 md:h-16 text-yellow-400 mx-auto mb-4 md:mb-6" />
                <h3 className={`${playfair.className} text-base md:text-xl font-bold text-yellow-400 mb-1`}>
                  {item.award}
                </h3>
                <p className="text-white font-semibold mb-1 text-sm md:text-base">{item.title}</p>
                <p className="text-neutral-400 text-xs md:text-sm">{item.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Journey Timeline */}
      <section className="py-20 md:py-32 bg-neutral-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-12 md:mb-20"
          >
            <h5 className="text-yellow-400 text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] mb-3 md:mb-4">
              Our Journey
            </h5>
            <h2 className={`${playfair.className} text-3xl md:text-5xl lg:text-6xl font-bold text-white`}>
              Milestones That
              <span className="block text-yellow-400">Define Excellence</span>
            </h2>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-yellow-400/30" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={cn(
                  "relative flex items-center mb-12 md:mb-16",
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                )}
              >
                <div className={cn(
                  "w-1/2 px-4 md:px-8",
                  index % 2 === 0 ? "text-right pr-6 md:pr-12" : "text-left pl-6 md:pl-12"
                )}>
                  <div className="inline-block bg-neutral-800 p-4 md:p-6 rounded-2xl border border-neutral-700 hover:border-yellow-400 transition-all duration-300">
                    <span className="text-yellow-400 text-xl md:text-3xl font-bold block mb-2">
                      {item.year}
                    </span>
                    <h3 className={`${playfair.className} text-lg md:text-2xl font-bold text-white mb-3`}>
                      {item.title}
                    </h3>
                    <p className="text-neutral-400 text-sm md:text-base">{item.description}</p>
                  </div>
                </div>

                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 md:w-6 md:h-6 bg-yellow-400 rounded-full border-2 md:border-4 border-neutral-950 shadow-xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: Final CTA */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-green-950 via-amber-900 to-orange-800">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/about-final-cta.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-black/80" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h5 className="text-yellow-400 text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] mb-3 md:mb-6">
              Ready to Write Your Story?
            </h5>
            {/* ✅ FIXED: Responsive heading sizes */}
            <h2 className={`${playfair.className} text-3xl md:text-6xl lg:text-8xl font-bold text-white mb-6 md:mb-8`}>
              Your Safari
              <span className="block text-yellow-400">Journey Begins</span>
            </h2>
            <p className="text-base md:text-xl text-white/80 mb-8 md:mb-12 leading-relaxed">
              Join 50,000+ explorers who've trusted us to craft their perfect African adventure.
            </p>

            {/* ✅ FIXED: Responsive button layout */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-12 md:mb-16">
              <Link href="https://wa.me/254700064857" target="_blank">
                <Button className="bg-yellow-400 hover:bg-orange-500 text-neutral-900 font-bold px-6 md:px-12 py-3 md:py-6 rounded-full text-base md:text-xl transition-all duration-300 hover:scale-105 shadow-lg">
                  Start Your Journey
                  <MessageCircle className="w-5 h-5 md:w-6 md:h-6 ml-2" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-neutral-900 font-bold px-6 md:px-12 py-3 md:py-6 rounded-full text-base md:text-xl transition-all duration-300">
                  Explore Our Services
                </Button>
              </Link>
            </div>

            {/* Social Media */}
            <div className="border-t border-white/20 pt-8 md:pt-12">
              <p className="text-white/80 text-xs md:text-sm uppercase tracking-[0.2em] mb-4 md:mb-6">
                Follow Us on Social Media
              </p>
              <div className="flex justify-center gap-4 md:gap-6 flex-wrap">
                {[
                  {
                    name: 'TikTok',
                    href: 'https://www.tiktok.com/@allaboutsafarisafrica',
                    Icon: () => (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.68v13.67a2.4 2.4 0 1 1-2.4-2.4c.2 0 .41.01.61.04V9.41a6.47 6.47 0 0 0-.78-.07A6.47 6.47 0 0 0 5 16.34v4.18A8.86 8.86 0 0 0 14.77 24c4.92 0 8.93-4.01 8.93-8.93V11.5a7.11 7.11 0 0 0 3.3 1.75v-3.74a5.04 5.04 0 0 1-.77-.07Z" />
                      </svg>
                    ),
                  },
                  { name: 'Facebook', href: 'https://www.facebook.com/rastysphotography/', Icon: Facebook },
                  { name: 'Instagram', href: 'https://www.instagram.com/allaboutsafarisafrica/reels/', Icon: Instagram },
                ].map(({ name, href, Icon }) => {
                  const IconComponent = Icon as any;
                  return (
                    <motion.a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative"
                    >
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-yellow-400 flex items-center justify-center text-neutral-900 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:bg-orange-500">
                        <IconComponent className="w-6 h-6 md:w-8 md:h-8" />
                      </div>
                      <span className="absolute -bottom-6 md:-bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-yellow-400 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {name}
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}