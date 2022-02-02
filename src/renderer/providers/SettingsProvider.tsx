import { useState, createContext, MouseEventHandler } from 'react';

export type ContextType = {
  scanModalOpen: boolean;
  toggleScanModalOpen: () => void;
};

const defaultValues = {
  scanModalOpen: false,
  toggleScanModalOpen: () => {},
};

export const settingsContext = createContext<ContextType>(defaultValues);

interface propsTypes {
  children: JSX.Element[];
}

export default function SettingsProvider({ children }: propsTypes) {
  const [scanModalOpen, setScanModalOpen] = useState(false);

  return (
    <settingsContext.Provider
      value={{
        scanModalOpen,
        toggleScanModalOpen: () => {
          setScanModalOpen(!scanModalOpen);
        },
      }}
    >
      {children}
    </settingsContext.Provider>
  );
}
