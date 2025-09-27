import React, { useState, useEffect } from 'react';
import { SectionHeader, FormSection, SectionLabel, FormFieldArea, CheckboxField } from '../../index';

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
  screenSize?: 'mobile' | 'tablet' | 'desktop';
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
  screenSize = 'desktop'
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
  const [formData, setFormData] = useState(initialData);

  const handleInputChange = (field: string, value: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

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
        title="Notificações"
        supportingText="Configure como e quando você deseja receber notificações."
        screenSize={screenSize}
      />

      {/* Form */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        width: '100%',
        maxWidth: screenSize === 'desktop' && isVeryLargeScreen ? 'calc(100% - 280px)' : 'none',
        margin: '0'
      }}>
        {/* Email e Push Notifications */}
        <FormSection screenSize={screenSize}>
          <SectionLabel 
            title="Notificações por aplicativo"
            supportingText="Configure como você deseja ser notificado"
            screenSize={screenSize}
          />
          <FormFieldArea>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <CheckboxField
                checked={formData.emailNotifications}
                onChange={(checked) => handleInputChange('emailNotifications', checked)}
                label="Notificações por email"
                supportingText="Receba atualizações e lembretes por email"
                screenSize={screenSize}
              />
              <CheckboxField
                checked={formData.pushNotifications}
                onChange={(checked) => handleInputChange('pushNotifications', checked)}
                label="Notificações push"
                supportingText="Receba notificações instantâneas no seu dispositivo"
                screenSize={screenSize}
              />
              <CheckboxField
                checked={formData.smsNotifications}
                onChange={(checked) => handleInputChange('smsNotifications', checked)}
                label="Notificações por SMS"
                supportingText="Receba alertas importantes por mensagem de texto"
                screenSize={screenSize}
              />
            </div>
          </FormFieldArea>
        </FormSection>

        {/* Marketing e Security */}
        <FormSection screenSize={screenSize}>
          <SectionLabel 
            title="Preferências de conteúdo"
            screenSize={screenSize}
          />
          <FormFieldArea>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <CheckboxField
                checked={formData.marketingEmails}
                onChange={(checked) => handleInputChange('marketingEmails', checked)}
                label="Emails promocionais"
                supportingText="Receba ofertas especiais e novidades sobre nossos produtos"
                screenSize={screenSize}
              />
              <CheckboxField
                checked={formData.securityAlerts}
                onChange={(checked) => handleInputChange('securityAlerts', checked)}
                label="Alertas de segurança"
                supportingText="Receba notificações sobre atividades suspeitas em sua conta"
                screenSize={screenSize}
              />
              <CheckboxField
                checked={formData.studyReminders}
                onChange={(checked) => handleInputChange('studyReminders', checked)}
                label="Lembretes de estudo"
                supportingText="Receba lembretes para manter sua rotina de estudos em dia"
                screenSize={screenSize}
              />
            </div>
          </FormFieldArea>
        </FormSection>
        </div>
      </div>

    </div>
  );
};
