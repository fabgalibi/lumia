import React, { useState, useEffect } from 'react';
import { SectionHeader, FormSection, SectionLabel, FormFieldArea, InputField } from '../../index';
import { Edit05, AlertCircle } from '@untitledui/icons';

interface ContentTabProps {
  initialData?: {
    studyArea: string;
    preparation: string;
    availability: string;
    trajectory: string;
    knowledge: string;
    startDate: string;
  };
  onFormDataChange?: (data: any, isValid: boolean, isLoading: boolean) => void;
  screenSize?: 'mobile' | 'tablet' | 'desktop';
}

export const ContentTab: React.FC<ContentTabProps> = ({
  initialData = {
    studyArea: 'Controle',
    preparation: 'Pré-edital',
    availability: 'Normal (30-39 horas semanais)',
    trajectory: 'Ouro (2 anos e meio - 4 anos)',
    knowledge: 'Nível 3 (Terminei teoria, mas não tenho confiança)',
    startDate: '10/09/2025'
  },
  onFormDataChange,
  screenSize = 'desktop'
}) => {
  // Detecta telas muito grandes (> 1400px) para aplicar maxWidth
  const [isVeryLargeScreen, setIsVeryLargeScreen] = useState(false);
  const isLoading = false;

  useEffect(() => {
    const checkScreenSize = () => {
      setIsVeryLargeScreen(window.innerWidth > 1400);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const [formData, setFormData] = useState(initialData);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Comunicar mudanças do formulário para o componente pai
  useEffect(() => {
    if (onFormDataChange) {
      const isValid = true; // Sempre válido para bagagem de conteúdo
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
          title="Bagagem de conteúdo"
          supportingText="Atualize sempre que preferir sua experiência e conhecimentos já adquiridos para personalizar sua preparação."
          screenSize={screenSize}
        />

        {/* Form */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          width: '100%',
          maxWidth: screenSize === 'desktop' && isVeryLargeScreen ? '1000px' : 'none',
          margin: '0'
        }}>
          {/* Área de Estudo */}
          <FormSection screenSize={screenSize}>
            <SectionLabel 
              screenSize={screenSize}
              title="Área de Estudo"
              supportingText="Referente a área de estudo que você selecionou."
            />
            <FormFieldArea screenSize={screenSize}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 14px',
                backgroundColor: '#2D2D3B',
                border: '1px solid #373A41',
                borderRadius: '8px',
                boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)',
                width: '100%',
                minWidth: 0,
                boxSizing: 'border-box' as const
              }}>
                <span style={{
                  fontFamily: 'Sora',
                  fontWeight: '400',
                  fontSize: '16px',
                  lineHeight: '1.5em',
                  color: '#CECFD2',
                  flex: 1
                }}>
                  {formData.studyArea}
                </span>
                <Edit05 width="16" height="16" stroke="#85888E" strokeWidth="1.5" />
              </div>
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
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 14px',
                backgroundColor: '#2D2D3B',
                border: '1px solid #373A41',
                borderRadius: '8px',
                boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)',
                width: '100%',
                minWidth: 0,
                boxSizing: 'border-box' as const
              }}>
                <span style={{
                  fontFamily: 'Sora',
                  fontWeight: '400',
                  fontSize: '16px',
                  lineHeight: '1.5em',
                  color: '#CECFD2',
                  flex: 1
                }}>
                  {formData.preparation}
                </span>
                <Edit05 width="16" height="16" stroke="#85888E" strokeWidth="1.5" />
              </div>
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
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 14px',
                  backgroundColor: '#2D2D3B',
                  border: '1px solid #373A41',
                  borderRadius: '8px',
                  boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)',
                  width: '100%',
                  minWidth: 0,
                  boxSizing: 'border-box' as const
                }}>
                  <span style={{
                    fontFamily: 'Sora',
                    fontWeight: '400',
                    fontSize: '16px',
                    lineHeight: '1.5em',
                    color: '#CECFD2',
                    flex: 1
                  }}>
                    {formData.availability}
                  </span>
                  <Edit05 width="16" height="16" stroke="#85888E" strokeWidth="1.5" />
                </div>
                
                {/* Info com data de início */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '0px 12px'
                }}>
                  <AlertCircle width="20" height="20" stroke="#CECFD2" strokeWidth="1.5" />
                  <span style={{
                    fontFamily: 'Sora',
                    fontWeight: '400',
                    fontSize: '12px',
                    lineHeight: '1.5em',
                    color: '#CECFD2'
                  }}>
                    Iniciou em: {formData.startDate}
                  </span>
                </div>
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
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 14px',
                backgroundColor: '#2D2D3B',
                border: '1px solid #373A41',
                borderRadius: '8px',
                boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)',
                width: '100%',
                minWidth: 0,
                boxSizing: 'border-box' as const
              }}>
                <span style={{
                  fontFamily: 'Sora',
                  fontWeight: '400',
                  fontSize: '16px',
                  lineHeight: '1.5em',
                  color: '#CECFD2',
                  flex: 1
                }}>
                  {formData.trajectory}
                </span>
                <Edit05 width="16" height="16" stroke="#85888E" strokeWidth="1.5" />
              </div>
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
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 14px',
                backgroundColor: '#2D2D3B',
                border: '1px solid #373A41',
                borderRadius: '8px',
                boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)',
                width: '100%',
                minWidth: 0,
                boxSizing: 'border-box' as const
              }}>
                <span style={{
                  fontFamily: 'Sora',
                  fontWeight: '400',
                  fontSize: '16px',
                  lineHeight: '1.5em',
                  color: '#CECFD2',
                  flex: 1
                }}>
                  {formData.knowledge}
                </span>
                <Edit05 width="16" height="16" stroke="#85888E" strokeWidth="1.5" />
              </div>
            </FormFieldArea>
          </FormSection>
        </div>
      </div>
    </div>
  );
};