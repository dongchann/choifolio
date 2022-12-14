import React from 'react';
import { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import styled from 'styled-components';



function Model({ ...props }) {
    const group = useRef()
    const { nodes, materials } = useGLTF('/scene.gltf')
    return (
      <group ref={group} {...props} dispose={null} scale={0.025}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Object_2.geometry} material={materials['9smg1']} />
          <mesh geometry={nodes.Object_3.geometry} material={materials['9smg2']} />
        </group>
      </group>
    )
  }
  

const ModelSmg = () => {
    return (
        <>
            <Contain>
                <Canvas>
                    <Suspense fallback={null}>
                        <directionalLight intensity={1} />
                        <ambientLight intensity={1.2} />
                        <spotLight intensity={2} angle={2} penumbra={1} position={[10, 15, 10]} castShadow />
                        <Model />
                        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
                    </Suspense>
                </Canvas>
            </Contain>
        </>
    )
}

export default ModelSmg;

const Contain = styled.div`
    width: 512px;
    height: 768px;
    margin: 0 auto;
    justi
`