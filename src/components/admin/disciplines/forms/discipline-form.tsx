import React from 'react';
import { Copy, Check } from 'lucide-react';
import { useCopyFeedback } from '../../../../utils/copy-feedback';

interface DisciplineFormProps {
  nomeDisciplina: string;
  assunto: string;
  onNomeChange: (value: string) => void;
  onAssuntoChange: (value: string) => void;
  onAddSubject: () => void;
  onAssuntoKeyDown: (e: React.KeyboardEvent) => void;
  // Props para modo de edição
  isEditMode?: boolean;
  codigoDisciplina?: string;
}

export const DisciplineForm: React.FC<DisciplineFormProps> = ({
  nomeDisciplina,
  assunto,
  onNomeChange,
  onAssuntoChange,
  onAddSubject,
  onAssuntoKeyDown,
  isEditMode = false,
  codigoDisciplina
}) => {
  const { handleCopyWithFeedback, isCopied } = useCopyFeedback();

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignSelf: 'stretch',
      gap: '20px'
    }}>
      {/* Nome da Disciplina */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '6px'
      }}>
        <label style={{
          fontFamily: 'Sora',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '1.43em',
          color: '#CECFD2',
          display: 'flex',
          alignItems: 'center',
          gap: '2px'
        }}>
          Nome da disciplina
          <span style={{ color: '#F97066' }}>*</span>
        </label>
        
        {isEditMode && codigoDisciplina ? (
          // Modo de edição: input editável + código não editável com botão de copiar
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 14px',
            backgroundColor: '#2D2D3B',
            border: '1px solid #373A41',
            borderRadius: '8px',
            boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              flex: 1
            }}>
              <span style={{
                fontFamily: 'Sora',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '1.5em',
                color: '#F7F7F7'
              }}>
                {nomeDisciplina}
              </span>
              <span style={{
                fontFamily: 'Sora',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '1.4285714285714286em',
                color: '#CECFD2'
              }}>
                ({codigoDisciplina})
              </span>
            </div>
            <button
              onClick={() => handleCopyWithFeedback(codigoDisciplina)}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '4px',
                backgroundColor: 'transparent',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#2D2D3B';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              {isCopied(codigoDisciplina) ? (
                <Check size={16} color="#CECFD2" strokeWidth={1.5} />
              ) : (
                <Copy size={16} color="#CECFD2" strokeWidth={1.5} />
              )}
            </button>
          </div>
        ) : (
          // Modo de cadastro: input normal
          <input
            type="text"
            value={nomeDisciplina}
            onChange={(e) => onNomeChange(e.target.value)}
            placeholder="Insira o nome da disciplina"
            style={{
              width: '100%',
              padding: '10px 14px',
              backgroundColor: '#2D2D3B',
              border: '1px solid #373A41',
              borderRadius: '8px',
              color: '#CECFD2',
              fontSize: '16px',
              fontFamily: 'Sora',
              fontWeight: 400,
              lineHeight: '1.5em',
              textAlign: 'left',
              outline: 'none',
              boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)'
            }}
          />
        )}
      </div>

      {/* Assunto */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-end',
        gap: '16px'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          flex: 1
        }}>
          <label style={{
            fontFamily: 'Sora',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '1.43em',
            color: '#CECFD2'
          }}>
            Assunto
          </label>
          
          <input
            type="text"
            value={assunto}
            onChange={(e) => onAssuntoChange(e.target.value)}
            onKeyDown={onAssuntoKeyDown}
            placeholder="Insira o assunto que deseja adicionar"
            style={{
              width: '100%',
              padding: '10px 14px',
              backgroundColor: '#2D2D3B',
              border: '1px solid #373A41',
              borderRadius: '8px',
              color: '#CECFD2',
              fontSize: '16px',
              fontFamily: 'Sora',
              fontWeight: 400,
              lineHeight: '1.5em',
              textAlign: 'left',
              outline: 'none',
              boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)'
            }}
          />
        </div>
        
        <button
          onClick={onAddSubject}
          disabled={!assunto.trim()}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '6px',
            padding: '10px 16px',
            backgroundColor: assunto.trim() ? '#562524' : '#2D2D45',
            border: assunto.trim() ? '1px solid #C74228' : '1px solid #373A41',
            borderRadius: '8px',
            color: '#FFFFFF',
            fontSize: '16px',
            fontFamily: 'Sora',
            fontWeight: 600,
            cursor: assunto.trim() ? 'pointer' : 'not-allowed',
            opacity: assunto.trim() ? 1 : 0.5,
            boxShadow: assunto.trim() ? '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)' : 'none'
          }}
          onMouseEnter={(e) => {
            if (assunto.trim()) {
              e.currentTarget.style.background = '#C74228'; // Vermelho claro no hover
              e.currentTarget.style.border = '1px solid transparent'; // Mantém o tamanho da borda
              e.currentTarget.style.backgroundImage = 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)'; // Adiciona gradiente
            }
          }}
          onMouseLeave={(e) => {
            if (assunto.trim()) {
              e.currentTarget.style.background = '#562524'; // Volta ao vermelho escuro
              e.currentTarget.style.border = '1px solid #C74228'; // Volta à borda sólida
              e.currentTarget.style.backgroundImage = 'none'; // Remove gradiente
            }
          }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 4.16667V15.8333M4.16667 10H15.8333" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Adicionar
        </button>
      </div>
    </div>
  );
};
