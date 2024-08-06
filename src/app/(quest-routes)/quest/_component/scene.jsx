import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

import { Avatar } from "./avatar";


const Scene = () => {
  const directionalLightReference = useRef();

  return (
    <>


      <ambientLight intensity={1.5} />
      <group rotation={[Math.PI / 12, 1.5, -0.2]} position={[3, -3.7, 0]} >
        <Avatar />
      </group>


    </>
  );
};
export default Scene;
