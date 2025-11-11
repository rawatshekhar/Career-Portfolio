import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import portfolioData from "@/data/portfolio";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Mobile Header */}
      <div className="lg:hidden">
        <Header />
      </div>

      {/* Desktop Layout */}
      <div className="lg:flex lg:gap-0 max-w-[1920px] mx-auto">
        {/* Sidebar - Fixed on desktop */}
        <div className="hidden lg:block lg:w-[480px] xl:w-[540px] lg:fixed lg:top-0 lg:left-0 lg:h-screen">
          <Sidebar />
        </div>

        {/* Main Content - Offset by sidebar width on desktop */}
        <div className="lg:ml-[480px] xl:ml-[540px] lg:flex-1">
          {/* Hero Section for Mobile */}
          <section id="hero" className="lg:hidden min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950"></div>
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <div className="inline-block mb-4 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
                <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">Welcome to my portfolio</span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
                {portfolioData.personal.name}
              </h1>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white mb-6">
                {portfolioData.personal.title}
              </h2>
              <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
                {portfolioData.personal.description}
              </p>
            </div>
          </section>

          {/* Content Sections with proper padding */}
          <div className="py-16 lg:py-20 px-6 md:px-12 lg:px-16 xl:px-20">
            <div className="space-y-20 lg:space-y-24">
              <About />
              <Experience />
              <Projects />
              <Skills />
              <Contact />
            </div>
            
            <footer className="mt-20 pt-12 pb-8 text-center text-foreground/60 border-t border-foreground/10">
              <div className="space-y-2">
                <p className="font-semibold">© 2025 {portfolioData.personal.name}</p>
                <p className="text-sm">Designed & Built with Next.js, React & Tailwind CSS</p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
}
