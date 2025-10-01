import React from 'react';
import { PodiumFirstPlaceSvg } from './podium-first-place-svg';
import { PodiumSecondPlaceSvg } from './podium-second-place-svg';
import { PodiumThirdPlaceSvg } from './podium-third-place-svg';

export const RankingPodium: React.FC = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: '633.77px',
        height: '412.22px',
        margin: '60px auto 0'
      }}
    >
      {/* 3º Lugar - Direita (atrás) */}
      <div style={{ position: 'absolute', left: '432px', top: '151.25px', zIndex: 1 }}>
        <PodiumThirdPlaceSvg />
      </div>

      {/* 1º Lugar - Centro (meio) */}
      <div style={{ position: 'absolute', left: '0px', top: '118.7px', zIndex: 2 }}>
        <PodiumFirstPlaceSvg />
      </div>

      {/* 2º Lugar - Esquerda (frente) */}
      <div style={{ position: 'absolute', left: '198px', top: '59.49px', zIndex: 3 }}>
        <PodiumSecondPlaceSvg />
      </div>

      {/* Linhas decorativas de profundidade na base */}
      <svg
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '633.77px',
          height: '412.22px',
          pointerEvents: 'none',
          zIndex: 0
        }}
        viewBox="0 0 633.77 412.22"
        fill="none"
      >
        <defs>
          <linearGradient id="depth_gradient" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0.35" stopColor="rgba(199, 66, 40, 0.3)" />
            <stop offset="1" stopColor="rgba(6, 10, 18, 0)" />
          </linearGradient>
        </defs>
        
        {/* Linha de profundidade 1º lugar */}
        <line
          x1="202.14"
          y1="168.93"
          x2="202.14"
          y2="408.89"
          stroke="url(#depth_gradient)"
          strokeWidth="1.8"
        />
        
        {/* Linha horizontal decorativa 1º lugar */}
        <line
          x1="229.83"
          y1="196.48"
          x2="426.31"
          y2="196.48"
          stroke="rgba(255, 255, 255, 0.07)"
          strokeWidth="0.9"
        />
        
        {/* Linha horizontal decorativa 2º lugar */}
        <line
          x1="264"
          y1="239"
          x2="392"
          y2="239"
          stroke="rgba(255, 255, 255, 0.07)"
          strokeWidth="0.9"
        />
        
        {/* Linha horizontal decorativa 3º lugar */}
        <line
          x1="467"
          y1="320"
          x2="582"
          y2="320"
          stroke="rgba(255, 255, 255, 0.07)"
          strokeWidth="0.9"
        />
      </svg>
    </div>
  );
};
