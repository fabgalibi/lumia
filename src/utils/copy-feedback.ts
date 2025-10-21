import { useState } from 'react';

/**
 * Hook personalizado para gerenciar feedback visual de cópia
 * @param resetDelay - Tempo em ms para resetar o feedback (padrão: 2000)
 * @returns { copiedItems, handleCopyWithFeedback }
 */
export const useCopyFeedback = (resetDelay: number = 2000) => {
  const [copiedItems, setCopiedItems] = useState<Set<string>>(new Set());

  const handleCopyWithFeedback = async (text: string, itemId?: string) => {
    try {
      await navigator.clipboard.writeText(text);
      
      // Usar itemId se fornecido, senão usar o próprio texto
      const id = itemId || text;
      
      // Adicionar à lista de itens copiados
      setCopiedItems(prev => new Set(prev).add(id));
      
      // Remover após o delay especificado
      setTimeout(() => {
        setCopiedItems(prev => {
          const newSet = new Set(prev);
          newSet.delete(id);
          return newSet;
        });
      }, resetDelay);
      
      console.log(`Código copiado: ${text}`);
      return true;
    } catch (err) {
      console.error('Erro ao copiar:', err);
      return false;
    }
  };

  const isCopied = (itemId: string) => copiedItems.has(itemId);

  return {
    copiedItems,
    handleCopyWithFeedback,
    isCopied
  };
};
