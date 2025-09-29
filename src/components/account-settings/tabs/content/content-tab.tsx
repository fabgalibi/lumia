import React, { useState, useEffect } from 'react';
import { SectionHeader } from '../../index';
import { ContentForm } from './content-form';

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
  const [validationErrors, setValidationErrors] = useState<{
    studyArea?: string;
    preparation?: string;
    availability?: string;
    trajectory?: string;
    knowledge?: string;
    startDate?: string;
  }>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Clear validation errors when user changes value
    if (validationErrors[field as keyof typeof validationErrors]) {
      setValidationErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };

  const validateForm = () => {
    // Bagagem de conteúdo sempre é válida (campos são apenas informativos)
    return true;
  };

  // Comunicar mudanças do formulário para o componente pai
  useEffect(() => {
    if (onFormDataChange) {
      const isValid = validateForm();
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
          <ContentForm
            formData={formData}
            onInputChange={handleInputChange}
            validationErrors={validationErrors}
            screenSize={screenSize}
          />
        </div>
      </div>
    </div>
  );
};