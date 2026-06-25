import { motion } from 'framer-motion'
import { Zap, Shield, BarChart2, Bell, Globe, RefreshCw } from 'lucide-react'

const FEATURES = [
  {
    icon: Zap,
    color: '#7c3aed',
    title: 'Anlık Veri',
    desc: 'WebSocket bağlantısı ile sıfır gecikme. Fiyatlar değiştiği anda ekranınızda.',
  },
  {
    icon: Shield,
    color: '#3b82f6',
    title: 'Güvenilir Kaynak',
    desc: 'Veriler Ciner Yayın Grubu ve CoinGecko gibi güvenilir kaynaklardan alınır.',
  },
  {
    icon: BarChart2,
    color: '#10b981',
    title: 'Detaylı Analiz',
    desc: 'Alış/Satış farkları, günlük en yüksek-düşük seviyeleri ve yüzdesel değişimler.',
  },
  {
    icon: Bell,
    color: '#f59e0b',
    title: 'Piyasa Duygusu',
    desc: 'Alternative.me\'nin Korku & Açgözlülük endeksi ile piyasanın nabzını tutun.',
  },
  {
    icon: Globe,
    color: '#ec4899',
    title: 'Döviz Kurları',
    desc: 'USD bazlı anlık kur verileri: TRY, EUR, GBP, JPY, CHF ve daha fazlası.',
  },
  {
    icon: RefreshCw,
    color: '#8b5cf6',
    title: 'Otomatik Güncelleme',
    desc: 'Sayfayı yenilemeden kripto fiyatları her dakika, döviz kurları her 5 dakikada güncellenir.',
  },
]

export default function FeaturesSection() {
  return (
    <section id="ozellikler" className="bg-[#030308] relative">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.3), transparent)',
        }}
      />

      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="text-[#7c3aed] text-xs uppercase mb-4 flex items-center justify-center gap-2"
            style={{ letterSpacing: '0.2em' }}
          >
            <span className="w-8 h-px bg-[#7c3aed]" />
            Neden Kuyumcu
            <span className="w-8 h-px bg-[#7c3aed]" />
          </div>
          <h2 className="text-white text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Güçlü{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #7c3aed, #3b82f6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Özellikler
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Altın, kripto ve döviz piyasalarını tek ekranda takip etmek için ihtiyacınız olan her şey.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => {
            const Icon = f.icon
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="group rounded-2xl p-6 flex flex-col gap-4 relative overflow-hidden cursor-default"
                style={{
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  transition: 'border-color 0.3s, background 0.3s',
                }}
                whileHover={{
                  scale: 1.01,
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(ellipse at top left, ${f.color}12 0%, transparent 60%)`,
                  }}
                />

                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `${f.color}18`,
                    border: `1px solid ${f.color}30`,
                  }}
                >
                  <Icon size={22} style={{ color: f.color }} />
                </div>

                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">{f.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{f.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
