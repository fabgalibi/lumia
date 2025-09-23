import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentStep,
  totalSteps
}) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'stretch',
        alignItems: 'stretch',
        alignSelf: 'stretch',
        gap: '6px'
      }}
    >
      {Array.from({ length: totalSteps }, (_, index) => (
        <div
          key={index}
          style={{
            height: '6px',
            flex: 1,
            backgroundColor: index < currentStep ? '#F66649' : '#2C2C45',
            borderRadius: '3px'
          }}
        />
      ))}
    </div>
  );
};
