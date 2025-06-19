import React from 'react';

const MazeIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 3h2v2H3zM7 3h2v2H7zM11 3h2v2h-2zM15 3h2v2h-2zM19 3h2v2h-2z"></path>
    <path d="M3 7h2v2H3zM11 7h2v2h-2zM19 7h2v2h-2z"></path>
    <path d="M3 11h2v2H3zM7 11h2v2H7zM15 11h2v2h-2zM19 11h2v2h-2z"></path>
    <path d="M3 15h2v2H3zM11 15h2v2h-2zM19 15h2v2h-2z"></path>
    <path d="M3 19h2v2H3zM7 19h2v2H7zM11 19h2v2h-2zM15 19h2v2h-2zM19 19h2v2h-2z"></path>
    <path d="M11 7V3h2v4 M7 11H3v2h4 M15 11h4v2h-4 M11 15V19h2v-4"></path>
  </svg>
);

export default MazeIcon;