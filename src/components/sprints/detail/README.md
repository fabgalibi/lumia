# Sprint Detail Components

Esta pasta contém todos os componentes relacionados à página de detalhes de sprint, organizados em subpastas por funcionalidade.

## 📁 Estrutura

```
detail/
├── card/                    # Componentes do card principal
│   ├── sprint-info-card.tsx      # Card principal com todas as informações
│   ├── sprint-badges.tsx         # Badges de status e metas restantes
│   ├── sprint-title-section.tsx  # Título, objetivo e imagem
│   └── index.ts
├── metrics/                 # Componentes de métricas
│   ├── sprint-metrics.tsx        # Métricas gerais da sprint
│   └── index.ts
├── performance/             # Componentes de desempenho
│   ├── performance-circle.tsx    # Círculo de progresso reutilizável
│   ├── performance-card.tsx      # Card de desempenho completo
│   └── index.ts
├── sprint-detail-stats.tsx  # Stats detalhadas (legado)
├── sprint-detail-goals.tsx  # Goals da sprint
└── index.ts
```

## 🎯 Componentes

### Card Components (`card/`)
- **SprintInfoCard**: Card principal que agrupa todas as informações da sprint
- **SprintBadges**: Badges de status e metas restantes
- **SprintTitleSection**: Seção com título, objetivo e imagem

### Metrics Components (`metrics/`)
- **SprintMetrics**: Métricas gerais (desempenho, metas, disciplinas)

### Performance Components (`performance/`)
- **PerformanceCircle**: Círculo de progresso reutilizável
- **PerformanceCard**: Card completo de desempenho

## 🔄 Reutilização

Os componentes de performance (`performance/`) foram criados para serem reutilizados em outras páginas:

```tsx
// Uso simples do círculo de performance
<PerformanceCircle percentage={75} size={60} />

// Card completo de performance
<PerformanceCard percentage={85} title="Meu Desempenho" size="large" />
```

## 📊 Benefícios da Organização

- ✅ **Separação de responsabilidades**
- ✅ **Reutilização de componentes**
- ✅ **Manutenibilidade**
- ✅ **Escalabilidade**
- ✅ **Imports organizados**
