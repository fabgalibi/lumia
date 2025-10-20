import React from 'react';
import { DisciplineCard, AddDisciplineCard } from '../components';
import { Disciplina } from '../../../services/api/admin-disciplines.service';

interface AdminDisciplinesGridProps {
  disciplines: Disciplina[];
  disciplinesStatus: Record<string, 'active' | 'inactive'>;
  onViewDiscipline: (id: string) => void;
  onEdit?: (id: string) => void;
  onAddSubjects?: (id: string) => void;
  onDuplicate?: (id: string) => void;
  onDelete?: (id: string) => void;
  onToggleCheckbox?: (id: string) => void;
  onToggleStatus?: (id: string) => void;
  checkedDisciplines?: string[];
  onAddDiscipline?: () => void;
}

export const AdminDisciplinesGrid: React.FC<AdminDisciplinesGridProps> = ({
  disciplines,
  disciplinesStatus,
  onViewDiscipline,
  onEdit,
  onAddSubjects,
  onDuplicate,
  onDelete,
  onToggleCheckbox,
  onToggleStatus,
  checkedDisciplines = [],
  onAddDiscipline
}) => {
  return (
    <div 
      className="disciplines-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '24px',
        width: '100%',
        minHeight: '572px'
      }}
    >
      {/* Add Discipline Card */}
      <AddDisciplineCard onClick={onAddDiscipline} />
      
      {/* Discipline Cards */}
      {disciplines.map((discipline) => (
        <DisciplineCard
          key={discipline.idDisciplina}
          discipline={discipline}
          currentStatus={disciplinesStatus[discipline.idDisciplina.toString()] || 'inactive'}
          onViewDiscipline={onViewDiscipline}
          onEdit={onEdit}
          onAddSubjects={onAddSubjects}
          onDuplicate={onDuplicate}
          onDelete={onDelete}
          onToggleCheckbox={onToggleCheckbox}
          onToggleStatus={onToggleStatus}
          showChevronIcon={true}
          isChecked={checkedDisciplines.includes(discipline.idDisciplina.toString())}
        />
      ))}
    </div>
  );
};
