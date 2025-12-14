import { ServicesContent } from '@/components/ServicesContent';

export const metadata = {
  title: 'Our Services | All About Safaris Africa',
  description: 'Explore our comprehensive safari and travel services.',
};

export default function ServicesPage() {
  return <ServicesContent />; {/* ✅ No wrapper, no spacing */}
}