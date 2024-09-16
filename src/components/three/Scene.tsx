'use client'
// import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
const Scene = () => {
    return (

        <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <mesh>
                <boxBufferGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color="orange" />
            </mesh>
        </Canvas>
    )
}
export default Scene;