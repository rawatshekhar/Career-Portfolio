import portfolioData from "@/data/portfolio";

export default function About() {
  const { paragraphs, stats } = portfolioData.about;
  const { github, linkedin, twitter } = portfolioData.personal;
  
  return (
    <section id="about" className="scroll-mt-24">
      <div>
        {/* Section Header with decorative line */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-bold text-foreground">
            About Me
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-indigo-600 to-transparent dark:from-indigo-400"></div>
        </div>

        {/* Description Card - Full Width */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 lg:p-10 border border-indigo-100 dark:border-slate-700 shadow-lg shadow-indigo-100/50 dark:shadow-indigo-900/10 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Text Content */}
            <div>
              {paragraphs.map((paragraph, index) => (
                <p key={index} className={`text-slate-900 dark:text-slate-100 leading-relaxed font-medium text-base ${index > 0 ? 'mt-4' : ''}`}>
                  {index === 0 ? (
                    <>
                      I'm a <span className="font-bold text-indigo-700 dark:text-indigo-400">passionate frontend developer</span> with 
                      a strong foundation in React, Next.js, and modern CSS frameworks. I love creating beautiful, intuitive user interfaces 
                      that provide seamless user experiences.
                    </>
                  ) : (
                    paragraph
                  )}
                </p>
              ))}
            </div>

            {/* Tech Highlights & Quick Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">Core Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white dark:bg-slate-700 rounded-full text-sm font-bold text-indigo-700 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-600">
                    React
                  </span>
                  <span className="px-3 py-1 bg-white dark:bg-slate-700 rounded-full text-sm font-bold text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-600">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-white dark:bg-slate-700 rounded-full text-sm font-bold text-pink-700 dark:text-pink-300 border border-pink-300 dark:border-pink-600">
                    TypeScript
                  </span>
                  <span className="px-3 py-1 bg-white dark:bg-slate-700 rounded-full text-sm font-bold text-blue-700 dark:text-blue-300 border border-blue-300 dark:border-blue-600">
                    Tailwind CSS
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">What I Do</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-slate-900 dark:text-slate-100 text-sm font-medium">
                    <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Build responsive web applications
                  </li>
                  <li className="flex items-start gap-2 text-slate-900 dark:text-slate-100 text-sm font-medium">
                    <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Design intuitive user interfaces
                  </li>
                  <li className="flex items-start gap-2 text-slate-900 dark:text-slate-100 text-sm font-medium">
                    <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Optimize for performance
                  </li>
                  <li className="flex items-start gap-2 text-slate-900 dark:text-slate-100 text-sm font-medium">
                    <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Ensure accessibility standards
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid - Horizontal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative text-center">
                <div className="text-5xl mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-300 dark:to-purple-300 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-slate-300 uppercase tracking-wide">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
