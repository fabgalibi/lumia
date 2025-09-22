import React from 'react';

interface Subject {
  id: string;
  name: string;
  topics: Array<{
    id: string;
    name: string;
    selected: boolean;
  }>;
}

interface SubjectSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  subject: Subject | null;
  onSave: (subjectId: string, selectedTopics: string[]) => void;
}

export const SubjectSelectionModal: React.FC<SubjectSelectionModalProps> = ({
  isOpen,
  onClose,
  subject,
  onSave
}) => {
  const [selectedTopics, setSelectedTopics] = React.useState<string[]>([]);

  console.log('Modal render - isOpen:', isOpen, 'subject:', subject);

  React.useEffect(() => {
    if (subject) {
      // Se não há tópicos, cria dados de exemplo
      const topics = subject.topics || [
        { id: '1', name: 'Teoria Geral do Direito Constitucional', selected: true },
        { id: '2', name: 'Constituição: Conceito, estrutura, supremacia e classificação', selected: false },
        { id: '3', name: 'Eficácia das normas constitucionais', selected: false },
        { id: '4', name: 'Poder constituinte (originário, derivado, reformador, revisor, decorrente e etc.)', selected: false },
        { id: '5', name: 'Aplicação das Normas Constitucionais no Tempo (recepção, repristinação, desconstitucionalização)', selected: true },
        { id: '6', name: 'Métodos e Princípios de Interpretação das Normas Constitucionais', selected: true },
        { id: '7', name: 'Dos Princípios Fundamentais da Constituição (Artigos 1º a 4º da CF/1988)', selected: false },
        { id: '8', name: 'Dos direitos e Garantias Fundamentais (Artigos 5º a 17 da CF/1988)', selected: false },
        { id: '9', name: 'Da Organização do Estado (Artigos 18 a 43 da CF/1988)', selected: false },
        { id: '10', name: 'Da Organização dos Poderes (Artigos 44 a 135 da CF/1988)', selected: false }
      ];
      const selected = topics.filter(topic => topic.selected).map(topic => topic.id);
      setSelectedTopics(selected);
    }
  }, [subject]);

  const handleTopicToggle = (topicId: string) => {
    setSelectedTopics(prev => 
      prev.includes(topicId) 
        ? prev.filter(id => id !== topicId)
        : [...prev, topicId]
    );
  };

  const handleSave = () => {
    if (subject) {
      onSave(subject.id, selectedTopics);
      onClose();
    }
  };

  console.log('Modal render check - isOpen:', isOpen);
  
  if (!isOpen) {
    console.log('Modal not open, returning null');
    return null;
  }

  // Se não há subject, mostra modal vazio para debug
  if (!subject) {
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
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}
      >
        <div
          style={{
            backgroundColor: '#202028',
            border: '1px solid #272737',
            borderRadius: '16px',
            width: '617px',
            height: '400px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px'
          }}
        >
          <h2 style={{ color: '#F7F7F7', marginBottom: '16px' }}>Erro: Subject não encontrado</h2>
          <button
            onClick={onClose}
            style={{
              padding: '10px 20px',
              backgroundColor: '#F66649',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            Fechar
          </button>
        </div>
      </div>
    );
  }

  console.log('Rendering modal content');
  
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#202028',
          border: '1px solid #272737',
          borderRadius: '16px',
          width: '617px',
          height: '944px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'stretch',
            gap: '16px',
            padding: '24px 16px 16px 24px',
            backgroundColor: '#252532',
            borderBottom: '1.5px solid #272737',
            borderTopLeftRadius: '16px',
            borderTopRightRadius: '16px'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '4px',
              flex: 1
            }}
          >
            <h2
              style={{
                fontFamily: 'Sora',
                fontWeight: 600,
                fontSize: '18px',
                lineHeight: '1.56em',
                color: '#F7F7F7',
                margin: 0
              }}
            >
              Selecione os assuntos que você já viu dessa disciplina (3)
            </h2>
            <p
              style={{
                fontFamily: 'Sora',
                fontWeight: 400,
                fontSize: '14px',
                lineHeight: '1.43em',
                color: '#CECFD2',
                margin: 0
              }}
            >
              {subject.name}
            </p>
          </div>
          
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            {/* Botão Expandir */}
            <button
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '6px',
                padding: '10px 12px',
                backgroundColor: 'transparent',
                border: '1px solid #22262F',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 5L12.5 10L7.5 15" stroke="#F0F0F1" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span
                style={{
                  fontFamily: 'Sora',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '1.5em',
                  color: '#F0F0F1'
                }}
              >
                Expandir tela
              </span>
            </button>

            {/* Botão Fechar */}
            <button
              onClick={onClose}
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '8px 12px 8px 20px',
                width: '52px',
                height: '44px',
                backgroundColor: 'transparent',
                border: 'none',
                borderLeft: '1px solid #373A41',
                cursor: 'pointer'
              }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L9 9M9 1L1 9" stroke="#F0F0F1" strokeWidth="1.67" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'stretch',
            gap: '24px',
            padding: '24px',
            flex: 1,
            overflowY: 'auto'
          }}
        >
          {(subject.topics || [
            { id: '1', name: 'Teoria Geral do Direito Constitucional', selected: true },
            { id: '2', name: 'Constituição: Conceito, estrutura, supremacia e classificação', selected: false },
            { id: '3', name: 'Eficácia das normas constitucionais', selected: false },
            { id: '4', name: 'Poder constituinte (originário, derivado, reformador, revisor, decorrente e etc.)', selected: false },
            { id: '5', name: 'Aplicação das Normas Constitucionais no Tempo (recepção, repristinação, desconstitucionalização)', selected: true },
            { id: '6', name: 'Métodos e Princípios de Interpretação das Normas Constitucionais', selected: true },
            { id: '7', name: 'Dos Princípios Fundamentais da Constituição (Artigos 1º a 4º da CF/1988)', selected: false },
            { id: '8', name: 'Dos direitos e Garantias Fundamentais (Artigos 5º a 17 da CF/1988)', selected: false },
            { id: '9', name: 'Da Organização do Estado (Artigos 18 a 43 da CF/1988)', selected: false },
            { id: '10', name: 'Da Organização dos Poderes (Artigos 44 a 135 da CF/1988)', selected: false }
          ]).map((topic) => (
            <div
              key={topic.id}
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                alignSelf: 'stretch',
                gap: '12px',
                padding: '16px',
                backgroundColor: '#252532',
                border: selectedTopics.includes(topic.id) 
                  ? '2px solid #F66649' 
                  : '1px solid #2C2C45',
                borderRadius: '12px',
                cursor: 'pointer'
              }}
              onClick={() => handleTopicToggle(topic.id)}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: '12px',
                  flex: 1
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Sora',
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '1.43em',
                      color: '#CECFD2'
                    }}
                  >
                    {topic.name}
                  </span>
                </div>
              </div>

              {/* Checkbox */}
              <div
                style={{
                  width: '16px',
                  height: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: selectedTopics.includes(topic.id) ? '#F66649' : 'transparent',
                  border: selectedTopics.includes(topic.id) 
                    ? 'none' 
                    : '1px solid #373A41',
                  borderRadius: '4px'
                }}
              >
                {selectedTopics.includes(topic.id) && (
                  <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 3L3 5L7 1" stroke="#FFFFFF" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignSelf: 'stretch',
            gap: '16px',
            padding: '32px 24px',
            backgroundColor: '#FFFFFF',
            borderTop: '1px solid #2C2C45',
            borderBottomLeftRadius: '16px',
            borderBottomRightRadius: '16px'
          }}
        >
          <button
            onClick={onClose}
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '4px',
              padding: '10px 14px',
              flex: 1,
              backgroundColor: '#2D2D45',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)'
            }}
          >
            <span
              style={{
                fontFamily: 'Sora',
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '1.43em',
                color: '#CECFD2'
              }}
            >
              Cancelar
            </span>
          </button>

          <button
            onClick={handleSave}
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '4px',
              padding: '10px 14px',
              flex: 1,
              backgroundColor: '#C74228',
              border: '2px solid',
              borderImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%) 1',
              borderRadius: '8px',
              cursor: 'pointer',
              boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)'
            }}
          >
            <span
              style={{
                fontFamily: 'Sora',
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '1.43em',
                color: '#FFFFFF'
              }}
            >
              Salvar seleção
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
