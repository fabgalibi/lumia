import React from 'react';

interface CustomRadioButtonProps {
  checked: boolean;
  onClick: () => void;
}

export const CustomRadioButton: React.FC<CustomRadioButtonProps> = ({ checked, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        width: '20px',
        height: '20px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {checked ? (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z" fill="#F66649"/>
          <path d="M14 7L8.5 12.5L6 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="9" stroke="#373A41" strokeWidth="1"/>
        </svg>
      )}
    </div>
  );
};
