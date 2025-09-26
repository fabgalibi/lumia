import React from 'react';

interface FormSectionProps {
  children: React.ReactNode;
  withDivider?: boolean;
}

// Componente estrutural principal que organiza seções do formulário
export function FormSection({ children, withDivider = true }: FormSectionProps) {
  return (
    <>
      {/* Content section - conforme Figma: row layout, label esquerda + input direita */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: '40px',
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
}

export function SectionLabel({ title, supportingText, width = 300 }: SectionLabelProps) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: supportingText ? '6px' : '4px',
      width: `${width}px`,
      minWidth: `${width}px`,
      maxWidth: `${width}px`,
      flexShrink: 0,
      flexGrow: 0
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

export function FormFieldArea({ children, width }: FormFieldAreaProps) {
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
