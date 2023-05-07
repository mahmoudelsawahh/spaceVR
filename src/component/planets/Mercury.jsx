import React, { useRef } from "react";
import MoonMap from "../../assets/planets/Mercury.jpeg";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls, Stars } from "@react-three/drei";
const Mercury = () => {
  const [colorMap] = useLoader(TextureLoader, [MoonMap]);
  const earthRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime / 18;
  });
  return (
    <>
      <ambientLight intensity={0.1} />
      <pointLight color={"#f6f3ea"} position={[360, 7, 5]} intensity={1.2} />

      <mesh ref={earthRef} position={[0, 0, 0]}>
        <sphereGeometry args={[2.5, 32, 32]} />
        <meshStandardMaterial map={colorMap} metalness={0.4} roughness={0.7} />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0}
          rotateSpeed={0.4}
        />
      </mesh>
    </>
  );
};
export default Mercury;
