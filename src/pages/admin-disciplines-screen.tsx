import React from 'react';
import { AdminLayout } from '../components/admin/admin-layout';
import { AdminDisciplinesContent } from '../components/admin/disciplines/admin-disciplines-content';

export const AdminDisciplinesScreen: React.FC = () => {
  return (
    <AdminLayout>
      <AdminDisciplinesContent />
    </AdminLayout>
  );
};
