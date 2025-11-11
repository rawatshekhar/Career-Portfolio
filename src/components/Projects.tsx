import portfolioData from "@/data/portfolio";

export default function Projects() {
  const projects = portfolioData.projects;
  return (
    <section id="projects" className="scroll-mt-24">
      <div>
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl font-bold text-foreground">
            Featured Projects
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-indigo-600 to-transparent dark:from-indigo-400"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-md hover:shadow-2xl transition-all hover:-translate-y-2"
            >
              {/* Top gradient bar */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              {/* Gradient background overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
              
              <div className="p-6 relative">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center text-xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform`}>
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-900 dark:text-slate-300 leading-relaxed mb-4 font-medium">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-300 rounded-lg text-xs font-bold border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-700 hover:scale-105 transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Archive */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl font-semibold transition-all hover:shadow-xl hover:shadow-indigo-500/30 hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            View Full Project Archive
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
