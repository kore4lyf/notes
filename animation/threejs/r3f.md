# React Three Fiber

## Installation

```js
npm i three @react-three/fiber @react-three/drei npm i @react-three/eslint-plugin -D
```

## Example

### Example 1

```jsx
import React, { type JSX } from 'react'
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Sparkles } from "@react-three/drei"
import { useRef } from 'react';

const RotatingCube = () => {
  const meshRef = useRef(null)

  useFrame(() => {
    if(meshRef.current) {
      meshRef.current.rotation.y += 0.01
      meshRef.current.rotation.x += 0.01
    }
  })

  return (
    <mesh ref={meshRef}>
      <cylinderGeometry args={[1, 1, 1]} />
      <meshLambertMaterial color="#468585" emissive="#468585"/>

      <Sparkles count={100} scale={1} size={6} speed={0.002} noise={0.5} color={"yellow"} />
    </mesh>
  )
}

const App = () => {
  return (
    <Canvas className="flex justify-center items-center" style={{ width: "100vw", height: "100vh"}}>
      <OrbitControls enableZoom={true} enablePan enableRotate />
      <directionalLight position={[1, 1, 1]} intensity={10} color={0x9CDBA6} />
      <color attach="background" args={["#F0F0F0"]} />

      <RotatingCube/>
     
    </Canvas>
  )
}

export default App
```

