import React,{useRef , useState} from 'react';
import { useLoader , useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useGLTF } from '@react-three/drei'

function Model({modelPath ,scale=10, position =[0,0,0]}) {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader , modelPath);
  const[hovered, setHover]= useState(false);

  useFrame((state,delta)=>( ref.current.rotation.y += 0.01))
  return (
    <primitive 
    ref={ref}
    object={gltf.scene}
    scale={hovered ? scale * 1.001 : scale}
    position ={position}
    onPointerOver={()=> setHover(true)}
    onPointerOut ={()=>{setHover(false)}}
    
    />
  )
}

export default Model