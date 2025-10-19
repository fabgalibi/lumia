import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  ModalHeader,
  Step1StudentForm,
  Step2PlanSelection,
  Step3PasswordSetup,
  ModalFooter,
  StudentData
} from './student-registration';
import { ErrorNotification } from '../ui';

interface StudentRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (studentData: StudentData) => void;
}

export const StudentRegistrationModal: React.FC<StudentRegistrationModalProps> = ({
  isOpen,
  onClose,
  onConfirm
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState<StudentData>({
    nome: '',
    email: '',
    cpf: '',
    dataNascimento: '',
    observacoes: ''
  });
  const [errors, setErrors] = useState<Partial<StudentData & { plano?: string }>>({});
  const [currentStep, setCurrentStep] = useState(1);

  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  // Estado para notificação de erro
  const [showErrorNotification, setShowErrorNotification] = useState(false);
  const [errorTitle, setErrorTitle] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [errorTimeout, setErrorTimeout] = useState<NodeJS.Timeout | null>(null);

  // Detectar se é mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData({
        nome: '',
        email: '',
        cpf: '',
        dataNascimento: '',
        observacoes: ''
      });
      setErrors({});
      setCurrentStep(1);
      setSelectedPlan('');
      setSenha('');
      setConfirmarSenha('');
    }
  }, [isOpen]);

  // Cleanup timeout when component unmounts
  useEffect(() => {
    return () => {
      if (errorTimeout) {
        clearTimeout(errorTimeout);
      }
    };
  }, [errorTimeout]);

  // Forçar revalidação quando senhas mudarem
  useEffect(() => {
    // Este useEffect força a revalidação do isFormValid
  }, [senha, confirmarSenha, currentStep]);

  // Função para mostrar notificação de erro
  const showError = (title: string, message: string) => {
    // Cancelar timeout anterior se existir
    if (errorTimeout) {
      clearTimeout(errorTimeout);
    }
    
    setErrorTitle(title);
    setErrorMessage(message);
    setShowErrorNotification(true);
    
    // Fechar notificação após 5 segundos
    const timeout = setTimeout(() => {
      setShowErrorNotification(false);
      setErrorTimeout(null);
    }, 5000);
    
    setErrorTimeout(timeout);
  };

  // Função para fechar notificação de erro
  const closeErrorNotification = () => {
    // Cancelar timeout se existir
    if (errorTimeout) {
      clearTimeout(errorTimeout);
      setErrorTimeout(null);
    }
    setShowErrorNotification(false);
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<StudentData & { plano?: string }> = {};

    // Validação da etapa 1 (dados básicos)
    if (currentStep >= 1) {
      if (!formData.nome.trim()) {
        newErrors.nome = 'Nome é obrigatório';
      }

      if (!formData.email.trim()) {
        newErrors.email = 'E-mail é obrigatório';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'E-mail inválido';
      }

      if (!formData.cpf.trim()) {
        newErrors.cpf = 'CPF é obrigatório';
      } else if (formData.cpf.replace(/\D/g, '').length !== 11) {
        newErrors.cpf = 'CPF deve ter 11 dígitos';
      }
    }

    // Validação da etapa 2 (plano)
    if (currentStep >= 2 && !selectedPlan) {
      newErrors.plano = 'Seleção de plano é obrigatória';
    }

    // Validação da etapa 3 (senhas)
    if (currentStep >= 3) {
      if (!senha.trim()) {
        newErrors.senha = 'Senha é obrigatória';
      } else if (senha.length < 6) {
        newErrors.senha = 'A senha deve ter ao menos 6 caracteres';
      }

      if (!confirmarSenha.trim()) {
        newErrors.confirmarSenha = 'Confirmação de senha é obrigatória';
      } else if (senha !== confirmarSenha) {
        newErrors.confirmarSenha = 'As senhas não coincidem';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Validação específica para cada etapa
  const validateCurrentStep = (): boolean => {
    const newErrors: Partial<StudentData & { plano?: string }> = {};

    if (currentStep === 1) {
      // Validar apenas campos da etapa 1
      if (!formData.nome.trim()) {
        newErrors.nome = 'Nome é obrigatório';
      }
      if (!formData.email.trim()) {
        newErrors.email = 'E-mail é obrigatório';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'E-mail inválido';
      }
      if (!formData.cpf.trim()) {
        newErrors.cpf = 'CPF é obrigatório';
      } else if (formData.cpf.replace(/\D/g, '').length !== 11) {
        newErrors.cpf = 'CPF deve ter 11 dígitos';
      }
    } else if (currentStep === 2) {
      // Validar apenas seleção de plano
      if (!selectedPlan) {
        newErrors.plano = 'Seleção de plano é obrigatória';
      }
    } else if (currentStep === 3) {
      // Validar apenas senhas
      if (!senha.trim()) {
        newErrors.senha = 'Senha é obrigatória';
      } else if (senha.length < 6) {
        newErrors.senha = 'A senha deve ter ao menos 6 caracteres';
      }
      if (!confirmarSenha.trim()) {
        newErrors.confirmarSenha = 'Confirmação de senha é obrigatória';
      } else if (senha !== confirmarSenha) {
        newErrors.confirmarSenha = 'As senhas não coincidem';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof StudentData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    
    // Validação em tempo real para campos específicos
    const newErrors = { ...errors };
    
    if (field === 'email') {
      if (!value.trim()) {
        newErrors.email = 'E-mail é obrigatório';
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        newErrors.email = 'E-mail inválido';
      } else {
        delete newErrors.email;
      }
    } else if (field === 'cpf') {
      if (!value.trim()) {
        newErrors.cpf = 'CPF é obrigatório';
      } else if (value.replace(/\D/g, '').length !== 11) {
        newErrors.cpf = 'CPF deve ter 11 dígitos';
      } else {
        delete newErrors.cpf;
      }
    } else if (field === 'nome') {
      if (!value.trim()) {
        newErrors.nome = 'Nome é obrigatório';
      } else {
        delete newErrors.nome;
      }
    }
    
    setErrors(newErrors);
  };

  const handleSubmit = (e: React.FormEvent) => {
    console.log('🚨 handleSubmit chamado!', e.type, e.target);
    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  const handleNext = () => {
    if (currentStep < 3) {
      // Validar apenas campos da etapa atual antes de avançar
      const isValid = validateCurrentStep();
      
      if (isValid) {
        setCurrentStep(currentStep + 1);
      } else {
        // Mostrar notificação de erro específica para a etapa atual
        let errorMessage = '';
        if (currentStep === 1) {
          errorMessage = 'Por favor, preencha corretamente todos os campos obrigatórios (Nome, E-mail e CPF).';
        } else if (currentStep === 2) {
          errorMessage = 'Por favor, selecione um plano antes de continuar.';
        }
        
        showError(
          'Campos inválidos',
          errorMessage
        );
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId);
  };


  const handlePasswordChange = (field: 'senha' | 'confirmarSenha', value: string) => {
    // Atualizar estado primeiro
    if (field === 'senha') {
      setSenha(value);
    } else {
      setConfirmarSenha(value);
    }

    // Validação em tempo real com valores atualizados
    const newErrors: Partial<StudentData & { plano?: string }> = { ...errors };
    const currentSenha = field === 'senha' ? value : senha;
    const currentConfirmarSenha = field === 'confirmarSenha' ? value : confirmarSenha;

    if (field === 'senha') {
      if (!value.trim()) {
        newErrors.senha = 'Senha é obrigatória';
      } else if (value.length < 6) {
        newErrors.senha = 'A senha deve ter ao menos 6 caracteres';
      } else {
        delete newErrors.senha;
      }

      // Revalidar confirmação se já foi preenchida
      if (currentConfirmarSenha && value !== currentConfirmarSenha) {
        newErrors.confirmarSenha = 'As senhas não coincidem';
      } else if (currentConfirmarSenha && value === currentConfirmarSenha) {
        delete newErrors.confirmarSenha;
      }
    } else if (field === 'confirmarSenha') {
      if (!value.trim()) {
        newErrors.confirmarSenha = 'Confirmação de senha é obrigatória';
      } else if (currentSenha && value !== currentSenha) {
        newErrors.confirmarSenha = 'As senhas não coincidem';
      } else if (currentSenha && value === currentSenha) {
        delete newErrors.confirmarSenha;
      }
    }

    setErrors(newErrors);
  };

  const handleGeneratePassword = () => {
    const generatedPassword = Math.random().toString(36).slice(-8);
    setSenha(generatedPassword);
    setConfirmarSenha(generatedPassword);
    
    // Limpar erros de senha quando gerar
    setErrors(prev => ({
      ...prev,
      senha: undefined,
      confirmarSenha: undefined
    }));
  };

  const handleFormSubmit = () => {
    console.log('🚨 handleFormSubmit chamado!');
    
    // Validar todos os campos antes de submeter
    const isValid = validateForm();
    
    if (isValid) {
      const finalData = {
        ...formData,
        senha,
        confirmarSenha,
        selectedPlan
      };
      
      // Fechar modal e mostrar notificação
      onConfirm(finalData);
    } else {
      // Encontrar a primeira etapa com erro e navegar para ela
      let stepWithError = 1;
      
      // Verificar erros da etapa 1
      if (errors.nome || errors.email || errors.cpf) {
        stepWithError = 1;
      } else if (errors.plano) {
        stepWithError = 2;
      } else if (errors.senha || errors.confirmarSenha) {
        stepWithError = 3;
      }
      
      // Navegar para a etapa com erro
      if (stepWithError !== currentStep) {
        setCurrentStep(stepWithError);
      }
      
      // Mostrar notificação de erro
      showError(
        'Formulário incompleto',
        'Por favor, corrija todos os campos destacados antes de finalizar o cadastro.'
      );
    }
  };

  // Validação básica (sempre necessária)
  const basicValidation = Boolean(
    formData.nome.trim() && 
    formData.email.trim() && 
    formData.cpf.trim() && formData.cpf.replace(/\D/g, '').length === 11 &&
    // Verificar se não há erros nos campos básicos
    !errors.nome && !errors.email && !errors.cpf
  );

  // Validação do plano (etapa 2)
  const planValidation = currentStep < 2 || (Boolean(selectedPlan) && !errors.plano);

  // Validação da senha (etapa 3)
  const passwordValidation = currentStep < 3 || Boolean(
    senha.trim() && 
    confirmarSenha.trim() && 
    senha === confirmarSenha && 
    senha.length >= 6 &&
    !errors.senha && !errors.confirmarSenha
  );

  const isFormValid = basicValidation && planValidation && passwordValidation;


  if (!isOpen) return null;

  const modalContent = (
    <div 
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        zIndex: 999999,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        pointerEvents: 'auto',
        padding: '40px 0 0 0'
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: isMobile ? '343px' : '617px',
          height: isMobile ? 'auto' : '944px',
          maxWidth: '90vw',
          maxHeight: '90vh',
          background: '#202028',
          borderRadius: '16px',
          border: '1px solid #272737',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          margin: isMobile ? '20px' : '40px 40px 40px 0',
          overflow: 'hidden',
          boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.3)'
        }}
      >
        {/* Header */}
        <ModalHeader 
          currentStep={currentStep} 
          onClose={onClose} 
        />

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>
          <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px', flex: 1, overflow: 'auto' }}>
            {currentStep === 1 && (
                     <Step1StudentForm
                       formData={formData}
                       errors={errors}
                       onInputChange={handleInputChange}
                     />
            )}

            {currentStep === 2 && (
              <Step2PlanSelection
                selectedPlan={selectedPlan}
                onPlanSelect={handlePlanSelect}
                error={errors.plano}
              />
            )}

            {currentStep === 3 && (
              <Step3PasswordSetup
                formData={formData}
                errors={errors}
                senha={senha}
                confirmarSenha={confirmarSenha}
                onPasswordChange={handlePasswordChange}
                onGeneratePassword={handleGeneratePassword}
                onError={showError}
              />
            )}
          </div>

          {/* Footer */}
          <ModalFooter
            currentStep={currentStep}
            onClose={onClose}
            onPrevious={handlePrevious}
            onNext={handleNext}
            onSubmit={handleFormSubmit}
            isFormValid={isFormValid}
          />
        </form>
      </div>
      
      {/* Notificação de erro */}
      <ErrorNotification
        isOpen={showErrorNotification}
        onClose={closeErrorNotification}
        title={errorTitle}
        message={errorMessage}
        autoCloseDelay={5000}
      />
    </div>
  );

  return createPortal(modalContent, document.body);
};