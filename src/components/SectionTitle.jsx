export default function SectionTitle({ eyebrow, title, copy, align = 'left', badge }) {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'}`}>
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-medium tracking-wider uppercase mb-4 ${isCenter ? 'mx-auto' : ''}`}>
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        {eyebrow}
        {badge && <span className="text-slate-400">· {badge}</span>}
      </div>
      
      <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-white tracking-tight leading-[1.18]">
        {title}
      </h2>
      
      {copy && (
        <p className="mt-4 text-base md:text-lg text-slate-400 leading-relaxed font-normal">
          {copy}
        </p>
      )}
    </div>
  );
}
