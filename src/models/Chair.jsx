
import React, { useContext, useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { ColorContext } from "../context/colorContext";
import { MeshStandardMaterial } from "three";

export function Chair(props) {
    const { nodes, materials } = useGLTF("/chair/sofa_chair.glb");
    const { colorParts } = useContext(ColorContext);

    return (
        <group {...props} dispose={null}  >
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_4.geometry}
                // material={colorParts.apron ?? materials["Material.001"]}
                material={colorParts.apron ? new MeshStandardMaterial({ color: colorParts.apron }) : materials["Material.001"]}
                scale={[0.944, 1, 1]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_6.geometry}
                // material={materials["Material.001"]}
                material={colorParts.arm ? new MeshStandardMaterial({ color: colorParts.arm }) : materials["Material.001"]}

                scale={[0.934, 0.99, 0.99]}
            >
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_8.geometry}
                // material={materials["Material.001"]}
                material={colorParts.seat ? new MeshStandardMaterial({ color: colorParts.seat }) : materials["Material.001"]}
                position={[0, 0.229, 0.039]}
                scale={[0.863, 1.02, 0.914]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_10.geometry}
                // material={materials["Material.002"]}
                material={colorParts.legs ? new MeshStandardMaterial({ color: colorParts.legs }) : materials["Material.002"]}
                position={[0, 0.017, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_12.geometry}
                // material={materials.material_0}
                material={colorParts.pillow ? new MeshStandardMaterial({ color: colorParts.pillow }) : materials.material_0}
                position={[0.006, 0.678, -0.478]}
                rotation={[1.24, -0.013, -0.104]}
                scale={[0.4, 0.294, 0.354]}
            />
        </group>
    );
}

useGLTF.preload("/chair/sofa_chair.glb");