import React, { useState, useEffect } from 'react';
import { X } from "lucide-react";
import { NumberInputControls } from '../inputs';
import { sprintService } from '@/services/sprint.service';

interface PerformanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: FormData) => void;
  metaId: string;
}

interface FormData {
  questionsResolved: number;
  correctAnswers: number;
  hours: number;
  minutes: number;
}

export const PerformanceModal: React.FC<PerformanceModalProps> = ({ isOpen, onClose, onSave, metaId }) => {
  const [formData, setFormData] = useState<FormData>({
    questionsResolved: 18,
    correctAnswers: 12,
    hours: 1,
    minutes: 30
  });

  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

  const handleSave = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Validar se os valores são números válidos
      const totalQuestoes = Number(formData.questionsResolved);
      const questoesCorretas = Number(formData.correctAnswers);
      const horas = Number(formData.hours);
      const minutos = Number(formData.minutes);

      console.log('Valores validados:', {
        totalQuestoes,
        questoesCorretas,
        horas,
        minutos
      });

      // Validar se são números válidos
      if (isNaN(totalQuestoes) || isNaN(questoesCorretas) || isNaN(horas) || isNaN(minutos)) {
        throw new Error('Valores inválidos fornecidos');
      }

      // Converter horas e minutos para o formato "HH:MM"
      const tempoEstudado = `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}`;

      console.log('Dados finais sendo enviados:', {
        tempoEstudado,
        totalQuestoes,
        questoesCorretas
      });

      // Chamar a API
      await sprintService.concluirMeta(metaId, {
        tempoEstudado,
        totalQuestoes,
        questoesCorretas
      });

      // Chamar o callback de sucesso
      onSave(formData);
      onClose();
    } catch (err) {
      console.error('Erro ao salvar desempenho:', err);
      setError('Erro ao salvar os dados. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
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
          borderRadius: '16px',
          boxShadow: '0px 8px 32px 0px rgba(0, 0, 0, 0.3)',
          width: isMobile ? 'calc(100% - 32px)' : '508px',
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
              fontWeight: 400,
              fontSize: isMobile ? '16px' : '18px',
              lineHeight: '1.556em',
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
              padding: '8px 12px',
              background: 'transparent',
              border: 'none',
              borderRadius: '8px',
              width: '44px',
              height: '44px'
            }}
          >
            <X style={{ width: '20px', height: '20px', color: '#F0F0F1', strokeWidth: '1.67px' }} />
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
          <div className="flex flex-col" style={{ gap: '12px' }}>
            <h3
              style={{
                fontFamily: 'Sora',
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '1.5em',
                color: '#F7F7F7'
              }}
            >
              Questões
            </h3>
            
            <div className={isMobile ? "flex flex-col" : "flex flex-row"} style={{ gap: '16px' }}>
              {/* Questões resolvidas */}
              <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                <label
                  style={{
                    fontFamily: 'Sora',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '1.429em',
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
                    onChange={(e) => {
                      const value = parseInt(e.target.value, 10);
                      handleInputChange('questionsResolved', isNaN(value) ? 0 : value);
                    }}
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
                    lineHeight: '1.429em',
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
                    onChange={(e) => {
                      const value = parseInt(e.target.value, 10);
                      handleInputChange('correctAnswers', isNaN(value) ? 0 : value);
                    }}
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
          <div className="flex flex-col" style={{ gap: '12px' }}>
            <h3
              style={{
                fontFamily: 'Sora',
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '1.5em',
                color: '#F7F7F7'
              }}
            >
              Tempo
            </h3>
            
            <div className="flex flex-row" style={{ gap: '16px' }}>
              {/* Horas */}
              <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                <label
                  style={{
                    fontFamily: 'Sora',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '1.429em',
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
                    onChange={(e) => {
                      const value = parseInt(e.target.value, 10);
                      handleInputChange('hours', isNaN(value) ? 0 : value);
                    }}
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
                    lineHeight: '1.429em',
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
                    onChange={(e) => {
                      const value = parseInt(e.target.value, 10);
                      handleInputChange('minutes', isNaN(value) ? 0 : value);
                    }}
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

        {/* Error Message */}
        {error && (
          <div
            style={{
              padding: isMobile ? '0px 16px' : '0px 24px',
              marginBottom: '-4px'
            }}
          >
            <div
              style={{
                padding: '12px 16px',
                background: '#55160C',
                border: '1px solid #912018',
                borderRadius: '8px',
                color: '#FECDCA',
                fontFamily: 'Sora',
                fontSize: '14px',
                lineHeight: '1.429em'
              }}
            >
              {error}
            </div>
          </div>
        )}

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
                  lineHeight: '1.429em',
                  color: '#CECFD2',
                  padding: '0px 2px'
                }}
              >
                Cancelar
              </span>
            </button>

            <button
              onClick={handleSave}
              disabled={isLoading}
              className="flex items-center justify-center hover:bg-[#B53D25] transition-all duration-200"
              style={{
                gap: '4px',
                padding: '10px 14px',
                background: isLoading ? '#85888E' : '#C74228',
                border: '2px solid transparent',
                borderRadius: '8px',
                boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
                position: 'relative',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                opacity: isLoading ? 0.6 : 1
              }}
            >
              {/* Gradiente de borda */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-2px',
                  borderRadius: '8px',
                  padding: '2px',
                  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                  pointerEvents: 'none'
                }}
              />
              <span
                style={{
                  fontFamily: 'Sora',
                  fontWeight: 600,
                  fontSize: '14px',
                  lineHeight: '1.429em',
                  color: '#FFFFFF',
                  padding: '0px 2px',
                  position: 'relative',
                  zIndex: 1
                }}
              >
                {isLoading ? 'Salvando...' : 'Salvar registro'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
