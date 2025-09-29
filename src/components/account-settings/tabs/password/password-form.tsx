import React from 'react';
import { FormSection, SectionLabel, FormFieldArea, InputField, FormContainer } from '../../index';
import { Text, colors } from '@/components/ui';

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
  screenSize?: 'mobile' | 'tablet' | 'desktop';
}

export const PasswordForm: React.FC<PasswordFormProps> = ({
  formData,
  onInputChange,
  validationErrors = {},
  screenSize = 'desktop'
}) => {
  return (
    <FormContainer screenSize={screenSize}>
      {/* Current Password */}
      <FormSection screenSize={screenSize} gap="small">
        <SectionLabel 
          title="Senha atual" 
          required
          screenSize={screenSize}
        />
        <FormFieldArea screenSize={screenSize}>
          <InputField
            value={formData.currentPassword}
            onChange={(value: string) => onInputChange('currentPassword', value)}
            type="password"
            placeholder="Insira sua senha atual"
            error={validationErrors.currentPassword}
            screenSize={screenSize}
          />
        </FormFieldArea>
      </FormSection>

      {/* New Password */}
      <FormSection screenSize={screenSize} gap="small">
        <SectionLabel 
          title="Nova senha"
          required
          screenSize={screenSize}
        />
        <FormFieldArea screenSize={screenSize}>
          <InputField
            value={formData.newPassword}
            onChange={(value: string) => onInputChange('newPassword', value)}
            type="password"
            placeholder="Insira sua nova senha"
            error={validationErrors.newPassword}
            screenSize={screenSize}
          />
          <Text
            variant="caption"
            color={colors.text.tertiary}
            screenSize={screenSize}
            style={{ marginTop: '6px' }}
          >
            Sua nova senha deve possui ao menos 12 caracteres.
          </Text>
        </FormFieldArea>
      </FormSection>

      {/* Confirm Password */}
      <FormSection screenSize={screenSize} gap="small" withDivider={false}>
        <SectionLabel 
          title="Confirmação de senha"
          required
          screenSize={screenSize}
        />
        <FormFieldArea screenSize={screenSize}>
          <InputField
            value={formData.confirmPassword}
            onChange={(value: string) => onInputChange('confirmPassword', value)}
            type="password"
            placeholder="Confirme sua nova senha"
            error={validationErrors.confirmPassword}
            screenSize={screenSize}
          />
        </FormFieldArea>
      </FormSection>
    </FormContainer>
  );
};
