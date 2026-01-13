import type { FC } from 'react';

interface ChatBubbleProps {
  message?: string;
  className?: string;
}

const ChatBubble: FC<ChatBubbleProps> = ({
  message = "Description 02: Lorem Ipsum is simply dummy text of the printing",
  className = "",
}) => {
  return (
    <div 
      className={`relative flex items-center justify-center p-3 bg-ui-white border border-solid border-[#d7bd95] rounded-full shadow-card ${className}`}
    >
      <p className="font-['Baloo_2'] font-extrabold text-sm text-text-muted text-center leading-4">
        {message}
      </p>
      
      {/* Inner shadow */}
      <div className="absolute inset-0 pointer-events-none rounded-full shadow-card-inset" />
    </div>
  );
};

export default ChatBubble;
