import { ReactElement, useState } from "react";
import { cn } from "@/lib/utils";
import { CommonButton } from "../common/CommonButton";
import ChatMessage from "../ChatMessage";
import IconButton from "../IconButton";
import { FileChooser } from "./FileChooser";

// Camera icon for the camera button
const CameraIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-full">
    <path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z" stroke="#4f6280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z" stroke="#4f6280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export interface ConvoMessage {
  id: string;
  content: string;
  owned: boolean;
  sender?: string;
  imageUrl?: string;
  quickReplies?: string[];
}

export type ConvoProps = {
  messages: ConvoMessage[];
  onSend?: (content: string, files?: string[]) => void;
  renderMessage?: (message: ConvoMessage) => ReactElement;
  fileMode?: "single" | "multiple";
  fileAccept?: string;
  disableInput?: boolean;
  isGenerating?: boolean;
  className?: string;
};

// Default message renderer using existing ChatMessage component
const defaultRenderMessage = (message: ConvoMessage) => {
  return (
    <ChatMessage
      message={message.content}
      owned={message.owned}
      showImage={!!message.imageUrl}
      imageUrl={message.imageUrl}
    />
  );
};

export const Convo = ({
  messages,
  disableInput = false,
  onSend,
  renderMessage = defaultRenderMessage,
  fileAccept = ".jpg, .png, .jpeg, .bmp, .gif, .webp, .tif, .tiff, .heic",
  fileMode,
  isGenerating,
  className,
}: ConvoProps) => {
  const [typingMessage, setTypingMessage] = useState("");
  const [files, setFiles] = useState<string[]>([]);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (disableInput) return;
    if (typingMessage.length === 0 && files.length === 0) return;

    onSend?.(typingMessage, files);
    setTypingMessage("");
    setFiles([]);
  };

  return (
    <div className={cn("h-full flex flex-col overflow-hidden w-full", className)}>
      {/* Chat Messages Area */}
      <div className="flex-1 p-4 flex flex-col gap-2 overflow-auto">
        {messages.map((msg) => (
          <div key={msg.id} className="w-full flex flex-col gap-3">
            {renderMessage(msg)}
            {msg.quickReplies && (
              <div className="flex gap-2 flex-col w-full max-w-[75%]">
                {msg.quickReplies.map((reply, i) => (
                  <CommonButton
                    key={i}
                    text={reply}
                    className="w-full"
                    onClick={() => onSend?.(reply)}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
        {isGenerating && (
          <div className="flex gap-1 items-center opacity-60">
            <span className="text-sm animate-pulse">Generating...</span>
          </div>
        )}
      </div>

      {/* File Preview */}
      {files.length > 0 && (
        <div className="w-full px-4 pb-2">
          <div className="flex flex-row gap-2 overflow-auto">
            {files.map((file, index) => (
              <div key={index} className="relative">
                <img src={file} className="w-20 h-20 object-cover rounded-lg" alt="" />
                <button
                  className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white rounded-full text-xs"
                  onClick={() => setFiles(prev => prev.filter((_, i) => i !== index))}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Input Bar - Matching existing ChatScreen UI */}
      <div className="h-16 p-2.5 bg-ui-navy flex items-center gap-1 overflow-hidden">
        {/* Text Input */}
        <div className="relative flex-1 h-9 bg-ui-white rounded-full border border-solid border-card-border">
          <div className="flex items-center w-full h-full px-3">
            <input
              type="text"
              placeholder="Type a messages here ..."
              className="flex-1 bg-transparent font-['Baloo_2'] font-medium text-xs text-text-muted leading-3 outline-none placeholder:text-text-muted"
              value={typingMessage}
              onChange={(e) => setTypingMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit();
                }
              }}
              disabled={disableInput}
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
          onClick={() => handleSubmit()}
        />

        {/* Camera/File Button */}
        {fileMode ? (
          <FileChooser
            addon={<IconButton icon={<CameraIcon />} className="size-9" />}
            accept={fileAccept}
            multiple={fileMode === "multiple"}
            onBase64Selected={(base64) => setFiles([base64])}
            onBase64FilesSelected={(base64Files) => setFiles(base64Files)}
          />
        ) : (
          <IconButton icon={<CameraIcon />} className="size-9" />
        )}
      </div>
    </div>
  );
};

export default Convo;
