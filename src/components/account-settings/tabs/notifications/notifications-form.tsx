import React from 'react';
import { FormSection, SectionLabel, FormFieldArea, ButtonGroup, ErrorMessage, FormContainer } from '../../index';

interface NotificationsFormProps {
  formData: {
    platformUpdates: boolean;
    mentorMessages: boolean;
    newMaterial: boolean;
    activitiesAndSimulations: boolean;
    mentorships: boolean;
  };
  onInputChange: (field: string, value: boolean) => void;
  validationErrors?: {
    platformUpdates?: string;
    mentorMessages?: string;
    newMaterial?: string;
    activitiesAndSimulations?: string;
    mentorships?: string;
  };
  screenSize?: 'mobile' | 'tablet' | 'desktop';
}

export const NotificationsForm: React.FC<NotificationsFormProps> = ({
  formData,
  onInputChange,
  validationErrors = {},
  screenSize = 'desktop'
}) => {
  return (
    <FormContainer screenSize={screenSize}>
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
            height: screenSize === 'desktop' ? '48px' : 'auto'
          }}>
            <ButtonGroup
              options={[
                { value: 'true', label: 'Sim' },
                { value: 'false', label: 'Não' }
              ]}
              selectedValue={formData.platformUpdates ? 'true' : 'false'}
              onChange={(value) => onInputChange('platformUpdates', value === 'true')}
              screenSize={screenSize}
            />
          </div>
          {validationErrors.platformUpdates && (
            <ErrorMessage 
              message={validationErrors.platformUpdates} 
              screenSize={screenSize} 
            />
          )}
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
              onChange={(value) => onInputChange('mentorMessages', value === 'true')}
              screenSize={screenSize}
            />
          </div>
          {validationErrors.mentorMessages && (
            <ErrorMessage 
              message={validationErrors.mentorMessages} 
              screenSize={screenSize} 
            />
          )}
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
              onChange={(value) => onInputChange('newMaterial', value === 'true')}
              screenSize={screenSize}
            />
          </div>
          {validationErrors.newMaterial && (
            <ErrorMessage 
              message={validationErrors.newMaterial} 
              screenSize={screenSize} 
            />
          )}
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
              onChange={(value) => onInputChange('activitiesAndSimulations', value === 'true')}
              screenSize={screenSize}
            />
          </div>
          {validationErrors.activitiesAndSimulations && (
            <ErrorMessage 
              message={validationErrors.activitiesAndSimulations} 
              screenSize={screenSize} 
            />
          )}
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
              onChange={(value) => onInputChange('mentorships', value === 'true')}
              screenSize={screenSize}
            />
          </div>
          {validationErrors.mentorships && (
            <ErrorMessage 
              message={validationErrors.mentorships} 
              screenSize={screenSize} 
            />
          )}
        </FormFieldArea>
      </FormSection>
    </FormContainer>
  );
};
