import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface NavItem {
  id: string;
  label: string;
  path: string;
  icon?: LucideIcon;
}

export interface SectionProps {
  title: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
}

export interface InfoCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags?: string[];
  location?: string;
}

export interface RuleSection {
  title: string;
  content: string[];
}