'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';
import { Send } from 'lucide-react';
import { cn } from '@/lib/utils';

const playfair = Playfair_Display({ subsets: ['latin'] });

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your backend
    console.log('Contact form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="h-full"
    >
      <h3 className={`${playfair.className} text-2xl font-bold text-white mb-2`}>
        Contact Us
      </h3>
      <p className="text-neutral-400 mb-4">
        Please fill out the form below to get in touch with us.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-group">
          <label htmlFor="name" className="block text-neutral-300 mb-2 font-medium">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-[var(--savanna-gold)] focus:ring-2 focus:ring-[var(--savanna-gold)]/20 transition-all"
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="block text-neutral-300 mb-2 font-medium">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-[var(--savanna-gold)] focus:ring-2 focus:ring-[var(--savanna-gold)]/20 transition-all"
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="subject" className="block text-neutral-300 mb-2 font-medium">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-[var(--savanna-gold)] focus:ring-2 focus:ring-[var(--savanna-gold)]/20 transition-all"
            placeholder="Enter the subject"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message" className="block text-neutral-300 mb-2 font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-500 focus:outline-none focus:border-[var(--savanna-gold)] focus:ring-2 focus:ring-[var(--savanna-gold)]/20 transition-all resize-none"
            placeholder="Your message here..."
            required
          />
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-[var(--acacia-green)] hover:bg-[var(--earth-ochre)] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
        >
          <Send className="w-5 h-5" />
          Send Message
        </motion.button>

        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-center"
          >
            Message sent successfully! We'll get back to you soon.
          </motion.div>
        )}
      </form>
    </motion.div>
  );
}