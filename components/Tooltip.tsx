import React from 'react';

interface TooltipProps {
  text: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  className?: string; // For the wrapper
  tooltipClassName?: string; // For the tooltip bubble itself
  instant?: boolean; 
}

const Tooltip: React.FC<TooltipProps> = ({
  text,
  children,
  position = 'right',
  className = '',
  tooltipClassName = '',
  instant = false, 
}) => {
  let positionClasses = '';
  let arrowClasses = '';

  switch (position) {
    case 'top':
      positionClasses = 'bottom-full left-1/2 -translate-x-1/2 mb-2';
      arrowClasses = 'left-1/2 -translate-x-1/2 bottom-[-4px] border-l-4 border-r-4 border-l-transparent border-r-transparent border-t-4 border-t-tooltip-bg';
      break;
    case 'bottom':
      positionClasses = 'top-full left-1/2 -translate-x-1/2 mt-2';
      arrowClasses = 'left-1/2 -translate-x-1/2 top-[-4px] border-l-4 border-r-4 border-l-transparent border-r-transparent border-b-4 border-b-tooltip-bg';
      break;
    case 'left':
      positionClasses = 'top-1/2 -translate-y-1/2 right-full mr-2';
      arrowClasses = 'top-1/2 -translate-y-1/2 right-[-4px] border-t-4 border-b-4 border-t-transparent border-b-transparent border-l-4 border-l-tooltip-bg';
      break;
    case 'right':
    default:
      positionClasses = 'top-1/2 -translate-y-1/2 left-full ml-2';
      arrowClasses = 'top-1/2 -translate-y-1/2 left-[-4px] border-t-4 border-b-4 border-t-transparent border-b-transparent border-r-4 border-r-tooltip-bg';
      break;
  }

  const durationClass = instant ? 'duration-50' : 'duration-150';

  return (
    <div className={`relative group ${className}`}>
      {children}
      <div
        role="tooltip"
        className={`absolute ${positionClasses} z-50
                   invisible opacity-0 group-hover:visible group-hover:opacity-100
                   transition-opacity ${durationClass} ease-in-out whitespace-nowrap
                   px-spectrum-100 py-spectrum-50 rounded-spectrum-100 shadow-spectrum-200
                   bg-tooltip-bg text-tooltip-text text-spectrum-50
                   ${tooltipClassName}`}
      >
        {text}
        <div className={`absolute w-0 h-0 ${arrowClasses}`} />
      </div>
    </div>
  );
};

export default Tooltip;