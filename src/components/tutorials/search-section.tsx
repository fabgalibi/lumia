import React from 'react';
import { Search } from 'lucide-react';

interface SearchSectionProps {
  className?: string;
}

export const SearchSection: React.FC<SearchSectionProps> = ({ className = '' }) => {
      return (
        <div 
          className={`relative rounded-xl overflow-hidden ${className}`}
          style={{
            width: '100%',
            minWidth: '400px',
            height: '218px',
            background: 'rgba(223, 106, 23, 1)'
          }}
        >
          {/* Content Container - responsive width */}
          <div 
            className="relative flex flex-col"
            style={{ 
              width: '100%',
              maxWidth: '406px',
              height: '100%',
              marginLeft: '32px',
              paddingTop: '32px',
              gap: '16px'
            }}
          >
        {/* Título */}
        <div
          style={{
            width: '100%',
            fontFamily: 'var(--font-sora)',
            fontSize: '24px',
            fontWeight: '600',
            lineHeight: '32px',
            color: '#FFFFFF'
          }}
        >
          Descubra como aproveitar todos os recursos da plataforma.
        </div>
        
        {/* Content Frame */}
        <div 
          className="flex flex-col"
          style={{
            width: '100%',
            gap: '16px'
          }}
        >
          {/* Input Field */}
          <div 
            style={{
              width: '100%',
              height: '40px',
              background: '#2D2D3B',
              border: '1px solid #2D2D36',
              borderRadius: '8px',
              boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)',
              padding: '8px 12px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <Search 
              style={{
                width: '20px',
                height: '20px',
                color: '#94979C',
                strokeWidth: '1.67px'
              }}
            />
            <input
              type="text"
              placeholder="Buscar"
              style={{
                background: 'transparent',
                border: 'none',
                outline: 'none',
                flex: 1,
                fontFamily: 'var(--font-sora)',
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '24px',
                color: '#D5D7DA'
              }}
            />
          </div>
          
          {/* Suggestions */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            <span 
              style={{
                fontFamily: 'var(--font-sora)',
                fontSize: '12px',
                fontWeight: '600',
                lineHeight: '18px',
                color: '#FFFFFF'
              }}
            >
              Sugestões:
            </span>
            <div 
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                gap: '6px'
              }}
            >
              <button 
                style={{
                  background: 'none',
                  border: 'none',
                  fontFamily: 'var(--font-sora)',
                  fontSize: '12px',
                  fontWeight: '600',
                  lineHeight: '18px',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '6px'
                }}
                onMouseOver={(e) => e.target.style.color = '#F66649'}
                onMouseOut={(e) => e.target.style.color = '#FFFFFF'}
              >
                Primeiros passos
              </button>
              <button 
                style={{
                  background: 'none',
                  border: 'none',
                  fontFamily: 'var(--font-sora)',
                  fontSize: '12px',
                  fontWeight: '600',
                  lineHeight: '18px',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '6px'
                }}
                onMouseOver={(e) => e.target.style.color = '#F66649'}
                onMouseOut={(e) => e.target.style.color = '#FFFFFF'}
              >
                Funções principais
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Imagem posicionada à direita */}
      <img 
        src="/images/tutorials/tutorial-illustration-5ac14b.png"
        alt="Ilustração de tutoriais"
        style={{
          position: 'absolute',
          right: '0',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '300px',
          height: 'auto'
        }}
      />
    </div>
  );
};
