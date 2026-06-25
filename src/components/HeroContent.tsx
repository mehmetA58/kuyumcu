import { motion } from 'framer-motion'
import { Zap, ArrowRight } from 'lucide-react'

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.6,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

export default function HeroContent() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-6 text-center md:text-left items-center md:items-start pt-32 md:pt-0 md:justify-center h-full"
    >
      {/* Label */}
      <motion.div
        variants={item}
        className="flex items-center gap-2 text-[#7c3aed] uppercase"
        style={{ fontSize: '0.75rem', letterSpacing: '0.2em' }}
      >
        <Zap size={14} fill="#7c3aed" />
        <span>Canlı Piyasa Takibi</span>
      </motion.div>

      {/* Headline — keyword-rich h1 for SEO */}
      <motion.h1
        variants={item}
        className="font-bold text-white"
        style={{
          fontSize: 'clamp(2.75rem, 7vw, 5rem)',
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
        }}
      >
        Canlı Altın
        <br />
        Fiyatları &amp;
        <br />
        <span className="relative inline-block">
          <span
            className="relative z-10"
            style={{
              background: 'linear-gradient(90deg, #7c3aed, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Takibi
          </span>
          {/* Glow behind "Takibi" */}
          <span
            aria-hidden
            className="absolute inset-0 z-0"
            style={{
              background: 'linear-gradient(90deg, #7c3aed, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'blur(20px)',
              opacity: 0.5,
            }}
          >
            Takibi
          </span>
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={item}
        className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-md"
      >
        Gram altın, Bitcoin, Ethereum ve 10+ kripto para fiyatını — USD/TRY, EUR/TRY döviz kurlarıyla birlikte anlık takip edin. Ücretsiz, reklamsız.
      </motion.p>

      {/* CTAs */}
      <motion.div
        variants={item}
        className="flex flex-wrap gap-4 justify-center md:justify-start"
      >
        <a
          href="#fiyatlar"
          className="group flex items-center gap-2 px-6 py-3 rounded-full font-medium text-white transition-all duration-200 hover:-translate-y-0.5"
          style={{
            background: 'linear-gradient(135deg, #6d28d9, #3b82f6)',
            boxShadow: '0 0 20px rgba(99,102,241,0.4)',
          }}
          onMouseEnter={e => {
            ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 30px rgba(99,102,241,0.6)'
          }}
          onMouseLeave={e => {
            ;(e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 20px rgba(99,102,241,0.4)'
          }}
        >
          Fiyatları Gör
          <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
        </a>
        <a
          href="#fiyatlar"
          className="group flex items-center gap-2 px-6 py-3 rounded-full font-medium text-gray-200 hover:text-white hover:bg-white/5 transition-all duration-200 hover:-translate-y-0.5"
          style={{
            background: 'rgba(0,0,0,0.2)',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          Piyasayı Keşfet
          <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </motion.div>
    </motion.div>
  )
}
