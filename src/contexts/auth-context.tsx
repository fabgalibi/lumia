/**
 * Auth Context - Contexto de autenticação
 * Gerencia estado global de autenticação do usuário
 */

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { authService, User, LoginRequest } from '../services/api';

interface AuthContextData {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isInitializing: boolean;
  login: (credentials: LoginRequest) => Promise<void>;
  logout: () => void;
  error: string | null;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);

  // Carrega dados do usuário ao iniciar
  useEffect(() => {
    const loadUser = () => {
      try {
        const token = authService.getToken();
        const userData = authService.getUser();
        
        if (token && userData) {
          setUser(userData);
        }
      } finally {
        setIsInitializing(false);
      }
    };

    loadUser();
  }, []);

  /**
   * Realiza login do usuário
   */
  const login = async (credentials: LoginRequest) => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await authService.login(credentials);
      
      // Carrega o usuário que foi salvo pelo authService
      const userData = authService.getUser();
      if (userData) {
        setUser(userData);
      }
    } catch (err: any) {
      const errorMessage = err.message || 'Erro ao fazer login. Tente novamente.';
      setError(errorMessage);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Realiza logout do usuário
   */
  const logout = () => {
    authService.logout();
    setUser(null);
    setError(null);
  };

  const value: AuthContextData = {
    user,
    isAuthenticated: !!user,
    isLoading,
    isInitializing,
    login,
    logout,
    error,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

/**
 * Hook para usar o contexto de autenticação
 */
export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};
