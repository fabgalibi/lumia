/**
 * Protected Route - Componente para proteger rotas autenticadas
 * Redireciona para login se o usuário não estiver autenticado
 */

import React, { ReactNode } from 'react';
import { Navigate } from 'react-router';
import { useAuth } from '../../contexts/auth-context';

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, isInitializing } = useAuth();

  // Mostra loading enquanto verifica autenticação inicial
  if (isInitializing) {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          background: '#0A0D12',
          color: '#FFFFFF',
          fontFamily: 'Sora',
          fontSize: '16px'
        }}
      >
        Carregando...
      </div>
    );
  }

  // Redireciona para login se não estiver autenticado
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Renderiza o conteúdo protegido
  return <>{children}</>;
};
