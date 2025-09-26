import React, { useState } from 'react';
import { SectionHeader, FormFooter } from '../../index';
import { PersonalInfoSection, ContactInfoSection, TermsAgreementSection } from './index';

interface ProfileTabProps {
  initialData?: {
    username: string;
    bio: string;
    isWorking: string;
    birthDate: string;
    education: string;
    email: string;
    phone: string;
    termsAccepted: boolean;
  };
  onSave?: (data: any) => Promise<void>;
  onCancel?: () => void;
}

export const ProfileTab: React.FC<ProfileTabProps> = ({
  initialData = {
    username: 'Max William',
    bio: 'Profissional apaixonado por tecnologia e design, focado em criar soluções digitais funcionais e intuitivas. Sempre em busca de novos aprendizados e desafios, com o objetivo de transformar ideias em experiências que gerem valor real para as pessoas.',
    isWorking: 'sim',
    birthDate: '07/09/2005',
    education: 'Ensino Superior (Incompleto)',
    email: 'maxwilliam384@gmail.com',
    phone: '(47) 99953-1441',
    termsAccepted: true
  },
  onSave,
  onCancel
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(initialData);

  const handleInputChange = (field: string, value: string | boolean) => {
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
        console.log('Salvando alterações:', formData);
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
      <SectionHeader
        title="Atualize seus dados pessoais"
        supportingText="Mantenha suas informações sempre atualizadas para garantir uma experiência personalizada e segura."
      />
      
      {/* Form */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>
        {/* Personal Information */}
        <PersonalInfoSection
          formData={{
            username: formData.username,
            bio: formData.bio,
            isWorking: formData.isWorking,
            birthDate: formData.birthDate,
            education: formData.education
          }}
          onInputChange={handleInputChange}
        />

        {/* Contact Information */}
        <ContactInfoSection
          formData={{
            email: formData.email,
            phone: formData.phone
          }}
          onInputChange={handleInputChange}
        />

        {/* Terms Agreement */}
        <TermsAgreementSection
          termsAccepted={formData.termsAccepted}
          onTermsChange={(checked) => handleInputChange('termsAccepted', checked)}
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
