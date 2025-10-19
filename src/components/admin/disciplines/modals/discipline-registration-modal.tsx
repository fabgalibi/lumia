import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { DisciplineModalHeader, DisciplineForm, SubjectsList, DisciplineModalFooter } from '../forms';
import { adminDisciplinesService, CreateDisciplinaRequest, UpdateDisciplinaRequest, AssuntoEdicao } from '../../../../services/api/admin-disciplines.service';
import { SuccessNotification } from '../../../ui/success-notification';

interface DisciplineRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
  // Props para modo de edição
  isEditMode?: boolean;
  disciplineId?: number;
  initialData?: {
    nome: string;
    assuntos: { id: number; nome: string; codigo: string }[];
  };
}

export const DisciplineRegistrationModal: React.FC<DisciplineRegistrationModalProps> = ({
  isOpen,
  onClose,
  onSuccess,
  isEditMode = false,
  disciplineId,
  initialData
}) => {
  const [nomeDisciplina, setNomeDisciplina] = useState('');
  const [assunto, setAssunto] = useState('');
  const [assuntos, setAssuntos] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);
  const [disciplineDetails, setDisciplineDetails] = useState<{
    codigo: string;
    assuntos: { id: number; nome: string; codigo: string }[]
  } | null>(null);

  // Carregar dados iniciais quando estiver em modo de edição
  useEffect(() => {
    if (isEditMode && disciplineId) {
      const fetchDisciplineDetails = async () => {
        try {
          const details = await adminDisciplinesService.getDisciplineDetails(disciplineId);
        setDisciplineDetails({
          codigo: details.codigo,
          assuntos: details.assuntos.map(a => ({ id: a.id, nome: a.nome, codigo: a.codigo }))
        });
          setNomeDisciplina(details.nome);
          setAssuntos(details.assuntos.map(a => a.nome));
        } catch (error) {
          console.error('Erro ao carregar detalhes da disciplina:', error);
        }
      };
      fetchDisciplineDetails();
    } else if (isEditMode && initialData) {
      // Usar dados iniciais se fornecidos
      setNomeDisciplina(initialData.nome);
      setAssuntos(initialData.assuntos.map(a => a.nome));
      setDisciplineDetails({
        codigo: '', // Será preenchido quando carregar da API
        assuntos: initialData.assuntos.map(a => ({ id: a.id, nome: a.nome, codigo: a.codigo }))
      });
    } else if (!isEditMode) {
      // Resetar dados quando não estiver em modo de edição
      setNomeDisciplina('');
      setAssunto('');
      setAssuntos([]);
      setDisciplineDetails(null);
    }
  }, [isEditMode, disciplineId, initialData]);

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

  // Função para processar assuntos na edição
  const processAssuntosForEdit = (): AssuntoEdicao[] => {
    if (!disciplineDetails) return assuntos.map(assunto => ({ nome: assunto.trim() }));
    
    const assuntosEditados: AssuntoEdicao[] = [];
    
    // Assuntos originais que foram removidos (marcar para exclusão)
    disciplineDetails.assuntos.forEach(assuntoOriginal => {
      const aindaExiste = assuntos.some(assuntoAtual => 
        assuntoAtual === assuntoOriginal.nome
      );
      
      if (!aindaExiste) {
        assuntosEditados.push({
          id: assuntoOriginal.id,
          excluir: true
        });
      }
    });
    
    // Assuntos atuais (novos ou atualizados)
    assuntos.forEach(assuntoAtual => {
      const assuntoOriginal = disciplineDetails.assuntos.find(a => a.nome === assuntoAtual);
      
      if (assuntoOriginal) {
        // Assunto existente - atualizar se nome mudou
        if (assuntoOriginal.nome !== assuntoAtual.trim()) {
          assuntosEditados.push({
            id: assuntoOriginal.id,
            nome: assuntoAtual.trim()
          });
        }
      } else {
        // Novo assunto
        assuntosEditados.push({
          nome: assuntoAtual.trim()
        });
      }
    });
    
    return assuntosEditados;
  };

  const handleSubmit = async () => {
    if (!nomeDisciplina.trim()) return;
    
    setIsSubmitting(true);
    try {
      if (isEditMode && disciplineId) {
        const disciplinaData: UpdateDisciplinaRequest = {
          nome: nomeDisciplina.trim(),
          assuntos: processAssuntosForEdit()
        };
        
        console.log('📝 Atualizando disciplina:', disciplinaData);
        await adminDisciplinesService.updateDiscipline(disciplineId, disciplinaData);
        console.log('✅ Disciplina atualizada com sucesso!');
      } else {
        const disciplinaData: CreateDisciplinaRequest = {
          nome: nomeDisciplina.trim(),
          assuntos: assuntos.map(assunto => ({ nome: assunto.trim() }))
        };
        
        console.log('📝 Cadastrando disciplina:', disciplinaData);
        await adminDisciplinesService.createDiscipline(disciplinaData);
        console.log('✅ Disciplina cadastrada com sucesso!');
      }
      
      // Mostrar notificação de sucesso
      setShowSuccessNotification(true);
      
      // Fechar modal após um delay
      setTimeout(() => {
        onSuccess?.();
        onClose();
        
        // Reset form apenas se não estiver em modo de edição
        if (!isEditMode) {
          setNomeDisciplina('');
          setAssunto('');
          setAssuntos([]);
        }
        setShowSuccessNotification(false);
      }, 2000);
      
    } catch (error: any) {
      console.error(`❌ Erro ao ${isEditMode ? 'atualizar' : 'cadastrar'} disciplina:`, error);
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
        <DisciplineModalHeader 
          onClose={onClose} 
          title={isEditMode ? "Editar dados" : "Cadastrar nova disciplina"} 
        />

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
            isEditMode={isEditMode}
            codigoDisciplina={disciplineDetails?.codigo}
          />

          {/* Assuntos Adicionados */}
          <SubjectsList 
            subjects={assuntos}
            onRemoveSubject={handleRemoveSubject}
            onUpdateSubject={handleUpdateSubject}
            isEditMode={isEditMode}
            subjectsWithCodes={disciplineDetails?.assuntos || []}
          />
        </div>

        {/* Footer */}
        <DisciplineModalFooter
          onCancel={onClose}
          onSubmit={handleSubmit}
          isFormValid={isFormValid}
          isSubmitting={isSubmitting}
          submitButtonText={isEditMode ? "Salvar alterações" : "Cadastrar disciplina"}
        />
      </div>

      {/* Notificação de Sucesso */}
      <SuccessNotification
        isOpen={showSuccessNotification}
        onClose={() => setShowSuccessNotification(false)}
        title={isEditMode ? "Disciplina atualizada com sucesso!" : "Disciplina cadastrada com sucesso!"}
        message={isEditMode 
          ? `A disciplina "${nomeDisciplina}" foi atualizada com sucesso.` 
          : `A disciplina "${nomeDisciplina}" já está disponível na lista de disciplinas cadastradas.`
        }
      />
    </div>,
    document.body
  );
};
