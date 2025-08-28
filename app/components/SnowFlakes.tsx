import React, { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

interface Snowflake {
  id: number;
  left: number;
  animationDuration: number;
  fontSize: number;
  opacity: number;
  delay: number;
}

export function Snowflakes() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);
  const [windowWidth, setWindowWidth] = useState(0);
  const { theme } = useTheme();

  // Update window width on resize
  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    updateWindowWidth();
    window.addEventListener("resize", updateWindowWidth);
    return () =>
      window.removeEventListener("resize", updateWindowWidth);
  }, []);

  // Generate snowflakes when window width changes
  useEffect(() => {
    if (windowWidth === 0) return;

    const snowflakeCount = Math.min(
      70,
      Math.floor(windowWidth / 15),
    ); // Responsive count
    const newSnowflakes: Snowflake[] = [];

    for (let i = 0; i < snowflakeCount; i++) {
      newSnowflakes.push({
        id: i,
        left: Math.random() * 100, // Percentage
        animationDuration: Math.random() * 10 + 5, // 2-5 seconds
        fontSize: Math.random() * 10 + 5, // 10-15px
        opacity: Math.random() * 0.5 + 0.2, // 0.2-0.8
        delay: Math.random() * 5, // 0-5 second delay
      });
    }

    setSnowflakes(newSnowflakes);
  }, [windowWidth]);

  // Get snowflake character and color based on theme
  const getSnowflakeProps = () => {
    switch (theme) {
      case "cyberpunk":
        return { character: "◆", color: "#00ffff" };
      case "retro-light":
      case "ocean":
      case "retro-dark":
        return { character: "●", color: "#daa520" };

        return { character: "❄", color: "#87ceeb" };
      case "forest":
        return { character: "❅", color: "#90ee90" };
      case "sunset":
        return { character: "✦", color: "#ffa500" };
      case "blue-light":
      case "blue-dark":
      case "midnight":
        return { character: "❄", color: "#60a5fa" };
      case "green-light":
      case "green-dark":
        return { character: "❅", color: "#4ade80" };
      case "purple-light":
      case "purple-dark":
        return { character: "✧", color: "#a855f7" };
      case "orange-light":
      case "orange-dark":
        return { character: "✦", color: "#fb923c" };
      case "pink-light":
      case "pink-dark":
        return { character: "❀", color: "#f472b6" };
      case "dark":
      case "minimal-dark":
      case "high-contrast-dark":
        return { character: "❅", color: "#ffffff" };
      default:
        return { character: "❅", color: "#e2e8f0" };
    }
  };

  const { character, color } = getSnowflakeProps();

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake absolute select-none"
          style={{
            left: `${flake.left}%`,
            color: color,
            fontSize: `${flake.fontSize}px`,
            opacity: flake.opacity,
            animationDuration: `${flake.animationDuration}s`,
            animationDelay: `${flake.delay}s`,
          }}
        >
          {character}
        </div>
      ))}
    </div>
  );
}