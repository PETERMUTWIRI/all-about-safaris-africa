'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Subscribe() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <section className="relative py-20 bg-blue-900">
      <div className="container mx-auto px-4 text-center">
        <h5 className="text-yellow-400 text-sm font-semibold mb-2">SUBSCRIBE</h5>
        <h2 className="text-4xl font-bold text-white mb-4">Our Newsletter</h2>
        <p className="text-white/90 max-w-2xl mx-auto mb-8">
          Stay inspired and never miss out on the latest travel deals, tips, and destinations!
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-2">
          <Input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/60 rounded-full px-4 py-3"
            required
          />
          <Button type="submit" className="bg-green-600 hover:bg-green-700 rounded-full px-6">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
}