/**
 * Admin Protected Route - Componente para proteger rotas administrativas
 * Redireciona para login admin se o usuário não estiver autenticado como admin
 */

import React, { ReactNode } from 'react';
import { Navigate } from 'react-router';
import { useAuth } from '../../contexts/auth-context';

interface AdminProtectedRouteProps {
  children: ReactNode;
}

export const AdminProtectedRoute: React.FC<AdminProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, isInitializing, user } = useAuth();

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

  // Redireciona para login admin se não estiver autenticado
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  // Verifica se é administrador
  const grupoNome = user?.grupo?.nome?.toLowerCase();
  const isAdmin = grupoNome === 'administrador' || user?.grupoId === 2;
  
  if (!isAdmin) {
    // Se o usuário for um aluno tentando acessar área admin, redireciona para login do aluno
    if (grupoNome === 'aluno' || user?.grupoId === 1) {
      return <Navigate to="/login" replace />;
    }
    
    // Se não for admin, redireciona para login admin
    return <Navigate to="/admin/login" replace />;
  }

  // Renderiza o conteúdo protegido
  return <>{children}</>;
};
