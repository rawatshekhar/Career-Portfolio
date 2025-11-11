import portfolioData from "@/data/portfolio";

export default function Skills() {
  const { categories } = portfolioData.skills;

  return (
    <section id="skills" className="scroll-mt-24">
      <div>
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-bold text-foreground">
            Skills & Expertise
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-indigo-600 to-transparent dark:from-indigo-400"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-xl transition-all overflow-hidden"
            >
              <div className="relative">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    <span className="text-white">💻</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                    {category.category}
                  </h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-200 rounded-lg text-sm font-bold hover:bg-indigo-100 dark:hover:bg-indigo-900/40 hover:text-indigo-600 dark:hover:text-indigo-300 hover:scale-110 transition-all cursor-default border border-slate-200 dark:border-slate-600 hover:border-indigo-400 dark:hover:border-indigo-500 shadow-sm hover:shadow-md"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 border border-indigo-100 dark:border-slate-700 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">Ready to Work Together?</h3>
              <p className="text-slate-900 dark:text-slate-300 font-semibold">Download my resume to learn more about my experience and skills</p>
            </div>
            <a
              href="/resume.pdf"
              download
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all hover:shadow-xl hover:shadow-indigo-500/30 hover:scale-105 whitespace-nowrap"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
