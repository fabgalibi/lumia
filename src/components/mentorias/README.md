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
├── calendar/                        # Componentes do calendário
│   ├── calendar-header.tsx          # Header do calendário com data e navegação
│   ├── calendar-date-icon.tsx       # Ícone de data estilizado (AGO 14)
│   ├── month-navigation.tsx         # Navegação entre meses
│   ├── calendar-grid.tsx            # Grid do calendário com dias da semana
│   ├── calendar-day-cell.tsx        # Célula individual de um dia
│   ├── calendar-event.tsx           # Componente de evento de mentoria
│   └── index.ts                     # Exportações do calendário
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
- Opções: Mês, Semana, Dia
- Estado controlado pelo componente pai

### Calendário (`calendar/`)

#### `CalendarHeader`
- Header do card de calendário
- Integra `CalendarDateIcon` e `MonthNavigation`
- Exibe data formatada e badge "Hoje"
- Texto informativo sobre mentorias agendadas

#### `CalendarDateIcon`
- Ícone estilizado de calendário
- Mês abreviado (laranja) + dia do mês (branco)
- Props: `month: string`, `day: number`

#### `MonthNavigation`
- Navegação entre meses
- Botões anterior/próximo
- Nome do mês centralizado

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

### Principal

#### `MentoriasCalendar`
- Componente orquestrador
- Gerencia estados globais
- Lógica de geração do calendário
- Integra header e calendário

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

