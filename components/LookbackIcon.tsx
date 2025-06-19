import React from 'react';

const LookbackIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Placeholder L with an eye for Lookback */}
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"></path>
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M4 4h4v4H4z"></path> {/* L shape part */}
    <path d="M4 8h4v12H4z"></path>
  </svg>
);

export default LookbackIcon;