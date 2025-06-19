import React from 'react';

const ClaudeIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2a10 10 0 00-7.07 17.07l.01-.01L12 22l7.06-2.94.01.01A10 10 0 0012 2zm0 4a6 6 0 100 12 6 6 0 000-12z"></path>
    <circle cx="12" cy="12" r="2"></circle>
  </svg>
);

export default ClaudeIcon;