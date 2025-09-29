import React from 'react';
import { Container, type ScreenSize, type Spacing } from './index';

interface FormContainerProps {
  children: React.ReactNode;
  screenSize?: ScreenSize;
  gap?: 'small' | 'medium' | 'large';
}

/**
 * FormContainer - Alias para Container otimizado para formulários
 * 
 * Wrapper conveniente do Container com configurações padrão para formulários.
 * Usa o sistema de spacing padronizado do Design System.
 */
export const FormContainer: React.FC<FormContainerProps> = ({
  children,
  screenSize = 'desktop',
  gap = 'medium'
}) => {
  // Mapear gaps semânticos para spacing tokens
  const getGapSpacing = (): Spacing | { mobile?: Spacing; desktop?: Spacing } => {
    switch (gap) {
      case 'small':
        return { mobile: 3 as Spacing, desktop: 4 as Spacing }; // 12px/16px
      case 'medium':
        return { mobile: 4 as Spacing, desktop: 5 as Spacing }; // 16px/20px  
      case 'large':
        return { mobile: 5 as Spacing, desktop: 6 as Spacing }; // 20px/24px
      default:
        return 5 as Spacing; // 20px
    }
  };

  return (
    <Container
      direction="column"
      gap={getGapSpacing()}
      width="100%"
      screenSize={screenSize}
    >
      {children}
    </Container>
  );
};
