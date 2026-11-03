import React from 'react';
import { QuestionData } from '../types/physics';
import MathRenderer from './MathRenderer';
import StimulusRenderer from './StimulusRenderer';
import VoiceNarrator from './VoiceNarrator';
import { Bookmark, ArrowLeft, ArrowRight, CheckCircle2, HelpCircle } from 'lucide-react';
import { BatikCornerOrnament } from './BatikDecorations';

interface QuestionCardProps {
  question: QuestionData;
  displayNumber: number;
  totalQuestions: number;
  selectedAnswer: string;
  isFlagged: boolean;
  onSelectOption: (optionId: string) => void;
  onEssayChange: (text: string) => void;
  onToggleFlag: () => void;
  onPrev: () => void;
  onNext: () => void;
  onSubmit: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  displayNumber,
  totalQuestions,
  selectedAnswer,
  isFlagged,
  onSelectOption,
  onEssayChange,
  onToggleFlag,
  onPrev,
  onNext,
  onSubmit,
  isFirst,
  isLast,
}) => {
  const mathSymbols = ['Ω', 'μ', 'ε', 'Δ', 'π', '√', '²', '³', '×', '÷', 'Σ', 'ρ', '°C'];

  const insertSymbol = (sym: string) => {
    onEssayChange((selectedAnswer || '') + sym);
  };

  return (
    <div className="relative bg-white rounded-2xl border border-amber-900/15 shadow-sm p-5 sm:p-8 overflow-hidden transition-all">
      {/* Subtle Batik Ornaments */}
      <BatikCornerOrnament position="top-left" size={42} className="opacity-40" />
      <BatikCornerOrnament position="top-right" size={42} className="opacity-40" />

      {/* Top Header Row */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-amber-900/10">
        <div className="flex items-center gap-2.5">
          <span className="w-8 h-8 rounded-full bg-amber-900 text-amber-50 flex items-center justify-center font-bold text-sm shadow-2xs font-mono">
            {displayNumber}
          </span>
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-900">
              <span className="capitalize">
                {question.type === 'multiple_choice' ? 'Pilihan Ganda' : 'Soal Esai'}
              </span>
              <span className="text-amber-400">·</span>
              <span className="text-stone-600 font-normal">{question.category}</span>
            </div>
            <span className="text-[11px] text-stone-500">{question.topic}</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Audio Narrator for question */}
          <VoiceNarrator
            textToSpeak={`${question.storyContext ? question.storyContext + '. ' : ''}${question.questionText}`}
            label="Baca Soal"
          />

          {/* Flag / Ragu-ragu button */}
          <button
            type="button"
            onClick={onToggleFlag}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
              isFlagged
                ? 'bg-amber-100 border-amber-500 text-amber-950 font-bold'
                : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isFlagged ? 'fill-amber-600 text-amber-700' : ''}`} />
            <span>{isFlagged ? 'Ragu-ragu' : 'Tandai'}</span>
          </button>
        </div>
      </div>

      {/* Story Context / Background */}
      {question.storyContext && (
        <div className="mt-5 text-sm sm:text-base text-stone-800 leading-relaxed font-sans">
          <MathRenderer content={question.storyContext} />
        </div>
      )}

      {/* Visual Stimulus (Circuit, Graph, Diagram, Table) */}
      <StimulusRenderer
        stimulusType={question.stimulusType}
        stimulusTitle={question.stimulusTitle}
        stimulusSvgType={question.stimulusSvgType}
        stimulusData={question.stimulusData}
        tableData={question.tableData}
      />

      {/* Question Text */}
      <div className="mt-4 text-sm sm:text-base text-stone-900 font-medium leading-relaxed font-sans bg-amber-50/40 p-4 rounded-xl border border-amber-200/60">
        <MathRenderer content={question.questionText} />
      </div>

      {/* Multiple Choice Options */}
      {question.type === 'multiple_choice' && question.options && (
        <div className="mt-6 space-y-3">
          {question.options.map((opt, idx) => {
            const letter = String.fromCharCode(65 + idx); // A, B, C, D, E
            const isSelected = selectedAnswer === opt.id;

            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => onSelectOption(opt.id)}
                className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all flex items-start gap-3.5 cursor-pointer select-none ${
                  isSelected
                    ? 'bg-amber-50 border-amber-600 ring-2 ring-amber-600/30 text-amber-950 shadow-xs'
                    : 'bg-white border-stone-200 hover:border-amber-400 hover:bg-amber-50/20 text-stone-800'
                }`}
              >
                <span
                  className={`w-7 h-7 shrink-0 rounded-lg flex items-center justify-center font-bold text-xs transition-colors font-mono ${
                    isSelected
                      ? 'bg-amber-800 text-amber-50 shadow-xs'
                      : 'bg-stone-100 text-stone-600 border border-stone-300'
                  }`}
                >
                  {letter}
                </span>
                <div className="text-xs sm:text-sm pt-0.5 leading-relaxed font-sans">
                  <MathRenderer content={opt.text} />
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* Essay Answer Area */}
      {question.type === 'essay' && (
        <div className="mt-6">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <label className="text-xs font-bold text-amber-950 flex items-center gap-1.5">
              <span>Lembar Jawaban Siswa & Penjabaran Matematis</span>
            </label>
            {/* Math symbol quick insert toolbar */}
            <div className="flex items-center gap-1 overflow-x-auto max-w-full py-1">
              <span className="text-[10px] text-stone-400 mr-1">Simbol:</span>
              {mathSymbols.map((sym) => (
                <button
                  key={sym}
                  type="button"
                  onClick={() => insertSymbol(sym)}
                  className="px-2 py-0.5 text-xs bg-amber-50 border border-amber-200 hover:bg-amber-100 rounded text-amber-900 font-mono transition-colors cursor-pointer"
                  title={`Sisipkan simbol ${sym}`}
                >
                  {sym}
                </button>
              ))}
            </div>
          </div>

          <textarea
            value={selectedAnswer || ''}
            onChange={(e) => onEssayChange(e.target.value)}
            rows={7}
            placeholder="Tuliskan langkah diketahui, ditanyakan, rumus, substitusi angka, dan kesimpulan akhir Anda di sini..."
            className="w-full p-4 rounded-xl border border-stone-300 focus:border-amber-700 focus:ring-2 focus:ring-amber-600/20 text-sm leading-relaxed font-mono bg-stone-50/50 resize-y"
          />

          <div className="mt-2 flex items-center justify-between text-xs text-stone-500">
            <span className="flex items-center gap-1 text-amber-800">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Pedoman rubrik dan pembahasan lengkap akan tampil setelah kumpul jawaban.</span>
            </span>
            <span className="font-mono">{(selectedAnswer || '').length} karakter</span>
          </div>
        </div>
      )}

      {/* Motivational Note */}
      {question.motivationQuote && (
        <div className="mt-6 p-3 bg-amber-50/60 rounded-xl border border-amber-200/50 text-xs text-amber-900/90 italic flex items-center gap-2">
          <span className="text-amber-600">✦</span>
          <span>{question.motivationQuote}</span>
        </div>
      )}

      {/* Navigation Controls Bar */}
      <div className="mt-8 pt-5 border-t border-amber-900/10 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={onPrev}
          disabled={isFirst}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${
            isFirst
              ? 'opacity-40 cursor-not-allowed border-stone-200 text-stone-400'
              : 'border-stone-300 text-stone-700 hover:bg-stone-50 hover:border-amber-600'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Sebelumnya</span>
        </button>

        <div className="text-xs text-stone-500 font-mono">
          {displayNumber} / {totalQuestions}
        </div>

        {!isLast ? (
          <button
            type="button"
            onClick={onNext}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-amber-900 hover:bg-amber-800 text-white shadow-xs transition-all cursor-pointer border border-amber-700"
          >
            <span>Selanjutnya</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={onSubmit}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-emerald-700 hover:bg-emerald-600 text-white shadow-sm transition-all cursor-pointer border border-emerald-600"
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>Kumpulkan Jawaban</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;
