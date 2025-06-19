import React from 'react';

const SurveyMonkeyIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2a10 10 0 00-7.071 17.071A9.957 9.957 0 0012 22a9.957 9.957 0 007.071-2.929A10 10 0 0012 2z"></path>
    <path d="M12 12a4 4 0 100-8 4 4 0 000 8z"></path>
    <path d="M12 12c-2 0-4 1-4 2s2 2 4 2 4-1 4-2-2-2-4-2z"></path>
    <path d="M9 16.5A1.5 1.5 0 0010.5 18h3a1.5 1.5 0 001.5-1.5"></path>
  </svg>
);

export default SurveyMonkeyIcon;