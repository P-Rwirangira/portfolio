const Navigation = ({
  activeSection,
  setActiveSection,
  menuOpen,
  setMenuOpen,
}: {
  activeSection: string;
  setActiveSection: (section: string) => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}) => (
  <nav className="fixed top-0 left-0 right-0 bg-secondary shadow-lg z-50">
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center h-16">
        <a href="#" className="text-2xl font-bold text-accent">
          P
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          {['home', 'about', 'projects', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`capitalize nav-link ${
                activeSection === section
                  ? 'text-primary'
                  : 'text-accent'
              }`}
            >
              {section}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-secondary py-4">
          {['home', 'about', 'projects', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => {
                setActiveSection(section);
                setMenuOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 capitalize nav-link ${
                activeSection === section
                  ? 'text-primary bg-highlight'
                  : 'text-accent'
              }`}
            >
              {section}
            </button>
          ))}
        </div>
      )}
    </div>
  </nav>
);

export default Navigation;