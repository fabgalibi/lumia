import React from 'react';
import { X } from 'lucide-react';
import { Button, Text, colors } from '@/components/ui/design-system';

interface ModalWrapperProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  onSave?: () => void;
  onCancel?: () => void;
  saveButtonText?: string;
  cancelButtonText?: string;
  canSave?: boolean;
}

export const ModalWrapper: React.FC<ModalWrapperProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  onSave,
  onCancel,
  saveButtonText = 'Salvar seleção',
  cancelButtonText = 'Cancelar',
  canSave = true,
}) => {
  if (!isOpen) return null;

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    } else {
      onClose();
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: window.innerWidth <= 768 ? '16px' : '4vh 4vw',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: 'rgba(32, 32, 40, 1)',
          borderRadius: window.innerWidth <= 768 ? '12px' : '16px',
          width: '100%',
          minWidth: 0,
          height: window.innerWidth <= 768 ? 'calc(100vh - 32px)' : 'calc(100vh - 8vh)',
          maxHeight: window.innerWidth <= 768 ? 'calc(100vh - 32px)' : 'calc(100vh - 8vh)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          position: 'relative',
          border: '1px solid #2C2C45',
          boxSizing: 'border-box',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: window.innerWidth <= 768 ? '16px 12px 12px 16px' : '24px 16px 16px 24px',
            borderBottom: '1.5px solid #272737',
            flexShrink: 0,
            backgroundColor: 'rgba(37, 37, 50, 1)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              flex: 1,
            }}
          >
            <Text 
              variant="h3" 
              style={{
                color: '#F7F7F7',
                fontSize: window.innerWidth <= 768 ? '16px' : '18px',
                fontWeight: 600,
                lineHeight: '1.56',
                margin: 0,
              }}
            >
              {title}
            </Text>
            {subtitle && (
              <Text 
                variant="body" 
                style={{
                  color: '#CECFD2',
                  fontSize: window.innerWidth <= 768 ? '12px' : '14px',
                  fontWeight: 400,
                  lineHeight: '1.43',
                  margin: 0,
                }}
              >
                {subtitle}
              </Text>
            )}
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: window.innerWidth <= 768 ? '8px' : '12px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: window.innerWidth <= 768 ? '40px' : '48px',
              height: window.innerWidth <= 768 ? '40px' : '48px',
              transition: 'background-color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = colors.bg.secondary;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <X size={window.innerWidth <= 768 ? 16 : 20} color="#F0F0F1" strokeWidth={2} />
          </button>
        </div>

        {/* Content */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: window.innerWidth <= 768 ? '16px' : '24px',
            minHeight: 0, // Permite que o flex funcione corretamente
          }}
        >
          {children}
        </div>

        {/* Footer */}
        {(onSave || onCancel) && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              padding: window.innerWidth <= 768 ? '16px 12px' : '32px 24px',
              borderTop: '1px solid #2C2C45',
              backgroundColor: 'rgba(32, 32, 40, 1)',
              flexShrink: 0,
            }}
          >
            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: window.innerWidth <= 768 ? 'stretch' : 'flex-end',
                gap: window.innerWidth <= 768 ? '8px' : '16px',
                flexDirection: 'row',
                width: window.innerWidth <= 768 ? '100%' : 'auto',
              }}
            >
              <Button
                variant="secondary"
                onClick={handleCancel}
                style={{
                  padding: window.innerWidth <= 768 ? '12px 16px' : '10px 14px',
                  width: window.innerWidth <= 768 ? '50%' : '238px',
                  backgroundColor: '#2D2D45',
                  color: '#CECFD2',
                  border: 'none',
                  borderRadius: '8px',
                  boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
                }}
              >
                {cancelButtonText}
              </Button>
              {onSave && (
                <Button
                  variant="primary"
                  onClick={onSave}
                  disabled={!canSave}
                  style={{
                    padding: window.innerWidth <= 768 ? '12px 16px' : '10px 14px',
                    width: window.innerWidth <= 768 ? '50%' : '254px',
                    backgroundColor: '#C74228',
                    color: '#FFFFFF',
                    border: '2px solid',
                    borderImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%) 1',
                    borderRadius: '8px',
                    boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
                  }}
                >
                  {saveButtonText}
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
