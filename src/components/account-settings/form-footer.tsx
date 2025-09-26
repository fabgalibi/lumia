import React from 'react';

interface FormFooterProps {
  onCancel: () => void;
  onSave: () => void;
  isLoading?: boolean;
  screenSize?: 'mobile' | 'desktop' | 'tablet';
}

export const FormFooter: React.FC<FormFooterProps> = ({
  onCancel,
  onSave,
  isLoading = false,
  screenSize = 'desktop'
}) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center',
      gap: '20px',
      padding: screenSize !== 'desktop' ? '0px 16px 12px' : '0px 0px 0px', // Figma mobile/tablet: 0px 16px 12px
      marginTop: screenSize !== 'desktop' ? '0px' : '32px', // No margin top no mobile/tablet
      width: '100%'
    }}>
      {/* Divider */}
      <div style={{
        height: '1px',
        backgroundColor: '#22262F', // Figma: cor exata
        width: '100%'
      }} />
      
      {/* Content */}
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: '20px', // Figma: gap 20px no content
        width: '100%'
      }}>
        {/* Actions */}
        <div style={{
          display: 'flex',
          justifyContent: screenSize !== 'desktop' ? 'space-between' : 'flex-end',
          alignItems: 'center',
          gap: '16px', // Figma: gap 16px entre botões
          width: '100%',
          flex: '1'
        }}>
          <button
            onClick={onCancel}
            disabled={isLoading}
            style={{
              display: 'flex',
              justifyContent: 'center', // Figma: justify center
              alignItems: 'center',
              gap: '4px',
              padding: '10px 14px',
              backgroundColor: '#2D2D45',
              border: 'none',
              borderRadius: '8px',
              boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
              cursor: isLoading ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s ease',
              opacity: isLoading ? 0.6 : 1,
              flex: screenSize !== 'desktop' ? '1' : 'none', // Mobile/tablet: fill width
              width: screenSize !== 'desktop' ? '100%' : 'auto'
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
              justifyContent: 'center', // Figma: justify center
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
              opacity: isLoading ? 0.8 : 1,
              flex: screenSize !== 'desktop' ? '1' : 'none', // Mobile/tablet: fill width
              width: screenSize !== 'desktop' ? '100%' : 'auto'
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
