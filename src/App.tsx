import React, { useState, useEffect } from 'react';
import { PHYSICS_QUESTIONS } from './data/physicsQuestions';
import { QuestionData } from './types/physics';
import { prepareShuffledSession } from './utils/shuffle';
import Navbar from './components/Navbar';
import QuestionCard from './components/QuestionCard';
import QuestionNavigator from './components/QuestionNavigator';
import QuizReview from './components/QuizReview';
import FormulaQuickSheet from './components/FormulaQuickSheet';
import {
  BatikKawungPattern,
  BatikCornerOrnament,
  BatikParangBorder,
  MegaMendungCloud,
} from './components/BatikDecorations';
import {
  Play,
  RotateCw,
  Sparkles,
  BookOpen,
  CheckCircle2,
  Clock,
  HelpCircle,
  Award,
} from 'lucide-react';

export function App() {
  // Session State
  const [mode, setMode] = useState<'all' | 'multiple_choice' | 'essay'>('all');
  const [questions, setQuestions] = useState<QuestionData[]>([]);
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [flaggedIds, setFlaggedIds] = useState<string[]>([]);
  const [isQuizActive, setIsQuizActive] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [essayScores, setEssayScores] = useState<Record<string, number>>({});
  const [isFormulaOpen, setIsFormulaOpen] = useState<boolean>(false);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);

  // Timer effect
  useEffect(() => {
    let interval: any = null;
    if (isQuizActive && !isSubmitted) {
      interval = setInterval(() => {
        setElapsedSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isQuizActive, isSubmitted]);

  // Start a new randomized practice session
  const startNewSession = (selectedMode: 'all' | 'multiple_choice' | 'essay' = mode) => {
    const shuffled = prepareShuffledSession(PHYSICS_QUESTIONS, selectedMode);
    setMode(selectedMode);
    setQuestions(shuffled);
    setCurrentIdx(0);
    setAnswers({});
    setFlaggedIds([]);
    setIsQuizActive(true);
    setIsSubmitted(false);
    setElapsedSeconds(0);
    setEssayScores({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectOption = (optionId: string) => {
    if (!questions[currentIdx]) return;
    const qId = questions[currentIdx].id;
    setAnswers((prev) => ({
      ...prev,
      [qId]: optionId,
    }));
  };

  const handleEssayChange = (text: string) => {
    if (!questions[currentIdx]) return;
    const qId = questions[currentIdx].id;
    setAnswers((prev) => ({
      ...prev,
      [qId]: text,
    }));
  };

  const handleToggleFlag = () => {
    if (!questions[currentIdx]) return;
    const qId = questions[currentIdx].id;
    setFlaggedIds((prev) =>
      prev.includes(qId) ? prev.filter((id) => id !== qId) : [...prev, qId]
    );
  };

  const [showSubmitModal, setShowSubmitModal] = useState<boolean>(false);

  const handleSubmitQuiz = () => {
    setShowSubmitModal(true);
  };

  const handleConfirmSubmit = () => {
    setShowSubmitModal(false);
    setIsSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formatTimer = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-[#FCFCFA] text-stone-900 flex flex-col font-sans selection:bg-amber-200 selection:text-amber-950 relative">
      {/* Background Batik Kawung Texture */}
      <BatikKawungPattern opacity={0.035} />

      {/* Top Navigation */}
      <Navbar
        onSelectMode={(m) => startNewSession(m)}
        onOpenFormula={() => setIsFormulaOpen(true)}
        onNewSession={() => startNewSession(mode)}
        currentMode={mode}
        isQuizActive={isQuizActive && !isSubmitted}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {!isQuizActive ? (
          /* ========================================================= */
          /* LANDING & HERO VIEW: BERKAH ANAK SOLEH KELAS XII          */
          /* ========================================================= */
          <div className="space-y-12 py-4">
            {/* Hero Banner Card */}
            <div className="relative bg-white rounded-3xl border border-amber-900/15 p-6 sm:p-12 shadow-sm overflow-hidden text-center">
              <BatikCornerOrnament position="top-left" size={72} className="opacity-40" />
              <BatikCornerOrnament position="top-right" size={72} className="opacity-40" />
              <BatikCornerOrnament position="bottom-left" size={72} className="opacity-40" />
              <BatikCornerOrnament position="bottom-right" size={72} className="opacity-40" />

              <div className="max-w-3xl mx-auto relative z-10">
                <div className="flex justify-center mb-3">
                  <MegaMendungCloud className="opacity-70" />
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-900 text-xs font-semibold mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                  <span>Media Evaluasi & Latihan Fisika Interaktif Nusantara</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-black text-amber-950 tracking-tight font-serif leading-tight">
                  BERKAH ANAK SOLEH KELAS XII
                </h1>

                <p className="mt-4 text-base sm:text-lg text-amber-900 font-medium italic">
                  &ldquo;Belajar Fisika, Memahami Konsep, Menguatkan Penalaran.&rdquo;
                </p>

                <p className="mt-3 text-xs sm:text-sm text-stone-600 max-w-2xl mx-auto leading-relaxed">
                  Latihan soal terstruktur mengacu secara mutlak pada dokumen soal evaluasi Fisika
                  Kelas XII. Dilengkapi sistem pengacakan soal &amp; opsi jawaban, dua metode
                  pembahasan (metode lengkap dan trik cepat), serta narator suara guru berbahasa Indonesia.
                </p>

                {/* Primary Mode CTA Buttons */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <button
                    onClick={() => startNewSession('all')}
                    className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-amber-900 hover:bg-amber-800 text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all cursor-pointer border border-amber-700"
                  >
                    <Play className="w-5 h-5 fill-white text-white" />
                    <span>Mulai Simulasi Lengkap (35 Soal)</span>
                  </button>

                  <button
                    onClick={() => startNewSession('multiple_choice')}
                    className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white hover:bg-amber-50 text-amber-950 font-bold text-sm sm:text-base border border-amber-300 shadow-2xs hover:shadow-xs transition-all cursor-pointer"
                  >
                    <span>Latihan Pilihan Ganda (30 Soal)</span>
                  </button>

                  <button
                    onClick={() => startNewSession('essay')}
                    className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white hover:bg-amber-50 text-amber-950 font-bold text-sm sm:text-base border border-amber-300 shadow-2xs hover:shadow-xs transition-all cursor-pointer"
                  >
                    <span>Latihan Soal Esai (5 Soal)</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl border border-amber-900/10 p-6 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-amber-100/70 text-amber-900 flex items-center justify-center mb-4 font-bold border border-amber-300">
                  <RotateCw className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-amber-950 font-serif mb-2">
                  Pengacakan Dinamis Setiap Sesi
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Urutan nomor soal dan posisi opsi pilihan jawaban (A, B, C, D, E) diacak secara
                  otomatis pada setiap sesi baru. Kunci jawaban dan pembahasan selalu terkoneksi
                  dengan akurat tanpa kesalahan.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-amber-900/10 p-6 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-amber-100/70 text-amber-900 flex items-center justify-center mb-4 font-bold border border-amber-300">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-amber-950 font-serif mb-2">
                  Dua Metode Penyelesaian
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Setiap soal dilengkapi dua metode pembahasan: Metode Lengkap (Diketahui, Ditanyakan,
                  Prinsip, Rumus, dan Perhitungan langkah demi langkah) serta Metode Cepat (Trik
                  cerdas perbandingan besaran).
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-amber-900/10 p-6 shadow-2xs">
                <div className="w-10 h-10 rounded-xl bg-amber-100/70 text-amber-900 flex items-center justify-center mb-4 font-bold border border-amber-300">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-amber-950 font-serif mb-2">
                  Narator Suara Bahasa Indonesia
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Didukung modul Text-to-Speech natural berbahasa Indonesia yang berperan seperti guru
                  pembimbing Fisika yang membacakan stimulus, teks soal, serta penjabaran konsep dan motivasi belajar.
                </p>
              </div>
            </div>

            {/* Curriculum Scope Overview */}
            <div className="bg-white rounded-3xl border border-amber-900/15 p-6 sm:p-8 shadow-2xs">
              <h3 className="text-lg font-bold text-amber-950 font-serif mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-amber-800" />
                <span>Cakupan Materi Evaluasi Fisika Kelas XII</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200">
                  <span className="font-bold text-amber-950 block mb-1">
                    1. Listrik Dinamis Arus Searah (DC)
                  </span>
                  <p className="text-stone-600">
                    Laju hanyut elektron, Hukum Ohm, sensor LDR, beban listrik rumah tangga,
                    rangkaian sakelar pintas, Hukum I &amp; II Kirchhoff dua loop, tegangan jepit
                    aki, Jembatan Wheatstone.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200">
                  <span className="font-bold text-amber-950 block mb-1">
                    2. Elektrostatika &amp; Kapasitor
                  </span>
                  <p className="text-stone-600">
                    Gaya Coulomb bola konduktor, resultan muatan segaris, vektor medan listrik nol,
                    usaha elektrostatik, kapasitor keping sejajar dengan dielektrik bertingkat, energi &amp; daya flash Xenon.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-amber-50/50 border border-amber-200">
                  <span className="font-bold text-amber-950 block mb-1">
                    3. Termodinamika &amp; Teori Kinetik Gas
                  </span>
                  <p className="text-stone-600">
                    Mekanisme tekanan gas menurut Newton, kecepatan efektif (v_rms) Helium &amp; Oksigen,
                    ekuipartisi energi, proses isobarik silinder piston bebas, diagram P-V dan usaha luar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : isSubmitted ? (
          /* ========================================================= */
          /* EVALUATION & SOLUTIONS REVIEW VIEW                        */
          /* ========================================================= */
          <QuizReview
            questions={questions}
            answers={answers}
            essayScores={essayScores}
            onUpdateEssayScore={(qId, score) =>
              setEssayScores((prev) => ({ ...prev, [qId]: score }))
            }
            onRestartWithNewShuffle={() => startNewSession(mode)}
          />
        ) : (
          /* ========================================================= */
          /* ACTIVE PRACTICE SESSION VIEW                              */
          /* ========================================================= */
          <div className="space-y-6">
            {/* Session Status Top Strip */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-white px-5 py-3.5 rounded-2xl border border-amber-900/10 shadow-2xs">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-100/60 px-2.5 py-1 rounded-md">
                  {mode === 'all'
                    ? 'Simulasi Lengkap'
                    : mode === 'multiple_choice'
                    ? 'Pilihan Ganda'
                    : 'Soal Esai'}
                </span>
                <span className="text-xs text-stone-500">
                  Soal {currentIdx + 1} dari {questions.length}
                </span>
              </div>

              <div className="flex items-center gap-4">
                {/* Timer */}
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-stone-700 bg-stone-100 px-3 py-1 rounded-lg">
                  <Clock className="w-3.5 h-3.5 text-amber-800" />
                  <span>{formatTimer(elapsedSeconds)}</span>
                </div>

                {/* Quick Formula Button */}
                <button
                  type="button"
                  onClick={() => setIsFormulaOpen(true)}
                  className="text-xs font-medium text-amber-900 hover:text-amber-950 flex items-center gap-1 cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5 text-amber-700" />
                  <span className="hidden sm:inline">Rumus Cepat</span>
                </button>
              </div>
            </div>

            {/* Split Grid: Question Card on left (larger), Palette on right */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
              <div className="lg:col-span-3">
                {questions[currentIdx] && (
                  <QuestionCard
                    question={questions[currentIdx]}
                    displayNumber={currentIdx + 1}
                    totalQuestions={questions.length}
                    selectedAnswer={answers[questions[currentIdx].id] || ''}
                    isFlagged={flaggedIds.includes(questions[currentIdx].id)}
                    onSelectOption={handleSelectOption}
                    onEssayChange={handleEssayChange}
                    onToggleFlag={handleToggleFlag}
                    onPrev={() => setCurrentIdx((prev) => Math.max(0, prev - 1))}
                    onNext={() =>
                      setCurrentIdx((prev) => Math.min(questions.length - 1, prev + 1))
                    }
                    onSubmit={handleSubmitQuiz}
                    isFirst={currentIdx === 0}
                    isLast={currentIdx === questions.length - 1}
                  />
                )}
              </div>

              {/* Sidebar Navigator */}
              <div className="lg:col-span-1 sticky top-24">
                <QuestionNavigator
                  questions={questions}
                  currentIndex={currentIdx}
                  answers={answers}
                  flaggedQuestionIds={flaggedIds}
                  onSelectQuestion={(idx) => setCurrentIdx(idx)}
                  onSubmit={handleSubmitQuiz}
                />
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Quick Formula Modal */}
      <FormulaQuickSheet
        isOpen={isFormulaOpen}
        onClose={() => setIsFormulaOpen(false)}
      />

      {/* Submission Confirmation Modal */}
      {showSubmitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
          <div className="relative w-full max-w-md bg-white rounded-3xl shadow-xl border border-amber-900/20 p-6 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-amber-950 font-serif">
              Konfirmasi Kumpulkan Jawaban
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Anda telah menjawab{' '}
              <strong className="text-amber-950 font-mono">
                {Object.keys(answers).filter((k) => answers[k]?.trim() !== '').length}
              </strong>{' '}
              dari <strong className="text-amber-950 font-mono">{questions.length}</strong> soal yang
              tersedia.
              {questions.length -
                Object.keys(answers).filter((k) => answers[k]?.trim() !== '').length >
                0 && (
                <span className="block mt-2 text-rose-700 font-medium">
                  Perhatian: Masih ada{' '}
                  {questions.length -
                    Object.keys(answers).filter((k) => answers[k]?.trim() !== '').length}{' '}
                  soal yang belum Anda isi!
                </span>
              )}
            </p>
            <div className="pt-2 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setShowSubmitModal(false)}
                className="px-4 py-2.5 rounded-xl border border-stone-300 hover:bg-stone-50 text-stone-700 font-semibold text-xs cursor-pointer"
              >
                Kembali Mengerjakan
              </button>
              <button
                type="button"
                onClick={handleConfirmSubmit}
                className="px-5 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs shadow-xs cursor-pointer border border-emerald-600"
              >
                Ya, Kumpulkan Sekarang
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="mt-auto border-t border-amber-900/10 bg-white py-6 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div className="flex items-center gap-2">
            <span className="font-bold text-amber-950 font-serif">
              BERKAH ANAK SOLEH KELAS XII
            </span>
            <span>· Evaluasi Fisika Kurikulum Nasional</span>
          </div>
          <div className="text-center sm:text-right">
            <span>Dirancang untuk pembelajaran mandiri, konsep ilmiah, dan penguatan penalaran siswa.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
