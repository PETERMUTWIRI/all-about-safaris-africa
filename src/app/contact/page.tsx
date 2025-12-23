import { ContactContent } from '@/components/ContactContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | All About Safaris Africa',
  description: 'Get in touch to plan your dream safari adventure in Kenya and beyond.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-neutral-900"> {/* ✅ DARK BACKGROUND FIX */}
      <ContactContent />
    </main>
  );
}