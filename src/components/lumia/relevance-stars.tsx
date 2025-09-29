import React from 'react';

export type RelevanceLevel = 'high' | 'medium' | 'low';

interface RelevanceStarsProps {
  level: RelevanceLevel;
}

/**
 * Componente de Relevância com Estrelas
 * 
 * Renderiza um sistema de 3 estrelas baseado no nível de relevância:
 * - Alta relevância: ⭐⭐⭐ (3 estrelas preenchidas)
 * - Média relevância: ⭐⭐☆ (2 estrelas preenchidas) 
 * - Baixa relevância: ⭐☆☆ (1 estrela preenchida)
 */
export const RelevanceStars: React.FC<RelevanceStarsProps> = ({ level }) => {
  const getStars = () => {
    switch (level) {
      case 'high':
        return [true, true, true];
      case 'medium':
        return [true, true, false];
      case 'low':
        return [true, false, false];
      default:
        return [false, false, false];
    }
  };

  const stars = getStars();

  return (
    <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
      {stars.map((filled, index) => (
        <svg
          key={index}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '16px', height: '16px' }}
        >
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            fill={filled ? "#FFFFFF" : "transparent"}
            stroke={filled ? "#FFFFFF" : "#85888E"}
            strokeWidth="1.5"
          />
        </svg>
      ))}
    </div>
  );
};
