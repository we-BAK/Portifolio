import React from "react";
import { Link as ScrollLink } from "react-scroll";
import "./About.css";
import girl from "../assets/girl.webp";
const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container about-container">
        <div className="about-image-wrapper">
          <img
            src={girl}
            alt="Kidist Hailemichael"
            className="about-image"
          />
        </div>

        <div className="about-text-wrapper">
          <h2 className="section-title">About Me</h2>
          <div className="about-card">
            <p>
              Hello! I’m <span className="highlight-name">Kidist Hailemichael</span>, a dedicated Full-Stack Developer and passionate
              problem solver. I enjoy crafting clean, efficient, and scalable digital solutions.
            </p>
            <p>
              My journey began with curiosity and a love for learning — exploring frontend interfaces and backend logic to create seamless experiences.
            </p>
            <p>
              Whether working on innovative projects for autistic kids or building user-friendly websites, I strive to combine creativity with technology.
            </p>
          </div>

          <ScrollLink
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={600}
            className="btn primary-btn about-btn"
          >
            Contact Me
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default About;
