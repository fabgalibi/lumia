import React, { useState, useEffect } from 'react';
import { Container, Text, Button, colors } from '@/components/ui/design-system';

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const LogoutModal: React.FC<LogoutModalProps> = ({
  isOpen,
  onClose,
  onConfirm
}) => {
  const [isMobile, setIsMobile] = useState(false);

  // Detectar se é mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  console.log('LogoutModal renderizado, isOpen:', isOpen);
  
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-[999999] pointer-events-none" 
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
    >
      <Container
        background={colors.bg.primary}
        borderRadius="xl"
        padding={isMobile ? 5 : 6}
        direction="column"
        gap={6}
        style={{ 
          width: isMobile ? '343px' : '484px',
          minHeight: isMobile ? '200px' : '256px',
          boxShadow: '0px 3px 3px -1.5px rgba(255, 255, 255, 0), 0px 8px 8px -4px rgba(255, 255, 255, 0), 0px 20px 24px -4px rgba(255, 255, 255, 0)',
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'auto'
        }}
      >
        {/* Background pattern decorative */}
        <div className="absolute -top-30 -left-30 w-84 h-84 opacity-10">
          <div className="w-full h-full rounded-full border border-[#22262F]"></div>
        </div>

        {/* Close Button */}
        <button
          onClick={() => {
            console.log('Botão X clicado - fechando modal');
            onClose();
          }}
          className="absolute top-3 right-3 w-11 h-11 flex items-center justify-center rounded-lg hover:bg-[#333346] transition-colors duration-200"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 3L3 9M3 3L9 9" stroke="#61656C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Header */}
        <Container direction="row" gap={4} align="flex-start">
          <div className="w-12 h-12 flex items-center justify-center">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 0.5C36.9787 0.5 47.5 11.0213 47.5 24C47.5 36.9787 36.9787 47.5 24 47.5C11.0213 47.5 0.5 36.9787 0.5 24C0.5 11.0213 11.0213 0.5 24 0.5Z" fill="#2E2E3F"/>
              <path d="M24 0.5C36.9787 0.5 47.5 11.0213 47.5 24C47.5 36.9787 36.9787 47.5 24 47.5C11.0213 47.5 0.5 36.9787 0.5 24C0.5 11.0213 11.0213 0.5 24 0.5Z" stroke="#373750"/>
              <path d="M28 29L33 24M33 24L28 19M33 24H21M21 15H19.8C18.1198 15 17.2798 15 16.638 15.327C16.0735 15.6146 15.6146 16.0735 15.327 16.638C15 17.2798 15 18.1198 15 19.8V28.2C15 29.8802 15 30.7202 15.327 31.362C15.6146 31.9265 16.0735 32.3854 16.638 32.673C17.2798 33 18.1198 33 19.8 33H21" stroke="#CECFD2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <Container direction="column" gap={1}>
            <Text
              variant="body"
              weight="semibold"
              color={colors.text.primary}
            >
              Sair da conta
            </Text>
            <Text
              variant="caption"
              color={colors.text.secondary}
            >
              Tem certeza que deseja sair da conta? Ao prosseguir com essa ação você precisará fazer login novamente.
            </Text>
          </Container>
        </Container>

        {/* Footer */}
        <Container
          direction={isMobile ? "column" : "row"}
          justify="flex-end"
          gap={3}
        >
          <Button
            variant="secondary"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log('Botão Cancelar clicado - fechando modal');
              onClose();
            }}
            style={{
              width: isMobile ? '100%' : '212px',
              zIndex: 10,
              pointerEvents: 'auto'
            }}
          >
            Cancelar
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              console.log('Botão Confirmar clicado');
              onConfirm();
            }}
            style={{
              width: isMobile ? '100%' : '212px',
              zIndex: 10,
              pointerEvents: 'auto'
            }}
          >
            Sair da conta
          </Button>
        </Container>
      </Container>
    </div>
  );
};