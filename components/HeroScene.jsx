"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  MeshDistortMaterial,
  Sparkles,
  Float,
} from "@react-three/drei";
import { EffectComposer, Bloom, Vignette, Noise } from "@react-three/postprocessing";
import * as THREE from "three";
import gsap from "gsap";

/* ---------------------------------------------------------
   Core sphere: physical material with subtle organic distortion,
   an inner emissive glow core, and a thin fresnel shell for the
   "glass over metal" premium look.
--------------------------------------------------------- */
function CoreSphere() {
  const group = useRef();
  const mesh = useRef();
  const glow = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      // slow organic oscillation, never fast
      group.current.rotation.y = t * 0.05;
      group.current.rotation.x = Math.sin(t * 0.15) * 0.06;
      group.current.position.y = Math.sin(t * 0.35) * 0.06;
    }
    if (glow.current) {
      glow.current.intensity = 2.2 + Math.sin(t * 0.6) * 0.35;
    }
  });

  return (
    <group ref={group}>
      <mesh ref={mesh} castShadow receiveShadow>
        <icosahedronGeometry args={[1.35, 12]} />
        <MeshDistortMaterial
          color="#151517"
          roughness={0.18}
          metalness={0.85}
          distort={0.18}
          speed={0.6}
          clearcoat={1}
          clearcoatRoughness={0.15}
          envMapIntensity={1.4}
        />
      </mesh>
      {/* inner glowing core, visible through subtle transmission */}
      <mesh scale={0.62}>
        <icosahedronGeometry args={[1.35, 4]} />
        <meshBasicMaterial color="#f2703b" toneMapped={false} transparent opacity={0.9} />
      </mesh>
      <pointLight ref={glow} color="#ff8a52" intensity={2.2} distance={4.5} decay={2} />
    </group>
  );
}

/* ---------------------------------------------------------
   Orbit rings: thin torus geometries, transparent, at
   different tilts/speeds, each carrying a few small particles
   that travel along the ring path.
--------------------------------------------------------- */
function OrbitRing({ radius, tilt, speed, thickness, opacity, color, particleCount = 3 }) {
  const ring = useRef();
  const particles = useRef([]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ring.current) ring.current.rotation.z = t * speed;
    particles.current.forEach((p, i) => {
      if (!p) return;
      const angle = t * speed * 1.15 + (i / particleCount) * Math.PI * 2;
      p.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
    });
  });

  return (
    <group rotation={tilt}>
      <mesh ref={ring}>
        <torusGeometry args={[radius, thickness, 16, 128]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={opacity}
          roughness={0.3}
          metalness={0.6}
          emissive={color}
          emissiveIntensity={0.15}
        />
      </mesh>
      <group ref={ring}>
        {Array.from({ length: particleCount }).map((_, i) => (
          <mesh key={i} ref={(el) => (particles.current[i] = el)}>
            <sphereGeometry args={[0.018, 8, 8]} />
            <meshBasicMaterial color="#ffd9b8" toneMapped={false} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

function Orbits() {
  return (
    <>
      <OrbitRing radius={2.05} tilt={[Math.PI / 2.3, 0.2, 0]} speed={0.09} thickness={0.006} opacity={0.35} color="#e7e9ec" particleCount={2} />
      <OrbitRing radius={2.4} tilt={[Math.PI / 3.4, -0.3, 0.4]} speed={-0.065} thickness={0.004} opacity={0.22} color="#f2703b" particleCount={3} />
      <OrbitRing radius={1.75} tilt={[Math.PI / 1.6, 0.5, -0.3]} speed={0.045} thickness={0.005} opacity={0.28} color="#aeb5c0" particleCount={2} />
    </>
  );
}

/* ---------------------------------------------------------
   Lighting rig: key, fill, rim, ambient.
--------------------------------------------------------- */
function Lighting() {
  return (
    <>
      <ambientLight intensity={0.22} color="#3a2c22" />
      <directionalLight position={[4, 5, 3]} intensity={1.6} color="#fff3e6" />
      <directionalLight position={[-5, -2, -3]} intensity={0.5} color="#6f7a8c" />
      <directionalLight position={[0, 0, -5]} intensity={2.2} color="#f2703b" />
    </>
  );
}

/* ---------------------------------------------------------
   Camera rig: subtle parallax on pointer move + cinematic
   entrance handled via gsap on mount.
--------------------------------------------------------- */
function CameraRig({ introRef }) {
  const { camera } = useThree();
  const target = useRef(new THREE.Vector2(0, 0));

  useFrame(() => {
    camera.position.x += (target.current.x * 0.4 - camera.position.x) * 0.02;
    camera.position.y += (-target.current.y * 0.25 - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);
  });

  if (typeof window !== "undefined") {
    window.onpointermove = (e) => {
      target.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      target.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
  }

  return null;
}

function IntroTimeline() {
  const { camera } = useThree();
  const done = useRef(false);
  useFrame(() => {
    if (!done.current) {
      done.current = true;
      camera.position.set(0, 0, 7.2);
      gsap.to(camera.position, { z: 5.4, duration: 2.6, ease: "power3.out" });
    }
  });
  return null;
}

function SceneContent() {
  return (
    <>
      <IntroTimeline />
      <CameraRig />
      <Lighting />
      <Suspense fallback={null}>
        <Environment preset="city" environmentIntensity={0.5} />
      </Suspense>
      <Float speed={1.1} rotationIntensity={0.15} floatIntensity={0.5}>
        <CoreSphere />
      </Float>
      <Orbits />
      <Sparkles count={140} scale={7} size={2.4} speed={0.15} opacity={0.55} color="#ffdcc0" />
      <Sparkles count={60} scale={4.5} size={5} speed={0.08} opacity={0.35} color="#f2703b" />
      <Sparkles count={90} scale={9} size={1.2} speed={0.1} opacity={0.4} color="#ffffff" />
      <fog attach="fog" args={["#060607", 4, 11]} />
      <EffectComposer>
        <Bloom intensity={0.65} luminanceThreshold={0.15} luminanceSmoothing={0.9} mipmapBlur radius={0.8} />
        <Noise opacity={0.02} />
        <Vignette eskil={false} offset={0.25} darkness={0.7} />
      </EffectComposer>
    </>
  );
}

export default function HeroScene() {
  const introRef = useRef(false);
  return (
    <Canvas
      dpr={[1, 1.8]}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 7.2], fov: 42 }}
      style={{ width: "100%", height: "100%" }}
    >
      <SceneContent introRef={introRef} />
    </Canvas>
  );
}
