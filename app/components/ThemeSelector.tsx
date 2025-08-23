import React, { useState } from "react";
import { Button } from "./ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "./ui/dropDownMenu";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme, Theme } from "./ThemeProvider";
import {
  Palette,
  Sun,
  Moon,
  Sparkles,
  Eye,
  Waves,
  TreePine,
  Sunset,
  Stars,
} from "lucide-react";

interface ThemeOption {
  id: Theme;
  name: string;
  description: string;
  icon: React.ReactNode;
  colors: {
    primary: string;
    background: string;
    card: string;
    accent: string;
  };
  category: "Light" | "Dark" | "Colorful" | "Special";
}

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themeOptions: ThemeOption[] = [
    // Light Themes
    {
      id: "light",
      name: "Classic Light",
      description: "Clean and bright",
      icon: <Sun className="w-4 h-4" />,
      colors: {
        primary: "#030213",
        background: "#ffffff",
        card: "#ffffff",
        accent: "#e9ebef",
      },
      category: "Light",
    },
    {
      id: "minimal-light",
      name: "Minimal Light",
      description: "Ultra clean design",
      icon: <Eye className="w-4 h-4" />,
      colors: {
        primary: "#000000",
        background: "#fefefe",
        card: "#f9f9f9",
        accent: "#f0f0f0",
      },
      category: "Light",
    },
    {
      id: "high-contrast-light",
      name: "High Contrast Light",
      description: "Maximum readability",
      icon: <Eye className="w-4 h-4" />,
      colors: {
        primary: "#000000",
        background: "#ffffff",
        card: "#f5f5f5",
        accent: "#e0e0e0",
      },
      category: "Light",
    },

    // Dark Themes
    {
      id: "dark",
      name: "Classic Dark",
      description: "Easy on the eyes",
      icon: <Moon className="w-4 h-4" />,
      colors: {
        primary: "#ffffff",
        background: "#0a0a0a",
        card: "#1a1a1a",
        accent: "#2a2a2a",
      },
      category: "Dark",
    },
    {
      id: "minimal-dark",
      name: "Minimal Dark",
      description: "Pure darkness",
      icon: <Eye className="w-4 h-4" />,
      colors: {
        primary: "#ffffff",
        background: "#000000",
        card: "#0d0d0d",
        accent: "#1a1a1a",
      },
      category: "Dark",
    },
    {
      id: "high-contrast-dark",
      name: "High Contrast Dark",
      description: "Bold and clear",
      icon: <Eye className="w-4 h-4" />,
      colors: {
        primary: "#ffffff",
        background: "#000000",
        card: "#111111",
        accent: "#333333",
      },
      category: "Dark",
    },
    {
      id: "midnight",
      name: "Midnight",
      description: "Deep blue darkness",
      icon: <Stars className="w-4 h-4" />,
      colors: {
        primary: "#60a5fa",
        background: "#0f172a",
        card: "#1e293b",
        accent: "#334155",
      },
      category: "Dark",
    },

    // Colorful Themes
    {
      id: "blue-light",
      name: "Ocean Breeze",
      description: "Calm and professional",
      icon: <Waves className="w-4 h-4" />,
      colors: {
        primary: "#1e40af",
        background: "#f0f9ff",
        card: "#ffffff",
        accent: "#dbeafe",
      },
      category: "Colorful",
    },
    {
      id: "blue-dark",
      name: "Deep Ocean",
      description: "Professional dark blue",
      icon: <Waves className="w-4 h-4" />,
      colors: {
        primary: "#60a5fa",
        background: "#0c1426",
        card: "#1e293b",
        accent: "#334155",
      },
      category: "Colorful",
    },
    {
      id: "green-light",
      name: "Fresh Mint",
      description: "Natural and calming",
      icon: <TreePine className="w-4 h-4" />,
      colors: {
        primary: "#16a34a",
        background: "#f0fdf4",
        card: "#ffffff",
        accent: "#dcfce7",
      },
      category: "Colorful",
    },
    {
      id: "green-dark",
      name: "Forest Night",
      description: "Deep forest vibes",
      icon: <TreePine className="w-4 h-4" />,
      colors: {
        primary: "#4ade80",
        background: "#0a2e0a",
        card: "#1a3d1a",
        accent: "#2d5a2d",
      },
      category: "Colorful",
    },
    {
      id: "purple-light",
      name: "Lavender Dream",
      description: "Creative and elegant",
      icon: <Sparkles className="w-4 h-4" />,
      colors: {
        primary: "#7c3aed",
        background: "#faf7ff",
        card: "#ffffff",
        accent: "#ede9fe",
      },
      category: "Colorful",
    },
    {
      id: "purple-dark",
      name: "Royal Purple",
      description: "Luxurious and bold",
      icon: <Sparkles className="w-4 h-4" />,
      colors: {
        primary: "#a855f7",
        background: "#2e1065",
        card: "#3730a3",
        accent: "#4c1d95",
      },
      category: "Colorful",
    },
    {
      id: "orange-light",
      name: "Warm Sunset",
      description: "Energetic and warm",
      icon: <Sunset className="w-4 h-4" />,
      colors: {
        primary: "#ea580c",
        background: "#fff7ed",
        card: "#ffffff",
        accent: "#fed7aa",
      },
      category: "Colorful",
    },
    {
      id: "orange-dark",
      name: "Ember Glow",
      description: "Warm and cozy",
      icon: <Sunset className="w-4 h-4" />,
      colors: {
        primary: "#fb923c",
        background: "#431407",
        card: "#9a3412",
        accent: "#c2410c",
      },
      category: "Colorful",
    },
    {
      id: "pink-light",
      name: "Rose Garden",
      description: "Soft and welcoming",
      icon: <Sparkles className="w-4 h-4" />,
      colors: {
        primary: "#e11d48",
        background: "#fdf2f8",
        card: "#ffffff",
        accent: "#fce7f3",
      },
      category: "Colorful",
    },
    {
      id: "pink-dark",
      name: "Neon Pink",
      description: "Bold and modern",
      icon: <Sparkles className="w-4 h-4" />,
      colors: {
        primary: "#f472b6",
        background: "#4a044e",
        card: "#86198f",
        accent: "#a21caf",
      },
      category: "Colorful",
    },

    // Special Themes
    {
      id: "cyberpunk",
      name: "Cyberpunk",
      description: "Neon future vibes",
      icon: <Sparkles className="w-4 h-4" />,
      colors: {
        primary: "#00ffff",
        background: "#0a0a0a",
        card: "#1a0a1a",
        accent: "#2a1a2a",
      },
      category: "Special",
    },
    {
      id: "retro-light",
      name: "Retro Cream",
      description: "Vintage warmth",
      icon: <Sun className="w-4 h-4" />,
      colors: {
        primary: "#8b4513",
        background: "#faf0e6",
        card: "#fff8dc",
        accent: "#f5deb3",
      },
      category: "Special",
    },
    {
      id: "retro-dark",
      name: "Retro Night",
      description: "Vintage dark style",
      icon: <Moon className="w-4 h-4" />,
      colors: {
        primary: "#daa520",
        background: "#2f1b14",
        card: "#3d2817",
        accent: "#5d4037",
      },
      category: "Special",
    },
    {
      id: "ocean",
      name: "Deep Ocean",
      description: "Mysterious depths",
      icon: <Waves className="w-4 h-4" />,
      colors: {
        primary: "#20b2aa",
        background: "#001122",
        card: "#003344",
        accent: "#004466",
      },
      category: "Special",
    },
    {
      id: "forest",
      name: "Enchanted Forest",
      description: "Mystical woodland",
      icon: <TreePine className="w-4 h-4" />,
      colors: {
        primary: "#32cd32",
        background: "#0d1b0d",
        card: "#1a331a",
        accent: "#2d5a2d",
      },
      category: "Special",
    },
    {
      id: "sunset",
      name: "Golden Sunset",
      description: "Warm evening glow",
      icon: <Sunset className="w-4 h-4" />,
      colors: {
        primary: "#ff6347",
        background: "#2a1810",
        card: "#3d2317",
        accent: "#5d4037",
      },
      category: "Special",
    },
  ];

  const groupedThemes = themeOptions.reduce(
    (acc, theme) => {
      if (!acc[theme.category]) {
        acc[theme.category] = [];
      }
      acc[theme.category].push(theme);
      return acc;
    },
    {} as Record<string, ThemeOption[]>,
  );

  const currentTheme = themeOptions.find((t) => t.id === theme);

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button variant="outline" size="sm" className="gap-2">
            {currentTheme?.icon || (
              <Palette className="w-4 h-4" />
            )}
            <span className="hidden sm:inline">
              {currentTheme?.name || "Theme"}
            </span>
          </Button>
        </motion.div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-80 max-h-96 overflow-y-auto"
        align="end"
      >
        <DropdownMenuLabel className="flex items-center gap-2">
          <Palette className="w-4 h-4" />
          Choose Theme
        </DropdownMenuLabel>

        <AnimatePresence>
          {Object.entries(groupedThemes).map(
            ([category, themes]) => (
              <div key={category}>
                <DropdownMenuSeparator />
                <DropdownMenuLabel className="text-xs text-muted-foreground px-2 py-1">
                  {category}
                </DropdownMenuLabel>

                {themes.map((themeOption, index) => (
                  <motion.div
                    key={themeOption.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.02 }}
                  >
                    <DropdownMenuItem
                      onClick={() => {
                        setTheme(themeOption.id);
                        setIsOpen(false);
                      }}
                      className="flex items-center gap-3 p-3 cursor-pointer"
                    >
                      <div className="flex items-center gap-2 flex-1">
                        {themeOption.icon}
                        <div>
                          <div className="text-sm">
                            {themeOption.name}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {themeOption.description}
                          </div>
                        </div>
                      </div>

                      {/* Color Preview */}
                      <div className="flex gap-1">
                        <div
                          className="w-3 h-3 rounded-full border border-border"
                          style={{
                            backgroundColor:
                              themeOption.colors.background,
                          }}
                        />
                        <div
                          className="w-3 h-3 rounded-full border border-border"
                          style={{
                            backgroundColor:
                              themeOption.colors.primary,
                          }}
                        />
                        <div
                          className="w-3 h-3 rounded-full border border-border"
                          style={{
                            backgroundColor:
                              themeOption.colors.accent,
                          }}
                        />
                      </div>

                      {theme === themeOption.id && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-2 h-2 bg-primary rounded-full"
                        />
                      )}
                    </DropdownMenuItem>
                  </motion.div>
                ))}
              </div>
            ),
          )}
        </AnimatePresence>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}