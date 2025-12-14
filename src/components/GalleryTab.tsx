'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GalleryTabProps {
  tabs: { id: string; label: string; count: number }[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function GalleryTab({ tabs, activeTab, onTabChange }: GalleryTabProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
      {tabs.map((tab, index) => (
        <motion.button
          key={tab.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * index }}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            "relative overflow-hidden rounded-full px-6 py-3 text-sm font-medium transition-all duration-300",
            activeTab === tab.id
              ? "bg-[var(--savanna-gold)] text-neutral-900 shadow-lg shadow-[var(--savanna-gold)]/30"
              : "bg-neutral-800 text-neutral-300 hover:text-white hover:bg-neutral-700 border border-neutral-700"
          )}
        >
          <span className="relative z-10">
            {tab.label}
            <span className="ml-2 text-xs opacity-60">({tab.count})</span>
          </span>
          
          {/* Hover effect stripe */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[var(--savanna-gold)] to-[var(--earth-ochre)]"
            initial={{ x: '-100%' }}
            animate={{ x: activeTab === tab.id ? '0%' : '-100%' }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      ))}
    </div>
  );
}