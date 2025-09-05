import React from 'react';

interface RouteProviderProps {
  children: React.ReactNode;
}

export const RouteProvider: React.FC<RouteProviderProps> = ({ children }) => {
  return <>{children}</>;
};
