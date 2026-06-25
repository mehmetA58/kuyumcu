import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import ErrorBoundary from '../ErrorBoundary'
import CryptoCoin from './CryptoCoin'
import FloatingParticles from './FloatingParticles'
import WireframeTerrain from './WireframeTerrain'

export default function ThreeScene() {
  return (
    <div className="absolute inset-0 w-full h-full">
      {/* Vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(124,58,237,0.06) 0%, transparent 70%)',
          boxShadow: 'inset 0 0 150px rgba(3,3,8,0.9)',
        }}
      />

      {/* Canvas is wrapped in ErrorBoundary; individual 3D components
          have their own inner boundaries so one failure doesn't black out
          the whole scene */}
      <ErrorBoundary fallback={<div className="absolute inset-0 bg-[#030308]" />}>
        <Canvas
          camera={{ position: [0, 0, 10], fov: 45 }}
          gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
          className="w-full h-full"
        >
          <color attach="background" args={['#030308']} />
          <fog attach="fog" args={['#030308', 8, 30]} />

          {/* Manual lighting — no external HDR fetch needed */}
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={2} color="#7c3aed" />
          <pointLight position={[-10, -10, -10]} intensity={1.2} color="#3b82f6" />
          <pointLight position={[0, 8, 4]} intensity={1.8} color="#ffffff" />
          <pointLight position={[5, -5, 8]} intensity={0.8} color="#b8860b" />

          {/* CryptoCoin's texture is lazy — if CDN is unreachable the gold
              edge still shows (CoinFacesErrorBoundary inside the component) */}
          <Suspense fallback={null}>
            <CryptoCoin />
          </Suspense>

          <FloatingParticles />
          <WireframeTerrain />
        </Canvas>
      </ErrorBoundary>
    </div>
  )
}
