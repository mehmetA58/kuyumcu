import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, RefreshCw, Loader2 } from 'lucide-react'
import { useCryptoPrices } from '../hooks/useCryptoPrices'
import { useTranslation } from '../i18n/LanguageContext'

function formatUSD(n: number) {
  if (n >= 1e12) return `$${(n / 1e12).toFixed(2)}T`
  if (n >= 1e9) return `$${(n / 1e9).toFixed(2)}B`
  if (n >= 1e6) return `$${(n / 1e6).toFixed(2)}M`
  if (n < 1) return `$${n.toFixed(6)}`
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 2 })
}

export default function CryptoDashboard() {
  const { coins, status, refetch } = useCryptoPrices()
  const { t } = useTranslation()
  const c = t.crypto

  return (
    <section id="kripto" className="bg-[#030308] relative" aria-label={`${c.title} ${c.titleGradient}`}>
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.3), rgba(124,58,237,0.3), transparent)' }}
      />

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <div className="text-[#3b82f6] text-xs uppercase mb-3 flex items-center gap-2" style={{ letterSpacing: '0.2em' }}>
              <span className="w-8 h-px bg-[#3b82f6]" />
              {c.sectionTag}
            </div>
            <h2 className="text-white text-4xl font-bold tracking-tight">
              {c.title}{' '}
              <span style={{ background: 'linear-gradient(90deg, #3b82f6, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {c.titleGradient}
              </span>
            </h2>
            <p className="text-gray-500 mt-2">{c.subtitle}</p>
          </div>

          <button
            onClick={refetch}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all text-sm"
          >
            <RefreshCw size={14} />
            {c.refresh}
          </button>
        </div>

        {status === 'loading' && (
          <div className="flex items-center justify-center py-32 gap-3 text-gray-500">
            <Loader2 size={32} className="animate-spin text-[#3b82f6]" />
            <span>{c.loading}</span>
          </div>
        )}

        {status === 'error' && (
          <div className="flex flex-col items-center justify-center py-32 gap-4 text-gray-500">
            <p>{c.error}</p>
            <button onClick={refetch} className="px-4 py-2 rounded-full border border-white/10 text-sm hover:text-white transition-colors">
              {c.retry}
            </button>
          </div>
        )}

        {status === 'ok' && coins.length > 0 && (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {coins.map((coin, i) => {
              const isPos = coin.price_change_percentage_24h >= 0
              return (
                <motion.div
                  key={coin.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="rounded-2xl p-5 flex flex-col gap-3 relative overflow-hidden"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', backdropFilter: 'blur(12px)' }}
                >
                  <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse at top right, ${isPos ? 'rgba(59,130,246,0.05)' : 'rgba(239,68,68,0.04)'} 0%, transparent 60%)` }} />

                  <div className="flex items-center justify-between gap-2 relative z-10">
                    <div className="flex items-center gap-3">
                      <img src={coin.image} alt={coin.name} className="w-8 h-8 rounded-full" />
                      <div>
                        <p className="text-white font-semibold text-sm leading-none">{coin.name}</p>
                        <p className="text-gray-500 text-xs uppercase mt-0.5">{coin.symbol}</p>
                      </div>
                    </div>
                    <div className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${isPos ? 'bg-emerald-400/10 text-emerald-400' : 'bg-red-400/10 text-red-400'}`}>
                      {isPos ? <TrendingUp size={11} /> : <TrendingDown size={11} />}
                      {isPos ? '+' : ''}{coin.price_change_percentage_24h.toFixed(2)}%
                    </div>
                  </div>

                  <div className="relative z-10">
                    <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">{c.price}</p>
                    <p className="text-white font-bold text-xl tracking-tight">{formatUSD(coin.current_price)}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 relative z-10">
                    <div className="rounded-xl p-2.5" style={{ background: 'rgba(255,255,255,0.03)' }}>
                      <p className="text-gray-500 text-xs mb-1">{c.high24}</p>
                      <p className="text-emerald-400 text-xs font-medium">{formatUSD(coin.high_24h)}</p>
                    </div>
                    <div className="rounded-xl p-2.5" style={{ background: 'rgba(255,255,255,0.03)' }}>
                      <p className="text-gray-500 text-xs mb-1">{c.low24}</p>
                      <p className="text-red-400 text-xs font-medium">{formatUSD(coin.low_24h)}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-1 border-t border-white/5 relative z-10">
                    <span className="text-gray-500">{c.marketCap}</span>
                    <span className="text-gray-300">{formatUSD(coin.market_cap)}</span>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        )}
      </div>
    </section>
  )
}
