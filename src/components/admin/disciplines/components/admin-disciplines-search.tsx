import React from 'react';
import { AdminEntitySearch } from '../../shared/admin-entity-search';

interface AdminDisciplinesSearchProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

export const AdminDisciplinesSearch: React.FC<AdminDisciplinesSearchProps> = ({
  searchTerm,
  onSearchChange
}) => {
  return (
    <AdminEntitySearch
      searchTerm={searchTerm}
      onSearchChange={onSearchChange}
      placeholder="Buscar disciplina, ID, assunto, etc..."
    />
  );
};
