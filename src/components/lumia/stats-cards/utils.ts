/**
 * Calcula média de horas diárias baseado no tempo total estudado
 * @param tempoTotal - Tempo total no formato "XXh YYm"
 * @returns Média diária formatada
 */
export const calcularMediaDiaria = (tempoTotal: string): string => {
  if (!tempoTotal) return '0h';
  
  // Assumindo formato "XXh YYm" ou similar
  const horasMatch = tempoTotal.match(/(\d+)h/);
  const minutosMatch = tempoTotal.match(/(\d+)m/);
  
  const horas = horasMatch ? parseInt(horasMatch[1]) : 0;
  const minutos = minutosMatch ? parseInt(minutosMatch[1]) : 0;
  
  const totalMinutos = horas * 60 + minutos;
  const dias = 7; // Assumindo sprint de 7 dias
  const mediaMinutos = Math.round(totalMinutos / dias);
  
  const mediaHoras = Math.floor(mediaMinutos / 60);
  const mediaMin = mediaMinutos % 60;
  
  if (mediaHoras === 0) {
    return `${mediaMin}m`;
  }
  return `${mediaHoras}h${mediaMin > 0 ? ` ${mediaMin}m` : ''}`;
};

