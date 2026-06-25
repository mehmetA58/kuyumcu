import { useTranslation } from './i18n/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PricesDashboard from './components/PricesDashboard'
import CryptoDashboard from './components/CryptoDashboard'
import MarketSentiment from './components/MarketSentiment'
import FeaturesSection from './components/FeaturesSection'
import AboutSection from './components/AboutSection'

export default function App() {
  const { t } = useTranslation()

  return (
    <>
      <a
        href="#ana-icerik"
        className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:bg-[#7c3aed] focus:text-white focus:rounded-lg"
      >
        {t.common.skipToContent}
      </a>

      <header>
        <Navbar />
      </header>

      <main id="ana-icerik" className="bg-[#030308] min-h-screen">
        <Hero />
        <PricesDashboard />
        <CryptoDashboard />
        <MarketSentiment />
        <FeaturesSection />
        <AboutSection />
      </main>

      <footer className="border-t border-white/5 py-10" aria-label={t.about.sectionTag}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-600 text-sm">
          <p>{t.footer.copyright}</p>
          <nav aria-label="Veri kaynakları">
            <span className="mr-1">{t.footer.dataPrefix}</span>
            <a href="https://www.coingecko.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">CoinGecko</a>
            <span className="mx-1.5">·</span>
            <a href="https://www.exchangerate-api.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">ExchangeRate-API</a>
            <span className="mx-1.5">·</span>
            <a href="https://alternative.me/crypto/fear-and-greed-index/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">Alternative.me</a>
          </nav>
        </div>
      </footer>
    </>
  )
}
