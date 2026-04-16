import { useState, useEffect } from 'react';

const Preloader = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [showAuthor, setShowAuthor] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const quote = 'Simplicity is the soul of efficiency.';
  const author = '- Austin Freeman';

  useEffect(() => {
    if (currentIndex < quote.length) {
      const timer = setTimeout(() => {
        setDisplayText(quote.substring(0, currentIndex + 1));
        setCurrentIndex(prev => prev + 1);
      }, 80);

      return () => clearTimeout(timer);
    } else if (!showAuthor) {
      const authorTimer = setTimeout(() => {
        setShowAuthor(true);
      }, 500);

      return () => clearTimeout(authorTimer);
    } else {
      const finishTimer = setTimeout(() => {
        setIsLoaded(true);
      }, 2500);

      return () => clearTimeout(finishTimer);
    }
  }, [currentIndex, quote, showAuthor]);

  return (
    <div className={`typewriter-preloader ${isLoaded ? 'fade-out' : ''}`}>
      <div className='quote-section'>
        <div className='main-quote'>
          {displayText}
          {currentIndex < quote.length && (
            <span className='typing-cursor'>|</span>
          )}
        </div>
        {showAuthor && <div className='quote-author'>{author}</div>}
      </div>

      <div className='bottom-loader'>
        <div className='mini-spinner'></div>
      </div>
    </div>
  );
};

export default Preloader;
