import React from 'react';
import type { Goal } from '@/types/goal';

interface FooterProps {
  goal: Goal;
  isFullscreen: boolean;
  onPularMeta: () => void;
  onConcluirMeta: () => void;
}

export const GoalDetailsFooter: React.FC<FooterProps> = ({
  goal,
  isFullscreen,
  onPularMeta,
  onConcluirMeta
}) => {
  // Só mostra o footer se a meta não estiver concluída
  if (goal.status === 'concluido') {
    return null;
  }

  return (
    <div
      className={`flex flex-shrink-0 ${isFullscreen ? 'flex-row justify-between items-center' : 'flex-row gap-4 lg:flex-col lg:sm:flex-row'}`}
      style={{
        background: isFullscreen ? 'rgba(32, 32, 40, 1)' : 'rgba(32, 32, 40, 1)',
        borderTop: '1px solid #2C2C45',
        borderBottomLeftRadius: isFullscreen ? '16px' : '0px',
        borderBottomRightRadius: isFullscreen ? '16px' : '0px',
        padding: isFullscreen ? '32px 24px' : '24px 16px 16px',
        gap: '16px'
      }}
    >
      {isFullscreen ? (
        <>
          {/* Link de problema */}
          <a 
            href="#"
            className="flex items-center gap-1 hover:opacity-80 transition-all duration-200 cursor-pointer"
            style={{
              background: 'transparent',
              border: 'none',
              borderRadius: '8px',
              padding: '10px 16px',
              gap: '4px',
              textDecoration: 'none'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" stroke="#F0F0F1" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 6V10" stroke="#F0F0F1" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 14H10.01" stroke="#F0F0F1" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span 
              style={{
                fontFamily: 'Sora',
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '1.4285714285714286em',
                color: '#F0F0F1'
              }}
            >
              Houve algum problema?
            </span>
          </a>

          {/* Botões de ação */}
          <div className="flex items-center gap-4">
            <button
              onClick={onPularMeta}
              className="flex items-center justify-center hover:bg-[#6B1A0F] transition-all duration-200 cursor-pointer"
              style={{
                gap: '6px',
                padding: '12px 18px',
                background: '#55160C',
                border: '1px solid #912018',
                borderRadius: '8px',
                boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)',
                width: '276.5px'
              }}
            >
              <span 
                style={{
                  fontFamily: 'Sora',
                  fontWeight: 600,
                  fontSize: '16px',
                  lineHeight: '1.5em',
                  color: '#FECDCA'
                }}
              >
                Pular meta
              </span>
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5832 4.16675V15.8334M7.08276 14.9337L11.9484 11.0412C12.3933 10.6853 12.6157 10.5074 12.6962 10.2924C12.7668 10.1039 12.7668 9.89624 12.6962 9.70775C12.6157 9.49277 12.3933 9.31482 11.9484 8.95892L7.08276 5.06642C6.38929 4.51164 6.04255 4.23425 5.75074 4.23394C5.49695 4.23366 5.25688 4.34905 5.09855 4.54739C4.9165 4.77546 4.9165 5.2195 4.9165 6.10758V13.8926C4.9165 14.7807 4.9165 15.2247 5.09855 15.4528C5.25688 15.6511 5.49695 15.7665 5.75074 15.7662C6.04255 15.7659 6.38929 15.4885 7.08276 14.9337Z" stroke="#FECDCA" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            
            <button
              onClick={onConcluirMeta}
              className="flex items-center justify-center hover:bg-[#0A4A2E] transition-all duration-200 cursor-pointer"
              style={{
                gap: '6px',
                padding: '12px 18px',
                background: '#085D3A',
                border: '2px solid transparent',
                backgroundImage: 'linear-gradient(#085D3A, #085D3A), linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
                borderRadius: '8px',
                boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)',
                width: '276.5px'
              }}
            >
              <span 
                style={{
                  fontFamily: 'Sora',
                  fontWeight: 600,
                  fontSize: '16px',
                  lineHeight: '1.5em',
                  color: '#FFFFFF'
                }}
              >
                Concluir meta
              </span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9 11L12 14L22 4M16 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V12"
                  stroke="#FFFFFF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </>
      ) : (
        <>
          <button
            onClick={onPularMeta}
            className="flex items-center justify-center hover:bg-[#6B1A0F] transition-all duration-200 cursor-pointer flex-1 lg:flex-1"
            style={{
              gap: '6px',
              padding: '12px 18px',
              background: '#55160C',
              border: '1px solid #912018',
              borderRadius: '8px',
              boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)',
              width: '100%'
            }}
          >
            <span 
              style={{
                fontFamily: 'Sora',
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '1.5em',
                color: '#FECDCA'
              }}
            >
              Pular meta
            </span>
            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.5832 4.16675V15.8334M7.08276 14.9337L11.9484 11.0412C12.3933 10.6853 12.6157 10.5074 12.6962 10.2924C12.7668 10.1039 12.7668 9.89624 12.6962 9.70775C12.6157 9.49277 12.3933 9.31482 11.9484 8.95892L7.08276 5.06642C6.38929 4.51164 6.04255 4.23425 5.75074 4.23394C5.49695 4.23366 5.25688 4.34905 5.09855 4.54739C4.9165 4.77546 4.9165 5.2195 4.9165 6.10758V13.8926C4.9165 14.7807 4.9165 15.2247 5.09855 15.4528C5.25688 15.6511 5.49695 15.7665 5.75074 15.7662C6.04255 15.7659 6.38929 15.4885 7.08276 14.9337Z" stroke="#FECDCA" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <button
            onClick={onConcluirMeta}
            className="flex items-center justify-center hover:bg-[#0A4A2E] transition-all duration-200 cursor-pointer flex-1 lg:flex-1"
            style={{
              gap: '6px',
              padding: '12px 18px',
              background: '#085D3A',
              border: '2px solid transparent',
              backgroundImage: 'linear-gradient(#085D3A, #085D3A), linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)',
              backgroundOrigin: 'border-box',
              backgroundClip: 'padding-box, border-box',
              borderRadius: '8px',
              boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)',
              width: '100%'
            }}
          >
            <span 
              style={{
                fontFamily: 'Sora',
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '1.5em',
                color: '#FFFFFF'
              }}
            >
              Concluir meta
            </span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9 11L12 14L22 4M16 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V12"
                stroke="#FFFFFF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </>
      )}
    </div>
  );
};
