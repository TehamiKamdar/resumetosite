// src/templates/index.ts
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
    description: "Modern Sleek design RTS's top rowing portfolio theme",
    isPremium: false,
  },
  {
    id: "neubrutalist",
    name: "Neubrutalist Terminal",
    component: NeubrutalistTemplate,
    previewBg: 'bg-white',
    description: "Modern Sleek design RTS's top rowing portfolio theme",
    isPremium: false,
  },
];