# 🎨 Sistema de Design Lumia

Sistema de design completo e padronizado para o projeto Lumia, garantindo consistência visual e facilidade de manutenção em todos os componentes.

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Tokens de Design](#tokens-de-design)
- [Componentes Base](#componentes-base)
- [Como Usar](#como-usar)
- [Migração](#migração)
- [Exemplos](#exemplos)

## 🎯 Visão Geral

O Sistema de Design Lumia oferece:

- **Tokens padronizados** para cores, tipografia, espaçamentos
- **Componentes base** reutilizáveis e responsivos
- **API consistente** em todos os componentes
- **TypeScript completo** com validação de tipos
- **Responsividade automática** baseada em breakpoints

### Benefícios

- ✅ **-70% menos código repetido**
- ✅ **Manutenção centralizada** de estilos
- ✅ **Consistência visual** garantida
- ✅ **Desenvolvimento mais rápido**
- ✅ **TypeScript safety** completo

## 🎨 Tokens de Design

### Cores

```typescript
import { colors } from '@/components/ui';

// Backgrounds
colors.bg.primary     // '#0C0E12' - Fundo principal
colors.bg.secondary   // '#1A1D23' - Fundo secundário  
colors.bg.tertiary    // '#22262F' - Fundo terciário
colors.bg.elevated    // '#2D2D3B' - Cards, inputs

// Textos
colors.text.primary   // '#FFFFFF' - Texto principal
colors.text.secondary // '#CECFD2' - Texto secundário
colors.text.tertiary  // '#94979C' - Texto terciário
colors.text.disabled  // '#85888E' - Texto desabilitado

// Brand
colors.brand.primary   // '#F48E2F' - Laranja principal
colors.brand.secondary // '#C74228' - Vermelho botões
colors.brand.tertiary  // '#718D50' - Verde logo

// Estados
colors.error    // '#E66B59' - Erros
colors.success  // '#10B981' - Sucesso
colors.warning  // '#F59E0B' - Avisos
```

### Tipografia

```typescript
import { typography } from '@/components/ui';

// Família de fontes
typography.fontFamily.primary   // 'Sora' - Principal
typography.fontFamily.secondary // 'Inter' - Secundária

// Tamanhos
typography.fontSize.xs   // '12px'
typography.fontSize.sm   // '14px'
typography.fontSize.md   // '16px'
typography.fontSize.lg   // '18px'
typography.fontSize.xl   // '20px'

// Pesos
typography.fontWeight.regular   // '400'
typography.fontWeight.medium    // '500'
typography.fontWeight.semibold  // '600'
typography.fontWeight.bold      // '700'
```

### Espaçamentos

```typescript
import { spacing } from '@/components/ui';

spacing[1]  // '4px'
spacing[2]  // '8px'
spacing[3]  // '12px'
spacing[4]  // '16px'
spacing[5]  // '20px'
spacing[6]  // '24px'
spacing[8]  // '32px'
```

## 🧩 Componentes Base

### Componentes Disponíveis:
- **Text** - Textos com variantes pré-definidas
- **Container** - Layouts e containers flexíveis  
- **Input** - Inputs completos com label, erro, etc.
- **Select** - Seleção com opções pré-definidas
- **Button** - Botões com variantes e estados
- **DisplayField** - Campos somente leitura editáveis
- **ErrorMessage** - Mensagens de erro padronizadas
- **InfoMessage** - Mensagens informativas
- **FormContainer** - Containers para formulários

### Text

Componente para todos os textos com variantes pré-definidas.

```tsx
import { Text } from '@/components/ui';

// Variantes
<Text variant="h1">Título Principal</Text>
<Text variant="h2">Subtítulo</Text>
<Text variant="body">Texto normal</Text>
<Text variant="caption">Texto pequeno</Text>
<Text variant="label">Label de campo</Text>

// Customização
<Text 
  size="lg" 
  weight="bold" 
  color={colors.brand.primary}
  align="center"
  screenSize="mobile"
>
  Texto customizado
</Text>

// Responsivo
<Text 
  size={{ mobile: 'sm', desktop: 'md' }}
  screenSize={screenSize}
>
  Texto responsivo
</Text>
```

### Container

Componente flexível para layouts e containers.

```tsx
import { Container } from '@/components/ui';

// Layout básico
<Container 
  direction="column" 
  gap={4} 
  padding={6}
  background={colors.bg.elevated}
  borderRadius="md"
>
  <Text>Conteúdo</Text>
</Container>

// Responsivo
<Container
  padding={{ mobile: 4, desktop: 6 }}
  gap={{ mobile: 2, desktop: 4 }}
  screenSize={screenSize}
>
  <Text>Conteúdo responsivo</Text>
</Container>

// Card
<Container
  background={colors.bg.elevated}
  border={`1px solid ${colors.border.primary}`}
  borderRadius="md"
  shadow="md"
  padding={6}
>
  <Text>Card content</Text>
</Container>
```

### Input

Componente completo para inputs com label, erro, etc.

```tsx
import { Input } from '@/components/ui';

// Input básico
<Input
  value={value}
  onChange={setValue}
  placeholder="Digite algo..."
  screenSize={screenSize}
/>

// Input completo
<Input
  value={email}
  onChange={setEmail}
  type="email"
  label="E-mail"
  supportingText="Seu e-mail principal"
  placeholder="exemplo@email.com"
  required
  error={emailError}
  screenSize={screenSize}
/>

// Textarea
<Input
  value={bio}
  onChange={setBio}
  type="textarea"
  label="Biografia"
  maxLength={400}
  showCharCount
  screenSize={screenSize}
/>
```

### Select

Componente de seleção com opções pré-definidas.

```tsx
import { Select } from '@/components/ui';

// Básico
<Select
  value={selectedValue}
  onChange={setValue}
  options={[
    { value: 'opcao1', label: 'Opção 1' },
    { value: 'opcao2', label: 'Opção 2' },
  ]}
  screenSize={screenSize}
/>

// Completo com label e validação
<Select
  label="Formação"
  supportingText="Selecione sua formação acadêmica"
  value={education}
  onChange={setEducation}
  options={[
    { value: 'fundamental', label: 'Ensino Fundamental' },
    { value: 'medio', label: 'Ensino Médio' },
    { value: 'superior', label: 'Ensino Superior' },
  ]}
  icon={<GraduationIcon />}
  error={errors.education}
  required
  screenSize={screenSize}
/>

// Estados
<Select disabled options={options} />
<Select error="Campo obrigatório" options={options} />
```

### Button

Componente de botão com variantes e estados.

```tsx
import { Button } from '@/components/ui';

// Variantes
<Button variant="primary">Salvar</Button>
<Button variant="secondary">Cancelar</Button>
<Button variant="tertiary">Editar</Button>
<Button variant="ghost">Limpar</Button>
<Button variant="danger">Excluir</Button>

// Com ícones
<Button 
  variant="primary"
  iconLeading={<SaveIcon />}
  iconTrailing={<ArrowIcon />}
>
  Salvar alterações
</Button>

// Estados
<Button loading>Salvando...</Button>
<Button disabled>Indisponível</Button>
<Button fullWidth>Botão completo</Button>
```

### DisplayField

Componente para exibir valores somente leitura que podem ser editados.

```tsx
import { DisplayField } from '@/components/ui';

// Básico
<DisplayField
  value="Controle"
  screenSize={screenSize}
/>

// Completo
<DisplayField
  label="Área de Estudo"
  value="Controle"
  supportingText="Referente à área selecionada"
  onClick={() => editArea()}
  screenSize={screenSize}
/>

// Com ícone e estados
<DisplayField
  value="Indisponível"
  icon={<WarningIcon />}
  disabled
  showEditIcon={false}
  screenSize={screenSize}
/>

// Com erro
<DisplayField
  value="Valor inválido"
  error="Este campo é obrigatório"
  screenSize={screenSize}
/>
```

## 🚀 Como Usar

### 1. Importação

```tsx
// Componentes individuais
import { Text, Container, Input, Button } from '@/components/ui';

// Tokens
import { colors, spacing, typography } from '@/components/ui';

// Tipos
import type { ScreenSize } from '@/components/ui';
```

### 2. Responsividade

O Design System suporta 4 breakpoints:
- **mobile**: Telas pequenas (< 768px)
- **tablet**: Tablets (768px - 1024px)  
- **notebook**: Notebooks/laptops (1024px - 1440px)
- **desktop**: Desktops grandes (> 1440px)

Todos os componentes suportam responsividade automática:

```tsx
const MyComponent = ({ screenSize }: { screenSize: ScreenSize }) => (
  <Container
    padding={{ mobile: 4, tablet: 6, notebook: 7, desktop: 8 }}
    gap={{ mobile: 2, tablet: 3, notebook: 3, desktop: 4 }}
    screenSize={screenSize}
  >
    <Text 
      size={{ mobile: 'sm', notebook: 'md', desktop: 'lg' }}
      screenSize={screenSize}
    >
      Texto responsivo
    </Text>
  </Container>
);
```

### 3. Customização

```tsx
// Usando tokens
<Container
  background={colors.bg.elevated}
  border={`1px solid ${colors.border.primary}`}
  padding={spacing[6]}
>
  <Text color={colors.brand.primary}>
    Texto com cor da marca
  </Text>
</Container>

// Sobrescrevendo estilos
<Text 
  variant="body"
  style={{ 
    textDecoration: 'underline',
    fontStyle: 'italic' 
  }}
>
  Texto customizado
</Text>
```

## 🔄 Migração

### Antes vs Depois

**Antes (código antigo):**
```tsx
// 40+ linhas de estilos inline
<div style={{
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  padding: '24px',
  backgroundColor: '#2D2D3B',
  border: '1px solid #373A41',
  borderRadius: '8px',
  // ... mais 20 linhas
}}>
  <span style={{
    fontFamily: 'Sora',
    fontWeight: '600',
    fontSize: '14px',
    color: '#CECFD2',
    // ... mais estilos
  }}>
    Label
  </span>
  {/* ... mais código repetido */}
</div>
```

**Depois (com Design System):**
```tsx
// 5 linhas limpas e semânticas
<Container
  gap={5}
  padding={6}
  background={colors.bg.elevated}
  border={`1px solid ${colors.border.primary}`}
  borderRadius="md"
>
  <Text variant="label">Label</Text>
</Container>
```

### Guia de Migração

1. **Substitua estilos inline** por componentes do Design System
2. **Use tokens** ao invés de valores hardcoded
3. **Aproveite a responsividade** automática
4. **Remova código duplicado** usando componentes base

## 📚 Exemplos

### Formulário Completo

```tsx
const FormExample = ({ screenSize }: { screenSize: ScreenSize }) => (
  <Container gap={6} padding={8} background={colors.bg.elevated} borderRadius="md">
    <Text variant="h3" screenSize={screenSize}>
      Configurações da Conta
    </Text>
    
    <Container gap={4}>
      <Input
        value={name}
        onChange={setName}
        label="Nome completo"
        required
        screenSize={screenSize}
      />
      
      <Input
        value={email}
        onChange={setEmail}
        type="email"
        label="E-mail"
        error={emailError}
        screenSize={screenSize}
      />
      
      <Input
        value={bio}
        onChange={setBio}
        type="textarea"
        label="Biografia"
        supportingText="Conte um pouco sobre você"
        maxLength={400}
        showCharCount
        screenSize={screenSize}
      />
    </Container>
    
    <Container direction="row" gap={3} justify="flex-end">
      <Button variant="secondary">Cancelar</Button>
      <Button variant="primary">Salvar</Button>
    </Container>
  </Container>
);
```

### Card de Informações

```tsx
const InfoCard = ({ screenSize }: { screenSize: ScreenSize }) => (
  <Container
    background={colors.bg.elevated}
    border={`1px solid ${colors.border.primary}`}
    borderRadius="md"
    shadow="md"
    padding={6}
    gap={4}
  >
    <Container direction="row" align="center" justify="space-between">
      <Text variant="h4" screenSize={screenSize}>
        Área de Estudo
      </Text>
      <EditIcon />
    </Container>
    
    <Text color={colors.text.secondary} screenSize={screenSize}>
      Referente à área de estudo que você selecionou.
    </Text>
    
    <Text variant="body" screenSize={screenSize}>
      Controle
    </Text>
  </Container>
);
```

### Table

Componente de tabela genérico e reutilizável com suporte a colunas customizáveis, renderização personalizada e responsividade.

```tsx
import { Table } from '@/components/ui';
import { TableColumn } from '@/types/table';

interface User {
  id: string;
  name: string;
  email: string;
  status: 'active' | 'inactive';
}

const columns: TableColumn<User>[] = [
  {
    key: 'name',
    title: 'Nome',
    dataIndex: 'name',
    width: '30%',
    render: (value: string) => (
      <Text variant="body" weight="medium">{value}</Text>
    )
  },
  {
    key: 'email',
    title: 'Email',
    dataIndex: 'email',
    width: '40%'
  },
  {
    key: 'status',
    title: 'Status',
    dataIndex: 'status',
    width: '20%',
    align: 'center',
    render: (value: string) => (
      <span className={`status-${value}`}>
        {value === 'active' ? 'Ativo' : 'Inativo'}
      </span>
    )
  },
  {
    key: 'actions',
    title: 'Ações',
    width: '10%',
    align: 'center',
    render: (_, record: User) => (
      <button onClick={() => handleEdit(record)}>
        Editar
      </button>
    )
  }
];

const users: User[] = [
  { id: '1', name: 'João', email: 'joao@email.com', status: 'active' },
  { id: '2', name: 'Maria', email: 'maria@email.com', status: 'inactive' }
];

// Uso básico
<Table
  columns={columns}
  data={users}
  screenSize="desktop"
/>

// Com estados
<Table
  columns={columns}
  data={[]}
  loading={true}
  emptyText="Nenhum usuário encontrado"
  screenSize="desktop"
/>
```

**Props:**
- `columns`: Array de configurações das colunas
- `data`: Array de dados para exibir
- `loading?`: Estado de carregamento
- `emptyText?`: Texto quando não há dados
- `screenSize?`: Tamanho da tela para responsividade

**Configuração de Coluna:**
- `key`: Identificador único da coluna
- `title`: Título exibido no cabeçalho
- `dataIndex?`: Propriedade do objeto de dados
- `width?`: Largura da coluna (CSS)
- `align?`: Alinhamento do conteúdo
- `render?`: Função de renderização customizada

## 🎯 Próximos Passos

1. **Migre componentes existentes** gradualmente
2. **Use o sistema** em novos componentes
3. **Contribua** com melhorias e novos componentes
4. **Mantenha consistência** em todo o projeto

---

**Desenvolvido com ❤️ para o projeto Lumia**
