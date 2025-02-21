import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-10 right-10 bg-gray-800 shadow-lg z-50 hidden md:block px-8 rounded-b-2xl">
        <div className="container mx-auto">
          <div className="flex justify-between items-center h-16 text-lg">
            <div className="flex space-x-8">
              {['home', 'about'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize text-white hover:text-indigo-400 transition-colors duration-200 ${
                    activeSection === section ? 'font-semibold text-indigo-400' : ''
                  }`}
                >
                  {section}
                </a>
              ))}
            </div>
      
            {/* Centered Portfolio Name */}
            <a
              href="#home"
              onClick={() => scrollToSection('home')}
              className="text-2xl font-bold text-white hover:text-indigo-400 transition-colors duration-200 mx-8"
            >
              P
            </a>
      
            <div className="flex space-x-8 ">
              {['projects', 'contact'].map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize text-white hover:text-indigo-400 transition-colors duration-200 ${
                    activeSection === section ? 'font-semibold text-indigo-400' : ''
                  }`}
                >
                  {section}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Bar */}
      <nav className="fixed bottom-0 left-0 right-0 bg-gray-800 shadow-lg z-50 md:hidden rounded-t-lg">
        <div className="grid grid-cols-5 gap-2 py-2 px-4">
          {['home', 'about', 'portfolio', 'projects', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={() => scrollToSection(section)}
              className={`flex flex-col items-center justify-center p-2 rounded-lg text-white hover:bg-indigo-50/10 transition-colors duration-200 ${
                activeSection === section ? 'font-semibold text-indigo-400 bg-indigo-50/10' : ''
              }`}
            >
              <span className="capitalize text-xs mx-2">{section === 'portfolio' ? 'P' : section}</span>
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
