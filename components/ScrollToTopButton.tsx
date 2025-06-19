import React from 'react';

const ScrollToTopButton: React.FC = () => {
  // This component is not currently used in the main application flow.
  // Providing a minimal structure to ensure it's a valid module.
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-4 right-4 p-2 rounded-full bg-gray-700 text-white hover:bg-gray-800 transition-colors shadow-lg z-50"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;