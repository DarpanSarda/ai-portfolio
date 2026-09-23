"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const nodes = [
  [-2.5, 1.4, -1], [-1.4, 2.1, -2], [-0.2, 1.25, 0], [1.2, 2.25, -1.2],
  [2.5, 1.2, -2], [-2.2, -0.35, 0], [-0.8, -0.55, -1.5], [0.7, 0.05, 0.2],
  [2.25, -0.4, -0.7], [-1.55, -2, -1], [0.15, -1.55, 0], [1.65, -1.8, -1.7],
] as const;

const links = [[0, 1], [0, 2], [0, 5], [1, 2], [1, 3], [2, 3], [2, 6], [2, 7], [3, 4], [3, 7], [4, 8], [5, 6], [5, 9], [6, 7], [6, 9], [6, 10], [7, 8], [7, 10], [7, 11], [8, 11], [9, 10], [10, 11]];

function NeuralField() {
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.045;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, state.pointer.y * 0.12, 0.025);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, state.pointer.x * 0.18, 0.012);
  });

  const linePositions = new Float32Array(links.flatMap(([from, to]) => [...nodes[from], ...nodes[to]]));

  return (
    <group ref={group} rotation={[0.06, -0.15, -0.08]}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#5467ff" transparent opacity={0.42} />
      </lineSegments>
      {nodes.map((position, index) => (
        <mesh key={index} position={position} scale={index === 7 ? 1.55 : 1}>
          <icosahedronGeometry args={[index === 7 ? 0.16 : 0.09, 1]} />
          <meshStandardMaterial color={index % 3 === 0 ? "#91f5d0" : "#f2f5ff"} emissive={index % 3 === 0 ? "#36d6a0" : "#5467ff"} emissiveIntensity={index === 7 ? 3 : 1.2} roughness={0.2} />
        </mesh>
      ))}
      <mesh position={[0.7, 0.05, 0.2]}>
        <torusGeometry args={[0.42, 0.012, 8, 64]} />
        <meshBasicMaterial color="#91f5d0" transparent opacity={0.75} />
      </mesh>
    </group>
  );
}

export function HeroScene() {
  return (
    <div className="hero-scene" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 6.8], fov: 47 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.45} />
        <pointLight position={[2, 3, 5]} intensity={18} color="#7080ff" />
        <pointLight position={[-3, -2, 4]} intensity={12} color="#61e5ba" />
        <NeuralField />
      </Canvas>
    </div>
  );
}