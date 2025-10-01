import React from 'react';
import { PodiumBackgroundPattern } from './podium-background-pattern';
import { PodiumFirstPlaceSvg } from './podium-first-place-svg';
import { PodiumSecondPlaceSvg } from './podium-second-place-svg';
import { PodiumThirdPlaceSvg } from './podium-third-place-svg';

export interface PodiumUser {
  name: string;
  initials: string;
  percentage: number;
  position: 1 | 2 | 3;
}

export interface RankingPodiumProps {
  firstPlace: PodiumUser;
  secondPlace: PodiumUser;
  thirdPlace: PodiumUser;
}

export const RankingPodium: React.FC<RankingPodiumProps> = ({
  firstPlace,
  secondPlace,
  thirdPlace
}) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '633.77px',
        height: '412.22px',
        margin: '60px auto 0'
      }}
    >
      {/* Background Pattern */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
        <PodiumBackgroundPattern />
      </div>

      {/* 2º Lugar - Esquerda (x: 72.1, y: 77.24 relativo ao grupo em 432, 151.25) */}
      <div style={{ position: 'absolute', left: '72.1px', top: '228.49px' }}>
        {/* Avatar */}
        <div
          style={{
            width: '86.52px',
            height: '86.52px',
            backgroundColor: '#22262F',
            border: '0.9px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <span
            style={{
              fontFamily: 'Inter',
              fontWeight: 600,
              fontSize: '36px',
              lineHeight: '44px',
              letterSpacing: '-0.02em',
              color: '#94979C',
              textAlign: 'center'
            }}
          >
            {secondPlace.initials}
          </span>
        </div>
      </div>

      {/* Troféu 2º lugar (x: 86, y: 216 global) */}
      <div
        style={{
          position: 'absolute',
          left: '86px',
          top: '216px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '7px'
        }}
      >
        <div
          style={{
            width: '38px',
            height: '38px',
            backgroundColor: '#CDCDCD',
            borderRadius: '6px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <svg width="22" height="20" viewBox="0 0 22 20" fill="none">
            <path
              d="M5.63 13.52C5.63 13.52 5.63 10.52 8.63 10.52C11.63 10.52 11.63 13.52 11.63 13.52M13.63 2.52C13.63 2.52 13.63 5.52 16.63 5.52C19.63 5.52 19.63 2.52 19.63 2.52M1.63 2.52C1.63 2.52 1.63 5.52 4.63 5.52C7.63 5.52 7.63 2.52 7.63 2.52M3.63 0.52C3.63 0.52 3.63 7.52 10.13 7.52C16.63 7.52 16.63 0.52 16.63 0.52"
              fill="#585858"
            />
          </svg>
        </div>
        <div
          style={{
            fontFamily: 'Sora',
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '18.02px',
            color: '#FFFFFF'
          }}
        >
          2º Lugar
        </div>
      </div>

      {/* Nome 2º lugar (x: 52, y: 304) */}
      <div
        style={{
          position: 'absolute',
          left: '52px',
          top: '304px',
          fontFamily: 'Sora',
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '26px',
          color: '#FFFFFF',
          textAlign: 'center',
          width: '147px'
        }}
      >
        {secondPlace.name}
      </div>

      {/* Porcentagem 2º lugar (x: 110, y: 335) */}
      <div
        style={{
          position: 'absolute',
          left: '110px',
          top: '335px',
          fontFamily: 'Sora',
          fontWeight: 600,
          fontSize: '14px',
          lineHeight: '21px',
          color: '#F7F7F7'
        }}
      >
        {secondPlace.percentage}%
      </div>

      {/* 1º Lugar - Centro (x: 275.79, y: 0 global) */}
      <div style={{ position: 'absolute', left: '275.79px', top: '0px' }}>
        {/* Avatar */}
        <div
          style={{
            width: '104.55px',
            height: '104.55px',
            backgroundColor: '#22262F',
            border: '0.9px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <span
            style={{
              fontFamily: 'Inter',
              fontWeight: 600,
              fontSize: '36px',
              lineHeight: '44px',
              letterSpacing: '-0.02em',
              color: '#94979C',
              textAlign: 'center'
            }}
          >
            {firstPlace.initials}
          </span>
        </div>
      </div>

      {/* Troféu 1º lugar (x: 304, y: 161) */}
      <div
        style={{
          position: 'absolute',
          left: '304px',
          top: '161px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '7px'
        }}
      >
        <div
          style={{
            width: '38px',
            height: '38px',
            backgroundColor: '#FFD365',
            borderRadius: '6px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <svg width="20" height="19" viewBox="0 0 20 19" fill="none">
            <path
              d="M5.11 12.27C5.11 12.27 5.11 9.27 8.11 9.27C11.11 9.27 11.11 12.27 11.11 12.27M13.11 1.27C13.11 1.27 13.11 4.27 16.11 4.27C19.11 4.27 19.11 1.27 19.11 1.27M1.11 1.27C1.11 1.27 1.11 4.27 4.11 4.27C7.11 4.27 7.11 1.27 7.11 1.27M3.11 -0.73C3.11 -0.73 3.11 6.27 9.61 6.27C16.11 6.27 16.11 -0.73 16.11 -0.73"
              fill="#5F5434"
            />
          </svg>
        </div>
        <div
          style={{
            fontFamily: 'Sora',
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '18.02px',
            color: '#FFFFFF'
          }}
        >
          1º Lugar
        </div>
      </div>

      {/* Nome 1º lugar (x: 243, y: 253) */}
      <div
        style={{
          position: 'absolute',
          left: '243px',
          top: '253px',
          fontFamily: 'Sora',
          fontWeight: 400,
          fontSize: '18px',
          lineHeight: '27.04px',
          color: '#FFFFFF',
          textAlign: 'center',
          width: '170px'
        }}
      >
        {firstPlace.name}
      </div>

      {/* Porcentagem 1º lugar (x: 311, y: 287) */}
      <div
        style={{
          position: 'absolute',
          left: '311px',
          top: '287px',
          fontFamily: 'Sora',
          fontWeight: 600,
          fontSize: '16px',
          lineHeight: '26px',
          color: '#F7F7F7'
        }}
      >
        {firstPlace.percentage}%
      </div>

      {/* 3º Lugar - Direita (x: 485.79, y: 111.59 relativo ao grupo em 198, 59.49) */}
      <div style={{ position: 'absolute', left: '485.79px', top: '171.08px' }}>
        {/* Avatar */}
        <div
          style={{
            width: '86.52px',
            height: '86.52px',
            backgroundColor: '#22262F',
            border: '0.9px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <span
            style={{
              fontFamily: 'Inter',
              fontWeight: 600,
              fontSize: '36px',
              lineHeight: '44px',
              letterSpacing: '-0.02em',
              color: '#94979C',
              textAlign: 'center'
            }}
          >
            {thirdPlace.initials}
          </span>
        </div>
      </div>

      {/* Troféu 3º lugar (x: 505, y: 245) */}
      <div
        style={{
          position: 'absolute',
          left: '505px',
          top: '245px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '7px'
        }}
      >
        <div
          style={{
            width: '34px',
            height: '34px',
            backgroundColor: '#B38A48',
            borderRadius: '6px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M5.11 12.27C5.11 12.27 5.11 9.27 8.11 9.27C11.11 9.27 11.11 12.27 11.11 12.27M13.11 1.27C13.11 1.27 13.11 4.27 16.11 4.27C19.11 4.27 19.11 1.27 19.11 1.27M1.11 1.27C1.11 1.27 1.11 4.27 4.11 4.27C7.11 4.27 7.11 1.27 7.11 1.27M3.11 -0.73C3.11 -0.73 3.11 6.27 9.61 6.27C16.11 6.27 16.11 -0.73 16.11 -0.73"
              fill="#CACACA"
            />
          </svg>
        </div>
        <div
          style={{
            fontFamily: 'Sora',
            fontWeight: 400,
            fontSize: '12px',
            lineHeight: '18.02px',
            color: '#FFFFFF'
          }}
        >
          3º Lugar
        </div>
      </div>

      {/* Nome 3º lugar (x: 456, y: 332) */}
      <div
        style={{
          position: 'absolute',
          left: '456px',
          top: '332px',
          fontFamily: 'Sora',
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '26px',
          color: '#FFFFFF',
          textAlign: 'center',
          width: '130px'
        }}
      >
        {thirdPlace.name}
      </div>

      {/* Porcentagem 3º lugar (x: 507, y: 364) */}
      <div
        style={{
          position: 'absolute',
          left: '507px',
          top: '364px',
          fontFamily: 'Sora',
          fontWeight: 600,
          fontSize: '13px',
          lineHeight: '22px',
          color: '#F7F7F7'
        }}
      >
        {thirdPlace.percentage}%
      </div>

      {/* SVGs das bordas decorativas (só para efeito visual) */}
      <div style={{ position: 'absolute', left: '0px', top: '118.7px', opacity: 0.5 }}>
        <PodiumFirstPlaceSvg />
      </div>
      <div style={{ position: 'absolute', left: '198px', top: '59.49px', opacity: 0.5 }}>
        <PodiumSecondPlaceSvg />
      </div>
      <div style={{ position: 'absolute', left: '432px', top: '151.25px', opacity: 0.5 }}>
        <PodiumThirdPlaceSvg />
      </div>
    </div>
  );
};
