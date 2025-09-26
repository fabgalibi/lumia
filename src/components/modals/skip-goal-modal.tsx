import React, { useState } from 'react';

interface SkipGoalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSkip: (reason: string) => void;
  goalName?: string;
}

export const SkipGoalModal: React.FC<SkipGoalModalProps> = ({
  isOpen,
  onClose,
  onSkip,
  goalName: _goalName = "Meta"
}) => {
  const [reason, setReason] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await onSkip(reason.trim() || 'Sem motivo especificado');
      setReason('');
      onClose();
    } catch (error) {
      console.error('Erro ao pular meta:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setReason('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[100] pointer-events-none">
      <div 
        className="relative bg-[#252532] rounded-xl shadow-2xl overflow-hidden pointer-events-auto"
        style={{ width: '512px' }}
      >
        {/* Background pattern decorative */}
        <div className="absolute -top-30 -left-30 w-84 h-84 opacity-10">
          <div className="w-full h-full rounded-full border border-[#2B2B3D]"></div>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#272737]" style={{ borderBottomWidth: '1.5px' }}>
          <h2 
            className="text-[#F7F7F7] font-semibold"
            style={{
              fontFamily: 'Sora',
              fontWeight: 600,
              fontSize: '18px',
              lineHeight: '1.56em'
            }}
          >
            Pular meta
          </h2>
          
          <button
            onClick={handleClose}
            className="flex items-center justify-center w-11 h-11 rounded-lg hover:bg-[#2D2D42] transition-colors"
            style={{ width: '44px', height: '44px' }}
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none"
            >
              <path 
                d="M15 5L5 15M5 5L15 15" 
                stroke="#F0F0F1" 
                strokeWidth="1.67" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>


        {/* Content */}
        <div className="px-6 py-0" style={{ height: '220px' }}>
          <div className="h-full flex flex-col gap-5">
            {/* Textarea Field */}
            <div className="flex-1 flex flex-col gap-1.5">
              <label 
                className="text-[#CECFD2] font-medium"
                style={{
                  fontFamily: 'DM Sans',
                  fontWeight: 500,
                  fontSize: '14px',
                  lineHeight: '1.43em'
                }}
              >
                Antes de prosseguir, insira abaixo o motivo para você estar pulando essa meta.
              </label>
              
              <div className="flex-1 relative">
                <textarea
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Digite o motivo"
                  maxLength={250}
                  className="w-full h-full resize-none bg-[#2D2D3B] border border-[#373A41] rounded-lg text-[#85888E] placeholder-[#85888E] focus:outline-none focus:ring-2 focus:ring-[#C74228] focus:border-transparent"
                  style={{
                    fontFamily: 'DM Sans',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '1.5em',
                    padding: '12px 14px'
                  }}
                />
              </div>
              
              <div 
                className="text-[#94979C] text-left"
                style={{
                  fontFamily: 'Sora',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '1.43em'
                }}
              >
                {reason.length}/250 caracteres.
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col items-center gap-5 pb-5">
          {/* Divider */}
          <div className="w-full h-px bg-[#22262F]"></div>
          
          {/* Actions */}
          <div className="flex justify-end items-center gap-3 px-6 w-full" style={{ gap: '12px' }}>
            <button
              onClick={handleClose}
              className="bg-[#2D2D45] text-[#CECFD2] rounded-lg font-semibold hover:bg-[#3D3D55] transition-colors"
              style={{
                fontFamily: 'Sora',
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '1.43em',
                padding: '10px 14px',
                boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)'
              }}
            >
              Cancelar
            </button>
            
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="bg-[#C74228] text-white rounded-lg font-semibold hover:bg-[#D55238] disabled:opacity-50 disabled:cursor-not-allowed transition-colors relative"
              style={{
                fontFamily: 'Sora',
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '1.43em',
                padding: '10px 14px',
                border: '2px solid',
                borderImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%) 1',
                boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)'
              }}
            >
              {isSubmitting ? 'Processando...' : 'Prosseguir'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
