// import React from 'react'
// import { type Size, useFrame, useThree } from '@react-three/fiber';
// import { useEffect, useRef, useState } from 'react';
// import type * as THREE from 'three';
// import useControlsStore from '@/stores/ControlsStore';
// export const ResponsiveCamera = () => {
//     const targetWidth = 4;

//     const { camera, size }: { camera: THREE.PerspectiveCamera; size: Size } =
//         useThree();

//     const updateCamera = () => {
//         const aspect = size.width / size.height;
//         const distance = camera.position.z;
//         const fov = 2 * Math.atan(targetWidth / (2 * distance)) * (180 / Math.PI);
//         camera.fov = fov / aspect; // FOV
//         camera.updateProjectionMatrix();
//     };

//     // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
//     useEffect(() => {
//         updateCamera();
//     }, []);

//     // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
//     useEffect(() => {
//         updateCamera();
//     }, [camera, size, targetWidth]);

//     return null;
// };
// const Scene = () => {
//     const {
//         camera,
//         scene,
//     }: { camera: THREE.PerspectiveCamera; scene: THREE.Scene } = useThree();
//     const initialFov = 8;
//     const targetFov = 20;
//     const targetPosition = [30, 11.5, 34];
//     const targetRotationY = Math.PI / 2; // 负方向旋转
//     const initialRotationY = -Math.PI / 2; // 30 度 (Math.PI / 6 radians)
//     const duration = 1.5; // 
//     const animationRef = useRef(0);
//     const [isAnimating, setIsAnimating] = useState(true);
//     const { setControlsEnabled } = useControlsStore();
//     useFrame((_, delta) => {
//         if (!isAnimating) return;

//         animationRef.current += delta;

//         const t = Math.min(animationRef.current / duration, 1);
//         const easeT = t * (2 - t);

//         camera.position.set(
//             targetPosition[0] * easeT + 30 * (1 - easeT),
//             targetPosition[1] * easeT + 11.5 * (1 - easeT),
//             targetPosition[2] * easeT + 34 * (1 - easeT)
//         );

//         camera.fov = initialFov * (1 - easeT) + targetFov * easeT; // fov: 10
//         camera.updateProjectionMatrix();

//         const carRotationY = initialRotationY + targetRotationY * easeT;
//         scene.rotation.y = carRotationY;

//         if (t >= 1) {
//             setIsAnimating(false);

//             setControlsEnabled(true); // 动画结束后启用控制
//         }
//     });

//     // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
//     useEffect(() => {
//         setControlsEnabled(false);
//     }, [setControlsEnabled]);

//     return null
// }

// export default Scene
'use client;'
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { AxesHelper } from 'three'
import CarModel from './CarModel'
const Scene = () => {
    return (
        <div className="w-full h-full">
            <Canvas shadows>{/* 启用阴影系统 */}
                {/* 坐标辅助线*/}
                <primitive object={new AxesHelper(5)} />
                {/* 相机位置 */}
                <PerspectiveCamera
                    makeDefault
                    position={[5, 3, -4]}  // 右前上方位置 (x: 右, y: 上, z: 前)
                    fov={50}
                    near={0.1}
                    far={1000}
                />
                {/* 轨道控制器 */}
                <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
                <boxGeometry args={[2, 2, 2]} />
                {/* 辅助点光 - 增强细节 */}
                <group>
                    {/* 前 */}
                    <pointLight position={[5, 5, 0]} intensity={50} color="#ffffff" />
                    {/* 左前 */}
                    <pointLight position={[5, 0, -5]} intensity={50} color="#ffffff" />
                    {/* 右前 */}
                    <pointLight position={[5, 0, 5]} intensity={50} color="#ffffff" />
                    {/* 后 */}
                    <pointLight position={[-5, 5, 0]} intensity={50} color="#ffffff" />
                </group>

                {/* 聚光灯 - 突出显示车辆 */}
                <spotLight
                    position={[0, 10, 0]}
                    angle={0.3}
                    penumbra={1}
                    intensity={300}
                    castShadow
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                    shadow-bias={-0.0001}
                    shadow-camera-near={0.5}
                    shadow-camera-far={20}
                />

                <CarModel/>
                {/* 地面平面 - 接收阴影 */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.05, 0]} receiveShadow>
                    <planeGeometry args={[2000, 2000]} />
                    <meshStandardMaterial color="#c2c2c4" />
                </mesh>
            </Canvas>
        </div>
    )
}

export default Scene