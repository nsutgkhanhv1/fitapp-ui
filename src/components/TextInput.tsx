import type { FC } from 'react';

interface TextInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSend?: () => void;
  className?: string;
}

const TextInput: FC<TextInputProps> = ({
  placeholder = "Type a messages here ...",
  value = "",
  onChange,
  onSend,
  className = "",
}) => {
  return (
    <div 
      className={`relative flex items-center justify-center py-2 w-48 bg-ui-white border border-solid border-card-border rounded-full ${className}`}
    >
      <div className="flex items-center w-full px-3 gap-2">
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className="flex-1 bg-transparent font-['Baloo_2'] font-medium text-xs text-text-muted leading-3 outline-none placeholder:text-text-muted"
        />
        <button 
          onClick={onSend}
          className="shrink-0 size-4"
        >
          {/* Send icon SVG */}
          <svg viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-full">
            <path d="M1 9.5L15 1L11 9.5L15 18L1 9.5Z" stroke="#5d5856" strokeWidth="1.5" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      
      {/* Inner shadow (inset at top for input feel) */}
      <div className="absolute inset-0 pointer-events-none rounded-full shadow-[inset_0px_3px_1px_0px_rgba(183,133,90,0.25)]" />
    </div>
  );
};

export default TextInput;
