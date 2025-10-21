import React from 'react';
import { Check } from 'lucide-react';
import { AdminEntityOptionsMenu } from './admin-entity-options-menu';
import { useCopyFeedback } from '../../../utils/copy-feedback';

interface EntityField {
  label: string;
  value: string;
}

interface AdminEntityCardProps {
  entity: {
    [key: string]: any; // Para campos adicionais específicos
    nome: string;
    codigo: string;
    status: boolean;
    dataCriacao: string;
  };
  entityId: number;
  currentStatus: 'active' | 'inactive';
  isChecked: boolean;
  onToggleCheckbox: (entityId: string) => void;
  onToggleStatus: (entityId: string) => void;
  onView: (entityId: string | number) => void;
  onEdit?: (entityId: string) => void;
  onDuplicate?: (entityId: string) => void;
  onDelete?: (entityId: string) => void;
  viewButtonText: string;
  additionalFields: EntityField[];
  showChevronIcon?: boolean;
  onAddSubjects?: (entityId: string) => void;
  optionsMenuActions?: {
    onEdit?: () => void;
    onAddSubjects?: () => void;
    onDuplicate?: () => void;
    onDelete?: () => void;
    editText?: string;
    addSubjectsText?: string;
    duplicateText?: string;
    deleteText?: string;
  };
}

export const AdminEntityCard: React.FC<AdminEntityCardProps> = ({
  entity,
  entityId,
  currentStatus,
  isChecked,
  onToggleCheckbox,
  onToggleStatus,
  onView,
  viewButtonText,
  additionalFields,
  showChevronIcon = true,
  optionsMenuActions
}) => {
  const { handleCopyWithFeedback, isCopied } = useCopyFeedback();

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

  return (
    <div 
      className="admin-entity-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
        padding: '16px',
        background: '#252532',
        border: '1px solid #2C2C45',
        borderRadius: '12px',
        width: 'calc(33.333% - 16px)',
        minWidth: '300px',
        boxSizing: 'border-box'
      }}
    >
      {/* Card Content */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'stretch',
        gap: '16px'
      }}>
        {/* Header with Checkbox and Info */}
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
            onClick={() => onToggleCheckbox(entityId.toString())}
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

          {/* Entity Info */}
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
              {entity.nome}
            </h3>
            
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
                ID: {entity.codigo}
              </span>
              {showChevronIcon && (
                <button
                  onClick={() => handleCopyWithFeedback(entity.codigo)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '20px',
                    height: '20px',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '0.8';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                >
                  {isCopied(entity.codigo) ? (
                    <Check size={16} color="#CECFD2" strokeWidth={1.67} />
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.75002 1.66908C8.18748 1.6767 7.84977 1.70927 7.5767 1.8484C7.2631 2.00819 7.00813 2.26316 6.84834 2.57676C6.70921 2.84983 6.67664 3.18754 6.66902 3.75008M16.25 1.66908C16.8126 1.6767 17.1503 1.70927 17.4233 1.8484C17.7369 2.00819 17.9919 2.26316 18.1517 2.57676C18.2908 2.84983 18.3234 3.18754 18.331 3.75007M18.331 11.2501C18.3234 11.8126 18.2908 12.1503 18.1517 12.4234C17.9919 12.737 17.7369 12.992 17.4233 13.1518C17.1503 13.2909 16.8126 13.3235 16.25 13.3311M18.3334 6.66674V8.33341M11.6667 1.66675H13.3333M4.33335 18.3334H10.6667C11.6001 18.3334 12.0668 18.3334 12.4233 18.1518C12.7369 17.992 12.9919 17.737 13.1517 17.4234C13.3334 17.0669 13.3334 16.6002 13.3334 15.6667V9.33341C13.3334 8.39999 13.3334 7.93328 13.1517 7.57676C12.9919 7.26316 12.7369 7.00819 12.4233 6.8484C12.0668 6.66675 11.6001 6.66675 10.6667 6.66675H4.33335C3.39993 6.66675 2.93322 6.66675 2.5767 6.8484C2.2631 7.00819 2.00813 7.26316 1.84834 7.57676C1.66669 7.93328 1.66669 8.39999 1.66669 9.33341V15.6667C1.66669 16.6002 1.66669 17.0669 1.84834 17.4234C2.00813 17.737 2.2631 17.992 2.5767 18.1518C2.93322 18.3334 3.39993 18.3334 4.33335 18.3334Z" stroke="#CECFD2" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Status */}
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
              onClick={() => onToggleStatus(entityId.toString())}
              style={{
                display: 'flex',
                justifyContent: currentStatus === 'active' ? 'flex-end' : 'flex-start',
                alignItems: 'center',
                padding: '2px',
                width: '36px',
                height: '20px',
                background: currentStatus === 'active' ? '#F66649' : '#13161B',
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

        {/* Additional Fields */}
        {additionalFields.map((field, index) => (
          <div key={index} style={{
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
              {field.label}:
            </span>
            <span style={{
              fontFamily: 'Sora',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '1.4285714285714286em',
              color: '#F0F0F1'
            }}>
              {field.value}
            </span>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'stretch',
        gap: '16px'
      }}>
        {/* Button - Visualizar */}
        <button
          onClick={() => onView(entityId)}
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
          {viewButtonText}
        </button>

        {/* Options Menu */}
        {optionsMenuActions && (
          <AdminEntityOptionsMenu
            onEdit={optionsMenuActions.onEdit}
            onAddSubjects={optionsMenuActions.onAddSubjects}
            onDuplicate={optionsMenuActions.onDuplicate}
            onDelete={optionsMenuActions.onDelete}
            editText={optionsMenuActions.editText}
            addSubjectsText={optionsMenuActions.addSubjectsText}
            duplicateText={optionsMenuActions.duplicateText}
            deleteText={optionsMenuActions.deleteText}
          />
        )}
      </div>
    </div>
  );
};