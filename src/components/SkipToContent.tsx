import React from 'react';

const SkipToContent: React.FC = () => {
  const skipToMain = () => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={skipToMain}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-lg z-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      aria-label="Skip to main content"
    >
      Skip to main content
    </button>
  );
};

export default SkipToContent;