import React from 'react';
import { BookOpen, Sparkles, RotateCw } from 'lucide-react';
import { BatikParangBorder } from './BatikDecorations';

interface NavbarProps {
  onSelectMode: (mode: 'all' | 'multiple_choice' | 'essay') => void;
  onOpenFormula: () => void;
  onNewSession: () => void;
  currentMode?: 'all' | 'multiple_choice' | 'essay';
  isQuizActive?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  onSelectMode,
  onOpenFormula,
  onNewSession,
  currentMode,
  isQuizActive = false,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-900/15 shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strict Top Bar Contract: 3 zones separated by gap-8 */}
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => onSelectMode('all')}
            className="flex items-center gap-2.5 text-left group cursor-pointer"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-800 to-amber-950 flex items-center justify-center text-amber-200 shadow-xs border border-amber-600/40">
              <BookOpen className="w-5 h-5 text-amber-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-extrabold tracking-tight text-amber-950 font-serif leading-tight">
                BERKAH ANAK SOLEH KELAS XII
              </span>
              <span className="text-[10px] text-amber-800 font-medium tracking-wider">
                Latihan Fisika Interaktif Berbasis Acuan PDF
              </span>
            </div>
          </button>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs sm:text-sm font-medium text-stone-700">
            <button
              onClick={() => onSelectMode('all')}
              className={`hover:text-amber-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentMode === 'all' && isQuizActive
                  ? 'text-amber-900 font-bold border-b-2 border-amber-800 pb-0.5'
                  : ''
              }`}
            >
              Simulasi Penuh (35 Soal)
            </button>
            <button
              onClick={() => onSelectMode('multiple_choice')}
              className={`hover:text-amber-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentMode === 'multiple_choice' && isQuizActive
                  ? 'text-amber-900 font-bold border-b-2 border-amber-800 pb-0.5'
                  : ''
              }`}
            >
              Pilihan Ganda (30 Soal)
            </button>
            <button
              onClick={() => onSelectMode('essay')}
              className={`hover:text-amber-900 transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                currentMode === 'essay' && isQuizActive
                  ? 'text-amber-900 font-bold border-b-2 border-amber-800 pb-0.5'
                  : ''
              }`}
            >
              Soal Esai (5 Soal)
            </button>
            <button
              onClick={onOpenFormula}
              className="text-stone-600 hover:text-amber-900 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Lembar Rumus</span>
            </button>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onNewSession}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-amber-900 hover:bg-amber-800 rounded-lg shadow-xs transition-all whitespace-nowrap shrink-0 cursor-pointer border border-amber-700"
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span>{isQuizActive ? 'Acak Ulang Sesi' : 'Mulai Latihan'}</span>
            </button>
          </div>
        </div>
      </div>
      <BatikParangBorder />
    </header>
  );
};

export default Navbar;
