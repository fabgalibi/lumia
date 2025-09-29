import React from 'react';
import { Edit05 } from '@untitledui/icons';
import { Container, Text, colors, type ScreenSize } from './index';

interface DisplayFieldProps {
  value: string;
  label?: string;
  supportingText?: string;
  icon?: React.ReactNode;
  showEditIcon?: boolean;
  onClick?: () => void;
  screenSize?: ScreenSize;
  disabled?: boolean;
  error?: string;
  clickable?: boolean;
}

/**
 * DisplayField - Componente para exibir valores somente leitura
 * 
 * Usado para mostrar informações que podem ser editadas ao clicar,
 * mas não são inputs editáveis diretamente.
 * 
 * Exemplo de uso:
 * <DisplayField
 *   label="Área de Estudo"
 *   value="Controle"
 *   supportingText="Referente à área selecionada"
 *   onClick={() => editArea()}
 *   screenSize={screenSize}
 * />
 */
export const DisplayField: React.FC<DisplayFieldProps> = ({
  value,
  label,
  supportingText,
  icon,
  showEditIcon = true,
  onClick,
  screenSize = 'desktop',
  disabled = false,
  error,
  clickable = true
}) => {
  return (
    <Container gap={2} screenSize={screenSize}>
      {/* Label */}
      {label && (
        <Text
          variant="label"
          color={colors.text.secondary}
          screenSize={screenSize}
        >
          {label}
        </Text>
      )}
      
      {/* Supporting Text */}
      {supportingText && (
        <Text
          variant="caption"
          color={colors.text.tertiary}
          screenSize={screenSize}
        >
          {supportingText}
        </Text>
      )}
      
      {/* Display Field Container */}
      <Container
        direction="row"
        align="center"
        gap={2}
        background={disabled ? colors.bg.secondary : colors.bg.elevated}
        border={`1px solid ${error ? colors.border.error : (disabled ? colors.bg.secondary : colors.border.primary)}`}
        borderRadius="md"
        shadow="sm"
        onClick={onClick}
        screenSize={screenSize}
        style={{
          cursor: (onClick && clickable && !disabled) ? 'pointer' : 'default',
          transition: 'all 0.2s ease',
          minHeight: '40px',
          padding: '8px 16px',
        }}
        onMouseEnter={(e: React.MouseEvent) => {
          if (onClick && clickable && !disabled) {
            (e.currentTarget as HTMLElement).style.backgroundColor = colors.border.primary;
          }
        }}
        onMouseLeave={(e: React.MouseEvent) => {
          if (onClick && clickable && !disabled) {
            (e.currentTarget as HTMLElement).style.backgroundColor = colors.bg.elevated;
          }
        }}
      >
        {/* Leading Icon */}
        {icon && (
          <Container padding={0} style={{ flexShrink: 0 }}>
            {icon}
          </Container>
        )}
        
        {/* Value Text */}
        <Text
          color={disabled ? colors.text.disabled : colors.text.primary}
          screenSize={screenSize}
          style={{ flex: 1 }}
        >
          {value}
        </Text>
        
        {/* Edit Icon */}
        {showEditIcon && !disabled && clickable && (
          <Edit05 
            width="16" 
            height="16" 
            stroke={colors.text.disabled} 
            strokeWidth="1.5" 
          />
        )}
      </Container>
      
      {/* Error Message */}
      {error && (
        <Text
          variant="caption"
          color={colors.error}
          screenSize={screenSize}
        >
          {error}
        </Text>
      )}
    </Container>
  );
};
