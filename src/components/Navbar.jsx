import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

// Mock utility function to ensure the component is runnable and functional.
// In a real multi-file project, this would be imported from a separate utility file.
const handleScrollTo = (targetId, offset = 90) => {
  const element = document.getElementById(targetId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - offset;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NAV_LINKS = [
    { name: 'Home', target: 'hero' },
    { name: 'About', target: 'about' },
    { name: 'Projects', target: 'projects' },
    { name: 'Skills', target: 'skills' },
    { name: 'Contact', target: 'contact' },
  ];

  const baseClasses = "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-filter backdrop-blur-lg border-b border-white/10 shadow-lg font-inter";
  const scrolledClasses = "bg-white/70 py-3";
  const topClasses = "bg-transparent py-5";
  
  const handleNavClick = (target) => {
    handleScrollTo(target);
    setIsOpen(false);
  };

  // Inject custom font styles for visual consistency
  const FontStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Inter:wght@400;500;600;700&display=swap');
    .font-manrope { font-family: 'Manrope', sans-serif; }
    .font-inter { font-family: 'Inter', sans-serif; }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: FontStyles }} />
      <nav className={`${baseClasses} ${scrolled ? scrolledClasses : topClasses}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo/Name: Uses Manrope and gradient style */}
          <div onClick={() => handleNavClick('hero')} className="text-xl font-extrabold text-gray-900 cursor-pointer tracking-wider font-manrope" role="link">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-pink-600">
                KIDIST
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map(link => (
              <div
                key={link.target}
                // Use handleScrollTo, not href
                onClick={() => handleNavClick(link.target)}
                className="text-gray-700 hover:text-violet-600 font-medium transition-colors cursor-pointer relative after:block after:content-[''] after:absolute after:h-[2px] after:bg-violet-600 after:w-0 after:hover:w-full after:transition-all after:duration-300 after:ease-in-out"
                role="link"
              >
                {link.name}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-violet-600 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Drawer (using a simple visible/hidden transition) */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-white/90 border-t border-white/20 shadow-xl transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="flex flex-col p-4 space-y-2">
            {NAV_LINKS.map(link => (
              <div
                key={link.target}
                onClick={() => handleNavClick(link.target)}
                className="block py-2 px-3 text-gray-800 hover:bg-violet-100/70 rounded-lg font-medium transition-colors cursor-pointer"
                role="link"
              >
                {link.name}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;