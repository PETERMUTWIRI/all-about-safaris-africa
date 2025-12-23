'use client';

import { PackagesCarousel } from './PackagesCarousel';
import { BookingForm } from './BookingForm';
import { Newsletter } from './Newsletter';
import { BackToTop } from './BackToTop';

export function PackagesContent() {
  return (
    <div className="min-h-screen bg-neutral-900"> {/* Force dark background */}
      <PackagesCarousel />
      <BookingForm />
      <Newsletter />
      <BackToTop />
    </div>
  );
}