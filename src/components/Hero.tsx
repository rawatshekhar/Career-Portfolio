"use client";

import portfolioData from "@/data/portfolio";

export default function Hero() {
  const { name, tagline, description } = portfolioData.personal;
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-2 sm:px-4 lg:px-6 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950"
    >
      {/* Animated Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-200/20 dark:bg-indigo-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="w-full max-w-[95%] lg:max-w-[1600px] mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="inline-block mb-6 animate-fade-in-down">
          <span className="px-6 py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full text-indigo-600 dark:text-indigo-400 text-sm font-medium border border-indigo-200 dark:border-indigo-800">
            👋 Welcome to my portfolio
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold mb-6 animate-fade-in text-slate-900 dark:text-white">
          Hi, I'm{" "}
          <span className="block mt-2 gradient-text">{name}</span>
        </h1>

        {/* Subtitle with typing effect style */}
        <div className="text-2xl sm:text-3xl md:text-4xl mb-8 animate-fade-in text-slate-700 dark:text-slate-300" style={{ animationDelay: '0.2s' }}>
          <span className="font-light">I craft</span>{" "}
          <span className="font-bold text-indigo-600 dark:text-indigo-400">{tagline.split(" ")[1]}</span>{" "}
          <span className="font-light">{tagline.split(" ").slice(2).join(" ")}</span>
        </div>

        {/* Description */}
        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {description}
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center flex-wrap animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <a
            href="#projects"
            className="group px-8 py-4 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 hover:shadow-xl transition-all font-semibold text-lg flex items-center gap-2"
          >
            View My Work
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#contact"
            className="group px-8 py-4 bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 border-2 border-indigo-200 dark:border-indigo-800 rounded-full hover:bg-indigo-50 dark:hover:bg-slate-700 transition-all font-semibold text-lg flex items-center gap-2"
          >
            Let's Talk
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
