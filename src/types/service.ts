import { LucideIcon } from 'lucide-react';

export interface Service {
  title: string;
  description: string;
  Icon: LucideIcon;
  variant: 'left' | 'right';
}