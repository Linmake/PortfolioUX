import React from 'react';

const DesktopIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className={className}
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21M9 17.25v-4.507a2.25 2.25 0 012.25-2.25h3.75a2.25 2.25 0 012.25 2.25v4.507M9 17.25H2.25m6.75 0H15M2.25 17.25v1.007a3 3 0 00.879 2.122L4.5 21m3.75-3.75H21.75m-18 0h9.75m0-12.75H4.125c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V4.5c0-.621-.504-1.125-1.125-1.125z" />
  </svg>
);

export default DesktopIcon;