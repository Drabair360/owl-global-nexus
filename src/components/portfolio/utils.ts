
export const getColorClasses = (color: string) => {
  const colorMap = {
    blue: {
      bg: 'from-blue-500/20 to-blue-600/30',
      border: 'border-blue-400/30',
      glow: 'shadow-blue-500/20',
      text: 'text-blue-300',
      button: 'bg-blue-600 hover:bg-blue-700',
      accent: 'bg-blue-500',
      statBg: 'bg-blue-500/10'
    },
    emerald: {
      bg: 'from-emerald-500/20 to-emerald-600/30',
      border: 'border-emerald-400/30',
      glow: 'shadow-emerald-500/20',
      text: 'text-emerald-300',
      button: 'bg-emerald-600 hover:bg-emerald-700',
      accent: 'bg-emerald-500',
      statBg: 'bg-emerald-500/10'
    },
    amber: {
      bg: 'from-amber-500/20 to-amber-600/30',
      border: 'border-amber-400/30',
      glow: 'shadow-amber-500/20',
      text: 'text-amber-300',
      button: 'bg-amber-600 hover:bg-amber-700',
      accent: 'bg-amber-500',
      statBg: 'bg-amber-500/10'
    },
    purple: {
      bg: 'from-purple-500/20 to-purple-600/30',
      border: 'border-purple-400/30',
      glow: 'shadow-purple-500/20',
      text: 'text-purple-300',
      button: 'bg-purple-600 hover:bg-purple-700',
      accent: 'bg-purple-500',
      statBg: 'bg-purple-500/10'
    }
  };
  return colorMap[color as keyof typeof colorMap] || colorMap.blue;
};
