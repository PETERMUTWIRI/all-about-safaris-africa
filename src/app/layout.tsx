import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'All About Safaris Africa',
  description: 'Explore the wild heart of Africa with expert safari guides',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-900`}>
        <Navbar />
        <main className="pt-0"> {/* ✅ Changed from pt-20 to pt-0 */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}