import React, { useState, useEffect } from 'react';
import { SectionHeader, FormSection, SectionLabel, FormFieldArea, ButtonGroup } from '../../index';

interface NotificationsTabProps {
  initialData?: {
    platformUpdates: boolean;
    mentorMessages: boolean;
    newMaterial: boolean;
    activitiesAndSimulations: boolean;
    mentorships: boolean;
  };
  onFormDataChange?: (data: any, isValid: boolean, isLoading: boolean) => void;
  screenSize?: 'mobile' | 'tablet' | 'desktop';
}

export const NotificationsTab: React.FC<NotificationsTabProps> = ({
  initialData = {
    platformUpdates: true,
    mentorMessages: true,
    newMaterial: true,
    activitiesAndSimulations: false,
    mentorships: false
  },
  onFormDataChange,
  screenSize = 'desktop'
}) => {
  // Detecta telas muito grandes (> 1400px) para aplicar maxWidth
  const [isVeryLargeScreen, setIsVeryLargeScreen] = useState(false);
  const isLoading = false; // Notificações não têm loading state

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

  // Comunicar mudanças do formulário para o componente pai
  useEffect(() => {
    if (onFormDataChange) {
      const isValid = true; // Sempre válido para notificações
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
        gap: '24px'
      }}>
        {/* Section Header */}
        <SectionHeader
          title="Notificações"
          supportingText="Gerencie como e quando deseja receber avisos da plataforma."
          screenSize={screenSize}
        />

        {/* Form */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          width: screenSize === 'mobile' ? '343px' : '100%', // Largura fixa mobile conforme Figma
          maxWidth: screenSize === 'desktop' && isVeryLargeScreen ? '1000px' : 'none',
          margin: '0'
        }}>
          {/* Novidades da plataforma */}
          <FormSection screenSize={screenSize} gap="large">
            <SectionLabel 
              title="Novidades da plataforma"
              supportingText="Receba informações sobre atualizações, novas funcionalidades e melhorias."
              screenSize={screenSize}
            />
            <FormFieldArea screenSize={screenSize}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center',
                height: screenSize === 'desktop' ? '48px' : 'auto' // Altura para centralizar verticalmente
              }}>
                <ButtonGroup
                  options={[
                    { value: 'true', label: 'Sim' },
                    { value: 'false', label: 'Não' }
                  ]}
                  selectedValue={formData.platformUpdates ? 'true' : 'false'}
                  onChange={(value) => handleInputChange('platformUpdates', value === 'true')}
                  screenSize={screenSize}
                />
              </div>
            </FormFieldArea>
          </FormSection>

          {/* Mensagens do mentor */}
          <FormSection screenSize={screenSize} gap="large">
            <SectionLabel 
              title="Mensagens do mentor"
              supportingText="Seja notificado quando seu mentor enviar mensagens diretas."
              screenSize={screenSize}
            />
            <FormFieldArea screenSize={screenSize}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center',
                height: screenSize === 'desktop' ? '48px' : 'auto'
              }}>
                <ButtonGroup
                  options={[
                    { value: 'true', label: 'Sim' },
                    { value: 'false', label: 'Não' }
                  ]}
                  selectedValue={formData.mentorMessages ? 'true' : 'false'}
                  onChange={(value) => handleInputChange('mentorMessages', value === 'true')}
                  screenSize={screenSize}
                />
              </div>
            </FormFieldArea>
          </FormSection>

          {/* Novo material publicado */}
          <FormSection screenSize={screenSize} gap="large">
            <SectionLabel 
              title="Novo material publicado"
              supportingText="Seja notificado quando novos materiais forem publicados para você."
              screenSize={screenSize}
            />
            <FormFieldArea screenSize={screenSize}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center',
                height: screenSize === 'desktop' ? '48px' : 'auto'
              }}>
                <ButtonGroup
                  options={[
                    { value: 'true', label: 'Sim' },
                    { value: 'false', label: 'Não' }
                  ]}
                  selectedValue={formData.newMaterial ? 'true' : 'false'}
                  onChange={(value) => handleInputChange('newMaterial', value === 'true')}
                  screenSize={screenSize}
                />
              </div>
            </FormFieldArea>
          </FormSection>

          {/* Atividades e simulados */}
          <FormSection screenSize={screenSize} gap="large">
            <SectionLabel 
              title="Atividades e simulados"
              supportingText="Seja notificado sobre novos simulados, questões ou exercícios disponíveis."
              screenSize={screenSize}
            />
            <FormFieldArea screenSize={screenSize}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center',
                height: screenSize === 'desktop' ? '48px' : 'auto'
              }}>
                <ButtonGroup
                  options={[
                    { value: 'true', label: 'Sim' },
                    { value: 'false', label: 'Não' }
                  ]}
                  selectedValue={formData.activitiesAndSimulations ? 'true' : 'false'}
                  onChange={(value) => handleInputChange('activitiesAndSimulations', value === 'true')}
                  screenSize={screenSize}
                />
              </div>
            </FormFieldArea>
          </FormSection>

          {/* Mentorias */}
          <FormSection screenSize={screenSize} gap="large" withDivider={false}>
            <SectionLabel 
              title="Mentorias"
              supportingText="Seja notificado quando a data de uma mentoria agendada estiver próxima."
              screenSize={screenSize}
            />
            <FormFieldArea screenSize={screenSize}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center',
                height: screenSize === 'desktop' ? '48px' : 'auto'
              }}>
                <ButtonGroup
                  options={[
                    { value: 'true', label: 'Sim' },
                    { value: 'false', label: 'Não' }
                  ]}
                  selectedValue={formData.mentorships ? 'true' : 'false'}
                  onChange={(value) => handleInputChange('mentorships', value === 'true')}
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
