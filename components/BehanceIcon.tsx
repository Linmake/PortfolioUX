import React from 'react';

const BehanceIcon: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M7.64 10.62h4.512c0-1.74-.954-2.454-2.226-2.454-1.242 0-2.286.702-2.286 2.454zm12.444.708c0-3.93-2.988-6.408-7.008-6.408-4.14 0-7.008 2.682-7.008 6.624 0 3.798 2.688 6.552 6.912 6.552 3.864 0 6.132-2.208 6.948-5.328H14.84c-.48.816-1.344 1.392-2.58 1.392-1.728 0-2.916-1.224-2.916-3.048h8.748c.036-.576.084-1.008.084-1.776zM15.42 4.128h2.952V1.68H15.42v2.448z"/>
  </svg>
);

export default BehanceIcon;