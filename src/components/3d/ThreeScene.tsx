import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
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

      <ErrorBoundary>
        <Canvas
          camera={{ position: [0, 0, 10], fov: 45 }}
          gl={{ antialias: false, alpha: true, powerPreference: 'high-performance' }}
          className="w-full h-full"
        >
          <color attach="background" args={['#030308']} />
          <fog attach="fog" args={['#030308', 8, 30]} />

          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#7c3aed" />
          <pointLight position={[-10, -10, -10]} intensity={1} color="#3b82f6" />
          <directionalLight position={[0, 5, 5]} intensity={1.5} color="#ffffff" />

          <Suspense fallback={null}>
            <Environment preset="city" />
            <CryptoCoin />
          </Suspense>

          <FloatingParticles />
          <WireframeTerrain />
        </Canvas>
      </ErrorBoundary>
    </div>
  )
}
