import React from 'react';

const GithubCopilotIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 2a10 10 0 100 20 10 10 0 000-20z"></path>
    <path d="M12 6v6l4 2"></path>
    <path d="M12 12L8 10"></path>
    <path d="M16 10l-4 2"></path>
    <path d="M12 2L8 6"></path>
    <path d="M12 2l4 4"></path>
  </svg>
);

export default GithubCopilotIcon;