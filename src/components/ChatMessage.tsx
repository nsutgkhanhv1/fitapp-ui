import type { FC, ReactNode } from 'react';
import avatarImage from '../assets/4bd713e163291403becacdcca0797fbd05a0cf77.png';
import chatImage from '../assets/b511bfa6bd98e141259ea1dbcf08470b7675d924.png';

interface ChatMessageProps {
  message?: string;
  owned?: boolean;
  avatar?: ReactNode;
  avatarUrl?: string;
  imageUrl?: string;
  showImage?: boolean;
  className?: string;
}

const ChatMessage: FC<ChatMessageProps> = ({
  message = "User have good health today",
  owned = false,
  avatar,
  avatarUrl = avatarImage,
  imageUrl = chatImage,
  showImage = false,
  className = "",
}) => {
  // Owned messages (blue, right-aligned)
  if (owned) {
    return (
      <div className={`flex flex-col items-end justify-center gap-2 ${className}`}>
        {/* Text message bubble */}
        <div className="relative flex items-center max-w-56 min-w-40 px-2 py-2.5 bg-chat-owned border border-solid border-card-border rounded-2xl shadow-card">
          <p className="flex-1 font-['Baloo_2'] font-medium text-xs text-dark-text leading-3">
            {message}
          </p>
          {/* Inner shadow */}
          <div className="absolute -inset-px pointer-events-none rounded-2xl shadow-card-inset" />
        </div>
        
        {/* Image if present */}
        {showImage && (
          <div className="relative w-52 bg-chat-owned border border-solid border-card-border rounded-2xl">
            <div className="p-3">
              <div className="relative aspect-[312/169] w-full rounded-2xl overflow-hidden">
                <img 
                  alt="" 
                  src={imageUrl} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Inner shadow */}
            <div className="absolute inset-0 pointer-events-none rounded-2xl shadow-card-inset" />
          </div>
        )}
      </div>
    );
  }
  
  // Unowned messages (cream, left-aligned with avatar)
  return (
    <div className={`flex gap-1 items-start ${className}`}>
      {/* Avatar - simplified with rounded-full */}
      {avatar ? (
        <div className="shrink-0 size-11">
          {avatar}
        </div>
      ) : (
        <img 
          alt="" 
          src={avatarUrl} 
          className="shrink-0 size-11 rounded-full border border-solid border-white object-cover"
        />
      )}
      
      <div className="flex flex-col gap-2">
        {/* Text message bubble */}
        <div className="relative flex items-center max-w-56 min-w-40 gap-0.5 px-2 py-2.5 bg-ui-white border border-solid border-card-border rounded-2xl shadow-card">
          <span className="shrink-0 font-['Baloo_2'] font-bold text-xs text-dark-text leading-3 w-7">
            User:
          </span>
          <p className="flex-1 font-['Baloo_2'] font-medium text-xs text-dark-text leading-3">
            {message}
          </p>
          {/* Inner shadow */}
          <div className="absolute -inset-px pointer-events-none rounded-2xl shadow-card-inset" />
        </div>
        
        {/* Image if present */}
        {showImage && (
          <div className="relative w-full bg-ui-white border border-solid border-card-border rounded-2xl">
            <div className="p-3 max-w-56 min-w-40">
              <div className="relative aspect-[312/169] w-full rounded-2xl overflow-hidden">
                <img 
                  alt="" 
                  src={imageUrl} 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Inner shadow */}
            <div className="absolute inset-0 pointer-events-none rounded-2xl shadow-card-inset" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
