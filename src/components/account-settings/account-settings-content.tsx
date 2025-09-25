import React, { useState } from 'react';
import { 
  Mail01, 
  Phone, 
  GraduationHat01
} from '@untitledui/icons';
import {
  PageHeader,
  SettingsTabs,
  FormField,
  InputField,
  ButtonGroup,
  CheckboxField,
  SectionDivider,
  FormFooter
} from './index';
import { useMainContent } from '../../contexts/main-content-context';

interface AccountSettingsContentProps {
  onDeleteAccount: () => void;
  onUpdatePhoto: () => void;
}

export const AccountSettingsContent: React.FC<AccountSettingsContentProps> = ({
  onDeleteAccount,
  onUpdatePhoto
}) => {
  const { setCurrentContent } = useMainContent();
  const [activeTab, setActiveTab] = useState('profile');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: 'Max William',
    bio: 'Profissional apaixonado por tecnologia e design, focado em criar soluções digitais funcionais e intuitivas. Sempre em busca de novos aprendizados e desafios, com o objetivo de transformar ideias em experiências que gerem valor real para as pessoas.',
    isWorking: 'sim',
    birthDate: '07/09/2005',
    education: 'Ensino Superior (Incompleto)',
    email: 'maxwilliam384@gmail.com',
    phone: '(47) 99953-1441',
    termsAccepted: true
  });

  const tabs = [
    { id: 'profile', label: 'Dados de perfil' },
    { id: 'password', label: 'Alterar senha' },
    { id: 'notifications', label: 'Notificações' },
    { id: 'content', label: 'Bagagem de conteúdo' }
  ];

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = async () => {
    setIsLoading(true);
    try {
      // Simular salvamento
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Salvando alterações:', formData);
      // Implementar lógica de salvamento real
    } catch (error) {
      console.error('Erro ao salvar:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    console.log('Cancelando alterações');
    // Implementar lógica de cancelamento
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '32px',
      padding: '24px 32px',
      maxWidth: '1196px',
      margin: '0 auto',
      width: '100%'
    }}>
      {/* Back Button */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginBottom: '16px'
      }}>
        <button
          onClick={() => setCurrentContent('home')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 12px',
            backgroundColor: 'transparent',
            border: '1px solid #373A41',
            borderRadius: '8px',
            color: '#CECFD2',
            fontFamily: 'Sora',
            fontSize: '14px',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#2D2D3B';
            e.currentTarget.style.borderColor = '#F48E2F';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.borderColor = '#373A41';
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Voltar para o início
        </button>
      </div>

      {/* Page Header */}
      <PageHeader
        userName="Max William"
        userRole="INSS - Analista de seguro social"
        onDeleteAccount={onDeleteAccount}
        onUpdatePhoto={onUpdatePhoto}
      />

      {/* Container */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
        {/* Tabs */}
        <SettingsTabs
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        {/* Content based on active tab */}
        {activeTab === 'profile' && (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px'
          }}>
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
                    Atualize seus dados pessoais
                  </h2>
                  <p style={{
                    fontFamily: 'Sora',
                    fontWeight: '400',
                    fontSize: '14px',
                    lineHeight: '1.43em',
                    color: '#E9EAEB',
                    margin: 0
                  }}>
                    Mantenha suas informações sempre atualizadas para garantir uma experiência personalizada e segura.
                  </p>
                </div>
              </div>
              <SectionDivider />
            </div>

            {/* Form */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              {/* Username Field */}
              <div style={{
                display: 'flex',
                gap: '40px',
                flexWrap: 'wrap'
              }}>
                <FormField
                  label="Nome de usuário"
                  required
                >
                  <InputField
                    value={formData.username}
                    onChange={(value) => handleInputChange('username', value)}
                    icon={<Mail01 width="20" height="20" stroke="#94979C" strokeWidth="1.67" />}
                  />
                </FormField>
              </div>

              <SectionDivider />

              {/* Bio Field */}
              <div style={{
                display: 'flex',
                gap: '40px',
                flexWrap: 'wrap'
              }}>
                <FormField
                  label="Sua biografia"
                  supportingText="Escreva uma breve descrição sobre você."
                  width="100%"
                >
                  <InputField
                    value={formData.bio}
                    onChange={(value) => handleInputChange('bio', value)}
                    type="textarea"
                    rows={4}
                    maxLength={400}
                    showCharCount
                  />
                </FormField>
              </div>

              <SectionDivider />

              {/* Working Status */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '40px',
                flexWrap: 'wrap'
              }}>
                <FormField
                  label="Você está trabalhando atualmente?"
                  width="300px"
                >
                  <ButtonGroup
                    options={[
                      { value: 'sim', label: 'Sim' },
                      { value: 'não', label: 'Não' }
                    ]}
                    value={formData.isWorking}
                    onChange={(value) => handleInputChange('isWorking', value)}
                  />
                </FormField>
              </div>

              <SectionDivider />

              {/* Birth Date */}
              <div style={{
                display: 'flex',
                gap: '40px',
                flexWrap: 'wrap'
              }}>
                <FormField
                  label="Data de nascimento"
                  width="512px"
                >
                  <InputField
                    value={formData.birthDate}
                    onChange={(value) => handleInputChange('birthDate', value)}
                    disabled
                    icon={<Mail01 width="20" height="20" stroke="#94979C" strokeWidth="1.67" />}
                  />
                </FormField>
              </div>

              <SectionDivider />

              {/* Education */}
              <div style={{
                display: 'flex',
                gap: '40px',
                flexWrap: 'wrap'
              }}>
                <FormField
                  label="Qual sua formação?"
                  width="512px"
                >
                  <InputField
                    value={formData.education}
                    onChange={(value) => handleInputChange('education', value)}
                    icon={<GraduationHat01 width="20" height="20" stroke="#94979C" strokeWidth="1.67" />}
                  />
                </FormField>
              </div>

              <SectionDivider />

              {/* Contact Information */}
              <div style={{
                display: 'flex',
                gap: '40px',
                flexWrap: 'wrap'
              }}>
                <FormField
                  label="Informações de contato"
                  supportingText="Suas informações para entrarmos em contato com você."
                  width="300px"
                >
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px'
                  }}>
                    <InputField
                      value={formData.email}
                      onChange={(value) => handleInputChange('email', value)}
                      type="email"
                      disabled
                      icon={<Mail01 width="20" height="20" stroke="#94979C" strokeWidth="1.67" />}
                    />
                    <InputField
                      value={formData.phone}
                      onChange={(value) => handleInputChange('phone', value)}
                      type="tel"
                      disabled
                      icon={<Phone width="20" height="20" stroke="#94979C" strokeWidth="1.67" />}
                    />
                  </div>
                </FormField>
              </div>

              <SectionDivider />

              {/* Terms Agreement */}
              <CheckboxField
                checked={formData.termsAccepted}
                onChange={(checked) => handleInputChange('termsAccepted', checked)}
                label="Concordância com os Termos de Uso"
                supportingText="Você já aceitou ao se cadastrar, mas pode revisar e confirmar sempre que desejar."
              />
            </div>

            {/* Section Footer */}
            <FormFooter
              onCancel={handleCancel}
              onSave={handleSave}
              isLoading={isLoading}
            />
          </div>
        )}

        {/* Other tabs content can be added here */}
        {activeTab === 'password' && (
          <div style={{ color: '#F7F7F7' }}>Conteúdo da aba Alterar senha</div>
        )}
        {activeTab === 'notifications' && (
          <div style={{ color: '#F7F7F7' }}>Conteúdo da aba Notificações</div>
        )}
        {activeTab === 'content' && (
          <div style={{ color: '#F7F7F7' }}>Conteúdo da aba Bagagem de conteúdo</div>
        )}
      </div>
    </div>
  );
};
