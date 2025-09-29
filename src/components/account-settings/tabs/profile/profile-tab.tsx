import React, { useState, useEffect } from 'react';
import { SectionHeader } from '../../index';
import { ProfileForm } from './index';

interface ProfileTabProps {
  initialData?: {
    username: string;
    bio: string;
    isWorking: string;
    birthDate: string;
    education: string;
    email: string;
    phone: string;
    termsAccepted: boolean;
  };
  onSave?: (data: any) => Promise<void>;
  onCancel?: () => void;
  screenSize?: 'mobile' | 'tablet' | 'desktop';
  onFormDataChange?: (formData: any, isValid: boolean, isLoading: boolean) => void;
}

export const ProfileTab: React.FC<ProfileTabProps> = ({
  initialData = {
    username: 'Max William',
    bio: 'Profissional apaixonado por tecnologia e design, focado em criar soluções digitais funcionais e intuitivas. Sempre em busca de novos aprendizados e desafios, com o objetivo de transformar ideias em experiências que gerem valor real para as pessoas.',
    isWorking: 'sim',
    birthDate: '07/09/2005',
    education: 'Ensino Superior (Incompleto)',
    email: 'maxwilliam384@gmail.com',
    phone: '(47) 99953-1441',
    termsAccepted: true
  },
  onSave: _onSave,
  onCancel: _onCancel,
  screenSize = 'desktop',
  onFormDataChange
}) => {
  // Detecta telas muito grandes (> 1400px) para aplicar maxWidth
  const [isVeryLargeScreen, setIsVeryLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsVeryLargeScreen(window.innerWidth > 1400);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const [isLoading] = useState(false);
  const [formData, setFormData] = useState(initialData);
  const [validationErrors, setValidationErrors] = useState<{
    username?: string;
    bio?: string;
    email?: string;
    phone?: string;
    termsAccepted?: string;
  }>({});

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Clear validation errors when user starts typing
    if (validationErrors[field as keyof typeof validationErrors]) {
      setValidationErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };

  const validateForm = () => {
    const errors: typeof validationErrors = {};

    if (!formData.username.trim()) {
      errors.username = 'Nome de usuário é obrigatório';
    }

    if (!formData.termsAccepted) {
      errors.termsAccepted = 'Você deve aceitar os termos';
    }

    setValidationErrors(errors);
    
    // Para ser válido, campos obrigatórios devem estar preenchidos
    const isValid = formData.username.trim() && formData.termsAccepted;
    
    return Boolean(isValid);
  };

  // Notifica mudanças do formulário para o componente pai
  useEffect(() => {
    const isValid = validateForm();
    if (onFormDataChange) {
      onFormDataChange(formData, isValid, isLoading);
    }
  }, [formData, isLoading, onFormDataChange]);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      gap: '20px'
    }}>
      {/* Content Area */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        gap: '20px'
      }}>
        {/* Section Header */}
        <SectionHeader
          title="Atualize seus dados pessoais"
          supportingText="Mantenha suas informações sempre atualizadas para garantir uma experiência personalizada e segura."
          screenSize={screenSize}
        />
        
        {/* Form */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          width: '100%',
          maxWidth: screenSize === 'desktop' && isVeryLargeScreen ? '1000px' : 'none',
          margin: '0'
        }}>
          <ProfileForm
            formData={formData}
            onInputChange={handleInputChange}
            validationErrors={validationErrors}
            screenSize={screenSize}
          />
        </div>
      </div>

    </div>
  );
};
