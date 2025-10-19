/**
 * TokenExpiredProvider - Provider para gerenciar notificação global de token expirado
 */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { TokenExpiredNotification } from '../ui/token-expired-notification';

interface TokenExpiredProviderProps {
  children: React.ReactNode;
}

export const TokenExpiredProvider: React.FC<TokenExpiredProviderProps> = ({ children }) => {
  const [showNotification, setShowNotification] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleTokenExpired = (event: CustomEvent) => {
      console.log('🔐 Token expirado detectado:', event.detail);
      setShowNotification(true);
    };

    // Escuta o evento customizado de token expirado
    window.addEventListener('tokenExpired', handleTokenExpired as EventListener);

    return () => {
      window.removeEventListener('tokenExpired', handleTokenExpired as EventListener);
    };
  }, []);

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  const handleRedirectToLogin = () => {
    setShowNotification(false);
    // Verifica se está em uma rota admin para redirecionar corretamente
    const isAdminRoute = window.location.pathname.startsWith('/admin');
    const redirectUrl = isAdminRoute ? '/admin/login' : '/login';
    navigate(redirectUrl);
  };

  return (
    <>
      {children}
      <TokenExpiredNotification
        isOpen={showNotification}
        onClose={handleCloseNotification}
        onRedirectToLogin={handleRedirectToLogin}
      />
    </>
  );
};
