import React from 'react';

const WhiskIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M8 18L12 14M12 14L16 18M12 14V2"></path>
    <path d="M12 2C9.24 2 7 4.24 7 7c0 2.22 1.09 3.09 1.55 3.55C9.37 11.37 10.63 12 12 12s2.63-.63 3.45-1.45c.46-.46 1.55-1.33 1.55-3.55 0-2.76-2.24-5-5-5z"></path>
    <circle cx="12" cy="7" r="1"></circle>
  </svg>
);

export default WhiskIcon;