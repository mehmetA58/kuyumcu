import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PricesDashboard from './components/PricesDashboard'
import CryptoDashboard from './components/CryptoDashboard'
import MarketSentiment from './components/MarketSentiment'
import FeaturesSection from './components/FeaturesSection'
import AboutSection from './components/AboutSection'

export default function App() {
  return (
    <main className="bg-[#030308] min-h-screen">
      <Navbar />
      <Hero />
      <PricesDashboard />
      <CryptoDashboard />
      <MarketSentiment />
      <FeaturesSection />
      <AboutSection />

      {/* Footer */}
      <footer className="border-t border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-600 text-sm">
          <p>© 2026 Kuyumcu. Tüm hakları saklıdır.</p>
          <p>
            Veri:{' '}
            <a href="https://www.coingecko.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">CoinGecko</a>
            {' · '}
            <a href="https://www.exchangerate-api.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">ExchangeRate-API</a>
            {' · '}
            <a href="https://alternative.me/crypto/fear-and-greed-index/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-colors">Alternative.me</a>
          </p>
        </div>
      </footer>
    </main>
  )
}
