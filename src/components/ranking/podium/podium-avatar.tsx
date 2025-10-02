import React from 'react';

interface PodiumAvatarProps {
  initials: string;
  size?: string; // Tamanho customizado (opcional, padrão: 104.55px)
  scale?: number; // Escala para responsividade (opcional, padrão: 1)
}

/**
 * Avatar do pódio - quadrado com as iniciais do usuário
 * Posicione este componente usando um wrapper div com position: absolute
 */
export const PodiumAvatar: React.FC<PodiumAvatarProps> = ({ 
  initials, 
  size = '104.55px',
  scale = 1
}) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        background: '#22262F',
        border: `${0.901 * scale}px solid rgba(255, 255, 255, 0.12)`,
        borderRadius: `${8 * scale}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <span
        style={{
          fontFamily: 'Inter',
          fontWeight: 600,
          fontSize: `${36 * scale}px`,
          lineHeight: '1.222em',
          letterSpacing: '-2%',
          color: '#94979C',
          textAlign: 'center'
        }}
      >
        {initials}
      </span>
    </div>
  );
};

