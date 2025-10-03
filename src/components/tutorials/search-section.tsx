import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchSectionProps {
  className?: string;
  onSearch?: (query: string) => void;
  onSuggestionClick?: (suggestion: string) => void;
}

export const SearchSection: React.FC<SearchSectionProps> = ({ 
  className = '',
  onSearch,
  onSuggestionClick
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    if (onSuggestionClick) {
      onSuggestionClick(suggestion);
    } else if (onSearch) {
      onSearch(suggestion);
    }
  };

  return (
    <div 
      className={`relative rounded-xl overflow-hidden ${className}`}
          style={{
            width: isDesktop ? '100%' : '100%',
            maxWidth: isDesktop ? '1200px' : '100%',
            minWidth: isDesktop ? '800px' : '343px',
            height: isDesktop ? '218px' : 'auto',
            minHeight: isDesktop ? '218px' : '218px',
            background: 'rgba(223, 106, 23, 1)',
            padding: isDesktop ? '32px' : '16px',
            borderRadius: '12px',
            border: isDesktop ? '1px solid transparent' : 'none',
            backgroundImage: isDesktop ? 'linear-gradient(rgba(223, 106, 23, 1), rgba(223, 106, 23, 1)), linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)' : 'none',
            backgroundOrigin: isDesktop ? 'border-box' : 'initial',
            backgroundClip: isDesktop ? 'padding-box, border-box' : 'initial',
            opacity: 1
          }}
    >
      {/* Content Container - desktop: à esquerda, mobile: embaixo da imagem */}
      <div 
        className="relative flex flex-col w-full"
        style={{ 
          width: isDesktop ? '406px' : '100%',
          maxWidth: '406px',
          height: '100%',
          gap: isDesktop ? '16px' : '12px',
          paddingTop: isDesktop ? '0' : '112px', // No desktop não precisa de padding top
          position: isDesktop ? 'absolute' : 'relative',
          left: isDesktop ? '32px' : '0',
          top: isDesktop ? '32px' : '0'
        }}
      >
        {/* Título */}
        <div
          style={{
            width: '100%',
            fontFamily: 'Sora',
            fontWeight: '600',
            fontStyle: 'SemiBold',
            fontSize: isDesktop ? '24px' : '16px', // 24px no desktop, text-md no mobile
            lineHeight: isDesktop ? '1.333em' : '1.5em', // Line height/display-xs no desktop
            letterSpacing: '0%',
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
            gap: isDesktop ? '16px' : '12px'
          }}
        >
          {/* Input Field */}
          <form onSubmit={handleSearch}>
            <div 
              style={{
                width: '100%',
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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  flex: 1,
                  fontFamily: 'Sora',
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '1.5em',
                  color: '#D5D7DA'
                }}
              />
            </div>
          </form>
          
              {/* Suggestions */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: isDesktop ? '8px' : '8px'
                }}
              >
            <span 
              style={{
                fontFamily: 'Sora',
                fontWeight: '600',
                fontSize: isDesktop ? '12px' : '12px', // text-xs em ambos
                lineHeight: '1.5em',
                letterSpacing: '0%',
                color: '#FFFFFF'
              }}
            >
              Sugestões:
            </span>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    gap: isDesktop ? '6px' : '6px'
                  }}
                >
              <button 
                onClick={() => handleSuggestionClick('Primeiros passos')}
                style={{
                  background: 'none',
                  border: 'none',
                  fontFamily: 'Sora',
                  fontWeight: isDesktop ? '600' : '400', // Semibold no desktop, Regular no mobile
                  fontSize: '12px', // text-xs
                  lineHeight: '1.5em',
                  letterSpacing: '0%',
                  textDecoration: 'underline',
                  textDecorationStyle: 'solid',
                  textDecorationThickness: '0%',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                  padding: '0',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = '#F66649';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = '#FFFFFF';
                }}
              >
                Primeiros passos
              </button>
              <button 
                onClick={() => handleSuggestionClick('Funções principais')}
                style={{
                  background: 'none',
                  border: 'none',
                  fontFamily: 'Sora',
                  fontWeight: isDesktop ? '600' : '400', // Semibold no desktop, Regular no mobile
                  fontSize: '12px', // text-xs
                  lineHeight: '1.5em',
                  letterSpacing: '0%',
                  textDecoration: 'underline',
                  textDecorationStyle: 'solid',
                  textDecorationThickness: '0%',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                  padding: '0',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = '#F66649';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = '#FFFFFF';
                }}
              >
                Funções principais
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Imagem - mobile: canto superior esquerdo, desktop: direita e maior */}
      <img
        src="/images/tutorials/tutorial-illustration-5ac14b.png"
        alt="Ilustração de tutoriais"
        className="w-20 h-20 sm:w-24 sm:h-24"
        style={{
          position: 'absolute',
          left: isDesktop ? 'auto' : '16px',
          right: isDesktop ? '32px' : 'auto',
          top: isDesktop ? '9px' : '16px', // Alinhado com o top do container
          width: isDesktop ? '200px' : '96px',
          height: isDesktop ? '200px' : '96px',
          objectFit: 'cover',
          zIndex: 1
        }}
      />
    </div>
  );
};