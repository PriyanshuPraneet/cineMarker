// ThemeContext.js
import React, { createContext, useState, useContext } from "react";

// Create the Theme Context
const ThemeContext = createContext();

// ThemeProvider component that will wrap the app
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Function to toggle the theme
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);
