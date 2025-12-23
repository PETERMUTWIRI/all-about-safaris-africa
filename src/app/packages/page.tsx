import { PackagesContent } from '@/components/PackagesContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Safari Packages | All About Safaris Africa',
  description: 'Explore our curated safari packages from $349. Masai Mara, Amboseli, Zanzibar, Kilimanjaro treks & more. Best value guaranteed.',
  keywords: 'safari packages, Kenya safaris, Tanzania tours, Zanzibar beach, Kilimanjaro trek, budget safari, luxury safari',
  openGraph: {
    title: 'Safari Packages | All About Safaris Africa',
    description: 'Handcrafted safari adventures from $349. Book your dream African safari today!',
    images: ['/images/og-packages.jpg'],
  },
};

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-neutral-900"> {/* DARK BACKGROUND FIX */}
      <PackagesContent />
    </main>
  );
}