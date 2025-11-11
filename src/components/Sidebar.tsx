"use client";

import { useState, useEffect } from "react";
import portfolioData from "@/data/portfolio";
import ThemeToggle from "./ThemeToggle";

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("hero");
  const { name, title, github, linkedin, twitter, email } = portfolioData.personal;

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "projects", "skills", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <aside className="hidden lg:flex lg:flex-col lg:justify-between lg:py-20 lg:px-12 xl:px-16 lg:sticky lg:top-0 lg:h-screen relative overflow-y-auto">
      <div className="space-y-12">
        {/* Theme Toggle */}
        <div className="mb-8 flex justify-end">
          <ThemeToggle />
        </div>

        {/* Header with enhanced styling */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-500/30 dark:to-purple-500/30 rounded-full mb-6 border border-indigo-200 dark:border-indigo-400">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-300 uppercase tracking-wider">Available for hire</span>
          </div>
          
          <h1 className="text-5xl xl:text-6xl font-bold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-white dark:via-white dark:to-white bg-clip-text text-transparent">
              {name}
            </span>
          </h1>
          <h2 className="text-xl xl:text-2xl font-extrabold text-slate-900 dark:text-white mb-4" style={{ color: 'inherit' }}>
            {title}
          </h2>
          <p className="text-base xl:text-lg text-slate-800 dark:text-white leading-relaxed mb-6 font-semibold" style={{ color: 'inherit' }}>
            {portfolioData.personal.tagline}
          </p>
          
          {/* Quick stats */}
          <div className="flex flex-wrap gap-3 text-sm">
            <div className="flex items-center gap-2 px-3 py-2 bg-slate-100 dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600">
              <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-bold text-slate-900 dark:text-slate-200">Remote</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 bg-slate-100 dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600">
              <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-bold text-slate-900 dark:text-slate-200">5+ Years</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-5">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`group flex items-center gap-4 text-left transition-all ${
                activeSection === item.id
                  ? "text-slate-900 dark:text-[#ffffff]"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-[#ffffff]"
              }`}
            >
              <div
                className={`h-px transition-all ${
                  activeSection === item.id
                    ? "w-16 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-white dark:to-white"
                    : "w-8 bg-slate-400 dark:bg-slate-600 group-hover:w-12 group-hover:bg-indigo-600 dark:group-hover:bg-white"
                }`}
              />
              <span className={`text-xs font-bold uppercase tracking-widest transition-all ${
                activeSection === item.id ? "text-indigo-600 dark:text-[#ffffff]" : ""
              }`}>
                {item.label}
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* Social Links - Enhanced */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-slate-700 dark:text-[#ffffff] uppercase tracking-widest">Connect</h3>
        <div className="flex justify-between gap-2">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center p-3 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-900 dark:hover:bg-white transition-all hover:scale-110 shadow-sm hover:shadow-md border border-slate-200 dark:border-slate-600 flex-1"
            aria-label="GitHub"
          >
            <svg className="w-6 h-6 text-slate-700 dark:text-slate-200 group-hover:text-white dark:group-hover:text-slate-900 transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center p-3 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-[#0077b5] transition-all hover:scale-110 shadow-sm hover:shadow-md border border-slate-200 dark:border-slate-600 flex-1"
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6 text-slate-700 dark:text-slate-200 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center p-3 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-sky-500 transition-all hover:scale-110 shadow-sm hover:shadow-md border border-slate-200 dark:border-slate-600 flex-1"
            aria-label="Twitter"
          >
            <svg className="w-6 h-6 text-slate-700 dark:text-slate-200 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
          <a
            href={`mailto:${email}`}
            className="group flex items-center justify-center p-3 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-gradient-to-br hover:from-red-500 hover:to-pink-500 transition-all hover:scale-110 shadow-sm hover:shadow-md border border-slate-200 dark:border-slate-600 flex-1"
            aria-label="Email"
          >
            <svg className="w-6 h-6 text-slate-700 dark:text-slate-200 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>
    </aside>
  );
}

