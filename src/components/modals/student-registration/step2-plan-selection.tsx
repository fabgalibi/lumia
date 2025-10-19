import React, { useState, useEffect } from 'react';
import { studentService, PlanoMestre } from '@/services/api/student.service';

// Estilos para scrollbar customizada
const scrollbarStyles = `
  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-track {
    background: #2D2D3B;
    border-radius: 3px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: #373A41;
    border-radius: 3px;
    border: 1px solid #0C0E12;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #4A4D56;
  }
`;

// Adicionar estilos ao head se não existirem
if (typeof document !== 'undefined' && !document.getElementById('custom-scrollbar-styles')) {
  const style = document.createElement('style');
  style.id = 'custom-scrollbar-styles';
  style.textContent = scrollbarStyles;
  document.head.appendChild(style);
}

interface Plan {
  id: string;
  name: string;
  code: string;
}

interface Step2PlanSelectionProps {
  selectedPlan: string;
  onPlanSelect: (planId: string) => void;
  error?: string;
}

export const Step2PlanSelection: React.FC<Step2PlanSelectionProps> = ({
  selectedPlan,
  onPlanSelect,
  error
}) => {
  const [plans, setPlans] = useState<PlanoMestre[]>([]);
  const [searchPlan, setSearchPlan] = useState('');
  const [loading, setLoading] = useState(true);

  // Carregar planos da API
  useEffect(() => {
    const loadPlans = async () => {
      try {
        setLoading(true);
        const plansData = await studentService.getPlansMaster();
        console.log('📋 Planos carregados:', plansData);
        setPlans(plansData);
      } catch (error) {
        console.error('Erro ao carregar planos:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPlans();
  }, []);

  const filteredPlans = plans.filter(plan =>
    plan.nome.toLowerCase().includes(searchPlan.toLowerCase()) ||
    plan.codigo.toLowerCase().includes(searchPlan.toLowerCase())
  );

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: '100%',
      flex: 1
    }}>
      {/* Header com título e contador */}
      <div style={{ 
        padding: '24px 24px 16px 24px',
        borderBottom: '1px solid #22262F'
      }}>
        <h3 style={{
          fontFamily: 'Sora',
          fontWeight: 600,
          fontSize: '18px',
          lineHeight: '1.33em',
          color: '#F7F7F7',
          margin: 0
        }}>
          Planos cadastrados ({plans.length})
        </h3>
      </div>

      {/* Busca de planos */}
      <div style={{ 
        padding: '16px 24px',
        borderBottom: '1px solid #22262F'
      }}>
        <div style={{ position: 'relative' }}>
          <input
            type="text"
            value={searchPlan}
            onChange={(e) => setSearchPlan(e.target.value)}
            placeholder="Buscar plano"
            style={{
              background: '#2D2D3B',
              border: '1px solid #2D2D36',
              borderRadius: '8px',
              padding: '8px 12px 8px 40px',
              fontFamily: 'Sora',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '1.5em',
              color: searchPlan ? '#FFFFFF' : '#D5D7DA',
              outline: 'none',
              transition: 'all 0.2s ease',
              boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0)',
              width: '100%'
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#F48E2F';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = '#2D2D36';
              if (!e.currentTarget.value) {
                e.currentTarget.style.color = '#D5D7DA';
              }
            }}
          />
          <div style={{
            position: 'absolute',
            left: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#94979C',
            pointerEvents: 'none'
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
          </div>
        </div>
        
        {/* Exibir erro se houver */}
        {error && (
          <div style={{
            color: '#F48E2F',
            fontFamily: 'Sora',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '1.43em',
            marginTop: '8px'
          }}>
            {error}
          </div>
        )}
      </div>

      {/* Lista de planos */}
      <div 
        style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '12px', 
          flex: 1, // Ocupa todo o espaço restante
          overflowY: 'auto',
          padding: '16px 24px',
          minHeight: 0, // Permite que o flex funcione corretamente
          // Webkit scrollbar styles
          scrollbarWidth: 'thin',
          scrollbarColor: '#373A41 #2D2D3B'
        }}
        className="custom-scrollbar"
      >
        {loading ? (
          <div style={{ textAlign: 'center', padding: '20px', color: '#CECFD2' }}>
            Carregando planos...
          </div>
        ) : (
          filteredPlans.map((plan) => (
            <div
              key={plan.id}
              onClick={() => onPlanSelect(plan.id.toString())}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px',
                background: '#252532',
                border: selectedPlan === plan.id.toString() ? '2px solid #F66649' : '1px solid #2C2C45',
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                minHeight: '56px'
              }}
              onMouseEnter={(e) => {
                if (selectedPlan !== plan.id.toString()) {
                  e.currentTarget.style.background = '#2A2A3A';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedPlan !== plan.id.toString()) {
                  e.currentTarget.style.background = '#252532';
                }
              }}
            >
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '6px',
                flex: 1
              }}>
                <div style={{
                  fontFamily: 'Sora',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '1.5em',
                  color: '#CECFD2'
                }}>
                  {plan.nome}
                </div>
                <div style={{
                  fontFamily: 'Sora',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '1.43em',
                  color: '#CECFD2'
                }}>
                  ({plan.codigo})
                </div>
              </div>
              
              <div
                style={{
                  width: '20px',
                  height: '20px',
                  border: selectedPlan === plan.id.toString() ? '2px solid #F66649' : '2px solid #373A41',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: selectedPlan === plan.id.toString() ? '#F66649' : 'transparent',
                  flexShrink: 0,
                  transition: 'all 0.2s ease'
                }}
              >
                {selectedPlan === plan.id.toString() && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
