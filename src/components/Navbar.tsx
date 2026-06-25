import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Hexagon, Menu, X } from 'lucide-react'
import { useTranslation } from '../i18n/LanguageContext'
import type { Lang } from '../i18n/translations'

function LanguageToggle() {
  const { lang, setLang } = useTranslation()

  return (
    <div
      className="flex items-center rounded-full border border-white/10 overflow-hidden text-xs font-medium"
      role="group"
      aria-label="Dil seçimi / Language"
    >
      {(['tr', 'en'] as Lang[]).map(l => (
        <button
          key={l}
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className="px-3 py-1.5 transition-all duration-200 uppercase tracking-widest"
          style={{
            background: lang === l ? 'rgba(124,58,237,0.25)' : 'transparent',
            color: lang === l ? '#fff' : 'rgba(156,163,175,1)',
            borderRight: l === 'tr' ? '1px solid rgba(255,255,255,0.1)' : 'none',
          }}
        >
          {l}
        </button>
      ))}
    </div>
  )
}

export default function Navbar() {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const NAV_LINKS = [
    { label: t.nav.home, href: '#' },
    { label: t.nav.gold, href: '#fiyatlar' },
    { label: t.nav.crypto, href: '#kripto' },
    { label: t.nav.forex, href: '#duygu' },
    { label: t.nav.features, href: '#ozellikler' },
    { label: t.nav.about, href: '#hakkinda' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      aria-label="Ana navigasyon"
      style={{
        padding: scrolled ? '1rem 1.5rem' : '2rem 1.5rem',
        background: scrolled ? 'rgba(3,3,8,0.6)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.4)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5" aria-label="Kuyumcu — ana sayfa">
          <div className="relative">
            <Hexagon size={28} className="text-[#7c3aed]" fill="rgba(124,58,237,0.15)" />
            <div
              className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-sm rotate-12"
              style={{ background: '#3b82f6', filter: 'blur(3px)', opacity: 0.8 }}
            />
          </div>
          <span className="text-white font-bold text-lg" style={{ letterSpacing: '0.2em' }}>
            Kuyumcu
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
              style={{ letterSpacing: '0.02em' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop right: language toggle + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageToggle />
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 text-gray-200 hover:text-white hover:bg-white/5 transition-all duration-200 text-sm font-medium">
            <span
              className="w-2 h-2 rounded-full bg-[#5b21b6]"
              style={{ boxShadow: '0 0 8px rgba(91,33,182,0.8)' }}
            />
            {t.nav.cta}
          </button>
        </div>

        {/* Mobile: language toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <LanguageToggle />
          <button
            className="text-gray-300 hover:text-white transition-colors"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Menüyü aç/kapat"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mt-4 mx-1.5 rounded-2xl p-6"
            style={{
              background: 'rgba(3,3,8,0.95)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <div className="flex flex-col gap-5">
              {NAV_LINKS.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-300 text-lg hover:text-white transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <button className="mt-2 w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-white/10 text-gray-200 hover:text-white hover:bg-white/5 transition-all duration-200 font-medium">
                <span
                  className="w-2 h-2 rounded-full bg-[#5b21b6]"
                  style={{ boxShadow: '0 0 8px rgba(91,33,182,0.8)' }}
                />
                {t.nav.cta}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
