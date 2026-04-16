import { useState, useEffect } from 'react';

const ThemeSwitcher = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    // Check local storage for theme preference on mount
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsLightMode(true);
      document.body.classList.add('light-theme');
    }
  }, []);

  const toggleTheme = () => {
    setIsLightMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
      } else {
        document.body.classList.remove('light-theme');
        localStorage.setItem('theme', 'dark');
      }
      return newMode;
    });
  };

  return (
    <button 
      onClick={toggleTheme} 
      className="theme-switcher-btn"
      aria-label="Toggle Theme"
      title="Toggle Theme"
    >
      <i className={`fa-solid ${isLightMode ? 'fa-moon' : 'fa-sun'}`}></i>
    </button>
  );
};

export default ThemeSwitcher;
