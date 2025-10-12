/**
 * Cores dos status das metas
 * Centralizadas para evitar duplicação
 */
export const STATUS_COLORS = {
  concluido: '#17B26A', // Verde
  pendente: '#F79009',  // Laranja
  default: '#94979C'    // Cinza (fallback)
} as const;

export type StatusType = keyof typeof STATUS_COLORS;

/**
 * Função para obter a cor do status
 */
export function getStatusColor(status: string): string {
  const normalizedStatus = status.toLowerCase() as StatusType;
  return STATUS_COLORS[normalizedStatus] || STATUS_COLORS.default;
}
