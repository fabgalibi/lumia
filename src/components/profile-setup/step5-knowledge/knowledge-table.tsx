import React from 'react';
import { CustomRadioButton } from '@/components/ui/custom-radio-button';
import { SubjectSelectionModal } from './subject-selection-modal';

export interface KnowledgeTableProps {
  subjects: Array<{
    id: string;
    name: string;
    description: string;
    topics: Array<{
      id: string;
      name: string;
      selected: boolean;
    }>;
  }>;
  knowledgeData: Record<string, 'never' | 'started' | 'finished' | 'polishing'>;
  onLevelChange: (subjectId: string, level: 'never' | 'started' | 'finished' | 'polishing') => void;
  onSelectSubjects: (subjectId: string, selectedTopics: string[]) => void;
  screenSize: 'mobile' | 'tablet' | 'notebook' | 'desktop';
}

export default function KnowledgeTable({
  subjects,
  knowledgeData,
  onLevelChange,
  onSelectSubjects,
  screenSize
}: KnowledgeTableProps) {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedSubject, setSelectedSubject] = React.useState<any>(null);

  const handleOpenModal = (subject: any) => {
    console.log('Opening modal with subject:', subject);
    setSelectedSubject(subject);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSubject(null);
  };

  const handleSaveSelection = (subjectId: string, selectedTopics: string[]) => {
    onSelectSubjects(subjectId, selectedTopics);
  };
  
  // Layout de tabela HTML apenas para desktop
  if (screenSize === 'desktop') {
  return (
    <>
    <div
      style={{
          backgroundColor: 'rgba(37, 37, 50, 1)',
          border: '1px solid rgba(44, 44, 69, 1)',
          borderRadius: '12px',
          overflow: 'visible',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12)',
          maxHeight: 'none',
          height: 'auto'
        }}
      >
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            borderSpacing: 0,
            tableLayout: 'auto'
          }}
        >
          {/* Header da Tabela */}
          <thead>
            <tr
              style={{
                backgroundColor: 'rgba(37, 37, 50, 1)'
              }}
            >
              <th
                colSpan={6}
        style={{
                  width: '100%',
                  height: '72px',
                  paddingTop: '12px',
                  paddingRight: '20px',
                  paddingBottom: '12px',
                  paddingLeft: '20px',
                  textAlign: 'left',
                  borderBottom: '1px solid #2C2C45',
                  fontFamily: 'Inter',
                  fontWeight: 600,
                  fontSize: '12px',
                  lineHeight: '18px',
                  color: '#F0F0F1'
        }}
      >
        <div
          style={{
                    width: '57px',
                    height: '18px',
            display: 'flex',
            alignItems: 'center'
          }}
        >
                  Disciplina
                </div>
              </th>
            </tr>
          </thead>

          {/* Linhas da Tabela */}
          <tbody>
            {subjects.map((subject, index) => (
              <tr
                key={subject.id}
                style={{
                  borderBottom: index < subjects.length - 1 ? '1px solid rgba(44, 44, 69, 1)' : 'none'
                }}
              >
                {/* Nome da Disciplina */}
                <td
                  style={{
                    paddingTop: '16px',
                    paddingRight: '20px',
                    paddingBottom: '16px',
                    paddingLeft: '20px',
                    borderBottom: '1px solid #2C2C45',
                    verticalAlign: 'top',
                    width: 'auto'
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '6px'
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: 'Inter',
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '20px',
                        letterSpacing: '-0.5%',
                        color: 'rgba(240, 240, 241, 1)',
                        margin: 0
                      }}
                    >
                      {subject.name}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'Inter',
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '20px',
                        color: 'rgba(148, 151, 156, 1)',
                        margin: 0
                      }}
                    >
                      {subject.description}
                    </p>
                  </div>
                </td>

                {/* Opções de Nível */}
                <td
                  style={{
                    paddingTop: '16px',
                    paddingRight: '20px',
                    paddingBottom: '16px',
                    paddingLeft: '20px',
                    borderBottom: '1px solid #2C2C45',
                    textAlign: 'center',
                    verticalAlign: 'middle',
                    width: 'auto',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgb(27, 29, 37)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                  onClick={() => onLevelChange(subject.id, 'never')}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      justifyContent: 'center',
                      width: '100%'
                    }}
                  >
                    <CustomRadioButton
                      checked={knowledgeData[subject.id] === 'never'}
                      onClick={() => onLevelChange(subject.id, 'never')}
                    />
          <span
            style={{
              fontFamily: 'Inter',
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '20px',
                        letterSpacing: '0%',
                        color: '#F7F7F7',
                        flex: 1,
                        textAlign: 'left'
                      }}
                    >
                      Nunca estudei
          </span>
        </div>
                </td>
                <td
                  style={{
                    paddingTop: '16px',
                    paddingRight: '20px',
                    paddingBottom: '16px',
                    paddingLeft: '20px',
                    borderBottom: '1px solid #2C2C45',
                    textAlign: 'center',
                    verticalAlign: 'middle',
                    width: 'auto',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgb(27, 29, 37)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                  onClick={() => onLevelChange(subject.id, 'started')}
                >
                  <div
            style={{
              display: 'flex',
              alignItems: 'center',
                      gap: '12px',
                      justifyContent: 'flex-start',
                      width: '100%'
            }}
          >
                    <CustomRadioButton
                      checked={knowledgeData[subject.id] === 'started'}
                      onClick={() => onLevelChange(subject.id, 'started')}
                    />
            <span
              style={{
                fontFamily: 'Inter',
                        fontWeight: 400,
                        fontSize: '14px',
                        lineHeight: '20px',
                        letterSpacing: '0%',
                        color: '#F7F7F7',
                        flex: 1,
                        textAlign: 'left'
                      }}
                    >
                      Comecei teoria, mas não terminei
            </span>
          </div>
                </td>
                <td
          style={{
                    paddingTop: '16px',
                    paddingRight: '20px',
                    paddingBottom: '16px',
                    paddingLeft: '20px',
                    borderBottom: '1px solid #2C2C45',
                    textAlign: 'center',
                    verticalAlign: 'middle',
                    width: 'auto',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgb(27, 29, 37)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                  onClick={() => onLevelChange(subject.id, 'finished')}
                >
          <div
            style={{
              display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      justifyContent: 'center',
                      width: '100%'
                    }}
                  >
                    <CustomRadioButton
                      checked={knowledgeData[subject.id] === 'finished'}
                      onClick={() => onLevelChange(subject.id, 'finished')}
                    />
            <span
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: '14px',
                        lineHeight: '20px',
                        letterSpacing: '0%',
                        color: '#F7F7F7',
                        flex: 1,
                        textAlign: 'left'
                      }}
                    >
                      Terminei teoria, mas não tenho confiança
            </span>
                  </div>
                </td>
                <td
                  style={{
                    paddingTop: '16px',
                    paddingRight: '20px',
                    paddingBottom: '16px',
                    paddingLeft: '20px',
                    borderBottom: '1px solid #2C2C45',
                    textAlign: 'center',
                    verticalAlign: 'middle',
                    width: 'auto',
                    cursor: 'pointer',
                    transition: 'background-color 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgb(27, 29, 37)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                  onClick={() => onLevelChange(subject.id, 'polishing')}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      justifyContent: 'center',
                      width: '100%'
                    }}
                  >
                    <CustomRadioButton
                      checked={knowledgeData[subject.id] === 'polishing'}
                      onClick={() => onLevelChange(subject.id, 'polishing')}
                    />
            <span
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: '14px',
                        lineHeight: '20px',
                        letterSpacing: '0%',
                        color: '#F7F7F7',
                        flex: 1,
                        textAlign: 'left'
                      }}
                    >
                      Só falta aparar as arestas
            </span>
          </div>
                </td>

                {/* Ação */}
                <td
                  style={{
                    height: '72px',
                    paddingTop: '16px',
                    paddingRight: '20px',
                    paddingBottom: '16px',
                    paddingLeft: '20px',
                    borderBottom: '1px solid #2C2C45',
                    textAlign: 'right',
                    verticalAlign: 'middle',
                    width: 'auto',
                    cursor: knowledgeData[subject.id] === 'never' ? 'not-allowed' : 'pointer',
                    transition: 'background-color 0.2s ease'
                  }}
                  onMouseOver={(e) => {
                    if (knowledgeData[subject.id] !== 'never') {
                      e.currentTarget.style.backgroundColor = 'rgb(27, 29, 37)';
                    }
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  <div
              style={{
                display: 'flex',
                alignItems: 'center',
                      justifyContent: 'flex-end',
                      height: '100%'
                    }}
                  >
                    <span
                      onClick={() => knowledgeData[subject.id] !== 'never' && handleOpenModal(subject)}
                      style={{
                        fontFamily: 'Inter',
                        fontWeight: 600,
                        fontSize: '14px',
                        lineHeight: '20px',
                        color: knowledgeData[subject.id] === 'never' 
                          ? '#85888E' 
                          : '#CECFD2',
                        cursor: knowledgeData[subject.id] === 'never' 
                          ? 'not-allowed' 
                          : 'pointer',
                        transition: 'color 0.2s ease'
                      }}
                      onMouseOver={(e) => {
                        if (knowledgeData[subject.id] !== 'never') {
                          e.currentTarget.style.color = '#F66649';
                        }
                      }}
                      onMouseOut={(e) => {
                        if (knowledgeData[subject.id] !== 'never') {
                          e.currentTarget.style.color = '#CECFD2';
                        }
                      }}
                    >
                      Selecionar assuntos
                    </span>
                  </div>
                </td>
              </tr>
        ))}
          </tbody>
        </table>
      </div>
      
      {/* Modal */}
      <SubjectSelectionModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        subject={selectedSubject}
        onSave={handleSaveSelection}
      />
    </>
    );
  }

  // Layout de cards para mobile e tablet
  return (
    <>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '16px',
        width: '100%',
        padding: '0'
      }}
    >
      {/* Mobile/Tablet Card Layout */}
      {subjects.map((subject) => (
        <div
          key={subject.id}
          style={{
            backgroundColor: 'rgba(39, 39, 56, 1)',
            border: '1px solid rgba(44, 44, 69, 1)',
            borderRadius: '12px',
            padding: '20px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.12)',
            width: '100%',
            minHeight: 'fit-content'
          }}
        >
          {/* Subject Header */}
          <div
            style={{
              marginBottom: '20px'
            }}
          >
            <h3
              style={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '24px',
                letterSpacing: '-1%',
                color: 'rgba(240, 240, 241, 1)',
                margin: 0
              }}
            >
              {subject.name}
            </h3>
          </div>

          {/* Knowledge Level Options */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                marginBottom: '16px'
              }}
            >
            {[
              { id: 'never', label: 'Nunca estudei' },
              { id: 'started', label: 'Comecei teoria, mas não terminei' },
              { id: 'finished', label: 'Terminei teoria, mas não tenho confiança' },
              { id: 'polishing', label: 'Só falta aparar as arestas' }
            ].map((level) => (
              <label
                key={level.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  cursor: 'pointer',
                  padding: '10px',
                  borderRadius: '8px',
                  backgroundColor: 'transparent',
                  border: 'none',
                  transition: 'all 0.2s ease'
                }}
              >
                <input
                  type="radio"
                  name={`subject-${subject.id}`}
                  value={level.id}
                  checked={knowledgeData[subject.id] === level.id}
                  onChange={() => onLevelChange(subject.id, level.id as any)}
                  style={{
                    width: '20px',
                    height: '20px',
                    accentColor: '#F66649',
                    cursor: 'pointer'
                  }}
                />
                <span
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '20px',
                    letterSpacing: '0%',
                    color: '#ECECED',
                    flex: 1
                  }}
                >
                  {level.label}
                </span>
              </label>
          ))}
        </div>

          {/* Action Button */}
      <div
        style={{
              paddingTop: '16px'
            }}
          >
            <button
              onClick={() => handleOpenModal(subject)}
              disabled={knowledgeData[subject.id] === 'never'}
              style={{
                width: '100%',
                padding: '10px 14px',
                backgroundColor: knowledgeData[subject.id] === 'never' 
                  ? 'rgba(47, 47, 65, 1)' 
                  : 'rgba(45, 45, 69, 1)',
                border: 'none',
                borderRadius: '8px',
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '14px',
                lineHeight: '20px',
                color: knowledgeData[subject.id] === 'never' 
                  ? 'rgba(236, 236, 237, 0.5)' 
                  : '#ECECED',
                cursor: knowledgeData[subject.id] === 'never' 
                  ? 'not-allowed' 
                  : 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: knowledgeData[subject.id] === 'never'
                  ? 'none'
                  : `
                    0px 1px 2px 0px rgba(0, 0, 0, 0.05),
                    0px -2px 0px 0px rgba(0, 0, 0, 0.1) inset,
                    0px 0px 0px 1px rgba(255, 255, 255, 0.05) inset
                  `
              }}
              onMouseOver={(e) => {
                if (knowledgeData[subject.id] !== 'never') {
                  e.currentTarget.style.backgroundColor = 'rgb(44, 47, 58)';
                  e.currentTarget.style.border = '1px solid rgb(34, 38, 47)';
                  e.currentTarget.style.color = '#ECECED';
                  e.currentTarget.style.boxShadow = `
                    0px 1px 2px 0px rgba(0, 0, 0, 0.05),
                    0px -2px 0px 0px rgba(0, 0, 0, 0.1) inset,
                    0px 0px 0px 1px rgba(255, 255, 255, 0.05) inset
                  `;
                }
              }}
              onMouseOut={(e) => {
                if (knowledgeData[subject.id] !== 'never') {
                  e.currentTarget.style.backgroundColor = 'rgba(45, 45, 69, 1)';
                  e.currentTarget.style.border = 'none';
                  e.currentTarget.style.color = '#ECECED';
                  e.currentTarget.style.boxShadow = `
                    0px 1px 2px 0px rgba(0, 0, 0, 0.05),
                    0px -2px 0px 0px rgba(0, 0, 0, 0.1) inset,
                    0px 0px 0px 1px rgba(255, 255, 255, 0.05) inset
                  `;
                }
              }}
            >
              Selecionar assuntos específicos
            </button>
          </div>
          </div>
        ))}
    </div>
    
    {/* Modal */}
    <SubjectSelectionModal
      isOpen={isModalOpen}
      onClose={handleCloseModal}
      subject={selectedSubject}
      onSave={handleSaveSelection}
    />
    </>
  );
}