import React from 'react';
// import { Container, Text, colors } from '@/components/ui'; // TODO: Migrar estilos

interface FormSectionProps {
  children: React.ReactNode;
  withDivider?: boolean;
  screenSize?: 'mobile' | 'tablet' | 'desktop';
  gap?: 'default' | 'large' | 'small'; // default = 40px, large = 64px, small = 32px
}

// Componente estrutural principal que organiza seções do formulário
export function FormSection({ children, withDivider = true, screenSize = 'desktop', gap = 'default' }: FormSectionProps) {
  return (
    <>
       {/* Content section - Desktop: row layout, Mobile/Tablet: column layout */}
       <div style={{
         display: 'flex',
         flexDirection: screenSize === 'desktop' ? 'row' : 'column', // Apenas desktop usa row, mobile/tablet usam column
         alignItems: screenSize === 'desktop' ? 'center' : 'stretch', // Apenas desktop usa center, mobile/tablet usam stretch
         gap: screenSize === 'desktop' ? (gap === 'large' ? '64px' : gap === 'small' ? '8px' : '40px') : '12px', // Desktop usa gaps variáveis, mobile/tablet usam 12px
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
  required?: boolean;
}

export function SectionLabel({ title, supportingText, width = 300, screenSize = 'desktop', required = false }: SectionLabelProps) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
       width: screenSize === 'desktop' ? `${width}px` : '100%', // Apenas desktop usa largura fixa, mobile/tablet usam 100%
       minWidth: screenSize === 'desktop' ? `${width}px` : 'auto', // Apenas desktop usa minWidth fixa, mobile/tablet usam auto
       maxWidth: screenSize === 'desktop' ? `${width}px` : '100%', // Apenas desktop usa maxWidth fixa, mobile/tablet usam 100%
       flexShrink: screenSize === 'desktop' ? 0 : 1, // Apenas desktop não encolhe, mobile/tablet encolhem
       flexGrow: screenSize === 'desktop' ? 0 : 0 // Todos não crescem
    }}>
      {/* Title */}
      <h3 style={{
        fontFamily: 'Inter' /* MIGRATED */,
        fontWeight: '600',
        fontSize: '14px',
        lineHeight: '1.4285714285714286em',
        color: '#CECFD2',
        margin: 0
      }}>
        {title}
        {required && (
          <span style={{
            color: '#C74228',
            marginLeft: '4px'
          }}>
            *
          </span>
        )}
      </h3>
      
      {/* Supporting text */}
      {supportingText && (
        <p style={{
          fontFamily: 'Inter' /* MIGRATED */,
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
  screenSize?: 'mobile' | 'tablet' | 'desktop';
}

export function FormFieldArea({ children, width: _width, screenSize = 'desktop' }: FormFieldAreaProps) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '6px',
      flex: '1', // Preenche o espaço restante (conforme Figma)
      minWidth: 0, // Permite que o flex item encolha abaixo de seu tamanho de conteúdo
      width: '100%', // Sempre 100% para mobile/tablet, desktop também usa flex
      maxWidth: screenSize === 'desktop' ? '512px' : '100%' // Desktop: máximo 512px conforme Figma
    }}>
      {children}
    </div>
  );
}
