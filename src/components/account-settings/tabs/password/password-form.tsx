import React from 'react';
import { Lock01 } from '@untitledui/icons';
import { FormField, InputField } from '../../index';

interface PasswordFormProps {
  formData: {
    currentPassword: string;
    newPassword: string;
    confirmPassword: string;
  };
  onInputChange: (field: string, value: string) => void;
  validationErrors?: {
    currentPassword?: string;
    newPassword?: string;
    confirmPassword?: string;
  };
}

export const PasswordForm: React.FC<PasswordFormProps> = ({
  formData,
  onInputChange,
  validationErrors = {}
}) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }}>
      {/* Current Password */}
      <div style={{
        display: 'flex',
        gap: '40px',
        flexWrap: 'wrap'
      }}>
        <FormField
          label="Senha atual"
          required
          width="512px"
          error={validationErrors.currentPassword}
        >
          <InputField
            value={formData.currentPassword}
            onChange={(value) => onInputChange('currentPassword', value)}
            type="password"
            icon={<Lock01 width="20" height="20" stroke="#94979C" strokeWidth="1.67" />}
            error={!!validationErrors.currentPassword}
          />
        </FormField>
      </div>


      {/* New Password */}
      <div style={{
        display: 'flex',
        gap: '40px',
        flexWrap: 'wrap'
      }}>
        <FormField
          label="Nova senha"
          required
          width="512px"
          supportingText="Mínimo de 8 caracteres, incluindo números e letras"
          error={validationErrors.newPassword}
        >
          <InputField
            value={formData.newPassword}
            onChange={(value) => onInputChange('newPassword', value)}
            type="password"
            icon={<Lock01 width="20" height="20" stroke="#94979C" strokeWidth="1.67" />}
            error={!!validationErrors.newPassword}
          />
        </FormField>
      </div>


      {/* Confirm Password */}
      <div style={{
        display: 'flex',
        gap: '40px',
        flexWrap: 'wrap'
      }}>
        <FormField
          label="Confirmar nova senha"
          required
          width="512px"
          error={validationErrors.confirmPassword}
        >
          <InputField
            value={formData.confirmPassword}
            onChange={(value) => onInputChange('confirmPassword', value)}
            type="password"
            icon={<Lock01 width="20" height="20" stroke="#94979C" strokeWidth="1.67" />}
            error={!!validationErrors.confirmPassword}
          />
        </FormField>
      </div>
    </div>
  );
};
