import { GalleryHeroCarousel } from '@/components/GalleryHeroCarousel';
import { GalleryFeatured } from '@/components/GalleryFeatured';
import { GalleryWildlife } from '@/components/GalleryWildlife';
import { GalleryCultural } from '@/components/GalleryCultural';
import { GalleryAdventure } from '@/components/GalleryAdventure';
import { GalleryFilterGrid } from '@/components/GalleryFilterGrid';
import { Newsletter } from '@/components/Newsletter';
import { BackToTop } from '@/components/BackToTop';

export const metadata = {
  title: 'Safari Gallery | All About Safaris Africa',
  description: 'Witness Africa\'s majesty through our lens - wildlife, landscapes, and cultures captured in stunning photography.',
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-neutral-900"> {/* ✅ DARK BACKGROUND FIX */}
      <GalleryHeroCarousel />
      <GalleryFeatured />
      <GalleryWildlife />
      <GalleryCultural />
      <GalleryAdventure />
      <GalleryFilterGrid />
      <Newsletter />
      <BackToTop />
    </div>
  );
}