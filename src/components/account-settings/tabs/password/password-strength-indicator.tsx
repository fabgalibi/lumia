import React from 'react';

interface PasswordStrengthIndicatorProps {
  password: string;
}

export const PasswordStrengthIndicator: React.FC<PasswordStrengthIndicatorProps> = ({
  password
}) => {
  const getPasswordStrength = (pwd: string) => {
    let strength = 0;
    const checks = [
      pwd.length >= 8,
      /[a-z]/.test(pwd),
      /[A-Z]/.test(pwd),
      /[0-9]/.test(pwd),
      /[^A-Za-z0-9]/.test(pwd)
    ];
    
    strength = checks.filter(Boolean).length;
    
    if (strength <= 2) return { level: 'weak', color: '#E66B59', text: 'Fraca' };
    if (strength <= 3) return { level: 'medium', color: '#F48E2F', text: 'Média' };
    if (strength <= 4) return { level: 'strong', color: '#52C41A', text: 'Forte' };
    return { level: 'very-strong', color: '#389E0D', text: 'Muito Forte' };
  };

  if (!password) return null;

  const strength = getPasswordStrength(password);
  const percentage = (strength.level === 'weak' ? 25 : 
                     strength.level === 'medium' ? 50 : 
                     strength.level === 'strong' ? 75 : 100);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      marginTop: '8px'
    }}>
      {/* Progress Bar */}
      <div style={{
        width: '100%',
        height: '4px',
        backgroundColor: '#272737',
        borderRadius: '2px',
        overflow: 'hidden'
      }}>
        <div style={{
          width: `${percentage}%`,
          height: '100%',
          backgroundColor: strength.color,
          transition: 'all 0.3s ease'
        }} />
      </div>

      {/* Strength Text */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <span style={{
          fontFamily: 'Sora',
          fontSize: '12px',
          color: strength.color,
          fontWeight: '500'
        }}>
          {strength.text}
        </span>
        
        <span style={{
          fontFamily: 'Sora',
          fontSize: '12px',
          color: '#94979C'
        }}>
          {password.length}/8+ caracteres
        </span>
      </div>

      {/* Requirements List */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        marginTop: '4px'
      }}>
        {[
          { test: password.length >= 8, text: 'Pelo menos 8 caracteres' },
          { test: /[a-z]/.test(password), text: 'Uma letra minúscula' },
          { test: /[A-Z]/.test(password), text: 'Uma letra maiúscula' },
          { test: /[0-9]/.test(password), text: 'Um número' },
          { test: /[^A-Za-z0-9]/.test(password), text: 'Um caractere especial' }
        ].map((req, index) => (
          <div key={index} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <div style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: req.test ? '#52C41A' : '#272737',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {req.test && (
                <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
                  <path 
                    d="M7 1L3 5L1 3" 
                    stroke="white" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
            <span style={{
              fontFamily: 'Sora',
              fontSize: '11px',
              color: req.test ? '#E9EAEB' : '#94979C'
            }}>
              {req.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
