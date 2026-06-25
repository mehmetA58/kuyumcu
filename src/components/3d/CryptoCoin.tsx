import { useRef, Component, type ReactNode } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'

const COIN_TEXTURE = 'https://strvid.nyc3.cdn.digitaloceanspaces.com/motionsite/bitcoin.png'

// Inner error boundary — if texture fails the gold edge still renders
class CoinFacesErrorBoundary extends Component<{ children: ReactNode }> {
  state = { failed: false }
  static getDerivedStateFromError() { return { failed: true } }
  render() {
    if (this.state.failed) return null
    return this.props.children
  }
}

function CoinFaces() {
  const texture = useTexture(COIN_TEXTURE)
  return (
    <>
      <mesh position={[0, 0, 0.21]}>
        <planeGeometry args={[5.6, 5.6]} />
        <meshStandardMaterial map={texture} transparent metalness={0.7} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0, -0.21]} rotation={[0, Math.PI, 0]}>
        <planeGeometry args={[5.6, 5.6]} />
        <meshStandardMaterial map={texture} transparent metalness={0.7} roughness={0.2} />
      </mesh>
    </>
  )
}

export default function CryptoCoin() {
  const groupRef = useRef<THREE.Group>(null)
  const { viewport } = useThree()

  const isMobile = viewport.width < 6
  const scale = isMobile ? 0.54 : 0.765
  const baseX = isMobile ? 0 : 2.5
  const baseY = isMobile ? -2.5 : 0

  useFrame(({ clock, pointer }) => {
    const t = clock.getElapsedTime()
    const g = groupRef.current
    if (!g) return
    g.position.y = Math.sin(t * 0.5) * 0.2 + baseY
    g.rotation.y = t * 0.2
    g.rotation.x += (pointer.y * 0.3 - g.rotation.x) * 0.05
    g.rotation.z += (-pointer.x * 0.15 - g.rotation.z) * 0.05
  })

  return (
    <group ref={groupRef} position={[baseX, baseY, 0]} scale={scale}>
      {/* Coin edge — always renders, no external dependency */}
      <mesh>
        <cylinderGeometry args={[2.8, 2.8, 0.4, 64]} />
        <meshStandardMaterial color="#b8860b" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Coin faces — isolated: if texture CDN fails, only these are skipped */}
      <CoinFacesErrorBoundary>
        <CoinFaces />
      </CoinFacesErrorBoundary>
    </group>
  )
}
