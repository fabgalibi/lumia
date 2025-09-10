import React, { useState } from 'react';
import { Expand04 } from "@untitledui/icons";
import { X, Minimize2 } from "lucide-react";
import { Timer } from "./timer";
import { PerformanceModal } from "./performance-modal";

interface GoalDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  goal: {
    topic: string;
    studyType: string;
    timeStudied: string;
    performance: string;
    mentorCommand: string;
    status: 'pending' | 'completed' | 'in-progress';
    subjects: string[];
    materials: string[];
    mentorCommands: string[];
    additionalTips: string[];
  };
}

export const GoalDetailsModal: React.FC<GoalDetailsModalProps> = ({ isOpen, onClose, goal }) => {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    subjects: true,
    materials: false,
    mentorCommands: false,
    additionalTips: false
  });
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showPerformanceModal, setShowPerformanceModal] = useState(false);
  const [timer, setTimer] = useState("00:35:46");

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => {
      // Comportamento accordion: quando um abre, os outros fecham
      const newState = {
        subjects: false,
        materials: false,
        mentorCommands: false,
        additionalTips: false
      };
      
      // Se a seção clicada não estava aberta, abra ela
      if (!prev[section]) {
        (newState as any)[section] = true;
      }
      
      return newState;
    });
  };

  const handleConcluirMeta = () => {
    setShowPerformanceModal(true);
  };

  const handlePerformanceSave = (data: any) => {
    console.log('Performance data saved:', data);
    // Aqui você pode implementar a lógica para salvar os dados de performance
    setShowPerformanceModal(false);
  };

  const handlePerformanceClose = () => {
    setShowPerformanceModal(false);
  };

  if (!isOpen) return null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return '#17B26A'; // Verde para pendente (invertido)
      case 'completed':
        return '#F79009'; // Amarelo para concluída (invertido)
      case 'in-progress':
        return '#17B26A'; // Verde para pendente (invertido)
      default:
        return '#17B26A'; // Verde por padrão
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending':
        return 'Meta concluída'; // Invertido
      case 'completed':
        return 'Meta pendente'; // Invertido
      case 'in-progress':
        return 'Meta concluída'; // Invertido
      default:
        return 'Meta concluída';
    }
  };

  const sections = [
    {
      key: 'subjects',
      title: 'Assuntos abordados',
      content: goal.subjects,
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_14978_4464" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
            <rect width="32" height="32" fill="url(#paint0_linear_14978_4464)"/>
          </mask>
          <g mask="url(#mask0_14978_4464)">
            <circle cx="16" cy="16" r="15.5" fill="#4E1D09" stroke="#93370D"/>
          </g>
          <rect x="4" y="4" width="24" height="24" rx="12" fill="#DC6803"/>
          <path d="M22 16L14 16M22 12L14 12M22 20L14 20M11.3333 16C11.3333 16.3682 11.0349 16.6667 10.6667 16.6667C10.2985 16.6667 10 16.3682 10 16C10 15.6319 10.2985 15.3334 10.6667 15.3334C11.0349 15.3334 11.3333 15.6319 11.3333 16ZM11.3333 12C11.3333 12.3682 11.0349 12.6667 10.6667 12.6667C10.2985 12.6667 10 12.3682 10 12C10 11.6319 10.2985 11.3334 10.6667 11.3334C11.0349 11.3334 11.3333 11.6319 11.3333 12ZM11.3333 20C11.3333 20.3682 11.0349 20.6667 10.6667 20.6667C10.2985 20.6667 10 20.3682 10 20C10 19.6319 10.2985 19.3334 10.6667 19.3334C11.0349 19.3334 11.3333 19.6319 11.3333 20Z" stroke="white" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="paint0_linear_14978_4464" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
              <stop/>
              <stop offset="1" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      key: 'materials',
      title: 'Materiais de apoio',
      content: goal.materials,
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_14978_5257" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
            <rect width="32" height="32" fill="url(#paint0_linear_14978_5257)"/>
          </mask>
          <g mask="url(#mask0_14978_5257)">
            <circle cx="16" cy="16" r="15.5" fill="#4E1D09" stroke="#93370D"/>
          </g>
          <rect x="4" y="4" width="24" height="24" rx="12" fill="#DC6803"/>
          <path d="M22 14.1667H16M22 10.6667L16 10.6667M22 17.8334H10M22 21.3334H10M10.8533 9.97338L13.4311 11.9067C13.6241 12.0515 13.7206 12.1238 13.7551 12.2126C13.7853 12.2903 13.7853 12.3765 13.7551 12.4542C13.7206 12.5429 13.6241 12.6153 13.4311 12.76L10.8533 14.6934C10.5787 14.8994 10.4414 15.0024 10.3264 15C10.2264 14.9979 10.1326 14.951 10.0709 14.8722C10 14.7817 10 14.61 10 14.2667V10.4001C10 10.0567 10 9.88508 10.0709 9.79455C10.1326 9.71577 10.2264 9.66887 10.3264 9.66679C10.4414 9.6644 10.5787 9.76739 10.8533 9.97338Z" stroke="white" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="paint0_linear_14978_5257" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
              <stop/>
              <stop offset="1" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      key: 'mentorCommands',
      title: 'Comandos do mentor',
      content: goal.mentorCommands,
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_14978_15142" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
            <rect width="32" height="32" fill="url(#paint0_linear_14978_15142)"/>
          </mask>
          <g mask="url(#mask0_14978_15142)">
            <circle cx="16" cy="16" r="15.5" fill="#4E1D09" stroke="#93370D"/>
          </g>
          <rect x="4" y="4" width="24" height="24" rx="12" fill="#DC6803"/>
          <path d="M16 21.3333H22M10 21.3333H11.1164C11.4425 21.3333 11.6055 21.3333 11.759 21.2964C11.895 21.2638 12.0251 21.2099 12.1444 21.1368C12.279 21.0543 12.3943 20.939 12.6249 20.7084L21 12.3333C21.5523 11.781 21.5523 10.8856 21 10.3333C20.4477 9.781 19.5523 9.781 19 10.3333L10.6248 18.7084C10.3942 18.939 10.2789 19.0543 10.1965 19.1889C10.1234 19.3082 10.0695 19.4383 10.0368 19.5743C10 19.7278 10 19.8908 10 20.2169V21.3333Z" stroke="white" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="paint0_linear_14978_15142" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
              <stop/>
              <stop offset="1" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      )
    },
    {
      key: 'additionalTips',
      title: 'Dicas adicionais',
      content: goal.additionalTips,
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_14978_1962" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
            <rect width="32" height="32" fill="url(#paint0_linear_14978_1962)"/>
          </mask>
          <g mask="url(#mask0_14978_1962)">
            <circle cx="16" cy="16" r="15.5" fill="#4E1D09" stroke="#93370D"/>
          </g>
          <rect x="4" y="4" width="24" height="24" rx="12" fill="#DC6803"/>
          <path d="M21.3332 15V12.5334C21.3332 11.4133 21.3332 10.8532 21.1152 10.4254C20.9234 10.0491 20.6175 9.74311 20.2412 9.55136C19.8133 9.33337 19.2533 9.33337 18.1332 9.33337H13.8665C12.7464 9.33337 12.1863 9.33337 11.7585 9.55136C11.3822 9.74311 11.0762 10.0491 10.8845 10.4254C10.6665 10.8532 10.6665 11.4133 10.6665 12.5334V19.4667C10.6665 20.5868 10.6665 21.1469 10.8845 21.5747C11.0762 21.951 11.3822 22.257 11.7585 22.4487C12.1863 22.6667 12.7464 22.6667 13.8665 22.6667H15.9998M17.3332 15.3334H13.3332M14.6665 18H13.3332M18.6665 12.6667H13.3332M19.9998 22V18M17.9998 20H21.9998" stroke="white" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
          <defs>
            <linearGradient id="paint0_linear_14978_1962" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
              <stop/>
              <stop offset="1" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      )
    }
  ];

  return (
      <div
        className={`fixed inset-0 flex ${isFullscreen ? 'items-center justify-center p-4' : 'items-center justify-end p-4'}`}
        style={{
          backgroundColor: isFullscreen ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.5)',
          zIndex: 9999
        }}
      >
            <div
              className={`relative overflow-y-auto ${isFullscreen ? 'w-[95vw] h-[95vh]' : 'w-full max-w-lg max-h-[90vh]'}`}
              style={{
                background: '#202028',
                border: '1px solid #272737',
                borderRadius: isFullscreen ? '16px' : '16px',
                boxShadow: isFullscreen ? '0px 8px 32px 0px rgba(0, 0, 0, 0.3)' : '0px 8px 32px 0px rgba(0, 0, 0, 0.3)',
                minHeight: isFullscreen ? '95vh' : '500px',
                maxWidth: isFullscreen ? '95vw' : '500px',
                margin: isFullscreen ? '0' : '0',
                width: isFullscreen ? '95vw' : 'auto',
                height: isFullscreen ? '95vh' : 'auto',
                padding: isFullscreen ? '0' : '0'
              }}
            >
        {/* Header */}
        <div 
          className={`flex items-center justify-between ${isFullscreen ? 'flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-16' : 'flex-row gap-4'}`}
          style={{
            padding: isFullscreen ? '12px 16px sm:16px lg:24px' : '24px 16px 16px 24px',
            background: '#252532',
            borderBottom: '1.5px solid #272737',
            borderTopLeftRadius: isFullscreen ? '0px' : '16px',
            borderTopRightRadius: isFullscreen ? '0px' : '16px'
          }}
        >
          <div className="flex flex-col gap-1 flex-1">
            <h2 
              style={{
                fontFamily: 'Sora',
                fontWeight: 600,
                fontSize: '18px',
                lineHeight: '1.5555555555555556em',
                color: '#F7F7F7'
              }}
            >
              {goal.topic}
            </h2>
            <div 
              className="flex items-center gap-1.5"
              style={{
                padding: '2px 0px'
              }}
            >
              <div 
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'transparent',
                  border: '1px solid transparent',
                  position: 'relative'
                }}
              >
                <div 
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: getStatusColor(goal.status),
                    position: 'absolute',
                    top: '1px',
                    left: '1px'
                  }}
                />
              </div>
              <span 
                style={{
                  fontFamily: 'Sora',
                  fontWeight: 400,
                  fontSize: '14px',
                  lineHeight: '1.4285714285714286em',
                  color: getStatusColor(goal.status)
                }}
              >
                {getStatusText(goal.status)}
              </span>
            </div>
          </div>
          
            {/* Cronômetro - só aparece em tela cheia */}
            {isFullscreen && (
              <Timer 
                initialTime={timer}
                onTimeChange={setTimer}
                showControls={true}
                className="w-full sm:w-auto"
              />
            )}

          <div className={`flex items-center ${isFullscreen ? 'flex-col sm:flex-row gap-2 sm:gap-2 w-full sm:w-auto' : 'flex-row'}`} style={{ gap: isFullscreen ? '8px' : '8px' }}>
            {isFullscreen ? (
              <>
                  <button
                    onClick={() => setIsFullscreen(false)}
                    className="flex items-center justify-center hover:bg-[#333346] transition-all duration-200 cursor-pointer w-full sm:w-auto"
                    style={{
                      padding: '8px 12px',
                      background: 'transparent',
                      border: 'none',
                      borderRight: '1px solid #373A41',
                      borderRadius: '0px',
                      gap: '6px'
                    }}
                  >
                  <Minimize2 className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" style={{ color: '#F0F0F1' }} />
                  <span
                    className="text-sm sm:text-base flex-shrink-0"
                    style={{
                      fontFamily: 'Sora',
                      fontWeight: 400,
                      lineHeight: '1.5em',
                      color: '#F0F0F1'
                    }}
                  >
                    Minimizar tela
                  </span>
                </button>
                
                  <button
                    onClick={onClose}
                    className="flex items-center justify-center hover:bg-[#333346] transition-all duration-200 cursor-pointer w-full sm:w-auto"
                    style={{
                      padding: '8px 12px',
                      background: 'transparent',
                      border: 'none',
                      borderRadius: '0px'
                    }}
                  >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: '#F0F0F1' }} />
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setIsFullscreen(true)}
                  className="flex items-center justify-center hover:bg-[#333346] transition-all duration-200 cursor-pointer"
                  style={{
                    gap: '6px',
                    padding: '10px 12px',
                    background: 'transparent',
                    border: '1px solid #22262F',
                    borderRadius: '8px'
                  }}
                >
                  <Expand04 className="w-5 h-5" style={{ color: '#F0F0F1' }} />
                  <div 
                    style={{
                      padding: '0px 2px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <span 
                      style={{
                        fontFamily: 'Sora',
                        fontWeight: 400,
                        fontStyle: 'Regular',
                        fontSize: '16px',
                        lineHeight: '1.5em',
                        letterSpacing: '0%',
                        textAlign: 'left',
                        color: '#F0F0F1'
                      }}
                    >
                      Expandir tela
                    </span>
                  </div>
                </button>
                
                <button
                  onClick={onClose}
                  className="flex items-center justify-center hover:bg-[#333346] transition-all duration-200 cursor-pointer"
                  style={{
                    padding: '12px 12px 12px 20px',
                    background: 'transparent',
                    border: 'none',
                    borderLeft: '1px solid #373A41',
                    borderRadius: '0px'
                  }}
                >
                  <X className="w-5 h-5" style={{ color: '#F0F0F1' }} />
                </button>
              </>
            )}
          </div>
        </div>

            {/* Content */}
            <div
              className={`flex flex-col gap-4 sm:gap-6 ${isFullscreen ? 'p-6' : 'p-4 sm:p-6'}`}
            >
          {sections.map((section) => (
            <div key={section.key} className="w-full">
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleSection(section.key)}
                style={{
                  padding: '16px',
                  background: '#252532',
                  border: '1px solid #2C2C45',
                  borderBottom: expandedSections[section.key] ? 'none' : '1px solid #2C2C45',
                  borderTopLeftRadius: '8px',
                  borderTopRightRadius: '8px',
                  borderBottomLeftRadius: expandedSections[section.key] ? '0px' : '8px',
                  borderBottomRightRadius: expandedSections[section.key] ? '0px' : '8px',
                  gap: '12px'
                }}
              >
                <div className="flex items-center" style={{ gap: '10px' }}>
                  <div 
                    className="flex items-center justify-center"
                    style={{
                      width: '32px',
                      height: '32px'
                    }}
                  >
                    {section.icon}
                  </div>
                  <span 
                    style={{
                      fontFamily: 'DM Sans',
                      fontWeight: 600,
                      fontSize: '18px',
                      lineHeight: '1.5555555555555556em',
                      color: '#F0F0F1'
                    }}
                  >
                    {section.title}
                  </span>
                </div>
                
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  style={{
                    transform: expandedSections[section.key] ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease-in-out'
                  }}
                >
                  <path d="M6 9L12 15L18 9" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              
              {expandedSections[section.key] && (
                <div 
                  style={{
                    padding: '20px 16px',
                    background: '#272737',
                    border: '1px solid #2C2C45',
                    borderTop: 'none',
                    borderBottomLeftRadius: '8px',
                    borderBottomRightRadius: '8px'
                  }}
                >
                  <div className="flex flex-col gap-3">
                    {section.content.map((item, index) => (
                      <div 
                        key={index}
                        className="flex items-start gap-2"
                      >
                        <div 
                          style={{
                            width: '4px',
                            height: '4px',
                            borderRadius: '50%',
                            background: '#FFFFFF',
                            marginTop: '6px',
                            flexShrink: 0
                          }}
                        />
                        <span 
                          style={{
                            fontFamily: 'Sora',
                            fontWeight: 400,
                            fontStyle: 'Regular',
                            fontSize: '12px', // text-xs
                            lineHeight: '1.5em', // text-sm line-height
                            letterSpacing: '0%',
                            color: '#FFFFFF'
                          }}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

            {/* Footer */}
            <div
              className={`flex ${isFullscreen ? 'flex-row justify-between items-center' : 'flex-col sm:flex-row'}`}
              style={{
                background: 'rgba(32, 32, 40, 1)',
                borderTop: '1px solid #2C2C45',
                borderBottomLeftRadius: isFullscreen ? '16px' : '16px',
                borderBottomRightRadius: isFullscreen ? '16px' : '16px',
                padding: isFullscreen ? '32px 24px' : '32px 24px',
                gap: isFullscreen ? '16px' : '16px',
                marginTop: 'auto'
              }}
            >
          {isFullscreen ? (
            <>
              {/* Link de problema */}
              <a 
                href="#"
                className="flex items-center gap-1 hover:opacity-80 transition-all duration-200 cursor-pointer"
                style={{
                  background: 'transparent',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '10px 16px',
                  gap: '4px',
                  textDecoration: 'none'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" stroke="#F0F0F1" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 6V10" stroke="#F0F0F1" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 14H10.01" stroke="#F0F0F1" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span 
                  style={{
                    fontFamily: 'Sora',
                    fontWeight: 600,
                    fontSize: '14px',
                    lineHeight: '1.4285714285714286em',
                    color: '#F0F0F1'
                  }}
                >
                  Houve algum problema?
                </span>
              </a>

              {/* Botões de ação */}
              <div className="flex items-center gap-4">
                <button
                  className="flex items-center justify-center hover:bg-[#6B1A0F] transition-all duration-200 cursor-pointer"
                  style={{
                    gap: '4px',
                    padding: '10px 14px',
                    background: '#55160C',
                    border: '1px solid #912018',
                    borderRadius: '8px',
                    boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
                    width: '276.5px'
                  }}
                >
                  <span 
                    className="text-sm sm:text-base"
                    style={{
                      fontFamily: 'Sora',
                      fontWeight: 600,
                      lineHeight: '1.4285714285714286em',
                      color: '#FECDCA'
                    }}
                  >
                    Pular meta
                  </span>
                  <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5832 4.16675V15.8334M7.08276 14.9337L11.9484 11.0412C12.3933 10.6853 12.6157 10.5074 12.6962 10.2924C12.7668 10.1039 12.7668 9.89624 12.6962 9.70775C12.6157 9.49277 12.3933 9.31482 11.9484 8.95892L7.08276 5.06642C6.38929 4.51164 6.04255 4.23425 5.75074 4.23394C5.49695 4.23366 5.25688 4.34905 5.09855 4.54739C4.9165 4.77546 4.9165 5.2195 4.9165 6.10758V13.8926C4.9165 14.7807 4.9165 15.2247 5.09855 15.4528C5.25688 15.6511 5.49695 15.7665 5.75074 15.7662C6.04255 15.7659 6.38929 15.4885 7.08276 14.9337Z" stroke="#FECDCA" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                
                <button
                  onClick={handleConcluirMeta}
                  className="flex items-center justify-center hover:bg-[#0A4A2E] transition-all duration-200 cursor-pointer"
                  style={{
                    gap: '4px',
                    padding: '10px 14px',
                    background: '#085D3A',
                    border: '2px solid',
                    borderImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%) 1',
                    borderRadius: '8px',
                    boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)',
                    width: '276.5px'
                  }}
                >
                  <span 
                    className="text-sm sm:text-base"
                    style={{
                      fontFamily: 'Sora',
                      fontWeight: 600,
                      lineHeight: '1.4285714285714286em',
                      color: '#FFFFFF'
                    }}
                  >
                    Concluir meta
                  </span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9 11L12 14L22 4M16 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V12"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </>
          ) : (
            <>
              <button
                className="flex items-center justify-center hover:bg-[#6B1A0F] transition-all duration-200 cursor-pointer flex-1"
                style={{
                  gap: '4px',
                  padding: '10px 14px',
                  background: '#55160C',
                  border: '1px solid #912018',
                  borderRadius: '8px',
                  boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)'
                }}
              >
                <span 
                  style={{
                    fontFamily: 'Sora',
                    fontWeight: 600,
                    fontSize: '14px',
                    lineHeight: '1.4285714285714286em',
                    color: '#FECDCA'
                  }}
                >
                  Pular meta
                </span>
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.5832 4.16675V15.8334M7.08276 14.9337L11.9484 11.0412C12.3933 10.6853 12.6157 10.5074 12.6962 10.2924C12.7668 10.1039 12.7668 9.89624 12.6962 9.70775C12.6157 9.49277 12.3933 9.31482 11.9484 8.95892L7.08276 5.06642C6.38929 4.51164 6.04255 4.23425 5.75074 4.23394C5.49695 4.23366 5.25688 4.34905 5.09855 4.54739C4.9165 4.77546 4.9165 5.2195 4.9165 6.10758V13.8926C4.9165 14.7807 4.9165 15.2247 5.09855 15.4528C5.25688 15.6511 5.49695 15.7665 5.75074 15.7662C6.04255 15.7659 6.38929 15.4885 7.08276 14.9337Z" stroke="#FECDCA" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <button
                onClick={handleConcluirMeta}
                className="flex items-center justify-center hover:bg-[#0A4A2E] transition-all duration-200 cursor-pointer flex-1"
                style={{
                  gap: '4px',
                  padding: '10px 14px',
                  background: '#085D3A',
                  border: '2px solid',
                  borderImage: 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%) 1',
                  borderRadius: '8px',
                  boxShadow: '0px 1px 2px 0px rgba(255, 255, 255, 0), inset 0px -2px 0px 0px rgba(12, 14, 18, 0.05), inset 0px 0px 0px 1px rgba(12, 14, 18, 0.18)'
                }}
              >
                <span 
                  style={{
                    fontFamily: 'Sora',
                    fontWeight: 600,
                    fontSize: '14px',
                    lineHeight: '1.4285714285714286em',
                    color: '#FFFFFF'
                  }}
                >
                  Concluir meta
                </span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9 11L12 14L22 4M16 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V12"
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </>
          )}
        </div>
      </div>

      {/* Performance Modal */}
      <PerformanceModal
        isOpen={showPerformanceModal}
        onClose={handlePerformanceClose}
        onSave={handlePerformanceSave}
      />
    </div>
  );
};
