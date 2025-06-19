import React from 'react';

const GoogleCloudConsoleIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 8V6a2 2 0 0 1 2-2h2"></path>
    <path d="M4 16v2a2 2 0 0 0 2 2h2"></path>
    <path d="M16 4h2a2 2 0 0 1 2 2v2"></path>
    <path d="M16 20h2a2 2 0 0 0 2-2v-2"></path>
    <rect x="7" y="7" width="10" height="10" rx="1"></rect>
  </svg>
);

export default GoogleCloudConsoleIcon;