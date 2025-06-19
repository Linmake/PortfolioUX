import React from 'react';

const FigmaIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 12m-2 0a2 2 0 104 0 2 2 0 10-4 0"></path>
    <path d="M12 12m-7 0a7 7 0 1014 0 7 7 0 10-14 0"></path>
    <path d="M12 5a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
    <line x1="12" y1="1" x2="12" y2="5"></line>
    <line x1="12" y1="19" x2="12" y2="23"></line>
    <line x1="1" y1="12" x2="5" y2="12"></line>
    <line x1="19" y1="12" x2="23" y2="12"></line>
  </svg>
);

export default FigmaIcon;