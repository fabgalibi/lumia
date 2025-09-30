import React from 'react';
import { Expand04, Minimize01 } from "@untitledui/icons";

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
  selectedTopics?: string[]; // Assuntos já selecionados
  onSave: (subjectId: string, selectedTopics: string[]) => void;
}

export const SubjectSelectionModal: React.FC<SubjectSelectionModalProps> = ({
  isOpen,
  onClose,
  subject,
  selectedTopics: previouslySelectedTopics = [],
  onSave
}) => {
  const [selectedTopics, setSelectedTopics] = React.useState<string[]>([]);
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [screenSize, setScreenSize] = React.useState<'mobile' | 'tablet' | 'notebook' | 'desktop'>('desktop');

  // Detectar tamanho da tela
  React.useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize('mobile');
      } else if (width < 1024) {
        setScreenSize('tablet');
      } else if (width < 1440) {
        setScreenSize('notebook');
      } else {
        setScreenSize('desktop');
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Reset expanded state when modal opens
  React.useEffect(() => {
    if (isOpen) {
      setIsExpanded(false);
    }
  }, [isOpen]);

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
      
      // Se há assuntos previamente selecionados, usa eles; senão usa os que estão marcados como selected nos topics
      if (previouslySelectedTopics.length > 0) {
        setSelectedTopics(previouslySelectedTopics);
      } else {
        const selected = topics.filter(topic => topic.selected).map(topic => topic.id);
        setSelectedTopics(selected);
      }
    }
  }, [subject, previouslySelectedTopics]);

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
        justifyContent: 'flex-end',
        padding: screenSize === 'mobile' ? '20px' : '40px',
        zIndex: 9999
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#202028',
          border: '1px solid #272737',
          borderRadius: '16px',
          width: screenSize === 'mobile' ? '100%' : (isExpanded ? '1360px' : '617px'),
          height: screenSize === 'mobile' ? 'calc(100vh - 40px)' : 'calc(100vh - 80px)',
          maxWidth: screenSize === 'mobile' ? '100%' : (isExpanded ? '1360px' : '617px'),
          maxHeight: screenSize === 'mobile' ? 'calc(100vh - 40px)' : 'calc(100vh - 80px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          transition: 'all 0.3s ease'
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
            gap: screenSize === 'mobile' ? '12px' : '16px',
            padding: screenSize === 'mobile' ? '20px 16px 16px 20px' : '24px 16px 16px 24px',
            backgroundColor: 'rgba(37, 37, 50, 1)',
            borderBottom: '1.5px solid #272737',
            borderTopLeftRadius: screenSize === 'mobile' ? '16px' : '16px',
            borderTopRightRadius: screenSize === 'mobile' ? '16px' : '16px'
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
                fontFamily: 'Inter' /* MIGRATED */,
                fontWeight: 600,
                fontSize: screenSize === 'mobile' ? '16px' : '18px',
                lineHeight: '1.56em',
                color: '#F7F7F7',
                margin: 0
              }}
            >
              Selecione os assuntos que você já viu dessa disciplina ({selectedTopics.length})
            </h2>
            <p
              style={{
                fontFamily: 'Inter' /* MIGRATED */,
                fontWeight: 400,
                fontSize: screenSize === 'mobile' ? '12px' : '14px',
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
            {/* Botão Expandir - Escondido em mobile */}
            {screenSize !== 'mobile' && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center justify-center hover:bg-[#333346] transition-all duration-200 cursor-pointer"
                style={{
                  gap: '6px',
                  padding: '10px 12px',
                  background: 'transparent',
                  border: '1px solid #22262F',
                  borderRadius: '8px'
                }}
              >
              {isExpanded ? (
                <Minimize01 className="w-5 h-5" style={{ color: '#F0F0F1' }} />
              ) : (
                <Expand04 className="w-5 h-5" style={{ color: '#F0F0F1' }} />
              )}
              <div 
                style={{
                  padding: '0px 2px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <span 
                  style={{
                    fontFamily: 'Inter' /* MIGRATED */,
                    fontWeight: 400,
                    fontStyle: 'Regular',
                    fontSize: '16px',
                    lineHeight: '1.5em',
                    letterSpacing: '0%',
                    textAlign: 'left',
                    color: '#F0F0F1'
                  }}
                >
                  {isExpanded ? 'Minimizar tela' : 'Expandir tela'}
                </span>
              </div>
              </button>
            )}

            {/* Botão Fechar */}
            <button
              onClick={onClose}
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: screenSize === 'mobile' ? '8px' : '8px 12px 8px 20px',
                width: screenSize === 'mobile' ? '44px' : '52px',
                height: screenSize === 'mobile' ? '44px' : '44px',
                backgroundColor: 'transparent',
                border: 'none',
                borderLeft: screenSize === 'mobile' ? 'none' : '1px solid #373A41',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(240, 240, 241, 0.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
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
            gap: screenSize === 'mobile' ? '16px' : '24px',
            padding: screenSize === 'mobile' ? '16px' : '24px',
            flex: 1,
            overflowY: 'auto',
            minHeight: 0,
            position: 'relative'
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
                gap: screenSize === 'mobile' ? '8px' : '12px',
                padding: screenSize === 'mobile' ? '12px' : '16px',
                backgroundColor: '#252532',
                border: selectedTopics.includes(topic.id) 
                  ? '2px solid #F66649' 
                  : '1px solid #2C2C45',
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onClick={() => handleTopicToggle(topic.id)}
              onMouseEnter={(e) => {
                if (!selectedTopics.includes(topic.id)) {
                  e.currentTarget.style.borderColor = '#373A41';
                }
              }}
              onMouseLeave={(e) => {
                if (!selectedTopics.includes(topic.id)) {
                  e.currentTarget.style.borderColor = '#2C2C45';
                }
              }}
            >
              {/* Content */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: '12px',
                  flex: 1,
                  minWidth: 0 // Permite que o conteúdo seja comprimido corretamente
                }}
              >
                {/* Text and supporting text */}
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    minWidth: 0 // Permite que o texto quebre corretamente
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Inter' /* MIGRATED */,
                      fontWeight: 400,
                      fontSize: screenSize === 'mobile' ? '12px' : '14px',
                      lineHeight: '1.43em',
                      color: '#CECFD2',
                      // Comportamento diferente baseado no estado de expansão
                      ...(isExpanded ? {
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word',
                        hyphens: 'auto'
                      } : {
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                      })
                    }}
                    title={!isExpanded ? topic.name : undefined} // Tooltip com texto completo quando truncado
                  >
                    {topic.name}
                  </span>
                </div>
              </div>

              {/* Checkbox base */}
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
                  borderRadius: '4px',
                  position: 'relative',
                  flexShrink: 0 // Evita que o checkbox seja comprimido
                }}
              >
                {selectedTopics.includes(topic.id) && (
                  <div
                    style={{
                      width: '12px',
                      height: '12px',
                      position: 'relative'
                    }}
                  >
                    <svg 
                      width="8" 
                      height="6" 
                      viewBox="0 0 8 6" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        position: 'absolute',
                        left: '2px',
                        top: '3px'
                      }}
                    >
                      <path 
                        d="M1 3L3 5L7 1" 
                        stroke="#FFFFFF" 
                        strokeWidth="1.67" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
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
            justifyContent: screenSize === 'mobile' ? 'stretch' : (isExpanded ? 'flex-end' : 'stretch'),
            alignSelf: 'stretch',
            gap: screenSize === 'mobile' ? '8px' : '16px',
            padding: screenSize === 'mobile' ? '16px' : '32px 24px',
            backgroundColor: '#202028',
            borderTop: '1px solid #2C2C45',
            borderBottomLeftRadius: screenSize === 'mobile' ? '0' : '16px',
            borderBottomRightRadius: screenSize === 'mobile' ? '0' : '16px'
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
              padding: screenSize === 'mobile' ? '10px 14px' : '10px 14px',
              height: screenSize === 'mobile' ? '40px' : 'auto',
              flex: screenSize === 'mobile' ? 1 : (isExpanded ? 'none' : 1),
              width: screenSize === 'mobile' ? 'auto' : (isExpanded ? '276.5px' : 'auto'),
              backgroundColor: '#2D2D45',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#373A41';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#2D2D45';
            }}
          >
            <span
              style={{
                fontFamily: 'Inter' /* MIGRATED */,
                fontWeight: 600,
                fontStyle: 'SemiBold',
                fontSize: screenSize === 'mobile' ? '12px' : '14px',
                lineHeight: '1.43em',
                letterSpacing: '0%',
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
              padding: screenSize === 'mobile' ? '10px 14px' : '10px 14px',
              height: screenSize === 'mobile' ? '40px' : 'auto',
              flex: screenSize === 'mobile' ? 1 : (isExpanded ? 'none' : 1),
              width: screenSize === 'mobile' ? 'auto' : (isExpanded ? '276.5px' : 'auto'),
              backgroundColor: '#C74228',
              border: '2px solid',
              borderImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%) 1',
              borderRadius: '8px',
              cursor: 'pointer',
              boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#B03A20';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#C74228';
            }}
          >
            <span
              style={{
                fontFamily: 'Inter' /* MIGRATED */,
                fontWeight: 600,
                fontStyle: 'SemiBold',
                fontSize: screenSize === 'mobile' ? '12px' : '14px',
                lineHeight: '1.43em',
                letterSpacing: '0%',
                color: '#FFFFFF'
              }}
            >
              {screenSize === 'mobile' ? 'Prosseguir' : 'Salvar seleção'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
