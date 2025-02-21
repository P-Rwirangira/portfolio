import { useState, useEffect } from 'react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (event.target instanceof Element && !event.target.closest(".mobile-menu") && !event.target.closest(".menu-button")) {
        setIsMenuOpen(false);
      }
    };
    
    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-secondary shadow-lg z-50">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <a href="#" className="text-2xl font-bold text-accent">P</a>

        {/* Hamburger menu icon */}
        <button onClick={toggleMenu} className="md:hidden text-accent menu-button focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          {['home', 'about', 'projects', 'contact'].map((section) => (
            <a key={section} href={`#${section}`} className="capitalize nav-link text-accent hover:text-primary transition-colors duration-200">
              {section}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
      >
        <div
          className={`mobile-menu fixed top-0 left-0 w-2/3 h-full bg-secondary p-6 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          {['home', 'about', 'projects', 'contact'].map((section) => (
            <a key={section} href={`#${section}`} className="block py-2 text-accent hover:text-primary transition-colors duration-200">
              {section}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
