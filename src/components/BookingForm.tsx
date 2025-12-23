'use client';

import { motion, AnimatePresence, useInView, type Variants } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Calendar, Users, MapPin, MessageSquare, CheckCircle, Send, ArrowRight, Clock, User, Mail, Phone } from 'lucide-react';
import { Playfair_Display } from 'next/font/google';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const playfair = Playfair_Display({ subsets: ['latin'] });

interface FormData {
  name: string;
  email: string;
  date: string;
  destination: string;
  persons: string;
  categories: string;
  message: string;
}

const fieldVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  })
};

export function BookingForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    date: '',
    destination: '',
    persons: '',
    categories: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const whatsappNumber = '254700064857'; // ✅ Use your WhatsApp number

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // ✅ NEW: Format the message for WhatsApp
    const destinationMap: Record<string, string> = {
      'masai-mara': 'Masai Mara Migration',
      'serengeti': 'Serengeti Pride',
      'gorilla': 'Gorilla Trekking',
      'lamu': 'Lamu Dhow Safari'
    };

    const personsMap: Record<string, string> = {
      '1': 'Solo Expedition',
      '2': 'Couple (2)',
      '4': 'Small Group (3-4)',
      '8': 'Family (5-8)'
    };

    const categoriesMap: Record<string, string> = {
      'first-timer': 'First Safari',
      'experienced': 'Seasoned Explorer',
      'photographer': 'Photography Focus',
      'luxury': 'Ultra-Luxury'
    };

    const whatsappMessage = `
*NEW BOOKING INQUIRY*

👤 *Client Details*
• Name: ${formData.name}
• Email: ${formData.email}
• Experience Level: ${categoriesMap[formData.categories] || formData.categories}

🦁 *Safari Preferences*
• Destination: ${destinationMap[formData.destination] || formData.destination}
• Preferred Date: ${formData.date}
• Group Size: ${personsMap[formData.persons] || formData.persons}

📝 *Special Requests*
${formData.message || 'No special requests'}

💰 *Pricing*
Please send me a detailed quote for this expedition.
    `.trim();

    // ✅ Open WhatsApp in new tab
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    // ✅ Show success animation after sending
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);

    // ✅ Reset form after 5 seconds
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: '', email: '', date: '', destination: '', persons: '', categories: '', message: '' });
    }, 5000);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-br from-neutral-900 to-neutral-800 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,_var(--savanna-gold)_0%,_transparent_50%)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_25%,_var(--earth-ochre)_0%,_transparent_50%)]" />
      </div>

      <motion.div
        className="fixed bottom-6 right-6 z-40"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 100 }}
      >
        <Link href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
          <Button className="w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 shadow-2xl shadow-green-500/40 flex items-center justify-center p-0">
            <Phone className="w-7 h-7 text-white" />
          </Button>
        </Link>
        <motion.div
          className="absolute -bottom-1 -right-1 w-5 h-5 bg-[var(--savanna-gold)] rounded-full flex items-center justify-center"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs text-neutral-900 font-bold">?</span>
        </motion.div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="space-y-8">
              <motion.h5
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="text-yellow-400 text-sm font-semibold tracking-widest uppercase"
              >
                Reserve Your Expedition
              </motion.h5>
              
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className={`${playfair.className} text-5xl lg:text-6xl font-bold text-white leading-tight`}
              >
                Book Your
                <span className="block text-yellow-400">Adventure</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 }}
                className="text-neutral-300 text-lg leading-relaxed"
              >
                Every safari begins with a conversation. Share your vision, and we'll craft an experience that echoes in your memory forever.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
                className="bg-neutral-800/50 rounded-2xl p-6 backdrop-blur-sm border border-neutral-700"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-7 h-7 text-neutral-900" />
                  </div>
                  <div>
                    <p className="text-white font-bold">Get 20% Off Your First Expedition</p>
                    <p className="text-neutral-400 text-sm">Limited spots available for 2025</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="relative"
          >
            <div className="bg-neutral-800/60 backdrop-blur-xl rounded-3xl p-8 border border-neutral-700 shadow-2xl group hover:shadow-green-700/30 hover:-translate-y-2 transition-all duration-500">
              <AnimatePresence mode="wait">
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute inset-0 bg-neutral-900/95 rounded-3xl z-50 flex flex-col items-center justify-center p-8 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    >
                      <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle className="w-10 h-10 text-neutral-900" />
                      </div>
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className={`${playfair.className} text-3xl font-bold text-white mb-4`}
                    >
                      Message Sent!
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="text-neutral-300 mb-6"
                    >
                      Your booking inquiry has been sent via WhatsApp. Our safari expert will contact you within 24 hours.
                    </motion.p>
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="px-8 py-3 bg-yellow-400 hover:bg-orange-500 text-neutral-900 font-bold rounded-full transition-colors"
                      onClick={() => setIsSuccess(false)}
                    >
                      Plan Another Journey
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div custom={1} variants={fieldVariants} initial="initial" animate={isInView ? "animate" : "initial"}>
                    <Label htmlFor="name" className="text-white mb-2 flex items-center gap-2">
                      <User className="w-4 h-4 text-yellow-400" />
                      Full Name
                    </Label>
                    <Input id="name" placeholder="John Doe" value={formData.name} onChange={(e) => handleChange('name', e.target.value)} className="bg-neutral-900 border-neutral-700 text-white placeholder:text-neutral-600 focus:border-yellow-400 transition-colors" required />
                  </motion.div>

                  <motion.div custom={2} variants={fieldVariants} initial="initial" animate={isInView ? "animate" : "initial"}>
                    <Label htmlFor="email" className="text-white mb-2 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-yellow-400" />
                      Email Address
                    </Label>
                    <Input id="email" type="email" placeholder="john@example.com" value={formData.email} onChange={(e) => handleChange('email', e.target.value)} className="bg-neutral-900 border-neutral-700 text-white placeholder:text-neutral-600 focus:border-yellow-400 transition-colors" required />
                  </motion.div>
                </div>

                {/* Date & Destination */}
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div custom={3} variants={fieldVariants} initial="initial" animate={isInView ? "animate" : "initial"}>
                    <Label htmlFor="date" className="text-white mb-2 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-yellow-400" />
                      Preferred Date
                    </Label>
                    <Input id="date" type="date" value={formData.date} onChange={(e) => handleChange('date', e.target.value)} className="bg-neutral-900 border-neutral-700 text-white focus:border-yellow-400 transition-colors" required />
                  </motion.div>

                  <motion.div custom={4} variants={fieldVariants} initial="initial" animate={isInView ? "animate" : "initial"}>
                    <Label htmlFor="destination" className="text-white mb-2 flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-yellow-400" />
                      Destination
                    </Label>
                    <Select value={formData.destination} onValueChange={(value: string) => handleChange('destination', value)} required>
                      <SelectTrigger className="bg-neutral-900 border-neutral-700 text-white focus:border-yellow-400">
                        <SelectValue placeholder="Choose your safari" />
                      </SelectTrigger>
                      <SelectContent className="bg-neutral-900 border-neutral-700">
                        <SelectItem value="masai-mara" className="text-white hover:bg-neutral-800 focus:bg-neutral-800">Masai Mara Migration</SelectItem>
                        <SelectItem value="serengeti" className="text-white hover:bg-neutral-800 focus:bg-neutral-800">Serengeti Pride</SelectItem>
                        <SelectItem value="gorilla" className="text-white hover:bg-neutral-800 focus:bg-neutral-800">Gorilla Trekking</SelectItem>
                        <SelectItem value="lamu" className="text-white hover:bg-neutral-800 focus:bg-neutral-800">Lamu Dhow Safari</SelectItem>
                      </SelectContent>
                    </Select>
                  </motion.div>
                </div>

                {/* Persons & Categories */}
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div custom={5} variants={fieldVariants} initial="initial" animate={isInView ? "animate" : "initial"}>
                    <Label htmlFor="persons" className="text-white mb-2 flex items-center gap-2">
                      <Users className="w-4 h-4 text-yellow-400" />
                      Number of Travelers
                    </Label>
                    <Select value={formData.persons} onValueChange={(value: string) => handleChange('persons', value)} required>
                      <SelectTrigger className="bg-neutral-900 border-neutral-700 text-white focus:border-yellow-400">
                        <SelectValue placeholder="Select group size" />
                      </SelectTrigger>
                      <SelectContent className="bg-neutral-900 border-neutral-700">
                        <SelectItem value="1" className="text-white hover:bg-neutral-800 focus:bg-neutral-800">Solo Expedition</SelectItem>
                        <SelectItem value="2" className="text-white hover:bg-neutral-800 focus:bg-neutral-800">Couple (2)</SelectItem>
                        <SelectItem value="4" className="text-white hover:bg-neutral-800 focus:bg-neutral-800">Small Group (3-4)</SelectItem>
                        <SelectItem value="8" className="text-white hover:bg-neutral-800 focus:bg-neutral-800">Family (5-8)</SelectItem>
                      </SelectContent>
                    </Select>
                  </motion.div>

                  <motion.div custom={6} variants={fieldVariants} initial="initial" animate={isInView ? "animate" : "initial"}>
                    <Label htmlFor="categories" className="text-white mb-2 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-yellow-400" />
                      Experience Level
                    </Label>
                    <Select value={formData.categories} onValueChange={(value: string) => handleChange('categories', value)} required>
                      <SelectTrigger className="bg-neutral-900 border-neutral-700 text-white focus:border-yellow-400">
                        <SelectValue placeholder="Choose experience" />
                      </SelectTrigger>
                      <SelectContent className="bg-neutral-900 border-neutral-700">
                        <SelectItem value="first-timer" className="text-white hover:bg-neutral-800 focus:bg-neutral-800">First Safari</SelectItem>
                        <SelectItem value="experienced" className="text-white hover:bg-neutral-800 focus:bg-neutral-800">Seasoned Explorer</SelectItem>
                        <SelectItem value="photographer" className="text-white hover:bg-neutral-800 focus:bg-neutral-800">Photography Focus</SelectItem>
                        <SelectItem value="luxury" className="text-white hover:bg-neutral-800 focus:bg-neutral-800">Ultra-Luxury</SelectItem>
                      </SelectContent>
                    </Select>
                  </motion.div>
                </div>

                {/* Special Requests */}
                <motion.div custom={7} variants={fieldVariants} initial="initial" animate={isInView ? "animate" : "initial"}>
                  <Label htmlFor="message" className="text-white mb-2 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-yellow-400" />
                    Special Requests
                  </Label>
                  <Textarea id="message" placeholder="Tell us about your dream adventure..." value={formData.message} onChange={(e) => handleChange('message', e.target.value)} className="bg-neutral-900 border-neutral-700 text-white placeholder:text-neutral-600 focus:border-yellow-400 transition-colors min-h-[120px]" />
                </motion.div>

                {/* Submit Button */}
                <motion.div custom={8} variants={fieldVariants} initial="initial" animate={isInView ? "animate" : "initial"} className="pt-6">
                  <Button type="submit" disabled={isSubmitting} className="w-full py-6 bg-yellow-400 hover:bg-orange-500 text-neutral-900 font-bold text-lg rounded-full transition-all duration-300 shadow-2xl hover:shadow-yellow-400/30">
                    {isSubmitting ? (
                      <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="flex items-center justify-center gap-2">
                        <Send className="w-5 h-5" />
                        Sending to WhatsApp...
                      </motion.div>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Send via WhatsApp
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                      </span>
                    )}
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}