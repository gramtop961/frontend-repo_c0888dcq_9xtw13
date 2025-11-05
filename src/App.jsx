import { useEffect } from 'react';
import Hero3D from './components/Hero3D';
import AboutTimeline from './components/AboutTimeline';
import ProjectsShowcase from './components/ProjectsShowcase';
import ContactCTA from './components/ContactCTA';

export default function App() {
  // Smooth-ish scrolling feel without external deps (Lenis-like light touch)
  useEffect(() => {
    const html = document.documentElement;
    html.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-black font-inter text-white">
      <header className="fixed inset-x-0 top-0 z-50 mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
        <a href="#home" className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/70 backdrop-blur hover:bg-white/10">AN</a>
        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#projects" className="transition hover:text-white">Projects</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </nav>
      </header>

      <main className="relative">
        <Hero3D />
        <AboutTimeline />
        <ProjectsShowcase />
        <ContactCTA />
      </main>
    </div>
  );
}
