import React from 'react';
import { GraduationHat01, Edit05 } from '@untitledui/icons';
import { FormSection, SectionLabel, FormFieldArea, InputField, ButtonGroup } from '../../index';

interface PersonalInfoSectionProps {
  formData: {
    username: string;
    bio: string;
    isWorking: string;
    birthDate: string;
    education: string;
  };
  onInputChange: (field: string, value: string) => void;
  screenSize?: 'mobile' | 'desktop';
}

export const PersonalInfoSection: React.FC<PersonalInfoSectionProps> = ({
  formData,
  onInputChange,
  screenSize = 'desktop'
}) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }}>
      {/* Username Field */}
      <FormSection screenSize={screenSize}>
        <SectionLabel screenSize={screenSize} title="Nome de usuário" />
        <FormFieldArea>
          <InputField
            value={formData.username}
            onChange={(value) => onInputChange('username', value)}
            placeholder="Max William"
            type="text"
            screenSize={screenSize}
          />
        </FormFieldArea>
      </FormSection>


      {/* Bio Field */}
      <FormSection screenSize={screenSize}>
        <SectionLabel 
          title="Sua biografia" 
          supportingText="Escreva uma breve descrição sobre você."
        />
        <FormFieldArea>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            width: '100%'
          }}>
            <textarea
              value={formData.bio}
              onChange={(e) => onInputChange('bio', e.target.value)}
              style={{
                width: '100%',
                height: '130px', // Ajustado para aproximar do Figma (154px container - padding/gap)
                padding: '12px 14px',
                fontFamily: 'Sora',
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '1.5em',
                color: '#CECFD2',
                backgroundColor: '#2D2D3B',
                border: '1px solid #373A41',
                borderRadius: '8px',
                boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)',
                resize: 'none',
                boxSizing: 'border-box',
                outline: 'none'
              }}
              placeholder="Profissional apaixonado por tecnologia e design, focado em criar soluções digitais funcionais e intuitivas..."
              maxLength={400}
            />
            <span style={{
              fontFamily: 'Sora',
              fontWeight: '400',
              fontSize: '14px',
              lineHeight: '1.4285714285714286em',
              color: '#94979C',
              textAlign: 'right'
            }}>
              {formData.bio.length}/400 caracteres
            </span>
          </div>
        </FormFieldArea>
      </FormSection>


      {/* Working Status */}
      <FormSection screenSize={screenSize}>
        <SectionLabel screenSize={screenSize} title="Você está trabalhando atualmente?" />
        <FormFieldArea>
          <ButtonGroup
            options={[
              { value: 'sim', label: 'Sim' },
              { value: 'não', label: 'Não' }
            ]}
            value={formData.isWorking}
            onChange={(value) => onInputChange('isWorking', value)}
            fullWidth={screenSize === 'mobile'}
          />
        </FormFieldArea>
      </FormSection>


      {/* Birth Date */}
      <FormSection screenSize={screenSize}>
        <SectionLabel screenSize={screenSize} title="Data de nascimento" />
        <FormFieldArea>
          <InputField
            value={formData.birthDate}
            onChange={(value) => onInputChange('birthDate', value)}
            disabled
            screenSize={screenSize}
          />
        </FormFieldArea>
      </FormSection>


      {/* Education */}
      <FormSection screenSize={screenSize}>
        <SectionLabel screenSize={screenSize} title="Qual sua formação?" />
        <FormFieldArea>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 12px', // Figma: 10px 12px
            backgroundColor: '#2D2D3B', // Figma: exato
            border: '1px solid #373A41', // Figma: cor exata
            borderRadius: '8px',
            boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)', // Figma: shadow-xs
            width: '100%'
          }}>
            <GraduationHat01 width="20" height="20" stroke="#CECFD2" strokeWidth="1.67" />
            <select
              value={formData.education}
              onChange={(e) => onInputChange('education', e.target.value)}
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                border: 'none',
                outline: 'none',
                fontFamily: 'Sora',
                fontWeight: '400', // Figma: Text sm Regular
                fontSize: '14px', // Figma: 14px
                lineHeight: '1.4285714285714286em', // Figma: exato
                color: '#CECFD2', // Figma: cor exata
                appearance: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="fundamental">Ensino Fundamental</option>
              <option value="medio">Ensino Médio</option>
              <option value="superior-incompleto">Ensino Superior (Incompleto)</option>
              <option value="superior-completo">Ensino Superior (Completo)</option>
              <option value="pos-graduacao">Pós-graduação</option>
            </select>
            {/* Ícone trailing: edit-05 no mobile, dropdown no desktop */}
            {screenSize === 'mobile' ? (
              <Edit05 
                width={16} 
                height={16} 
                stroke="#61656C" 
                strokeWidth="1.33"
                style={{ 
                  transform: 'rotate(0deg)',
                  opacity: 1 
                }}
              />
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 6L8 10L12 6" stroke="#61656C" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
        </FormFieldArea>
      </FormSection>
    </div>
  );
};
