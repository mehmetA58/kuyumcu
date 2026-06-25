export type Lang = 'tr' | 'en'

export const translations = {
  tr: {
    // Navbar
    nav: {
      home: 'Ana Sayfa',
      gold: 'Altın',
      crypto: 'Kripto',
      forex: 'Döviz',
      features: 'Özellikler',
      about: 'Hakkında',
      cta: 'Başlayın',
    },

    // Hero
    hero: {
      label: 'Canlı Piyasa Takibi',
      line1: 'Canlı Altın',
      line2: 'Fiyatları &',
      gradient: 'Kripto',
      description:
        'Gram altın, Bitcoin, Ethereum ve 10+ kripto para fiyatını — USD/TRY, EUR/TRY döviz kurlarıyla birlikte anlık takip edin. Ücretsiz, reklamsız.',
      cta1: 'Fiyatları Gör',
      cta2: 'Piyasayı Keşfet',
      scroll: 'Keşfetmek için kaydır',
    },

    // Gold Prices
    gold: {
      sectionTag: 'Canlı Veri',
      title: 'Canlı',
      titleGradient: 'Piyasa',
      subtitle: 'Anlık altın ve kıymetli maden fiyatları',
      asset: 'Varlık',
      lastPrice: 'Son Fiyat',
      bid: 'Alış',
      ask: 'Satış',
      high: 'En Yüksek',
      low: 'En Düşük',
      updated: 'Son güncelleme',
      loading: 'Piyasa verileri yükleniyor...',
      live: 'Canlı',
      reconnecting: 'Yeniden bağlanıyor...',
      connecting: 'Bağlanıyor...',
    },

    // Crypto
    crypto: {
      sectionTag: 'CoinGecko Verisi',
      title: 'Kripto',
      titleGradient: 'Piyasası',
      subtitle: 'Piyasa değerine göre ilk 12 kripto para — her dakika güncellenir',
      refresh: 'Yenile',
      price: 'Fiyat',
      high24: '24s Yüksek',
      low24: '24s Düşük',
      marketCap: 'Piyasa Değeri',
      loading: "CoinGecko'dan veri çekiliyor...",
      error: 'Kripto verisi yüklenemedi.',
      retry: 'Tekrar Dene',
    },

    // Market Sentiment
    sentiment: {
      sectionTag: 'Piyasa Göstergeleri',
      title: 'Duygu &',
      titleGradient: 'Döviz',
      subtitle: 'Kripto piyasa duygu endeksi ve anlık döviz kurları',
      fgTitle: 'Korku & Açgözlülük Endeksi',
      fgExplain: '0 = Aşırı Korku · 100 = Aşırı Açgözlülük',
      fgLow: 'Korku',
      fgMid: 'Nötr',
      fgHigh: 'Açgözlülük',
      ratesTitle: 'Döviz Kurları',
      ratesBasis: '(1 USD bazlı)',
      ratesLive: 'Canlı',
      ratesUpdated: 'Son güncelleme',
      loading: 'Veri yükleniyor...',
      basedOn: '1 USD =',
      fgLabels: {
        'Extreme Fear': 'Aşırı Korku',
        Fear: 'Korku',
        Neutral: 'Nötr',
        Greed: 'Açgözlülük',
        'Extreme Greed': 'Aşırı Açgözlülük',
      } as Record<string, string>,
    },

    // Features
    features: {
      sectionTag: 'Neden Kuyumcu',
      title: 'Güçlü',
      titleGradient: 'Özellikler',
      subtitle: 'Altın, kripto ve döviz piyasalarını tek ekranda takip etmek için ihtiyacınız olan her şey.',
      items: [
        {
          title: 'Anlık Veri',
          desc: 'WebSocket bağlantısı ile sıfır gecikme. Fiyatlar değiştiği anda ekranınızda.',
        },
        {
          title: 'Güvenilir Kaynak',
          desc: 'Veriler Ciner Yayın Grubu ve CoinGecko gibi güvenilir kaynaklardan alınır.',
        },
        {
          title: 'Detaylı Analiz',
          desc: 'Alış/Satış farkları, günlük en yüksek-düşük seviyeleri ve yüzdesel değişimler.',
        },
        {
          title: 'Piyasa Duygusu',
          desc: "Alternative.me'nin Korku & Açgözlülük endeksi ile piyasanın nabzını tutun.",
        },
        {
          title: 'Döviz Kurları',
          desc: 'USD bazlı anlık kur verileri: TRY, EUR, GBP, JPY, CHF ve daha fazlası.',
        },
        {
          title: 'Otomatik Güncelleme',
          desc: 'Sayfayı yenilemeden kripto fiyatları her dakika, döviz kurları her 5 dakikada güncellenir.',
        },
      ],
    },

    // About
    about: {
      sectionTag: 'Hakkında',
      title: 'Kuyumcu ile piyasayı',
      titleGradient: 'anlık takip edin',
      p1: 'Kuyumcu, altın başta olmak üzere tüm kıymetli maden, kripto para ve döviz piyasalarını tek bir arayüzden gerçek zamanlı olarak izlemenizi sağlayan ücretsiz bir platform.',
      p2: "Ciner yayın altyapısının WebSocket verilerini, CoinGecko'nun kripto API'sini ve ExchangeRate'in döviz verilerini bir araya getirerek eksiksiz bir piyasa görünümü sunar.",
      cta1: 'Piyasaya Git',
      cta2: 'GitHub',
      statsLabel: ['Canlı Varlık', 'Kripto Para', 'Döviz Kuru', 'Güncelleme/dk'],
      appDesc: 'Canlı Piyasa Takip Platformu',
      sourceNote: 'Veri kaynakları',
    },

    // Footer
    footer: {
      copyright: '© 2026 Kuyumcu. Tüm hakları saklıdır.',
      dataPrefix: 'Veri:',
    },

    // Common
    common: {
      skipToContent: 'Ana içeriğe geç',
    },
  },

  en: {
    nav: {
      home: 'Home',
      gold: 'Gold',
      crypto: 'Crypto',
      forex: 'Forex',
      features: 'Features',
      about: 'About',
      cta: 'Get Started',
    },

    hero: {
      label: 'Live Market Tracker',
      line1: 'Live Gold',
      line2: 'Prices &',
      gradient: 'Crypto',
      description:
        'Track gold, Bitcoin, Ethereum and 10+ cryptocurrencies — alongside USD/TRY, EUR/TRY exchange rates in real time. Free, no ads.',
      cta1: 'View Prices',
      cta2: 'Explore Markets',
      scroll: 'Scroll to discover',
    },

    gold: {
      sectionTag: 'Live Data',
      title: 'Live',
      titleGradient: 'Market',
      subtitle: 'Real-time gold and precious metals prices',
      asset: 'Asset',
      lastPrice: 'Last Price',
      bid: 'Bid',
      ask: 'Ask',
      high: 'High',
      low: 'Low',
      updated: 'Last updated',
      loading: 'Loading market data...',
      live: 'Live',
      reconnecting: 'Reconnecting...',
      connecting: 'Connecting...',
    },

    crypto: {
      sectionTag: 'CoinGecko Data',
      title: 'Crypto',
      titleGradient: 'Markets',
      subtitle: 'Top 12 cryptocurrencies by market cap — updated every minute',
      refresh: 'Refresh',
      price: 'Price',
      high24: '24h High',
      low24: '24h Low',
      marketCap: 'Market Cap',
      loading: 'Fetching data from CoinGecko...',
      error: 'Could not load crypto data.',
      retry: 'Try Again',
    },

    sentiment: {
      sectionTag: 'Market Indicators',
      title: 'Sentiment &',
      titleGradient: 'Forex',
      subtitle: 'Crypto market sentiment index and live exchange rates',
      fgTitle: 'Fear & Greed Index',
      fgExplain: '0 = Extreme Fear · 100 = Extreme Greed',
      fgLow: 'Fear',
      fgMid: 'Neutral',
      fgHigh: 'Greed',
      ratesTitle: 'Exchange Rates',
      ratesBasis: '(USD based)',
      ratesLive: 'Live',
      ratesUpdated: 'Last update',
      loading: 'Loading data...',
      basedOn: '1 USD =',
      fgLabels: {
        'Extreme Fear': 'Extreme Fear',
        Fear: 'Fear',
        Neutral: 'Neutral',
        Greed: 'Greed',
        'Extreme Greed': 'Extreme Greed',
      } as Record<string, string>,
    },

    features: {
      sectionTag: 'Why Kuyumcu',
      title: 'Powerful',
      titleGradient: 'Features',
      subtitle: 'Everything you need to track gold, crypto, and forex markets in one screen.',
      items: [
        {
          title: 'Real-Time Data',
          desc: 'Zero latency via WebSocket connection. Prices update the moment they change.',
        },
        {
          title: 'Trusted Sources',
          desc: 'Data sourced from Ciner Media Group and CoinGecko — reliable and accurate.',
        },
        {
          title: 'Detailed Analysis',
          desc: 'Bid/ask spreads, daily highs and lows, and percentage changes at a glance.',
        },
        {
          title: 'Market Sentiment',
          desc: "Stay on top of the market with Alternative.me's Fear & Greed Index.",
        },
        {
          title: 'Exchange Rates',
          desc: 'Live USD-based rates: TRY, EUR, GBP, JPY, CHF and more.',
        },
        {
          title: 'Auto Refresh',
          desc: 'Crypto prices refresh every minute, forex rates every 5 minutes — no manual reload.',
        },
      ],
    },

    about: {
      sectionTag: 'About',
      title: 'Track markets',
      titleGradient: 'in real time',
      p1: 'Kuyumcu is a free platform for monitoring gold, precious metals, cryptocurrencies, and forex markets in real time — all from a single interface.',
      p2: "It combines WebSocket feeds from Ciner Media, CoinGecko's crypto API, and ExchangeRate-API's forex data for a complete market view.",
      cta1: 'Go to Markets',
      cta2: 'GitHub',
      statsLabel: ['Live Assets', 'Cryptocurrencies', 'Forex Rates', 'Updates/min'],
      appDesc: 'Live Market Tracking Platform',
      sourceNote: 'Data sources',
    },

    footer: {
      copyright: '© 2026 Kuyumcu. All rights reserved.',
      dataPrefix: 'Data:',
    },

    common: {
      skipToContent: 'Skip to main content',
    },
  },
} as const

export type Translations = typeof translations[Lang]
