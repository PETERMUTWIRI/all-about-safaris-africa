import { Breadcrumb } from '@/components/Breadcrumb';
import { BookingForm } from '@/components/BookingForm';
import { Newsletter } from '@/components/Newsletter';
import { BackToTop } from '@/components/BackToTop';

export const metadata = {
  title: 'Book Your Safari | All About Safaris Africa',
  description: 'Reserve your exclusive African expedition with our expert team.',
};

export default function BookingPage() {
  return (
    <>  {/* ✅ ADDED Fragment wrapper */}
      
      <BookingForm />
      <Newsletter />
      <BackToTop />
    </>  
  );
}