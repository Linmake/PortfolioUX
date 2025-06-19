import React from 'react';

const NotionIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M8 3v18l8-9-8-9z"></path>
    <path d="M16 3v18"></path>
  </svg>
);

export default NotionIcon;