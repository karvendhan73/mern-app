import { createContext, FC, ReactNode, useCallback, useState } from 'react';

const languagesList = ['JavaScript', 'Python', 'Java', '.Net', 'C#'];

// eslint-disable-next-line react-refresh/only-export-components
export const defaultValue = {
  language: '',
  toggleLanguage: () => {},
};

type LanguagesContextType = {
  language: string;
  toggleLanguage: (language: string) => void;
};

interface ProviderProps {
  children: ReactNode;
}

export const LanguagesContext = createContext<LanguagesContextType>(defaultValue);
export const LanguagesProvider: FC<ProviderProps> = ({ children }) => {
  const toggleLanguage = useCallback((language: string) => {
    const currentIndex = languagesList.indexOf(language);
    const nextLanguage = languagesList[currentIndex + 1] || languagesList[0];
    setContextValue({ ...contextValue, language: nextLanguage });
  }, []);

  const [contextValue, setContextValue] = useState<LanguagesContextType>({
    language: languagesList[0],
    toggleLanguage,
  });

  return <LanguagesContext.Provider value={contextValue}>{children}</LanguagesContext.Provider>;
};
