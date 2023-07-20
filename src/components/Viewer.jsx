
import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";

function Viewer({modelPath , scale =10, position =[0,0,0]}) {
  return (
    <Suspense>
        <Model modelPath={modelPath} scale={scale} position={position}/>
        <OrbitControls/>
    </Suspense>
  )
}

export default Viewer