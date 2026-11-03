import React, { useState } from 'react';
import { QuestionData } from '../types/physics';
import MathRenderer from './MathRenderer';
import StimulusRenderer from './StimulusRenderer';
import VoiceNarrator from './VoiceNarrator';
import {
  Award,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCw,
  Printer,
  ChevronDown,
  ChevronUp,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import { BatikCornerOrnament } from './BatikDecorations';

interface QuizReviewProps {
  questions: QuestionData[];
  answers: Record<string, string>;
  essayScores: Record<string, number>;
  onUpdateEssayScore: (questionId: string, score: number) => void;
  onRestartWithNewShuffle: () => void;
}

export const QuizReview: React.FC<QuizReviewProps> = ({
  questions,
  answers,
  essayScores,
  onUpdateEssayScore,
  onRestartWithNewShuffle,
}) => {
  const [activeMethodTab, setActiveMethodTab] = useState<Record<string, 'slow' | 'fast'>>({});
  const [expandedSolutions, setExpandedSolutions] = useState<Record<string, boolean>>({});

  // Multiple choice scoring
  const mcQuestions = questions.filter((q) => q.type === 'multiple_choice');
  const essayQuestions = questions.filter((q) => q.type === 'essay');

  let mcCorrect = 0;
  let mcWrong = 0;
  let mcUnanswered = 0;

  mcQuestions.forEach((q) => {
    const selected = answers[q.id];
    if (!selected || selected.trim() === '') {
      mcUnanswered++;
    } else {
      const correctOpt = q.options?.find((o) => o.isCorrect);
      if (correctOpt && selected === correctOpt.id) {
        mcCorrect++;
      } else {
        mcWrong++;
      }
    }
  });

  const mcScorePercent =
    mcQuestions.length > 0 ? Math.round((mcCorrect / mcQuestions.length) * 100) : 0;

  const totalEssayPointsMax = essayQuestions.length * 100;
  const totalEssayPointsEarned = essayQuestions.reduce((acc, q) => {
    return acc + (essayScores[q.id] || 0);
  }, 0);

  const toggleSolution = (qId: string) => {
    setExpandedSolutions((prev) => ({
      ...prev,
      [qId]: prev[qId] !== undefined ? !prev[qId] : false, // Default is open
    }));
  };

  const setMethodTab = (qId: string, tab: 'slow' | 'fast') => {
    setActiveMethodTab((prev) => ({ ...prev, [qId]: tab }));
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-16">
      {/* Top Score Summary Banner */}
      <div className="relative bg-white rounded-3xl border border-amber-900/15 shadow-sm p-6 sm:p-10 overflow-hidden">
        <BatikCornerOrnament position="top-left" size={60} className="opacity-30" />
        <BatikCornerOrnament position="bottom-right" size={60} className="opacity-30" />

        <div className="text-center max-w-2xl mx-auto relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-amber-100/80 text-amber-900 border border-amber-300 shadow-xs mb-4">
            <Award className="w-8 h-8" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-amber-950 font-serif tracking-tight">
            Hasil Evaluasi Belajar Fisika
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-stone-600">
            BERKAH ANAK SOLEH KELAS XII · Sesi Selesai
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-amber-900">
                Skor Objektif (PG)
              </span>
              <span className="text-2xl sm:text-3xl font-black text-amber-950 font-mono">
                {mcScorePercent}
              </span>
              <span className="block text-[10px] text-stone-500">Skala 0 - 100</span>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-emerald-900">
                Jawaban Benar
              </span>
              <span className="text-2xl sm:text-3xl font-black text-emerald-700 font-mono">
                {mcCorrect}
              </span>
              <span className="block text-[10px] text-emerald-600">dari {mcQuestions.length} Soal PG</span>
            </div>

            <div className="bg-rose-50 border border-rose-200 rounded-2xl p-4">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-rose-900">
                Salah / Belum Tepat
              </span>
              <span className="text-2xl sm:text-3xl font-black text-rose-700 font-mono">
                {mcWrong}
              </span>
              <span className="block text-[10px] text-rose-600">Perlu Penguatan</span>
            </div>

            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-stone-700">
                Tidak Dijawab
              </span>
              <span className="text-2xl sm:text-3xl font-black text-stone-700 font-mono">
                {mcUnanswered}
              </span>
              <span className="block text-[10px] text-stone-500">Soal Kosong</span>
            </div>
          </div>

          {/* Essay summary tally if essay exists */}
          {essayQuestions.length > 0 && (
            <div className="p-3.5 bg-amber-50/50 border border-amber-200 rounded-xl text-xs text-amber-950 mb-6 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-700" />
                <span className="font-semibold">Penilaian Mandiri Soal Esai:</span>
                <span>Gunakan rubrik penskoran di bawah untuk mengevaluasi jawaban Anda.</span>
              </div>
              <span className="font-mono font-bold text-amber-900">
                {totalEssayPointsEarned} / {totalEssayPointsMax} Poin
              </span>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={onRestartWithNewShuffle}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-900 hover:bg-amber-800 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors cursor-pointer border border-amber-700"
            >
              <RotateCw className="w-4 h-4" />
              <span>Ulangi Latihan (Pengacakan Baru)</span>
            </button>
            <button
              type="button"
              onClick={handlePrint}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-stone-50 text-stone-700 font-bold text-xs sm:text-sm border border-stone-300 shadow-2xs transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Cetak Hasil Evaluasi</span>
            </button>
          </div>
        </div>
      </div>

      {/* Comprehensive Solution Review List */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h3 className="text-lg sm:text-xl font-bold text-amber-950 font-serif">
            Pembahasan Lengkap & Kunci Jawaban
          </h3>
          <span className="text-xs text-stone-500">
            Dilengkapi Metode Lengkap, Metode Cepat & Narator Suara Guru
          </span>
        </div>

        {questions.map((q, idx) => {
          const currentMethod = activeMethodTab[q.id] || 'slow';
          const isExpanded = expandedSolutions[q.id] !== false; // Default expanded

          const selectedId = answers[q.id];
          const correctOpt = q.options?.find((o) => o.isCorrect);
          const isCorrect = q.type === 'multiple_choice' && selectedId === correctOpt?.id;
          const isAnswered = selectedId !== undefined && selectedId.trim() !== '';

          return (
            <div
              key={q.id}
              className="bg-white rounded-2xl border border-amber-900/15 shadow-2xs overflow-hidden transition-all"
            >
              {/* Question Header in Review */}
              <div className="p-4 sm:p-5 border-b border-amber-900/10 flex flex-wrap items-center justify-between gap-3 bg-stone-50/50">
                <div className="flex items-center gap-3">
                  <span
                    className={`w-7 h-7 rounded-lg font-bold text-xs flex items-center justify-center font-mono ${
                      q.type === 'essay'
                        ? 'bg-sky-100 text-sky-900 border border-sky-300'
                        : isCorrect
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : isAnswered
                        ? 'bg-rose-100 text-rose-800 border border-rose-300'
                        : 'bg-stone-200 text-stone-600'
                    }`}
                  >
                    {idx + 1}
                  </span>
                  <div>
                    <span className="text-xs font-bold text-stone-800 mr-2">
                      {q.type === 'multiple_choice' ? 'Pilihan Ganda' : 'Soal Esai'}
                    </span>
                    <span className="text-xs text-stone-500">· {q.topic}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {/* Status badge */}
                  {q.type === 'multiple_choice' && (
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold ${
                        isCorrect
                          ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                          : isAnswered
                          ? 'bg-rose-50 text-rose-800 border border-rose-200'
                          : 'bg-stone-100 text-stone-600 border border-stone-200'
                      }`}
                    >
                      {isCorrect ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Benar</span>
                        </>
                      ) : isAnswered ? (
                        <>
                          <XCircle className="w-3.5 h-3.5 text-rose-600" />
                          <span>Kurang Tepat</span>
                        </>
                      ) : (
                        <span>Tidak Dijawab</span>
                      )}
                    </span>
                  )}

                  {/* Audio Narrator for Pembahasan */}
                  <VoiceNarrator
                    textToSpeak={q.audioNarrationExplanation}
                    label="Narator Guru"
                    teacherMode
                  />

                  {/* Expand / Collapse toggle */}
                  <button
                    type="button"
                    onClick={() => toggleSolution(q.id)}
                    className="p-1 text-stone-500 hover:text-stone-800 cursor-pointer"
                    title={isExpanded ? 'Sembunyikan' : 'Buka Pembahasan'}
                  >
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Collapsible Content */}
              {isExpanded && (
                <div className="p-5 sm:p-7 space-y-6">
                  {/* Story Context & Question */}
                  {q.storyContext && (
                    <div className="text-xs sm:text-sm text-stone-700 leading-relaxed font-sans">
                      <MathRenderer content={q.storyContext} />
                    </div>
                  )}

                  <StimulusRenderer
                    stimulusType={q.stimulusType}
                    stimulusTitle={q.stimulusTitle}
                    stimulusSvgType={q.stimulusSvgType}
                    stimulusData={q.stimulusData}
                    tableData={q.tableData}
                  />

                  <div className="text-xs sm:text-sm text-stone-900 font-medium bg-amber-50/30 p-3.5 rounded-xl border border-amber-200/50">
                    <MathRenderer content={q.questionText} />
                  </div>

                  {/* Multiple Choice Answers Comparison */}
                  {q.type === 'multiple_choice' && q.options && (
                    <div className="space-y-2">
                      <div className="text-xs font-bold text-stone-600 mb-1">
                        Pilihan Jawaban & Verifikasi Kunci:
                      </div>
                      {q.options.map((opt, oIdx) => {
                        const letter = String.fromCharCode(65 + oIdx);
                        const isChosen = selectedId === opt.id;
                        const isCorrectOption = opt.isCorrect;

                        return (
                          <div
                            key={opt.id}
                            className={`p-3 rounded-xl border text-xs flex items-start gap-3 ${
                              isCorrectOption
                                ? 'bg-emerald-50 border-emerald-400 font-semibold text-emerald-950'
                                : isChosen
                                ? 'bg-rose-50 border-rose-300 text-rose-950'
                                : 'bg-stone-50/50 border-stone-200 text-stone-600'
                            }`}
                          >
                            <span
                              className={`w-6 h-6 rounded flex items-center justify-center font-bold text-xs shrink-0 font-mono ${
                                isCorrectOption
                                  ? 'bg-emerald-700 text-white'
                                  : isChosen
                                  ? 'bg-rose-600 text-white'
                                  : 'bg-stone-200 text-stone-600'
                              }`}
                            >
                              {letter}
                            </span>
                            <div className="flex-1 pt-0.5">
                              <MathRenderer content={opt.text} />
                            </div>
                            {isCorrectOption && (
                              <span className="text-[10px] uppercase font-bold text-emerald-800 bg-emerald-200/70 px-2 py-0.5 rounded">
                                Kunci Benar
                              </span>
                            )}
                            {isChosen && !isCorrectOption && (
                              <span className="text-[10px] uppercase font-bold text-rose-700 bg-rose-200/70 px-2 py-0.5 rounded">
                                Jawaban Anda
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Student Essay Response & Interactive Rubric */}
                  {q.type === 'essay' && (
                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-stone-50 border border-stone-200">
                        <span className="block text-xs font-bold text-stone-700 mb-1">
                          Jawaban yang Anda Tuliskan:
                        </span>
                        <div className="text-xs font-mono text-stone-800 whitespace-pre-wrap leading-relaxed">
                          {selectedId && selectedId.trim() !== '' ? (
                            selectedId
                          ) : (
                            <span className="text-stone-400 italic">Tidak ada jawaban ditulis.</span>
                          )}
                        </div>
                      </div>

                      {/* Interactive Rubric */}
                      {q.essayRubric && (
                        <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-bold text-amber-950">
                              Rubrik Penilaian & Penilaian Mandiri:
                            </span>
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-amber-900">Beri Nilai Diri (0-100):</span>
                              <input
                                type="number"
                                min="0"
                                max="100"
                                value={essayScores[q.id] || 0}
                                onChange={(e) =>
                                  onUpdateEssayScore(
                                    q.id,
                                    Math.min(100, Math.max(0, parseInt(e.target.value) || 0))
                                  )
                                }
                                className="w-16 px-2 py-1 bg-white border border-amber-300 rounded text-xs font-mono font-bold text-center"
                              />
                            </div>
                          </div>

                          <div className="space-y-2">
                            {q.essayRubric.map((r, rIdx) => (
                              <div
                                key={rIdx}
                                className="text-xs bg-white p-2.5 rounded-lg border border-amber-100 text-stone-700 flex justify-between gap-3"
                              >
                                <div>
                                  <span className="font-bold text-amber-950">{r.criteria}: </span>
                                  <span>{r.description}</span>
                                </div>
                                <span className="font-mono font-bold text-amber-800 shrink-0">
                                  Maks {r.maxPoints} poin
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Two Methods Solution Tabs */}
                  <div className="mt-5 pt-5 border-t border-amber-900/10">
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-bold text-amber-950 flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-amber-600" />
                        <span>Dua Metode Pembahasan Matematis:</span>
                      </span>

                      {/* Method Toggle Buttons */}
                      <div className="flex items-center gap-1 p-1 bg-amber-100/60 rounded-lg">
                        <button
                          type="button"
                          onClick={() => setMethodTab(q.id, 'slow')}
                          className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                            currentMethod === 'slow'
                              ? 'bg-white text-amber-950 shadow-2xs font-bold'
                              : 'text-amber-900 hover:text-amber-950'
                          }`}
                        >
                          🎓 Metode Lengkap (Cara Lambat)
                        </button>
                        <button
                          type="button"
                          onClick={() => setMethodTab(q.id, 'fast')}
                          className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                            currentMethod === 'fast'
                              ? 'bg-white text-amber-950 shadow-2xs font-bold'
                              : 'text-amber-900 hover:text-amber-950'
                          }`}
                        >
                          ⚡ Metode Cepat (Trik Cerdas)
                        </button>
                      </div>
                    </div>

                    {/* Active Method Solution Content */}
                    {currentMethod === 'slow' ? (
                      <div className="p-4 sm:p-5 rounded-xl bg-amber-50/40 border border-amber-200/80 space-y-3 text-xs sm:text-sm">
                        <div className="font-bold text-amber-900 border-b border-amber-200/60 pb-2 flex items-center justify-between">
                          <span>{q.slowMethod.title}</span>
                          <span className="font-mono text-emerald-800 bg-emerald-100/60 px-2 py-0.5 rounded text-xs">
                            Jawaban Akhir: {q.slowMethod.finalAnswer}
                          </span>
                        </div>
                        {q.slowMethod.steps.map((st, sIdx) => (
                          <div key={sIdx} className="space-y-1">
                            <span className="font-bold text-amber-950 block text-xs">
                              {st.label}:
                            </span>
                            <div className="text-stone-800 leading-relaxed font-sans pl-2 border-l-2 border-amber-300">
                              <MathRenderer content={st.content} />
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-4 sm:p-5 rounded-xl bg-amber-50/40 border border-amber-200/80 space-y-3 text-xs sm:text-sm">
                        <div className="font-bold text-amber-900 border-b border-amber-200/60 pb-2 flex items-center justify-between">
                          <span>{q.fastMethod.title}</span>
                          <span className="font-mono text-emerald-800 bg-emerald-100/60 px-2 py-0.5 rounded text-xs">
                            Kunci Cepat: {q.fastMethod.finalAnswer}
                          </span>
                        </div>
                        {q.fastMethod.steps.map((st, sIdx) => (
                          <div key={sIdx} className="space-y-1">
                            <span className="font-bold text-amber-950 block text-xs">
                              {st.label}:
                            </span>
                            <div className="text-stone-800 leading-relaxed font-sans pl-2 border-l-2 border-amber-500">
                              <MathRenderer content={st.content} />
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuizReview;
