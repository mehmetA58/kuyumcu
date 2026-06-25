import { useEffect, useRef, useState } from 'react'

export interface PriceData {
  SecuritySlug: string
  LastPrice: string
  PercentChange: string
  PriceChange: string
  Bid: string
  Ask: string
  HighPrice: string
  LowPrice: string
  LastUpdateTime: string
}

export type ConnectionStatus = 'connecting' | 'connected' | 'disconnected'

const WS_URL = 'wss://nc.ciner.com.tr/sub/dot'
const RECONNECT_DELAY = 3000

export function useGoldPrices() {
  const [prices, setPrices] = useState<Map<string, PriceData>>(new Map())
  const [status, setStatus] = useState<ConnectionStatus>('connecting')
  const [updatedSlug, setUpdatedSlug] = useState<string | null>(null)
  const wsRef = useRef<WebSocket | null>(null)
  const reconnectTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const unmounted = useRef(false)

  useEffect(() => {
    unmounted.current = false

    function connect() {
      if (unmounted.current) return
      setStatus('connecting')

      const ws = new WebSocket(WS_URL)
      wsRef.current = ws

      ws.onopen = () => {
        if (unmounted.current) return
        setStatus('connected')
      }

      ws.onmessage = (event: MessageEvent) => {
        if (unmounted.current) return
        try {
          const data = JSON.parse(event.data as string) as PriceData
          const slug = data.SecuritySlug
          setPrices(prev => {
            const next = new Map(prev)
            next.set(slug, data)
            return next
          })
          setUpdatedSlug(slug)
          setTimeout(() => setUpdatedSlug(null), 800)
        } catch {
          // ignore malformed messages
        }
      }

      ws.onerror = () => {
        ws.close()
      }

      ws.onclose = () => {
        if (unmounted.current) return
        setStatus('disconnected')
        reconnectTimer.current = setTimeout(connect, RECONNECT_DELAY)
      }
    }

    connect()

    return () => {
      unmounted.current = true
      if (reconnectTimer.current) clearTimeout(reconnectTimer.current)
      wsRef.current?.close()
    }
  }, [])

  return {
    prices: Array.from(prices.values()),
    status,
    updatedSlug,
  }
}
