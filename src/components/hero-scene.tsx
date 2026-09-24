"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const nodes = [
  [-2.5, 1.4, -1], [-1.4, 2.1, -2], [-0.2, 1.25, 0], [1.2, 2.25, -1.2],
  [2.5, 1.2, -2], [-2.2, -0.35, 0], [-0.8, -0.55, -1.5], [0.7, 0.05, 0.2],
  [2.25, -0.4, -0.7], [-1.55, -2, -1], [0.15, -1.55, 0], [1.65, -1.8, -1.7],
] as const;

const links = [
  [0, 1], [0, 2], [0, 5], [1, 2], [1, 3], [2, 3], [2, 6], [2, 7],
  [3, 4], [3, 7], [4, 8], [5, 6], [5, 9], [6, 7], [6, 9], [6, 10],
  [7, 8], [7, 10], [7, 11], [8, 11], [9, 10], [10, 11]
];

function AvatarDisc({
  position = [0.7, 0.05, 0.2],
  radius = 0.88,
}: {
  position?: [number, number, number];
  radius?: number;
}) {
  const [texture, setTexture] = useState<THREE.Texture | null>(null);

  useEffect(() => {
    new THREE.TextureLoader().load("/Darpan-avatar.png", (t) => {
      t.colorSpace = THREE.SRGBColorSpace;
      t.generateMipmaps = true;
      t.minFilter = THREE.LinearMipmapLinearFilter;
      setTexture(t);
    });
  }, []);

  const backingRadius = radius + 0.02;
  const ringRadius = radius + 0.015;
  const haloRadius = radius + 0.08;

  return (
    <group position={position}>
      {/* Dark opaque backing disc: blocks lines behind the photo from showing through */}
      <mesh position={[0, 0, 0.02]}>
        <circleGeometry args={[backingRadius, 64]} />
        <meshBasicMaterial color="#0b0f17" />
      </mesh>

      {/* Photo disc */}
      {texture && (
        <mesh position={[0, 0, 0.05]}>
          <circleGeometry args={[radius, 64]} />
          <meshBasicMaterial map={texture} toneMapped={false} />
        </mesh>
      )}

      {/* Primary mint neon ring framing the avatar */}
      <mesh position={[0, 0, 0.06]}>
        <torusGeometry args={[ringRadius, 0.018, 16, 90]} />
        <meshBasicMaterial color="#91f5d0" />
      </mesh>

      {/* Subtle outer tech halo ring */}
      <mesh position={[0, 0, 0.04]}>
        <torusGeometry args={[haloRadius, 0.006, 16, 90]} />
        <meshBasicMaterial color="#5467ff" transparent opacity={0.55} />
      </mesh>
    </group>
  );
}

function NeuralField() {
  const group = useRef<THREE.Group>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    // Smooth responsive parallax following pointer
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, state.pointer.y * 0.12, 0.03);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, state.pointer.x * 0.18, 0.03);
  });

  const avatarX = isMobile ? 0 : 0.7;
  const avatarY = isMobile ? 0 : 0.05;
  const avatarRadius = isMobile ? 0.72 : 0.88;

  // Dynamically position node 7 to match avatar center
  const currentNodes = nodes.map((pos, idx) =>
    idx === 7 ? ([avatarX, avatarY, 0.2] as const) : pos
  );

  const linePositions = new Float32Array(
    links.flatMap(([from, to]) => [...currentNodes[from], ...currentNodes[to]])
  );

  return (
    <group ref={group} rotation={[0.04, -0.08, -0.02]}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#5467ff" transparent opacity={0.35} />
      </lineSegments>
      {currentNodes.map((position, index) => {
        // Node 7 is replaced by the AvatarDisc itself so no icosahedron obscures it
        if (index === 7) return null;
        return (
          <mesh key={index} position={position}>
            <icosahedronGeometry args={[0.09, 1]} />
            <meshStandardMaterial
              color={index % 3 === 0 ? "#91f5d0" : "#f2f5ff"}
              emissive={index % 3 === 0 ? "#36d6a0" : "#5467ff"}
              emissiveIntensity={1.2}
              roughness={0.2}
            />
          </mesh>
        );
      })}
      <AvatarDisc position={[avatarX, avatarY, 0.2]} radius={avatarRadius} />
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