import { GraduationCap, Award, BookOpen, Globe2, CheckCircle2, Star } from 'lucide-react';
import { EDUCATION, ACHIEVEMENTS, LANGUAGES } from '../constants/data';
import SectionTitle from './SectionTitle';

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionTitle
          eyebrow="Academic Background & Achievements"
          title="Formal Computer Science study and academic honors."
          copy="B.Sc. in Computer Science with High Distinction (3.82/4.00 GPA, 78% Exit Exam), rigorous coursework, and multilingual communication skills."
        />

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Degree Card */}
          <div className="lg:col-span-7 space-y-6">
            {EDUCATION.map((edu) => (
              <div
                key={edu.id}
                className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-xl space-y-6"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium mb-3">
                      <GraduationCap size={15} />
                      <span>Bachelor of Science</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-slate-300 text-base font-medium mt-1">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-slate-400 font-mono mt-0.5">
                      {edu.location} · {edu.period}
                    </p>
                  </div>

                  {/* High Distinction Badge */}
                  <div className="p-3.5 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/10 border border-emerald-500/30 text-right">
                    <p className="text-xs font-mono text-emerald-400 uppercase font-semibold">Honors Status</p>
                    <p className="text-lg font-extrabold text-white">High Distinction</p>
                  </div>
                </div>

                {/* Academic Metric Highlights */}
                <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
                  <div>
                    <p className="text-xs text-slate-400 font-mono">Cumulative GPA</p>
                    <p className="text-2xl sm:text-3xl font-bold text-white font-mono mt-0.5">
                      {edu.gpa}
                    </p>
                    <span className="text-[11px] text-emerald-400 font-medium">Top Percentile</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-mono">National Exit Exam</p>
                    <p className="text-2xl sm:text-3xl font-bold text-cyan-400 font-mono mt-0.5">
                      {edu.exitExam}
                    </p>
                    <span className="text-[11px] text-cyan-300 font-medium">Excellence Score</span>
                  </div>
                </div>

                {/* Coursework Grid */}
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                    <BookOpen size={15} className="text-cyan-400" />
                    <span>Key Computer Science Coursework</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1.5 rounded-xl bg-slate-950 text-slate-300 text-xs font-mono border border-slate-800/80 hover:border-cyan-500/30 transition-colors"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Languages Card */}
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800">
              <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <Globe2 className="text-cyan-400" size={18} />
                <span>Languages &amp; Professional Communication</span>
              </h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {LANGUAGES.map((lang) => (
                  <div
                    key={lang.name}
                    className="p-3.5 rounded-xl bg-slate-950/60 border border-white/5 flex items-center justify-between"
                  >
                    <span className="font-semibold text-white text-sm">{lang.name}</span>
                    <span className="text-xs font-mono text-cyan-400">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Achievements List */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-mono font-bold tracking-widest uppercase text-slate-400 px-1 mb-2">
              NOTABLE ACHIEVEMENTS &amp; RECOGNITION
            </h3>

            {ACHIEVEMENTS.map((ach) => (
              <div
                key={ach.id}
                className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800/80 hover:border-cyan-500/30 transition-colors"
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 shrink-0 mt-0.5">
                    <Star size={16} />
                  </div>
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="font-bold text-white text-sm sm:text-base">
                        {ach.title}
                      </h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">
                        {ach.tag}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                      {ach.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
