import React from 'react';
import { Check } from '@untitledui/icons';
import { FormSection, SectionLabel, FormFieldArea } from '../../index';

interface TermsAgreementSectionProps {
  termsAccepted: boolean;
  onTermsChange: (accepted: boolean) => void;
  screenSize?: 'mobile' | 'tablet' | 'desktop';
}

export const TermsAgreementSection: React.FC<TermsAgreementSectionProps> = ({
  termsAccepted,
  onTermsChange,
  screenSize = 'desktop'
}) => {
  return (
    <>
      {/* Terms Agreement */}
      <FormSection withDivider={false} screenSize={screenSize}>
        <SectionLabel 
          screenSize={screenSize}
          title="Concordância com os Termos de Uso"
          supportingText="Você já aceitou ao se cadastrar, mas pode revisar e confirmar sempre que desejar."
        />
        <FormFieldArea screenSize={screenSize}>
          <div style={{
            display: 'flex',
            gap: '12px',
            alignItems: 'flex-start',
            width: '100%'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              padding: '2px 0px 0px'
            }}>
              <button
                onClick={() => onTermsChange(!termsAccepted)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '20px',
                  height: '20px',
                  backgroundColor: termsAccepted ? '#F66649' : '#2D2D3B',
                  border: termsAccepted ? 'none' : '1px solid #373A41',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = termsAccepted ? '#E55A3F' : '#3A3A4A';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = termsAccepted ? '#F66649' : '#2D2D3B';
                }}
              >
                {termsAccepted && (
                  <Check 
                    width="14" 
                    height="14" 
                    stroke="#FFFFFF" 
                    strokeWidth="2"
                  />
                )}
              </button>
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2px',
              flex: 1
            }}>
              <span style={{
                fontFamily: 'Inter' /* MIGRATED */,
                fontWeight: '400',
                fontSize: '16px',
                lineHeight: '1.5em',
                color: '#CECFD2'
              }}>
                Concordo com os{' '}
                <a 
                  href="/termos-de-uso" 
                  target="_blank"
                  style={{
                    color: '#F48E2F',
                    textDecoration: 'none',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#E67E1F';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#F48E2F';
                  }}
                >
                  Termos de Uso
                </a>
                {' '}da plataforma.
              </span>
            </div>
          </div>
        </FormFieldArea>
      </FormSection>
    </>
  );
};
