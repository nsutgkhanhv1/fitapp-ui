import type { FC } from 'react';


interface IconButtonRowProps {
  onChatClick?: () => void;
  onHistoryClick?: () => void;
  onFoodLogClick?: () => void;
  onInventoryClick?: () => void;
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
  className = "",
}) => {
  const handlers = [onChatClick, onHistoryClick, onFoodLogClick, onInventoryClick];

  return (
    <div className={`w-full py-2.5 flex gap-[5px] ${className}`}>
      {buttons.map((button, index) => (
        <button
          key={button.id}
          onClick={handlers[index]}
          className="flex-1 bg-ui-white rounded-lg flex flex-col items-center relative overflow-visible"
          style={{
            boxShadow: '0px 1.19px 2.39px 0px rgba(0,0,0,0.25), inset 0px -2.99px 0.6px 0px rgba(183,133,90,0.25)',
            outline: '0.6px solid #DAC39B',
          }}
        >
          {/* Icon Container */}
          <div className="relative w-12 h-6">
            <img
              src={button.icon}
              alt={button.label}
              className="w-12 h-11 absolute left-1/2 -translate-x-1/2 -top-4 object-contain"
            />
          </div>
          {/* Label */}
          <div className="w-full pt-[3px] pb-1.5 border-t border-stone-200">
            <span className="text-center block text-black text-xs font-bold font-['Baloo_2'] leading-4">
              {button.label}
            </span>
          </div>
        </button>
      ))}
    </div>
  );
};

export default IconButtonRow;
