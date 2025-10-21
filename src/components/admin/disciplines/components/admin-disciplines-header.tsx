import React, { useState } from 'react';
import { AdminEntityHeader } from '../../shared/admin-entity-header';
import { DisciplineRegistrationModal } from '../modals';

interface AdminDisciplinesHeaderProps {
  totalCount: number;
  onAddDiscipline?: () => void;
  onDisciplineCreated?: () => void;
  onModalSuccess?: () => void;
}

export const AdminDisciplinesHeader: React.FC<AdminDisciplinesHeaderProps> = ({
  totalCount,
  onAddDiscipline,
  onDisciplineCreated,
  onModalSuccess
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
    onDisciplineCreated?.();
    
    // Chamar a função de callback do componente pai para mostrar notificação
    if (onModalSuccess) {
      onModalSuccess();
    }
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
      <AdminEntityHeader
        title="Disciplinas cadastradas"
        totalCount={totalCount}
        buttonText="Cadastrar disciplina"
        onEntityCreated={handleAddDiscipline}
      />

      {/* Modal de Cadastro de Disciplina */}
      <DisciplineRegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={handleModalSuccess}
      />
    </div>
  );
};
