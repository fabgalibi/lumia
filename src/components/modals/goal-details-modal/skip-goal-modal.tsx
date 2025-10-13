import React from 'react';
import { X } from "lucide-react";

interface SkipGoalModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSkip: (goalName: string) => void;
  goalName: string;
}

export const SkipGoalModal: React.FC<SkipGoalModalProps> = ({
  isOpen,
  onClose,
  onSkip,
  goalName
}) => {
  if (!isOpen) return null;

  const handleSkip = () => {
    onSkip(goalName);
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center p-4"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        zIndex: 10000
      }}
    >
      <div
        className="relative flex flex-col"
        style={{
          background: '#202028',
          border: '1px solid #272737',
          borderRadius: '16px',
          boxShadow: '0px 8px 32px 0px rgba(0, 0, 0, 0.3)',
          width: '400px',
          maxWidth: '90vw',
          padding: '24px'
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3
            style={{
              fontFamily: 'Inter',
              fontWeight: 600,
              fontSize: '18px',
              lineHeight: '1.5em',
              color: '#F7F7F7'
            }}
          >
            Pular Meta
          </h3>
          <button
            onClick={onClose}
            className="flex items-center justify-center hover:bg-[#333346] transition-all duration-200 cursor-pointer"
            style={{
              padding: '8px',
              background: 'transparent',
              border: 'none',
              borderRadius: '8px'
            }}
          >
            <X className="w-5 h-5" style={{ color: '#F0F0F1' }} />
          </button>
        </div>

        {/* Content */}
        <div className="mb-6">
          <p
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '1.5em',
              color: '#85888E',
              marginBottom: '16px'
            }}
          >
            Tem certeza que deseja pular a meta "{goalName}"?
          </p>
          <p
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '12px',
              lineHeight: '1.5em',
              color: '#6B7280'
            }}
          >
            Esta ação não pode ser desfeita.
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="flex items-center justify-center hover:bg-[#333346] transition-all duration-200 cursor-pointer flex-1"
            style={{
              padding: '10px 16px',
              background: 'transparent',
              border: '1px solid #2C2C45',
              borderRadius: '8px',
              color: '#F0F0F1'
            }}
          >
            Cancelar
          </button>
          <button
            onClick={handleSkip}
            className="flex items-center justify-center hover:bg-[#6B1A0F] transition-all duration-200 cursor-pointer flex-1"
            style={{
              padding: '10px 16px',
              background: '#55160C',
              border: '1px solid #912018',
              borderRadius: '8px',
              color: '#FECDCA'
            }}
          >
            Pular Meta
          </button>
        </div>
      </div>
    </div>
  );
};
