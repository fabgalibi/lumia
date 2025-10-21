import React from 'react';
import { AdminHeader } from './admin-header';
import { AdminPageWrapper } from './shared/admin-page-wrapper';
import './admin-layout.css';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="admin-layout">
      <AdminHeader />
      <main className="admin-main-content">
        <AdminPageWrapper>
          {children}
        </AdminPageWrapper>
      </main>
    </div>
  );
};
