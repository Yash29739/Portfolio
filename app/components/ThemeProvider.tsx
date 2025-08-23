'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';

export type Theme = 
  | 'light' 
  | 'dark' 
  | 'blue-light' 
  | 'blue-dark'
  | 'green-light' 
  | 'green-dark'
  | 'purple-light' 
  | 'purple-dark'
  | 'orange-light' 
  | 'orange-dark'
  | 'pink-light' 
  | 'pink-dark'
  | 'cyberpunk'
  | 'retro-light'
  | 'retro-dark'
  | 'minimal-light'
  | 'minimal-dark'
  | 'high-contrast-light'
  | 'high-contrast-dark'
  | 'ocean'
  | 'forest'
  | 'sunset'
  | 'midnight';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
}

export function ThemeProvider({ children, defaultTheme = 'light' }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    // Load theme from localStorage on mount
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    // Save theme to localStorage and apply to document
    localStorage.setItem('portfolio-theme', theme);
    
    // Remove all theme classes
    const themeClasses = [
      'light', 'dark', 'blue-light', 'blue-dark', 'green-light', 'green-dark',
      'purple-light', 'purple-dark', 'orange-light', 'orange-dark', 
      'pink-light', 'pink-dark', 'cyberpunk', 'retro-light', 'retro-dark',
      'minimal-light', 'minimal-dark', 'high-contrast-light', 'high-contrast-dark',
      'ocean', 'forest', 'sunset', 'midnight'
    ];
    
    document.documentElement.classList.remove(...themeClasses);
    document.documentElement.classList.add(theme);
  }, [theme]);

  // Define which themes are considered dark based on their background colors
  const darkThemes: Theme[] = [
    'dark', 'blue-dark', 'green-dark', 'purple-dark', 'orange-dark', 
    'pink-dark', 'cyberpunk', 'retro-dark', 'minimal-dark', 
    'high-contrast-dark', 'ocean', 'forest', 'sunset', 'midnight'
  ];

  const isDark = darkThemes.includes(theme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
}