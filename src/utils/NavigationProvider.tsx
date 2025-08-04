'use client';

import { createContext, useContext, ReactNode } from 'react';
import { useNavigation } from '../hooks/useNavigation';

interface NavigationContextType {
  activeSection: string;
  navigationItems: Array<{
    id: string;
    label: string;
    href: string;
  }>;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

interface NavigationProviderProps {
  children: ReactNode;
}

export function NavigationProvider({ children }: NavigationProviderProps) {
  const navigation = useNavigation();

  return <NavigationContext.Provider value={navigation}>{children}</NavigationContext.Provider>;
}

export function useNavigationContext() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigationContext must be used within a NavigationProvider');
  }
  return context;
}
