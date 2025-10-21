import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { useCopyFeedback } from '../../../../utils/copy-feedback';

interface SubjectsListProps {
  subjects: string[];
  onRemoveSubject: (index: number) => void;
  onUpdateSubject?: (index: number, value: string) => void;
  // Props para modo de edição
  isEditMode?: boolean;
  subjectsWithCodes?: { nome: string; codigo: string }[];
}

export const SubjectsList: React.FC<SubjectsListProps> = ({
  subjects,
  onRemoveSubject,
  onUpdateSubject,
  isEditMode = false,
  subjectsWithCodes = []
}) => {
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingValue, setEditingValue] = useState('');
  const { handleCopyWithFeedback, isCopied } = useCopyFeedback();

  const handleEdit = (index: number, currentValue: string) => {
    setEditingIndex(index);
    setEditingValue(currentValue);
  };

  const handleSave = (index: number) => {
    if (editingValue.trim() && onUpdateSubject) {
      onUpdateSubject(index, editingValue.trim());
    }
    setEditingIndex(null);
    setEditingValue('');
  };

  const handleCancel = () => {
    setEditingIndex(null);
    setEditingValue('');
  };

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Enter') {
      handleSave(index);
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: subjects.length === 0 ? 'center' : 'flex-start',
      alignItems: 'center',
      gap: '16px',
      width: '100%'
    }}>
      {/* Divider */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        width: '569px',
        height: '20px'
      }}>
        <div style={{
          flex: 1,
          height: '1px',
          backgroundColor: '#22262F'
        }} />
        <span style={{
          fontFamily: 'Sora',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '1.43em',
          color: '#94979C',
          whiteSpace: 'nowrap'
        }}>
          Assuntos adicionados ({subjects.length}/60)
        </span>
        <div style={{
          flex: 1,
          height: '1px',
          backgroundColor: '#22262F'
        }} />
      </div>

        {/* Subjects List - Container único conforme Figma */}
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: subjects.length === 0 ? 'center' : 'flex-start',
            alignItems: 'stretch',
            alignSelf: 'stretch',
            gap: '16px',
            backgroundColor: '#191923',
            border: '1px solid #22262F',
            borderRadius: '12px',
            padding: subjects.length === 0 ? '16px' : '24px 32px 24px 24px',
            height: '412px', // Altura fixa conforme Figma
            position: 'relative',
            overflow: 'hidden' // Para controlar melhor o scroll
          }}
          className="subjects-list-scrollbar"
        >
          {subjects.length === 0 ? (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px'
            }}>
              <h3 style={{
                fontFamily: 'Sora',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '1.5em',
                color: '#F7F7F7',
                margin: 0,
                textAlign: 'center'
              }}>
                Nenhum assunto adicionado
              </h3>
              <p style={{
                fontFamily: 'Sora',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '1.4285714285714286em',
                color: '#CECFD2',
                margin: 0,
                textAlign: 'center'
              }}>
                Insira um ou mais assuntos para a disciplina e elas aparecerão aqui para você.
              </p>
            </div>
          ) : (
            <>
              {subjects.map((subject, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    gap: '16px'
                  }}
                >
                  {/* Drag handle placeholder */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 0px',
                    cursor: 'grab',
                    minHeight: '48px', // Mesma altura mínima do input
                    justifyContent: 'center',
                    alignSelf: 'flex-end'
                  }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 6H21M3 12H21M3 18H21" stroke="#CECFD2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>

                  {/* Subject input field */}
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
                      Assunto {index + 1}
                    </label>

                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '10px 14px',
                      backgroundColor: '#2D2D3B',
                      border: '1px solid #373A41',
                      borderRadius: '8px',
                      boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)',
                      minHeight: '48px' // Altura mínima para consistência
                    }}>
                      {editingIndex === index ? (
                        <input
                          type="text"
                          value={editingValue}
                          onChange={(e) => setEditingValue(e.target.value)}
                          onKeyDown={(e) => handleKeyDown(e, index)}
                          onBlur={() => handleSave(index)}
                          autoFocus
                          style={{
                            flex: 1,
                            background: 'transparent',
                            border: 'none',
                            outline: 'none',
                            color: '#F7F7F7',
                            fontSize: '16px',
                            fontFamily: 'Sora',
                            fontWeight: 400,
                            lineHeight: '1.5em'
                          }}
                        />
                      ) : (
                        <>
                          {/* Texto principal e código - alinhados horizontalmente */}
                          <div 
                            onClick={() => handleEdit(index, subject)}
                            style={{ 
                              display: 'flex', 
                              alignItems: 'center', 
                              gap: '6px',
                              flex: 1,
                              cursor: 'text',
                              padding: '2px 0'
                            }}
                          >
                            <span style={{
                              color: '#F7F7F7',
                              fontSize: '16px',
                              fontFamily: 'Sora',
                              fontWeight: 400,
                              lineHeight: '1.5em'
                            }}>
                              {subject}
                            </span>
                            {isEditMode && subjectsWithCodes[index]?.codigo && (
                              <span style={{
                                color: '#CECFD2',
                                fontSize: '14px',
                                fontFamily: 'Sora',
                                fontWeight: 400,
                                lineHeight: '1.4285714285714286em'
                              }}>
                                ({subjectsWithCodes[index].codigo})
                              </span>
                            )}
                          </div>

                          {/* Botões de ação - alinhados à direita */}
                          {isEditMode && subjectsWithCodes[index]?.codigo && (
                            <button
                              onClick={() => handleCopyWithFeedback(subjectsWithCodes[index].codigo)}
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
                              {isCopied(subjectsWithCodes[index].codigo) ? (
                                <Check size={16} color="#CECFD2" strokeWidth={1.5} />
                              ) : (
                                <Copy size={16} color="#CECFD2" strokeWidth={1.5} />
                              )}
                            </button>
                          )}
                        </>
                      )}

                      <button
                        onClick={() => onRemoveSubject(index)}
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          padding: '4px',
                          background: 'transparent',
                          border: 'none',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          color: '#E66B59'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(230, 107, 89, 0.1)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                      >
                        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.66667 4.00016V3.46683C9.66667 2.72009 9.66667 2.34672 9.52134 2.06151C9.39351 1.81063 9.18954 1.60665 8.93865 1.47882C8.65344 1.3335 8.28007 1.3335 7.53333 1.3335H6.46667C5.71993 1.3335 5.34656 1.3335 5.06135 1.47882C4.81046 1.60665 4.60649 1.81063 4.47866 2.06151C4.33333 2.34672 4.33333 2.72009 4.33333 3.46683V4.00016M5.66667 7.66683V11.0002M8.33333 7.66683V11.0002M1 4.00016H13M11.6667 4.00016V11.4668C11.6667 12.5869 11.6667 13.147 11.4487 13.5748C11.2569 13.9511 10.951 14.2571 10.5746 14.4488C10.1468 14.6668 9.58677 14.6668 8.46667 14.6668H5.53333C4.41323 14.6668 3.85318 14.6668 3.42535 14.4488C3.04903 14.2571 2.74307 13.9511 2.55132 13.5748C2.33333 13.147 2.33333 12.5869 2.33333 11.4668V4.00016" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
    </div>
  );
};
