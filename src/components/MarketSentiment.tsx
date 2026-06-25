import { motion } from 'framer-motion'
import { Activity, DollarSign, Euro, Loader2 } from 'lucide-react'
import { useMarketSentiment } from '../hooks/useMarketSentiment'

const CURRENCIES = [
  { code: 'TRY', label: 'TL', flag: '🇹🇷' },
  { code: 'EUR', label: 'EUR', flag: '🇪🇺' },
  { code: 'GBP', label: 'GBP', flag: '🇬🇧' },
  { code: 'JPY', label: 'JPY', flag: '🇯🇵' },
  { code: 'CHF', label: 'CHF', flag: '🇨🇭' },
  { code: 'AED', label: 'AED', flag: '🇦🇪' },
]

function getSentimentColor(val: number): string {
  if (val <= 25) return '#ef4444'
  if (val <= 45) return '#f97316'
  if (val <= 55) return '#eab308'
  if (val <= 75) return '#22c55e'
  return '#10b981'
}

function getSentimentLabel(classification: string): string {
  const map: Record<string, string> = {
    'Extreme Fear': 'Aşırı Korku',
    Fear: 'Korku',
    Neutral: 'Nötr',
    Greed: 'Açgözlülük',
    'Extreme Greed': 'Aşırı Açgözlülük',
  }
  return map[classification] ?? classification
}

export default function MarketSentiment() {
  const { fearGreed, rates, loading } = useMarketSentiment()

  const fgValue = fearGreed ? parseInt(fearGreed.value) : 0
  const sentimentColor = getSentimentColor(fgValue)

  return (
    <section id="duygu" className="bg-[#030308] relative">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(184,134,11,0.3), rgba(59,130,246,0.3), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-12">
          <div
            className="text-[#b8860b] text-xs uppercase mb-3 flex items-center gap-2"
            style={{ letterSpacing: '0.2em' }}
          >
            <span className="w-8 h-px bg-[#b8860b]" />
            Piyasa Göstergeleri
          </div>
          <h2 className="text-white text-4xl font-bold tracking-tight">
            Duygu &{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #b8860b, #f59e0b)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Döviz
            </span>
          </h2>
          <p className="text-gray-500 mt-2">
            Kripto piyasa duygu endeksi ve anlık döviz kurları
          </p>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-24 gap-3 text-gray-500">
            <Loader2 size={28} className="animate-spin text-[#b8860b]" />
            <span>Veri yükleniyor...</span>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Fear & Greed Gauge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-1 rounded-2xl p-6 flex flex-col items-center gap-6"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div className="flex items-center gap-2 text-gray-400 text-sm self-start">
                <Activity size={16} />
                <span>Korku &amp; Açgözlülük Endeksi</span>
              </div>

              {/* Gauge */}
              <div className="relative w-48 h-24 overflow-hidden">
                <svg viewBox="0 0 200 100" className="w-full">
                  {/* Background arc */}
                  <path
                    d="M 10 95 A 90 90 0 0 1 190 95"
                    fill="none"
                    stroke="rgba(255,255,255,0.06)"
                    strokeWidth="16"
                    strokeLinecap="round"
                  />
                  {/* Colored arc */}
                  <path
                    d="M 10 95 A 90 90 0 0 1 190 95"
                    fill="none"
                    stroke={sentimentColor}
                    strokeWidth="16"
                    strokeLinecap="round"
                    strokeDasharray={`${(fgValue / 100) * 283} 283`}
                    style={{ filter: `drop-shadow(0 0 6px ${sentimentColor})` }}
                  />
                  {/* Needle */}
                  <line
                    x1="100"
                    y1="95"
                    x2={100 + 70 * Math.cos(Math.PI - (fgValue / 100) * Math.PI)}
                    y2={95 - 70 * Math.sin((fgValue / 100) * Math.PI)}
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <circle cx="100" cy="95" r="5" fill="white" />
                </svg>
              </div>

              <div className="text-center">
                <p className="text-5xl font-bold" style={{ color: sentimentColor }}>
                  {fearGreed?.value ?? '--'}
                </p>
                <p className="text-white font-medium mt-1">
                  {fearGreed ? getSentimentLabel(fearGreed.value_classification) : 'Yükleniyor'}
                </p>
                <p className="text-gray-500 text-xs mt-2">
                  0 = Aşırı Korku · 100 = Aşırı Açgözlülük
                </p>
              </div>

              {/* Scale labels */}
              <div className="flex justify-between w-full text-xs text-gray-600">
                <span>Korku</span>
                <span>Nötr</span>
                <span>Açgözlülük</span>
              </div>
            </motion.div>

            {/* Exchange Rates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2 rounded-2xl p-6"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <DollarSign size={16} />
                  <span>Döviz Kurları</span>
                  <span className="text-gray-600 text-xs">(1 USD bazlı)</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Canlı
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {CURRENCIES.map(cur => {
                  const rate = rates?.rates?.[cur.code]
                  return (
                    <div
                      key={cur.code}
                      className="rounded-xl p-4 flex flex-col gap-2"
                      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{cur.flag}</span>
                        <span className="text-gray-400 text-xs font-medium uppercase">{cur.label}</span>
                      </div>
                      <p className="text-white font-bold text-lg">
                        {rate != null ? rate.toFixed(cur.code === 'JPY' ? 2 : 4) : '—'}
                      </p>
                      <p className="text-gray-600 text-xs">1 USD =</p>
                    </div>
                  )
                })}
              </div>

              {rates?.time_last_update_utc && (
                <p className="text-gray-600 text-xs mt-4 flex items-center gap-1.5">
                  <Euro size={11} />
                  Son güncelleme: {new Date(rates.time_last_update_utc).toLocaleString('tr-TR')}
                </p>
              )}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}
