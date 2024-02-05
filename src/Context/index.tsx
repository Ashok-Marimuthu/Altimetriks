import React, { createContext, ReactNode, useContext, useState } from "react";
import defaultTheme from "../Styles/Themes";

interface ThemeProviderProps {
  theme?: any; // You should replace 'any' with your actual theme type
  children: ReactNode;
}

interface ThemeContextProps {
  theme: any; // You should replace 'any' with your actual theme type
  changeTheme: (t: any) => void; // You should replace 'any' with your actual theme type
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme, children }) => {
  const [themeObj, changeTheme] = useState(theme || defaultTheme);

  const setTheme = (t: any) => {
    changeTheme(t);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme: themeObj,
        changeTheme: (t) => setTheme(t),
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
