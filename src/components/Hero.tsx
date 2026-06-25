import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import HeroContent from './HeroContent'

// Lazy-load the heavy Three.js scene — defers ~900 KB from initial parse
// so text + CTA paint immediately (LCP improvement)
const ThreeScene = lazy(() => import('./3d/ThreeScene'))

export default function Hero() {
  return (
    <section
      className="relative w-full h-screen overflow-hidden bg-[#030308]"
      style={{ minHeight: 800 }}
      aria-label="Hero bölümü"
    >
      {/* 3D canvas — loads after initial paint */}
      <Suspense fallback={<div className="absolute inset-0 bg-[#030308]" />}>
        <ThreeScene />
      </Suspense>

      {/* Content overlay */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-full max-w-7xl px-6 flex items-center">
          <div className="w-full md:w-[45%] pointer-events-auto">
            <HeroContent />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-[#7c3aed]"
            style={{ boxShadow: '0 0 8px rgba(124,58,237,0.8)' }}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
        <span
          className="text-gray-500 uppercase"
          style={{ fontSize: '0.65rem', letterSpacing: '0.2em' }}
        >
          Keşfetmek için kaydır
        </span>
      </div>
    </section>
  )
}
