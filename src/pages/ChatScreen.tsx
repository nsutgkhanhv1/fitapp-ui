import { useState } from 'react';
import Header from '../components/Header';
import { Convo, ConvoMessage } from '../components/convo/Convo';
import { useStaggeredAppear } from '../hooks/useAnimations';

const ChatScreen = () => {
  const { getAnimationClass } = useStaggeredAppear(2);

  // State to manage chat messages
  const [messages, setMessages] = useState<ConvoMessage[]>([
    {
      id: '1',
      content: 'User have good health today',
      owned: false,
    },
    {
      id: '2',
      content: 'User have good health today',
      owned: true,
    },
    {
      id: '3',
      content: 'User have good health today',
      owned: false,
      imageUrl: 'https://placehold.co/200x200',
    },
    {
      id: '4',
      content: 'User have good health today',
      owned: true,
      imageUrl: 'https://placehold.co/200x200',
    },
  ]);

  // Handle sending a new message
  const handleSend = (content: string, files?: string[]) => {
    const newMessage: ConvoMessage = {
      id: Date.now().toString(),
      content,
      owned: true,
      imageUrl: files?.[0], // Use first file as image if provided
    };
    setMessages(prev => [...prev, newMessage]);
  };

  return (
    <div className={`w-full h-full bg-ui-yellow flex flex-col overflow-hidden`}>
      {/* Header */}
      <Header title="Chatbox" showBack />

      {/* Convo Component - handles messages and input */}
      <div className={`flex-1 flex flex-col overflow-hidden ${getAnimationClass(0)}`}>
        <Convo
          messages={messages}
          onSend={handleSend}
          fileMode="single"
        />
      </div>
    </div>
  );
};

export default ChatScreen;
