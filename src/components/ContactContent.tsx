'use client';

import { motion } from 'framer-motion';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';
import { Newsletter } from './Newsletter';
import { BackToTop } from './BackToTop';
import Image from 'next/image';

export function ContactContent() {
  return (
    <>
      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-b from-neutral-900 to-neutral-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h5 className="text-[var(--savanna-gold)] text-sm font-semibold tracking-widest uppercase mb-4">
              Contact Us
            </h5>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl lg:text-6xl font-bold text-white"
            >
              Contact For Any Query
            </motion.h1>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 mb-12">
            <div className="lg:col-span-4">
              <ContactInfo />
            </div>
            <div className="lg:col-span-8">
              <ContactForm />
            </div>
          </div>

          {/* Map Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/30"
          >
            <Image
              src="/images/Cbd.jpg"
              alt="Map Location - Nairobi CBD"
              width={1200}
              height={450}
              className="w-full h-[450px] object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        </div>
      </section>

      <Newsletter />
      <BackToTop />
    </>
  );
}