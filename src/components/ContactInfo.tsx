'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["CBD", "Nairobi, Kenya"]
  },
  {
    icon: Phone,
    title: "Mobile",
    details: ["+254-700-064-857"]
  },
  {
    icon: Mail,
    title: "Email",
    details: ["allaboutsafarisafrica@gmail.com"]
  }
];

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="h-full"
    >
      <div className="bg-neutral-800 rounded-2xl p-6 h-full border border-neutral-700">
        {contactInfo.map((info, index) => (
          <motion.div
            key={info.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={cn(
              "text-center py-6",
              index !== contactInfo.length - 1 && "border-b border-neutral-700"
            )}
          >
            <info.icon className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
            <h4 className="text-white font-bold text-lg mb-2">
              {info.title}
            </h4>
            {info.details.map((detail, i) => (
              <p key={i} className="text-neutral-400 font-medium">
                {detail}
              </p>
            ))}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}