import * as THREE from 'three'
import { Canvas, applyProps } from '@react-three/fiber'
import { Center, AccumulativeShadows, RandomizedLight, OrbitControls, Environment, useFBX } from '@react-three/drei'

function renderLogo() {
  const fbx = useFBX('/ARANIKO.fbx')
  return <primitive castShadow receiveShadow object={fbx} scale={0.01} />
}

function App() {
  return (
    <Canvas shadows camera={{ position: [8, 1.5, 8], fov: 25 }}>
      <group position={[0, -0.5, 0]}>
        <Center top>
          {renderLogo()}
        </Center>
        <AccumulativeShadows temporal frames={100} color="#101010" colorBlend={2} toneMapped={true} alphaTest={0.9} opacity={2} scale={12}>
          <RandomizedLight amount={8} radius={4} ambient={0.5} intensity={1} position={[5, 5, -10]} bias={0.001} />
        </AccumulativeShadows>
      </group>
      <OrbitControls />
      <Environment preset="city" />
    </Canvas>
  )
}

export default App