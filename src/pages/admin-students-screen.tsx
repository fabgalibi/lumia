import React from 'react';
import { AdminHeader } from '../components/admin/admin-header';
import { AdminStudentsTable } from '../components/admin/students/admin-students-table';

export const AdminStudentsScreen: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      background: '#191923'
    }}>
      <AdminHeader />
      
      <main style={{
        flexGrow: 1,
        padding: '64px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        minHeight: 'calc(100vh - 120px)',
        background: '#191923'
      }}>
        <AdminStudentsTable />
      </main>
    </div>
  );
};

