import { AboutContent } from '@/components/AboutContent';
import { Newsletter } from '@/components/Newsletter';
import { BackToTop } from '@/components/BackToTop';

export const metadata = {
  title: 'Our Story | All About Safaris Africa',
  description: 'Discover the passion, expertise, and commitment behind Africa\'s most trusted safari operator.',
};

export default function AboutPage() {
  return (
    <>
      <AboutContent />
      
      <BackToTop />
    </>
  );
}