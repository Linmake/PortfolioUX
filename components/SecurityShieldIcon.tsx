
import React from 'react';

const SecurityShieldIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622V6a11.959 11.959 0 01-2.598-1.035A11.959 11.959 0 0012 2.75c-2.156 0-4.145.64-5.842 1.705z" />
  </svg>
);

export default SecurityShieldIcon;
