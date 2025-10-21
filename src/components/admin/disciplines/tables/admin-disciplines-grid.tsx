import React from 'react';
import { AdminEntityGrid } from '../../shared/admin-entity-grid';
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
  // Função para obter campos adicionais específicos de disciplinas
  const getAdditionalFields = (discipline: Disciplina) => [
    {
      label: 'Assuntos',
      value: `${discipline.totalAssuntos} (${discipline.totalAssuntos === 0 ? 'Nenhum' : discipline.totalAssuntos === 1 ? 'um' : 'nove'})`
    },
    {
      label: 'Criada em',
      value: new Date(discipline.dataCriacao).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    }
  ];

  // Função para obter ações específicas do menu de opções para disciplinas
  const getOptionsMenuActions = (discipline: Disciplina) => ({
    onEdit: onEdit ? () => onEdit(discipline.idDisciplina.toString()) : undefined,
    onAddSubjects: onAddSubjects ? () => onAddSubjects(discipline.idDisciplina.toString()) : undefined,
    onDuplicate: onDuplicate ? () => onDuplicate(discipline.idDisciplina.toString()) : undefined,
    onDelete: onDelete ? () => onDelete(discipline.idDisciplina.toString()) : undefined,
    editText: 'Editar dados',
    addSubjectsText: 'Adicionar assuntos',
    duplicateText: 'Duplicar',
    deleteText: 'Apagar disciplina',
  });

  return (
    <AdminEntityGrid
      entities={disciplines}
      entitiesStatus={disciplinesStatus}
      onViewEntity={onViewDiscipline}
      onEdit={onEdit}
      onDuplicate={onDuplicate}
      onDelete={onDelete}
      onToggleCheckbox={onToggleCheckbox || (() => {})}
      onToggleStatus={onToggleStatus || (() => {})}
      checkedEntities={checkedDisciplines}
      onAddEntity={onAddDiscipline || (() => {})}
      viewButtonText="Visualizar Disciplina"
      addText="Cadastrar nova disciplina"
      getAdditionalFields={getAdditionalFields}
      getIdField={(discipline) => discipline.idDisciplina}
      getOptionsMenuActions={getOptionsMenuActions}
    />
  );
};
