# Componente Podium

Componente de pódio do ranking que exibe os 3 primeiros colocados com seus avatares, nomes, percentuais e badges de posição.

## Estrutura de Dados

O componente espera receber dados no seguinte formato:

```typescript
interface PodiumUser {
  name: string;        // Nome do usuário (pode ser parcialmente oculto)
  initials: string;    // Iniciais para exibir no avatar
  percentage: number;  // Percentual de desempenho (0-100)
  avatarUrl?: string;  // URL da imagem do avatar (opcional, futuro)
}

interface PodiumData {
  first: PodiumUser;   // 1º lugar
  second: PodiumUser;  // 2º lugar
  third: PodiumUser;   // 3º lugar
}
```

## Uso Básico

### Com dados mock (desenvolvimento)

```tsx
import { Podium } from '@/components/ranking';
import { PODIUM_MOCK_DATA } from '@/data/podium';

// O componente já vem com dados mock para desenvolvimento
// Os dados mock estão em src/data/podium.ts
export const RankingPage = () => {
  return <Podium />;
  
  // Ou você pode passar os dados mock explicitamente
  // return <Podium data={PODIUM_MOCK_DATA} />;
};
```

### Com dados da API

```tsx
import { Podium, PodiumData } from '@/components/ranking';
import { useEffect, useState } from 'react';

export const RankingPage = () => {
  const [podiumData, setPodiumData] = useState<PodiumData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPodiumData = async () => {
      try {
        const response = await fetch('/api/ranking/podium');
        const data = await response.json();
        
        // Transformar dados da API para o formato esperado
        const formattedData: PodiumData = {
          first: {
            name: data.topUsers[0].name,
            initials: data.topUsers[0].initials,
            percentage: data.topUsers[0].performance
          },
          second: {
            name: data.topUsers[1].name,
            initials: data.topUsers[1].initials,
            percentage: data.topUsers[1].performance
          },
          third: {
            name: data.topUsers[2].name,
            initials: data.topUsers[2].initials,
            percentage: data.topUsers[2].performance
          }
        };
        
        setPodiumData(formattedData);
      } catch (error) {
        console.error('Erro ao buscar dados do pódio:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPodiumData();
  }, []);

  if (loading) return <div>Carregando...</div>;

  return <Podium data={podiumData || undefined} />;
};
```

## Exemplo de Resposta da API

```json
{
  "topUsers": [
    {
      "id": 123,
      "name": "Juliana Castro",
      "initials": "JC",
      "performance": 92,
      "avatarUrl": "https://example.com/avatars/123.jpg"
    },
    {
      "id": 456,
      "name": "Ana Beatriz Silva",
      "initials": "AB",
      "performance": 85,
      "avatarUrl": "https://example.com/avatars/456.jpg"
    },
    {
      "id": 789,
      "name": "Lucas Souza",
      "initials": "LS",
      "performance": 76,
      "avatarUrl": "https://example.com/avatars/789.jpg"
    }
  ]
}
```

## Features Implementadas

- ✅ Estrutura de 3 pódios com SVGs customizados
- ✅ Avatares com iniciais
- ✅ Badges de posição (ouro, prata, bronze)
- ✅ Nomes e percentuais
- ✅ Efeito de degradê na base
- ✅ Linhas decorativas de profundidade
- ✅ Interface TypeScript para tipagem
- ✅ Suporte a dados mock para desenvolvimento

## Features Futuras

- ⏳ Suporte a imagens de avatar (avatarUrl)
- ⏳ Animações de entrada
- ⏳ Hover states
- ⏳ Loading skeleton

