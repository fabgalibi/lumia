import React from 'react';
import { PersonalInfoSection, ContactInfoSection, TermsAgreementSection } from './index';
import { FormContainer } from '../../index';

interface ProfileFormProps {
  formData: {
    username: string;
    bio: string;
    isWorking: string;
    birthDate: string;
    education: string;
    email: string;
    phone: string;
    termsAccepted: boolean;
  };
  onInputChange: (field: string, value: string | boolean) => void;
  validationErrors?: {
    username?: string;
    bio?: string;
    email?: string;
    phone?: string;
    termsAccepted?: string;
  };
  screenSize?: 'mobile' | 'tablet' | 'desktop';
}

export const ProfileForm: React.FC<ProfileFormProps> = ({
  formData,
  onInputChange,
  validationErrors: _validationErrors = {},
  screenSize = 'desktop'
}) => {
  return (
    <FormContainer screenSize={screenSize}>
      {/* Personal Information */}
      <PersonalInfoSection
        formData={{
          username: formData.username,
          bio: formData.bio,
          isWorking: formData.isWorking,
          birthDate: formData.birthDate,
          education: formData.education
        }}
        onInputChange={onInputChange}
        screenSize={screenSize}
      />

      {/* Contact Information */}
      <ContactInfoSection
        formData={{
          email: formData.email,
          phone: formData.phone
        }}
        onInputChange={onInputChange}
        screenSize={screenSize}
      />

      {/* Terms Agreement */}
      <TermsAgreementSection
        termsAccepted={formData.termsAccepted}
        onTermsChange={(checked) => onInputChange('termsAccepted', checked)}
        screenSize={screenSize}
      />
    </FormContainer>
  );
};
