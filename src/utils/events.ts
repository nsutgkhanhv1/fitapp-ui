import { EventEmitter } from "events";
import type TypedEmitter from "typed-emitter";

type MessageEvents = {
  triggerPWAPrompt: () => void;
};
export const emitter = new EventEmitter() as TypedEmitter<MessageEvents>;
