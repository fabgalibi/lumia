// Student Registration Modal Components
export { ModalHeader } from './modal-header';
export { Step1StudentForm } from './step1-student-form';
export { Step2PlanSelection } from './step2-plan-selection';
export { Step3PasswordSetup } from './step3-password-setup';
export { ModalFooter } from './modal-footer';

// Types
export interface StudentData {
  nome: string;
  email: string;
  cpf: string;
  dataNascimento: string;
  observacoes: string;
  senha?: string;
  confirmarSenha?: string;
  plano?: string;
}

export interface Plan {
  id: string;
  name: string;
  code: string;
}
