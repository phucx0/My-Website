"use client"
import { createContext, useContext, useState } from "react";

interface AppContextProps {
    Info: Record<string, any>;
    setInfo: (data: Record<string, any>) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined)

export const AppProvider = ({ children } : { children: React.ReactNode }) => {
    const [Info, setInfo] = useState<Record<string, any>>({});
    // setInfo(10)
    return(
        <AppContext.Provider value={{ Info, setInfo }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
      throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
  };
  
