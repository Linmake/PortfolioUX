import React from 'react';

const HotjarIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Placeholder H for Hotjar */}
    <path d="M4 4h16v16H4z" fill="none"></path>
    <path d="M4 12h16"></path>
    <path d="M12 4v16"></path>
    <path d="M8 8h8M8 16h8"></path>
  </svg>
);

export default HotjarIcon;