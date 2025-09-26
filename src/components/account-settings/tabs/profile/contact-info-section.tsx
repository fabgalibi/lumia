import React from 'react';
import { Mail01, Phone } from '@untitledui/icons';
import { FormSection, SectionLabel, FormFieldArea, InputField } from '../../index';

interface ContactInfoSectionProps {
  formData: {
    email: string;
    phone: string;
  };
  onInputChange: (field: string, value: string) => void;
}

export const ContactInfoSection: React.FC<ContactInfoSectionProps> = ({
  formData,
  onInputChange
}) => {
  return (
    <>
      {/* Contact Information */}
      <FormSection>
        <SectionLabel 
          title="Informações de contato"
          supportingText="Suas informações para entrarmos em contato com você."
        />
        <FormFieldArea>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            <InputField
              value={formData.email}
              onChange={(value) => onInputChange('email', value)}
              type="email"
              disabled
              icon={<Mail01 width="20" height="20" stroke="#94979C" strokeWidth="1.67" />}
            />
            <InputField
              value={formData.phone}
              onChange={(value) => onInputChange('phone', value)}
              type="tel"
              disabled
              icon={<Phone width="20" height="20" stroke="#94979C" strokeWidth="1.67" />}
            />
          </div>
        </FormFieldArea>
      </FormSection>
    </>
  );
};
