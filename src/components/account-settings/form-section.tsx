import React from 'react';

interface FormSectionProps {
  children: React.ReactNode;
  withDivider?: boolean;
  screenSize?: 'mobile' | 'tablet' | 'desktop';
}

// Componente estrutural principal que organiza seções do formulário
export function FormSection({ children, withDivider = true, screenSize = 'desktop' }: FormSectionProps) {
  return (
    <>
       {/* Content section - Desktop: row layout, Mobile/Tablet: column layout */}
       <div style={{
         display: 'flex',
         flexDirection: screenSize === 'mobile' ? 'column' : screenSize === 'tablet' ? 'column' : 'row',
         alignItems: screenSize === 'mobile' || screenSize === 'tablet' ? 'stretch' : 'flex-start',
         gap: screenSize === 'mobile' ? '12px' : screenSize === 'tablet' ? '16px' : '40px',
         width: '100%'
      }}>
        {children}
      </div>

      {/* Divider */}
      {withDivider && (
        <div style={{
          width: '100%',
          height: '1px',
          backgroundColor: '#22262F'
        }} />
      )}
    </>
  );
}

// Componente para labels de seção (reutilizável)
interface SectionLabelProps {
  title: string;
  supportingText?: string;
  width?: number;
  screenSize?: 'mobile' | 'tablet' | 'desktop';
}

export function SectionLabel({ title, supportingText, width = 300, screenSize = 'desktop' }: SectionLabelProps) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: supportingText ? '6px' : '4px',
       width: screenSize === 'mobile' || screenSize === 'tablet' ? '100%' : `${width}px`,
       minWidth: screenSize === 'mobile' || screenSize === 'tablet' ? 'auto' : `${width}px`,
       maxWidth: screenSize === 'mobile' || screenSize === 'tablet' ? '100%' : `${width}px`,
       flexShrink: screenSize === 'mobile' || screenSize === 'tablet' ? 1 : 0,
       flexGrow: screenSize === 'mobile' || screenSize === 'tablet' ? 0 : 0
    }}>
      {/* Title */}
      <h3 style={{
        fontFamily: 'Sora',
        fontWeight: '600',
        fontSize: '14px',
        lineHeight: '1.4285714285714286em',
        color: '#CECFD2',
        margin: 0
      }}>
        {title}
      </h3>
      
      {/* Supporting text */}
      {supportingText && (
        <p style={{
          fontFamily: 'Sora',
          fontWeight: '400',
          fontSize: '14px',
          lineHeight: '1.4285714285714286em',
          color: '#CECFD2',
          margin: 0
        }}>
          {supportingText}
        </p>
      )}
    </div>
  );
}

// Componente para área dos inputs (lado direito)
interface FormFieldAreaProps {
  children: React.ReactNode;
  width?: number | string;
}

export function FormFieldArea({ children, width: _width }: FormFieldAreaProps) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      flex: '1 1 auto',
      minWidth: 0
    }}>
      {children}
    </div>
  );
}
