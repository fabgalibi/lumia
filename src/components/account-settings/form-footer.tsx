import React from 'react';
import { Container, Button } from '@/components/ui/design-system';
import { colors } from '@/components/ui';

interface FormFooterProps {
  onCancel: () => void;
  onSave: () => void;
  isLoading?: boolean;
  screenSize?: 'mobile' | 'tablet' | 'desktop';
  saveButtonText?: string;
}

export const FormFooter: React.FC<FormFooterProps> = ({
  onCancel,
  onSave,
  isLoading = false,
  screenSize = 'desktop',
  saveButtonText = 'Salvar alterações'
}) => {
  return (
    <Container
      direction="column"
      justify="flex-end"
      align="center"
      gap={5}
      padding={{
        mobile: 3,
        tablet: 3,
        desktop: 0
      }}
      style={{
        marginTop: screenSize === 'mobile' || screenSize === 'tablet' ? '0px' : '32px',
        width: '100%'
      }}
      screenSize={screenSize}
    >
      {/* Divider */}
      <div style={{
        height: '1px',
        backgroundColor: colors.border.secondary,
        width: '100%'
      }} />
      
      {/* Actions */}
      <Container
        direction="row"
        justify="flex-end"
        align="center"
        gap={4}
        width="100%"
        screenSize={screenSize}
      >
        <Button
          variant="secondary"
          onClick={onCancel}
          disabled={isLoading}
          screenSize={screenSize}
          style={{
            flex: screenSize === 'mobile' || screenSize === 'tablet' ? '1' : 'none'
          }}
        >
          Cancelar
        </Button>
        
        <Button
          variant="primary"
          onClick={onSave}
          disabled={isLoading}
          screenSize={screenSize}
          style={{
            flex: screenSize === 'mobile' || screenSize === 'tablet' ? '1' : 'none'
          }}
        >
          {isLoading ? 'Salvando...' : saveButtonText}
        </Button>
      </Container>
    </Container>
  );
};
