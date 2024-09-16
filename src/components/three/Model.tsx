import { useGLTF } from "@react-three/drei"
import { useRef } from "react";

useGLTF.preload('/models/cybertruck.glb')
const Model = () => {
    const group = useRef(null);
    const {nodes,materials,animations,scene} = useGLTF('/models/cybertruck.glb')
    return (
        <group ref={group}>
            <primitive object={scene} />
        </group>
    )
}

export default Model