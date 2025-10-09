# Componentes de Mentorias

Estrutura organizada e componentizada para a tela de Mentorias.

## 📁 Estrutura de Pastas

```
mentorias/
├── header/                          # Componentes do header da página
│   ├── mentorias-header.tsx         # Header principal com título e controles
│   ├── view-type-toggle.tsx         # Toggle de visualização (Mês/Semana/Dia)
│   └── index.ts                     # Exportações do header
│
├── shared/                          # Componentes compartilhados entre visualizações
│   ├── calendar-header.tsx          # Header do calendário (usado em ambas views)
│   ├── calendar-date-icon.tsx       # Ícone de data estilizado (AGO 14)
│   ├── month-navigation.tsx         # Navegação entre meses
│   └── index.ts                     # Exportações compartilhadas
│
├── calendar/                        # Componentes da visualização mensal
│   ├── calendar-grid.tsx            # Grid do calendário com dias da semana
│   ├── calendar-day-cell.tsx        # Célula individual de um dia
│   ├── calendar-event.tsx           # Componente de evento de mentoria
│   └── index.ts                     # Exportações do calendário
│
├── week-view/                       # Componentes da visualização semanal
│   ├── week-view.tsx                # Container principal da visualização semanal
│   ├── week-view-header.tsx         # Header com dias da semana
│   ├── week-view-grid.tsx           # Grid de horários e eventos
│   ├── time-label.tsx               # Labels de horário (8 AM, 9 AM, etc)
│   ├── week-event-cell.tsx          # Célula de evento na grade de horários
│   └── index.ts                     # Exportações da week view
│
├── mentorias-calendar.tsx           # Componente principal (orquestrador)
├── types.ts                         # Tipos TypeScript compartilhados
├── index.ts                         # Exportações centralizadas
└── README.md                        # Esta documentação
```

## 🎯 Componentes

### Header (`header/`)

#### `MentoriasHeader`
- Header principal da página
- Título "Mentorias"
- Integra `ViewTypeToggle` e `UserMenu`

#### `ViewTypeToggle`
- Toggle para alternar tipo de visualização
- Opções: Mês (ícone calendário), Semana (ícone lista)
- Estado controlado pelo componente pai

### Compartilhados (`shared/`)

#### `CalendarHeader`
- Header usado em ambas visualizações (mensal e semanal)
- Ícone de data, texto com badge "Hoje", navegação de meses
- Exibe data formatada e informações contextuais

#### `CalendarDateIcon`
- Ícone estilizado de calendário
- Mês abreviado (laranja) + dia do mês (branco)
- Width: 64px

#### `MonthNavigation`
- Navegação entre meses (anterior/próximo)
- Nome do mês centralizado
- Botões com ícones de seta

### Calendário Mensal (`calendar/`)

#### `CalendarGrid`
- Grid 7 colunas (dias da semana)
- Headers dos dias
- Renderiza semanas do calendário

#### `CalendarDayCell`
- Célula individual de um dia
- Estados: hoje, selecionado, mês atual/anterior/próximo
- Renderiza eventos do dia

#### `CalendarEvent`
- Evento de mentoria estilizado
- 6 cores disponíveis: gray, brand, blue, pink, orange, yellow
- Exibe título e horário

### Visualização Semanal (`week-view/`)

#### `WeekView`
- Container principal da visualização semanal
- Integra header e grid de horários
- Mostra semana atual (domingo a sábado)

#### `WeekViewHeader`
- Header com dias da semana
- Mostra número do dia
- Destaca dia atual com fundo laranja

#### `WeekViewGrid`
- Grade de horários (8 AM - 5 PM)
- 7 colunas (um dia por coluna)
- Células de 30 minutos
- Integra TimeLabel e WeekEventCell

#### `TimeLabel`
- Label de horário na coluna esquerda
- Texto posicionado acima da linha
- Destaque visual para horários especiais

#### `WeekEventCell`
- Célula que pode conter evento ou estar vazia
- Suporta eventos de 30, 60 ou 120 minutos
- Eventos sobrepostos na grade
- Cores e estilos por tipo de evento

### Principal

#### `MentoriasCalendar`
- Componente orquestrador
- Gerencia estados globais
- Alterna entre visualização mensal e semanal
- Lógica de geração do calendário
- Integra header, calendário e week view

## 📦 Tipos (`types.ts`)

```typescript
interface MentoriaEvent {
  id: string;
  title: string;
  time: string;
  color: 'gray' | 'brand' | 'blue' | 'pink' | 'orange' | 'yellow';
}

interface CalendarDay {
  date: number;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  events: MentoriaEvent[];
}
```

## 🎨 Uso

```tsx
import { MentoriasCalendar } from '@/components/mentorias';

function App() {
  return <MentoriasCalendar />;
}
```

## 🔄 Integração

- ✅ Usa `UserMenu` existente do sistema
- ✅ Integrado ao `HomeScreen` como rota
- ✅ Proteção de rota com `ProtectedRoute`
- ✅ Responsivo para mobile/tablet/desktop

## 🎯 Padrões Seguidos

- ✅ Componentização granular
- ✅ Separação de responsabilidades
- ✅ Organização em subpastas por funcionalidade
- ✅ Exports centralizados via `index.ts`
- ✅ Tipagem forte com TypeScript
- ✅ Props interfaces bem definidas
- ✅ Componentes funcionais com React Hooks

