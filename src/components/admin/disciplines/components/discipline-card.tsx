import React from 'react';
import { MoreVertical } from 'lucide-react';
import { Disciplina } from '../../../services/api/admin-disciplines.service';

interface DisciplineCardProps {
  discipline: Disciplina;
  currentStatus: 'active' | 'inactive'; // Status atual (pode ser diferente do status da API)
  onViewDiscipline: (id: string) => void;
  onOptionsClick: (id: string) => void;
  onToggleCheckbox?: (id: string) => void;
  onToggleStatus?: (id: string) => void;
  showChevronIcon?: boolean;
  isChecked?: boolean;
}

export const DisciplineCard: React.FC<DisciplineCardProps> = ({
  discipline,
  currentStatus,
  onViewDiscipline,
  onOptionsClick,
  onToggleCheckbox,
  onToggleStatus,
  showChevronIcon = true,
  isChecked = false
}) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const getSubjectsCountText = (totalAssuntos: number) => {
    const numberWords = ['zero', 'um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'];
    return `${totalAssuntos} (${numberWords[totalAssuntos] || totalAssuntos})`;
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '16px',
      padding: '16px',
      background: '#252532',
      border: '1px solid #2C2C45',
      borderRadius: '12px',
      width: '410.67px'
    }}>
      {/* Card - Campanha Ativa */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'stretch',
        gap: '16px'
      }}>
        {/* Frame 2121452829 - Header with Checkbox and Info */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          alignSelf: 'stretch',
          gap: '16px',
          padding: '16px',
          background: '#191923',
          borderRadius: '8px'
        }}>
          {/* Checkbox */}
          <div 
            onClick={() => onToggleCheckbox?.(discipline.idDisciplina.toString())}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '20px',
              height: '20px',
              border: '1px solid #373A41',
              borderRadius: '6px',
              background: isChecked ? '#C74228' : 'transparent',
              cursor: 'pointer',
              transition: 'background 0.2s ease'
            }}
          >
            {isChecked && (
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>

          {/* Frame 2121452842 - Discipline Info */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '2px',
            flex: 1
          }}>
            <h3 style={{
              fontFamily: 'Sora',
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '1.5em',
              color: '#ECECED',
              margin: 0
            }}>
              {discipline.nome}
            </h3>
            
            {/* Button with ID */}
            <div style={{
              display: 'flex',
              justifyContent: 'flex-start',
              alignItems: 'center',
              gap: '4px',
              height: '20px'
            }}>
              <span style={{
                fontFamily: 'Sora',
                fontWeight: 400,
                fontSize: '12px',
                lineHeight: '1.5em',
                color: '#CECFD2'
              }}>
                ID: {discipline.codigo}
              </span>
              {showChevronIcon && (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.75002 1.66908C8.18748 1.6767 7.84977 1.70927 7.5767 1.8484C7.2631 2.00819 7.00813 2.26316 6.84834 2.57676C6.70921 2.84983 6.67664 3.18754 6.66902 3.75008M16.25 1.66908C16.8126 1.6767 17.1503 1.70927 17.4233 1.8484C17.7369 2.00819 17.9919 2.26316 18.1517 2.57676C18.2908 2.84983 18.3234 3.18754 18.331 3.75007M18.331 11.2501C18.3234 11.8126 18.2908 12.1503 18.1517 12.4234C17.9919 12.737 17.7369 12.992 17.4233 13.1518C17.1503 13.2909 16.8126 13.3235 16.25 13.3311M18.3334 6.66674V8.33341M11.6667 1.66675H13.3333M4.33335 18.3334H10.6667C11.6001 18.3334 12.0668 18.3334 12.4233 18.1518C12.7369 17.992 12.9919 17.737 13.1517 17.4234C13.3334 17.0669 13.3334 16.6002 13.3334 15.6667V9.33341C13.3334 8.39999 13.3334 7.93328 13.1517 7.57676C12.9919 7.26316 12.7369 7.00819 12.4233 6.8484C12.0668 6.66675 11.6001 6.66675 10.6667 6.66675H4.33335C3.39993 6.66675 2.93322 6.66675 2.5767 6.8484C2.2631 7.00819 2.00813 7.26316 1.84834 7.57676C1.66669 7.93328 1.66669 8.39999 1.66669 9.33341V15.6667C1.66669 16.6002 1.66669 17.0669 1.84834 17.4234C2.00813 17.737 2.2631 17.992 2.5767 18.1518C2.93322 18.3334 3.39993 18.3334 4.33335 18.3334Z" stroke="#CECFD2" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
          </div>
        </div>

        {/* Frame 2121452752 - Status */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          alignSelf: 'stretch',
          gap: '6px'
        }}>
          <span style={{
            fontFamily: 'Sora',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '1.4285714285714286em',
            color: '#ECECED'
          }}>
            Status:
          </span>
          
          {/* Toggle component */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <div 
              onClick={() => onToggleStatus?.(discipline.idDisciplina.toString())}
              style={{
                display: 'flex',
                justifyContent: currentStatus === 'active' ? 'flex-end' : 'flex-start',
                alignItems: 'center',
                padding: '2px',
                width: '36px',
                height: '20px',
                background: currentStatus === 'active' ? '#F66649' : '#2D2D45',
                borderRadius: '9999px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{
                width: '16px',
                height: '16px',
                background: '#FFFFFF',
                borderRadius: '9999px',
                boxShadow: '0px 1px 2px -1px rgba(255, 255, 255, 0), 0px 1px 3px 0px rgba(255, 255, 255, 0)',
                transition: 'transform 0.2s ease'
              }} />
            </div>
            <span style={{
              fontFamily: 'Sora',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '1.4285714285714286em',
              color: '#CECFD2'
            }}>
              {currentStatus === 'active' ? 'Ativa' : 'Inativa'}
            </span>
          </div>
        </div>

        {/* Frame 2121452754 - Assuntos */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          alignSelf: 'stretch',
          gap: '6px'
        }}>
          <span style={{
            fontFamily: 'Sora',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '1.4285714285714286em',
            color: '#ECECED'
          }}>
            Assuntos:
          </span>
          <span style={{
            fontFamily: 'Sora',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '1.4285714285714286em',
            color: '#F0F0F1'
          }}>
            {getSubjectsCountText(discipline.totalAssuntos)}
          </span>
        </div>

        {/* Frame 2121452830 - Criada em */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          alignSelf: 'stretch',
          gap: '6px'
        }}>
          <span style={{
            fontFamily: 'Sora',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '1.4285714285714286em',
            color: '#ECECED'
          }}>
            Criada em:
          </span>
          <span style={{
            fontFamily: 'Sora',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '1.4285714285714286em',
            color: '#F0F0F1'
          }}>
            {formatDate(discipline.dataCriacao)}
          </span>
        </div>
      </div>

      {/* Frame 2121452843 - Actions */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'stretch',
        gap: '16px'
      }}>
        {/* Button - Visualizar Disciplina */}
        <button
          onClick={() => onViewDiscipline(discipline.idDisciplina.toString())}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '4px',
            padding: '10px 14px',
            background: '#562524', // Vermelho escuro (estado normal)
            border: '1px solid #C74228', // Borda vermelha clara
            borderRadius: '8px',
            fontFamily: 'Sora',
            fontWeight: 600,
            fontSize: '14px',
            lineHeight: '1.4285714285714286em',
            color: '#FFFFFF',
            cursor: 'pointer',
            boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
            flex: 1
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#C74228'; // Vermelho claro no hover
            e.currentTarget.style.border = '1px solid transparent'; // Mantém o tamanho da borda
            e.currentTarget.style.backgroundImage = 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)'; // Adiciona gradiente
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#562524'; // Volta ao vermelho escuro
            e.currentTarget.style.border = '1px solid #C74228'; // Volta à borda sólida
            e.currentTarget.style.backgroundImage = 'none'; // Remove gradiente
          }}
        >
          Visualizar Disciplina
        </button>

        {/* Options component */}
        <button
          onClick={() => onOptionsClick(discipline.idDisciplina.toString())}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px',
            width: '40px',
            background: '#2D2D45',
            border: '1px solid #272737',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#363946';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#2D2D45';
          }}
        >
          <MoreVertical size={16} color="#FFFFFF" strokeWidth={1.67} />
        </button>
      </div>
    </div>
  );
};