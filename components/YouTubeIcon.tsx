
import React from 'react';

const YouTubeIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.268,4,12,4,12,4S5.732,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.732,2,12,2,12s0,4.268,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.732,20,12,20,12,20s6.268,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.268,22,12,22,12S22,7.732,21.582,6.186z M9.951,15.565V8.435l6.539,3.565L9.951,15.565z"/>
  </svg>
);

export default YouTubeIcon;