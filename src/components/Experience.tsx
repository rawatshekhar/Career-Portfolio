import portfolioData from "@/data/portfolio";

export default function Experience() {
  const experiences = portfolioData.experience;
  return (
    <section id="experience" className="scroll-mt-24">
      <div>
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-bold text-foreground">
            Experience
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-indigo-600 to-transparent dark:from-indigo-400"></div>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-2xl transition-all overflow-hidden"
            >
              {/* Gradient accent on hover */}
              <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${exp.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
              
              <div className="p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center text-2xl flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform`}>
                      {exp.icon}
                    </div>
                    
                    {/* Title & Company */}
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-slate-800 dark:text-slate-300 font-semibold mb-2">
                        <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                        </svg>
                        {exp.company}
                      </div>
                    </div>
                  </div>
                  
                  {/* Period Badge */}
                  <div className="flex items-center gap-2 px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-full border border-indigo-100 dark:border-indigo-800">
                    <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-900 dark:text-slate-300 leading-relaxed mb-6 pl-[72px] font-medium">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="pl-[72px]">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-slate-400 uppercase tracking-wider mb-3">Key Achievements</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {exp.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 p-3 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors"
                      >
                        <svg className="w-5 h-5 text-green-500 dark:text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm text-slate-900 dark:text-slate-300 leading-snug font-semibold">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline Decoration */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700">
            <div className="w-2 h-2 bg-indigo-600 dark:bg-indigo-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-bold text-slate-900 dark:text-slate-300">Building amazing products</span>
          </div>
        </div>
      </div>
    </section>
  );
}
