"use client";

import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const RunningAvatar: React.FC = () => {
  const { scene } = useGLTF("/models/avatar1.glb");
  const reference = useRef<THREE.Group>(null);

  scene.scale.set(3, 3, 1);
  scene.position.y = -5.5;

  // eslint-disable-next-line react/no-unknown-property
  return <primitive object={scene} ref={reference} />;
};

const StaticAvatar: React.FC = () => {
  const { scene } = useGLTF("/models/avatar1.glb");
  // eslint-disable-next-line react/no-unknown-property
  return <primitive object={scene} />;
};

const Avatars: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 1, 10] }}>
      <ambientLight />
      <directionalLight />
      <StaticAvatar />
      <RunningAvatar />
      {/* <OrbitControls /> */}
    </Canvas>
  );
};

export default Avatars;
