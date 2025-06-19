import React from 'react';

const ImageFxIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    <circle cx="8.5" cy="8.5" r="1.5"></circle>
    <polyline points="21 15 16 10 5 21"></polyline>
    <path d="M18 21H6a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2v14z"></path>
    <path d="M14.5 10.5l-5 5"></path>
    <path d="M14.5 15.5l-5-5"></path>
  </svg>
);

export default ImageFxIcon;