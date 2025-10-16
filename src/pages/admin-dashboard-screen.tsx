import React from 'react';
import { AdminDashboardHeader } from '@/components/admin/admin-dashboard-header';
import { AdminMetricsCards } from '@/components/admin/admin-metrics-cards';
import { AdminStudentsTable } from '@/components/admin/admin-students-table';

export const AdminDashboardScreen: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        background: '#191923',
      }}
    >
      <AdminDashboardHeader />
      
      <main
        style={{
          flexGrow: 1,
          padding: '64px 0',
          width: '100%',
          maxWidth: '1440px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '48px',
        }}
      >
        {/* Header Section */}
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            alignSelf: 'stretch',
            gap: '32px',
            padding: '0 48px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignSelf: 'stretch',
              gap: '28px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignSelf: 'stretch',
                gap: '24px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignSelf: 'stretch',
                  flexWrap: 'wrap',
                  gap: '24px',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                  <h1
                    style={{
                      fontFamily: 'Sora',
                      fontWeight: 600,
                      fontSize: '24px',
                      lineHeight: '1.33em',
                      color: '#F7F7F7',
                      margin: 0,
                    }}
                  >
                    Bem vindo de volta, Max!
                  </h1>
                  <p
                    style={{
                      fontFamily: 'Sora',
                      fontWeight: 400,
                      fontSize: '16px',
                      lineHeight: '1.5em',
                      color: '#CECFD2',
                      margin: 0,
                    }}
                  >
                    Aqui está o resumo das atividades na plataforma.
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <button
                    style={{
                      background: '#2D2D45',
                      border: '1px solid transparent',
                      backgroundImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)',
                      borderRadius: '8px',
                      padding: '12px 36px',
                      color: '#FFFFFF',
                      fontFamily: 'Sora',
                      fontWeight: 600,
                      fontSize: '14px',
                      lineHeight: '1.43em',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05)',
                    }}
                  >
                    {/* Upload cloud icon */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/>
                      <path d="M12 12v9"/>
                      <path d="m16 16-4-4-4 4"/>
                    </svg>
                    Baixar relatório
                  </button>
                  <button
                    style={{
                      background: '#C74228',
                      border: '2px solid transparent',
                      backgroundImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)',
                      borderRadius: '8px',
                      padding: '12px 34px',
                      color: '#FFFFFF',
                      fontFamily: 'Sora',
                      fontWeight: 600,
                      fontSize: '14px',
                      lineHeight: '1.43em',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05)',
                    }}
                  >
                    {/* Plus icon */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                    Cadastrar aluno
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section style={{ padding: '0 48px' }}>
          <AdminMetricsCards />
        </section>

        {/* Students Table Section */}
        <section style={{ padding: '0 48px' }}>
          <AdminStudentsTable />
        </section>
      </main>
    </div>
  );
};