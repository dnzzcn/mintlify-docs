export const ModularAccordion = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <div 
      className="modular-accordion overflow-hidden transition-all duration-200 cursor-pointer border-b-2 border-dashed border-zinc-300 dark:border-zinc-600 last:border-b-0"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="w-full px-5 py-4 bg-transparent text-left text-base font-semibold text-zinc-950 dark:text-white">
        <span className="block">{title}</span>
      </div>
      <div className="px-5">
        <div 
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isExpanded ? 'max-h-[2000px]' : 'max-h-[3.5em]'
          }`}
        >
          <div 
            className={`text-zinc-600 dark:text-zinc-400 leading-7 text-[0.9375rem] ${
              !isExpanded ? 'line-clamp-2' : ''
            }`}
          >
            {children}
          </div>
        </div>
        <div className="pb-4"></div>
      </div>
    </div>
  );
};

export const ModularAccordionGroup = ({ children, title }) => {
  return (
    <div className="my-6">
      {title && (
        <div className="mb-4 text-xl font-bold text-zinc-950 dark:text-white">
          {title}
        </div>
      )}
      <div className="bg-zinc-100/50 dark:bg-zinc-800/30 rounded-xl p-3 border border-zinc-200 dark:border-zinc-700">
        <div className="bg-white dark:bg-zinc-900 rounded-lg p-4 shadow-sm">
          {children}
        </div>
      </div>
    </div>
  );
};
