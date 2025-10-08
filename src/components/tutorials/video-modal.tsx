import React from 'react';
import { VideoPlayer } from './video-player';

export interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  videoUrl?: string;
  currentTime?: string;
  totalTime?: string;
  progress?: number;
  detailedDescription?: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  videoUrl,
  detailedDescription
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="video-modal-overlay"
      onClick={onClose}
    >
      <div 
        className="video-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botão de fechar para desktop */}
        <button
          onClick={onClose}
          className="video-modal-close"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Mobile/Tablet Header */}
        <div className="video-modal-mobile-header">
          <h2 className="video-title">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="video-modal-close"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="video-modal-content">
          {/* Player de vídeo */}
          <div className="video-player">
            <VideoPlayer 
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              poster={videoUrl}
              title={title}
            />
          </div>

          {/* Informações do tutorial */}
          <div className="video-info">
            <h2 className="video-title">
              {title}
            </h2>
            <p className="video-description">
              {detailedDescription || description || 'Descrição não disponível'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
