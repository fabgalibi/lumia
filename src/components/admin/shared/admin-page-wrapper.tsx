import React from 'react';

interface AdminPageWrapperProps {
  children: React.ReactNode;
}

export const AdminPageWrapper: React.FC<AdminPageWrapperProps> = ({ children }) => {
  return (
    <div className="admin-page-wrapper">
      {children}
    </div>
  );
};
