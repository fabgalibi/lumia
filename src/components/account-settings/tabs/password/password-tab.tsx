import React, { useState } from 'react';
import { FormFooter } from '../../index';
import { PasswordForm, PasswordStrengthIndicator } from './index';

interface PasswordTabProps {
  onSave?: (data: any) => Promise<void>;
  onCancel?: () => void;
}

export const PasswordTab: React.FC<PasswordTabProps> = ({
  onSave,
  onCancel
}) => {
  const [isLoading, setIsLoading] = useState(false);
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

  const handleInputChange = (field: string, value: string) => {
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

    if (!formData.currentPassword) {
      errors.currentPassword = 'Senha atual é obrigatória';
    }

    if (!formData.newPassword) {
      errors.newPassword = 'Nova senha é obrigatória';
    } else if (formData.newPassword.length < 8) {
      errors.newPassword = 'Nova senha deve ter pelo menos 8 caracteres';
    }

    if (!formData.confirmPassword) {
      errors.confirmPassword = 'Confirmação de senha é obrigatória';
    } else if (formData.newPassword !== formData.confirmPassword) {
      errors.confirmPassword = 'Senhas não coincidem';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSave = async () => {
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      if (onSave) {
        await onSave(formData);
      } else {
        // Simular salvamento
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log('Salvando nova senha:', formData);
      }
    } catch (error) {
      console.error('Erro ao salvar:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    } else {
      console.log('Cancelando alterações');
    }
  };

  return (
    <>
      {/* Section Header */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>
        <div style={{
          display: 'flex',
          gap: '16px'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            flex: 1
          }}>
            <h2 style={{
              fontFamily: 'Sora',
              fontWeight: '600',
              fontSize: '18px',
              lineHeight: '1.56em',
              color: '#F7F7F7',
              margin: 0
            }}>
              Alterar senha
            </h2>
            <p style={{
              fontFamily: 'Sora',
              fontWeight: '400',
              fontSize: '14px',
              lineHeight: '1.43em',
              color: '#E9EAEB',
              margin: 0
            }}>
              Mantenha sua conta segura alterando sua senha regularmente.
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>
        <PasswordForm
          formData={formData}
          onInputChange={handleInputChange}
          validationErrors={validationErrors}
        />

        {/* Password Strength Indicator */}
        {formData.newPassword && (
          <div style={{
            width: '512px',
            marginTop: '-16px'
          }}>
            <PasswordStrengthIndicator password={formData.newPassword} />
          </div>
        )}
      </div>

      {/* Section Footer */}
      <FormFooter
        onCancel={handleCancel}
        onSave={handleSave}
        isLoading={isLoading}
      />
    </>
  );
};
