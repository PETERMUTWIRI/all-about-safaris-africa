import { ServicesContent } from '@/components/ServicesContent';
import { Newsletter } from '@/components/Newsletter';

export const metadata = {
  title: 'Our Services | All About Safaris Africa',
  description: 'Explore our comprehensive safari and travel services.',
};

export default function ServicesPage() {
  return (
    // ✅ DARK BACKGROUND WRAPPER - ensures consistency behind navbar
    <div className="min-h-screen bg-neutral-950">
      <ServicesContent />
      <Newsletter />
    </div>
  );
}