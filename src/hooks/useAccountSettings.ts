import { useState, useCallback } from 'react';

export interface AccountSettingsData {
  profile: {
    username: string;
    bio: string;
    isWorking: string;
    birthDate: string;
    education: string;
    email: string;
    phone: string;
    termsAccepted: boolean;
  };
  password: {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
  };
  notifications: {
    emailNotifications: boolean;
    pushNotifications: boolean;
    smsNotifications: boolean;
    marketingEmails: boolean;
    securityAlerts: boolean;
    studyReminders: boolean;
  };
  content: {
    studyLevel: string;
    preferredSubjects: string[];
    studyMode: string;
    difficulty: string;
    practiceTests: boolean;
    videoLessons: boolean;
    textMaterials: boolean;
    audioContent: boolean;
  };
}

const initialData: AccountSettingsData = {
  profile: {
    username: 'Max William',
    bio: 'Profissional apaixonado por tecnologia e design, focado em criar soluções digitais funcionais e intuitivas. Sempre em busca de novos aprendizados e desafios, com o objetivo de transformar ideias em experiências que gerem valor real para as pessoas.',
    isWorking: 'sim',
    birthDate: '07/09/2005',
    education: 'Ensino Superior (Incompleto)',
    email: 'maxwilliam384@gmail.com',
    phone: '(47) 99953-1441',
    termsAccepted: true
  },
  password: {
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  },
  notifications: {
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
    marketingEmails: false,
    securityAlerts: true,
    studyReminders: true
  },
  content: {
    studyLevel: 'intermediario',
    preferredSubjects: ['direito-constitucional', 'direito-administrativo'],
    studyMode: 'mixed',
    difficulty: 'progressive',
    practiceTests: true,
    videoLessons: true,
    textMaterials: true,
    audioContent: false
  }
};

export const useAccountSettings = () => {
  const [data, setData] = useState<AccountSettingsData>(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');

  const updateProfile = useCallback(async (profileData: Partial<AccountSettingsData['profile']>) => {
    setIsLoading(true);
    try {
      // Simular API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setData(prev => ({
        ...prev,
        profile: { ...prev.profile, ...profileData }
      }));
      
      console.log('Perfil atualizado:', profileData);
      return { success: true };
    } catch (error) {
      console.error('Erro ao atualizar perfil:', error);
      return { success: false, error };
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updatePassword = useCallback(async (passwordData: AccountSettingsData['password']) => {
    setIsLoading(true);
    try {
      // Simular API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Não salvar senhas no estado local por segurança
      console.log('Senha atualizada com sucesso');
      return { success: true };
    } catch (error) {
      console.error('Erro ao atualizar senha:', error);
      return { success: false, error };
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updateNotifications = useCallback(async (notificationData: Partial<AccountSettingsData['notifications']>) => {
    setIsLoading(true);
    try {
      // Simular API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setData(prev => ({
        ...prev,
        notifications: { ...prev.notifications, ...notificationData }
      }));
      
      console.log('Notificações atualizadas:', notificationData);
      return { success: true };
    } catch (error) {
      console.error('Erro ao atualizar notificações:', error);
      return { success: false, error };
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updateContent = useCallback(async (contentData: Partial<AccountSettingsData['content']>) => {
    setIsLoading(true);
    try {
      // Simular API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setData(prev => ({
        ...prev,
        content: { ...prev.content, ...contentData }
      }));
      
      console.log('Preferências de conteúdo atualizadas:', contentData);
      return { success: true };
    } catch (error) {
      console.error('Erro ao atualizar preferências de conteúdo:', error);
      return { success: false, error };
    } finally {
      setIsLoading(false);
    }
  }, []);

  const deleteAccount = useCallback(async () => {
    setIsLoading(true);
    try {
      // Simular API call
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      console.log('Conta deletada com sucesso');
      return { success: true };
    } catch (error) {
      console.error('Erro ao deletar conta:', error);
      return { success: false, error };
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updatePhoto = useCallback(async (photoFile: File) => {
    setIsLoading(true);
    try {
      // Simular upload
      await new Promise(resolve => setTimeout(resolve, 2500));
      
      console.log('Foto atualizada:', photoFile.name);
      return { success: true };
    } catch (error) {
      console.error('Erro ao atualizar foto:', error);
      return { success: false, error };
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    data,
    isLoading,
    activeTab,
    setActiveTab,
    actions: {
      updateProfile,
      updatePassword,
      updateNotifications,
      updateContent,
      deleteAccount,
      updatePhoto
    }
  };
};
