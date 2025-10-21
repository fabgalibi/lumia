import React from 'react';
import { AdminEntityCard } from './admin-entity-card';
import { AdminEntityAddCard } from './admin-entity-add-card';

interface EntityField {
  label: string;
  value: string;
}

interface Entity {
  [key: string]: any;
  nome: string;
  codigo: string;
  status: boolean;
  dataCriacao: string;
}

interface AdminEntityGridProps<T extends Entity> {
  entities: T[];
  entitiesStatus: Record<string, 'active' | 'inactive'>;
  onViewEntity: (entityId: string | number) => void;
  onEdit?: (entityId: string) => void;
  onDuplicate?: (entityId: string) => void;
  onDelete?: (entityId: string) => void;
  onToggleCheckbox: (entityId: string) => void;
  onToggleStatus: (entityId: string) => void;
  checkedEntities: string[];
  onAddEntity: () => void;
  viewButtonText: string;
  addText: string;
  getAdditionalFields: (entity: T) => EntityField[];
  getIdField: (entity: T) => number; // Função para obter o ID da entidade
  getOptionsMenuActions?: (entity: T) => {
    onEdit?: () => void;
    onAddSubjects?: () => void;
    onDuplicate?: () => void;
    onDelete?: () => void;
    editText?: string;
    addSubjectsText?: string;
    duplicateText?: string;
    deleteText?: string;
  };
}

export const AdminEntityGrid = <T extends Entity>({
  entities,
  entitiesStatus,
  onViewEntity,
  onEdit,
  onDuplicate,
  onDelete,
  onToggleCheckbox,
  onToggleStatus,
  checkedEntities,
  onAddEntity,
  viewButtonText,
  addText,
  getAdditionalFields,
  getIdField,
  getOptionsMenuActions
}: AdminEntityGridProps<T>) => {
  return (
    <div 
      className="admin-entity-grid"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '24px',
        width: '100%',
        minHeight: '572px'
      }}
    >
      {/* Add Entity Card */}
      <AdminEntityAddCard onAddEntity={onAddEntity} addText={addText} />

      {/* Entity Cards */}
      {entities && entities.map((entity) => {
        const entityId = getIdField(entity);
        const currentStatus = entitiesStatus[entityId.toString()] || 'inactive';
        
        return (
          <AdminEntityCard
            key={entityId}
            entity={entity}
            entityId={entityId}
            currentStatus={currentStatus}
            isChecked={checkedEntities.includes(entityId.toString())}
            onToggleCheckbox={onToggleCheckbox}
            onToggleStatus={onToggleStatus}
            onView={onViewEntity}
            onEdit={onEdit}
            onDuplicate={onDuplicate}
            onDelete={onDelete}
            viewButtonText={viewButtonText}
            additionalFields={getAdditionalFields(entity)}
            showChevronIcon={true}
            optionsMenuActions={getOptionsMenuActions ? getOptionsMenuActions(entity) : {
              onEdit: onEdit ? () => onEdit(entityId.toString()) : undefined,
              onAddSubjects: undefined,
              onDuplicate: onDuplicate ? () => onDuplicate(entityId.toString()) : undefined,
              onDelete: onDelete ? () => onDelete(entityId.toString()) : undefined,
            }}
          />
        );
      })}
    </div>
  );
};
