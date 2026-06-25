import { useEffect, useState } from 'react'

export interface FearGreedData {
  value: string
  value_classification: string
  timestamp: string
}

export interface ExchangeRate {
  base: string
  rates: Record<string, number>
  time_last_update_utc: string
}

export function useMarketSentiment() {
  const [fearGreed, setFearGreed] = useState<FearGreedData | null>(null)
  const [rates, setRates] = useState<ExchangeRate | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true

    async function fetchAll() {
      const [fgRes, rateRes] = await Promise.allSettled([
        fetch('https://api.alternative.me/fng/?limit=1').then(r => r.json()),
        fetch('https://open.er-api.com/v6/latest/USD').then(r => r.json()),
      ])

      if (!active) return

      if (fgRes.status === 'fulfilled') {
        const d = fgRes.value as { data: FearGreedData[] }
        if (d?.data?.[0]) setFearGreed(d.data[0])
      }

      if (rateRes.status === 'fulfilled') {
        setRates(rateRes.value as ExchangeRate)
      }

      setLoading(false)
    }

    fetchAll()
    const timer = setInterval(fetchAll, 5 * 60_000)

    return () => {
      active = false
      clearInterval(timer)
    }
  }, [])

  return { fearGreed, rates, loading }
}
