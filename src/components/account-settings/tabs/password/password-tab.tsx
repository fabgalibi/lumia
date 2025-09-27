import React, { useState, useEffect } from 'react';
import { SectionHeader } from '../../index';
import { PasswordForm } from './index';

interface PasswordTabProps {
  onSave?: (data: any) => Promise<void>;
  onCancel?: () => void;
  screenSize?: 'mobile' | 'tablet' | 'desktop';
  onFormDataChange?: (formData: any, isValid: boolean, isLoading: boolean) => void;
}

export const PasswordTab: React.FC<PasswordTabProps> = ({
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
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [validationErrors, setValidationErrors] = useState<{
    currentPassword?: string;
    newPassword?: string;
    confirmPassword?: string;
  }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Marcar o campo como "touched" quando o usuário digitar
    setTouched(prev => ({
      ...prev,
      [field]: true
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

    // Só valida campos que foram "touched" (usuário interagiu)
    if (touched.currentPassword && !formData.currentPassword) {
      errors.currentPassword = 'Digite sua senha atual';
    }

    if (touched.newPassword && !formData.newPassword) {
      errors.newPassword = 'Digite sua nova senha';
    } else if (touched.newPassword && formData.newPassword.length > 0 && formData.newPassword.length < 12) {
      errors.newPassword = 'A senha deve ter no mínimo 12 caracteres';
    }

    if (touched.confirmPassword && !formData.confirmPassword) {
      errors.confirmPassword = 'Confirme sua nova senha';
    } else if (touched.confirmPassword && formData.newPassword !== formData.confirmPassword) {
      errors.confirmPassword = 'As senhas não coincidem';
    }

    setValidationErrors(errors);
    
    // Para ser válido, todos os campos devem estar preenchidos corretamente
    const isValid = formData.currentPassword && 
                   formData.newPassword && 
                   formData.newPassword.length >= 12 && 
                   formData.confirmPassword && 
                   formData.newPassword === formData.confirmPassword;
    
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
      flex: 1, // Ocupa espaço disponível
      gap: '20px'
    }}>
      {/* Content Area - Grows to push footer down */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1, // Cresce para empurrar footer para baixo
        gap: '20px'
      }}>
        {/* Section Header */}
        <SectionHeader
          title="Alterar senha"
          supportingText="Defina uma nova senha para manter sua conta segura."
          screenSize={screenSize}
        />

        {/* Form */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          width: '100%',
          maxWidth: screenSize === 'desktop' && isVeryLargeScreen ? 'calc(100% - 280px)' : 'none', // Só aplica em telas muito grandes
          margin: '0'
        }}>
          <PasswordForm
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
