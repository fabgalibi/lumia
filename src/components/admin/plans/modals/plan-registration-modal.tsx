import React, { useState } from 'react';
import { X } from 'lucide-react';

interface PlanRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const PlanRegistrationModal: React.FC<PlanRegistrationModalProps> = ({
  isOpen,
  onClose,
  onSuccess
}) => {
  const [nomePlano, setNomePlano] = useState('');
  const [nomeCargo, setNomeCargo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [duracao, setDuracao] = useState('');
  const [disciplinasSelecionadas, setDisciplinasSelecionadas] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!nomePlano.trim() || !nomeCargo.trim()) {
      return;
    }

    setIsSubmitting(true);
    try {
      // TODO: Implementar chamada para API de criação de plano
      console.log('Criando plano:', {
        nome: nomePlano,
        nomeCargo,
        descricao,
        duracao,
        disciplinas: disciplinasSelecionadas
      });

      // Simular delay da API
      await new Promise(resolve => setTimeout(resolve, 1000));

      onSuccess();
      onClose();

      // Reset form
      setNomePlano('');
      setNomeCargo('');
      setDescricao('');
      setDuracao('');
      setDisciplinasSelecionadas([]);

    } catch (error: any) {
      console.error('Erro ao criar plano:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      onClose();
    }
  };

  const isFormValid = nomePlano.trim() && nomeCargo.trim();

  if (!isOpen) return null;

  // Estilos para scrollbar customizada
  const scrollbarStyles = `
    .custom-scrollbar {
      scrollbar-width: thin;
      scrollbar-color: #4A4D56 transparent;
    }
    
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
    }
    
    .custom-scrollbar::-webkit-scrollbar-track {
      background: transparent;
      margin: 0 0 0 2px;
    }
    
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #4A4D56;
      border-radius: 3px;
      border: 1px solid #2D2D3B;
    }
    
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: #6366F1;
    }
  `;

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
        justifyContent: 'flex-end',
        zIndex: 1000
      }}
      onClick={handleClose}
    >
        <div
          style={{
            backgroundColor: '#202028',
            border: '1px solid #272737',
            borderRadius: '16px',
            width: '500px',
            height: '95vh',
            maxHeight: '95vh',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            marginLeft: 'auto',
            marginRight: '24px'
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
            borderBottom: '1.5px solid #272737',
            borderTopLeftRadius: '16px',
            borderTopRightRadius: '16px',
            borderBottomLeftRadius: '0px',
            borderBottomRightRadius: '0px'
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
            Cadastrar novo plano
          </h2>
          <button
            onClick={handleClose}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              padding: '8px',
              background: 'transparent',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              color: '#CECFD2'
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
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            flex: 1,
            overflow: 'hidden'
          }}
        >
          {/* Form Fields */}
          <div 
            className="custom-scrollbar"
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '20px',
              flex: 1,
              overflowY: 'auto',
              paddingRight: '0px'
            }}
          >
            {/* Nome do plano */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label
                style={{
                  fontFamily: 'Sora',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '1.4285714285714286em',
                  color: '#CECFD2',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2px'
                }}
              >
                Nome do plano
                <span style={{ color: '#F97066' }}>*</span>
              </label>
              <input
                type="text"
                value={nomePlano}
                onChange={(e) => setNomePlano(e.target.value)}
                placeholder="Insira o nome do plano"
                style={{
                  padding: '10px 14px',
                  background: '#2D2D3B',
                  border: '1px solid #373A41',
                  borderRadius: '8px',
                  color: '#F7F7F7',
                  fontFamily: 'Sora',
                  fontSize: '16px',
                  outline: 'none',
                  boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)'
                }}
              />
            </div>

            {/* Nome do cargo */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label
                style={{
                  fontFamily: 'Sora',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '1.4285714285714286em',
                  color: '#CECFD2',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2px'
                }}
              >
                Nome do cargo
                <span style={{ color: '#F97066' }}>*</span>
              </label>
              <input
                type="text"
                value={nomeCargo}
                onChange={(e) => setNomeCargo(e.target.value)}
                placeholder="Insira o nome do cargo"
                style={{
                  padding: '10px 14px',
                  background: '#2D2D3B',
                  border: '1px solid #373A41',
                  borderRadius: '8px',
                  color: '#F7F7F7',
                  fontFamily: 'Sora',
                  fontSize: '16px',
                  outline: 'none',
                  boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)'
                }}
              />
            </div>

            {/* Descrição */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label
                style={{
                  fontFamily: 'Sora',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '1.4285714285714286em',
                  color: '#CECFD2'
                }}
              >
                Descrição
              </label>
              <textarea
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                placeholder="Insira a descrição do plano"
                maxLength={400}
                style={{
                  padding: '12px 14px',
                  background: '#2D2D3B',
                  border: '1px solid #373A41',
                  borderRadius: '8px',
                  color: '#F7F7F7',
                  fontFamily: 'Sora',
                  fontSize: '16px',
                  outline: 'none',
                  resize: 'none',
                  height: '120px',
                  boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)'
                }}
              />
              <div
                style={{
                  fontFamily: 'Sora',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '1.4285714285714286em',
                  color: '#94979C',
                  textAlign: 'right'
                }}
              >
                {descricao.length}/400 caracteres
              </div>
            </div>

            {/* Duração */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label
                style={{
                  fontFamily: 'Sora',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '1.4285714285714286em',
                  color: '#F7F7F7',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2px'
                }}
              >
                Duração (meses)
                <span style={{ color: '#F97066' }}>*</span>
              </label>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 12px',
                  background: '#2D2D3B',
                  border: '1px solid #2D2D36',
                  borderRadius: '8px',
                  boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)',
                  cursor: 'pointer'
                }}
                onClick={() => {
                  // TODO: Implementar seletor de data
                  const months = prompt('Digite a duração em meses:');
                  if (months && !isNaN(Number(months))) {
                    setDuracao(months);
                  }
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.66667 1.66667V4.16667M13.3333 1.66667V4.16667M2.91667 8.33333H17.0833M4.16667 3.33333H15.8333C16.7538 3.33333 17.5 4.07952 17.5 5V16.6667C17.5 17.5871 16.7538 18.3333 15.8333 18.3333H4.16667C3.24619 18.3333 2.5 17.5871 2.5 16.6667V5C2.5 4.07952 3.24619 3.33333 4.16667 3.33333Z" stroke="#94979C" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span
                  style={{
                    fontFamily: 'Sora',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '1.5em',
                    color: duracao ? '#F7F7F7' : '#CECFD2'
                  }}
                >
                  {duracao ? `${duracao} meses` : 'Selecionar data'}
                </span>
              </div>
            </div>

            {/* Disciplinas */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <label
                style={{
                  fontFamily: 'Sora',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '1.4285714285714286em',
                  color: '#F7F7F7'
                }}
              >
                Disciplinas
              </label>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 14px',
                  background: '#2D2D3B',
                  border: '1px solid #373A41',
                  borderRadius: '8px',
                  boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)',
                  cursor: 'pointer',
                  minHeight: '48px'
                }}
                onClick={() => {
                  // TODO: Implementar dropdown de disciplinas
                  const selected = prompt('Digite os IDs das disciplinas separados por vírgula (ex: 1,2,3):');
                  if (selected) {
                    const ids = selected.split(',').map(id => id.trim()).filter(id => id);
                    setDisciplinasSelecionadas(ids);
                  }
                }}
              >
                <span
                  style={{
                    flex: 1,
                    fontFamily: 'Sora',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '1.5em',
                    color: disciplinasSelecionadas.length > 0 ? '#F7F7F7' : '#CECFD2'
                  }}
                >
                  {disciplinasSelecionadas.length > 0 
                    ? `${disciplinasSelecionadas.length} disciplina(s) selecionada(s)`
                    : 'Selecione as disciplinas a serem vinculadas'
                  }
                </span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 7.5L10 12.5L15 7.5" stroke="#61656C" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
          </div>

          {/* Disciplinas Adicionadas */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '16px',
              width: '100%',
              maxWidth: '569px',
              margin: '0 auto',
            }}
          >
            {/* Content Divider */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                width: '100%',
                height: '20px'
              }}
            >
              <div style={{ flex: 1, height: '1px', background: '#22262F' }} />
              <span
                style={{
                  fontFamily: 'Sora',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '1.4285714285714286em',
                  color: '#94979C',
                  textAlign: 'center',
                  whiteSpace: 'nowrap'
                }}
              >
                Disciplinas adicionadas ({disciplinasSelecionadas.length}/20)
              </span>
              <div style={{ flex: 1, height: '1px', background: '#22262F' }} />
            </div>

            {/* Content Area */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                padding: '24px',
                background: '#191923',
                border: '1px solid #22262F',
                borderRadius: '12px',
                minHeight: '150px',
                gap: '16px'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '4px',
                  textAlign: 'center'
                }}
              >
                <div
                  style={{
                    fontFamily: 'Sora',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '1.5em',
                    color: '#F7F7F7',
                    textAlign: 'center'
                  }}
                >
                  Nenhuma disciplina adicionada
                </div>
                <div
                  style={{
                    fontFamily: 'Sora',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '1.4285714285714286em',
                    color: '#CECFD2',
                    textAlign: 'center'
                  }}
                >
                  Insira uma ou mais disciplinas e elas aparecerão aqui para você.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            gap: '16px',
            padding: '32px 24px',
            borderTop: '1px solid #2C2C45',
            backgroundColor: '#202028'
          }}
        >
          {/* Botão Cancelar */}
          <button
            onClick={handleClose}
            disabled={isSubmitting}
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '6px',
              padding: '12px 18px',
              background: '#2D2D45',
              border: 'none',
              borderRadius: '8px',
              fontFamily: 'Sora',
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '1.5em',
              color: '#CECFD2',
              cursor: isSubmitting ? 'not-allowed' : 'pointer',
              opacity: isSubmitting ? 0.6 : 1,
              boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)'
            }}
          >
            Cancelar
          </button>

          {/* Botão Cadastrar */}
          <button
            onClick={handleSubmit}
            disabled={!isFormValid || isSubmitting}
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '6px',
              padding: '12px 18px',
              background: isFormValid ? '#22262F' : '#2D2D3B',
              border: '1px solid #22262F',
              borderRadius: '8px',
              fontFamily: 'Sora',
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '1.5em',
              color: isFormValid ? '#F7F7F7' : '#85888E',
              cursor: isFormValid && !isSubmitting ? 'pointer' : 'not-allowed',
              opacity: isSubmitting ? 0.6 : 1,
              boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)'
            }}
          >
            {isSubmitting ? 'Cadastrando...' : 'Cadastrar plano'}
          </button>
        </div>
      </div>
      
      {/* Estilos para scrollbar */}
      <style>{scrollbarStyles}</style>
    </div>
    </div>
  );
};
