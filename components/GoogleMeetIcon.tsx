
import React from 'react';

const GoogleMeetIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Placeholder for Google Meet */}
    <path d="M17 10l4 4-4 4V10z"></path>
    <path d="M3 10h11v8H3z"></path>
    <path d="M7 10V6a2 2 0 012-2h2a2 2 0 012 2v4"></path>
  </svg>
);

export default GoogleMeetIcon;
