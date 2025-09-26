import React, { useState } from 'react';
import { CheckboxField } from '../../index';

interface NotificationsTabProps {
  initialData?: {
    emailNotifications: boolean;
    pushNotifications: boolean;
    smsNotifications: boolean;
    marketingEmails: boolean;
    securityAlerts: boolean;
    studyReminders: boolean;
  };
  onSave?: (data: any) => Promise<void>;
  onCancel?: () => void;
}

export const NotificationsTab: React.FC<NotificationsTabProps> = ({
  initialData = {
    emailNotifications: true,
    pushNotifications: true,
    smsNotifications: false,
    marketingEmails: false,
    securityAlerts: true,
    studyReminders: true
  },
  onSave,
  onCancel
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(initialData);

  const handleInputChange = (field: string, value: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = async () => {
    setIsLoading(true);
    try {
      if (onSave) {
        await onSave(formData);
      } else {
        // Simular salvamento
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log('Salvando preferências de notificação:', formData);
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
              Preferências de notificação
            </h2>
            <p style={{
              fontFamily: 'Sora',
              fontWeight: '400',
              fontSize: '14px',
              lineHeight: '1.43em',
              color: '#E9EAEB',
              margin: 0
            }}>
              Configure como e quando você deseja receber notificações.
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
        {/* Email Notifications */}
        <CheckboxField
          checked={formData.emailNotifications}
          onChange={(checked) => handleInputChange('emailNotifications', checked)}
          label="Notificações por email"
          supportingText="Receba atualizações e lembretes por email."
        />


        {/* Push Notifications */}
        <CheckboxField
          checked={formData.pushNotifications}
          onChange={(checked) => handleInputChange('pushNotifications', checked)}
          label="Notificações push"
          supportingText="Receba notificações instantâneas no seu dispositivo."
        />


        {/* SMS Notifications */}
        <CheckboxField
          checked={formData.smsNotifications}
          onChange={(checked) => handleInputChange('smsNotifications', checked)}
          label="Notificações por SMS"
          supportingText="Receba alertas importantes por mensagem de texto."
        />


        {/* Marketing Emails */}
        <CheckboxField
          checked={formData.marketingEmails}
          onChange={(checked) => handleInputChange('marketingEmails', checked)}
          label="Emails promocionais"
          supportingText="Receba ofertas especiais e novidades sobre nossos produtos."
        />


        {/* Security Alerts */}
        <CheckboxField
          checked={formData.securityAlerts}
          onChange={(checked) => handleInputChange('securityAlerts', checked)}
          label="Alertas de segurança"
          supportingText="Receba notificações sobre atividades suspeitas em sua conta."
        />


        {/* Study Reminders */}
        <CheckboxField
          checked={formData.studyReminders}
          onChange={(checked) => handleInputChange('studyReminders', checked)}
          label="Lembretes de estudo"
          supportingText="Receba lembretes para manter sua rotina de estudos em dia."
        />
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
