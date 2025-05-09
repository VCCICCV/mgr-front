// export default CarModel
import React, { useEffect, useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import useConfigStore from '@/stores/useConfigStore';

// 方案2 需要替换的材质映射
// 贴图映射配置
const TEXTURE_CONFIG = {
  // 车身材质
  'Car_body': {
    maps: [
      {
        type: 'map',
        path: 'Car_body_metallicRoughness',
        encoding: THREE.SRGBColorSpace
      },
      // {
      //   type: 'metalnessMap',
      //   path: 'body_metallicRoughness',
      //   encoding: THREE.LinearSRGBColorSpace // 非颜色贴图使用Linear
      // }
    ]
  },
  // 内饰材质
  'interior1': {
    maps: [
      {
        type: 'map',
        path: 'interior1_001_baseColor',
        encoding: THREE.SRGBColorSpace
      }
    ]
  },
  'interior2': {
    maps: [
      {
        type: 'map',
        path: 'interior2_001_baseColor',
        encoding: THREE.SRGBColorSpace
      }
    ]
  },
  'interior3': {
    maps: [
      {
        type: 'map',
        path: 'interior3_001_baseColor',
        encoding: THREE.SRGBColorSpace
      }
    ]
  },
  'interior4': {
    maps: [
      {
        type: 'map',
        path: 'interior4_001_baseColor',
        encoding: THREE.SRGBColorSpace
      }
    ]
  },

};


const CarModel = () => {
  // 1、此方案仅适合以材质色导出的模型
  // // 创建颜色材质
  // const colorMaterial = useMemo(() => {
  //   if (!selectedColor) return null;

  //   return new THREE.MeshStandardMaterial({
  //     color: new THREE.Color(selectedColor),
  //     metalness: 0.5,
  //     roughness: 0.5
  //   });
  // }, [selectedColor]);

  // useEffect(() => {
  //   if (!colorMaterial) return;

  //   // 应用颜色到车身相关材质
  //   BODY_MATERIALS.forEach(matName => {
  //     if (materials[matName]) {
  //       materials[matName] = colorMaterial.clone();
  //     }
  //   });

  //   // 强制更新场景
  //   scene.traverse(obj => {
  //     if (obj instanceof THREE.Mesh) {
  //       obj.material.needsUpdate = true;
  //     }
  //   });

  // }, [colorMaterial, materials, scene]);

  const { scene, nodes, materials } = useGLTF('./su7/su7.gltf');
  const textureName = useConfigStore(state => state.getSelectedTextureName());


  // 加载贴图的函数
  const loadTextures = useMemo(() => {
    return async (colorName: string) => {
      const textureLoader = new THREE.TextureLoader();
      const texturePromises = [];

      for (const [matName, config] of Object.entries(TEXTURE_CONFIG)) {
        if (!materials[matName]) continue;

        for (const { type, path, encoding } of config.maps) {
          const texturePath = `/su7/${colorName}/${path}.webp`;

          texturePromises.push(
            new Promise<void>((resolve) => {
              textureLoader.load(texturePath, (texture) => {
                // 正确设置颜色空间
                texture.colorSpace = encoding;
                texture.needsUpdate = true;

                // 安全设置材质属性
                if (type in materials[matName]) {
                  materials[matName][type as keyof THREE.Material] = texture;
                }
                resolve();
              }, undefined, (error) => {
                console.error(`加载贴图失败: ${texturePath}`, error);
                resolve();
              });
            })
          );
        }
      }

      await Promise.all(texturePromises);

      // 强制更新场景
      scene.traverse(obj => {
        if (obj instanceof THREE.Mesh) {
          obj.material.needsUpdate = true;
        }
      });
    };
  }, [materials, scene]);

  useEffect(() => {
    loadTextures(textureName);
  }, [textureName, loadTextures]);

  return (
    <group dispose={null}>
      <group rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={0.01}>
        {/* 车身变色组 */}
        <group>
          {/* 车身包围 */}
          <mesh
            geometry={(nodes.Object_8 as THREE.Mesh).geometry}
            material={materials.Car_body}
          />
          {/* 左前门 */}
          <mesh
            geometry={(nodes.Object_20 as THREE.Mesh).geometry}
            material={materials.Car_body}
          />
          {/* 左后门 */}
          <mesh
            geometry={(nodes.Object_26 as THREE.Mesh).geometry}
            material={materials.Car_body}
          />
          {/* 右前门 */}
          <mesh
            geometry={(nodes.Object_31 as THREE.Mesh).geometry}
            material={materials.Car_body}
          />
          {/*  右后门*/}
          <mesh
            geometry={(nodes.Object_37 as THREE.Mesh).geometry}
            material={materials.Car_body}
          />
        </group>
        {/* 内饰变色组 */}
        <group>
          {/* 安全带 */}
          <mesh
            geometry={(nodes.Object_2 as THREE.Mesh).geometry}
            material={materials.interior2}
          />
          {/* 左前门内饰 */}
          <mesh
            geometry={(nodes.Object_23 as THREE.Mesh).geometry}
            material={materials.interior3}
          />
          {/* 左后门内饰 */}
          <mesh
            geometry={(nodes.Object_28 as THREE.Mesh).geometry}
            material={materials.interior3}
          />
          {/* 右前内饰板 */}
          <mesh
            geometry={(nodes.Object_34 as THREE.Mesh).geometry}
            material={materials.interior3}
          />
          {/* 右后门内饰 */}
          <mesh
            geometry={(nodes.Object_39 as THREE.Mesh).geometry}
            material={materials.interior3}
          />
        </group>
        {/* 方向盘 */}
        <mesh
          geometry={(nodes.Object_0 as THREE.Mesh).geometry}
          material={materials.interior1}
        />
        {/* 座椅装饰 */}
        <mesh
          geometry={(nodes.Object_1 as THREE.Mesh).geometry}
          material={materials.interior2}
        />
        {/* 座椅 */}
        <mesh
          geometry={(nodes.Object_3 as THREE.Mesh).geometry}
          material={materials.interior4}
        />
        {/* 北京xiaomi */}
        <mesh
          geometry={(nodes.Object_4 as THREE.Mesh).geometry}
          material={materials.M_IRON}
        />
        {/* 车牌 */}
        <mesh
          geometry={(nodes.Object_5 as THREE.Mesh).geometry}
          material={materials.M_ChePai}
        />
        {/* LOGO */}
        <mesh
          geometry={(nodes.Object_6 as THREE.Mesh).geometry}
          material={materials.M_LOGO}
        />
        {/* 雨刮器 */}
        <mesh
          geometry={(nodes.Object_7 as THREE.Mesh).geometry}
          material={materials.M_BODY_inside}
        />
        {/* 内饰骨架 */}
        <mesh
          geometry={(nodes.Object_9 as THREE.Mesh).geometry}
          material={materials.M_BODY_inside}
        />
        {/* 车顶底黑件 */}
        <mesh
          geometry={(nodes.Object_10 as THREE.Mesh).geometry}
          material={materials.M_BODY_black}
        />
        {/* 前后三角玻璃 */}
        <mesh
          geometry={(nodes.Object_11 as THREE.Mesh).geometry}
          material={materials.Car_window}
        />
        {/* 外部包围 */}
        <mesh
          geometry={(nodes.Object_12 as THREE.Mesh).geometry}
          material={materials.M_BODY_black}
        />
        {/* 前后大灯 */}
        <mesh
          geometry={(nodes.Object_13 as THREE.Mesh).geometry}
          material={materials.Car_lightglass}
        />
        {/* 前大灯 */}
        <mesh
          geometry={(nodes.Object_14 as THREE.Mesh).geometry}
          material={materials.Car_frontlight}
        />
        {/* 雷达 */}
        <mesh
          geometry={(nodes.Object_15 as THREE.Mesh).geometry}
          material={materials.Car_radar}
        />
        {/* 翼子板 */}
        <mesh
          geometry={(nodes.Object_16 as THREE.Mesh).geometry}
          material={materials.M_BODY_black}
        />
        {/* 骨架 */}
        <mesh
          geometry={(nodes.Object_17 as THREE.Mesh).geometry}
          material={materials.pasted__M_BODY_inside}
        />
        {/* ABC柱 */}
        <mesh
          geometry={(nodes.Object_18 as THREE.Mesh).geometry}
          material={materials.M_BODY_inside}
        />
        {/* 左前划痕板 */}
        <mesh
          geometry={(nodes.Object_19 as THREE.Mesh).geometry}
          material={materials.M_BODY_inside}
        />
        {/* 左后视镜 */}
        <mesh
          geometry={(nodes.Object_21 as THREE.Mesh).geometry}
          material={materials.M_BODY_black}
        />
        {/* 左后视镜玻璃*/}
        <mesh
          geometry={(nodes.Object_22 as THREE.Mesh).geometry}
          material={materials.M_IRON}
        />
        {/* 左前玻璃 */}
        <mesh
          geometry={(nodes.Object_24 as THREE.Mesh).geometry}
          material={materials.Car_window}
        />
        {/* 左后车门嵌条 */}
        <mesh
          geometry={(nodes.Object_25 as THREE.Mesh).geometry}
          material={materials.M_BODY_inside}
        />
        {/* 左后玻璃 */}
        <mesh
          geometry={(nodes.Object_27 as THREE.Mesh).geometry}
          material={materials.Car_window}
        />
        {/* 左后门内开关 */}
        <mesh
          geometry={(nodes.Object_29 as THREE.Mesh).geometry}
          material={materials.M_BODY_black}
        />
        {/* 右前门划痕板 */}
        <mesh
          geometry={(nodes.Object_30 as THREE.Mesh).geometry}
          material={materials.M_BODY_inside}
        />
        {/* 右前后视镜 */}
        <mesh
          geometry={(nodes.Object_32 as THREE.Mesh).geometry}
          material={materials.M_BODY_black}
        />
        {/* 右前后视镜玻璃 */}
        <mesh
          geometry={(nodes.Object_33 as THREE.Mesh).geometry}
          material={materials.M_IRON}
        />
        {/* 右前玻璃 */}
        <mesh
          geometry={(nodes.Object_35 as THREE.Mesh).geometry}
          material={materials.Car_window}
        />
        {/* 右后门嵌条 */}
        <mesh
          geometry={(nodes.Object_36 as THREE.Mesh).geometry}
          material={materials.M_BODY_inside}
        />
        {/* 右后玻璃 */}
        <mesh
          geometry={(nodes.Object_38 as THREE.Mesh).geometry}
          material={materials.Car_window}
        />
        {/* 轮胎 */}
        <mesh
          geometry={(nodes.Object_40 as THREE.Mesh).geometry}
          material={materials.M_Wheel_ALL}
        />
      </group>
    </group>
  );
};

export default CarModel;
