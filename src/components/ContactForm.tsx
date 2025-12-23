'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';
import { Send, CheckCircle } from 'lucide-react';
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
  const whatsappNumber = '254700064857'; // ✅ Your WhatsApp number

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // ✅ Format message for WhatsApp
    const whatsappMessage = `
*NEW CONTACT INQUIRY*

👤 *From:* ${formData.name}
📧 *Email:* ${formData.email}
📋 *Subject:* ${formData.subject}

💬 *Message:*
${formData.message}

⏰ *Time:* ${new Date().toLocaleString()}
    `.trim();

    // ✅ Open WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    // ✅ Show success feedback
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);

    // ✅ Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
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
      <p className="text-neutral-400 mb-6">
        Send us a message via WhatsApp and we'll respond within minutes.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-neutral-300 mb-2 font-medium">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-600 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all"
            placeholder="Enter your name"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-neutral-300 mb-2 font-medium">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-600 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all"
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-neutral-300 mb-2 font-medium">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-600 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all"
            placeholder="Enter the subject"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-neutral-300 mb-2 font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-600 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all resize-none"
            placeholder="Your message here..."
            required
          />
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-green-800 hover:bg-orange-500 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
        >
          <Send className="w-5 h-5" />
          Send via WhatsApp
        </motion.button>

        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-center"
          >
            ✓ Message sent via WhatsApp! We'll respond within minutes.
          </motion.div>
        )}
      </form>
    </motion.div>
  );
}