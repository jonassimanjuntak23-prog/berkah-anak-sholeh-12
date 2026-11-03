/**
 * Data structures for Physics questions, stimuli, options, and evaluation.
 */

export type QuestionType = 'multiple_choice' | 'essay';

export interface OptionItem {
  id: string; // original stable id
  text: string; // may contain LaTeX formulas like $...$
  isCorrect: boolean;
}

export interface MethodSolution {
  title: string;
  steps: {
    label: string; // e.g. "Diketahui", "Ditanyakan", "Rumus Dasar", "Perhitungan", "Kesimpulan"
    content: string; // Supports LaTeX formatted text
  }[];
  finalAnswer: string;
}

export interface QuestionData {
  id: string; // e.g. "pg-1", "esai-1"
  originalNumber: number;
  type: QuestionType;
  category: 'Listrik Dinamis' | 'Elektrostatika & Kapasitor' | 'Termodinamika & Teori Kinetik Gas';
  topic: string;
  storyContext: string;
  questionText: string;
  stimulusType?: 'image' | 'graph' | 'table' | 'circuit' | 'diagram' | 'none';
  stimulusTitle?: string;
  stimulusSvgType?: string;
  stimulusData?: Record<string, any>;
  tableData?: {
    headers: string[];
    rows: (string | number)[][];
    caption?: string;
  };
  options?: OptionItem[]; // For multiple choice
  essayRubric?: {
    criteria: string;
    maxPoints: number;
    description: string;
  }[];
  slowMethod: MethodSolution;
  fastMethod: MethodSolution;
  audioNarrationQuestion: string; // Natural teacher Indonesian TTS text
  audioNarrationExplanation: string; // Natural teacher Indonesian TTS text
  motivationQuote?: string;
}

export interface QuizSessionState {
  sessionId: string;
  mode: 'all' | 'multiple_choice' | 'essay';
  questions: QuestionData[];
  // Map of questionId -> selectedOptionId (for MC) or student essay string (for Essay)
  answers: Record<string, string>;
  flaggedQuestionIds: string[];
  currentQuestionIndex: number;
  isSubmitted: boolean;
  startTime: number;
  endTime?: number;
  essayScores?: Record<string, number>;
}
