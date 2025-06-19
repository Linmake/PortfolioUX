import React from 'react';

const UxTweakIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M10.4 3.9L15 12l-4.6 8.1"></path>
    <path d="M3 3l7.07 12.25L3 21"></path>
    <path d="M21 3l-7.07 12.25L21 21"></path>
    <line x1="12" y1="12" x2="19" y2="12"></line>
  </svg>
);

export default UxTweakIcon;