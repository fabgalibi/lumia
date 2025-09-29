import React from 'react';
import { GraduationHat01 } from '@untitledui/icons';
import { FormSection, SectionLabel, FormFieldArea, ButtonGroup } from '../../index';
import { Input, Select } from '@/components/ui/design-system';
import { colors } from '@/components/ui';

interface PersonalInfoSectionProps {
  formData: {
    username: string;
    bio: string;
    isWorking: string;
    birthDate: string;
    education: string;
  };
  onInputChange: (field: string, value: string) => void;
  screenSize?: 'mobile' | 'tablet' | 'desktop';
}

export const PersonalInfoSection: React.FC<PersonalInfoSectionProps> = ({
  formData,
  onInputChange,
  screenSize = 'desktop'
}) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }}>
      {/* Username Field */}
      <FormSection screenSize={screenSize}>
        <SectionLabel screenSize={screenSize} title="Nome de usuário" />
        <FormFieldArea screenSize={screenSize}>
          <Input
            value={formData.username}
            onChange={(value: string) => onInputChange('username', value)}
            placeholder="Max William"
            type="text"
            screenSize={screenSize}
          />
        </FormFieldArea>
      </FormSection>


      {/* Bio Field */}
      <FormSection screenSize={screenSize}>
        <SectionLabel 
          title="Sua biografia" 
          supportingText="Escreva uma breve descrição sobre você."
        />
        <FormFieldArea screenSize={screenSize}>
          <Input
            value={formData.bio}
            onChange={(value: string) => onInputChange('bio', value)}
            type="textarea"
            placeholder="Profissional apaixonado por tecnologia e design, focado em criar soluções digitais funcionais e intuitivas..."
            maxLength={400}
            showCharCount
            rows={5}
            screenSize={screenSize}
          />
        </FormFieldArea>
      </FormSection>


      {/* Working Status */}
      <FormSection screenSize={screenSize}>
        <SectionLabel screenSize={screenSize} title="Você está trabalhando atualmente?" />
        <FormFieldArea screenSize={screenSize}>
          <ButtonGroup
            options={[
              { value: 'sim', label: 'Sim' },
              { value: 'não', label: 'Não' }
            ]}
            value={formData.isWorking}
            onChange={(value) => onInputChange('isWorking', value)}
            screenSize={screenSize}
          />
        </FormFieldArea>
      </FormSection>


      {/* Birth Date */}
      <FormSection screenSize={screenSize}>
        <SectionLabel screenSize={screenSize} title="Data de nascimento" />
        <FormFieldArea screenSize={screenSize}>
          <Input
            value={formData.birthDate}
            onChange={(value: string) => onInputChange('birthDate', value)}
            disabled
            screenSize={screenSize}
          />
        </FormFieldArea>
      </FormSection>


      {/* Education */}
      <FormSection screenSize={screenSize}>
        <SectionLabel screenSize={screenSize} title="Qual sua formação?" />
        <FormFieldArea screenSize={screenSize}>
          <Select
            value={formData.education}
            onChange={(value: string) => onInputChange('education', value)}
            options={[
              { value: 'fundamental', label: 'Ensino Fundamental' },
              { value: 'medio', label: 'Ensino Médio' },
              { value: 'superior-incompleto', label: 'Ensino Superior (Incompleto)' },
              { value: 'superior-completo', label: 'Ensino Superior (Completo)' },
              { value: 'pos-graduacao', label: 'Pós-graduação' }
            ]}
            icon={<GraduationHat01 width="20" height="20" stroke={colors.text.secondary} strokeWidth="1.67" />}
            screenSize={screenSize}
          />
        </FormFieldArea>
      </FormSection>
    </div>
  );
};
