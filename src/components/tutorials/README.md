# Componentes de Tutoriais

Esta pasta contém todos os componentes relacionados à tela de tutoriais da plataforma Lumia.

## Estrutura

### Componentes Principais

- **`TutorialsContent`**: Componente principal que integra toda a tela de tutoriais
- **`SearchSection`**: Seção de busca com sugestões
- **`HelpSection`**: Seção de ajuda com botão para central de ajuda
- **`ContinueWatchingSection`**: Cabeçalho da seção "Continue assistindo"
- **`TutorialTabs`**: Abas de navegação entre categorias de tutoriais
- **`TutorialCard`**: Card para tutoriais em andamento (com barra de progresso)
- **`TutorialCardComplete`**: Card completo para tutoriais (com diferentes estados)
- **`TutorialsGrid`**: Grid responsivo para exibir múltiplos tutoriais

### Tipos

- **`TabItem`**: Interface para itens de aba
- **`TutorialCardProps`**: Props do card de tutorial em andamento
- **`TutorialCardCompleteProps`**: Props do card completo de tutorial

## Uso

```tsx
import { TutorialsContent } from '@/components/tutorials';

// Em uma página
<TutorialsContent />
```

## Características

- **Responsivo**: Adapta-se a diferentes tamanhos de tela
- **Componentizado**: Cada seção é um componente independente
- **Reutilizável**: Componentes podem ser usados em outras partes da aplicação
- **TypeScript**: Totalmente tipado para melhor desenvolvimento
- **Acessível**: Seguindo boas práticas de acessibilidade

## Estados dos Cards

### TutorialCard (em andamento)
- Barra de progresso visual
- Botões "Retomar tutorial" e ícone de relógio
- Thumbnail com overlay de progresso

### TutorialCardComplete (completo)
- Badge "Assistido" quando aplicável
- Botão primário para tutoriais importantes
- Descrição completa do tutorial

## Cores e Design

Baseado no design system do Figma, utilizando:
- Cores primárias: `#FDB022`, `#C74228`, `#F66649`
- Backgrounds: `#191923`, `#252532`, `#2D2D45`
- Textos: `#FFFFFF`, `#F0F0F1`, `#CECFD2`
