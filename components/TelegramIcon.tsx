
import React from 'react';

const TelegramIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M22 2L2 9.54l6.52 2.05L17.5 5.5 10.42 13.5l.02 6.5 3.53-3.93L18 17.5l4-15.5z"/>
  </svg>
);

export default TelegramIcon;
