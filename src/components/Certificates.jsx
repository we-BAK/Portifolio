import { useState } from 'react';
import { ExternalLink, Check, Copy, ShieldCheck, Award, FileCode, CheckCircle2, X } from 'lucide-react';
import { CERTIFICATES } from '../constants/data';
import SectionTitle from './SectionTitle';

export default function Certificates() {
  const [activeCert, setActiveCert] = useState(null);
  const [copiedPath, setCopiedPath] = useState(null);

  const handleCopy = (path, e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(path);
    setCopiedPath(path);
    setTimeout(() => setCopiedPath(null), 2500);
  };

  return (
    <section id="certificates" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionTitle
          eyebrow="Credentials & Verified Competencies"
          title="Industry certifications and recognized achievements."
          copy="Verified credentials spanning Artificial Intelligence, Python Scientific Computing, Algorithmic Problem Solving, Containerization, and Civic Leadership."
        />

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {CERTIFICATES.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setActiveCert(cert)}
              className="group rounded-3xl bg-slate-900/80 border border-slate-800/80 hover:border-cyan-500/40 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 cursor-pointer"
            >
              <div>
                {/* Certificate Preview Banner */}
                <div className="relative h-48 sm:h-52 bg-slate-950 overflow-hidden border-b border-slate-800">
                  <img
                    src={cert.previewImage}
                    alt={`${cert.title} — ${cert.issuer}`}
                    className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Issuer Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-slate-950/90 backdrop-blur-md text-white border border-white/10 shadow-md">
                      {cert.issuer}
                    </span>
                  </div>

                  {/* Credential Status */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                      Verified
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-mono font-semibold text-cyan-400">
                      {cert.badgeText}
                    </span>
                    {cert.credentialId && (
                      <span className="text-[10px] font-mono text-slate-500">
                        ID: {cert.credentialId}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h3>

                  {/* True description from CV */}
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed font-light line-clamp-3">
                    {cert.description}
                  </p>

                  {/* Verified Modules Snippet */}
                  <div className="mt-4 pt-3 border-t border-slate-800/80">
                    <p className="text-[11px] font-mono uppercase text-slate-400 font-semibold mb-2">
                      Key Competencies:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.modules.slice(0, 3).map((mod, mIdx) => (
                        <span
                          key={mIdx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800"
                        >
                          {mod}
                        </span>
                      ))}
                      {cert.modules.length > 3 && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 text-cyan-400">
                          +{cert.modules.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom False Path & Action */}
              <div className="p-6 pt-0 space-y-3">
                {/* File Path Pill */}
                <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 truncate">
                    <Folder size={12} className="text-cyan-400 shrink-0" />
                    <span className="truncate">{cert.folderPath}</span>
                  </div>
                  <button
                    type="button"
                    onClick={(e) => handleCopy(cert.folderPath, e)}
                    className="p-1 text-slate-400 hover:text-white rounded bg-slate-900 hover:bg-slate-800 shrink-0"
                    title="Copy relative file path"
                  >
                    {copiedPath === cert.folderPath ? (
                      <Check size={12} className="text-emerald-400" />
                    ) : (
                      <Copy size={12} />
                    )}
                  </button>
                </div>

                {/* Card Actions */}
                <div className="flex items-center justify-between pt-1">
                  {cert.verifyUrl ? (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 hover:underline"
                    >
                      <ExternalLink size={13} /> Verify Credential
                    </a>
                  ) : (
                    <span className="text-xs font-mono text-emerald-400">
                      Community Recognition
                    </span>
                  )}

                  <span className="text-xs font-medium text-slate-400 group-hover:text-white transition-colors">
                    Preview Card →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Certificate Detailed Inspector Modal */}
      {activeCert && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md"
          onClick={() => setActiveCert(null)}
        >
          <div
            className="w-full max-w-3xl bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 space-y-6 max-h-[92vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex justify-between items-start gap-4">
              <div>
                <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                  {activeCert.issuer} · {activeCert.badgeText}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {activeCert.title}
                </h3>
                {activeCert.credentialId && (
                  <p className="text-xs font-mono text-slate-400 mt-1">
                    Credential ID: <span className="text-slate-200">{activeCert.credentialId}</span>
                  </p>
                )}
              </div>
              <button
                type="button"
                onClick={() => setActiveCert(null)}
                className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800"
              >
                <X size={18} />
              </button>
            </div>

            {/* Certificate Preview Image */}
            <div className="rounded-2xl overflow-hidden border border-slate-800 aspect-[16/10] bg-slate-950 flex items-center justify-center">
              <img
                src={activeCert.previewImage}
                alt={activeCert.title}
                className="w-full h-full object-contain"
              />
            </div>

            {/* True Description */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 mb-2">
                VERIFIED CURRICULUM &amp; DESCRIPTION
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                {activeCert.description}
              </p>
            </div>

            {/* Complete Modules List */}
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                COMPREHENSIVE COMPETENCIES ASSESSED
              </h4>
              <div className="grid sm:grid-cols-2 gap-2">
                {activeCert.modules.map((mod, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-slate-950/60 border border-slate-800 text-xs text-slate-300">
                    <CheckCircle2 size={14} className="text-cyan-400 shrink-0" />
                    <span>{mod}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* File Replacement Guide */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
              <p className="text-xs font-mono text-amber-400 font-semibold flex items-center gap-1.5">
                <span>📁 File Replacement Location:</span>
              </p>
              <div className="flex items-center justify-between gap-2 p-2 rounded bg-slate-900 border border-slate-800 font-mono text-xs text-slate-300">
                <span>{activeCert.folderPath}</span>
                <button
                  type="button"
                  onClick={(e) => handleCopy(activeCert.folderPath, e)}
                  className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-[11px] text-cyan-300 flex items-center gap-1"
                >
                  {copiedPath === activeCert.folderPath ? <Check size={12} /> : <Copy size={12} />}
                  Copy Path
                </button>
              </div>
              <p className="text-[11px] text-slate-400">
                To replace this placeholder with your official certificate scan, place your file in <code className="text-cyan-300">public/certificates/{activeCert.folderPath.split('/').pop()}</code>.
              </p>
            </div>

            {/* Footer Buttons */}
            <div className="pt-2 border-t border-slate-800 flex flex-wrap justify-between items-center gap-3">
              {activeCert.verifyUrl ? (
                <a
                  href={activeCert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs shadow-md shadow-cyan-500/20"
                >
                  <span>Open Official Issuer Verification</span>
                  <ExternalLink size={14} />
                </a>
              ) : (
                <span className="text-xs font-mono text-slate-400">
                  Local Community Recognition
                </span>
              )}

              <button
                type="button"
                onClick={() => setActiveCert(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-xs font-medium text-slate-300 hover:bg-slate-700"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
