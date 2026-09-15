import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import useReducedMotion from "../hooks/useReducedMotion";
import useIsMobile from "../hooks/useIsMobile";

function WireKnot({ reduced }) {
  const meshRef = useRef();
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    if (!reduced) {
      meshRef.current.rotation.x += delta * 0.12;
      meshRef.current.rotation.y += delta * 0.18;
    }
    if (groupRef.current) {
      // subtle parallax toward the pointer
      const { x, y } = state.pointer;
      groupRef.current.rotation.y += (x * 0.4 - groupRef.current.rotation.y) * 0.03;
      groupRef.current.rotation.x += (-y * 0.3 - groupRef.current.rotation.x) * 0.03;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1.15, 0.34, reduced ? 64 : 180, 24]} />
        <meshBasicMaterial color="#6D5EF0" wireframe transparent opacity={0.35} />
      </mesh>
      <mesh scale={1.001}>
        <torusKnotGeometry args={[1.15, 0.34, 24, 8]} />
        <meshBasicMaterial color="#FF6F5E" wireframe transparent opacity={0.15} />
      </mesh>
    </group>
  );
}

export default function Scene3D() {
  const reduced = useReducedMotion();
  const isMobile = useIsMobile();

  return (
    <Canvas
      dpr={isMobile ? 1 : [1, 1.6]}
      camera={{ position: [0, 0, 4.2], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ position: "absolute", inset: 0 }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <WireKnot reduced={reduced} />
      </Suspense>
    </Canvas>
  );
}
