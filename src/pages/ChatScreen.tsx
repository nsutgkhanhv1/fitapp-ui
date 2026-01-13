import Header from '../components/Header';
import ChatMessage from '../components/ChatMessage';
import { CommonButton } from '../components/common/CommonButton';
import IconButton from '../components/IconButton';
import { useStaggeredAppear } from '../hooks/useAnimations';

// Camera icon for the camera button
const CameraIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-full">
    <path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z" stroke="#4f6280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z" stroke="#4f6280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChatScreen = () => {
  const { getAnimationClass } = useStaggeredAppear(6);

  return (
    <div className={`w-full h-full bg-ui-yellow flex flex-col overflow-hidden`}>
      {/* Header */}
      <Header title="Chatbox" showBack />

      {/* Chat Messages Area */}
      <div className="flex-1 p-4 flex flex-col gap-2 overflow-auto">
        {/* Message from other user */}
        <div className={getAnimationClass(0)}>
          <ChatMessage
            message="User have good health today"
            owned={false}
          />
        </div>

        {/* Message from current user (owned) */}
        <div className={getAnimationClass(1)}>
          <ChatMessage
            message="User have good health today"
            owned={true}
          />
        </div>

        {/* Message from other user with image */}
        <div className={getAnimationClass(2)}>
          <ChatMessage
            message="User have good health today"
            owned={false}
            showImage={true}
          />
        </div>

        {/* Message from current user with image */}
        <div className={getAnimationClass(3)}>
          <ChatMessage
            message="User have good health today"
            owned={true}
            showImage={true}
          />
        </div>
      </div>

      {/* Bottom Input Bar */}
      <div className={`h-16 p-2.5 bg-ui-navy flex items-center gap-1 overflow-hidden ${getAnimationClass(4)}`}>
        {/* Text Input */}
        <div className="relative flex-1 h-9 bg-ui-white rounded-full border border-solid border-card-border">
          <div className="flex items-center w-full h-full px-3">
            <input
              type="text"
              placeholder="Type a messages here ..."
              className="flex-1 bg-transparent font-['Baloo_2'] font-medium text-xs text-text-muted leading-3 outline-none placeholder:text-text-muted"
            />
          </div>
          {/* Inset shadow for input feel */}
          <div className="absolute inset-0 pointer-events-none rounded-full shadow-[inset_0px_3px_1px_0px_rgba(183,133,90,0.25)]" />
        </div>

        {/* Send Button */}
        <CommonButton
          text="Send"
          className="h-10 px-4"
          disableDefaultPadding
          formButton
        />

        {/* Camera Button */}
        <IconButton
          icon={<CameraIcon />}
          className="size-9"
        />
      </div>
    </div>
  );
};

export default ChatScreen;
