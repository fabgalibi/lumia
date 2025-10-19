import React from 'react';
import { AdminHeader } from '../components/admin/shared/admin-header';
import { AdminDisciplinesContent } from '../components/admin/disciplines/admin-disciplines-content';

export const AdminDisciplinesScreen: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      background: '#191923'
    }}>
      <AdminHeader currentPage="disciplines" />
      
      <AdminDisciplinesContent />
    </div>
  );
};
