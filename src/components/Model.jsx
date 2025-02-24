import React, { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';

const Model = () => {
  const whaleRef = useRef();
  const { scene, animations } = useGLTF('/scene.gltf');
  const { actions } = useAnimations(animations, whaleRef);

  const [targetX, setTargetX] = useState(0);
  const [targetY, setTargetY] = useState(0);

  // Play the first animation (if available)
  useEffect(() => {
    if (actions && animations.length > 0) {
      actions[animations[0].name]?.play();
    }
  }, [actions, animations]);

  // Mouse move effect with delay (using lerp)
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { innerWidth, innerHeight } = window;
      const x = (event.clientX / innerWidth - 0.5) * 0.3; // Small movement effect
      const y = (event.clientY / innerHeight - 0.5) * 0.3;

      // Update target position for the whale to move towards
      setTargetX(4*x);
      setTargetY(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const smoothMove = () => {
      if (whaleRef.current) {
      
        whaleRef.current.rotation.y = whaleRef.current.rotation.y + (targetX - whaleRef.current.rotation.y) * 0.1; 
        whaleRef.current.rotation.x = whaleRef.current.rotation.x + (targetY - whaleRef.current.rotation.x) * 0.1; 
      }
      requestAnimationFrame(smoothMove); 
    };
    smoothMove();
  }, [targetX, targetY]);

  return <primitive ref={whaleRef} object={scene} scale={0.38} />;
};

const WhaleScene = () => {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
      <ambientLight intensity={1} />
      <directionalLight position={[2, 5, 3]} intensity={2} />
      <Model />
    </Canvas>
  );
};

export default WhaleScene;
