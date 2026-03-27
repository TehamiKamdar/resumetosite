// src/templates/index.ts
import MinimalistTerminalTemplate from "./MinimalistTerminal";
import ModernTemplate from "./Modern";

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
  },
];