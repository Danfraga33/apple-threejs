import { PerspectiveCamera, View } from "@react-three/drei";
import React from "react";
import Lights from "./Lights";
import { Suspense } from "react";
import IPhone from "./IPhone";
const ModelView = ({
  index,
  controlRef,
  groupRef,
  gsapType,
  setRotationSize,
  size,
  item,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`border-2 border-red-200 w-full h-full ${index === 2} ? 'right-[-100%] : '`}
    >
      {/* Ambiant Light */}
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Lights />
      <Suspense fallback={<div>Loading</div>}>
        <IPhone />
      </Suspense>
    </View>
  );
};

export default ModelView;
