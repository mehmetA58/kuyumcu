import { motion } from 'framer-motion'
import { Zap, Shield, BarChart2, Bell, Globe, RefreshCw } from 'lucide-react'
import { useTranslation } from '../i18n/LanguageContext'

const ICONS = [Zap, Shield, BarChart2, Bell, Globe, RefreshCw]
const COLORS = ['#7c3aed', '#3b82f6', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6']

export default function FeaturesSection() {
  const { t } = useTranslation()
  const f = t.features

  return (
    <section id="ozellikler" className="bg-[#030308] relative" aria-label={`${f.title} ${f.titleGradient}`}>
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.3), transparent)' }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative">
        <div className="text-center mb-16">
          <div className="text-[#7c3aed] text-xs uppercase mb-4 flex items-center justify-center gap-2" style={{ letterSpacing: '0.2em' }}>
            <span className="w-8 h-px bg-[#7c3aed]" />
            {f.sectionTag}
            <span className="w-8 h-px bg-[#7c3aed]" />
          </div>
          <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {f.title}{' '}
            <span style={{ background: 'linear-gradient(90deg, #7c3aed, #3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              {f.titleGradient}
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">{f.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {f.items.map((feat, i) => {
            const Icon = ICONS[i]
            const color = COLORS[i]
            return (
              <motion.article
                key={feat.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                whileHover={{ scale: 1.01 }}
                className="group rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden cursor-default"
                style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
                  style={{ background: `radial-gradient(ellipse at top left, ${color}12 0%, transparent 60%)` }}
                />
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}18`, border: `1px solid ${color}30` }}
                >
                  <Icon size={22} style={{ color }} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">{feat.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{feat.desc}</p>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
