export const CustomCard = ({ 
  children, 
  bgColor = "bg-white dark:bg-zinc-900",
  darkBgColor,
  title,
  icon
}) => {
  // Check if bgColor is a hex code or CSS class
  const isHexColor = bgColor.startsWith('#');
  
  // Handle theme-aware backgrounds for hex colors
  const getBackgroundStyle = () => {
    if (isHexColor) {
      return {
        '--card-bg-light': bgColor,
        '--card-bg-dark': darkBgColor || '#27272a' // zinc-800 default
      };
    }
    return {};
  };
  
  return (
    <div 
      className={`${isHexColor ? 'bg-[var(--card-bg-light)] dark:bg-[var(--card-bg-dark)]' : bgColor} rounded-lg border border-zinc-950/10 dark:border-white/10 p-6 shadow-sm`}
      style={getBackgroundStyle()}
    >
      {(title || icon) && (
        <div className="flex items-center gap-3 mb-4">
          {icon && <span className="text-2xl">{icon}</span>}
          {title && (
            <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">
              {title}
            </h3>
          )}
        </div>
      )}
      <div className="text-zinc-600 dark:text-zinc-400 leading-7">
        {children}
      </div>
    </div>
  );
};
