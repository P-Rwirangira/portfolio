const Navigation = () => (
  <nav className="fixed top-0 left-0 right-0 bg-secondary shadow-lg z-50">
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center h-16">
        <a href="#" className="text-2xl font-bold text-accent">
          P
        </a>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-8">
          {['home', 'about', 'projects', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="capitalize nav-link text-accent hover:text-primary transition-colors duration-200"
            >
              {section}
            </a>
          ))}
        </div>
      </div>
    </div>
  </nav>
);

export default Navigation;