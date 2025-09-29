import React from 'react';
import { Mail01, Phone } from '@untitledui/icons';
import { FormSection, SectionLabel, FormFieldArea } from '../../index';
import { Input, Container } from '@/components/ui/design-system';
import { colors } from '@/components/ui';

interface ContactInfoSectionProps {
  formData: {
    email: string;
    phone: string;
  };
  onInputChange: (field: string, value: string) => void;
  screenSize?: 'mobile' | 'tablet' | 'desktop';
}

export const ContactInfoSection: React.FC<ContactInfoSectionProps> = ({
  formData,
  onInputChange,
  screenSize = 'desktop'
}) => {
  return (
    <>
      {/* Contact Information - Uma única FormSection como no Figma */}
      <FormSection screenSize={screenSize}>
        <SectionLabel 
          screenSize={screenSize}
          title="Informações de contato"
          supportingText="Suas informações para entrarmos em contato com você."
        />
        <FormFieldArea screenSize={screenSize}>
          <Container direction="column" gap={4} screenSize={screenSize}>
            <Input
              value={formData.email}
              onChange={(value: string) => onInputChange('email', value)}
              type="email"
              disabled
              icon={<Mail01 width="20" height="20" stroke={colors.text.disabled} strokeWidth="1.67" />}
              screenSize={screenSize}
            />
            <Input
              value={formData.phone}
              onChange={(value: string) => onInputChange('phone', value)}
              type="tel"
              disabled
              icon={<Phone width="20" height="20" stroke={colors.text.disabled} strokeWidth="1.67" />}
              screenSize={screenSize}
            />
          </Container>
        </FormFieldArea>
      </FormSection>
    </>
  );
};
