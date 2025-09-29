import React from 'react';
import { Text, colors, type ScreenSize } from './index';

interface ErrorMessageProps {
  message: string;
  screenSize?: ScreenSize;
}

/**
 * ErrorMessage - Componente para mensagens de erro padronizadas
 * 
 * Usado para exibir mensagens de erro de validação em formulários.
 * Automaticamente usa a cor de erro do Design System.
 */
export const ErrorMessage: React.FC<ErrorMessageProps> = ({
  message,
  screenSize = 'desktop'
}) => {
  return (
    <Text
      variant="caption"
      size={{ mobile: 'xs', desktop: 'sm' }}
      color={colors.error}
      screenSize={screenSize}
      style={{
        marginTop: '4px',
        display: 'block'
      }}
    >
      {message}
    </Text>
  );
};
