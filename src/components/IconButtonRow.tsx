import { useState, type FC } from 'react';

interface IconButtonRowProps {
  onChatClick?: () => void;
  onHistoryClick?: () => void;
  onFoodLogClick?: () => void;
  onInventoryClick?: () => void;
  activeButtonId?: string;
  className?: string;
}

const buttons = [
  { id: 'chat', label: 'Chat', icon: "/chat-buble-icon.png" },
  { id: 'history', label: 'History', icon: "/clock-icon.png" },
  { id: 'foodlog', label: 'Food log', icon: "/food-log-icon.png" },
  { id: 'inventory', label: 'Inventory', icon: "/gift-icon.png" },
];

const IconButtonRow: FC<IconButtonRowProps> = ({
  onChatClick,
  onHistoryClick,
  onFoodLogClick,
  onInventoryClick,
  activeButtonId,
  className = "",
}) => {
  const handlers = [onChatClick, onHistoryClick, onFoodLogClick, onInventoryClick];
  const [pressedId, setPressedId] = useState<string | null>(null);

  const handleClick = (index: number) => {
    // Delay to allow press animation to be visible
    setTimeout(() => handlers[index]?.(), 75);
  };

  return (
    <div className={`w-full py-2.5 flex gap-[5px] ${className}`}>
      {buttons.map((button, index) => {
        const isPressed = pressedId === button.id;
        const isActive = activeButtonId === button.id;

        return (
          <button
            key={button.id}
            onClick={() => handleClick(index)}
            onMouseDown={() => setPressedId(button.id)}
            onMouseUp={() => setPressedId(null)}
            onMouseLeave={() => setPressedId(null)}
            onTouchStart={() => setPressedId(button.id)}
            onTouchEnd={() => setPressedId(null)}
            className={`flex-1 bg-ui-white rounded-lg flex flex-col items-center relative overflow-visible icon-button-animated ${isActive ? 'icon-button-active' : ''}`}
            style={{
              boxShadow: '0px 1.19px 2.39px 0px rgba(0,0,0,0.25), inset 0px -2.99px 0.6px 0px rgba(183,133,90,0.25)',
              outline: '0.6px solid #DAC39B',
              transform: isPressed ? 'translateY(2px) scale(0.96)' : 'translateY(0) scale(1)',
              transition: 'transform 100ms ease-out',
            }}
          >
            {/* Icon Container */}
            <div className="relative w-12 h-6">
              <img
                src={button.icon}
                alt={button.label}
                className="w-12 h-11 absolute left-1/2 -translate-x-1/2 -top-4 object-contain"
                style={{
                  transition: 'transform 100ms ease-out',
                  transform: isPressed ? 'scale(1.05)' : 'scale(1)',
                }}
              />
            </div>
            {/* Label */}
            <div className="w-full pt-[3px] pb-1.5 border-t border-stone-200">
              <span className="text-center block text-black text-xs font-bold font-['Baloo_2'] leading-4">
                {button.label}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default IconButtonRow;
