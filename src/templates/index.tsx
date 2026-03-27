// src/templates/index.ts
import AuroraGlassTemplate from "./Aurora";
import MinimalistTerminalTemplate from "./MinimalistTerminal";
import ModernTemplate from "./Modern";
import NeubrutalistTemplate from "./Neubrutalist";

export const templates = [
  {
    id: "modern",
    name: "Modern",
    component: ModernTemplate,
    previewBg: 'bg-white',
    description: "Modern Sleek design RTS's top rowing portfolio theme",
    isPremium: false,
  },
  {
    id: "minimalist-terminal",
    name: "Minimalist Terminal",
    component: MinimalistTerminalTemplate,
    previewBg: 'bg-white',
    description: "Tab navigation, ASCII art, monospace font, command-line aesthetic",
    isPremium: false,
  },
  {
    id: "neubrutalist",
    name: "Neubrutalist",
    component: NeubrutalistTemplate,
    previewBg: 'bg-white',
    description: "Heavy borders, shadows, rotation effects, high contrast colors",
    isPremium: false,
  },
  {
    id: "aurora-glass",
    name: "Aurora Glass",
    component: AuroraGlassTemplate,
    previewBg: 'bg-white',
    description: "Glassmorphism, animated gradient background, smooth hover effects",
    isPremium: false,
  },
];