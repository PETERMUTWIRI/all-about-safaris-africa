'use client';

import { motion } from 'framer-motion';
import { Shield, Award, Users, Globe } from 'lucide-react';

const badges = [
  { label: "15+ Years Excellence", Icon: Shield },
  { label: "50K+ Happy Tourists", Icon: Users },
  { label: "100% Safety Record", Icon: Award },
  { label: "25+ Destinations", Icon: Globe },
];

export function TrustBadges() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-800 to-amber-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-white"
            >
              <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-yellow-400 flex items-center justify-center">
                <badge.Icon className="w-8 h-8 text-green-900" />
              </div>
              <p className="font-semibold text-sm">{badge.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}