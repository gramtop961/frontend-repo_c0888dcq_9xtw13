import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero3D() {
  const ctaRef = useRef(null);
  const containerRef = useRef(null);

  // Magnetic hover effect for the CTA button
  useEffect(() => {
    const el = ctaRef.current;
    const container = containerRef.current;
    if (!el || !container) return;

    function onMove(e) {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x / 8}px, ${y / 8}px)`;
    }
    function reset() {
      el.style.transform = 'translate(0, 0)';
    }

    container.addEventListener('mousemove', onMove);
    container.addEventListener('mouseleave', reset);
    return () => {
      container.removeEventListener('mousemove', onMove);
      container.removeEventListener('mouseleave', reset);
    };
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient glow overlays (non-interactive) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-gradient-to-br from-fuchsia-500/20 via-purple-500/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gradient-to-tl from-cyan-400/20 via-blue-500/10 to-transparent blur-3xl" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-8 px-6 md:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-left font-extrabold leading-tight tracking-tight text-white/90"
          >
            <span className="block text-3xl md:text-4xl text-white/60">I'M</span>
            <span className="bg-gradient-to-r from-white via-fuchsia-200 to-cyan-200 bg-clip-text text-5xl md:text-7xl text-transparent">
              ALEX NOVA
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl text-left text-lg md:text-xl text-white/70"
          >
            Creative Director & Motion Designer crafting premium, cinematic digital experiences with 3D, micro-interactions, and immersive narratives.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9 }}
            className="flex items-center gap-4"
          >
            <div ref={containerRef} className="relative">
              <button
                ref={ctaRef}
                className="group relative overflow-hidden rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm backdrop-blur-md transition will-change-transform"
              >
                <span className="relative z-10 bg-gradient-to-r from-white to-fuchsia-100 bg-clip-text text-transparent">Explore Work</span>
                <span className="pointer-events-none absolute inset-0 scale-125 bg-gradient-to-r from-fuchsia-500/30 to-cyan-400/30 opacity-0 blur-xl transition group-hover:opacity-100" />
              </button>
            </div>
            <a href="#projects" className="rounded-full bg-white/5 px-6 py-3 text-sm text-white/80 backdrop-blur-md transition hover:bg-white/10">
              View Projects
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
