import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { DisciplineModalHeader, DisciplineForm, SubjectsList, DisciplineModalFooter } from '../forms';
import { adminDisciplinesService, CreateDisciplinaRequest } from '../../../../services/api/admin-disciplines.service';
import { SuccessNotification } from '../../../ui/success-notification';

interface DisciplineRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export const DisciplineRegistrationModal: React.FC<DisciplineRegistrationModalProps> = ({
  isOpen,
  onClose,
  onSuccess
}) => {
  const [nomeDisciplina, setNomeDisciplina] = useState('');
  const [assunto, setAssunto] = useState('');
  const [assuntos, setAssuntos] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);

  const handleAddSubject = () => {
    if (assunto.trim()) {
      setAssuntos(prev => [...prev, assunto.trim()]);
      setAssunto('');
    }
  };

  const handleRemoveSubject = (index: number) => {
    setAssuntos(prev => prev.filter((_, i) => i !== index));
  };

  const handleUpdateSubject = (index: number, value: string) => {
    setAssuntos(prev => prev.map((subject, i) => i === index ? value : subject));
  };

  const handleAssuntoKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddSubject();
    }
  };

  const handleSubmit = async () => {
    if (!nomeDisciplina.trim()) return;
    
    setIsSubmitting(true);
    try {
      // Preparar dados para a API
      const disciplinaData: CreateDisciplinaRequest = {
        nome: nomeDisciplina.trim(),
        assuntos: assuntos.map(assunto => ({ nome: assunto.trim() }))
      };
      
      console.log('📝 Cadastrando disciplina:', disciplinaData);
      
      // Chamar API para cadastrar disciplina
      await adminDisciplinesService.createDiscipline(disciplinaData);
      
      console.log('✅ Disciplina cadastrada com sucesso!');
      
      // Mostrar notificação de sucesso
      setShowSuccessNotification(true);
      
      // Fechar modal após um delay
      setTimeout(() => {
        onSuccess?.();
        onClose();
        
        // Reset form
        setNomeDisciplina('');
        setAssunto('');
        setAssuntos([]);
        setShowSuccessNotification(false);
      }, 2000);
      
    } catch (error: any) {
      console.error('❌ Erro ao cadastrar disciplina:', error);
      // TODO: Mostrar notificação de erro para o usuário
      alert(`Erro ao cadastrar disciplina: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = nomeDisciplina.trim().length > 0;

  if (!isOpen) return null;

  return createPortal(
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        zIndex: 999999,
        padding: '40px 40px 40px 0'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          width: '617px',
          height: '944px',
          maxHeight: 'calc(100vh - 80px)',
          backgroundColor: '#202028',
          border: '1px solid #272737',
          borderRadius: '16px',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <DisciplineModalHeader onClose={onClose} />

        {/* Content */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          padding: '24px',
          flex: 1,
          minHeight: 0
        }}>
          {/* Form Fields */}
          <DisciplineForm
            nomeDisciplina={nomeDisciplina}
            assunto={assunto}
            onNomeChange={setNomeDisciplina}
            onAssuntoChange={setAssunto}
            onAddSubject={handleAddSubject}
            onAssuntoKeyDown={handleAssuntoKeyDown}
          />

          {/* Assuntos Adicionados */}
        <SubjectsList 
          subjects={assuntos}
          onRemoveSubject={handleRemoveSubject}
          onUpdateSubject={handleUpdateSubject}
        />
        </div>

        {/* Footer */}
        <DisciplineModalFooter
          onCancel={onClose}
          onSubmit={handleSubmit}
          isFormValid={isFormValid}
          isSubmitting={isSubmitting}
        />
      </div>

      {/* Notificação de Sucesso */}
      <SuccessNotification
        isOpen={showSuccessNotification}
        onClose={() => setShowSuccessNotification(false)}
        title="Disciplina cadastrada com sucesso!"
        message={`A disciplina "${nomeDisciplina}" já está disponível na lista de disciplinas cadastradas.`}
      />
    </div>,
    document.body
  );
};
