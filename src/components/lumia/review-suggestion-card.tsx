
import React, { useState, useEffect } from 'react';

interface ReviewSuggestion {
  id: string;
  topic: string;
  studyType: string;
  questionsCorrect: string;
  timeStudied: string;
  performance: string;
  priority: 'high' | 'medium' | 'low';
  mentorCommand?: string;
  relevance?: string;
}

interface ReviewSuggestionCardProps {
  suggestion: ReviewSuggestion;
  onReview: (suggestion: ReviewSuggestion) => void;
}

export const ReviewSuggestionCard = ({ suggestion, onReview }: ReviewSuggestionCardProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1100);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return '#832424';
      case 'medium':
        return '#562524';
      case 'low':
        return '#2C2C45';
      default:
        return '#832424';
    }
  };

  const getButtonStyle = (priority: string) => {
    if (priority === 'high') {
      return {
        background: '#C74228',
        border: '2px solid transparent',
        backgroundImage: 'linear-gradient(#C74228, #C74228), linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)',
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box',
        color: '#FFFFFF'
      };
    } else {
      return {
        background: '#562524',
        border: '1px solid #C74228',
        color: '#F0F0F1'
      };
    }
  };

  return (
    <div>
      {isMobile ? (
        // VERSÃO MOBILE - Layout vertical conforme Figma
        <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            background: '#272738',
            border: '1px solid #2C2C45',
            borderRadius: '8px',
            cursor: 'pointer'
          }}
          onClick={() => onReview(suggestion)}
        >
          {/* Top bar - vermelha */}
          <div 
            style={{
              height: '8px',
              background: getPriorityColor(suggestion.priority),
              borderRadius: '8px 8px 0 0'
            }}
          />
          
          {/* Content */}
          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: '16px',
              gap: '16px'
            }}
          >
            {/* Título */}
            <h3
              style={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '24px',
                letterSpacing: '-0.16px',
                color: '#F0F0F1'
              }}
            >
              {suggestion.topic}
            </h3>

            {/* Grid de informações */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px'
              }}
            >
              {/* Badge */}
              <div 
                style={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px'
                }}
              >
                <span
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '16px',
                    color: '#85888E'
                  }}
                >
                  Tipo de estudo
                </span>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '2px 8px',
                    background: '#515153',
                    border: '1px solid transparent',
                    backgroundImage: 'linear-gradient(#515153, #515153), linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)',
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box',
                    borderRadius: '9999px',
                    width: 'fit-content'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Inter',
                      fontWeight: 500,
                      fontSize: '12px',
                      lineHeight: '18px',
                      color: '#CECFD2',
                      textAlign: 'center'
                    }}
                  >
                    {suggestion.studyType}
                  </span>
                </div>
              </div>

              {/* Tempo estudado */}
              <div 
                style={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px'
                }}
              >
                <span
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '16px',
                    color: '#85888E'
                  }}
                >
                  Tempo estudado
                </span>
                <span
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#F0F0F1'
                  }}
                >
                  {suggestion.timeStudied}
                </span>
              </div>

              {/* Questões acertadas */}
              <div 
                style={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px'
                }}
              >
                <span
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '16px',
                    color: '#85888E'
                  }}
                >
                  Questões acertadas
                </span>
                <span
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#F0F0F1'
                  }}
                >
                  {suggestion.questionsCorrect}
                </span>
              </div>

              {/* Desempenho */}
              <div 
                style={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px'
                }}
              >
                <span
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '16px',
                    color: '#85888E'
                  }}
                >
                  Desempenho
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <div style={{ width: '16px', height: '16px' }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="8" cy="8" r="6.67" stroke="#85888E" strokeWidth="1.33"/>
                      <path d="M6.06 6.67a2 2 0 0 1 3.88 0.67c0 1.33-2 2-2 2" stroke="#85888E" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 11.33h.01" stroke="#85888E" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span
                    style={{
                      fontFamily: 'Inter',
                      fontWeight: 500,
                      fontSize: '14px',
                      lineHeight: '20px',
                      color: '#F0F0F1'
                    }}
                  >
                    {suggestion.performance}
                  </span>
                </div>
              </div>
            </div>

            {/* Comandos do mentor */}
            {suggestion.mentorCommand && (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px'
                }}
              >
                <span
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '16px',
                    color: '#85888E'
                  }}
                >
                  Comandos do mentor
                </span>
                <span
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#F0F0F1'
                  }}
                >
                  {suggestion.mentorCommand}
                </span>
              </div>
            )}

            {/* Botão Revisar meta */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onReview(suggestion);
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '12px 16px',
                background: '#562524',
                border: '1px solid #C74228',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                width: '100%'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#6B2F2F';
                e.currentTarget.style.borderColor = '#D85A3A';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#562524';
                e.currentTarget.style.borderColor = '#C74228';
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 14L10 10M12 6C12 8.20914 10.2091 10 8 10C5.79086 10 4 8.20914 4 6C4 3.79086 5.79086 2 8 2C10.2091 2 12 3.79086 12 6Z" stroke="#CECFD2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span
                style={{
                  fontFamily: 'Sora',
                  fontWeight: 600,
                  fontSize: '14px',
                  lineHeight: '20px',
                  color: '#CECFD2'
                }}
              >
                Revisar meta
              </span>
            </button>
          </div>
        </div>
      ) : (
        // VERSÃO DESKTOP - Layout horizontal conforme Figma
        <div 
          style={{
            display: 'flex',
            background: '#20202C',
            border: '1px solid #2C2C45',
            borderRadius: '8px 16px 16px 8px',
            width: '100%',
            minHeight: '80px',
            boxSizing: 'border-box'
          }}
        >
          {/* Priority indicator */}
          <div 
            style={{
              width: '8px',
              background: getPriorityColor(suggestion.priority),
              borderRadius: '8px 0px 0px 8px',
              flexShrink: 0,
              alignSelf: 'stretch'
            }}
          />
          
          {/* Content */}
          <div 
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '20px',
              gap: '24px',
              flex: 1,
              minHeight: '80px',
              boxSizing: 'border-box'
            }}
          >
            {/* Left section - Badge and topic */}
            <div 
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                width: '335px',
                flexShrink: 0
              }}
            >
              {/* Badge */}
              <div 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '2px 8px',
                  background: '#515153',
                  border: '1px solid transparent',
                  backgroundImage: 'linear-gradient(#515153, #515153), linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)',
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'padding-box, border-box',
                  borderRadius: '9999px',
                  width: 'fit-content'
                }}
              >
                <span 
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    fontSize: '12px',
                    lineHeight: '18px',
                    textAlign: 'center',
                    color: '#CECFD2'
                  }}
                >
                  {suggestion.studyType}
                </span>
              </div>
              
              {/* Topic */}
              <h3 
                style={{
                  fontFamily: 'Sora',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '24px',
                  textAlign: 'left',
                  color: '#FFFFFF'
                }}
              >
                {suggestion.topic}
              </h3>
            </div>

            {/* Middle section - Stats */}
            <div 
              style={{
                display: 'flex',
                gap: '24px',
                flexShrink: 0
              }}
            >
              {/* Questions correct */}
              <div 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: '10px',
                  minWidth: '140px'
                }}
              >
                <span 
                  style={{
                    fontFamily: 'Sora',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '18px',
                    textAlign: 'left',
                    color: '#F0F0F1'
                  }}
                >
                  Questões acertadas
                </span>
                <span 
                  style={{
                    fontFamily: 'Sora',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px',
                    textAlign: 'left',
                    color: '#CECFD2'
                  }}
                >
                  {suggestion.questionsCorrect}
                </span>
              </div>

              {/* Time studied */}
              <div 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: '10px',
                  minWidth: '100px'
                }}
              >
                <span 
                  style={{
                    fontFamily: 'Sora',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '18px',
                    textAlign: 'left',
                    color: '#F0F0F1'
                  }}
                >
                  Tempo estudado
                </span>
                <span 
                  style={{
                    fontFamily: 'Sora',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '20px',
                    textAlign: 'left',
                    color: '#F0F0F1'
                  }}
                >
                  {suggestion.timeStudied}
                </span>
              </div>

              {/* Performance */}
              <div 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  gap: '10px',
                  minWidth: '120px'
                }}
              >
                <span 
                  style={{
                    fontFamily: 'Sora',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '18px',
                    textAlign: 'left',
                    color: '#F0F0F1'
                  }}
                >
                  Desempenho
                </span>
                <div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <span 
                    style={{
                      fontFamily: 'Sora',
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '20px',
                      textAlign: 'left',
                      color: '#F0F0F1'
                    }}
                  >
                    {suggestion.performance}
                  </span>
                  <button
                    style={{ 
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0,
                      width: '16px',
                      height: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                    title="Informações sobre desempenho"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="8" cy="8" r="6.67" stroke="#85888E" strokeWidth="1.33"/>
                      <path d="M6.06 6.67a2 2 0 0 1 3.88 0.67c0 1.33-2 2-2 2" stroke="#85888E" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 11.33h.01" stroke="#85888E" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Right section - Action button */}
            <button
              onClick={() => onReview(suggestion)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px',
                padding: '10px 14px',
                borderRadius: '8px',
                width: '200px',
                height: '40px',
                flexShrink: 0,
                ...getButtonStyle(suggestion.priority),
                boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
                cursor: 'pointer',
                border: 'none'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span 
                style={{
                  fontFamily: 'Sora',
                  fontWeight: 600,
                  fontSize: '14px',
                  lineHeight: '20px',
                  textAlign: 'left'
                }}
              >
                Revisar meta
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
