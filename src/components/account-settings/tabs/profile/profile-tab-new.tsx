import React, { useState } from 'react';
import { SectionHeader, FormSection, SectionLabel, FormFieldArea, FormFooter, InputField, ButtonGroup } from '../../index';

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
  screenSize?: 'mobile' | 'desktop';
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
  onCancel,
  screenSize = 'desktop'
}) => {
  const [formData, setFormData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = async () => {
    setIsLoading(true);
    try {
      if (onSave) {
        await onSave(formData);
      } else {
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
      
      {/* Form Container - estrutura principal conforme Figma */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        width: '100%'
      }}>
        
        {/* 1. Nome de usuário - TESTE LAYOUT LADO A LADO */}
        <FormSection>
          <SectionLabel title="Nome de usuário" />
          <FormFieldArea>
            <input
              type="text"
              value={formData.username}
              onChange={(e) => handleInputChange('username', e.target.value)}
              placeholder="Max William"
              style={{
                width: '100%',
                padding: '10px 14px',
                fontFamily: 'Sora',
                fontSize: '16px',
                color: '#CECFD2',
                backgroundColor: '#2D2D3B',
                border: '1px solid #373A41',
                borderRadius: '8px',
                boxSizing: 'border-box'
              }}
            />
          </FormFieldArea>
        </FormSection>

        {/* 2. Biografia */}
        <FormSection>
          <SectionLabel 
            title="Sua biografia" 
            supportingText="Escreva uma breve descrição sobre você."
          />
          <FormFieldArea>
            <InputField
              type="textarea"
              value={formData.bio}
              onChange={(value) => handleInputChange('bio', value)}
              placeholder="Conte um pouco sobre você..."
              maxLength={400}
              showCharCount={true}
              screenSize={screenSize}
            />
          </FormFieldArea>
        </FormSection>

        {/* 3. Trabalhando atualmente */}
        <FormSection>
          <SectionLabel title="Você está trabalhando atualmente?" />
          <FormFieldArea>
            <ButtonGroup
              options={[
                { id: 'sim', label: 'Sim' },
                { id: 'nao', label: 'Não' }
              ]}
              selectedValue={formData.isWorking}
              onChange={(value) => handleInputChange('isWorking', value)}
              fullWidth={screenSize === 'mobile'}
            />
          </FormFieldArea>
        </FormSection>

        {/* 4. Data de nascimento */}
        <FormSection>
          <SectionLabel title="Data de nascimento" />
          <FormFieldArea>
            <InputField
              type="text"
              value={formData.birthDate}
              onChange={(value) => handleInputChange('birthDate', value)}
              placeholder="07/09/2005"
              disabled={true}
            />
          </FormFieldArea>
        </FormSection>

        {/* 5. Formação */}
        <FormSection>
          <SectionLabel title="Qual sua formação?" />
          <FormFieldArea>
            <InputField
              type="select"
              value={formData.education}
              onChange={(value) => handleInputChange('education', value)}
              placeholder="Ensino Superior (Incompleto)"
              icon="graduation-hat-01"
            />
          </FormFieldArea>
        </FormSection>

        {/* 6. Informações de contato */}
        <FormSection withDivider={false}>
          <SectionLabel 
            title="Informações de contato"
            supportingText="Suas informações para entrarmos em contato com você."
          />
          <FormFieldArea>
            <InputField
              type="email"
              value={formData.email}
              onChange={(value) => handleInputChange('email', value)}
              placeholder="maxwilliam384@gmail.com"
              icon="mail-01"
              disabled={true}
            />
            <InputField
              type="tel"
              value={formData.phone}
              onChange={(value) => handleInputChange('phone', value)}
              placeholder="(47) 99953-1441"
              icon="phone"
              disabled={true}
            />
          </FormFieldArea>
        </FormSection>

      </div>

      {/* Form Footer */}
      <FormFooter
        onCancel={handleCancel}
        onSave={handleSave}
        isLoading={isLoading}
      />
    </>
  );
};
