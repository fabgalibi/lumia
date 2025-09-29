import React from 'react';
import { X } from 'lucide-react';
import { Button, Text, colors } from '@/components/ui/design-system';

interface ModalWrapperProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
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
  children,
  onSave,
  onCancel,
  saveButtonText = 'Salvar',
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
              padding: '4vh 4vw',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#20202C',
          borderRadius: '16px',
          width: '100%',
          minWidth: 0,
          height: 'calc(100vh - 8vh)',
          maxHeight: 'calc(100vh - 8vh)',
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
            padding: '20px 24px',
            borderBottom: '1px solid #2C2C45',
            flexShrink: 0,
          }}
        >
          <Text variant="h3" color={colors.text.primary}>
            {title}
          </Text>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = colors.bg.secondary;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <X size={20} color={colors.text.primary} />
          </button>
        </div>

        {/* Content */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '24px',
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
              padding: '20px 24px',
              borderTop: '1px solid #2C2C45',
              gap: '12px',
              flexShrink: 0,
            }}
          >
            <Button
              variant="secondary"
              onClick={handleCancel}
              style={{
                padding: '10px 20px',
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
                  padding: '10px 20px',
                }}
              >
                {saveButtonText}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
