import React from 'react';
import { AlertCircle } from '@untitledui/icons';
import { Container, Text, colors, type ScreenSize } from './index';

interface InfoMessageProps {
  message: string;
  icon?: React.ReactNode;
  screenSize?: ScreenSize;
}

/**
 * InfoMessage - Componente para mensagens informativas
 * 
 * Usado para exibir informações adicionais, dicas ou contexto.
 * Inclui ícone padrão mas pode ser customizado.
 */
export const InfoMessage: React.FC<InfoMessageProps> = ({
  message,
  icon,
  screenSize = 'desktop'
}) => {
  return (
    <Container
      direction="row"
      align="center"
      gap={2}
      padding={{ mobile: 2, desktop: 3 }}
      screenSize={screenSize}
    >
      {icon || (
        <AlertCircle 
          width="20" 
          height="20" 
          stroke={colors.text.secondary} 
          strokeWidth="1.5" 
        />
      )}
      
      <Text
        variant="caption"
        size={{ mobile: 'xs', desktop: 'sm' }}
        color={colors.text.secondary}
        screenSize={screenSize}
      >
        {message}
      </Text>
    </Container>
  );
};
