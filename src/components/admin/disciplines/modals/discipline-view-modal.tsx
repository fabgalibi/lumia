import React, { useState, useEffect } from 'react';
import { X, Copy, Edit } from 'lucide-react';
import { adminDisciplinesService, DisciplinaDetalhes } from '../../../../services/api/admin-disciplines.service';
import { DisciplineRegistrationModal } from './discipline-registration-modal';

interface DisciplineViewModalProps {
  isOpen: boolean;
  onClose: () => void;
  disciplineId: number;
}

export const DisciplineViewModal: React.FC<DisciplineViewModalProps> = ({
  isOpen,
  onClose,
  disciplineId
}) => {
  const [discipline, setDiscipline] = useState<DisciplinaDetalhes | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editInitialData, setEditInitialData] = useState<{
    nome: string;
    assuntos: { id: number; nome: string; codigo: string }[];
  } | null>(null);

  useEffect(() => {
    if (isOpen && disciplineId) {
      fetchDisciplineDetails();
    }
  }, [isOpen, disciplineId]);

  const fetchDisciplineDetails = async () => {
    try {
      setLoading(true);
      setError(null);
      const details = await adminDisciplinesService.getDisciplineDetails(disciplineId);
      setDiscipline(details);
    } catch (err: any) {
      console.error('Erro ao buscar detalhes da disciplina:', err);
      setError(err.message || 'Erro ao carregar detalhes da disciplina');
    } finally {
      setLoading(false);
    }
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    // Aqui você pode adicionar uma notificação de sucesso
  };

  const handleEdit = () => {
    if (discipline) {
      setEditInitialData({
        nome: discipline.nome,
        assuntos: discipline.assuntos.map(a => ({ id: a.id, nome: a.nome, codigo: a.codigo }))
      });
      setIsEditModalOpen(true);
    }
  };

  const handleEditSuccess = () => {
    // Recarregar os dados da disciplina após edição
    if (disciplineId) {
      fetchDisciplineDetails();
    }
    setIsEditModalOpen(false);
    // Fechar também o modal de visualização após edição bem-sucedida
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        zIndex: 999999,
        padding: '40px 40px 40px 0'
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '617px',
          height: '944px',
          maxHeight: 'calc(100vh - 80px)',
          backgroundColor: '#202028',
          border: '1px solid #272737',
          borderRadius: '16px',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '24px 16px 16px 24px',
            backgroundColor: '#252532',
            borderTopLeftRadius: '16px',
            borderTopRightRadius: '16px'
          }}
        >
          <h2
            style={{
              fontFamily: 'Sora',
              fontWeight: 600,
              fontSize: '18px',
              lineHeight: '1.5555555555555556em',
              color: '#F7F7F7',
              margin: 0
            }}
          >
            Visualizar disciplina
          </h2>
          <button
            onClick={onClose}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '8px',
              backgroundColor: 'transparent',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              width: '40px',
              height: '40px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <X size={24} color="#F0F0F1" strokeWidth={1.67} />
          </button>
        </div>

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            padding: '24px',
            flex: 1,
            overflow: 'hidden'
          }}
        >
          {loading ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                color: '#CECFD2'
              }}
            >
              Carregando...
            </div>
          ) : error ? (
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flex: 1,
                color: '#E66B59'
              }}
            >
              {error}
            </div>
          ) : discipline ? (
            <>
              {/* Nome da Disciplina */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}
              >
                <label
                  style={{
                    fontFamily: 'Sora',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '1.4285714285714286em',
                    color: '#CECFD2'
                  }}
                >
                  Nome da disciplina
                </label>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 14px',
                    backgroundColor: '#22262F',
                    border: '1px solid #22262F',
                    borderRadius: '8px',
                    boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      flex: 1
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'Sora',
                        fontWeight: 400,
                        fontSize: '16px',
                        lineHeight: '1.5em',
                        color: '#F7F7F7'
                      }}
                    >
                      {discipline.nome}
                    </span>
                    <span
                      style={{
                        fontFamily: 'Sora',
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '1.4285714285714286em',
                        color: '#CECFD2'
                      }}
                    >
                      ({discipline.codigo})
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopyCode(discipline.codigo)}
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '4px',
                      backgroundColor: 'transparent',
                      border: 'none',
                      borderRadius: '6px',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#2A2B3A';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    <Copy size={16} color="#CECFD2" strokeWidth={1.5} />
                  </button>
                </div>
              </div>

              {/* Assuntos */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px',
                  flex: 1,
                  overflow: 'hidden'
                }}
              >
                {/* Divider */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    width: '569px',
                    height: '20px'
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      height: '1px',
                      backgroundColor: '#22262F'
                    }}
                  />
                  <span
                    style={{
                      fontFamily: 'Sora',
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '1.4285714285714286em',
                      color: '#94979C'
                    }}
                  >
                    Assuntos adicionados ({discipline.assuntos.length}/60)
                  </span>
                  <div
                    style={{
                      flex: 1,
                      height: '1px',
                      backgroundColor: '#22262F'
                    }}
                  />
                </div>

                {/* Lista de Assuntos */}
                <div
                  className="subjects-list-scrollbar"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    padding: '24px 32px 24px 24px',
                    backgroundColor: '#191923',
                    border: '1px solid #22262F',
                    borderRadius: '12px',
                    flex: 1
                  }}
                >
                  {discipline.assuntos.map((assunto: any, index: number) => (
                    <div
                      key={assunto.id}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-end',
                        gap: '16px'
                      }}
                    >
                      {/* Drag Handle */}
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          padding: '10px 0px'
                        }}
                      >
                        <div
                          style={{
                            width: '24px',
                            height: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 6H21M3 12H21M3 18H21" stroke="#CECFD2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>

                      {/* Assunto Input */}
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '6px',
                          flex: 1
                        }}
                      >
                        <label
                          style={{
                            fontFamily: 'Sora',
                            fontWeight: 400,
                            fontSize: '14px',
                            lineHeight: '1.4285714285714286em',
                            color: '#CECFD2'
                          }}
                        >
                          Assunto {index + 1}
                        </label>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '10px 14px',
                            backgroundColor: '#22262F',
                            border: '1px solid #373A41',
                            borderRadius: '8px',
                            boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)'
                          }}
                        >
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '4px',
                              flex: 1
                            }}
                          >
                            <span
                              style={{
                                fontFamily: 'Sora',
                                fontWeight: 400,
                                fontSize: '16px',
                                lineHeight: '1.5em',
                                color: '#F7F7F7'
                              }}
                            >
                              {assunto.nome}
                            </span>
                            <span
                              style={{
                                fontFamily: 'Sora',
                                fontWeight: 400,
                                fontSize: '14px',
                                lineHeight: '1.4285714285714286em',
                                color: '#CECFD2'
                              }}
                            >
                              ({assunto.codigo})
                            </span>
                          </div>
                          <button
                            onClick={() => handleCopyCode(assunto.codigo)}
                            style={{
                              display: 'flex',
                              justifyContent: 'center',
                              alignItems: 'center',
                              padding: '4px',
                              backgroundColor: 'transparent',
                              border: 'none',
                              borderRadius: '6px',
                              cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#2A2B3A';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'transparent';
                            }}
                          >
                            <Copy size={16} color="#CECFD2" strokeWidth={1.5} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : null}
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            padding: '32px 24px',
            borderTop: '1px solid #2C2C45'
          }}
        >
          <button
            onClick={onClose}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '6px',
              padding: '12px 18px',
              backgroundColor: '#2D2D45',
              border: 'none',
              borderRadius: '8px',
              fontFamily: 'Sora',
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '1.5em',
              color: '#CECFD2',
              cursor: 'pointer',
              flex: 1,
              boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
              transition: 'background 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#363946';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#2D2D45';
            }}
          >
            Fechar página
          </button>
          <button
            onClick={handleEdit}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '6px',
              padding: '12px 18px',
              backgroundColor: '#C74228',
              border: 'none',
              backgroundImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)',
              borderRadius: '8px',
              fontFamily: 'Sora',
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '1.5em',
              color: '#FFFFFF',
              cursor: 'pointer',
              flex: 1,
              boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)',
              transition: 'background 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#D55A3A';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#C74228';
            }}
          >
            <Edit size={20} color="#FFFFFF" strokeWidth={1.67} />
            Editar
          </button>
        </div>
      </div>

      {/* Modal de Edição */}
      <DisciplineRegistrationModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        onSuccess={handleEditSuccess}
        isEditMode={true}
        disciplineId={disciplineId}
        initialData={editInitialData || undefined}
      />
    </div>
  );
};
