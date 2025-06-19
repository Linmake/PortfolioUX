
import React from 'react';

const TactiqIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Placeholder T for Tactiq */}
    <line x1="12" y1="3" x2="12" y2="21"></line>
    <line x1="5" y1="3" x2="19" y2="3"></line>
    <polyline points="8 12 12 16 16 12"></polyline>
  </svg>
);

export default TactiqIcon;
