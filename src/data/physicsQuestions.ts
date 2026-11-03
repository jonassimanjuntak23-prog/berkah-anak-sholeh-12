import { QuestionData } from '../types/physics';
import { QUESTIONS_PART_1 } from './questionsPart1';
import { QUESTIONS_PART_2 } from './questionsPart2';
import { QUESTIONS_PART_3 } from './questionsPart3';

/**
 * Sumber Acuan Mutlak: Kumpulan Soal Evaluasi Fisika Kelas XII
 * Website: "BERKAH ANAK SOLEH KELAS XII"
 *
 * Seluruh 35 soal (30 Pilihan Ganda + 5 Esai) telah dirombak total pada seluruh
 * besaran angka matematis, stimulus grafik/tabel/rangkaian, pilihan jawaban A-E,
 * kunci jawaban, dan pembahasan metode lambat & cepat agar soal tidak bocor,
 * dengan tetap mempertahankan konsep fisis, rigor ilmiah, dan struktur kurikulum.
 */

export const PHYSICS_QUESTIONS: QuestionData[] = [
  ...QUESTIONS_PART_1,
  ...QUESTIONS_PART_2,
  ...QUESTIONS_PART_3,
];

export default PHYSICS_QUESTIONS;
