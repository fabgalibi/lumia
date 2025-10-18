import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  ModalHeader,
  Step1StudentForm,
  Step2PlanSelection,
  Step3PasswordSetup,
  ModalFooter,
  StudentData,
  Plan
} from './student-registration';

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
    dataInicio: '',
    observacoes: ''
  });
  const [errors, setErrors] = useState<Partial<StudentData>>({});
  const [currentStep, setCurrentStep] = useState(1);

  const [selectedPlan, setSelectedPlan] = useState<string>('');
  const [searchPlan, setSearchPlan] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  // Dados dos planos
  const plans: Plan[] = [
    { id: 'PLPF874231', name: 'Plano Polícia Federal', code: 'PLPF874231' },
    { id: 'PLPRF692580', name: 'Plano Polícia Rodoviária Federal (PRF)', code: 'PLPRF692580' },
    { id: 'PLINSS308416', name: 'Plano INSS', code: 'PLINSS308416' },
    { id: 'PLBB762934', name: 'Plano Banco do Brasil', code: 'PLBB762934' },
    { id: 'PLCOR558127', name: 'Plano Correios', code: 'PLCOR558127' },
    { id: 'PLRF912673', name: 'Plano Receita Federal', code: 'PLRF912673' },
    { id: 'PLTJ385249', name: 'Plano Tribunal de Justiça (TJ)', code: 'PLTJ385249' },
    { id: 'PLMP671092', name: 'Plano Ministério Público (MP)', code: 'PLMP671092' }
  ];

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
        dataInicio: '',
        observacoes: ''
      });
      setErrors({});
      setCurrentStep(1);
      setSelectedPlan('');
      setSearchPlan('');
      setSenha('');
      setConfirmarSenha('');
    }
  }, [isOpen]);

  const validateForm = (): boolean => {
    const newErrors: Partial<StudentData> = {};

    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }

    // Validação das senhas (apenas na etapa 3)
    if (currentStep === 3) {
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
    
    // Limpar erro do campo quando o usuário começar a digitar
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onConfirm(formData);
    }
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
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

  const handleSearchChange = (search: string) => {
    setSearchPlan(search);
  };

  const handlePasswordChange = (field: 'senha' | 'confirmarSenha', value: string) => {
    if (field === 'senha') {
      setSenha(value);
    } else {
      setConfirmarSenha(value);
    }

    // Validação em tempo real
    const newErrors: Partial<StudentData> = { ...errors };

    if (field === 'senha') {
      if (!value.trim()) {
        newErrors.senha = 'Senha é obrigatória';
      } else if (value.length < 6) {
        newErrors.senha = 'A senha deve ter ao menos 6 caracteres';
      } else {
        delete newErrors.senha;
      }

      // Revalidar confirmação se já foi preenchida
      if (confirmarSenha && value !== confirmarSenha) {
        newErrors.confirmarSenha = 'As senhas não coincidem';
      } else if (confirmarSenha && value === confirmarSenha) {
        delete newErrors.confirmarSenha;
      }
    } else if (field === 'confirmarSenha') {
      if (!value.trim()) {
        newErrors.confirmarSenha = 'Confirmação de senha é obrigatória';
      } else if (senha && value !== senha) {
        newErrors.confirmarSenha = 'As senhas não coincidem';
      } else if (senha && value === senha) {
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
    if (validateForm()) {
      const finalData = {
        ...formData,
        senha,
        confirmarSenha
      };
      
      // Fechar modal e mostrar notificação
      onConfirm(finalData);
    }
  };

  const isFormValid = Boolean(
    formData.nome.trim() && 
    formData.email.trim() && 
    (currentStep < 3 || (senha.trim() && confirmarSenha.trim() && senha === confirmarSenha && senha.length >= 6))
  );

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
                isMobile={isMobile}
              />
            )}

            {currentStep === 2 && (
              <Step2PlanSelection
                plans={plans}
                selectedPlan={selectedPlan}
                searchPlan={searchPlan}
                onPlanSelect={handlePlanSelect}
                onSearchChange={handleSearchChange}
              />
            )}

            {currentStep === 3 && (
              <Step3PasswordSetup
                formData={formData}
                errors={errors}
                onPasswordChange={handlePasswordChange}
                onGeneratePassword={handleGeneratePassword}
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
    </div>
  );

  return createPortal(modalContent, document.body);
};