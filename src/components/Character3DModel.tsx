import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';
import * as SkeletonUtils from 'three/examples/jsm/utils/SkeletonUtils.js';

// Cache-busting para garantir carregamento dos novos modelos corrigidos sem cache do navegador
const MODEL_ASSET_VERSION = 'v_20261107_no_cuffs_v4';

// Preloads desativados na inicialização para economizar 3.5GB de RAM do navegador
// useGLTF carrega sob demanda e mantém cache nativo do Three.js apenas quando necessário

interface MicroTextures {
  skinBump: THREE.CanvasTexture;
  clothWeave: THREE.CanvasTexture;
  coarseWeave: THREE.CanvasTexture;
}

let cachedMicroTextures: MicroTextures | null = null;

function getProceduralMicroTextures(): MicroTextures {
  if (cachedMicroTextures) return cachedMicroTextures;

  const skinCanvas = document.createElement('canvas');
  skinCanvas.width = 64;
  skinCanvas.height = 64;
  const sCtx = skinCanvas.getContext('2d');
  if (sCtx) {
    const sImg = sCtx.createImageData(64, 64);
    for (let y = 0; y < 64; y++) {
      for (let x = 0; x < 64; x++) {
        const i = (y * 64 + x) * 4;
        const n1 = Math.sin(x * 0.45) * Math.cos(y * 0.45);
        const n2 = Math.sin((x + y) * 0.85) * Math.sin((x - y) * 0.85);
        const hash = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
        const grain = hash - Math.floor(hash);
        const val = Math.floor(128 + n1 * 28 + n2 * 22 + (grain - 0.5) * 45);
        sImg.data[i] = val;
        sImg.data[i + 1] = val;
        sImg.data[i + 2] = val;
        sImg.data[i + 3] = 255;
      }
    }
    sCtx.putImageData(sImg, 0, 0);
  }
  const skinBump = new THREE.CanvasTexture(skinCanvas);
  skinBump.wrapS = THREE.RepeatWrapping;
  skinBump.wrapT = THREE.RepeatWrapping;
  skinBump.repeat.set(8, 8);

  const clothCanvas = document.createElement('canvas');
  clothCanvas.width = 64;
  clothCanvas.height = 64;
  const cCtx = clothCanvas.getContext('2d');
  if (cCtx) {
    const cImg = cCtx.createImageData(64, 64);
    for (let y = 0; y < 64; y++) {
      for (let x = 0; x < 64; x++) {
        const i = (y * 64 + x) * 4;
        const warp = Math.sin(x * 1.5708);
        const weft = Math.sin(y * 1.5708);
        const weave = (warp * weft) * 0.5 + Math.sin(x * 0.25 + y * 0.25) * 0.25;
        const val = Math.floor(135 + weave * 75);
        cImg.data[i] = val;
        cImg.data[i + 1] = val;
        cImg.data[i + 2] = val;
        cImg.data[i + 3] = 255;
      }
    }
    cCtx.putImageData(cImg, 0, 0);
  }
  const clothWeave = new THREE.CanvasTexture(clothCanvas);
  clothWeave.wrapS = THREE.RepeatWrapping;
  clothWeave.wrapT = THREE.RepeatWrapping;
  clothWeave.repeat.set(10, 10);

  const coarseCanvas = document.createElement('canvas');
  coarseCanvas.width = 64;
  coarseCanvas.height = 64;
  const rCtx = coarseCanvas.getContext('2d');
  if (rCtx) {
    const rImg = rCtx.createImageData(64, 64);
    for (let y = 0; y < 64; y++) {
      for (let x = 0; x < 64; x++) {
        const i = (y * 64 + x) * 4;
        const bx = Math.sin(x * 0.785) * Math.cos(y * 0.392);
        const by = Math.cos(y * 0.785) * Math.sin(x * 0.392);
        const val = Math.floor(128 + (bx + by) * 60);
        rImg.data[i] = val;
        rImg.data[i + 1] = val;
        rImg.data[i + 2] = val;
        rImg.data[i + 3] = 255;
      }
    }
    rCtx.putImageData(rImg, 0, 0);
  }
  const coarseWeave = new THREE.CanvasTexture(coarseCanvas);
  coarseWeave.wrapS = THREE.RepeatWrapping;
  coarseWeave.wrapT = THREE.RepeatWrapping;
  coarseWeave.repeat.set(8, 8);

  cachedMicroTextures = { skinBump, clothWeave, coarseWeave };
  return cachedMicroTextures;
}

export interface Character3DModelProps {
  characterId: string;
  scrollProgress?: number;
  transitionOffset?: number;
  isLeft?: boolean;
}

export function Character3DModel({
  characterId,
  scrollProgress = 0,
  transitionOffset = 0,
  isLeft = true,
}: Character3DModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const clockRef = useRef(0);

  const modelUrl = `/models/${characterId}.glb?v=${MODEL_ASSET_VERSION}`;
  const { scene, animations } = useGLTF(modelUrl);

  // SkeletonUtils.clone clona a hierarquia preservando o vínculo entre SkinnedMesh e seus Bones
  const clonedScene = useMemo(() => {
    const clone = SkeletonUtils.clone(scene);
    const microTex = getProceduralMicroTextures();

    clone.traverse((node: any) => {
      if (node.isMesh && node.geometry) {
        node.castShadow = true;
        node.receiveShadow = true;

        const hasVertexColors = Boolean(node.geometry?.attributes?.color);
        const mats = Array.isArray(node.material) ? node.material : [node.material];

        const upgradedMats = mats.map((origMat: any) => {
          if (!origMat) return origMat;
          const mName = (origMat.name || node.name || '').toLowerCase();
          const mat = origMat.clone();

          if (hasVertexColors) {
            mat.vertexColors = true;
          }

          if (mName.includes('skin')) {
            mat.bumpMap = microTex.skinBump;
            mat.bumpScale = 0.0018;
            mat.roughness = 0.56;
            mat.metalness = 0.02;
            mat.envMapIntensity = 1.15;
            mat.clearcoat = 0.08;
            mat.clearcoatRoughness = 0.42;
          } else if (mName.includes('lips')) {
            mat.bumpMap = microTex.skinBump;
            mat.bumpScale = 0.0012;
            mat.roughness = 0.36;
            mat.metalness = 0.04;
            mat.clearcoat = 0.18;
            mat.clearcoatRoughness = 0.28;
          } else if (
            mName.includes('sack') ||
            mName.includes('straw') ||
            mName.includes('rope') ||
            mName.includes('wicker') ||
            mName.includes('wood') ||
            mName.includes('crate')
          ) {
            mat.bumpMap = microTex.coarseWeave;
            mat.bumpScale = 0.008;
            mat.roughness = 0.86;
          } else if (
            mName.includes('cloth') ||
            mName.includes('shirt') ||
            mName.includes('blouse') ||
            mName.includes('dress') ||
            mName.includes('shawl') ||
            mName.includes('vest') ||
            mName.includes('suit') ||
            mName.includes('pants') ||
            mName.includes('top')
          ) {
            mat.bumpMap = microTex.clothWeave;
            mat.bumpScale = 0.0048;
            mat.roughness = 0.78;
          }

          mat.needsUpdate = true;
          return mat;
        });

        node.material = Array.isArray(node.material) ? upgradedMats : upgradedMats[0];
      }
    });

    return clone;
  }, [scene]);

  const { actions } = useAnimations(animations, groupRef);

  useEffect(() => {
    // Reproduz suavemente a animação Idle nativa exportada com o personagem
    const idleAction = Object.values(actions || {})[0];
    if (!idleAction) return undefined;
    idleAction.reset().fadeIn(0.3).play();
    return () => {
      idleAction.fadeOut(0.25);
    };
  }, [actions]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    clockRef.current = t;

    // Rotação editorial suave e respiração do grupo do personagem acompanhando o scroll
    if (groupRef.current) {
      const baseAngle = isLeft ? 0.18 : -0.18;
      let targetRotY = baseAngle;

      if (scrollProgress < 0.25) {
        const p = scrollProgress / 0.25;
        targetRotY = baseAngle + (p - 0.5) * 0.40;
      } else if (scrollProgress < 0.72) {
        const p = (scrollProgress - 0.25) / 0.47;
        targetRotY = (isLeft ? 0.06 : -0.06) + Math.sin(p * Math.PI) * (isLeft ? -0.22 : 0.22);
      } else {
        const p = (scrollProgress - 0.72) / 0.28;
        targetRotY = (isLeft ? -0.12 : 0.12) + p * (isLeft ? 0.68 : -0.68);
      }

      if (transitionOffset < -0.01) {
        const enterAmt = Math.min(1, Math.abs(transitionOffset));
        targetRotY += (isLeft ? -0.95 : 0.95) * enterAmt;
      } else if (transitionOffset > 0.01) {
        const exitAmt = Math.min(1, transitionOffset);
        targetRotY += (isLeft ? 0.85 : -0.85) * exitAmt;
      }

      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotY + Math.sin(t * 0.85) * 0.035,
        0.08
      );

      const breatheY = Math.sin(t * 1.25) * 0.006;
      groupRef.current.position.y = THREE.MathUtils.lerp(
        groupRef.current.position.y,
        -1.18 + breatheY,
        0.1
      );
    }
  });

  return (
    <group
      ref={groupRef}
      position={[0, -1.18, 0]}
      scale={1.40}
    >
      <primitive object={clonedScene} />
    </group>
  );
}
