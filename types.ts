

import React from 'react';
export type Theme = 'light' | 'dark'; // Added Theme export

export type Language = 'en' | 'es';

export interface LocalizedString {
  en: string;
  es: string;
}

export interface LocalizedReactContent {
  en?: React.ReactNode; // Made optional if not always present
  es?: React.ReactNode; // Made optional if not always present
}

export interface SectionData {
  id: string;
  title: LocalizedString; 
  emoji?: string;
  content: (lang: Language) => React.ReactNode; 
  imageUrl?: string; 
  tocSubheadings?: LocalizedString[]; 
}

export interface TocItem {
  id: string;
  title: string; 
  subHeadings?: string[]; 
  icon?: React.FC<{ className?: string }>; 
  emoji?: string; 
  itemNumber?: number; 
}

export interface LocalizedGalleryImage {
  src: string;
  alt: LocalizedString;
}

export interface SocialLinkItem {
  type: 'link' | 'divider';
  href?: string;
  IconComponent?: React.FC<{ className?: string }>;
  tooltipText: LocalizedString; // Used for tooltip when collapsed, and label when expanded
  ariaLabel: LocalizedString;   // For accessibility
  brandColorClass?: string;     // For specific brand coloring of the icon
}