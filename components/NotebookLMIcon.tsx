import React from 'react';

const NotebookLMIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 6h4"></path>
    <path d="M2 10h4"></path>
    <path d="M2 14h4"></path>
    <path d="M2 18h4"></path>
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
    <path d="M8 4v16"></path>
    <text x="10" y="15" fontSize="8" fill="currentColor" fontFamily="sans-serif">LM</text>
  </svg>
);

export default NotebookLMIcon;