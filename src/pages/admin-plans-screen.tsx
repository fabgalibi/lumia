import React from 'react';
import { AdminLayout } from '@/components/admin';
import { AdminPlansContent } from '@/components/admin/plans/admin-plans-content';

export const AdminPlansScreen: React.FC = () => {
  return (
    <AdminLayout>
      <AdminPlansContent />
    </AdminLayout>
  );
};