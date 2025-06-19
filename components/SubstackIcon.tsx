import React from 'react';

const SubstackIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M22.537 3H1.463C.654 3 0 3.654 0 4.463v15.074C0 20.346.654 21 1.463 21h21.074c.809 0 1.463-.654 1.463-1.463V4.463C24 3.654 23.346 3 22.537 3zM6.533 17.202H3.798V7.95h2.735v9.252zm5.176 0h-2.74V7.95h2.74v9.252zm5.182 0h-2.74V7.95h2.74v9.252zM20.202 7.02H3.798V4.948h16.404v2.072z"/>
  </svg>
);

export default SubstackIcon;