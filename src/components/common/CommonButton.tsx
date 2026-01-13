import { ReactElement } from "react";

export type CommonButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  text?: string;
  secondaryStyle?: boolean;
  addon?: ReactElement;
  addonRight?: boolean;
  singleLine?: boolean;
  customDisableClass?: string;
  disableDefaultPadding?: boolean;
  disableDefaultColor?: boolean;
  disableDefaultText?: boolean;
  formButton?: boolean;
  specialStyle?: boolean;
};

export const CommonButton = ({
  text,
  secondaryStyle,
  specialStyle,
  addon,
  addonRight,
  customDisableClass,
  singleLine,
  disableDefaultPadding,
  disableDefaultColor,
  disableDefaultText,
  formButton,
  onClick,
  ...props
}: CommonButtonProps) => {
  const useGradientStyle = !disableDefaultColor && !secondaryStyle && !specialStyle;

  return (
    <button
      onClick={
        formButton
          ? (e) => {
              // Delay to allow press animation to be visible
              setTimeout(() => onClick?.(e), 75);
            }
          : (e) => {
              e.stopPropagation();
              e.preventDefault();
              // Delay to allow press animation to be visible
              setTimeout(() => onClick?.(e), 75);
            }
      }
      onMouseDown={
        formButton
          ? props.onMouseDown
          : (e) => {
              e.stopPropagation();
              e.preventDefault();
              props.onMouseDown && props.onMouseDown(e);
            }
      }
      {...props}
      className={[
        "group relative flex items-center justify-center overflow-hidden",
        disableDefaultPadding ? "" : "py-2 px-6",
        "rounded-full transition-all duration-100",
        "active:scale-95 active:translate-y-[2px]",
        "shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] active:shadow-none",
        customDisableClass || "disabled:opacity-50",
        props.className,
      ]
        .join(" ")
        .trim()}
      style={{ transform: 'translateZ(0)', ...props.style }}
    >
      {/* Gradient background layer */}
      {useGradientStyle && (
        <>
          <div className="
            absolute inset-0 rounded-full transition-shadow duration-100
            bg-gradient-to-r from-button-start to-button-end
            shadow-[inset_0px_2px_1px_0px_rgba(255,255,255,0.4),inset_0px_-3px_1px_0px_rgba(0,0,0,0.2)]
            group-active:shadow-none
          " />
          <div className='h-6 w-full absolute top-[-5px] flex items-center justify-center overflow-hidden'>
            <div className="w-[80%] h-[40%] bg-white/10 blur-[1px] rounded-full pointer-events-none" />
          </div>
        </>
      )}

      {/* Content layer */}
      <div className="relative z-10 flex items-center justify-center gap-1">
        {addon && !addonRight && (
          <div className="shrink-0 flex items-center justify-center">
            {addon}
          </div>
        )}
        {text !== undefined && (
          <span
            className={[
              disableDefaultText ? "" : "font-['Baloo_2'] font-extrabold text-lg text-white text-center",
              singleLine ? "line-clamp-1" : "",
            ].join(" ")}
            style={disableDefaultText ? undefined : { textShadow: '0px 2px 2px rgba(0,0,0,0.4)' }}
          >
            {text}
          </span>
        )}
        {addon && addonRight && (
          <div className="shrink-0 flex items-center justify-center">
            {addon}
          </div>
        )}
      </div>
    </button>
  );
};

export default CommonButton;
