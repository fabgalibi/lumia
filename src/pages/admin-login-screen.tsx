import React from 'react';
import { AdminLoginHeader, AdminLoginForm } from '@/components/admin';

export const AdminLoginScreen: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'rgba(25, 25, 35, 1)',
        padding: '0 24px 40px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Pattern */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '768px',
          height: '768px',
          background: 'url(/images/admin-background-pattern.svg) no-repeat center center',
          backgroundSize: '768px 768px',
          opacity: 0.6,
          zIndex: 0,
        }}
      />
      
      {/* Content */}
      <div
        style={{
          width: '100%',
          maxWidth: '448px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <AdminLoginHeader />
        <AdminLoginForm />
      </div>
    </div>
  );
};

