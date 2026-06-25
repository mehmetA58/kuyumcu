import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const PARTICLE_COUNT = 200

const particleData = Array.from({ length: PARTICLE_COUNT }, () => ({
  x: (Math.random() - 0.5) * 35,
  y: (Math.random() - 0.5) * 35,
  z: (Math.random() - 0.5) * 30 - 5,
  scale: Math.random() * 0.06 + 0.02,
  speedX: Math.random() * 0.4 + 0.2,
  speedY: Math.random() * 0.3 + 0.1,
  phase: Math.random() * Math.PI * 2,
}))

export default function FloatingParticles() {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const groupRef = useRef<THREE.Group>(null)

  const dummy = useMemo(() => new THREE.Object3D(), [])

  useFrame(({ clock, pointer }) => {
    const t = clock.getElapsedTime()
    const mesh = meshRef.current
    if (!mesh) return

    particleData.forEach((p, i) => {
      dummy.position.set(
        p.x + Math.sin(t * p.speedX + p.phase) * 1.5,
        p.y + Math.cos(t * p.speedY + p.phase) * 1.5,
        p.z,
      )
      dummy.scale.setScalar(p.scale)
      dummy.rotation.x = t * 0.3
      dummy.rotation.z = t * 0.2
      dummy.updateMatrix()
      mesh.setMatrixAt(i, dummy.matrix)
    })
    mesh.instanceMatrix.needsUpdate = true

    if (groupRef.current) {
      groupRef.current.position.x += (-pointer.x * 1.5 - groupRef.current.position.x) * 0.05
      groupRef.current.position.y += (pointer.y * 1.5 - groupRef.current.position.y) * 0.05
    }
  })

  return (
    <group ref={groupRef}>
      <instancedMesh ref={meshRef} args={[undefined, undefined, PARTICLE_COUNT]}>
        <icosahedronGeometry args={[1, 0]} />
        <meshStandardMaterial
          color="#05051a"
          emissive="#5b21b6"
          emissiveIntensity={0.6}
          roughness={0.1}
          metalness={0.9}
        />
      </instancedMesh>
    </group>
  )
}
