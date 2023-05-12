
import { useEffect, useState } from 'react'
import * as THREE from 'three'
import { Canvas, applyProps, useFrame } from '@react-three/fiber'
import { Bloom } from '@react-three/postprocessing'
import {
  Center,
  AccumulativeShadows,
  RandomizedLight,
  OrbitControls,
  Environment,
  useFBX,
  useTexture,
  Plane,
  MeshDistortMaterial,
  GradientTexture,
  useGLTF
} from '@react-three/drei'

function App() {
  const [color, setColor] = useState('#fff')
  const [logoModel, setLogoModel] = useState(useFBX('/asset/ARANIKO.fbx'))
  const { nodes, materials } = useGLTF('/asset/ARANIKO.gltf')
  const [logoRot, setlogoRot] = useState([1, 0, 0])

  useEffect(() => {
    console.log('constructed')

    return () => {
      console.log(`clearing interval`);
    };
  })

  const addLights = () => {
    return (
      <>
        <ambientLight intensity={0} />
      </>
    )
  }

  const setRandomColor = () => {
    console.log('setColor: ' + `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`)
    setColor(`#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`)
    materials['SVGMat.002'].color.r = 1
  }
  console.log(nodes)
  // console.log(materials['SVGMat.002'])
  return (
    <Canvas shadows camera={{ position: [8, 1.5, 8], fov: 25 }}>
      {addLights()}
      <group position={[0, -0.5, 0]}>
        <Center top>
          <mesh geometry={nodes.path30.geometry} material={materials['SVGMat.002']} onClick={setRandomColor} scale={20} rotation={logoRot} />
        </Center>
      </group>
      {/* <OrbitControls /> */}
      <Bloom luminanceThreshold={0.2} mipmapBlur luminanceSmoothing={0} intensity={2} />
      <Environment preset="city" />
    </Canvas>
  )
}

export default App