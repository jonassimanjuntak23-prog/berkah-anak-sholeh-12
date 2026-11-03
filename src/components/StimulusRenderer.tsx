import React from 'react';
import MathRenderer from './MathRenderer';

interface StimulusRendererProps {
  stimulusType?: 'image' | 'graph' | 'table' | 'circuit' | 'diagram' | 'none';
  stimulusTitle?: string;
  stimulusSvgType?: string;
  stimulusData?: Record<string, any>;
  tableData?: {
    headers: string[];
    rows: (string | number)[][];
    caption?: string;
  };
}

export const StimulusRenderer: React.FC<StimulusRendererProps> = ({
  stimulusType,
  stimulusTitle,
  stimulusSvgType,
  stimulusData,
  tableData,
}) => {
  if (stimulusType === 'none' || (!stimulusSvgType && !tableData)) {
    return null;
  }

  return (
    <div className="my-5 bg-white border border-amber-900/10 rounded-xl p-4 sm:p-5 shadow-xs max-w-2xl mx-auto">
      {/* Table Stimulus */}
      {tableData && (
        <div className="overflow-x-auto">
          {tableData.caption && (
            <div className="text-center font-semibold text-xs text-amber-950 mb-2">
              {tableData.caption}
            </div>
          )}
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-amber-900/5 border-b border-amber-900/20 text-amber-950">
                {tableData.headers.map((h, i) => (
                  <th key={i} className="p-2.5 font-semibold text-center border-r border-amber-900/10 last:border-none">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-amber-900/10 text-slate-700">
              {tableData.rows.map((row, rIdx) => (
                <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-amber-50/30'}>
                  {row.map((cell, cIdx) => (
                    <td
                      key={cIdx}
                      className={`p-2.5 border-r border-amber-900/10 last:border-none ${
                        cIdx === 0 ? 'font-medium text-slate-900' : 'text-center font-mono tabular-nums'
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* SVG Circuit / Graph / Diagram Stimulus */}
      {stimulusSvgType === 'gambar-1-grafik-vi' && (
        <div className="flex flex-col items-center">
          <svg viewBox="0 0 460 220" className="w-full max-w-md h-auto">
            {/* Background grid */}
            <defs>
              <pattern id="grid-vi" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F3E8D2" strokeWidth="0.8" />
              </pattern>
            </defs>
            <rect x="50" y="20" width="360" height="160" fill="url(#grid-vi)" />

            {/* Axes */}
            <line x1="50" y1="180" x2="420" y2="180" stroke="#451A03" strokeWidth="1.8" />
            <line x1="50" y1="180" x2="50" y2="15" stroke="#451A03" strokeWidth="1.8" />

            {/* Arrowheads */}
            <polygon points="420,180 412,176 412,184" fill="#451A03" />
            <polygon points="50,15 46,23 54,23" fill="#451A03" />

            {/* Axis Labels */}
            <text x="430" y="184" className="text-[12px] font-sans fill-amber-950 font-bold">I (mA)</text>
            <text x="35" y="15" className="text-[12px] font-sans fill-amber-950 font-bold">V (Volt)</text>

            {/* Ticks on X */}
            <text x="50" y="196" textAnchor="middle" className="text-[10px] fill-stone-600 font-mono">0</text>
            <text x="140" y="196" textAnchor="middle" className="text-[10px] fill-stone-600 font-mono">100</text>
            <line x1="140" y1="178" x2="140" y2="182" stroke="#451A03" strokeWidth="1.2" />
            <text x="230" y="196" textAnchor="middle" className="text-[10px] fill-stone-600 font-mono">200</text>
            <line x1="230" y1="178" x2="230" y2="182" stroke="#451A03" strokeWidth="1.2" />
            <text x="320" y="196" textAnchor="middle" className="text-[10px] fill-stone-600 font-mono">300</text>
            <line x1="320" y1="178" x2="320" y2="182" stroke="#451A03" strokeWidth="1.2" />

            {/* Ticks on Y */}
            <text x="40" y="130" textAnchor="end" className="text-[10px] fill-stone-600 font-mono">5</text>
            <line x1="48" y1="126" x2="52" y2="126" stroke="#451A03" strokeWidth="1.2" />
            <text x="40" y="76" textAnchor="end" className="text-[10px] fill-stone-600 font-mono">10</text>
            <line x1="48" y1="72" x2="52" y2="72" stroke="#451A03" strokeWidth="1.2" />
            <text x="40" y="24" textAnchor="end" className="text-[10px] fill-stone-600 font-mono">15</text>
            <line x1="48" y1="20" x2="52" y2="20" stroke="#451A03" strokeWidth="1.2" />

            {/* Ohmic line (Konduktor X: 10 V at 200 mA -> 50 Ohm) */}
            <line x1="50" y1="180" x2="350" y2="20" stroke="#1E3A8A" strokeWidth="2.5" />
            <circle cx="230" cy="74" r="3.5" fill="#1E3A8A" />
            <text x="290" y="35" className="text-[11px] font-bold fill-blue-900">Konduktor X (50 Ω)</text>

            {/* Filament lamp curve Y (curving upwards) */}
            <path d="M 50 180 Q 200 150, 360 70" fill="none" stroke="#DC2626" strokeWidth="2.5" strokeDasharray="4 2" />
            <circle cx="230" cy="120" r="3.5" fill="#DC2626" />
            <text x="365" y="75" className="text-[11px] font-bold fill-red-800">Lampu Filamen Y</text>
          </svg>
        </div>
      )}

      {stimulusSvgType === 'gambar-2-sakelar-s' && (
        <div className="flex flex-col items-center">
          <svg viewBox="0 0 460 210" className="w-full max-w-md h-auto">
            {/* Battery on bottom */}
            <line x1="100" y1="170" x2="200" y2="170" stroke="#1E293B" strokeWidth="2" />
            <line x1="260" y1="170" x2="380" y2="170" stroke="#1E293B" strokeWidth="2" />
            {/* Battery symbol */}
            <line x1="200" y1="155" x2="200" y2="185" stroke="#1E293B" strokeWidth="3" />
            <line x1="210" y1="160" x2="210" y2="180" stroke="#1E293B" strokeWidth="1.5" />
            <line x1="220" y1="155" x2="220" y2="185" stroke="#1E293B" strokeWidth="3" />
            <line x1="230" y1="160" x2="230" y2="180" stroke="#1E293B" strokeWidth="1.5" />
            <line x1="240" y1="155" x2="240" y2="185" stroke="#1E293B" strokeWidth="3" />
            <line x1="250" y1="160" x2="250" y2="180" stroke="#1E293B" strokeWidth="1.5" />
            <line x1="260" y1="170" x2="250" y2="170" stroke="#1E293B" strokeWidth="2" />
            <text x="180" y="150" className="text-[11px] font-bold fill-amber-900">+ -</text>
            <text x="210" y="200" textAnchor="middle" className="text-[11px] font-bold fill-slate-800 font-mono">
              ε = {stimulusData?.E || '36 V'}, r = 0 Ω
            </text>

            {/* Outer loop */}
            <line x1="100" y1="170" x2="100" y2="50" stroke="#1E293B" strokeWidth="2" />
            <line x1="380" y1="170" x2="380" y2="50" stroke="#1E293B" strokeWidth="2" />

            {/* Top branch with R1, R2, R4 */}
            <line x1="100" y1="50" x2="130" y2="50" stroke="#1E293B" strokeWidth="2" />
            {/* R1 */}
            <rect x="130" y="42" width="36" height="16" fill="#FEF3C7" stroke="#92400E" strokeWidth="1.5" />
            <text x="148" y="35" textAnchor="middle" className="text-[10px] font-bold fill-amber-950 font-mono">
              R₁ = {stimulusData?.R1 || '6 Ω'}
            </text>
            <line x1="166" y1="50" x2="190" y2="50" stroke="#1E293B" strokeWidth="2" />

            {/* R2 */}
            <rect x="190" y="42" width="36" height="16" fill="#FEF3C7" stroke="#92400E" strokeWidth="1.5" />
            <text x="208" y="35" textAnchor="middle" className="text-[10px] font-bold fill-amber-950 font-mono">
              R₂ = {stimulusData?.R2 || '4 Ω'}
            </text>
            <line x1="226" y1="50" x2="280" y2="50" stroke="#1E293B" strokeWidth="2" />

            {/* Switch S bypass around R4 */}
            <rect x="280" y="42" width="36" height="16" fill="#FEF3C7" stroke="#92400E" strokeWidth="1.5" />
            <text x="298" y="35" textAnchor="middle" className="text-[10px] font-bold fill-amber-950 font-mono">
              R₄ = {stimulusData?.R4 || '8 Ω'}
            </text>
            <line x1="316" y1="50" x2="380" y2="50" stroke="#1E293B" strokeWidth="2" />

            {/* Switch bypass wires */}
            <path d="M 265 50 L 265 20 L 330 20 L 330 50" fill="none" stroke="#DC2626" strokeWidth="1.5" strokeDasharray="3 3" />
            {/* Open switch lever */}
            <circle cx="280" cy="20" r="3" fill="#DC2626" />
            <line x1="280" y1="20" x2="305" y2="10" stroke="#DC2626" strokeWidth="2" />
            <circle cx="315" cy="20" r="3" fill="#DC2626" />
            <text x="298" y="10" textAnchor="middle" className="text-[11px] font-bold fill-red-700">Sakelar S</text>

            {/* Middle branch R3 */}
            <line x1="100" y1="110" x2="210" y2="110" stroke="#1E293B" strokeWidth="2" />
            <rect x="210" y="102" width="40" height="16" fill="#E0F2FE" stroke="#0369A1" strokeWidth="1.5" />
            <text x="230" y="96" textAnchor="middle" className="text-[10px] font-bold fill-sky-950 font-mono">
              R₃ = {stimulusData?.R3 || '12 Ω'}
            </text>
            <line x1="250" y1="110" x2="380" y2="110" stroke="#1E293B" strokeWidth="2" />
          </svg>
        </div>
      )}

      {stimulusSvgType === 'gambar-3-dua-loop' && (
        <div className="flex flex-col items-center">
          <svg viewBox="0 0 460 210" className="w-full max-w-md h-auto">
            {/* Outer frame */}
            <rect x="70" y="30" width="320" height="140" fill="none" stroke="#334155" strokeWidth="2" />
            {/* Middle vertical branch BE */}
            <line x1="230" y1="30" x2="230" y2="170" stroke="#334155" strokeWidth="2" />

            {/* Nodes A, B, C, D, E, F */}
            <circle cx="230" cy="30" r="4.5" fill="#92400E" />
            <text x="230" y="20" textAnchor="middle" className="text-[12px] font-extrabold fill-amber-900">A</text>
            <circle cx="230" cy="170" r="4.5" fill="#92400E" />
            <text x="230" y="190" textAnchor="middle" className="text-[12px] font-extrabold fill-amber-900">B</text>

            <text x="55" y="35" className="text-[12px] font-bold fill-slate-700">C</text>
            <text x="55" y="175" className="text-[12px] font-bold fill-slate-700">D</text>
            <text x="400" y="35" className="text-[12px] font-bold fill-slate-700">E</text>
            <text x="400" y="175" className="text-[12px] font-bold fill-slate-700">F</text>

            {/* Left branch components */}
            {/* R1 */}
            <rect x="130" y="22" width="40" height="16" fill="#FEF3C7" stroke="#B45309" strokeWidth="1.5" />
            <text x="150" y="16" textAnchor="middle" className="text-[10px] font-bold fill-amber-900 font-mono">
              R₁ = {stimulusData?.R1 || '4 Ω'}
            </text>
            {/* eps 1 */}
            <rect x="62" y="85" width="16" height="30" fill="white" />
            <line x1="62" y1="92" x2="78" y2="92" stroke="#1E293B" strokeWidth="2.5" />
            <line x1="66" y1="102" x2="74" y2="102" stroke="#1E293B" strokeWidth="1.5" />
            <text x="35" y="105" className="text-[10px] font-bold fill-slate-900 font-mono">ε₁={stimulusData?.E1 || '20 V'}</text>

            {/* Center branch R2 */}
            <rect x="222" y="85" width="16" height="36" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.5" />
            <text x="250" y="105" className="text-[10px] font-bold fill-sky-950 font-mono">
              R₂ = {stimulusData?.R2 || '2 Ω'}
            </text>

            {/* Right branch components */}
            {/* R3 */}
            <rect x="290" y="22" width="40" height="16" fill="#FEF3C7" stroke="#B45309" strokeWidth="1.5" />
            <text x="310" y="16" textAnchor="middle" className="text-[10px] font-bold fill-amber-900 font-mono">
              R₃ = {stimulusData?.R3 || '4 Ω'}
            </text>
            {/* eps 2 */}
            <rect x="382" y="85" width="16" height="30" fill="white" />
            <line x1="382" y1="92" x2="398" y2="92" stroke="#1E293B" strokeWidth="2.5" />
            <line x1="386" y1="102" x2="394" y2="102" stroke="#1E293B" strokeWidth="1.5" />
            <text x="405" y="105" className="text-[10px] font-bold fill-slate-900 font-mono">ε₂={stimulusData?.E2 || '8 V'}</text>

            {/* Loop directions */}
            <path d="M 135 110 A 15 15 0 1 1 160 110" fill="none" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="3 2" />
            <text x="150" y="105" textAnchor="middle" className="text-[10px] fill-slate-400 font-serif">Loop I</text>
            <path d="M 295 110 A 15 15 0 1 1 320 110" fill="none" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="3 2" />
            <text x="310" y="105" textAnchor="middle" className="text-[10px] fill-slate-400 font-serif">Loop II</text>
          </svg>
        </div>
      )}

      {stimulusSvgType === 'gambar-4-muatan-segaris' && (
        <div className="flex flex-col items-center">
          <svg viewBox="0 0 460 140" className="w-full max-w-md h-auto">
            {/* X-axis line */}
            <line x1="40" y1="70" x2="420" y2="70" stroke="#475569" strokeWidth="2" />
            <polygon points="420,70 410,65 410,75" fill="#475569" />
            <text x="425" y="74" className="text-[11px] font-bold fill-slate-700">x</text>

            {/* Charge 1 */}
            <circle cx="90" cy="70" r="18" fill="#FEE2E2" stroke="#DC2626" strokeWidth="2" />
            <text x="90" y="75" textAnchor="middle" className="text-[16px] font-extrabold fill-red-600">+</text>
            <text x="90" y="38" textAnchor="middle" className="text-[10px] font-bold fill-slate-900 font-mono">
              q₁ = {stimulusData?.q1 || '+3 μC'}
            </text>
            <text x="90" y="105" textAnchor="middle" className="text-[10px] fill-slate-600 font-mono">
              x₁ = {stimulusData?.x1 || '0 cm'}
            </text>

            {/* Charge 2 */}
            <circle cx="230" cy="70" r="18" fill="#E0E7FF" stroke="#4338CA" strokeWidth="2" />
            <text x="230" y="75" textAnchor="middle" className="text-[16px] font-extrabold fill-indigo-600">−</text>
            <text x="230" y="38" textAnchor="middle" className="text-[10px] font-bold fill-slate-900 font-mono">
              q₂ = {stimulusData?.q2 || '-2 μC'}
            </text>
            <text x="230" y="105" textAnchor="middle" className="text-[10px] fill-slate-600 font-mono">
              x₂ = {stimulusData?.x2 || '30 cm'}
            </text>

            {/* Charge 3 */}
            <circle cx="370" cy="70" r="18" fill="#FEE2E2" stroke="#DC2626" strokeWidth="2" />
            <text x="370" y="75" textAnchor="middle" className="text-[16px] font-extrabold fill-red-600">+</text>
            <text x="370" y="38" textAnchor="middle" className="text-[10px] font-bold fill-slate-900 font-mono">
              q₃ = {stimulusData?.q3 || '+9 μC'}
            </text>
            <text x="370" y="105" textAnchor="middle" className="text-[10px] fill-slate-600 font-mono">
              x₃ = {stimulusData?.x3 || '60 cm'}
            </text>

            {/* Dimension arrows */}
            <line x1="90" y1="120" x2="230" y2="120" stroke="#94A3B8" strokeWidth="1.2" />
            <text x="160" y="132" textAnchor="middle" className="text-[9px] fill-slate-600 font-mono">
              r₁₂ = {stimulusData?.r12 || '30 cm'}
            </text>
            <line x1="230" y1="120" x2="370" y2="120" stroke="#94A3B8" strokeWidth="1.2" />
            <text x="300" y="132" textAnchor="middle" className="text-[9px] fill-slate-600 font-mono">
              r₂₃ = {stimulusData?.r23 || '30 cm'}
            </text>
          </svg>
        </div>
      )}

      {stimulusSvgType === 'gambar-5-dua-muatan-medan-nol' && (
        <div className="flex flex-col items-center">
          <svg viewBox="0 0 460 140" className="w-full max-w-md h-auto">
            {/* Axis */}
            <line x1="40" y1="70" x2="420" y2="70" stroke="#CBD5E1" strokeWidth="1.8" strokeDasharray="4 4" />

            {/* P1 */}
            <circle cx="90" cy="70" r="4" fill="#0284C7" />
            <text x="90" y="55" textAnchor="middle" className="text-[11px] font-bold fill-sky-800">P₁</text>

            {/* qA */}
            <circle cx="170" cy="70" r="20" fill="#FEE2E2" stroke="#DC2626" strokeWidth="2" />
            <text x="170" y="76" textAnchor="middle" className="text-[16px] font-extrabold fill-red-600">+</text>
            <text x="170" y="36" textAnchor="middle" className="text-[10px] font-bold fill-slate-900 font-mono">
              q_A = {stimulusData?.qA || '+16 μC'}
            </text>

            {/* P2 */}
            <circle cx="245" cy="70" r="4" fill="#0284C7" />
            <text x="245" y="55" textAnchor="middle" className="text-[11px] font-bold fill-sky-800">P₂</text>

            {/* qB */}
            <circle cx="320" cy="70" r="16" fill="#E0E7FF" stroke="#4338CA" strokeWidth="2" />
            <text x="320" y="76" textAnchor="middle" className="text-[16px] font-extrabold fill-indigo-600">−</text>
            <text x="320" y="36" textAnchor="middle" className="text-[10px] font-bold fill-slate-900 font-mono">
              q_B = {stimulusData?.qB || '-4 μC'}
            </text>

            {/* P3 */}
            <circle cx="395" cy="70" r="4" fill="#0284C7" />
            <text x="395" y="55" textAnchor="middle" className="text-[11px] font-bold fill-sky-800">P₃</text>

            {/* Distance d */}
            <line x1="170" y1="105" x2="320" y2="105" stroke="#475569" strokeWidth="1.2" />
            <polygon points="170,105 178,102 178,108" fill="#475569" />
            <polygon points="320,105 312,102 312,108" fill="#475569" />
            <text x="245" y="122" textAnchor="middle" className="text-[10px] font-bold fill-slate-800 font-mono">
              d = {stimulusData?.d || '30 cm'}
            </text>
          </svg>
        </div>
      )}

      {stimulusSvgType === 'gambar-7-kapasitor-campuran' && (
        <div className="flex flex-col items-center">
          <svg viewBox="0 0 460 190" className="w-full max-w-md h-auto">
            {/* Battery on bottom */}
            <line x1="120" y1="150" x2="210" y2="150" stroke="#334155" strokeWidth="2" />
            <line x1="250" y1="150" x2="340" y2="150" stroke="#334155" strokeWidth="2" />
            <line x1="210" y1="140" x2="210" y2="160" stroke="#334155" strokeWidth="3" />
            <line x1="220" y1="144" x2="220" y2="156" stroke="#334155" strokeWidth="1.5" />
            <line x1="230" y1="140" x2="230" y2="160" stroke="#334155" strokeWidth="3" />
            <line x1="240" y1="144" x2="240" y2="156" stroke="#334155" strokeWidth="1.5" />
            <line x1="250" y1="150" x2="240" y2="150" stroke="#334155" strokeWidth="2" />
            <text x="230" y="175" textAnchor="middle" className="text-[10px] font-bold fill-slate-800 font-mono">
              V = {stimulusData?.V || '24 Volt'}
            </text>

            {/* Outer box */}
            <line x1="120" y1="150" x2="120" y2="40" stroke="#334155" strokeWidth="2" />
            <line x1="340" y1="150" x2="340" y2="40" stroke="#334155" strokeWidth="2" />

            {/* Top branch: C1 and C2 in series */}
            <line x1="120" y1="40" x2="160" y2="40" stroke="#334155" strokeWidth="2" />
            {/* C1 capacitor plates */}
            <line x1="160" y1="28" x2="160" y2="52" stroke="#B45309" strokeWidth="3" />
            <line x1="168" y1="28" x2="168" y2="52" stroke="#B45309" strokeWidth="3" />
            <text x="164" y="20" textAnchor="middle" className="text-[10px] font-bold fill-amber-900 font-mono">
              C₁={stimulusData?.C1 || '8 μF'}
            </text>
            <line x1="168" y1="40" x2="210" y2="40" stroke="#334155" strokeWidth="2" />

            {/* C2 capacitor plates */}
            <line x1="210" y1="28" x2="210" y2="52" stroke="#B45309" strokeWidth="3" />
            <line x1="218" y1="28" x2="218" y2="52" stroke="#B45309" strokeWidth="3" />
            <text x="214" y="20" textAnchor="middle" className="text-[10px] font-bold fill-amber-900 font-mono">
              C₂={stimulusData?.C2 || '8 μF'}
            </text>
            <line x1="218" y1="40" x2="260" y2="40" stroke="#334155" strokeWidth="2" />

            {/* Middle branch: C3 parallel to (C1+C2) */}
            <line x1="140" y1="40" x2="140" y2="90" stroke="#334155" strokeWidth="2" />
            <line x1="140" y1="90" x2="185" y2="90" stroke="#334155" strokeWidth="2" />
            {/* C3 capacitor */}
            <line x1="185" y1="78" x2="185" y2="102" stroke="#0284C7" strokeWidth="3" />
            <line x1="193" y1="78" x2="193" y2="102" stroke="#0284C7" strokeWidth="3" />
            <text x="189" y="118" textAnchor="middle" className="text-[10px] font-bold fill-sky-900 font-mono">
              C₃={stimulusData?.C3 || '6 μF'}
            </text>
            <line x1="193" y1="90" x2="240" y2="90" stroke="#334155" strokeWidth="2" />
            <line x1="240" y1="90" x2="240" y2="40" stroke="#334155" strokeWidth="2" />

            {/* C4 in series */}
            <line x1="240" y1="40" x2="275" y2="40" stroke="#334155" strokeWidth="2" />
            <line x1="275" y1="28" x2="275" y2="52" stroke="#16A34A" strokeWidth="3" />
            <line x1="283" y1="28" x2="283" y2="52" stroke="#16A34A" strokeWidth="3" />
            <text x="279" y="20" textAnchor="middle" className="text-[10px] font-bold fill-emerald-900 font-mono">
              C₄={stimulusData?.C4 || '10 μF'}
            </text>
            <line x1="283" y1="40" x2="340" y2="40" stroke="#334155" strokeWidth="2" />
          </svg>
        </div>
      )}

      {stimulusSvgType === 'gambar-8-grafik-ek-t' && (
        <div className="flex flex-col items-center">
          <svg viewBox="0 0 460 210" className="w-full max-w-md h-auto">
            {/* Grid */}
            <defs>
              <pattern id="grid-ek" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#F1F5F9" strokeWidth="1" />
              </pattern>
            </defs>
            <rect x="60" y="20" width="350" height="150" fill="url(#grid-ek)" />

            {/* Axes */}
            <line x1="60" y1="170" x2="420" y2="170" stroke="#334155" strokeWidth="1.8" />
            <line x1="60" y1="170" x2="60" y2="15" stroke="#334155" strokeWidth="1.8" />
            <polygon points="420,170 412,166 412,174" fill="#334155" />
            <polygon points="60,15 56,23 64,23" fill="#334155" />

            <text x="430" y="174" className="text-[11px] font-bold fill-slate-800">T (K)</text>
            <text x="45" y="15" className="text-[11px] font-bold fill-slate-800">Ek (×10⁻²¹ J)</text>

            {/* X ticks */}
            <text x="60" y="185" textAnchor="middle" className="text-[9px] fill-slate-500 font-mono">0</text>
            <text x="140" y="185" textAnchor="middle" className="text-[9px] fill-slate-500 font-mono">250</text>
            <line x1="140" y1="168" x2="140" y2="172" stroke="#334155" />
            <text x="220" y="185" textAnchor="middle" className="text-[9px] fill-slate-500 font-mono">500</text>
            <line x1="220" y1="168" x2="220" y2="172" stroke="#334155" />
            <text x="380" y="185" textAnchor="middle" className="text-[9px] fill-slate-500 font-mono">1000</text>
            <line x1="380" y1="168" x2="380" y2="172" stroke="#334155" />

            {/* Y ticks */}
            <text x="50" y="140" textAnchor="end" className="text-[9px] fill-slate-500 font-mono">5,18</text>
            <text x="50" y="105" textAnchor="end" className="text-[9px] fill-slate-500 font-mono">10,35</text>
            <text x="50" y="45" textAnchor="end" className="text-[9px] fill-slate-500 font-mono">20,70</text>

            {/* Linear plot line */}
            <line x1="60" y1="170" x2="380" y2="40" stroke="#991B1B" strokeWidth="2.5" />
            <circle cx="140" cy="138" r="4" fill="#991B1B" />
            <circle cx="220" cy="105" r="4" fill="#991B1B" />
            <circle cx="380" cy="40" r="4" fill="#991B1B" />
          </svg>
        </div>
      )}

      {stimulusSvgType === 'gambar-9-silinder-piston' && (
        <div className="flex flex-col items-center">
          <svg viewBox="0 0 460 180" className="w-full max-w-md h-auto">
            {/* Cylinder walls */}
            <path d="M 280 40 L 70 40 L 70 140 L 280 140" fill="none" stroke="#1E293B" strokeWidth="3" />
            {/* Gas molecules inside */}
            <g fill="#0284C7">
              <circle cx="100" cy="65" r="4" />
              <line x1="100" y1="65" x2="115" y2="60" stroke="#0284C7" strokeWidth="1" />
              <circle cx="140" cy="110" r="4" />
              <line x1="140" y1="110" x2="130" y2="95" stroke="#0284C7" strokeWidth="1" />
              <circle cx="120" cy="85" r="4" />
              <circle cx="180" cy="70" r="4" />
              <line x1="180" y1="70" x2="195" y2="85" stroke="#0284C7" strokeWidth="1" />
              <circle cx="170" cy="120" r="4" />
              <circle cx="210" cy="95" r="4" />
            </g>

            {/* Piston head */}
            <rect x="250" y="42" width="16" height="96" fill="#64748B" stroke="#334155" strokeWidth="2" />
            {/* Piston rod */}
            <rect x="266" y="84" width="90" height="12" fill="#94A3B8" stroke="#334155" strokeWidth="1.5" />

            {/* Label Piston Bebas */}
            <text x="310" y="60" textAnchor="middle" className="text-[11px] font-bold fill-slate-800">Piston Bebas</text>
            <path d="M 310 65 L 260 85" fill="none" stroke="#64748B" strokeWidth="1" markerEnd="url(#arrow)" />

            {/* External pressure P0 */}
            <line x1="390" y1="90" x2="365" y2="90" stroke="#DC2626" strokeWidth="2" />
            <polygon points="365,90 373,86 373,94" fill="#DC2626" />
            <text x="380" y="115" textAnchor="middle" className="text-[10px] font-bold fill-red-700">P₀ (Tekanan Luar)</text>

            {/* Volume label */}
            <line x1="70" y1="160" x2="250" y2="160" stroke="#64748B" strokeWidth="1" strokeDasharray="3 3" />
            <text x="160" y="172" textAnchor="middle" className="text-[10px] fill-slate-600 font-mono">Volume V</text>
          </svg>
        </div>
      )}

      {stimulusSvgType === 'gambar-10-esai-dua-loop' && (
        <div className="flex flex-col items-center">
          <svg viewBox="0 0 460 210" className="w-full max-w-md h-auto">
            <rect x="60" y="30" width="340" height="140" fill="none" stroke="#1E293B" strokeWidth="2" />
            <line x1="230" y1="30" x2="230" y2="170" stroke="#1E293B" strokeWidth="2" />

            {/* Vertices */}
            <circle cx="60" cy="30" r="3.5" fill="#451A03" />
            <text x="50" y="24" className="text-[12px] font-bold fill-amber-950">A</text>
            <circle cx="230" cy="30" r="3.5" fill="#451A03" />
            <text x="230" y="22" textAnchor="middle" className="text-[12px] font-bold fill-amber-950">B</text>
            <circle cx="400" cy="30" r="3.5" fill="#451A03" />
            <text x="408" y="24" className="text-[12px] font-bold fill-amber-950">C</text>

            <circle cx="400" cy="170" r="3.5" fill="#451A03" />
            <text x="408" y="180" className="text-[12px] font-bold fill-amber-950">D</text>
            <circle cx="230" cy="170" r="3.5" fill="#451A03" />
            <text x="230" y="186" textAnchor="middle" className="text-[12px] font-bold fill-amber-950">E</text>
            <circle cx="60" cy="170" r="3.5" fill="#451A03" />
            <text x="50" y="180" className="text-[12px] font-bold fill-amber-950">F</text>

            {/* Branch AB: R1 */}
            <rect x="125" y="22" width="40" height="16" fill="#FEF3C7" stroke="#92400E" strokeWidth="1.5" />
            <text x="145" y="16" textAnchor="middle" className="text-[10px] font-bold fill-amber-950 font-mono">
              R₁ = {stimulusData?.R1 || '7 Ω'}
            </text>

            {/* Branch BC: R3 */}
            <rect x="295" y="22" width="40" height="16" fill="#FEF3C7" stroke="#92400E" strokeWidth="1.5" />
            <text x="315" y="16" textAnchor="middle" className="text-[10px] font-bold fill-amber-950 font-mono">
              R₃ = {stimulusData?.R3 || '5 Ω'}
            </text>

            {/* Branch BE: R2 */}
            <rect x="222" y="85" width="16" height="36" fill="#E0F2FE" stroke="#0284C7" strokeWidth="1.5" />
            <text x="245" y="105" className="text-[10px] font-bold fill-sky-950 font-mono">
              R₂ = {stimulusData?.R2 || '3 Ω'}
            </text>

            {/* Left Source: eps1 and r1 */}
            <line x1="52" y1="92" x2="68" y2="92" stroke="#1E293B" strokeWidth="2.5" />
            <line x1="56" y1="102" x2="64" y2="102" stroke="#1E293B" strokeWidth="1.5" />
            <text x="10" y="95" className="text-[10px] font-bold fill-slate-900 font-mono">ε₁={stimulusData?.E1 || '24 V'}</text>
            <text x="10" y="108" className="text-[9px] fill-slate-600 font-mono">r₁={stimulusData?.r1 || '1 Ω'}</text>

            {/* Right Source: eps2 and r2 */}
            <line x1="392" y1="92" x2="408" y2="92" stroke="#1E293B" strokeWidth="2.5" />
            <line x1="396" y1="102" x2="404" y2="102" stroke="#1E293B" strokeWidth="1.5" />
            <text x="415" y="95" className="text-[10px] font-bold fill-slate-900 font-mono">ε₂={stimulusData?.E2 || '12 V'}</text>
            <text x="415" y="108" className="text-[9px] fill-slate-600 font-mono">r₂={stimulusData?.r2 || '1 Ω'}</text>
          </svg>
        </div>
      )}

      {stimulusSvgType === 'gambar-11-esai-dua-muatan' && (
        <div className="flex flex-col items-center">
          <svg viewBox="0 0 460 140" className="w-full max-w-md h-auto">
            <line x1="30" y1="70" x2="420" y2="70" stroke="#475569" strokeWidth="1.8" />
            <polygon points="420,70 410,65 410,75" fill="#475569" />
            <text x="425" y="74" className="text-[11px] font-bold fill-slate-700">x</text>

            {/* q1 */}
            <circle cx="100" cy="70" r="18" fill="#FEE2E2" stroke="#DC2626" strokeWidth="2" />
            <text x="100" y="76" textAnchor="middle" className="text-[16px] font-extrabold fill-red-600">+</text>
            <text x="100" y="38" textAnchor="middle" className="text-[10px] font-bold fill-slate-900 font-mono">
              q₁ = {stimulusData?.q1 || '+25 μC'}
            </text>
            <text x="100" y="105" textAnchor="middle" className="text-[10px] fill-slate-600 font-mono">x₁ = 0</text>

            {/* q2 */}
            <circle cx="240" cy="70" r="16" fill="#E0E7FF" stroke="#4338CA" strokeWidth="2" />
            <text x="240" y="76" textAnchor="middle" className="text-[16px] font-extrabold fill-indigo-600">−</text>
            <text x="240" y="38" textAnchor="middle" className="text-[10px] font-bold fill-slate-900 font-mono">
              q₂ = {stimulusData?.q2 || '-16 μC'}
            </text>
            <text x="240" y="105" textAnchor="middle" className="text-[10px] fill-slate-600 font-mono">
              x₂ = {stimulusData?.d || '10 cm'}
            </text>

            {/* Titik P */}
            <circle cx="360" cy="70" r="4.5" fill="#059669" />
            <text x="360" y="55" textAnchor="middle" className="text-[11px] font-bold fill-emerald-800">Titik P</text>
            <text x="360" y="105" textAnchor="middle" className="text-[9px] fill-emerald-700 font-mono">(E_total = 0)</text>

            {/* d distance */}
            <line x1="100" y1="120" x2="240" y2="120" stroke="#64748B" strokeWidth="1.2" />
            <text x="170" y="132" textAnchor="middle" className="text-[10px] font-bold fill-slate-800 font-mono">
              d = {stimulusData?.d || '10 cm'}
            </text>
          </svg>
        </div>
      )}

      {stimulusSvgType === 'gambar-12-esai-kapasitor-dielektrik' && (
        <div className="flex flex-col sm:flex-row items-center justify-around gap-6 py-2">
          {/* Kasus A */}
          <div className="text-center">
            <span className="text-[11px] font-bold text-amber-900 block mb-2">Kasus A: Baterai Tetap Terhubung</span>
            <svg viewBox="0 0 160 120" className="w-36 h-auto mx-auto">
              {/* Top plate */}
              <line x1="40" y1="30" x2="120" y2="30" stroke="#1E293B" strokeWidth="4" />
              {/* Dielectric in between */}
              <rect x="40" y="34" width="80" height="32" fill="#FEF08A" stroke="#CA8A04" strokeWidth="1" />
              <text x="80" y="54" textAnchor="middle" className="text-[10px] font-bold fill-amber-950 font-mono">
                κ = {stimulusData?.kappa || '3,0'}
              </text>
              {/* Bottom plate */}
              <line x1="40" y1="70" x2="120" y2="70" stroke="#1E293B" strokeWidth="4" />
              {/* Battery wires */}
              <path d="M 80 30 L 80 15 L 20 15 L 20 100 L 70 100" fill="none" stroke="#1E293B" strokeWidth="1.5" />
              <path d="M 80 70 L 80 85 L 140 85 L 140 100 L 90 100" fill="none" stroke="#1E293B" strokeWidth="1.5" />
              <line x1="70" y1="94" x2="70" y2="106" stroke="#1E293B" strokeWidth="2.5" />
              <line x1="76" y1="97" x2="76" y2="103" stroke="#1E293B" strokeWidth="1.5" />
              <line x1="84" y1="94" x2="84" y2="106" stroke="#1E293B" strokeWidth="2.5" />
              <line x1="90" y1="97" x2="90" y2="103" stroke="#1E293B" strokeWidth="1.5" />
              <text x="80" y="118" textAnchor="middle" className="text-[9px] font-bold fill-slate-700 font-mono">
                V₀ = {stimulusData?.V0 || '30 V'} (Tetap)
              </text>
            </svg>
          </div>

          {/* Kasus B */}
          <div className="text-center">
            <span className="text-[11px] font-bold text-sky-950 block mb-2">Kasus B: Baterai Dilepaskan</span>
            <svg viewBox="0 0 160 120" className="w-36 h-auto mx-auto">
              <line x1="40" y1="30" x2="120" y2="30" stroke="#1E293B" strokeWidth="4" />
              <rect x="40" y="34" width="80" height="32" fill="#FEF08A" stroke="#CA8A04" strokeWidth="1" />
              <text x="80" y="54" textAnchor="middle" className="text-[10px] font-bold fill-amber-950 font-mono">
                κ = {stimulusData?.kappa || '3,0'}
              </text>
              <line x1="40" y1="70" x2="120" y2="70" stroke="#1E293B" strokeWidth="4" />
              <line x1="80" y1="30" x2="80" y2="10" stroke="#1E293B" strokeWidth="1.5" />
              <circle cx="80" cy="10" r="2.5" fill="#1E293B" />
              <line x1="80" y1="70" x2="80" y2="90" stroke="#1E293B" strokeWidth="1.5" />
              <circle cx="80" cy="90" r="2.5" fill="#1E293B" />
              <text x="80" y="110" textAnchor="middle" className="text-[9px] font-bold fill-sky-800 font-mono">
                Muatan Q₀ Terisolasi (Tetap)
              </text>
            </svg>
          </div>
        </div>
      )}

      {stimulusSvgType === 'gambar-13-esai-diagram-pv' && (
        <div className="flex flex-col items-center">
          <svg viewBox="0 0 460 210" className="w-full max-w-md h-auto">
            {/* Axes */}
            <line x1="60" y1="160" x2="400" y2="160" stroke="#334155" strokeWidth="2" />
            <line x1="60" y1="160" x2="60" y2="20" stroke="#334155" strokeWidth="2" />
            <polygon points="400,160 392,156 392,164" fill="#334155" />
            <polygon points="60,20 56,28 64,28" fill="#334155" />

            <text x="410" y="164" className="text-[11px] font-bold fill-slate-800">V (Liter)</text>
            <text x="50" y="15" className="text-[11px] font-bold fill-slate-800">P (×10⁵ Pa)</text>

            <text x="50" y="74" textAnchor="end" className="text-[10px] font-mono fill-slate-600">
              {stimulusData?.P0 || '2,5'}
            </text>
            <line x1="58" y1="70" x2="62" y2="70" stroke="#334155" />

            <text x="140" y="176" textAnchor="middle" className="text-[10px] font-mono fill-slate-600">
              {stimulusData?.V1 || '5,0'} (V₁)
            </text>
            <text x="300" y="176" textAnchor="middle" className="text-[10px] font-mono fill-slate-600">
              {stimulusData?.V2 || '15,0'} (V₂)
            </text>

            {/* Work Shaded Area */}
            <rect x="140" y="70" width="160" height="90" fill="#FEE2E2" opacity="0.6" stroke="#EF4444" strokeWidth="1" strokeDasharray="3 3" />
            <text x="220" y="120" textAnchor="middle" className="text-[11px] font-bold fill-red-800">Usaha Luar (W)</text>

            {/* Isobaric path from (V1, P0) to (V2, P0) */}
            <line x1="140" y1="70" x2="300" y2="70" stroke="#991B1B" strokeWidth="3" />
            <polygon points="230,70 220,66 220,74" fill="#991B1B" />
            <circle cx="140" cy="70" r="5" fill="#991B1B" />
            <text x="140" y="55" textAnchor="middle" className="text-[10px] font-bold fill-amber-950 font-mono">
              Keadaan 1 (T₁ = {stimulusData?.T1 || '300 K'})
            </text>
            <circle cx="300" cy="70" r="5" fill="#991B1B" />
            <text x="300" y="55" textAnchor="middle" className="text-[10px] font-bold fill-amber-950 font-mono">
              Keadaan 2 (T₂ = {stimulusData?.T2 || '900 K'})
            </text>
          </svg>
        </div>
      )}

      {stimulusTitle && (
        <div className="text-center mt-3 text-xs font-semibold text-amber-950/80 italic">
          {stimulusTitle}
        </div>
      )}
    </div>
  );
};

export default StimulusRenderer;
