
import React from 'react';
import { Theme } from '../App'; 

interface LogoProps {
  theme: Theme; 
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ theme, className }) => {
  // The dot will now use the grayscale version of accent color
  const accentDotColor = 'fill-spectrum-text-accent-default-light dark:fill-spectrum-text-accent-default-dark';
  const logoTextColor = 'text-spectrum-text-primary-light dark:text-spectrum-text-primary-dark';

  return (
    <a href="/" aria-label="UX AXEL Home" className={`block ${logoTextColor}`}>
      <svg 
        viewBox="0 0 130 40" 
        xmlns="http://www.w3.org/2000/svg" 
        className={className} // Height will be applied here, e.g., "h-7"
        aria-labelledby="logoTitle logoDesc"
      >
        <title id="logoTitle">UX AXEL Logo</title>
        <desc id="logoDesc">Logo for UX AXEL, linking to the homepage.</desc>
        <text 
          x="0" 
          y="28" 
          fontFamily="Inter, sans-serif" 
          fontSize="28" 
          fontWeight="700" 
          fill="currentColor" 
        >
          UX
        </text>
        <circle cx="44" cy="20" r="3.5" className={accentDotColor} /> 
        <text 
          x="56" 
          y="28" 
          fontFamily="Inter, sans-serif" 
          fontSize="28" 
          fontWeight="500"
          fill="currentColor" 
        >
          AXEL
        </text>
      </svg>
    </a>
  );
};

export default Logo;