// src\components\three\Scene.tsx
'use client;'
import React, { useContext } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { AxesHelper } from 'three'
import CarModel from './CarModel'
import { useSelectedOptions } from '@/context/SelectedOptionsContext'
const Scene = () => {
    const { selectedOptions } = useSelectedOptions();

    const selectedColors: { [key: string]: string } = {};
    
    if (selectedOptions['color-1']) {
        selectedColors.车身 = '#0000FF';
    }


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

                <CarModel />
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