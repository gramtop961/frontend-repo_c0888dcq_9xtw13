import { useRef } from 'react';
import { motion } from 'framer-motion';

function ProjectCard({ title, tags, video, cover }) {
  const videoRef = useRef(null);

  const handleEnter = () => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    v.play().catch(() => {});
  };
  const handleLeave = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
  };

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-md"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
        <img src={cover} alt={title} className="absolute inset-0 h-full w-full object-cover opacity-80 transition group-hover:scale-105" />
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          src={video}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div>
          <h3 className="text-white/90">{title}</h3>
          <div className="mt-1 flex flex-wrap gap-2 text-xs text-white/50">
            {tags.map((t) => (
              <span key={t} className="rounded-full bg-white/5 px-2 py-0.5 backdrop-blur-sm">{t}</span>
            ))}
          </div>
        </div>
        <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">View</div>
      </div>
    </motion.article>
  );
}

export default function ProjectsShowcase() {
  const projects = [
    {
      title: 'Orbital Commerce',
      tags: ['3D', 'Motion', 'R3F'],
      cover: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1200&auto=format&fit=crop',
      video: 'https://cdn.coverr.co/videos/coverr-cyberpunk-technology-5418/1080p.mp4'
    },
    {
      title: 'Neon Systems',
      tags: ['GSAP-like', 'Framer', 'Cinematic'],
      cover: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
      video: 'https://cdn.coverr.co/videos/coverr-digital-glow-9749/1080p.mp4'
    },
    {
      title: 'Astra UI',
      tags: ['Micro-interactions', 'UI', 'Brand'],
      cover: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop',
      video: 'https://cdn.coverr.co/videos/coverr-neon-lights-5699/1080p.mp4'
    }
  ];

  return (
    <section id="projects" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-8 bg-gradient-to-r from-white via-fuchsia-100 to-cyan-100 bg-clip-text text-3xl font-semibold text-transparent md:text-4xl"
        >
          Projects Showcase
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
