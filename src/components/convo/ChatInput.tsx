import { forwardRef, TextareaHTMLAttributes } from "react";

export interface ChatInputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  onTextChange?: (value: string) => void;
  onSend?: (value: string) => void;
}

export const ChatInput = forwardRef<HTMLTextAreaElement, ChatInputProps>(({
  className,
  value = "",
  disabled,
  onTextChange,
  onSend,
  ...props
}, ref) => {
  const updateValue = (newValue: string) => {
    onTextChange?.(newValue);
  };

  return (
    <textarea
      ref={ref}
      {...props}
      rows={1}
      disabled={disabled}
      onChange={(e) => updateValue(e.target.value)}
      value={value}
      onKeyDown={(e) => {
        const target = e.currentTarget;
        const caretPos = target.selectionStart;
        if (caretPos !== String(value).length) {
          return;
        }
        if (e.key === "Enter") {
          if (e.altKey || e.metaKey || e.ctrlKey) {
            updateValue(value + "\n");
          } else if (!e.shiftKey) {
            e.preventDefault();
            if (disabled) {
              return;
            }
            onSend?.(value ? value.toString() : "");
            updateValue("");
          }
        }
      }}
      className={[
        "flex w-full rounded-full border border-card-border bg-ui-white outline-0 focus:outline-0 px-3 py-2 text-sm placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 resize-none font-['Baloo_2'] font-medium text-xs text-dark-text leading-3",
        className,
      ]
        .filter(Boolean)
        .join(" ")
        .trim()}
    />
  );
});

ChatInput.displayName = "ChatInput";
