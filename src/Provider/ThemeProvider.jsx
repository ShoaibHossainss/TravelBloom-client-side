import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext()
const ThemeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(false);

    // First useEffect: Check for saved darkMode in localStorage
    useEffect(() => {
      const savedMode = localStorage.getItem('darkMode');
      console.log('savedMode on first load:', savedMode); // Debugging line
  
      // If savedMode exists and is 'true', apply dark mode
      if (savedMode === 'true') {
        setDarkMode(true);
        document.documentElement.classList.add('dark');
      } else if (savedMode === 'false') {
        setDarkMode(false);
        document.documentElement.classList.remove('dark');
      } else {
        // Default to light mode if no value is found
        setDarkMode(false);
        document.documentElement.classList.remove('dark');
      }
    }, []); // Only runs once on initial render
  
    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
    
        // Save the new mode to localStorage
        localStorage.setItem("darkMode", newDarkMode ? "true" : "false");
    
        // Apply or remove the dark class on the <html> element
        if (newDarkMode) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      };

    const darkModeInfo = {
        darkMode,
        toggleDarkMode
    }
    return (
      <ThemeContext.Provider value={darkModeInfo}>
        {children}
      </ThemeContext.Provider>
    );
};

export default ThemeProvider;