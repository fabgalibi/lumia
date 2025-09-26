import React from 'react';
import { Header } from '@/components/lumia/header';
import { AccountSettingsContent } from '@/components/account-settings';
import { useNavigate } from 'react-router';

export const AccountSettingsPage: React.FC = () => {
  const navigate = useNavigate();

  const handleDeleteAccount = async () => {
    const confirmed = confirm('Tem certeza que deseja deletar sua conta? Esta ação não pode ser desfeita.');
    if (confirmed) {
      try {
        // Simular API call para deletar conta
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log('Conta deletada com sucesso');
        
        // Redirecionar para login após deletar conta
        navigate('/login');
      } catch (error) {
        console.error('Erro ao deletar conta:', error);
        alert('Erro ao deletar conta. Tente novamente.');
      }
    }
  };

  const handleUpdatePhoto = async () => {
    try {
      // Simular seleção de arquivo
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      
      input.onchange = async (event) => {
        const file = (event.target as HTMLInputElement).files?.[0];
        if (file) {
          // Validar tamanho (máximo 5MB)
          if (file.size > 5 * 1024 * 1024) {
            alert('Arquivo muito grande. Máximo 5MB.');
            return;
          }

          // Simular upload
          console.log('Iniciando upload da foto:', file.name);
          await new Promise(resolve => setTimeout(resolve, 2000));
          console.log('Foto atualizada com sucesso');
          alert('Foto atualizada com sucesso!');
        }
      };
      
      input.click();
    } catch (error) {
      console.error('Erro ao atualizar foto:', error);
      alert('Erro ao atualizar foto. Tente novamente.');
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#1A1A1A',
      minHeight: '100vh'
    }}>
      {/* Header */}
      <Header title="Configurações de conta" />
      
      {/* Main Content */}
      <main style={{
        flex: 1,
        overflow: 'auto'
      }}>
        <AccountSettingsContent
          onDeleteAccount={handleDeleteAccount}
          onUpdatePhoto={handleUpdatePhoto}
        />
      </main>
    </div>
  );
};
