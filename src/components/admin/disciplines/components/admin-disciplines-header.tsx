import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { DisciplineRegistrationModal } from '../modals';

interface AdminDisciplinesHeaderProps {
  totalCount: number;
  onAddDiscipline?: () => void;
  onDisciplineCreated?: () => void;
}

export const AdminDisciplinesHeader: React.FC<AdminDisciplinesHeaderProps> = ({
  totalCount,
  onAddDiscipline,
  onDisciplineCreated
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddDiscipline = () => {
    if (onAddDiscipline) {
      onAddDiscipline();
    } else {
      setIsModalOpen(true);
    }
  };

  const handleModalSuccess = () => {
    console.log('Disciplina cadastrada com sucesso!');
    onDisciplineCreated?.();
  };
  return (
    <div 
      className="admin-disciplines-header"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '24px',
        width: '100%'
      }}
    >
      {/* Container */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'stretch',
        gap: '20px',
        width: '100%'
      }}>
        {/* Page Header */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignSelf: 'stretch',
          gap: '16px',
          width: '100%'
        }}>
          {/* Content */}
          <div 
            className="header-content"
            style={{
              display: 'flex',
              alignItems: 'center',
              alignSelf: 'stretch',
              flexWrap: 'wrap',
              gap: '16px',
              width: '100%'
            }}
          >
            {/* Text and supporting text */}
            <div 
              className="header-text"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                flex: 1
              }}
            >
              <h1 style={{
                fontFamily: 'Sora',
                fontWeight: 600,
                fontSize: '24px',
                lineHeight: '1.3333333333333333em',
                color: '#F7F7F7',
                margin: 0
              }}>
                Disciplinas cadastradas ({totalCount})
              </h1>
            </div>

            {/* Actions */}
            <div 
              className="header-actions"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}
            >
              <button
                onClick={handleAddDiscipline}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '10px 14px',
                  background: '#C74228',
                  border: 'none',
                  backgroundImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)',
                  borderRadius: '8px',
                  fontFamily: 'Sora',
                  fontWeight: 600,
                  fontSize: '14px',
                  lineHeight: '1.4285714285714286em',
                  color: '#FFFFFF',
                  cursor: 'pointer',
                  boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05)',
                  transition: 'background 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#D55A3A';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#C74228';
                }}
              >
                <Plus size={20} color="#FFFFFF" strokeWidth={1.67} />
                <span>Cadastrar disciplina</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Cadastro de Disciplina */}
      <DisciplineRegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleModalSuccess}
      />
    </div>
  );
};
