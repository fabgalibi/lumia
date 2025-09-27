import React from 'react';
import { FormSection, SectionLabel, FormFieldArea, InputField } from '../../index';

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
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }}>
      {/* Current Password */}
      <FormSection screenSize={screenSize}>
        <SectionLabel 
          title="Senha atual" 
          required
          screenSize={screenSize}
        />
        <FormFieldArea>
          <InputField
            value={formData.currentPassword}
            onChange={(value) => onInputChange('currentPassword', value)}
            type="password"
            placeholder="Insira sua senha atual"
            error={!!validationErrors.currentPassword}
            screenSize={screenSize}
          />
          {validationErrors.currentPassword && (
            <span style={{
              fontFamily: 'Sora',
              fontWeight: '400',
              fontSize: '12px',
              color: '#E66B59',
              marginTop: '4px'
            }}>
              {validationErrors.currentPassword}
            </span>
          )}
        </FormFieldArea>
      </FormSection>

      {/* New Password */}
      <FormSection screenSize={screenSize}>
        <SectionLabel 
          title="Nova senha"
          required
          screenSize={screenSize}
        />
        <FormFieldArea>
          <InputField
            value={formData.newPassword}
            onChange={(value) => onInputChange('newPassword', value)}
            type="password"
            placeholder="Insira sua nova senha"
            error={!!validationErrors.newPassword}
            screenSize={screenSize}
          />
          <span style={{
            fontFamily: 'Sora',
            fontWeight: '400',
            fontSize: '12px',
            lineHeight: '1.33em',
            color: '#94979C',
            marginTop: '6px'
          }}>
            Sua nova senha deve possui ao menos 12 caracteres.
          </span>
          {validationErrors.newPassword && (
            <span style={{
              fontFamily: 'Sora',
              fontWeight: '400',
              fontSize: '12px',
              color: '#E66B59',
              marginTop: '4px'
            }}>
              {validationErrors.newPassword}
            </span>
          )}
        </FormFieldArea>
      </FormSection>

      {/* Confirm Password */}
      <FormSection screenSize={screenSize} withDivider={false}>
        <SectionLabel 
          title="Confirmação de senha"
          required
          screenSize={screenSize}
        />
        <FormFieldArea>
          <InputField
            value={formData.confirmPassword}
            onChange={(value) => onInputChange('confirmPassword', value)}
            type="password"
            placeholder="Confirme sua nova senha"
            error={!!validationErrors.confirmPassword}
            screenSize={screenSize}
          />
          {validationErrors.confirmPassword && (
            <span style={{
              fontFamily: 'Sora',
              fontWeight: '400',
              fontSize: '12px',
              color: '#E66B59',
              marginTop: '4px'
            }}>
              {validationErrors.confirmPassword}
            </span>
          )}
        </FormFieldArea>
      </FormSection>
    </div>
  );
};
