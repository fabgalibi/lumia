import React from 'react';

interface PodiumAvatarProps {
  initials: string;
  size?: string; // Tamanho customizado (opcional, padrão: 86.52px)
}

/**
 * Avatar do pódio - quadrado com as iniciais do usuário
 * Posicione este componente usando um wrapper div com position: absolute
 */
export const PodiumAvatar: React.FC<PodiumAvatarProps> = ({ 
  initials, 
  size = '86.52px' 
}) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        background: '#22262F',
        border: '0.9px solid rgba(255, 255, 255, 0.12)',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <span
        style={{
          fontFamily: 'Inter',
          fontWeight: 600,
          fontSize: '36px',
          lineHeight: '1.22em',
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

