export type Category = "arm-motion" | "step";

export type Difficulty = "easy" | "medium" | "hard";

export interface Motion {
  id: string;
  slug: string;
  nameJa: string;
  nameEn: string;
  category: Category;
  difficulty: Difficulty;
  description: string;
  tips: string[];
  commonMistakes: string[];
  practiceSteps: string[];
  youtubeVideoId?: string;
}

export interface ChecklistState {
  [motionId: string]: boolean;
}

export interface QuizQuestion {
  correctMotion: Motion;
  choices: Motion[];
}

export interface QuizState {
  questions: QuizQuestion[];
  currentIndex: number;
  score: number;
  isFinished: boolean;
}
