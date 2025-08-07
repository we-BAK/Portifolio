import './project.css';

const Projects = () => {
  const myProjects = [
    {
      title: "Autism Platform",
      description: "A communication and task system for parents, therapists, and managers. Built with React and Supabase.",
      liveLink: "#",
      sourceLink: "#",
    },
    {
      title: "Amazon Clone",
      description: "A simple frontend clone of Amazon UI. Focused on layout and responsive design.",
      liveLink: "#",
      sourceLink: "#",
    },
    {
      title: "Garage Management System",
      description: "A system for tracking car services and customer bookings.",
      liveLink: "#",
      sourceLink: "#",
    },
    {
      title: "KidsLearn",
      description: "Kids Learn is an interactive web platform designed to teach children coding through fun videos, weekly lessons, and hands-on activities. It makes learning programming engaging and accessible for young minds",
      liveLink: "#",
      sourceLink: "#",
    },
  ];

  return (
    // IMPORTANT: Added 'common-section' class here as per your CSS comment
    <section className="projects common-section">
      <h2>Projects</h2>
      <p>Some of the recent work I’ve done</p>
      <div className="project-cards">
        {myProjects.map((project, idx) => (
          <div key={idx} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              {/* Added 'btn-link' class for unified button styling */}
              <a href={project.liveLink} className="btn-link">Live</a>
              <a href={project.sourceLink} className="btn-link">Code</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;