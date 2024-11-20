import React, { useRef, useEffect, useState, Suspense } from "react"
import * as styles from "./index.css"
import Effects from "./sub-components/effects"
import MoonLanding from "./sub-components/moon-landing"
import { Canvas } from "@react-three/fiber"
import {
  PerspectiveCamera,
  Stage,
  Stars,
  OrbitControls,
  Loader,
} from "@react-three/drei"

const Scene = () => {
  const target = useRef()
  const orbitControlsRef = useRef()
  const [autoRotateSpeed, setAutoRotateSpeed] = useState(2)
  const [minAzimuthValue, maxAzimuthValue] = ["-2.78", "2.75"]

  useEffect(() => {
    setInterval(() => {
      const { current: orbitControls } = orbitControlsRef
      if (!orbitControls) return
      const azimuthAngle = (orbitControls as any).getAzimuthalAngle().toString()
      if ((+azimuthAngle).toFixed(2) === minAzimuthValue) {
        setAutoRotateSpeed(2)
      } else if ((+azimuthAngle).toFixed(2) === maxAzimuthValue) {
        setAutoRotateSpeed(-2)
      }
    }, 1000)
  }, [orbitControlsRef.current])

  return (
    <div
      className={styles.sceneWrapper}
      ref={target}
      onClick={(e) => console.log("click")}
    >
      <Canvas
        shadows
        frameloop="demand"
        dpr={[1, 2]}
        onCreated={(state) => state.events.connect(target.current)}
      >
        <color attach="background" args={["#101010"]} />
        <Suspense fallback={null}>
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            saturation={0}
            speed={1}
            fade
          />
          <Stage
            intensity={0.5}
            environment={null}
            shadows={{ type: "accumulative" }}
            adjustCamera
          >
            <MoonLanding position={[0, 0, -25]} />
            <PerspectiveCamera
              makeDefault
              position={[0, 0, -1]}
              fov={45}
              zoom={0.9}
            />
          </Stage>
          <OrbitControls
            ref={orbitControlsRef}
            minPolarAngle={1.475}
            maxPolarAngle={1.525}
            minAzimuthAngle={2.75}
            maxAzimuthAngle={3.5}
            enableZoom={false}
            autoRotateSpeed={autoRotateSpeed}
            autoRotate
          />
          <Effects />
        </Suspense>
      </Canvas>
      <Loader />
    </div>
  )
}

export default Scene
