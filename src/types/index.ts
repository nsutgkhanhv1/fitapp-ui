// Recording state used in CreateWorkoutSession.tsx and RecordScreen.tsx
export type RecordingState = 'idle' | 'recording' | 'processing' | 'completed';

// Input mode used in CreateWorkoutSession.tsx
export type InputMode = 'none' | 'recording' | 'typing';

// Question-related types from RecordScreen.tsx
export interface Question {
  question: string;
  example: string;
  imageUrl: string;
  imageFlipped: boolean;
}

// Message types from Convo.tsx
export interface ConvoMessage {
  id: string;
  content: string;
  owned: boolean;
  sender?: string;
  imageUrl?: string;
  quickReplies?: string[];
}
