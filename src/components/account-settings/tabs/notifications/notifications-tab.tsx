import React, { useState, useEffect } from 'react';
import { SectionHeader } from '../../index';
import { NotificationsForm } from './notifications-form';

interface NotificationsTabProps {
  initialData?: {
    platformUpdates: boolean;
    mentorMessages: boolean;
    newMaterial: boolean;
    activitiesAndSimulations: boolean;
    mentorships: boolean;
  };
  onSave?: (data: any) => Promise<void>;
  onCancel?: () => void;
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
  onSave: _onSave,
  onCancel: _onCancel,
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
  const [validationErrors, setValidationErrors] = useState<{
    platformUpdates?: string;
    mentorMessages?: string;
    newMaterial?: string;
    activitiesAndSimulations?: string;
    mentorships?: string;
  }>({});

  const handleInputChange = (field: string, value: boolean) => {
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
    // Notificações sempre são válidas (não há campos obrigatórios)
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
          title="Notificações"
          supportingText="Gerencie como e quando deseja receber avisos da plataforma."
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
          <NotificationsForm
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
