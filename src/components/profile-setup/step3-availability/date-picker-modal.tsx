// date-picker-modal.tsx
import React, { useState, useEffect } from 'react';
import CustomDatePicker from './custom-date-picker';
import { X } from 'lucide-react';

interface DatePickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDate: Date | undefined;
  onDateSelect: (date: Date) => void;
  screenSize: 'mobile' | 'tablet' | 'notebook' | 'desktop';
}

export const DatePickerModal: React.FC<DatePickerModalProps> = ({
  isOpen,
  onClose,
  selectedDate,
  onDateSelect,
  screenSize
}) => {
  const [tempDate, setTempDate] = useState<Date | undefined>(selectedDate);

  // Fechar modal automaticamente quando sair do mobile
  useEffect(() => {
    if (isOpen && screenSize !== 'mobile') {
      onClose();
    }
  }, [screenSize, isOpen, onClose]);

  if (!isOpen) return null;

  const handleDateClick = (date: Date) => {
    setTempDate(date);
  };

  const handleConfirm = () => {
    if (tempDate) {
      onDateSelect(tempDate);
      onClose();
    }
  };

  const handleCancel = () => {
    setTempDate(selectedDate);
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        zIndex: 10000,
        padding: 0
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '100%',
          backgroundColor: 'rgba(32, 32, 40, 1)',
          borderRadius: '24px 24px 0 0',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '90vh',
          overflow: 'hidden'
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            padding: '20px 20px 24px 20px',
            borderBottom: 'none',
            position: 'relative',
            backgroundColor: 'rgba(37, 37, 50, 1)'
          }}
        >
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '50%',
              transform: 'translateY(-50%)',
              right: '16px',
              width: '40px',
              height: '40px',
              padding: '0',
              backgroundColor: 'transparent',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <X size={20} color="#F7F7F7" strokeWidth={2.5} />
          </button>
          <h3
            style={{
              fontFamily: 'Sora',
              fontSize: '16px',
              fontWeight: 600,
              color: '#F7F7F7',
              margin: 0,
              lineHeight: '24px',
              paddingRight: '40px'
            }}
          >
            Selecionar uma data específica
          </h3>
          <p
            style={{
              fontFamily: 'Sora',
              fontSize: '12px',
              fontWeight: 400,
              color: '#CECFD2',
              margin: 0,
              lineHeight: '18px',
              paddingRight: '40px'
            }}
          >
            Datas disponíveis: entre 05 à 17/10/2025
          </p>
        </div>

        {/* Content */}
        <div
          style={{
            flex: 1,
            padding: '20px',
            overflowY: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            backgroundColor: 'rgba(32, 32, 40, 1)'
          }}
        >
          <div
            style={{
              width: '100%',
              padding: '20px',
              backgroundColor: 'rgba(39, 39, 55, 1)',
              borderRadius: '12px'
            }}
          >
            <CustomDatePicker
              selectedDate={tempDate}
              onDateSelect={handleDateClick}
              screenSize={screenSize}
              isInModal={true}
            />
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            gap: '12px',
            padding: '20px 20px 32px 20px',
            borderTop: 'none',
            backgroundColor: 'rgba(32, 32, 40, 1)',
            justifyContent: 'center'
          }}
        >
          <button
            onClick={handleCancel}
            style={{
              flex: 1,
              height: '40px',
              padding: '0 14px',
              backgroundColor: 'rgba(45, 45, 69, 1)',
              border: 'none',
              borderRadius: '8px',
              color: '#F7F7F7',
              fontFamily: 'Sora',
              fontSize: '14px',
              fontWeight: 600,
              lineHeight: '40px',
              letterSpacing: '0%',
              textAlign: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(55, 55, 79, 1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(45, 45, 69, 1)';
            }}
          >
            Cancelar
          </button>
          <button
            onClick={handleConfirm}
            disabled={!tempDate}
            style={{
              flex: 1,
              height: '40px',
              padding: '0 14px',
              backgroundColor: tempDate ? 'rgba(199, 66, 40, 1)' : '#3D3D4D',
              border: tempDate ? '2px solid rgba(199, 66, 40, 1)' : 'none',
              borderRadius: '8px',
              color: tempDate ? '#FFFFFF' : '#85888E',
              fontFamily: 'Sora',
              fontSize: '14px',
              fontWeight: 600,
              lineHeight: '40px',
              letterSpacing: '0%',
              textAlign: 'center',
              cursor: tempDate ? 'pointer' : 'not-allowed',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseEnter={(e) => {
              if (tempDate) {
                e.currentTarget.style.backgroundColor = 'rgba(179, 56, 30, 1)';
                e.currentTarget.style.borderColor = 'rgba(179, 56, 30, 1)';
              }
            }}
            onMouseLeave={(e) => {
              if (tempDate) {
                e.currentTarget.style.backgroundColor = 'rgba(199, 66, 40, 1)';
                e.currentTarget.style.borderColor = 'rgba(199, 66, 40, 1)';
              }
            }}
          >
            Aplicar
          </button>
        </div>
      </div>
    </div>
  );
};
