import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // For internal scrolling
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from 'react-router-dom'; // Keep for general routing/404

// Import all your sections
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer'; // New Footer component

import './App.css'; // The single, consolidated CSS file

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <Router>
      <div className="portfolio-container"> {/* Apply a wrapper for global styles */}
        {/* Global Navigation Bar */}
        <header className="navbar">
          <div className="container">
            {/* Logo - scrolls to the 'home' section */}
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              offset={-80} // Adjust based on your fixed navbar height
              duration={500}
              className="logo"
              onClick={closeMobileMenu}
            >
              Kidist Hailemichael
            </ScrollLink>

            {/* Navigation Links Wrapper */}
            <nav className={`nav-links-wrapper ${isMobileMenuOpen ? 'open' : ''}`}>
              <ul className="nav-links">
                <li>
                  <ScrollLink to="home" spy={true} smooth={true} offset={-80} duration={500} activeClass="active" onClick={closeMobileMenu}>Home</ScrollLink>
                </li>
                <li>
                  <ScrollLink to="about" spy={true} smooth={true} offset={-80} duration={500} activeClass="active" onClick={closeMobileMenu}>About</ScrollLink>
                </li>
                <li>
                  <ScrollLink to="skills" spy={true} smooth={true} offset={-80} duration={500} activeClass="active" onClick={closeMobileMenu}>Skills</ScrollLink>
                </li>
                <li>
                  <ScrollLink to="projects" spy={true} smooth={true} offset={-80} duration={500} activeClass="active" onClick={closeMobileMenu}>Projects</ScrollLink>
                </li>
                <li>
                  <ScrollLink to="contact" spy={true} smooth={true} offset={-80} duration={500} activeClass="active" onClick={closeMobileMenu}>Contact</ScrollLink>
                </li>
              </ul>
            </nav>

            {/* Mobile menu icon (Hamburger) */}
            <div className="menu-icon-app" onClick={toggleMobileMenu}>
              <i className={isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
          </div>
        </header>

        {/* Main Content Area - All sections rendered on the same page */}
        <main>
          <Routes>
            {/* This single route renders all your sections sequentially */}
            <Route path="/" element={
              <>
                <Home />
                <About />
                <Skills />
                <Projects />
                <Contact />
              </>
            } />

            {/* Fallback route for any undefined paths (404 Not Found) */}
            <Route path="*" element={
              <section className="not-found-section">
                <div className="container text-center">
                  <h1 className="section-title">404 - Page Not Found</h1>
                  <p className="lead">Oops! The page you are looking for does not exist.</p>
                  <RouterLink to="/" className="btn primary-btn mt-4">Go to Home</RouterLink>
                </div>
              </section>
            } />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;