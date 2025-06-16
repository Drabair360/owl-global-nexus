
import { LucideIcon } from 'lucide-react';

export interface PortfolioItem {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  primaryColor: string;
  website: string;
  isCore?: boolean;
  poweredBy?: string;
  launchDate?: string;
  statistics?: {
    value: string;
    label: string;
  }[];
  synergies?: string[];
}
