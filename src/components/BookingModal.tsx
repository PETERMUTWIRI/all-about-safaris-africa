'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageTitle: string;
  packageDetails: string;
  whatsappNumber: string;
}

export function BookingModal({
  isOpen,
  onClose,
  packageTitle,
  packageDetails,
  whatsappNumber,
}: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    dates: '',
    contact: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.name.trim() || !formData.dates.trim() || !formData.contact.trim()) {
      alert('Please fill in all fields');
      return;
    }

    // Build WhatsApp message with form data
    const message = `Booking Inquiry - ${packageTitle}\n\n${packageDetails}\n\nPlease reserve a spot for me on this package.\nTraveler name: ${formData.name}\nPreferred dates: ${formData.dates}\nContact phone/email: ${formData.contact}`;

    const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Show success state briefly
    setSubmitted(true);
    setTimeout(() => {
      // Open WhatsApp
      window.open(waLink, '_blank');
      // Close modal and reset
      setTimeout(() => {
        onClose();
        setSubmitted(false);
        setFormData({ name: '', dates: '', contact: '' });
      }, 500);
    }, 800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="pointer-events-auto max-w-md w-full bg-neutral-900 border border-neutral-700 rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-[var(--acacia-green)] to-green-700 px-6 py-4 flex justify-between items-center">
                <h2 className="text-white font-bold text-lg">Book Your Adventure</h2>
                <button
                  onClick={onClose}
                  className="text-white hover:text-yellow-400 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Package Title */}
                    <div>
                      <p className="text-sm text-neutral-400 mb-1">Package</p>
                      <p className="text-white font-semibold">{packageTitle}</p>
                    </div>

                    {/* Name Input */}
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white text-sm font-medium">
                        Traveler Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-neutral-800 border-neutral-700 text-white placeholder-neutral-500 focus:border-yellow-400"
                        required
                      />
                    </div>

                    {/* Dates Input */}
                    <div className="space-y-2">
                      <Label htmlFor="dates" className="text-white text-sm font-medium">
                        Preferred Dates *
                      </Label>
                      <Input
                        id="dates"
                        name="dates"
                        type="text"
                        placeholder="e.g., Dec 20 - Dec 27, 2025"
                        value={formData.dates}
                        onChange={handleChange}
                        className="bg-neutral-800 border-neutral-700 text-white placeholder-neutral-500 focus:border-yellow-400"
                        required
                      />
                    </div>

                    {/* Contact Input */}
                    <div className="space-y-2">
                      <Label htmlFor="contact" className="text-white text-sm font-medium">
                        Contact (Phone/Email) *
                      </Label>
                      <Input
                        id="contact"
                        name="contact"
                        type="text"
                        placeholder="+254... or email@example.com"
                        value={formData.contact}
                        onChange={handleChange}
                        className="bg-neutral-800 border-neutral-700 text-white placeholder-neutral-500 focus:border-yellow-400"
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full bg-[var(--savanna-gold)] hover:bg-yellow-500 text-neutral-900 font-bold py-3 flex items-center justify-center gap-2 transition-all duration-300"
                    >
                      <Send className="w-4 h-4" />
                      Send to WhatsApp
                    </Button>
                  </form>
                ) : (
                  /* Success State */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.6 }}
                      className="w-16 h-16 mx-auto mb-4 bg-green-500/20 rounded-full flex items-center justify-center"
                    >
                      <Phone className="w-8 h-8 text-green-400" />
                    </motion.div>
                    <p className="text-white font-semibold mb-2">Perfect!</p>
                    <p className="text-neutral-400 text-sm">Opening WhatsApp with your booking details...</p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
