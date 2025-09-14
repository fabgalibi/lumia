import React, { useState, useEffect } from 'react';
import { X } from "lucide-react";
import { NumberInputControls } from '../inputs';

interface PerformanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: FormData) => void;
}

interface FormData {
  questionsResolved: number;
  correctAnswers: number;
  hours: number;
  minutes: number;
}

export const PerformanceModal: React.FC<PerformanceModalProps> = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState<FormData>({
    questionsResolved: 18,
    correctAnswers: 12,
    hours: 1,
    minutes: 30
  });

  const [isMobile, setIsMobile] = useState(false);

  // Detectar se é mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const handleInputChange = (field: keyof FormData, value: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 overflow-y-auto"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 999999
      }}
    >
      <div
        className="fixed flex flex-col"
        style={{
          background: '#202028',
          border: '1px solid #272737',
          borderRadius: '12px',
          boxShadow: '0px 8px 32px 0px rgba(0, 0, 0, 0.3)',
          width: isMobile ? '343px' : '508px',
          height: 'fit-content',
          maxHeight: '90vh',
          right: isMobile ? 'auto' : '40px',
          bottom: isMobile ? 'auto' : '40px',
          top: isMobile ? '50%' : 'auto',
          left: isMobile ? '50%' : 'auto',
          transform: isMobile ? 'translate(-50%, -50%)' : 'none'
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between"
          style={{
            background: '#252532',
            borderBottom: '1.5px solid #272737',
            borderTopLeftRadius: '12px',
            borderTopRightRadius: '12px',
            padding: isMobile ? '16px 16px 12px' : '20px 24px 16px',
            gap: '8px'
          }}
        >
          <h2
            style={{
              fontFamily: 'Sora',
              fontWeight: 600,
              fontSize: isMobile ? '16px' : '18px',
              lineHeight: '1.5em',
              color: '#F7F7F7',
              flex: 1
            }}
          >
            Registrar desempenho
          </h2>
          
          <button
            onClick={onClose}
            className="flex items-center justify-center hover:bg-[#333346] transition-all duration-200 cursor-pointer"
            style={{
              padding: '12px',
              background: 'transparent',
              border: 'none',
              borderRadius: '8px'
            }}
          >
            <X className="w-5 h-5" style={{ color: '#F0F0F1' }} />
          </button>
        </div>

        {/* Content */}
        <div
          className="flex flex-col flex-1"
          style={{
            padding: isMobile ? '20px 16px 24px' : '20px 24px 24px',
            overflowY: 'auto',
            gap: '16px'
          }}
        >
          {/* Questões */}
          <div className="flex flex-col" style={{ gap: isMobile ? '12px' : '12px' }}>
            <h3
              style={{
                fontFamily: 'Sora',
                fontWeight: 600,
                fontSize: isMobile ? '14px' : '16px',
                lineHeight: '1.4285714285714286em',
                color: '#F7F7F7'
              }}
            >
              Questões
            </h3>
            
            <div className="flex flex-col" style={{ gap: isMobile ? '16px' : '16px' }}>
              {/* Questões resolvidas */}
              <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                <label
                  style={{
                    fontFamily: 'Sora',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '1.4285714285714286em',
                    color: '#CECFD2'
                  }}
                >
                  Questões resolvidas
                </label>
                <div
                  className="flex items-center w-full"
                  style={{
                    background: '#2D2D3B',
                    border: '1px solid #373A41',
                    borderRadius: '8px',
                    padding: '10px 14px',
                    boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)',
                    minWidth: 0,
                    gap: '4px'
                  }}
                >
                  <input
                    type="number"
                    value={formData.questionsResolved}
                    onChange={(e) => handleInputChange('questionsResolved', parseInt(e.target.value) || 0)}
                    min="0"
                    max="999"
                    step="1"
                    className="flex-1 bg-transparent border-none outline-none"
                    style={{
                      fontFamily: 'Sora',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '1.5em',
                      color: '#F7F7F7',
                      WebkitAppearance: 'none',
                      MozAppearance: 'textfield'
                    }}
                  />
                  <NumberInputControls
                    onIncrement={() => handleInputChange('questionsResolved', Math.min(999, formData.questionsResolved + 1))}
                    onDecrement={() => handleInputChange('questionsResolved', Math.max(0, formData.questionsResolved - 1))}
                  />
                </div>
              </div>

              {/* Quantidade de acertos */}
              <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                <label
                  style={{
                    fontFamily: 'Sora',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '1.4285714285714286em',
                    color: '#CECFD2'
                  }}
                >
                  Quantidade de acertos
                </label>
                <div
                  className="flex items-center w-full"
                  style={{
                    background: '#2D2D3B',
                    border: '1px solid #373A41',
                    borderRadius: '8px',
                    padding: '10px 14px',
                    boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)',
                    minWidth: 0,
                    gap: '4px'
                  }}
                >
                  <input
                    type="number"
                    value={formData.correctAnswers}
                    onChange={(e) => handleInputChange('correctAnswers', parseInt(e.target.value) || 0)}
                    min="0"
                    max="999"
                    step="1"
                    className="flex-1 bg-transparent border-none outline-none"
                    style={{
                      fontFamily: 'Sora',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '1.5em',
                      color: '#F7F7F7',
                      WebkitAppearance: 'none',
                      MozAppearance: 'textfield'
                    }}
                  />
                  <NumberInputControls
                    onIncrement={() => handleInputChange('correctAnswers', Math.min(999, formData.correctAnswers + 1))}
                    onDecrement={() => handleInputChange('correctAnswers', Math.max(0, formData.correctAnswers - 1))}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Tempo */}
          <div className="flex flex-col" style={{ gap: isMobile ? '12px' : '12px' }}>
            <h3
              style={{
                fontFamily: 'Sora',
                fontWeight: 600,
                fontSize: isMobile ? '14px' : '16px',
                lineHeight: '1.4285714285714286em',
                color: '#F7F7F7'
              }}
            >
              Tempo
            </h3>
            
            <div className="flex" style={{ gap: isMobile ? '16px' : '16px' }}>
              {/* Horas */}
              <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                <label
                  style={{
                    fontFamily: 'Sora',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '1.4285714285714286em',
                    color: '#CECFD2'
                  }}
                >
                  Horas
                </label>
                <div
                  className="flex items-center w-full"
                  style={{
                    background: '#2D2D3B',
                    border: '1px solid #373A41',
                    borderRadius: '8px',
                    padding: '10px 14px',
                    boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)',
                    minWidth: 0,
                    gap: '4px'
                  }}
                >
                  <input
                    type="number"
                    value={formData.hours}
                    onChange={(e) => handleInputChange('hours', parseInt(e.target.value) || 0)}
                    min="0"
                    max="23"
                    step="1"
                    className="flex-1 bg-transparent border-none outline-none"
                    style={{
                      fontFamily: 'Sora',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '1.5em',
                      color: '#F7F7F7',
                      WebkitAppearance: 'none',
                      MozAppearance: 'textfield'
                    }}
                  />
                  <NumberInputControls
                    onIncrement={() => handleInputChange('hours', Math.min(23, formData.hours + 1))}
                    onDecrement={() => handleInputChange('hours', Math.max(0, formData.hours - 1))}
                  />
                </div>
              </div>

              {/* Minutos */}
              <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                <label
                  style={{
                    fontFamily: 'Sora',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '1.4285714285714286em',
                    color: '#CECFD2'
                  }}
                >
                  Minutos
                </label>
                <div
                  className="flex items-center w-full"
                  style={{
                    background: '#2D2D3B',
                    border: '1px solid #373A41',
                    borderRadius: '8px',
                    padding: '10px 14px',
                    boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)',
                    minWidth: 0,
                    gap: '4px'
                  }}
                >
                  <input
                    type="number"
                    value={formData.minutes}
                    onChange={(e) => handleInputChange('minutes', parseInt(e.target.value) || 0)}
                    min="0"
                    max="59"
                    step="1"
                    className="flex-1 bg-transparent border-none outline-none"
                    style={{
                      fontFamily: 'Sora',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '1.5em',
                      color: '#F7F7F7',
                      WebkitAppearance: 'none',
                      MozAppearance: 'textfield'
                    }}
                  />
                  <NumberInputControls
                    onIncrement={() => handleInputChange('minutes', Math.min(59, formData.minutes + 1))}
                    onDecrement={() => handleInputChange('minutes', Math.max(0, formData.minutes - 1))}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className="flex flex-col flex-shrink-0"
          style={{
            gap: '20px',
            padding: '0px 0px 20px',
            borderBottomLeftRadius: '12px',
            borderBottomRightRadius: '12px'
          }}
        >
          {/* Divider */}
          <div
            style={{
              height: '1px',
              background: '#22262F',
              width: '100%'
            }}
          />
          
          {/* Actions */}
          <div
            className="flex justify-end"
            style={{
              gap: '12px',
              padding: isMobile ? '0px 16px' : '0px 24px'
            }}
          >
            <button
              onClick={onClose}
              className="flex items-center justify-center hover:bg-[#3A3A4A] transition-all duration-200 cursor-pointer"
              style={{
                gap: '4px',
                padding: '10px 14px',
                background: '#2D2D45',
                border: 'none',
                borderRadius: '8px',
                boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)'
              }}
            >
              <span
                style={{
                  fontFamily: 'Sora',
                  fontWeight: 600,
                  fontSize: '14px',
                  lineHeight: '1.4285714285714286em',
                  color: '#CECFD2'
                }}
              >
                Cancelar
              </span>
            </button>

            <button
              onClick={handleSave}
              className="flex items-center justify-center hover:bg-[#B53D25] transition-all duration-200 cursor-pointer"
              style={{
                gap: '4px',
                padding: '10px 14px',
                background: '#C74228',
                border: '2px solid',
                borderImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%) 1',
                borderRadius: '8px',
                boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)'
              }}
            >
              <span
                style={{
                  fontFamily: 'Sora',
                  fontWeight: 600,
                  fontSize: '14px',
                  lineHeight: '1.4285714285714286em',
                  color: '#FFFFFF'
                }}
              >
                Salvar registro
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
