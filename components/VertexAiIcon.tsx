import React from 'react';

const VertexAiIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
    <path d="M2 17l10 5 10-5"></path>
    <path d="M2 12l10 5 10-5"></path>
    <path d="m12 12-2.5-1.25M12 12l2.5-1.25m0 0L17 9.5M14.5 10.75L12 12m0 0l-2.5 1.25m0 0L7 14.5m2.5-1.25L12 12"></path>
  </svg>
);

export default VertexAiIcon;