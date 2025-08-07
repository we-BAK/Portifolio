import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer-section">
      <div className="container">
        <p>© {currentYear} Kidist Hailemichael . All rights reserved.</p>
        <div className="social-icons footer-social-icons">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="icon-link">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="icon-link">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="icon-link">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;