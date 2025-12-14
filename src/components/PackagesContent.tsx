'use client';

import { PackagesCarousel } from './PackagesCarousel';
import { BookingForm } from './BookingForm';
import { Newsletter } from './Newsletter';
import { BackToTop } from './BackToTop';

export function PackagesContent() {
  return (
    <>
      <PackagesCarousel />
      <BookingForm />
      <Newsletter />
      <BackToTop />
    </>
  );
}