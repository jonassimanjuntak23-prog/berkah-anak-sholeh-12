import { QuestionData, OptionItem } from '../types/physics';

/**
 * Fisher-Yates array shuffler
 */
export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Shuffles questions and their multiple choice options.
 * Keeps correct answer pointers perfectly intact while assigning clean sequential display numbering.
 */
export function prepareShuffledSession(
  sourceQuestions: QuestionData[],
  mode: 'all' | 'multiple_choice' | 'essay'
): QuestionData[] {
  let filtered = [...sourceQuestions];

  if (mode === 'multiple_choice') {
    filtered = filtered.filter((q) => q.type === 'multiple_choice');
  } else if (mode === 'essay') {
    filtered = filtered.filter((q) => q.type === 'essay');
  }

  // Shuffle questions
  const shuffledQuestions = shuffleArray(filtered);

  // For each question, if it's multiple choice, shuffle options while maintaining the correct answer
  return shuffledQuestions.map((q) => {
    if (q.type !== 'multiple_choice' || !q.options) {
      return { ...q };
    }

    const shuffledOptions: OptionItem[] = shuffleArray(q.options);
    return {
      ...q,
      options: shuffledOptions,
    };
  });
}
