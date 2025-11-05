import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactCTA() {
  const [loading, setLoading] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1200);
  }

  return (
    <section id="contact" className="relative w-full bg-gradient-to-b from-black via-[#07070a] to-black py-24 text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.2),transparent)] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8 bg-gradient-to-r from-white via-fuchsia-100 to-cyan-100 bg-clip-text text-center text-3xl font-semibold text-transparent md:text-4xl"
        >
          Let's build something cinematic
        </motion.h2>

        <form onSubmit={onSubmit} className="relative space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
          <FloatingInput label="Name" type="text" required />
          <FloatingInput label="Email" type="email" required />
          <FloatingTextarea label="Project details" required />
          <div className="flex justify-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
              className="relative overflow-hidden rounded-full border border-fuchsia-400/30 bg-gradient-to-r from-fuchsia-500/20 to-cyan-500/20 px-6 py-3 text-sm text-white/90 shadow-[0_0_40px_rgba(168,85,247,0.2)] backdrop-blur-md disabled:opacity-60"
            >
              <span className="relative z-10">{loading ? 'Sending...' : 'Send Message'}</span>
              <span className="pointer-events-none absolute inset-0 animate-pulse bg-gradient-to-r from-fuchsia-500/20 via-transparent to-cyan-400/20" />
            </motion.button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-white/50">© {new Date().getFullYear()} Alex Nova • All rights reserved</p>
      </div>
    </section>
  );
}

function FloatingInput({ label, type = 'text', required = false }) {
  return (
    <label className="group relative block">
      <input
        type={type}
        required={required}
        placeholder=" "
        className="peer w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white/90 outline-none backdrop-blur focus:border-fuchsia-400/40"
      />
      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 bg-transparent px-1 text-sm text-white/50 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-white/40 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-fuchsia-200">{label}</span>
    </label>
  );
}

function FloatingTextarea({ label, required = false }) {
  return (
    <label className="group relative block">
      <textarea
        rows={5}
        required={required}
        placeholder=" "
        className="peer w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-white/90 outline-none backdrop-blur focus:border-cyan-400/40"
      />
      <span className="pointer-events-none absolute left-3 top-6 bg-transparent px-1 text-sm text-white/50 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2 peer-focus:text-xs peer-focus:text-cyan-200">{label}</span>
    </label>
  );
}
