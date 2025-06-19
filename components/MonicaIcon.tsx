
import React from 'react';

const MonicaIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Placeholder M for Monica */}
    <path d="M4 4h16v16H4z" fill="none"></path>
    <path d="M6 18V6l4 4 4-4v12"></path>
    <path d="M18 18V6"></path>
  </svg>
);

export default MonicaIcon;
