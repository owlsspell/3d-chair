import { OrbitControls } from "@react-three/drei";
import Ground from "./Ground";
import { Chair } from "../../models/Chair";
import { useState } from "react";

export default function ChairMesh() {
    const [activeOption, setActiveOption] = useState("seat");

    return <>

        <OrbitControls enableZoom={false} />
        <color attach="background" args={['lightblue']} />
        <ambientLight intensity={3} />
        <directionalLight castShadow position={[20, 50, 50]} intensity={5} />

        <Chair position={[0, 0.4, 0]} castShadow receiveShadow />
        <Ground />

    </>
}