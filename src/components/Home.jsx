import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function Home() {
  const typedElement = useRef(null); // Reference to the <span> element
  const typedInstance = useRef(null); // Reference to the Typed instance

  useEffect(() => {
    if (typedElement.current) {
      typedInstance.current = new Typed(typedElement.current, {
        strings: [
          "Full-Stack Developer",
          "UI/UX Designer",
          "Problem Solver",
          "Innovator",
          "Code Enthusiast"
        ],
        typeSpeed: 70,
        backSpeed: 40,
        loop: true,
        cursorChar: '|',
      });
    }

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy(); // Clean up on unmount
      }
    };
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="container hero-content-wrapper">
        <p className="hero-greeting">Hello there, I'm</p>
        <h1 className="hero-title">
          <span>KIDIST <br/> HAILEMICHAEL</span>
        </h1>

        <h2 className="hero-typed-roles">
          <span ref={typedElement} />
        </h2>

        <p className="hero-description">
          Passionate about crafting robust and beautiful digital experiences...
        </p>

        {/* social icons and buttons here... */}
      </div>
    </section>
  );
}
