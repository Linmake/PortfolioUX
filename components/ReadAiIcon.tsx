
import React from 'react';

const ReadAiIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Placeholder R for Read.ai */}
    <path d="M3 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3V3z"></path>
    <path d="M7 7v10"></path>
    <path d="M11 7v10"></path>
    <path d="M15 7h4"></path>
    <path d="M15 12h4"></path>
    <path d="M15 17h4"></path>
    <circle cx="19" cy="19" r="2"></circle>
  </svg>
);

export default ReadAiIcon;
