import { createContext, FC, ReactNode } from 'react';

// eslint-disable-next-line react-refresh/only-export-components
export const defaultValue = {
  language: '',
  toggleLanguage: () => {},
};

type LanguagesContextType = {
  language: string;
  toggleLanguage: () => void;
};

interface ProviderProps {
  children: ReactNode;
}

export const LanguagesContext = createContext<LanguagesContextType>(defaultValue);
export const LanguagesProvider: FC<ProviderProps> = ({ children }) => {
  return (
    <LanguagesContext.Provider value={{ language: '', toggleLanguage: () => {} }}>{children}</LanguagesContext.Provider>
  );
};
