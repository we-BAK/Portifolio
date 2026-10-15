import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Calendar, Github, Linkedin, Send, Copy, Check, Sparkles, MessageSquare } from 'lucide-react';
import { PROFILE } from '../constants/data';
import SectionTitle from './SectionTitle';

export default function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setStatus('');
    
    // EmailJS credentials preserved
    emailjs
      .sendForm('service_87r9pyr', 'template_h6mix4s', formRef.current, 'AcIdPA8LMdixDTOJa')
      .then(() => {
        setStatus({ ok: true, msg: 'Thank you! Your message was sent successfully. I will get back to you shortly.' });
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setStatus({ ok: false, msg: 'Transmission issue encountered. Please email me directly at hailemichaelkidist@gmail.com' });
      })
      .finally(() => setSending(false));
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionTitle
          eyebrow="Initiate Collaboration"
          title="Let’s discuss your next software engineering opportunity."
          copy="Based in Hawassa, Ethiopia. Open to junior software developer, full-stack, backend, and frontend engineering roles across remote and on-site teams."
        />

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Reachout Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-5">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <MessageSquare className="text-cyan-400" size={20} />
                <span>Direct Contact Channels</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Feel free to email, call, book a discovery meeting, or connect directly through GitHub and LinkedIn.
              </p>

              {/* Email Card with Copy button */}
              <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                    <Mail size={16} />
                  </div>
                  <div className="truncate">
                    <p className="text-[11px] font-mono text-slate-400">Direct Email</p>
                    <a href={`mailto:${PROFILE.email}`} className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-300 truncate block">
                      {PROFILE.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(PROFILE.email, 'email')}
                  className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800 hover:bg-slate-700 shrink-0"
                  title="Copy Email"
                >
                  {copiedField === 'email' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Phone Card with Copy button */}
              <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-slate-400">Direct Phone</p>
                    <a href={PROFILE.phoneHref} className="text-xs sm:text-sm font-semibold text-white hover:text-cyan-300">
                      {PROFILE.phone}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(PROFILE.phone, 'phone')}
                  className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800 hover:bg-slate-700 shrink-0"
                  title="Copy Phone"
                >
                  {copiedField === 'phone' ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-[11px] font-mono text-slate-400">Location Base</p>
                  <p className="text-xs sm:text-sm font-semibold text-white">{PROFILE.location}</p>
                </div>
              </div>

              {/* Action Buttons: Calendly + Profiles */}
              <div className="pt-2 flex flex-col gap-2.5">
                <a
                  href={PROFILE.calendly}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-semibold text-xs shadow-md shadow-cyan-500/20 transition-all"
                >
                  <Calendar size={15} /> Book a Discovery Call
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <a
                    href={PROFILE.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    <Linkedin size={15} className="text-cyan-400" /> LinkedIn
                  </a>
                  <a
                    href={PROFILE.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 text-xs font-medium text-slate-300 hover:text-white transition-colors"
                  >
                    <Github size={15} className="text-cyan-400" /> GitHub
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <form
              ref={formRef}
              onSubmit={onSubmit}
              className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-5"
            >
              <h3 className="text-xl font-bold text-white mb-2">Send an Instant Inquiry</h3>

              <div>
                <label htmlFor="name" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                  YOUR FULL NAME
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. John Doe / Tech Lead"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                  EMAIL ADDRESS
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="e.g. recruiter@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono font-medium text-slate-300 mb-1.5">
                  MESSAGE OR ROLE OPPORTUNITY
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Describe your role requirements, team stack, or project scope..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-cyan-500/20 transition-all disabled:opacity-60 flex items-center justify-center gap-2 cursor-pointer"
              >
                {sending ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Transmitting Message...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Transmit Message</span>
                  </>
                )}
              </button>

              {status && (
                <div
                  className={`p-3 rounded-xl text-xs font-mono border ${
                    status.ok
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                      : 'bg-rose-500/10 border-rose-500/30 text-rose-300'
                  }`}
                >
                  {status.msg}
                </div>
              )}
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
