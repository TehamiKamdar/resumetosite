// templates/index.ts
import ModernTemplate from './Modern';
import MinimalistTerminalTemplate from './MinimalistTerminal';
import NeubrutalistTemplate from './Neubrutalist';
import AuroraGlassTemplate from './Aurora';

// Preview Components (mini versions for cards)
import ModernPreview from './previews/ModernPreview';
import TerminalPreview from './previews/TerminalPreview';
import NeubrutalistPreview from './previews/NeubrutalistPreview';
import AuroraGlassPreview from './previews/AuroraGlassPreview';

export const templates = [
  {
    id: "modern",
    name: "Modern",
    component: ModernTemplate,
    preview: ModernPreview, // 👈 Add preview component
    previewBg: 'bg-gradient-to-br from-slate-50 via-white to-gray-50',
    description: "Modern Sleek design — RTS's top rowing portfolio theme",
    isPremium: false,
  },
  {
    id: "minimalist-terminal",
    name: "Minimalist Terminal",
    component: MinimalistTerminalTemplate,
    preview: TerminalPreview,
    previewBg: 'bg-black',
    description: "Tab navigation, ASCII art, monospace font, command-line aesthetic",
    isPremium: false,
  },
  {
    id: "neubrutalist",
    name: "Neubrutalist",
    component: NeubrutalistTemplate,
    preview: NeubrutalistPreview,
    previewBg: 'bg-yellow-200',
    description: "Heavy borders, shadows, rotation effects, high contrast colors",
    isPremium: true,
  },
  {
    id: "aurora-glass",
    name: "Aurora Glass",
    component: AuroraGlassTemplate,
    preview: AuroraGlassPreview,
    previewBg: 'bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900',
    description: "Glassmorphism, animated gradient background, smooth hover effects",
    isPremium: false,
  },
];