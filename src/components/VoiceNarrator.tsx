import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Pause, Play, RotateCcw, Sparkles } from 'lucide-react';

interface VoiceNarratorProps {
  textToSpeak: string;
  label?: string;
  teacherMode?: boolean;
  className?: string;
}

export const VoiceNarrator: React.FC<VoiceNarratorProps> = ({
  textToSpeak,
  label = 'Dengarkan Narator Guru',
  teacherMode = false,
  className = '',
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [speechRate, setSpeechRate] = useState<number>(0.95);
  const [isSupported, setIsSupported] = useState(true);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setIsSupported(false);
    }

    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const cleanTextForSpeech = (rawText: string): string => {
    // Strip markdown formatting, symbols, and convert LaTeX notation to natural spoken Indonesian
    return rawText
      .replace(/\$\$([^$]+)\$\$/g, '$1')
      .replace(/\$([^$]+)\$/g, '$1')
      .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '$1 per $2')
      .replace(/\\cdot/g, ' dikali ')
      .replace(/\\times/g, ' dikali ')
      .replace(/\\sqrt\{([^}]+)\}/g, 'akar dari $1')
      .replace(/\\mu/g, 'mikro')
      .replace(/\\Omega/g, ' Ohm')
      .replace(/\\Delta/g, 'Delta ')
      .replace(/\\varepsilon/g, 'GGL epsilon ')
      .replace(/\\Sigma/g, 'Sigma ')
      .replace(/v_\{?rms\}?/g, 'v RMS ')
      .replace(/v_\{?P\}?/g, 'v P ')
      .replace(/v_\{?Q\}?/g, 'v Q ')
      .replace(/E_k/g, 'energi kinetik ')
      .replace(/\^2/g, ' kuadrat ')
      .replace(/\^3/g, ' kubik ')
      .replace(/10\^([0-9-]+)/g, 'sepuluh pangkat $1')
      .replace(/Ω/g, ' Ohm')
      .replace(/μC/g, ' mikro Coulomb')
      .replace(/μF/g, ' mikro Farad')
      .replace(/nC/g, ' nano Coulomb')
      .replace(/kWh/g, ' kilo Watt jam')
      .replace(/m\/s/g, ' meter per sekon')
      .replace(/N·m²\/C²/g, ' Newton meter kuadrat per Coulomb kuadrat')
      .replace(/J\/\(kg·°C\)/g, ' Joule per kilogram derajat Celcius')
      .replace(/J\/\(mol·K\)/g, ' Joule per mol Kelvin')
      .replace(/°C/g, ' derajat Celcius')
      .replace(/[\*\_#]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  };

  const speak = () => {
    if (!isSupported) return;

    if (isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
      setIsPlaying(true);
      return;
    }

    window.speechSynthesis.cancel();

    const spokenText = cleanTextForSpeech(textToSpeak);
    const utterance = new SpeechSynthesisUtterance(spokenText);
    utteranceRef.current = utterance;

    // Look for Indonesian voice
    const voices = window.speechSynthesis.getVoices();
    const idVoice = voices.find(
      (v) =>
        v.lang === 'id-ID' ||
        v.lang.startsWith('id') ||
        v.name.toLowerCase().includes('indonesia')
    );
    if (idVoice) {
      utterance.voice = idVoice;
    }
    utterance.lang = 'id-ID';
    utterance.rate = speechRate;
    utterance.pitch = 1.05;

    utterance.onstart = () => {
      setIsPlaying(true);
      setIsPaused(false);
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
    };

    utterance.onerror = (e) => {
      console.warn('SpeechSynthesis error:', e);
      setIsPlaying(false);
      setIsPaused(false);
    };

    window.speechSynthesis.speak(utterance);
  };

  const pause = () => {
    if (!isSupported) return;
    window.speechSynthesis.pause();
    setIsPaused(true);
    setIsPlaying(false);
  };

  const stop = () => {
    if (!isSupported) return;
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
  };

  const toggleSpeed = () => {
    const nextRate = speechRate === 0.85 ? 1.0 : speechRate === 1.0 ? 1.2 : 0.85;
    setSpeechRate(nextRate);
    if (isPlaying) {
      stop();
      setTimeout(speak, 150);
    }
  };

  if (!isSupported) return null;

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all text-xs select-none ${
        isPlaying
          ? 'bg-amber-100/80 border-amber-400 text-amber-950 shadow-xs'
          : 'bg-white border-amber-200/80 hover:border-amber-400 text-amber-900 shadow-2xs'
      } ${className}`}
    >
      <div className="flex items-center gap-1.5">
        {teacherMode && <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />}
        {!isPlaying ? (
          <button
            type="button"
            onClick={speak}
            className="flex items-center gap-1.5 font-medium hover:text-amber-700 cursor-pointer"
            title="Putar Narator Suara"
          >
            <Volume2 className="w-4 h-4 text-amber-700" />
            <span className="whitespace-nowrap">{label}</span>
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={pause}
              className="p-1 hover:bg-amber-200/60 rounded text-amber-800 cursor-pointer"
              title="Jeda narasi"
            >
              <Pause className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={stop}
              className="p-1 hover:bg-amber-200/60 rounded text-amber-800 cursor-pointer"
              title="Hentikan narasi"
            >
              <VolumeX className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={() => {
                stop();
                setTimeout(speak, 100);
              }}
              className="p-1 hover:bg-amber-200/60 rounded text-amber-800 cursor-pointer"
              title="Ulangi dari awal"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
            <span className="font-semibold text-amber-900 animate-pulse whitespace-nowrap">
              Membimbing...
            </span>
          </div>
        )}

        {/* Speed modifier */}
        <button
          type="button"
          onClick={toggleSpeed}
          className="ml-1 px-1.5 py-0.5 text-[10px] font-bold bg-amber-200/60 hover:bg-amber-300/80 text-amber-900 rounded cursor-pointer"
          title="Ubah kecepatan narasi"
        >
          {speechRate}x
        </button>
      </div>
    </div>
  );
};

export default VoiceNarrator;
