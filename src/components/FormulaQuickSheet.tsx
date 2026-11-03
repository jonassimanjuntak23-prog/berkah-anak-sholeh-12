import React from 'react';
import MathRenderer from './MathRenderer';
import { X, BookOpen } from 'lucide-react';
import { BatikParangBorder } from './BatikDecorations';

interface FormulaQuickSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FormulaQuickSheet: React.FC<FormulaQuickSheetProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const formulaCategories = [
    {
      category: '1. Listrik Dinamis & Rangkaian Arus Searah',
      items: [
        { name: 'Arus & Laju Hanyut', formula: 'I = n \\cdot e \\cdot A \\cdot v_d, \\quad Q = I \\cdot t' },
        { name: 'Hambatan Kawat', formula: 'R = \\rho \\frac{L}{A} = \\rho \\frac{4L}{\\pi d^2}' },
        { name: 'Hukum Ohm & Daya', formula: 'V = I \\cdot R, \\quad P = V \\cdot I = I^2 R = \\frac{V^2}{R}' },
        { name: 'Tegangan Jepit Baterai', formula: 'V_{\\text{jepit}} = \\varepsilon - I \\cdot r \\text{ (Discharge)}, \\quad V_{\\text{jepit}} = \\varepsilon + I \\cdot r \\text{ (Charge)}' },
        { name: 'Hukum I & II Kirchhoff', formula: '\\sum I_{\\text{masuk}} = \\sum I_{\\text{keluar}}, \\quad \\sum \\varepsilon + \\sum (I \\cdot R) = 0' },
        { name: 'Jembatan Wheatstone Seimbang', formula: 'R_A \\cdot R_X = R_B \\cdot R_C \\implies R_X = \\frac{R_B R_C}{R_A}' },
      ],
    },
    {
      category: '2. Elektrostatika & Medan Listrik',
      items: [
        { name: 'Hukum Coulomb', formula: 'F = k \\frac{|q_1 \\cdot q_2|}{r^2}, \\quad k = 9 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2' },
        { name: 'Kuat Medan Listrik', formula: 'E = k \\frac{|q|}{r^2}, \\quad \\vec{F} = q \\vec{E}' },
        { name: 'Potensial & Usaha Listrik', formula: 'V = k \\frac{q}{r}, \\quad W_{\\text{medan}} = q(V_1 - V_2) = -\\Delta U' },
        { name: 'Titik Kuat Medan Nol', formula: 'r_{\\text{kecil}} = \\frac{d}{\\sqrt{\\frac{|q_{\\text{besar}}|}{|q_{\\text{kecil}}|}} \\pm 1}' },
      ],
    },
    {
      category: '3. Kapasitor Keping Sejajar & Dielektrik',
      items: [
        { name: 'Kapasitas Keping Sejajar', formula: 'C = \\kappa \\varepsilon_0 \\frac{A}{d}, \\quad Q = C \\cdot V' },
        { name: 'Energi Tersimpan', formula: 'U = \\frac{1}{2} C V^2 = \\frac{1}{2} Q V = \\frac{Q^2}{2C}' },
        { name: 'Rangkaian Seri & Paralel', formula: '\\frac{1}{C_s} = \\frac{1}{C_1} + \\frac{1}{C_2}, \\quad C_p = C_1 + C_2' },
        { name: 'Disipasi Penggabungan', formula: '\\Delta E = \\frac{1}{2} \\frac{C_1 C_2}{C_1 + C_2} (V_1 - V_2)^2' },
      ],
    },
    {
      category: '4. Teori Kinetik Gas & Termodinamika',
      items: [
        { name: 'Persamaan Gas Ideal', formula: 'P V = n R T = N k_B T' },
        { name: 'Energi Kinetik Rata-rata', formula: '\\bar{E}_k = \\frac{3}{2} k_B T, \\quad U = \\frac{3}{2} n R T' },
        { name: 'Kecepatan Efektif (v_rms)', formula: 'v_{\\text{rms}} = \\sqrt{\\frac{3RT}{M_r}} = \\sqrt{\\frac{3k_B T}{m}}' },
        { name: 'Usaha Isobarik (P = tetap)', formula: 'W = P \\Delta V = P (V_2 - V_1) = n R \\Delta T' },
        { name: 'Hukum I Termodinamika', formula: 'Q = \\Delta U + W' },
      ],
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-xl border border-amber-900/20 max-h-[88vh] flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-amber-900/10 bg-amber-50/50">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-900 text-amber-100 flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-base text-amber-950 font-serif">
                Lembar Ringkasan Rumus Fisika Kelas XII
              </h3>
              <span className="text-[11px] text-amber-800">
                Formula Inti Standar Kurikulum & Evaluasi
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-500 hover:text-stone-800 hover:bg-stone-200/50 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <BatikParangBorder />

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6">
          {formulaCategories.map((cat, cIdx) => (
            <div key={cIdx} className="space-y-3">
              <h4 className="text-xs sm:text-sm font-bold text-amber-900 border-b border-amber-200/60 pb-1 font-serif">
                {cat.category}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {cat.items.map((item, iIdx) => (
                  <div
                    key={iIdx}
                    className="p-3 rounded-xl bg-stone-50/80 border border-stone-200 flex flex-col justify-between"
                  >
                    <span className="text-[11px] font-semibold text-stone-600 mb-1">
                      {item.name}
                    </span>
                    <div className="text-xs text-stone-950 font-serif bg-white p-2 rounded-lg border border-stone-200/60 overflow-x-auto">
                      <MathRenderer content={`$${item.formula}$`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-white bg-amber-900 hover:bg-amber-800 rounded-xl cursor-pointer"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormulaQuickSheet;
