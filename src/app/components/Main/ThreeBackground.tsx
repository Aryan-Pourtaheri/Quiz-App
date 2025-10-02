"use client";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Environment, Stars } from "@react-three/drei";

export default function ThreeQuizBackground() {
  return (
    <Canvas
      className="absolute inset-0 -z-30"
      camera={{ position: [0, 0, 8], fov: 55 }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* Floating Glass Sphere */}
      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <mesh>
          <icosahedronGeometry args={[2.5, 1]} />
          <meshStandardMaterial
            color={"#3b82f6"}
            metalness={0.8}
            roughness={0.1}
            transparent
            opacity={0.7}
          />
        </mesh>
      </Float>

      {/* Starfield for depth */}
      <Stars radius={120} depth={50} count={5000} factor={4} fade />

      {/* Environment reflection for glossy feel */}
      <Environment preset="city" />

      {/* Subtle orbit animation */}
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.6} />
    </Canvas>
  );
}
