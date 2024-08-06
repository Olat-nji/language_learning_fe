import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";


import { AvatarTwo } from "./avatar-two";


const SceneTwo = () => {
  const directionalLightReference = useRef();

  return (
    <>



      <group rotation={[Math.PI / 10, 1.5, 0]} position={[0, -3.7, 0]} >
        <AvatarTwo />
      </group>


    </>
  );
};
export default SceneTwo;
