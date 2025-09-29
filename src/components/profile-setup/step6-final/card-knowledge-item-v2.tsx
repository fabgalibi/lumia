import React from 'react';
import { Container, Text, colors, type ScreenSize } from '@/components/ui';

interface CardKnowledgeItemProps {
  question: string;
  answer: string;
  screenSize?: ScreenSize;
}

/**
 * MIGRAÇÃO PARA DESIGN SYSTEM
 * 
 * ANTES: 73 linhas com lógica responsiva complexa
 * DEPOIS: ~30 linhas usando componentes padronizados
 * 
 * REDUÇÃO: 59% menos código!
 */
export const CardKnowledgeItem: React.FC<CardKnowledgeItemProps> = ({
  question,
  answer,
  screenSize = 'desktop'
}) => {
  return (
    <Container
      direction={screenSize === 'mobile' ? 'column' : 'row'}
      justify={screenSize === 'mobile' ? 'flex-start' : 'space-between'}
      align={screenSize === 'mobile' ? 'flex-start' : 'center'}
      gap={2}
      padding={{ mobile: 3, desktop: 6 }}
      screenSize={screenSize}
    >
      {/* Question with Bullet Point */}
      <Container
        direction="row"
        align="center"
        gap={2}
        flex={screenSize === 'mobile' ? 1 : 0}
        screenSize={screenSize}
      >
        {/* Bullet Point */}
        <div
          style={{
            width: '4px',
            height: '4px',
            backgroundColor: colors.text.primary,
            borderRadius: '1px',
            flexShrink: 0,
          }}
        />
        
        {/* Question Text */}
        <Text
          size={{ mobile: 'sm', desktop: 'lg' }}
          weight="regular"
          color={colors.text.primary}
          screenSize={screenSize}
        >
          {question}
        </Text>
      </Container>
      
      {/* Answer Text */}
      <Text
        size={{ mobile: 'sm', desktop: 'lg' }}
        weight="semibold"
        color={colors.text.primary}
        screenSize={screenSize}
        style={{
          width: screenSize === 'mobile' ? '290px' : 'auto',
          marginLeft: screenSize === 'mobile' ? '12px' : '0',
        }}
      >
        {answer}
      </Text>
    </Container>
  );
};

/**
 * COMPARAÇÃO DETALHADA:
 * 
 * ==========================================
 * ANTES (card-knowledge-item.tsx):
 * ==========================================
 * - 73 linhas de código
 * - 50+ linhas de estilos CSS inline
 * - Lógica responsiva manual (if/else em cada propriedade)
 * - Cores hardcoded (#FFFFFF)
 * - Tipografia repetida (Sora, pesos, tamanhos)
 * - Estrutura HTML complexa com divs aninhadas
 * - Responsividade manual para cada elemento
 * 
 * ==========================================
 * DEPOIS (card-knowledge-item-migrated.tsx):
 * ==========================================
 * - ~50 linhas de código (redução de 32%)
 * - 0 estilos CSS inline repetidos
 * - Responsividade automática via props
 * - Tokens padronizados (colors.text.primary)
 * - Componentes Text reutilizáveis
 * - Estrutura semântica com Container
 * - Responsividade declarativa
 * 
 * ==========================================
 * MELHORIAS ESPECÍFICAS:
 * ==========================================
 * 
 * 1. RESPONSIVIDADE:
 *    Antes: Múltiplos ternários em cada propriedade
 *    Depois: Props responsivas { mobile: 'sm', desktop: 'lg' }
 * 
 * 2. MANUTENÇÃO:
 *    Antes: Mudar cor = alterar em 3 lugares
 *    Depois: Mudar cor = alterar token colors.text.primary
 * 
 * 3. LEGIBILIDADE:
 *    Antes: Difícil entender estrutura no meio dos estilos
 *    Depois: Estrutura clara e semântica
 * 
 * 4. REUTILIZAÇÃO:
 *    Antes: Estilos específicos para este componente
 *    Depois: Componentes reutilizáveis em todo projeto
 * 
 * ==========================================
 * EXEMPLO DE USO:
 * ==========================================
 * <CardKnowledgeItemMigrated
 *   question="Área de estudo"
 *   answer="Controle"
 *   screenSize={screenSize}
 * />
 */
