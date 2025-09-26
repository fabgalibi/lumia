import React from 'react';

interface FormFooterProps {
  onCancel: () => void;
  onSave: () => void;
  isLoading?: boolean;
}

export const FormFooter: React.FC<FormFooterProps> = ({
  onCancel,
  onSave,
  isLoading = false
}) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
      marginTop: '32px'
    }}>
      <div style={{
        height: '1px',
        backgroundColor: '#22262F',
        width: '100%'
      }} />
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: '20px',
        width: '100%'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: '12px'
        }}>
          <button
            onClick={onCancel}
            disabled={isLoading}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              padding: '10px 14px',
              backgroundColor: '#2D2D45',
              border: 'none',
              borderRadius: '8px',
              boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s ease',
              opacity: isLoading ? 0.6 : 1
            }}
            onMouseEnter={(e) => {
              if (!isLoading) {
                e.currentTarget.style.backgroundColor = '#3A3A5A';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isLoading) {
                e.currentTarget.style.backgroundColor = '#2D2D45';
                e.currentTarget.style.transform = 'translateY(0)';
              }
            }}
          >
            <span style={{
              fontFamily: 'Sora',
              fontWeight: '600',
              fontSize: '14px',
              lineHeight: '1.4285714285714286em',
              color: '#CECFD2'
            }}>
              Cancelar
            </span>
          </button>
          <button
            onClick={onSave}
            disabled={isLoading}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              padding: '10px 14px',
              backgroundColor: isLoading ? '#8B4A3A' : '#C74228',
              border: '2px solid transparent',
              backgroundImage: `linear-gradient(${isLoading ? '#8B4A3A' : '#C74228'}, ${isLoading ? '#8B4A3A' : '#C74228'}), linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)`,
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box',
              borderRadius: '8px',
              boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s ease',
              opacity: isLoading ? 0.8 : 1
            }}
            onMouseEnter={(e) => {
              if (!isLoading) {
                e.currentTarget.style.backgroundImage = 'linear-gradient(#D54A2E, #D54A2E), linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isLoading) {
                e.currentTarget.style.backgroundImage = 'linear-gradient(#C74228, #C74228), linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)';
                e.currentTarget.style.transform = 'translateY(0)';
              }
            }}
          >
            <span style={{
              fontFamily: 'Sora',
              fontWeight: '600',
              fontSize: '14px',
              lineHeight: '1.4285714285714286em',
              color: '#FFFFFF'
            }}>
              {isLoading ? 'Salvando...' : 'Salvar alterações'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
