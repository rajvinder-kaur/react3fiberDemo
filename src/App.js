import React, { Suspense } from "react";
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import './App.css';
import { OrbitControls } from "@react-three/drei";
import Model from './components/Model';
import Viewer from "./components/Viewer";
// import model from 'robo.glb';
function App() {



  return (
    <div className="App">
      <Canvas >
        <ambientLight intensity={0.8} />
        <pointLight position={[0, 10, 10]} />
        {/* <Suspense fallback={null}>
        <Model/>
        
      </Suspense> */}
        {/* <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
        <mesh position={[1,1,1]} >
          <torusGeometry />
          <meshStandardMaterial color="red"  />
        </mesh> */}
        {/* <OrbitControls /> */}
        <Viewer modelPath='./Models/cell/scene.gltf' />
      </Canvas>
    </div>
  );
}
// createRoot(document.getElementById('root')).render(<App />)
export default App;

