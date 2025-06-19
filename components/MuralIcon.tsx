import React from 'react';

const MuralIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 3h18v18H3z"></path>
    <path d="M3 12h18"></path>
    <path d="M12 3v18"></path>
    <path d="M7 7h4v4H7z"></path>
    <path d="M13 13h4v4h-4z"></path>
  </svg>
);

export default MuralIcon;