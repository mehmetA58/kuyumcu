import { motion } from 'framer-motion'
import { Hexagon, Github, ExternalLink } from 'lucide-react'

const STATS = [
  { label: 'Canlı Varlık', value: '50+' },
  { label: 'Kripto Para', value: '12' },
  { label: 'Döviz Kuru', value: '6+' },
  { label: 'Güncelleme/dk', value: '∞' },
]

export default function AboutSection() {
  return (
    <section id="hakkinda" className="bg-[#030308] relative">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(59,130,246,0.3), rgba(124,58,237,0.3), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="text-[#7c3aed] text-xs uppercase mb-4 flex items-center gap-2"
              style={{ letterSpacing: '0.2em' }}
            >
              <span className="w-8 h-px bg-[#7c3aed]" />
              Hakkında
            </div>
            <h2 className="text-white text-4xl font-bold tracking-tight mb-6 leading-tight">
              Kuyumcu ile piyasayı{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #7c3aed, #3b82f6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                anlık takip edin
              </span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Kuyumcu, altın başta olmak üzere tüm kıymetli maden, kripto para ve döviz piyasalarını
              tek bir arayüzden gerçek zamanlı olarak izlemenizi sağlayan ücretsiz bir platform.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Ciner yayın altyapısının WebSocket verilerini, CoinGecko'nun kripto API'sini ve
              ExchangeRate'in döviz verilerini bir araya getirerek eksiksiz bir piyasa görünümü sunar.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#fiyatlar"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-medium transition-all hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, #6d28d9, #3b82f6)',
                  boxShadow: '0 0 20px rgba(99,102,241,0.35)',
                }}
              >
                Piyasaya Git
                <ExternalLink size={14} />
              </a>
              <a
                href="https://github.com/mehmetA58/kuyumcu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-gray-300 hover:text-white text-sm font-medium transition-all hover:-translate-y-0.5"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                <Github size={14} />
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Right — Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            {/* Logo card */}
            <div
              className="rounded-2xl p-8 flex items-center gap-6 mb-2"
              style={{
                background: 'rgba(124,58,237,0.06)',
                border: '1px solid rgba(124,58,237,0.15)',
              }}
            >
              <div className="relative">
                <Hexagon size={56} className="text-[#7c3aed]" fill="rgba(124,58,237,0.15)" />
                <div
                  className="absolute -top-1 -right-1 w-3 h-3 rounded-sm rotate-12"
                  style={{ background: '#3b82f6', filter: 'blur(4px)', opacity: 0.8 }}
                />
              </div>
              <div>
                <p className="text-white text-2xl font-bold" style={{ letterSpacing: '0.15em' }}>
                  Kuyumcu
                </p>
                <p className="text-gray-500 text-sm mt-0.5">Canlı Piyasa Takip Platformu</p>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.06 }}
                  className="rounded-2xl p-5 text-center"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  <p
                    className="text-4xl font-bold mb-1"
                    style={{
                      background: 'linear-gradient(135deg, #7c3aed, #3b82f6)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {s.value}
                  </p>
                  <p className="text-gray-500 text-sm">{s.label}</p>
                </motion.div>
              ))}
            </div>

            {/* API credits */}
            <div
              className="rounded-xl p-4 text-xs text-gray-600 leading-relaxed"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)' }}
            >
              Veri kaynakları:{' '}
              <span className="text-gray-500">Ciner WebSocket</span>,{' '}
              <span className="text-gray-500">CoinGecko API</span>,{' '}
              <span className="text-gray-500">ExchangeRate-API</span>,{' '}
              <span className="text-gray-500">Alternative.me Fear &amp; Greed Index</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
