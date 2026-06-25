import { motion, AnimatePresence } from 'framer-motion'
import { TrendingUp, TrendingDown, Wifi, WifiOff, Loader2 } from 'lucide-react'
import { useGoldPrices, type PriceData } from '../hooks/useGoldPrices'

function formatPrice(val: string) {
  const n = parseFloat(val)
  if (isNaN(n)) return val
  return n.toLocaleString('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

function formatPercent(val: string) {
  const n = parseFloat(val)
  if (isNaN(n)) return val
  const sign = n >= 0 ? '+' : ''
  return `${sign}${n.toFixed(2)}%`
}

function formatTime(iso: string) {
  try {
    return new Date(iso).toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
  } catch {
    return iso
  }
}

function StatusBadge({ status }: { status: string }) {
  if (status === 'connected') {
    return (
      <div className="flex items-center gap-2 text-emerald-400 text-sm">
        <Wifi size={14} />
        <span>Canlı</span>
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
      </div>
    )
  }
  if (status === 'disconnected') {
    return (
      <div className="flex items-center gap-2 text-red-400 text-sm">
        <WifiOff size={14} />
        <span>Yeniden bağlanıyor...</span>
      </div>
    )
  }
  return (
    <div className="flex items-center gap-2 text-gray-400 text-sm">
      <Loader2 size={14} className="animate-spin" />
      <span>Bağlanıyor...</span>
    </div>
  )
}

function PriceCard({ data, isUpdated }: { data: PriceData; isUpdated: boolean }) {
  const pct = parseFloat(data.PercentChange)
  const isPositive = pct >= 0

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative rounded-2xl p-5 flex flex-col gap-3 overflow-hidden transition-all duration-300"
      style={{
        background: isUpdated
          ? 'rgba(184,134,11,0.08)'
          : 'rgba(255,255,255,0.03)',
        border: isUpdated
          ? '1px solid rgba(184,134,11,0.3)'
          : '1px solid rgba(255,255,255,0.07)',
        backdropFilter: 'blur(12px)',
        boxShadow: isUpdated
          ? '0 0 20px rgba(184,134,11,0.1)'
          : '0 4px 24px rgba(0,0,0,0.2)',
      }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at top left, ${isPositive ? 'rgba(16,185,129,0.04)' : 'rgba(239,68,68,0.04)'} 0%, transparent 60%)`,
        }}
      />

      {/* Header row */}
      <div className="flex items-start justify-between gap-2 relative z-10">
        <div>
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-0.5">Varlık</p>
          <p className="text-white font-semibold text-sm leading-tight">{data.SecuritySlug}</p>
        </div>
        <div
          className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium ${
            isPositive ? 'bg-emerald-400/10 text-emerald-400' : 'bg-red-400/10 text-red-400'
          }`}
        >
          {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
          {formatPercent(data.PercentChange)}
        </div>
      </div>

      {/* Last price */}
      <div className="relative z-10">
        <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Son Fiyat</p>
        <AnimatePresence mode="popLayout">
          <motion.p
            key={data.LastPrice}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.25 }}
            className="text-white font-bold text-2xl tracking-tight"
          >
            {formatPrice(data.LastPrice)}
            <span className="text-gray-500 text-sm font-normal ml-1">₺</span>
          </motion.p>
        </AnimatePresence>
        <p className={`text-sm font-medium mt-0.5 ${isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
          {isPositive ? '+' : ''}{formatPrice(data.PriceChange)}
        </p>
      </div>

      {/* Bid / Ask */}
      <div className="grid grid-cols-2 gap-3 relative z-10">
        <div className="rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.03)' }}>
          <p className="text-gray-500 text-xs mb-1 uppercase tracking-wider">Alış</p>
          <p className="text-white text-sm font-medium">{formatPrice(data.Bid)}</p>
        </div>
        <div className="rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.03)' }}>
          <p className="text-gray-500 text-xs mb-1 uppercase tracking-wider">Satış</p>
          <p className="text-white text-sm font-medium">{formatPrice(data.Ask)}</p>
        </div>
      </div>

      {/* High / Low */}
      <div className="flex items-center justify-between text-xs relative z-10 pt-1 border-t border-white/5">
        <span className="text-gray-500">
          En Yüksek: <span className="text-emerald-400">{formatPrice(data.HighPrice)}</span>
        </span>
        <span className="text-gray-500">
          En Düşük: <span className="text-red-400">{formatPrice(data.LowPrice)}</span>
        </span>
      </div>

      {/* Update time */}
      <p className="text-gray-600 text-xs relative z-10">{formatTime(data.LastUpdateTime)}</p>
    </motion.div>
  )
}

export default function PricesDashboard() {
  const { prices, status, updatedSlug } = useGoldPrices()

  return (
    <section id="fiyatlar" className="bg-[#030308] relative">
      {/* Top separator glow */}
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(124,58,237,0.4), rgba(59,130,246,0.4), transparent)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <div
              className="text-[#7c3aed] text-xs uppercase mb-3 flex items-center gap-2"
              style={{ letterSpacing: '0.2em' }}
            >
              <span className="w-8 h-px bg-[#7c3aed]" />
              Canlı Veri
            </div>
            <h2 className="text-white text-4xl font-bold tracking-tight">
              Canlı{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #7c3aed, #3b82f6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Piyasa
              </span>
            </h2>
            <p className="text-gray-500 mt-2">
              Anlık altın ve kıymetli maden fiyatları
            </p>
          </div>
          <StatusBadge status={status} />
        </div>

        {/* Empty state */}
        {prices.length === 0 && (
          <div className="flex flex-col items-center justify-center py-32 gap-4">
            <Loader2 size={40} className="text-[#7c3aed] animate-spin" />
            <p className="text-gray-500">Piyasa verileri yükleniyor...</p>
          </div>
        )}

        {/* Price grid */}
        {prices.length > 0 && (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {prices.map(p => (
              <PriceCard
                key={p.SecuritySlug}
                data={p}
                isUpdated={p.SecuritySlug === updatedSlug}
              />
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}
