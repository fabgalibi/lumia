import React from 'react';
import { UniversalAccountSettings } from './universal-account-settings';

interface AccountSettingsContentProps {
  onDeleteAccount: () => void;
  onUpdatePhoto: () => void;
}

export const AccountSettingsContent: React.FC<AccountSettingsContentProps> = ({
  onDeleteAccount,
  onUpdatePhoto
}) => {
  return (
    <UniversalAccountSettings
      onDeleteAccount={onDeleteAccount}
      onUpdatePhoto={onUpdatePhoto}
      userType="aluno"
    />
  );
};