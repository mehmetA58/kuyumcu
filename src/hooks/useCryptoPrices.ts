import { useEffect, useState, useCallback } from 'react'

export interface CoinData {
  id: string
  symbol: string
  name: string
  image: string
  current_price: number
  price_change_percentage_24h: number
  market_cap: number
  total_volume: number
  high_24h: number
  low_24h: number
}

export type FetchStatus = 'loading' | 'ok' | 'error'

const API_URL =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=1&sparkline=false'

const REFRESH_INTERVAL = 60_000

export function useCryptoPrices() {
  const [coins, setCoins] = useState<CoinData[]>([])
  const [status, setStatus] = useState<FetchStatus>('loading')

  const fetchCoins = useCallback(async () => {
    try {
      const res = await fetch(API_URL)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = (await res.json()) as CoinData[]
      setCoins(data)
      setStatus('ok')
    } catch {
      setStatus(prev => (prev === 'loading' ? 'error' : prev))
    }
  }, [])

  useEffect(() => {
    fetchCoins()
    const timer = setInterval(fetchCoins, REFRESH_INTERVAL)
    return () => clearInterval(timer)
  }, [fetchCoins])

  return { coins, status, refetch: fetchCoins }
}
