import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, MeshDistortMaterial } from '@react-three/drei';
import { motion } from 'framer-motion';

const EtherealShape = () => {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.1;
      meshRef.current.rotation.z = t * 0.05;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} scale={2}>
        <sphereGeometry args={[1, 128, 128]} />
        <MeshDistortMaterial
          color="#1a1a1a"
          envMapIntensity={2}
          clearcoat={0.5}
          clearcoatRoughness={0.2}
          metalness={0.9}
          roughness={0.1}
          distort={0.3}
          speed={1.5}
        />
      </mesh>
    </Float>
  );
};

const HeroScene = () => {
  return (
    <div style={{ height: '70vh', width: '100%', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(circle at center, #1a1a1a 0%, #0a0a0a 70%)', overflow: 'hidden' }}>
      
      {/* 3D Canvas */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
        <Canvas camera={{ position: [0, 0, 6], fov: 40 }}>
          <Environment preset="studio" />
          <ambientLight intensity={0.2} />
          <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
          <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#aaaaaa" />
          <EtherealShape />
        </Canvas>
      </div>

      {/* Atmospheric overlay to blend edges */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, transparent 60%, #0a0a0a 100%)', zIndex: 2, pointerEvents: 'none' }} />

      {/* Typography Overlay */}
      <div style={{ position: 'absolute', bottom: '80px', zIndex: 3, textAlign: 'center', width: '100%' }}>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '4px', color: 'var(--text-muted)', marginBottom: '16px' }}
        >
          2024 Collection
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{ fontSize: '4.5rem', fontWeight: 600, margin: 0, lineHeight: 1, letterSpacing: '-2px' }}
        >
          Ethereal<br/>Structures
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '24px', maxWidth: '400px', margin: '24px auto 0', lineHeight: 1.6 }}
        >
          Garments designed to defy gravity through architectural draping and weightless technical silks.
        </motion.p>
        
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} style={{ marginTop: '32px', display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <button style={{ background: 'var(--text-main)', color: 'var(--bg-main)', padding: '12px 32px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>Shop Archive</button>
          <button style={{ background: 'var(--bg-surface)', border: '1px solid var(--glass-border)', color: 'var(--text-main)', padding: '12px 32px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>View Film</button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroScene;
