
import React from 'react';

const DropboxIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Placeholder for Dropbox */}
    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
    <path d="M2 17l10 5 10-5"></path>
    <path d="M2 12l10 5 10-5"></path>
    <path d="M12 22L2 17"></path>
    <path d="M12 22l10-5"></path>
    <path d="M12 12L2 7"></path>
    <path d="M12 12l10-5"></path>
  </svg>
);

export default DropboxIcon;
