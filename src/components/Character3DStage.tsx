import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows } from '@react-three/drei';
import * as THREE from 'three';
import { Character3DModel } from './Character3DModel';

interface ScrollCameraDirectorProps {
  scrollProgress?: number;
  isLeft?: boolean;
}

function ScrollCameraDirector({ scrollProgress = 0, isLeft = true }: ScrollCameraDirectorProps) {
  const lookAtTarget = useRef(new THREE.Vector3(0, 0.05, 0));

  useFrame((state) => {
    // Coreografia de Câmera estilo documentário interativo SCMP:
    // 1. Início do capítulo (0.00 -> 0.22): Plano Geral (Corpo Inteiro + Cenário 3D Completo)
    // 2. Meio do capítulo (0.22 -> 0.72): Zoom Cinematográfico Forte no Rosto / Expressão / Olhos (Close-Up Dramático)
    // 3. Fim do capítulo (0.72 -> 1.00): Plano Médio 3/4 destacando Roupas, Objetos e Cenário 3D
    let targetCamPos = new THREE.Vector3(0, 0.12, 4.35);
    let targetLookAt = new THREE.Vector3(0, 0.02, 0);

    if (scrollProgress < 0.22) {
      const p = scrollProgress / 0.22;
      targetCamPos.set(
        THREE.MathUtils.lerp(0, isLeft ? 0.10 : -0.10, p),
        THREE.MathUtils.lerp(0.12, 0.28, p),
        THREE.MathUtils.lerp(4.35, 3.65, p)
      );
      targetLookAt.set(0, THREE.MathUtils.lerp(0.02, 0.26, p), 0);
    } else if (scrollProgress < 0.72) {
      const rawP = (scrollProgress - 0.22) / 0.50;
      const zoomIntensity = Math.sin(rawP * Math.PI);
      targetCamPos.set(
        THREE.MathUtils.lerp(isLeft ? 0.10 : -0.10, isLeft ? 0.16 : -0.16, zoomIntensity),
        THREE.MathUtils.lerp(0.28, 0.94, zoomIntensity),
        THREE.MathUtils.lerp(3.65, 1.65, zoomIntensity)
      );
      targetLookAt.set(
        0,
        THREE.MathUtils.lerp(0.26, 0.97, zoomIntensity),
        0
      );
    } else {
      const p = (scrollProgress - 0.72) / 0.28;
      targetCamPos.set(
        THREE.MathUtils.lerp(isLeft ? 0.10 : -0.10, isLeft ? -0.22 : 0.22, p),
        THREE.MathUtils.lerp(0.28, 0.36, p),
        THREE.MathUtils.lerp(3.65, 3.05, p)
      );
      targetLookAt.set(0, THREE.MathUtils.lerp(0.26, 0.32, p), 0);
    }

    state.camera.position.lerp(targetCamPos, 0.085);
    lookAtTarget.current.lerp(targetLookAt, 0.095);
    state.camera.lookAt(lookAtTarget.current);
  });

  return null;
}

export interface Character3DStageProps {
  characterId: string;
  scrollProgress?: number;
  transitionOffset?: number;
  isLeft?: boolean;
  haloColor: string;
  isActive?: boolean;
}

export function Character3DStage({
  characterId,
  scrollProgress = 0,
  transitionOffset = 0,
  isLeft = true,
  haloColor,
  isActive = false,
}: Character3DStageProps) {
  // Pulsação e rotação do anel editorial conforme o zoom no personagem
  const activeZoom =
    scrollProgress > 0.22 && scrollProgress < 0.72
      ? Math.sin(((scrollProgress - 0.22) / 0.50) * Math.PI)
      : 0;
  const haloScale = 1 + activeZoom * 0.08;
  const haloRotate = scrollProgress * (isLeft ? 36 : -36) + transitionOffset * 35;

  return (
    <div className="relative w-full h-[320px] sm:h-[480px] md:h-[640px] flex items-center justify-center">
      {/* Halo Editorial com profundidade luminosa */}
      <div
        className="absolute w-[210px] h-[210px] sm:w-[320px] sm:h-[320px] md:w-[440px] md:h-[440px] rounded-full transition-all duration-1000 pointer-events-none"
        style={{
          backgroundColor: haloColor,
          transform: `scale(${haloScale})`,
          boxShadow: `0 25px 60px -15px rgba(0,0,0,0.85), 0 0 40px -10px ${haloColor}40`,
        }}
      />

      {/* Anel de precisão cartográfica/editorial */}
      <div
        className="absolute w-[230px] h-[230px] sm:w-[350px] sm:h-[350px] md:w-[480px] md:h-[480px] rounded-full border border-[#F5F2EB]/20 pointer-events-none"
        style={{
          transform: `scale(${haloScale * 1.01}) rotate(${haloRotate}deg)`,
        }}
      />

      {/* Canvas 3D Carregando o Personagem com Otimização Mobile (dpr controlado, sombras balanceadas) */}
      <div className="relative z-10 w-full h-full">
        {isActive ? (
          <Canvas
            dpr={[1, 1.25]}
            frameloop="always"
            camera={{ position: [0, 0.12, 4.35], fov: 38 }}
            gl={{
              antialias: false,
              alpha: true,
              powerPreference: 'high-performance',
              toneMapping: THREE.ACESFilmicToneMapping,
              toneMappingExposure: 1.08,
            }}
          >
            <ScrollCameraDirector scrollProgress={scrollProgress} isLeft={isLeft} />

            {/* Iluminação Cinematográfica Direta (Sem Shadow Map pesado de GPU) */}
            <hemisphereLight args={['#FFF7ED', '#1C130E', 0.65]} />
            <directionalLight position={[2.8, 4.2, 4.0]} intensity={2.85} color="#FFFBEB" />
            <directionalLight position={[-3.2, 2.2, 2.2]} intensity={1.15} color="#FED7AA" />
            <pointLight position={[0.2, 0.95, 2.6]} intensity={1.25} color="#FFF7ED" />
            {/* Rim Light */}
            <directionalLight position={[0, 3.4, -3.2]} intensity={2.2} color="#FDE68A" />

            <Suspense fallback={null}>
              <Character3DModel
                characterId={characterId}
                scrollProgress={scrollProgress}
                transitionOffset={transitionOffset}
                isLeft={isLeft}
              />
              <ContactShadows
                position={[0, -1.24, 0]}
                opacity={0.65}
                scale={4.0}
                blur={2.0}
                far={2.0}
                resolution={64}
              />
            </Suspense>
          </Canvas>
        ) : (
          <div className="w-full h-full flex items-center justify-center opacity-40">
            <div className="w-16 h-16 rounded-full border border-dashed border-white/20 animate-pulse" />
          </div>
        )}
      </div>
    </div>
  );
}
