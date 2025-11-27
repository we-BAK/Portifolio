import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../constants/data';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Featured Projects</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
             Applying my CS knowledge to build functional web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="bg-slate-900 rounded-xl overflow-hidden border border-slate-800 group hover:border-violet-500/30 transition-all hover:shadow-2xl hover:shadow-violet-900/20">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-violet-900/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-violet-400 transition-colors">{project.title}</h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-2.5 py-0.5 rounded bg-violet-900/30 text-violet-300 border border-violet-800">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href={project.github} className="flex items-center text-sm text-slate-300 hover:text-white transition-colors gap-1">
                    <Github size={16} /> Code
                  </a>
                  <a href={project.link} className="flex items-center text-sm text-violet-400 hover:text-violet-300 transition-colors gap-1">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
