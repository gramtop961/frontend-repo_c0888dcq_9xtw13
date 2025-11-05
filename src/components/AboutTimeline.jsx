import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function AboutTimeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  // Subtle parallax for the portrait blob
  useEffect(() => {
    const blob = document.getElementById('morph-blob');
    if (!blob) return;
    let raf = 0;
    const onScroll = () => {
      const y = window.scrollY * 0.06;
      blob.style.transform = `translateY(${y}px)`;
    };
    const loop = () => {
      onScroll();
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section id="about" className="relative w-full bg-gradient-to-b from-black via-[#0a0a0a] to-black py-24 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:px-8">
        {/* Animated portrait */}
        <div className="relative">
          <div
            id="morph-blob"
            className="relative mx-auto aspect-square w-72 overflow-hidden rounded-[48%_52%_56%_44%/48%_46%_54%_52%] bg-gradient-to-br from-fuchsia-500/20 via-purple-500/10 to-cyan-400/20 p-[2px] shadow-[0_0_120px_20px_rgba(168,85,247,0.08)] transition-[border-radius] duration-[4000ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] md:w-96"
          >
            <div className="absolute inset-0 rounded-[inherit] bg-black/40 backdrop-blur-xl" />
            <img
              alt="Portrait"
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=1200&auto=format&fit=crop"
              className="relative z-10 h-full w-full object-cover mix-blend-screen"
            />
          </div>
        </div>

        {/* Timeline */}
        <div ref={ref} className="relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-6 bg-gradient-to-r from-white via-fuchsia-100 to-cyan-100 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl"
          >
            About & Journey
          </motion.h2>

          <div className="relative pl-6">
            <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-fuchsia-400/60 via-white/30 to-cyan-400/60" />
            {[
              {
                year: '2024',
                title: 'Leading Immersive Web Experiences',
                desc: 'Directing cinematic 3D interfaces and motion systems for flagship brands.'
              },
              {
                year: '2022',
                title: 'Senior Motion Designer',
                desc: 'Built award-winning micro-interaction libraries and 3D visual languages.'
              },
              {
                year: '2020',
                title: 'Freelance Creative',
                desc: 'Delivered polished visuals and performant web animations for startups.'
              }
            ].map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 * i + 0.2, duration: 0.6 }}
                className="group mb-8 flex items-start gap-4"
              >
                <div className="relative mt-1 h-3 w-3 shrink-0 rounded-full bg-white/80 shadow-[0_0_20px_4px_rgba(255,255,255,0.35)]" />
                <div>
                  <div className="text-sm uppercase tracking-widest text-white/50">{item.year}</div>
                  <div className="text-lg font-medium text-white/90">{item.title}</div>
                  <div className="text-white/60">{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
