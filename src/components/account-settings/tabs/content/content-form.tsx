import React from 'react';
import { FormSection, SectionLabel, FormFieldArea, DisplayField, ErrorMessage, FormContainer, InfoMessage } from '../../index';

interface ContentFormProps {
  formData: {
    studyArea: string;
    preparation: string;
    availability: string;
    trajectory: string;
    knowledge: string;
    startDate: string;
  };
  onInputChange: (field: string, value: string) => void;
  validationErrors?: {
    studyArea?: string;
    preparation?: string;
    availability?: string;
    trajectory?: string;
    knowledge?: string;
    startDate?: string;
  };
  screenSize?: 'mobile' | 'tablet' | 'desktop';
}

export const ContentForm: React.FC<ContentFormProps> = ({
  formData,
  onInputChange: _onInputChange,
  validationErrors = {},
  screenSize = 'desktop'
}) => {
  return (
    <FormContainer screenSize={screenSize}>
      {/* Área de Estudo */}
      <FormSection screenSize={screenSize}>
        <SectionLabel 
          screenSize={screenSize}
          title="Área de Estudo"
          supportingText="Referente a área de estudo que você selecionou."
        />
        <FormFieldArea screenSize={screenSize}>
          <DisplayField
            value={formData.studyArea}
            screenSize={screenSize}
          />
          {validationErrors.studyArea && (
            <ErrorMessage 
              message={validationErrors.studyArea} 
              screenSize={screenSize} 
            />
          )}
        </FormFieldArea>
      </FormSection>

      {/* Preparação */}
      <FormSection screenSize={screenSize}>
        <SectionLabel 
          screenSize={screenSize}
          title="Preparação"
          supportingText="Referente ao tipo de preparação que você selecionou."
        />
        <FormFieldArea screenSize={screenSize}>
          <DisplayField
            value={formData.preparation}
            screenSize={screenSize}
          />
          {validationErrors.preparation && (
            <ErrorMessage 
              message={validationErrors.preparation} 
              screenSize={screenSize} 
            />
          )}
        </FormFieldArea>
      </FormSection>

      {/* Disponibilidade */}
      <FormSection screenSize={screenSize}>
        <SectionLabel 
          screenSize={screenSize}
          title="Disponibilidade"
          supportingText="Referente ao tempo de dedicação ao estudos que você selecionou."
        />
        <FormFieldArea screenSize={screenSize}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            width: '100%'
          }}>
            <DisplayField
              value={formData.availability}
              screenSize={screenSize}
            />
            
            <InfoMessage
              message={`Iniciou em: ${formData.startDate}`}
              screenSize={screenSize}
            />
            
            {validationErrors.availability && (
              <ErrorMessage 
                message={validationErrors.availability} 
                screenSize={screenSize} 
              />
            )}
          </div>
        </FormFieldArea>
      </FormSection>

      {/* Trajetória */}
      <FormSection screenSize={screenSize}>
        <SectionLabel 
          screenSize={screenSize}
          title="Trajetória"
          supportingText="Referente ao tempo estudado que você selecionou."
        />
        <FormFieldArea screenSize={screenSize}>
          <DisplayField
            value={formData.trajectory}
            screenSize={screenSize}
          />
          {validationErrors.trajectory && (
            <ErrorMessage 
              message={validationErrors.trajectory} 
              screenSize={screenSize} 
            />
          )}
        </FormFieldArea>
      </FormSection>

      {/* Conhecimentos */}
      <FormSection screenSize={screenSize} withDivider={false}>
        <SectionLabel 
          screenSize={screenSize}
          title="Conhecimentos"
          supportingText="Referente ao seu nível geral de conhecimentos."
        />
        <FormFieldArea screenSize={screenSize}>
          <DisplayField
            value={formData.knowledge}
            screenSize={screenSize}
          />
          {validationErrors.knowledge && (
            <ErrorMessage 
              message={validationErrors.knowledge} 
              screenSize={screenSize} 
            />
          )}
        </FormFieldArea>
      </FormSection>
    </FormContainer>
  );
};
