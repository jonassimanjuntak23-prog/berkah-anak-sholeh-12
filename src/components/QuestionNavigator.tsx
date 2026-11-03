import React, { useState } from 'react';
import { QuestionData } from '../types/physics';
import { CheckCircle2, Bookmark, HelpCircle } from 'lucide-react';

interface QuestionNavigatorProps {
  questions: QuestionData[];
  currentIndex: number;
  answers: Record<string, string>;
  flaggedQuestionIds: string[];
  onSelectQuestion: (index: number) => void;
  onSubmit: () => void;
}

export const QuestionNavigator: React.FC<QuestionNavigatorProps> = ({
  questions,
  currentIndex,
  answers,
  flaggedQuestionIds,
  onSelectQuestion,
  onSubmit,
}) => {
  const [filter, setFilter] = useState<'all' | 'unanswered' | 'flagged'>('all');

  const answeredCount = questions.filter((q) => {
    const val = answers[q.id];
    return val !== undefined && val.trim() !== '';
  }).length;

  const flaggedCount = flaggedQuestionIds.length;
  const unansweredCount = questions.length - answeredCount;

  const filteredQuestions = questions.map((q, idx) => ({ q, originalIdx: idx })).filter(({ q }) => {
    const isAnswered = answers[q.id] !== undefined && answers[q.id].trim() !== '';
    const isFlagged = flaggedQuestionIds.includes(q.id);

    if (filter === 'unanswered') return !isAnswered;
    if (filter === 'flagged') return isFlagged;
    return true;
  });

  return (
    <div className="bg-white rounded-2xl border border-amber-900/15 shadow-sm p-5">
      <div className="flex items-center justify-between pb-3 border-b border-amber-900/10">
        <h3 className="text-sm font-bold text-amber-950 font-serif">
          Navigasi Nomor Soal
        </h3>
        <span className="text-xs text-stone-500 font-mono">
          {answeredCount}/{questions.length} Selesai
        </span>
      </div>

      {/* Progress Bar */}
      <div className="my-3">
        <div className="w-full h-2 bg-stone-100 rounded-full overflow-hidden border border-stone-200">
          <div
            className="h-full bg-amber-800 transition-all duration-300"
            style={{ width: `${(answeredCount / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Summary counters */}
      <div className="grid grid-cols-3 gap-2 text-center text-[11px] my-3">
        <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-900">
          <span className="block font-bold text-sm font-mono">{answeredCount}</span>
          <span>Terjawab</span>
        </div>
        <div className="p-2 rounded-lg bg-amber-50 border border-amber-200 text-amber-900">
          <span className="block font-bold text-sm font-mono">{flaggedCount}</span>
          <span>Ragu-ragu</span>
        </div>
        <div className="p-2 rounded-lg bg-stone-50 border border-stone-200 text-stone-700">
          <span className="block font-bold text-sm font-mono">{unansweredCount}</span>
          <span>Kosong</span>
        </div>
      </div>

      {/* Interactive Filter Tabs */}
      <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-lg my-3 text-[11px]">
        <button
          type="button"
          onClick={() => setFilter('all')}
          className={`flex-1 py-1 rounded-md font-medium transition-colors cursor-pointer ${
            filter === 'all'
              ? 'bg-white text-amber-950 font-bold shadow-2xs'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          Semua ({questions.length})
        </button>
        <button
          type="button"
          onClick={() => setFilter('unanswered')}
          className={`flex-1 py-1 rounded-md font-medium transition-colors cursor-pointer ${
            filter === 'unanswered'
              ? 'bg-white text-amber-950 font-bold shadow-2xs'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          Kosong ({unansweredCount})
        </button>
        <button
          type="button"
          onClick={() => setFilter('flagged')}
          className={`flex-1 py-1 rounded-md font-medium transition-colors cursor-pointer ${
            filter === 'flagged'
              ? 'bg-white text-amber-950 font-bold shadow-2xs'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          Ragu ({flaggedCount})
        </button>
      </div>

      {/* Grid of Number Buttons */}
      <div className="grid grid-cols-5 gap-2 max-h-72 overflow-y-auto p-1">
        {filteredQuestions.map(({ q, originalIdx }) => {
          const isCurrent = currentIndex === originalIdx;
          const isAnswered = answers[q.id] !== undefined && answers[q.id].trim() !== '';
          const isFlagged = flaggedQuestionIds.includes(q.id);

          return (
            <button
              key={q.id}
              type="button"
              onClick={() => onSelectQuestion(originalIdx)}
              className={`relative h-10 rounded-xl text-xs font-bold transition-all flex flex-col items-center justify-center cursor-pointer font-mono ${
                isCurrent
                  ? 'ring-2 ring-amber-700 ring-offset-2 scale-105 z-10'
                  : ''
              } ${
                isAnswered
                  ? 'bg-amber-900 text-amber-50 shadow-xs hover:bg-amber-800'
                  : isFlagged
                  ? 'bg-amber-100 text-amber-950 border border-amber-400 hover:bg-amber-200'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-200'
              }`}
            >
              <span>{originalIdx + 1}</span>
              {isFlagged && (
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-500 rounded-full border border-white" />
              )}
            </button>
          );
        })}
      </div>

      {/* Submit Button */}
      <div className="mt-5 pt-4 border-t border-amber-900/10">
        <button
          type="button"
          onClick={onSubmit}
          className="w-full py-3 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition-colors cursor-pointer border border-emerald-600"
        >
          <CheckCircle2 className="w-4 h-4" />
          <span>Kumpulkan Jawaban</span>
        </button>
      </div>
    </div>
  );
};

export default QuestionNavigator;
