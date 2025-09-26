import React from 'react';

interface FormFooterProps {
  onCancel: () => void;
  onSave: () => void;
  isLoading?: boolean;
  screenSize?: 'mobile' | 'tablet' | 'desktop';
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
      alignSelf: 'stretch',
      gap: '20px',
      padding: screenSize === 'mobile' || screenSize === 'tablet' ? '0px 16px 12px' : '0px 0px 0px', // Mobile/Tablet: 0px 16px 12px conforme Figma
      marginTop: screenSize === 'mobile' || screenSize === 'tablet' ? '0px' : '32px', // Mobile/Tablet: sem margin top
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
        alignSelf: 'stretch',
        gap: '20px', // Figma: gap 20px no content
        width: '100%'
      }}>
        {/* Actions */}
        <div style={{
          display: 'flex',
          justifyContent: screenSize === 'mobile' || screenSize === 'tablet' ? 'stretch' : 'flex-end',
          alignItems: 'center',
          gap: '16px', // Figma: gap 16px entre botões
          width: '100%'
        }}>
          <button
            onClick={onCancel}
            disabled={isLoading}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '4px',
              padding: '10px 14px',
              backgroundColor: '#2D2D45', // Figma: Secondary color background
              border: 'none',
              borderRadius: '8px',
              boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)', // Figma: shadow-xs-skeuomorphic sem inset
              cursor: isLoading ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s ease',
              opacity: isLoading ? 0.6 : 1,
              flex: screenSize === 'mobile' || screenSize === 'tablet' ? '1' : 'none', // Mobile/Tablet: fill width
              minWidth: screenSize === 'mobile' || screenSize === 'tablet' ? '0' : 'auto', // Mobile/Tablet: permite encolher igualmente
              maxWidth: screenSize === 'mobile' || screenSize === 'tablet' ? 'none' : 'auto' // Mobile/Tablet: sem limite máximo
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
              justifyContent: 'center',
              alignItems: 'center',
              gap: '4px',
              padding: '10px 14px',
              backgroundColor: isLoading ? '#8B4A3A' : '#F66649', // Figma: Primary color background correto
              border: '2px solid transparent',
              backgroundImage: `linear-gradient(${isLoading ? '#8B4A3A' : '#F66649'}, ${isLoading ? '#8B4A3A' : '#F66649'}), linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)`,
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box',
              borderRadius: '8px',
              boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)', // Figma: shadow-xs-skeuomorphic sem inset
              cursor: isLoading ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s ease',
              opacity: isLoading ? 0.8 : 1,
              flex: screenSize === 'mobile' || screenSize === 'tablet' ? '1' : 'none', // Mobile/Tablet: fill width
              minWidth: screenSize === 'mobile' || screenSize === 'tablet' ? '0' : 'auto', // Mobile/Tablet: permite encolher igualmente
              maxWidth: screenSize === 'mobile' || screenSize === 'tablet' ? 'none' : 'auto' // Mobile/Tablet: sem limite máximo
            }}
            onMouseEnter={(e) => {
              if (!isLoading) {
                e.currentTarget.style.backgroundImage = 'linear-gradient(#F7734E, #F7734E), linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isLoading) {
                e.currentTarget.style.backgroundImage = 'linear-gradient(#F66649, #F66649), linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)';
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
