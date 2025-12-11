import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

interface NightModeContextType {
  isNightMode: boolean;
  toggleNightMode: () => void;
}

const NightModeContext = createContext<NightModeContextType | undefined>(undefined);

interface NightModeProviderProps {
  children: ReactNode;
}

export function NightModeProvider({ children }: NightModeProviderProps) {
  const [isNightMode, setIsNightMode] = useState<boolean>(false);

  useEffect(() => {
    const saved = localStorage.getItem('nightMode');
    if (saved) {
      setIsNightMode(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('nightMode', JSON.stringify(isNightMode));
  }, [isNightMode]);

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
  };

  return (
    <NightModeContext.Provider value={{ isNightMode, toggleNightMode }}>
      {children}
    </NightModeContext.Provider>
  );
}

export function useNightMode(): NightModeContextType {
  const context = useContext(NightModeContext);
  if (!context) {
    throw new Error('useNightMode must be used within a NightModeProvider');
  }
  return context;
}