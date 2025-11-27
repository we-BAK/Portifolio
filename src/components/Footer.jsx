import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-900 text-center">
      <div className="flex justify-center gap-6 mb-4">
        <a href="https://github.com/we-BAK" className="text-slate-400 hover:text-violet-400 transition-colors"><Github size={20} /></a>
        <a href="https://www.linkedin.com/in/kidist-hailemichael-713316331/" className="text-slate-400 hover:text-violet-400 transition-colors"><Linkedin size={20} /></a>
        <a href="mailto:hailemichaelkidist@gmail.com" className="text-slate-400 hover:text-violet-400 transition-colors"><Mail size={20} /></a>
      </div>
      <p className="text-slate-600 text-sm">
        © {new Date().getFullYear()} CS Graduate & Web Developer.
      </p>
    </footer>
  );
};

export default Footer;
