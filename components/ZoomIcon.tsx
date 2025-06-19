
import React from 'react';

const ZoomIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Placeholder for Zoom */}
    <path d="M10 7L5 12l5 5"></path>
    <path d="M14 17l5-5-5-5"></path>
    <rect x="2" y="7" width="20" height="10" rx="2" ry="2"></rect>
  </svg>
);

export default ZoomIcon;
