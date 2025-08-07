import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>

        <div className="skills-content">
          <p className="skills-intro">
            As a Computer Science professional, I continuously expand my technical toolkit to build robust, efficient, and user-friendly applications. Here's a glimpse into the technologies and tools I work with:
          </p>

          <div className="skills-grid-categories">
            {/* Programming Languages */}
            <div className="skill-category-card">
              <h3 className="category-title"><i className="fas fa-terminal category-icon"></i> Programming Languages</h3>
              <ul>
                <li>Python (Django, Flask)</li>
                <li>JavaScript (Node.js, ES6+)</li>
                <li>C++</li>
                <li>TypeScript</li>
                <li>JavaScript</li>
                <li>SQL</li>
              </ul>
            </div>

            {/* Front-End Development */}
            <div className="skill-category-card">
              <h3 className="category-title"><i className="fas fa-desktop category-icon"></i> Front-End Development</h3>
              <ul>
                <li>React.js / Redux</li>
                <li>Next.js</li>
                <li>HTML5 & CSS3</li>
                <li>Tailwind CSS</li>
                <li>Responsive Design</li>
                <li>UI/UX Principles</li>
              </ul>
            </div>

            {/* Back-End Development */}
            <div className="skill-category-card">
              <h3 className="category-title"><i className="fas fa-server category-icon"></i> Back-End Development</h3>
              <ul>
                <li>Node.js (Express)</li>
                <li>Python (Django, Flask)</li>
                <li>Java (Spring Boot)</li>
                <li>RESTful APIs</li>
                <li>GraphQL</li>
                <li>Microservices</li>
              </ul>
            </div>

            {/* Databases */}
            <div className="skill-category-card">
              <h3 className="category-title"><i className="fas fa-database category-icon"></i> Databases</h3>
              <ul>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>supabase</li>
                <li>Firebase</li>
                <li>Database Design</li>
              </ul>
            </div>

            {/* Cloud & DevOps */}
            <div className="skill-category-card">
              <h3 className="category-title"><i className="fas fa-cloud category-icon"></i> Cloud & DevOps</h3>
              <ul>
                <li>Docker</li>
                <li>Linux</li>
              </ul>
            </div>

            {/* Tools & Methodologies */}
            <div className="skill-category-card">
              <h3 className="category-title"><i className="fas fa-tools category-icon"></i> Tools & Methodologies</h3>
              <ul>
                <li>Git & GitHub/GitLab</li>
                <li>Jira / Trello</li>
                <li>VS Code / IntelliJ</li>
                <li>Agile / Scrum</li>
                <li>Unit Testing / TDD</li>
                <li>Problem Solving</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;