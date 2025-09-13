
interface ReviewSuggestion {
  id: string;
  topic: string;
  studyType: string;
  questionsCorrect: string;
  timeStudied: string;
  performance: string;
  priority: 'high' | 'medium' | 'low';
}

import React, { useState, useEffect } from 'react';

interface ReviewSuggestionCardProps {
  suggestion: ReviewSuggestion;
  onReview: (suggestion: ReviewSuggestion) => void;
}

export const ReviewSuggestionCard = ({ suggestion, onReview }: ReviewSuggestionCardProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
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
        border: '2px solid',
        borderImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%) 1',
        color: '#FFFFFF'
      };
    } else {
      return {
        background: '#562524',
        border: '1px solid #C74228',
        color: '#CECFD2'
      };
    }
  };

  return (
    <>
      {isMobile ? (
        // VERSÃO MOBILE - Layout vertical conforme Figma
        <div 
          className="flex flex-col w-full"
          style={{
            background: '#272738',
            border: '1px solid #2C2C45',
            borderRadius: '8px'
          }}
        >
          {/* Top bar - vermelha */}
          <div 
            style={{
              height: '8px',
              background: '#832424',
              borderRadius: '8px 8px 0 0'
            }}
          />
          
          {/* Content */}
          <div 
            className="flex flex-col"
            style={{
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
                lineHeight: '1.5em',
                letterSpacing: '-1%',
                color: '#F0F0F1'
              }}
            >
              {suggestion.topic}
            </h3>

            {/* Primeira linha - Badge e Tempo */}
            <div 
              className="flex justify-between items-center"
              style={{ gap: '16px' }}
            >
              {/* Badge */}
              <div 
                className="flex flex-col"
                style={{ gap: '6px' }}
              >
                <span
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '1.33em',
                    color: '#F0F0F1'
                  }}
                >
                  Questões acertadas
                </span>
                <div
                  className="rounded-full px-2 py-1"
                  style={{
                    background: '#515153',
                    border: '1px solid',
                    borderImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%) 1',
                    borderRadius: '9999px'
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'Inter',
                      fontWeight: 500,
                      fontSize: '12px',
                      lineHeight: '1.5em',
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
                className="flex flex-col items-end"
                style={{ gap: '4px' }}
              >
                <span
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '1.33em',
                    color: '#F0F0F1'
                  }}
                >
                  Tempo estudado
                </span>
                <span
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 600,
                    fontSize: '14px',
                    lineHeight: '1.43em',
                    letterSpacing: '-0.5%',
                    color: '#F0F0F1'
                  }}
                >
                  2h45m
                </span>
              </div>
            </div>

            {/* Segunda linha - Questões e Desempenho */}
            <div 
              className="flex justify-between items-center"
              style={{ gap: '16px' }}
            >
              {/* Questões acertadas */}
              <div 
                className="flex flex-col"
                style={{ gap: '4px' }}
              >
                <span
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '1.33em',
                    color: '#F0F0F1'
                  }}
                >
                  Questões acertadas
                </span>
                <span
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 600,
                    fontSize: '14px',
                    lineHeight: '1.43em',
                    letterSpacing: '-0.5%',
                    color: '#F0F0F1'
                  }}
                >
                  {suggestion.questionsCorrect}
                </span>
              </div>

              {/* Desempenho */}
              <div 
                className="flex flex-col items-end"
                style={{ gap: '4px' }}
              >
                <span
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '1.33em',
                    color: '#F0F0F1'
                  }}
                >
                  Desempenho
                </span>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="8" cy="8" r="6.67" stroke="#85888E" strokeWidth="1.33"/>
                      <path d="M6.06 6.67a2 2 0 0 1 3.88 0.67c0 1.33-2 2-2 2" stroke="#85888E" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M8 11.33h.01" stroke="#85888E" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span
                    style={{
                      fontFamily: 'Inter',
                      fontWeight: 600,
                      fontSize: '14px',
                      lineHeight: '1.43em',
                      letterSpacing: '-0.5%',
                      color: '#F0F0F1'
                    }}
                  >
                    {suggestion.performance}
                  </span>
                </div>
              </div>
            </div>

            {/* Botão Revisar meta */}
            <button
              onClick={() => onReview(suggestion)}
              className="w-full flex items-center justify-center gap-2 hover:bg-[#333346] transition-all duration-200 cursor-pointer"
              style={{
                padding: '10px 14px',
                background: '#562524',
                border: '1px solid #C74228',
                borderRadius: '8px',
                boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)'
              }}
            >
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.940167 5.98281C0.847978 5.83684 0.801884 5.76385 0.776081 5.65128C0.756699 5.56672 0.756699 5.43336 0.776081 5.3488C0.801884 5.23623 0.847978 5.16324 0.940167 5.01727C1.70199 3.811 3.96961 0.761544 7.42533 0.761544C10.881 0.761544 13.1487 3.811 13.9105 5.01727C14.0027 5.16324 14.0488 5.23623 14.0746 5.3488C14.094 5.43336 14.094 5.56672 14.0746 5.65128C14.0488 5.76385 14.0027 5.83684 13.9105 5.98281C13.1487 7.18909 10.8811 10.2385 7.42533 10.2385C3.96961 10.2385 1.70199 7.18909 0.940167 5.98281Z" stroke="#CECFD2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7.42533 7.53083C8.5469 7.53083 9.45611 6.62161 9.45611 5.50004C9.45611 4.37847 8.5469 3.46926 7.42533 3.46926C6.30376 3.46926 5.39454 4.37847 5.39454 5.50004C5.39454 6.62161 6.30376 7.53083 7.42533 7.53083Z" stroke="#CECFD2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span
                style={{
                  fontFamily: 'var(--font-sora)',
                  fontWeight: 600,
                  fontSize: '14px',
                  lineHeight: '1.43em',
                  color: '#CECFD2'
                }}
              >
                Revisar meta
              </span>
            </button>
          </div>
        </div>
      ) : (
        // VERSÃO DESKTOP - Layout horizontal original
        <div 
          className="flex relative"
          style={{
            background: '#20202C',
            border: '1px solid #2C2C45',
            borderRadius: '8px 16px 16px 8px'
          }}
        >
          {/* Priority indicator */}
          <div 
            style={{
              width: '8px',
              background: getPriorityColor(suggestion.priority),
              borderRadius: '8px 0px 0px 8px'
            }}
          />
          
          {/* Content */}
          <div 
            className="flex justify-between items-center"
            style={{
              padding: '20px',
              gap: '24px',
              flex: 1
            }}
          >
            {/* Left section - Topic and badge */}
            <div 
              className="flex flex-col"
              style={{
                gap: '8px',
                width: '335px'
              }}
            >
              {/* Badge */}
              <div 
                className="inline-flex items-center"
                style={{
                  padding: '2px 8px',
                  background: '#515153',
                  border: '1px solid',
                  borderImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%) 1',
                  borderRadius: '9999px',
                  width: 'fit-content'
                }}
              >
                <span 
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 500,
                    fontSize: '12px',
                    lineHeight: '1.5em',
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
                  fontFamily: 'var(--font-sora)',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '1.5em',
                  textAlign: 'left',
                  color: '#FFFFFF'
                }}
              >
                {suggestion.topic}
              </h3>
            </div>

            {/* Middle section - Stats */}
            <div 
              className="flex"
              style={{
                gap: '24px'
              }}
            >
              {/* Questions correct */}
              <div 
                className="flex flex-col justify-center"
                style={{
                  gap: '10px'
                }}
              >
                <span 
                  style={{
                    fontFamily: 'var(--font-sora)',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '1.5em',
                    textAlign: 'left',
                    color: '#F0F0F1'
                  }}
                >
                  Questões acertadas
                </span>
                <span 
                  style={{
                    fontFamily: 'var(--font-sora)',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '1.4285714285714286em',
                    textAlign: 'left',
                    color: '#CECFD2'
                  }}
                >
                  {suggestion.questionsCorrect}
                </span>
              </div>

              {/* Time studied */}
              <div 
                className="flex flex-col justify-center"
                style={{
                  gap: '10px'
                }}
              >
                <span 
                  style={{
                    fontFamily: 'var(--font-sora)',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '1.5em',
                    textAlign: 'left',
                    color: '#F0F0F1'
                  }}
                >
                  Tempo estudado
                </span>
                <span 
                  style={{
                    fontFamily: 'var(--font-sora)',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '1.4285714285714286em',
                    textAlign: 'left',
                    color: '#F0F0F1'
                  }}
                >
                  {suggestion.timeStudied}
                </span>
              </div>

              {/* Performance */}
              <div 
                className="flex flex-col justify-center"
                style={{
                  gap: '10px'
                }}
              >
                <span 
                  style={{
                    fontFamily: 'var(--font-sora)',
                    fontWeight: 400,
                    fontSize: '12px',
                    lineHeight: '1.5em',
                    textAlign: 'left',
                    color: '#F0F0F1'
                  }}
                >
                  Desempenho
                </span>
                <div 
                  className="flex items-center"
                  style={{
                    gap: '6px'
                  }}
                >
                  <span 
                    style={{
                      fontFamily: 'var(--font-sora)',
                      fontWeight: 400,
                      fontSize: '14px',
                      lineHeight: '1.4285714285714286em',
                      textAlign: 'left',
                      color: '#F0F0F1'
                    }}
                  >
                    {suggestion.performance}
                  </span>
                  <button
                    className="w-4 h-4 flex items-center justify-center hover:opacity-80 transition-opacity"
                    style={{ 
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0
                    }}
                    title="Informações sobre desempenho"
                  >
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.51596 5.45447C5.67626 4.9988 5.99265 4.61455 6.40911 4.3698C6.82556 4.12504 7.3152 4.03558 7.7913 4.11724C8.26739 4.1989 8.69923 4.44643 9.01031 4.81597C9.3214 5.18552 9.49166 5.65324 9.49094 6.13629C9.49094 7.49992 7.4455 8.18173 7.4455 8.18173M7.50004 10.909H7.50686M14.3182 7.49992C14.3182 11.2655 11.2656 14.3181 7.50004 14.3181C3.73448 14.3181 0.681898 11.2655 0.681898 7.49992C0.681898 3.73436 3.73448 0.681773 7.50004 0.681773C11.2656 0.681773 14.3182 3.73436 14.3182 7.49992Z" stroke="#85888E" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Right section - Action button */}
            <button
              onClick={() => onReview(suggestion)}
              className="flex items-center justify-center hover:opacity-90 hover:shadow-lg transition-all duration-200"
              style={{
                gap: '4px',
                padding: '10px 14px',
                borderRadius: '8px',
                width: '200px',
                height: '40px',
                ...getButtonStyle(suggestion.priority),
                boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
                cursor: 'pointer',
                border: 'none'
              }}
            >
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1498 16.15L11.0499 11.05M12.7499 6.80001C12.7499 10.0861 10.086 12.75 6.79988 12.75C3.51381 12.75 0.849913 10.0861 0.849913 6.80001C0.849913 3.51393 3.51381 0.850037 6.79988 0.850037C10.086 0.850037 12.7499 3.51393 12.7499 6.80001Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span 
                style={{
                  fontFamily: 'var(--font-sora)',
                  fontWeight: 600,
                  fontSize: '14px',
                  lineHeight: '1.4285714285714286em',
                  textAlign: 'left'
                }}
              >
                Revisar meta
              </span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};
