import { useLoader } from "react-three-fiber"
import { TextureLoader } from "three"
import * as THREE from "three";

export default function Ground() {
    const [grass] = useLoader(TextureLoader, [
        "texture/grass.jpg"
    ])
    grass.wrapS = grass.wrapT = THREE.RepeatWrapping;
    return (
        <mesh rotation-x={-Math.PI / 2} position={[0, 0, 0]} receiveShadow>
            <planeGeometry args={[50, 50]} />
            <meshStandardMaterial map={grass} map-repeat={[15, 15]} />
        </mesh>)
}