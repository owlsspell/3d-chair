import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/gltfloader";

const Sofa = () => {
    const gltf = useLoader(GLTFLoader, '/sofa/scene.gltf');
    return (
        <>
            <ambientLight />
            <primitive object={gltf.scene} scale={0.4} />
        </>
    );
}
export default Sofa 