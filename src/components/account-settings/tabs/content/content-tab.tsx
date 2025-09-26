import React, { useState } from 'react';
import { CheckboxField, ButtonGroup } from '../../index';

interface ContentTabProps {
  initialData?: {
    studyLevel: string;
    preferredSubjects: string[];
    studyMode: string;
    difficulty: string;
    practiceTests: boolean;
    videoLessons: boolean;
    textMaterials: boolean;
    audioContent: boolean;
  };
  onSave?: (data: any) => Promise<void>;
  onCancel?: () => void;
}

export const ContentTab: React.FC<ContentTabProps> = ({
  initialData = {
    studyLevel: 'intermediario',
    preferredSubjects: ['direito-constitucional', 'direito-administrativo'],
    studyMode: 'mixed',
    difficulty: 'progressive',
    practiceTests: true,
    videoLessons: true,
    textMaterials: true,
    audioContent: false
  },
  onSave,
  onCancel
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(initialData);

  const handleInputChange = (field: string, value: string | boolean | string[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = async () => {
    setIsLoading(true);
    try {
      if (onSave) {
        await onSave(formData);
      } else {
        // Simular salvamento
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log('Salvando preferências de conteúdo:', formData);
      }
    } catch (error) {
      console.error('Erro ao salvar:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    } else {
      console.log('Cancelando alterações');
    }
  };

  return (
    <>
      {/* Section Header */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>
        <div style={{
          display: 'flex',
          gap: '16px'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            flex: 1
          }}>
            <h2 style={{
              fontFamily: 'Sora',
              fontWeight: '600',
              fontSize: '18px',
              lineHeight: '1.56em',
              color: '#F7F7F7',
              margin: 0
            }}>
              Bagagem de conteúdo
            </h2>
            <p style={{
              fontFamily: 'Sora',
              fontWeight: '400',
              fontSize: '14px',
              lineHeight: '1.43em',
              color: '#E9EAEB',
              margin: 0
            }}>
              Configure suas preferências de aprendizado e tipos de conteúdo.
            </p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>
        {/* Study Level */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          <label style={{
            fontFamily: 'Sora',
            fontWeight: '600',
            fontSize: '14px',
            color: '#F7F7F7'
          }}>
            Nível de conhecimento
          </label>
          <ButtonGroup
            options={[
              { value: 'iniciante', label: 'Iniciante' },
              { value: 'intermediario', label: 'Intermediário' },
              { value: 'avancado', label: 'Avançado' }
            ]}
            value={formData.studyLevel}
            onChange={(value) => handleInputChange('studyLevel', value)}
          />
        </div>


        {/* Study Mode */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          <label style={{
            fontFamily: 'Sora',
            fontWeight: '600',
            fontSize: '14px',
            color: '#F7F7F7'
          }}>
            Modo de estudo preferido
          </label>
          <ButtonGroup
            options={[
              { value: 'theory', label: 'Teoria' },
              { value: 'practice', label: 'Prática' },
              { value: 'mixed', label: 'Misto' }
            ]}
            value={formData.studyMode}
            onChange={(value) => handleInputChange('studyMode', value)}
          />
        </div>


        {/* Content Types */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
          <h3 style={{
            fontFamily: 'Sora',
            fontWeight: '600',
            fontSize: '16px',
            color: '#F7F7F7',
            margin: 0
          }}>
            Tipos de conteúdo
          </h3>

          <CheckboxField
            checked={formData.practiceTests}
            onChange={(checked) => handleInputChange('practiceTests', checked)}
            label="Simulados e exercícios"
            supportingText="Pratique com questões similares às do concurso."
          />

          <CheckboxField
            checked={formData.videoLessons}
            onChange={(checked) => handleInputChange('videoLessons', checked)}
            label="Videoaulas"
            supportingText="Aprenda com professores especialistas em vídeo."
          />

          <CheckboxField
            checked={formData.textMaterials}
            onChange={(checked) => handleInputChange('textMaterials', checked)}
            label="Material em texto"
            supportingText="PDFs, resumos e material de apoio textual."
          />

          <CheckboxField
            checked={formData.audioContent}
            onChange={(checked) => handleInputChange('audioContent', checked)}
            label="Conteúdo em áudio"
            supportingText="Podcasts e aulas em áudio para estudar em movimento."
          />
        </div>
      </div>

      {/* Section Footer */}
      <FormFooter
        onCancel={handleCancel}
        onSave={handleSave}
        isLoading={isLoading}
      />
    </>
  );
};
