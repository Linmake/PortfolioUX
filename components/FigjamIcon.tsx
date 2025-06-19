import React from 'react';

const FigjamIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2a10 10 0 100 20 10 10 0 000-20z"></path>
    <path d="M12 12l4-4"></path>
    <path d="M12 12l-4 4"></path>
    <path d="M12 12l4 4"></path>
    <path d="M12 12l-4-4"></path>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);

export default FigjamIcon;