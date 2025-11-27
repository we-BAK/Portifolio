import React, { useState } from 'react';
import { Mail, Linkedin, Github, Calendar, ExternalLink } from 'lucide-react';
import { CALENDLY_URL } from '../constants/data';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for reaching out!");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-6">Let's Connect</h2>
            <p className="text-slate-400 mb-8 text-lg">
              I am eager to bring my strong academic background and self-taught practical skills to a junior developer role. I am a quick learner, disciplined, and ready to work.
            </p>
            
            {/* Calendly Integration Card */}
            <div className="mb-8 p-6 bg-violet-900/20 border border-violet-500/30 rounded-xl hover:border-violet-500/50 transition-all">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Calendar className="text-violet-400" /> 
                Schedule a Meeting
              </h3>
              <p className="text-slate-400 mb-4 text-sm">
                Prefer a real-time discussion? Pick a time slot that works for you.
              </p>
              <a 
                href={CALENDLY_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-4 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg transition-colors font-medium gap-2 shadow-lg shadow-violet-900/20"
              >
                Book a Call <ExternalLink size={16} />
              </a>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-violet-400">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email Me</p>
                  <a
                    href="mailto:hailemichaelkidist@gmail.com"
                    className="text-slate-200 font-medium hover:underline"
                  >
                    hailemichaelkidist@gmail.com
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-violet-400">
                  <Linkedin size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/kidist-hailemichael-713316331/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-200 font-medium hover:underline"
                  >
                    linkedin
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-violet-400">
                  <Github size={20} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">GitHub</p>
                  <a
                    href="https://github.com/we-BAK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-200 font-medium hover:underline"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-slate-950 p-8 rounded-2xl border border-slate-800">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none text-slate-200 transition-all"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none text-slate-200 transition-all"
                  placeholder="recruiter@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-400 mb-2">Message</label>
                <textarea 
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-800 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent outline-none text-slate-200 transition-all resize-none"
                  placeholder="Hi, I'd like to discuss a Junior Developer role..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-violet-500/25"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
