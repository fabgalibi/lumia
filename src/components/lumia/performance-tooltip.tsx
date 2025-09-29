import React, { useState } from 'react';
import { Text, colors } from '@/components/ui/design-system';

interface PerformanceTooltipProps {
  percentage: string;
  screenSize?: 'mobile' | 'tablet' | 'notebook' | 'desktop';
}

/**
 * Componente de Performance com Tooltip
 * 
 * Exibe a porcentagem de performance com um ícone de ajuda opcional
 * que pode mostrar informações adicionais sobre o cálculo da performance
 */
export const PerformanceTooltip: React.FC<PerformanceTooltipProps> = ({ 
  percentage, 
  screenSize = 'desktop' 
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div 
      style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '6px',
        position: 'relative'
      }}
    >
      <Text 
        variant="body" 
        color={colors.text.primary}
        screenSize={screenSize}
      >
        {percentage}
      </Text>
      
      {/* Help Icon - Opcional, baseado no Figma parece estar oculto por padrão */}
      <button
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'help',
          padding: '2px',
          opacity: 0, // Oculto por padrão como no Figma
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle 
            cx="8" 
            cy="8" 
            r="7" 
            stroke={colors.text.tertiary} 
            strokeWidth="1.33"
          />
          <path 
            d="M6.06 6C6.21673 5.55444 6.52573 5.17873 6.93398 4.93942C7.34224 4.70011 7.82607 4.61263 8.28737 4.69247C8.74867 4.77231 9.16251 5.01434 9.45371 5.37568C9.74492 5.73702 9.89523 6.19435 9.87776 6.66C9.87776 8 7.87776 8.83 7.87776 8.83M8 11.5H8.00667"
            stroke={colors.text.tertiary}
            strokeWidth="1.33"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Tooltip */}
      {showTooltip && (
        <div
          style={{
            position: 'absolute',
            top: '-40px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: colors.bg.elevated,
            border: `1px solid ${colors.border.primary}`,
            borderRadius: '6px',
            padding: '8px 12px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
            whiteSpace: 'nowrap',
          }}
        >
          <Text 
            variant="caption" 
            color={colors.text.secondary}
            screenSize={screenSize}
          >
            Performance baseada em acertos
          </Text>
        </div>
      )}
    </div>
  );
};

export default PerformanceTooltip;
