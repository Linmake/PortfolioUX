import React from 'react';

const UserberryIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 6a4 4 0 00-4 4h8a4 4 0 00-4-4z"></path>
    <circle cx="12" cy="16" r="1"></circle>
    <circle cx="9" cy="13" r="1"></circle>
    <circle cx="15" cy="13" r="1"></circle>
  </svg>
);

export default UserberryIcon;