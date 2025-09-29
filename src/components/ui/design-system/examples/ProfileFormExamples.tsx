import React, { useState } from 'react';
import { GraduationHat01, Mail01, Phone } from '@untitledui/icons';
import { Input, Select, Container, Text } from '@/components/ui/design-system';
import { colors, type ScreenSize } from '@/components/ui';

/**
 * Exemplos Práticos - Campos de Perfil Migrados
 * 
 * Este arquivo demonstra como usar os componentes do Design System
 * para criar formulários completos e consistentes.
 */

interface ProfileFormExamplesProps {
  screenSize?: ScreenSize;
}

export const ProfileFormExamples: React.FC<ProfileFormExamplesProps> = ({
  screenSize = 'desktop'
}) => {
  const [formData, setFormData] = useState({
    username: 'Max William',
    bio: 'Profissional apaixonado por tecnologia e design...',
    education: 'superior-completo',
    email: 'max@exemplo.com',
    phone: '(11) 99999-9999',
    isWorking: 'sim'
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Limpar erro quando usuário digita
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <Container direction="column" gap={6} padding={6} screenSize={screenSize}>
      <Text variant="h2" color={colors.text.primary}>
        🎨 Exemplos - Campos de Perfil
      </Text>
      
      <Text color={colors.text.secondary}>
        Demonstração dos componentes do Design System em uso real.
      </Text>

      {/* Seção 1: Inputs Básicos */}
      <Container direction="column" gap={4} screenSize={screenSize}>
        <Text variant="h3" color={colors.text.primary}>
          📝 Inputs Básicos
        </Text>

        {/* Username - Input simples */}
        <Input
          label="Nome de usuário"
          value={formData.username}
          onChange={(value) => handleChange('username', value)}
          placeholder="Digite seu nome de usuário"
          screenSize={screenSize}
        />

        {/* Bio - Textarea com contador */}
        <Input
          label="Biografia"
          supportingText="Conte um pouco sobre você"
          value={formData.bio}
          onChange={(value) => handleChange('bio', value)}
          type="textarea"
          placeholder="Descreva sua experiência profissional..."
          maxLength={400}
          showCharCount
          rows={4}
          screenSize={screenSize}
        />
      </Container>

      {/* Seção 2: Inputs com Ícones */}
      <Container direction="column" gap={4} screenSize={screenSize}>
        <Text variant="h3" color={colors.text.primary}>
          🎯 Inputs com Ícones
        </Text>

        {/* Email - Desabilitado com ícone */}
        <Input
          label="E-mail"
          value={formData.email}
          onChange={(value) => handleChange('email', value)}
          type="email"
          disabled
          icon={<Mail01 width="20" height="20" stroke={colors.text.disabled} strokeWidth="1.67" />}
          screenSize={screenSize}
        />

        {/* Telefone - Desabilitado com ícone */}
        <Input
          label="Telefone"
          value={formData.phone}
          onChange={(value) => handleChange('phone', value)}
          type="tel"
          disabled
          icon={<Phone width="20" height="20" stroke={colors.text.disabled} strokeWidth="1.67" />}
          screenSize={screenSize}
        />
      </Container>

      {/* Seção 3: Select */}
      <Container direction="column" gap={4} screenSize={screenSize}>
        <Text variant="h3" color={colors.text.primary}>
          📋 Seleção (Select)
        </Text>

        {/* Formação - Select com ícone */}
        <Select
          label="Formação Acadêmica"
          supportingText="Selecione sua formação mais alta"
          value={formData.education}
          onChange={(value) => handleChange('education', value)}
          options={[
            { value: 'fundamental', label: 'Ensino Fundamental' },
            { value: 'medio', label: 'Ensino Médio' },
            { value: 'superior-incompleto', label: 'Ensino Superior (Incompleto)' },
            { value: 'superior-completo', label: 'Ensino Superior (Completo)' },
            { value: 'pos-graduacao', label: 'Pós-graduação' },
            { value: 'mestrado', label: 'Mestrado' },
            { value: 'doutorado', label: 'Doutorado' }
          ]}
          icon={<GraduationHat01 width="20" height="20" stroke={colors.text.secondary} strokeWidth="1.67" />}
          screenSize={screenSize}
        />
      </Container>

      {/* Seção 4: Estados de Validação */}
      <Container direction="column" gap={4} screenSize={screenSize}>
        <Text variant="h3" color={colors.text.primary}>
          ⚠️ Estados de Validação
        </Text>

        {/* Input com erro */}
        <Input
          label="Campo Obrigatório"
          value=""
          onChange={(value) => handleChange('required', value)}
          placeholder="Este campo é obrigatório"
          error="Este campo não pode ficar vazio"
          required
          screenSize={screenSize}
        />

        {/* Select com erro */}
        <Select
          label="Seleção Obrigatória"
          value=""
          onChange={(value) => handleChange('requiredSelect', value)}
          options={[
            { value: 'opcao1', label: 'Opção 1' },
            { value: 'opcao2', label: 'Opção 2' }
          ]}
          error="Selecione uma opção"
          required
          screenSize={screenSize}
        />
      </Container>

      {/* Seção 5: Responsividade */}
      <Container direction="column" gap={4} screenSize={screenSize}>
        <Text variant="h3" color={colors.text.primary}>
          📱 Responsividade
        </Text>

        <Text color={colors.text.secondary}>
          Todos os componentes se adaptam automaticamente ao tamanho da tela:
        </Text>

        <Container direction="column" gap={2} screenSize={screenSize}>
          <Text variant="caption" color={colors.text.tertiary}>
            • <strong>Mobile</strong>: Padding reduzido, fonte menor
          </Text>
          <Text variant="caption" color={colors.text.tertiary}>
            • <strong>Tablet</strong>: Tamanhos intermediários
          </Text>
          <Text variant="caption" color={colors.text.tertiary}>
            • <strong>Notebook</strong>: Otimizado para laptops
          </Text>
          <Text variant="caption" color={colors.text.tertiary}>
            • <strong>Desktop</strong>: Espaçamentos completos
          </Text>
        </Container>

        {/* Exemplo responsivo */}
        <Input
          label="Input Responsivo"
          supportingText="Este input se adapta ao screenSize atual"
          value="Teste de responsividade"
          onChange={() => {}}
          screenSize={screenSize}
        />
      </Container>

      {/* Código de Exemplo */}
      <Container direction="column" gap={4} screenSize={screenSize}>
        <Text variant="h3" color={colors.text.primary}>
          💻 Como Usar
        </Text>

        <Container 
          padding={4} 
          background={colors.bg.secondary} 
          borderRadius="md"
          screenSize={screenSize}
        >
          <Text variant="caption" color={colors.text.secondary} as="pre">
{`// Import dos componentes
import { Input, Select } from '@/components/ui';

// Uso básico
<Input
  label="Nome"
  value={name}
  onChange={setName}
  screenSize={screenSize}
/>

<Select
  label="Opção"
  value={option}
  onChange={setOption}
  options={[
    { value: 'a', label: 'Opção A' },
    { value: 'b', label: 'Opção B' }
  ]}
  screenSize={screenSize}
/>`}
          </Text>
        </Container>
      </Container>
    </Container>
  );
};
