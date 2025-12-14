'use client';

import { HeroSection } from '@/components/HeroSection';
import { TrustBadges } from '@/components/TrustBadges';
import { FeaturedExperiences } from '@/components/FeaturedExperiences';
import { ValueProposition } from '@/components/ValueProposition';
import { TestimonialsParallax } from '@/components/TestimonialsParallax';
import { PackagesPreview } from '@/components/PackagesPreview';
import { FinalCTA } from '@/components/FinalCTA';
import { Newsletter } from '@/components/Newsletter';
import { BackToTop } from '@/components/BackToTop';

export default function HomePage() {
  return (
    <main className="bg-neutral-900">
      <HeroSection />
      <TrustBadges />
      <FeaturedExperiences />
      <ValueProposition />
      <PackagesPreview />
      <TestimonialsParallax />
      <FinalCTA />
      <BackToTop />
    </main>
  );
}