import React from 'react';
import { HelpCircle, ArrowUpRight } from 'lucide-react';

interface HelpSectionProps {
  className?: string;
}

export const HelpSection: React.FC<HelpSectionProps> = ({ className = '' }) => {
  return (
    <div 
      className={`relative rounded-xl overflow-hidden ${className}`}
      style={{
        width: '100%',
        minWidth: '280px',
        height: '218px',
        background: '#2D2D45',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        borderRadius: '12px',
        padding: '24px 20px 24px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}
    >
      {/* Header */}
      <div 
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          gap: '16px'
        }}
      >
        {/* Ícone de ajuda */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '56px',
            height: '56px',
            background: '#232332',
            border: '1px solid #323251',
            borderRadius: '206px',
            padding: '16px'
          }}
        >
          <HelpCircle 
            style={{
              width: '24px',
              height: '24px',
              color: '#FFFFFF',
              strokeWidth: '2px'
            }}
          />
        </div>
        
        {/* Botão */}
        <button 
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '4px',
            padding: '10px 0px',
            background: 'transparent',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
        >
          <span 
            style={{
              fontFamily: 'var(--font-sora)',
              fontSize: '14px',
              fontWeight: '600',
              lineHeight: '20px',
              color: '#F66649',
              padding: '0px 2px'
            }}
          >
            Ir para central
          </span>
          <ArrowUpRight 
            style={{
              width: '20px',
              height: '20px',
              color: '#F66649',
              strokeWidth: '1.67px'
            }}
          />
        </button>
      </div>
      
      {/* Content */}
      <div 
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          gap: '6px'
        }}
      >
        <h3 
          style={{
            fontFamily: 'var(--font-sora)',
            fontSize: '18px',
            fontWeight: '600',
            lineHeight: '28px',
            color: '#FFFFFF',
            width: '100%',
            textAlign: 'left'
          }}
        >
          Possui alguma dúvida?
        </h3>
        <p 
          style={{
            fontFamily: 'var(--font-sora)',
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '20px',
            color: '#FFFFFF',
            width: '100%',
            textAlign: 'left'
          }}
        >
          Acesse a central de ajuda ou fale com nosso time para resolver qualquer questão em poucos cliques.
        </p>
      </div>
    </div>
  );
};