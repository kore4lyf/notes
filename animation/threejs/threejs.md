# Three JS

Three js is javascript library and an API (abstraction layer), that is built on top of WebGL, while still achieving the same result (Just like tailwind and css).

## Installation

```sh
npm i three
```

## Dimensions

The zeroth dimension (0D) is has no sides.
The first dimension (1D) is a line with no width or height
The second dimension (2D) is a shape with length, width and no depth
The Third dimension (3D) is a space with length, width and depth which give them volume.
The forth dimension (4d) is time

## Examples

### Example 1

```jsx

import * as THREE from "three"
import { OrbitControls } from "three/addons/controls/OrbitControls.js"


const canvas: HTMLElement | null = document.getElementById("canvas")

// 1. Scene
const scene = new THREE.Scene()
scene.background = new THREE.Color("#F0F0F0")

// 2. Camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000)

camera.position.z = 5

// 3. Object
const geometry = new THREE.DodecahedronGeometry()
const material = new THREE.MeshBasicMaterial({ color: "#468585" })
const dodecahedron = new THREE.Mesh(geometry, material)

const boxGeometry = new THREE.BoxGeometry( 2, 0.1, 2)
const boxMaterial = new THREE.MeshBasicMaterial({ color: "#468585" })
const box = new THREE.Mesh(boxGeometry, boxMaterial)

box.position.y = -1.5

scene.add(dodecahedron)
scene.add(box)


// 4. Light

const light = new THREE.SpotLight({ color: 0x006769, intensity: 100})
light.position.set({x: 1, y: 1, z: 1})
scene.add(light)

// 5. Renderer
const renderer = new THREE.WebGLRenderer({ canvas })

renderer.setSize(window.innerWidth, window.innerHeight)


// 6. Add OrbitControls

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true
controls.dampingFactor = 0.05
controls.enableZoom = true
controls.enablePan = true

// 7. Add Animations

function animate() {
  requestAnimationFrame(animate)

  dodecahedron.rotation.x += 0.01
  dodecahedron.rotation.y += 0.01

  box.rotation.y += 0.005

  controls.update()

  renderer.render(scene, camera)
}

// 8. Handle window resizing

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
})

animate()
```

### Example 2

```jsx
import { useEffect, useMemo, useRef } from "react";
import * as THREE from 'three';

const ThreeScene = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  

  // Memoize scene setup objects
  const scene = useMemo(() => new THREE.Scene(), [])
  const camera = useMemo(() => {
    const cam = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    cam.position.z = 5
    return cam
  }, [])

  const geometry = useMemo(() => new THREE.BoxGeometry(), [])

  const material = useMemo(() => new THREE.MeshBasicMaterial({ color: 0x00FF88FF}), [])

  const cube = useMemo(() => new THREE.Mesh(geometry, material), [geometry, material])

  useEffect(() => {
    if(!canvasRef.current) return

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true
    })

    scene.add(cube)

    const animate = () => {
      requestAnimationFrame(animate)

      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
      renderer.render(scene, camera)
    }

    animate()

    // Cleanup on unmount
    return () => {
      renderer. dispose()
      scene.remove(cube)
      geometry.dispose()
      material.dispose()
    }

  }, [scene, camera, cube, geometry, material])

  return <canvas ref={canvasRef} style={{ display: "block"}} />
}

export default ThreeScene
```