import React, { useState } from 'react';
import { Container, Text, Button, Input, colors } from '@/components/ui/design-system';

interface SkipGoalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSkip: (reason: string) => void;
  goalName?: string;
}

export const SkipGoalModal: React.FC<SkipGoalModalProps> = ({
  isOpen,
  onClose,
  onSkip,
  goalName: _goalName = "Meta"
}) => {
  const [reason, setReason] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await onSkip(reason.trim() || 'Sem motivo especificado');
      setReason('');
      onClose();
    } catch (error) {
      console.error('Erro ao pular meta:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setReason('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[100] pointer-events-none">
      <Container
        background={colors.bg.primary}
        borderRadius="xl"
        direction="column"
        style={{ 
          width: '512px',
          pointerEvents: 'auto',
          boxShadow: '0px 3px 3px -1.5px rgba(255, 255, 255, 0), 0px 8px 8px -4px rgba(255, 255, 255, 0), 0px 20px 24px -4px rgba(255, 255, 255, 0)'
        }}
      >
        {/* Background pattern decorative */}
        <div className="absolute -top-30 -left-30 w-84 h-84 opacity-10">
          <div className="w-full h-full rounded-full border border-[#2B2B3D]"></div>
        </div>

        {/* Header */}
        <Container
          direction="row"
          justify="space-between"
          align="center"
          padding={6}
          style={{ 
            borderBottom: `1.5px solid ${colors.border.secondary}`
          }}
        >
          <Text
            variant="h3"
            weight="semibold"
            color={colors.text.primary}
          >
            Pular meta
          </Text>
          
          <button
            onClick={handleClose}
            className="flex items-center justify-center w-11 h-11 rounded-lg hover:bg-[#2D2D42] transition-colors"
            style={{ width: '44px', height: '44px' }}
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none"
            >
              <path 
                d="M15 5L5 15M5 5L15 15" 
                stroke="#F0F0F1" 
                strokeWidth="1.67" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </Container>

        {/* Content */}
        <Container direction="column" gap={6} padding={6}>
          <Container direction="column" gap={2}>
            <Text
              variant="caption"
              color={colors.text.tertiary}
            >
              Conte-nos o motivo pelo qual você deseja pular esta meta. Isso nos ajudará a melhorar sua experiência.
            </Text>
          </Container>

          <Input
            type="textarea"
            value={reason}
            onChange={(value: string) => setReason(value)}
            placeholder="Digite o motivo (opcional)..."
            rows={4}
            maxLength={500}
            showCharCount
          />

          {/* Actions */}
          <Container direction="row" justify="flex-end" gap={3}>
            <Button
              variant="secondary"
              onClick={handleClose}
              disabled={isSubmitting}
            >
              Cancelar
            </Button>
            
            <Button
              variant="danger"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Pulando...' : 'Pular meta'}
            </Button>
          </Container>
        </Container>
      </Container>
    </div>
  );
};