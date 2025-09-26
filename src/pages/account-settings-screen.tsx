import React, { useState } from 'react';
import { 
  Mail01, 
  Phone, 
  GraduationHat01
} from '@untitledui/icons';
import {
  AccountHeader,
  PageHeader,
  SettingsTabs,
  FormField,
  InputField,
  ButtonGroup,
  CheckboxField
} from '@/components/account-settings';

interface AccountSettingsScreenProps {
  // Props podem ser adicionadas conforme necessário
}

const AccountSettingsScreen: React.FC<AccountSettingsScreenProps> = () => {
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

  const handleDeleteAccount = () => {
    console.log('Deletando conta');
    // Implementar lógica de exclusão
  };

  const handleUpdatePhoto = () => {
    console.log('Atualizando foto');
    // Implementar lógica de upload
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#1A1A1A',
      minHeight: '100vh'
    }}>
      {/* Page Header */}
      <AccountHeader
        userName="Max William"
        userRole="INSS - Analista de seguro social"
        onDeleteAccount={handleDeleteAccount}
        onUpdatePhoto={handleUpdatePhoto}
      />

      {/* Main Content */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        padding: '24px 32px',
        maxWidth: '1196px',
        margin: '0 auto',
        width: '100%'
      }}>
        {/* Page Header */}
        <PageHeader
          userName="Max William"
          userRole="INSS - Analista de seguro social"
          onDeleteAccount={handleDeleteAccount}
          onUpdatePhoto={handleUpdatePhoto}
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
              <div style={{ height: '1px', background: '#2C2C45', margin: '16px 0' }} />
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

              <div style={{ height: '1px', background: '#2C2C45', margin: '16px 0' }} />

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

              <div style={{ height: '1px', background: '#2C2C45', margin: '16px 0' }} />

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

              <div style={{ height: '1px', background: '#2C2C45', margin: '16px 0' }} />

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

              <div style={{ height: '1px', background: '#2C2C45', margin: '16px 0' }} />

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

              <div style={{ height: '1px', background: '#2C2C45', margin: '16px 0' }} />

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

              <div style={{ height: '1px', background: '#2C2C45', margin: '16px 0' }} />

              {/* Terms Agreement */}
              <CheckboxField
                checked={formData.termsAccepted}
                onChange={(checked) => handleInputChange('termsAccepted', checked)}
                label="Concordância com os Termos de Uso"
                supportingText="Você já aceitou ao se cadastrar, mas pode revisar e confirmar sempre que desejar."
              />
            </div>

            {/* Section Footer */}
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', marginTop: '24px' }}>
              <button
                onClick={handleCancel}
                style={{
                  padding: '10px 16px',
                  backgroundColor: '#2D2D45',
                  color: '#CECFD2',
                  border: '1px solid #373A41',
                  borderRadius: '8px',
                  fontFamily: 'Sora',
                  fontWeight: 600,
                  fontSize: '14px',
                  cursor: 'pointer'
                }}
              >
                Cancelar
              </button>
              <button
                onClick={handleSave}
                disabled={isLoading}
                style={{
                  padding: '10px 16px',
                  backgroundColor: '#F66649',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontFamily: 'Sora',
                  fontWeight: 600,
                  fontSize: '14px',
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  opacity: isLoading ? 0.6 : 1
                }}
              >
                {isLoading ? 'Salvando...' : 'Salvar alterações'}
              </button>
            </div>
          </div>
        )}

        {/* Other tabs content can be added here */}
        {activeTab === 'password' && (
          <div style={{ padding: '20px', color: '#FFFFFF' }}>
            <h3>Alterar senha</h3>
            <p>Conteúdo da aba de alterar senha será implementado aqui.</p>
          </div>
        )}

        {activeTab === 'notifications' && (
          <div style={{ padding: '20px', color: '#FFFFFF' }}>
            <h3>Notificações</h3>
            <p>Conteúdo da aba de notificações será implementado aqui.</p>
          </div>
        )}

        {activeTab === 'content' && (
          <div style={{ padding: '20px', color: '#FFFFFF' }}>
            <h3>Bagagem de conteúdo</h3>
            <p>Conteúdo da aba de bagagem de conteúdo será implementado aqui.</p>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default AccountSettingsScreen;
