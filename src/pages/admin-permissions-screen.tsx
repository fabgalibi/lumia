import React from 'react';
import { AdminHeader } from '../components/admin/admin-header';

export const AdminPermissionsScreen: React.FC = () => {
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
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
          padding: '48px 80px 0',
          minHeight: 'calc(100vh - 120px)',
          maxWidth: '1440px',
          margin: '0 auto',
          width: '100%'
        }}>
          <h1 style={{
            fontFamily: 'Sora',
            fontWeight: 600,
            fontSize: '24px',
            lineHeight: '1.3333333333333333em',
            color: '#F7F7F7',
            margin: 0
          }}>
            Permissões
          </h1>
          <p style={{
            fontFamily: 'Sora',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '1.5em',
            color: '#CECFD2',
            margin: 0,
            textAlign: 'center'
          }}>
            Página de permissões em desenvolvimento...
          </p>
        </div>
      </main>
    </div>
  );
};


