import { QuestionData } from '../types/physics';

export const QUESTIONS_PART_2: QuestionData[] = [
  // ==========================================
  // SOAL 16: Gaya Coulomb Tiga Muatan Segaris (Gambar 4)
  // ==========================================
  {
    id: 'pg-16',
    originalNumber: 16,
    type: 'multiple_choice',
    category: 'Elektrostatika & Kapasitor',
    topic: 'Resultan Gaya Coulomb pada Muatan Segaris',
    storyContext:
      'Tiga buah muatan titik diletakkan segaris pada sumbu-x di ruang hampa seperti disajikan pada Gambar 4. Muatan q₁ = +3 μC berada pada posisi x₁ = 0 cm, muatan q₂ = -2 μC berada pada x₂ = 30 cm, dan muatan q₃ = +9 μC berada pada x₃ = 60 cm. Konstanta Coulomb bernilai k = 9 × 10⁹ N·m²/C².',
    questionText:
      'Berdasarkan konfigurasi muatan pada Gambar 4, besar dan arah resultan gaya elektrostatik yang bekerja pada muatan q₂ adalah...',
    stimulusType: 'diagram',
    stimulusTitle: 'Gambar 4: Konfigurasi Tiga Muatan Titik Segaris pada Sumbu-x',
    stimulusSvgType: 'gambar-4-muatan-segaris',
    stimulusData: {
      q1: '+3 μC',
      x1: '0 cm',
      q2: '-2 μC',
      x2: '30 cm',
      q3: '+9 μC',
      x3: '60 cm',
      r12: '30 cm',
      r23: '30 cm',
    },
    options: [
      { id: 'pg-16-opt-a', text: '1,2 N ke arah sumbu-x positif (ke kanan)', isCorrect: true },
      { id: 'pg-16-opt-b', text: '1,2 N ke arah sumbu-x negatif (ke kiri)', isCorrect: false },
      { id: 'pg-16-opt-c', text: '2,4 N ke arah sumbu-x positif (ke kanan)', isCorrect: false },
      { id: 'pg-16-opt-d', text: '0,6 N ke arah sumbu-x negatif (ke kiri)', isCorrect: false },
      { id: 'pg-16-opt-e', text: '1,8 N ke arah sumbu-x positif (ke kanan)', isCorrect: false },
    ],
    slowMethod: {
      title: 'Metode Lengkap (Analisis Vektor Gaya Tiap Pasangan Muatan)',
      steps: [
        {
          label: 'Diketahui',
          content:
            '$q_1 = +3\\ \\mu\\text{C} = +3 \\times 10^{-6}\\text{ C}$ di $x_1 = 0\\text{ m}$.\n$q_2 = -2\\ \\mu\\text{C} = -2 \\times 10^{-6}\\text{ C}$ di $x_2 = 0,3\\text{ m}$.\n$q_3 = +9\\ \\mu\\text{C} = +9 \\times 10^{-6}\\text{ C}$ di $x_3 = 0,6\\text{ m}$.\nJarak $r_{12} = 0,3\\text{ m}$ dan $r_{23} = 0,3\\text{ m}$. Konstanta $k = 9 \\times 10^9\\text{ N}\\cdot\\text{m}^2/\\text{C}^2$.',
        },
        {
          label: 'Ditanyakan',
          content: 'Besar dan arah resultan gaya pada muatan $q_2$ ($F_2$).',
        },
        {
          label: 'Gaya oleh q1 terhadap q2 (F12)',
          content:
            'Karena $q_1$ (+) dan $q_2$ (-), interaksi bersifat tarik-menarik. Maka $q_2$ ditarik ke arah $q_1$ (ke arah sumbu-x negatif / ke kiri):\n$$F_{12} = k \\frac{|q_1 \\cdot q_2|}{r_{12}^2} = 9 \\times 10^9 \\times \\frac{(3 \\times 10^{-6})(2 \\times 10^{-6})}{(0,3)^2}$$\n$$F_{12} = \\frac{54 \\times 10^{-3}}{0,09} = 0,6\\text{ N}\\text{ (ke kiri)}$$',
        },
        {
          label: 'Gaya oleh q3 terhadap q2 (F32)',
          content:
            'Karena $q_3$ (+) dan $q_2$ (-), interaksi bersifat tarik-menarik. Maka $q_2$ ditarik ke arah $q_3$ (ke arah sumbu-x positif / ke kanan):\n$$F_{32} = k \\frac{|q_3 \\cdot q_2|}{r_{23}^2} = 9 \\times 10^9 \\times \\frac{(9 \\times 10^{-6})(2 \\times 10^{-6})}{(0,3)^2}$$\n$$F_{32} = \\frac{162 \\times 10^{-3}}{0,09} = 1,8\\text{ N}\\text{ (ke kanan)}$$',
        },
        {
          label: 'Resultan Gaya pada q2',
          content:
            '$$F_{2} = F_{32} - F_{12} = 1,8\\text{ N} - 0,6\\text{ N} = 1,2\\text{ N}\\text{ (ke arah kanan / sumbu-x positif)}$$',
        },
        {
          label: 'Kesimpulan',
          content:
            'Resultan gaya elektrostatik pada muatan q2 adalah 1,2 N berarah ke sumbu-x positif. Pilihan tepat: A.',
        },
      ],
      finalAnswer: '1,2 N ke kanan (sumbu-x positif)',
    },
    fastMethod: {
      title: 'Metode Cepat (Faktor Pengali Muatan Bersama)',
      steps: [
        {
          label: 'Faktor Bersama',
          content:
            'Kedua jarak sama ($r = 0,3\\text{ m}$). Gaya sebanding dengan perkalian muatan:\nSisi kiri menarik dengan bobot: $3 \\times 2 = 6$.\nSisi kanan menarik dengan bobot: $9 \\times 2 = 18$.\nSelisih bobot ke kanan: $18 - 6 = 12$.\n$$F = 9 \\times 10^9 \\times \\frac{12 \\times 10^{-12}}{0,09} = 1,2\\text{ N}\\text{ ke kanan}.$$',
        },
      ],
      finalAnswer: '1,2 N ke kanan (Opsi A)',
    },
    audioNarrationQuestion:
      'Soal nomor enam belas. Berdasarkan Gambar empat, muatan q satu plus tiga mikro Coulomb di posisi nol, q dua minus dua mikro Coulomb di tiga puluh sentimeter, dan q tiga plus sembilan mikro Coulomb di enam puluh sentimeter. Berapakah resultan gaya Coulomb pada muatan q dua?',
    audioNarrationExplanation:
      'Muatan q dua ditarik ke kiri oleh q satu dengan gaya nol koma enam Newton, dan ditarik ke kanan oleh q tiga dengan gaya satu koma delapan Newton. Karena kedua gaya berlawanan arah, resultan gayanya adalah satu koma delapan dikurangi nol koma enam, menghasilkan satu koma dua Newton mengarah ke kanan atau sumbu-x positif.',
    motivationQuote:
      'Luar biasa! Analisis arah vektor gaya elektrostatik adalah fondasi mekanika muatan partikel.',
  },

  // ==========================================
  // SOAL 17: Medan Listrik Titik Tunggal
  // ==========================================
  {
    id: 'pg-17',
    originalNumber: 17,
    type: 'multiple_choice',
    category: 'Elektrostatika & Kapasitor',
    topic: 'Kuat Medan Listrik Muatan Titik Negatif',
    storyContext:
      'Sebuah muatan uji titik q = -4,0 nC diletakkan terisolasi di ruang hampa. Titik pengamatan P terletak pada garis lurus horizontal berjarak 20 cm tepat di sebelah kanan muatan q tersebut. Diketahui k = 9 × 10⁹ N·m²/C².',
    questionText:
      'Besar dan arah kuat medan listrik di titik P yang ditimbulkan oleh muatan q tersebut adalah...',
    stimulusType: 'none',
    options: [
      {
        id: 'pg-17-opt-a',
        text: 'Besarnya 900 N/C dan arahnya menuju ke kiri (mendekati muatan negatif q).',
        isCorrect: true,
      },
      {
        id: 'pg-17-opt-b',
        text: 'Besarnya 900 N/C dan arahnya menuju ke kanan (menjauhi muatan negatif q).',
        isCorrect: false,
      },
      {
        id: 'pg-17-opt-c',
        text: 'Besarnya 180 N/C dan arahnya menuju ke kiri (mendekati muatan negatif q).',
        isCorrect: false,
      },
      {
        id: 'pg-17-opt-d',
        text: 'Besarnya 360 N/C dan arahnya menuju ke kanan (menjauhi muatan negatif q).',
        isCorrect: false,
      },
      {
        id: 'pg-17-opt-e',
        text: 'Besarnya 1.800 N/C dan arahnya menuju ke kiri (mendekati muatan negatif q).',
        isCorrect: false,
      },
    ],
    slowMethod: {
      title: 'Metode Lengkap (Definisi Vektor Medan Listrik)',
      steps: [
        {
          label: 'Diketahui',
          content:
            'Muatan sumber: $q = -4,0\\text{ nC} = -4,0 \\times 10^{-9}\\text{ C}$. Jarak titik P: $r = 20\\text{ cm} = 0,2\\text{ m}$. Titik P berada di sebelah kanan muatan $q$.',
        },
        {
          label: 'Ditanyakan',
          content: 'Besar dan arah kuat medan listrik di titik P ($E_P$).',
        },
        {
          label: 'Rumus Kuat Medan Listrik',
          content:
            'Besar kuat medan listrik oleh muatan titik:\n$$E = k \\frac{|q|}{r^2}$$',
        },
        {
          label: 'Perhitungan Besar Medan',
          content:
            '$$E = 9 \\times 10^9 \\times \\frac{4,0 \\times 10^{-9}\\text{ C}}{(0,2\\text{ m})^2} = \\frac{36}{0,04} = 900\\text{ N/C}$$',
        },
        {
          label: 'Analisis Arah Vektor Medan',
          content:
            'Arah vektor medan listrik didefinisikan sebagai arah gaya pada muatan uji positif. Oleh karena itu:\n- Medan dari muatan positif berarah menjauhi muatan (radial keluar).\n- Medan dari muatan negatif berarah mendekati muatan (radial masuk).\nKarena titik P berada di sebelah kanan muatan negatif $q$, arah vektor medan listrik di titik P harus mengarah **ke kiri** (menuju/mendekati muatan $q$).',
        },
        {
          label: 'Kesimpulan',
          content:
            'Kuat medan listrik di titik P bernilai 900 N/C berarah ke kiri. Pilihan yang tepat adalah A.',
        },
      ],
      finalAnswer: '900 N/C berarah ke kiri',
    },
    fastMethod: {
      title: 'Metode Cepat (Kaidah Muatan Negatif Menarik Garis Gaya)',
      steps: [
        {
          label: 'Besar',
          content:
            '$E = 9 \\times 4 / (0,04) = 36 / 0,04 = 900\\text{ N/C}$.',
        },
        {
          label: 'Arah',
          content:
            'Muatan negatif = panah medan masuk ke muatan. Titik di sebelah kanan $\\rightarrow$ panah ke kiri. Selesai!',
        },
      ],
      finalAnswer: '900 N/C ke kiri (Opsi A)',
    },
    audioNarrationQuestion:
      'Soal nomor tujuh belas. Muatan titik minus empat koma nol nano Coulomb berada di ruang hampa. Titik P terletak dua puluh sentimeter tepat di sebelah kanan muatan. Tentukan besar dan arah kuat medan listrik di titik P.',
    audioNarrationExplanation:
      'Besar kuat medan dihitung dari konstanta Coulomb dikali muatan empat koma nol nano Coulomb dibagi kuadrat jarak nol koma dua meter, menghasilkan sembilan ratus Newton per Coulomb. Garis medan muatan negatif selalu mengarah masuk menuju muatan. Karena titik P di sebelah kanan muatan negatif, arah medannya adalah ke kiri menuju muatan tersebut.',
    motivationQuote:
      'Hebat! Memahami arah garis gaya listrik adalah kunci menembus persoalan potensial elektrostatik.',
  },

  // ==========================================
  // SOAL 18: Titik Medan Listrik Nol (Gambar 5)
  // ==========================================
  {
    id: 'pg-18',
    originalNumber: 18,
    type: 'multiple_choice',
    category: 'Elektrostatika & Kapasitor',
    topic: 'Letak Titik dengan Kuat Medan Listrik Sama dengan Nol',
    storyContext:
      'Dua buah muatan listrik berlawanan jenis diletakkan terpisah pada jarak d = 30 cm di udara seperti diilustrasikan pada Gambar 5. Nilai muatan q_A = +16 μC dan muatan q_B = -4 μC.',
    questionText:
      'Berdasarkan Gambar 5, letak titik pada garis hubung kedua muatan yang memiliki kuat medan listrik total sama dengan nol (E_total = 0) adalah...',
    stimulusType: 'diagram',
    stimulusTitle: 'Gambar 5: Dua Muatan Berlawanan Jenis q_A dan q_B',
    stimulusSvgType: 'gambar-5-dua-muatan-medan-nol',
    stimulusData: {
      qA: '+16 μC',
      qB: '-4 μC',
      d: '30 cm',
    },
    options: [
      {
        id: 'pg-18-opt-a',
        text: 'Terletak di sebelah kanan muatan q_B sejauh 30 cm dari q_B.',
        isCorrect: true,
      },
      {
        id: 'pg-18-opt-b',
        text: 'Terletak di antara kedua muatan sejauh 20 cm dari muatan q_A.',
        isCorrect: false,
      },
      {
        id: 'pg-18-opt-c',
        text: 'Terletak di sebelah kiri muatan q_A sejauh 30 cm dari q_A.',
        isCorrect: false,
      },
      {
        id: 'pg-18-opt-d',
        text: 'Terletak di sebelah kanan muatan q_B sejauh 15 cm dari q_B.',
        isCorrect: false,
      },
      {
        id: 'pg-18-opt-e',
        text: 'Terletak tepat di tengah-tengah kedua muatan sejauh 15 cm dari q_B.',
        isCorrect: false,
      },
    ],
    slowMethod: {
      title: 'Metode Lengkap (Kondisi Nol pada Muatan Tak Sejenis)',
      steps: [
        {
          label: 'Analisis Daerah',
          content:
            'Karena kedua muatan tak sejenis ($q_A > 0$ dan $q_B < 0$):\n- Di antara kedua muatan, medan dari $q_A$ (ke kanan) dan dari $q_B$ (ke kanan) searah, sehingga tidak mungkin saling meniadakan ($E \\neq 0$).\n- Di sebelah kiri $q_A$, jarak ke muatan besar $q_A$ lebih dekat daripada ke muatan kecil $q_B$, sehingga $E_A > E_B$ selalu, tak mungkin nol.\n- Medan nol pasti berada **di luar kedua muatan pada sisi muatan yang nilai mutlaknya lebih kecil**, yaitu di sebelah kanan $q_B$ (daerah $P_3$).',
        },
        {
          label: 'Menyusun Persamaan',
          content:
            'Misalkan jarak titik tersebut dari $q_B$ adalah $x$, maka jaraknya dari $q_A$ adalah $d + x = 30 + x$.\nSyarat medan total nol: $E_A = E_B$.\n$$k \\frac{|q_A|}{(d + x)^2} = k \\frac{|q_B|}{x^2}$$\n$$\\frac{16}{(30 + x)^2} = \\frac{4}{x^2}$$',
        },
        {
          label: 'Akar Kedua Ruas',
          content:
            '$$\\frac{\\sqrt{16}}{30 + x} = \\frac{\\sqrt{4}}{x} \\implies \\frac{4}{30 + x} = \\frac{2}{x}$$\n$$4x = 2(30 + x) = 60 + 2x$$\n$$2x = 60 \\implies x = 30\\text{ cm}$$',
        },
        {
          label: 'Kesimpulan',
          content:
            'Titik dengan kuat medan listrik nol terletak di sebelah kanan muatan q_B sejauh 30 cm dari q_B. Pilihan tepat: A.',
        },
      ],
      finalAnswer: '30 cm di kanan q_B',
    },
    fastMethod: {
      title: 'Metode Cepat (Formula Cepat Titik Medan Nol)',
      steps: [
        {
          label: 'Formula Cepat Tak Sejenis',
          content:
            '$$x = \\frac{d}{\\sqrt{\\frac{|q_1|}{|q_2|}} - 1}$$\ndi mana $|q_1| > |q_2|$.\n$$x = \\frac{30}{\\sqrt{\\frac{16}{4}} - 1} = \\frac{30}{\\sqrt{4} - 1} = \\frac{30}{2 - 1} = 30\\text{ cm}$$\nPosisi selalu di dekat muatan yang lebih kecil ($q_B$).',
        },
      ],
      finalAnswer: '30 cm di sebelah kanan q_B (Opsi A)',
    },
    audioNarrationQuestion:
      'Soal nomor delapan belas. Berdasarkan Gambar lima, muatan q A plus enam belas mikro Coulomb dan muatan q B minus empat mikro Coulomb terpisah tiga puluh sentimeter. Di manakah letak titik yang memiliki kuat medan listrik total sama dengan nol?',
    audioNarrationExplanation:
      'Karena muatan tidak sejenis, titik medan nol berada di luar kedua muatan dekat muatan yang bermagnitudo lebih kecil, yaitu di sebelah kanan q B. Menggunakan rumus cepat jarak dibagi akar perbandingan muatan dikurangi satu, tiga puluh dibagi akar empat dikurangi satu menghasilkan tepat tiga puluh sentimeter di sebelah kanan muatan q B.',
    motivationQuote:
      'Sempurna! Trik formula cepat medan nol ini sangat menghemat waktu saat ujian bertaraf nasional.',
  },

  // ==========================================
  // SOAL 19: Usaha Medan Listrik vs Usaha Luar
  // ==========================================
  {
    id: 'pg-19',
    originalNumber: 19,
    type: 'multiple_choice',
    category: 'Elektrostatika & Kapasitor',
    topic: 'Potensial Listrik & Usaha Gaya Luar vs Medan',
    storyContext:
      'Dua titik P dan Q dalam suatu daerah medan elektrostatik memiliki potensial listrik masing-masing sebesar VP = +150 V dan VQ = -50 V. Sebuah muatan uji negatif q = -3,0 μC dipindahkan secara perlahan dari titik P menuju titik Q tanpa percepatan kinetik.',
    questionText:
      'Besar dan tanda usaha yang dilakukan oleh gaya medan listrik (W_medan) serta usaha yang dilakukan oleh agen eksternal/gaya luar (W_luar) berturut-turut adalah...',
    stimulusType: 'none',
    options: [
      {
        id: 'pg-19-opt-a',
        text: 'W_medan = -6,0 × 10⁻⁴ J dan W_luar = +6,0 × 10⁻⁴ J',
        isCorrect: true,
      },
      {
        id: 'pg-19-opt-b',
        text: 'W_medan = +6,0 × 10⁻⁴ J dan W_luar = -6,0 × 10⁻⁴ J',
        isCorrect: false,
      },
      {
        id: 'pg-19-opt-c',
        text: 'W_medan = -3,0 × 10⁻⁴ J dan W_luar = +3,0 × 10⁻⁴ J',
        isCorrect: false,
      },
      {
        id: 'pg-19-opt-d',
        text: 'W_medan = +4,5 × 10⁻⁴ J dan W_luar = -4,5 × 10⁻⁴ J',
        isCorrect: false,
      },
      {
        id: 'pg-19-opt-e',
        text: 'W_medan = 0 J dan W_luar = +6,0 × 10⁻⁴ J',
        isCorrect: false,
      },
    ],
    slowMethod: {
      title: 'Metode Lengkap (Hubungan Usaha Medan, Gaya Luar, dan Energi Potensial)',
      steps: [
        {
          label: 'Diketahui',
          content:
            'Potensial titik awal: $V_P = +150\\text{ V}$.\nPotensial titik akhir: $V_Q = -50\\text{ V}$.\nBeda potensial: $\\Delta V = V_Q - V_P = -50 - 150 = -200\\text{ Volt}$.\nMuatan yang dipindahkan: $q = -3,0\\ \\mu\\text{C} = -3,0 \\times 10^{-6}\\text{ C}$.',
        },
        {
          label: 'Ditanyakan',
          content: 'Usaha medan listrik ($W_{\\text{medan}}$) dan usaha gaya luar ($W_{\\text{luar}}$).',
        },
        {
          label: 'Perubahan Energi Potensial Listrik',
          content:
            '$$\\Delta U = q \\cdot \\Delta V = (-3,0 \\times 10^{-6}\\text{ C}) \\times (-200\\text{ V}) = +6,0 \\times 10^{-4}\\text{ Joule}$$',
        },
        {
          label: 'Hubungan dengan Usaha Medan & Luar',
          content:
            '1. Usaha gaya medan listrik adalah negatif dari perubahan energi potensial:\n$$W_{\\text{medan}} = -\\Delta U = -q \\Delta V = - (+6,0 \\times 10^{-4}\\text{ J}) = -6,0 \\times 10^{-4}\\text{ J}$$\n2. Usaha gaya luar (agen eksternal yang melawan medan secara kuasistatik):\n$$W_{\\text{luar}} = +\\Delta U = +6,0 \\times 10^{-4}\\text{ J}$$',
        },
        {
          label: 'Interpretasi Fisis',
          content:
            'Muatan negatif secara alami ditarik ke potensial tinggi. Ketika dipaksa bergerak ke potensial rendah (dari +150 V ke -50 V), muatan bergerak melawan gaya medan alami elektrostatik. Oleh karena itu, gaya medan melakukan usaha negatif, sedangkan gaya luar harus mendorong dan melakukan usaha positif.',
        },
        {
          label: 'Kesimpulan',
          content:
            '$W_{\\text{medan}} = -6,0 \\times 10^{-4}\\text{ J}$ dan $W_{\\text{luar}} = +6,0 \\times 10^{-4}\\text{ J}$. Pilihan tepat: A.',
        },
      ],
      finalAnswer: 'W_medan = -6,0 × 10⁻⁴ J, W_luar = +6,0 × 10⁻⁴ J',
    },
    fastMethod: {
      title: 'Metode Cepat (Analisis Spontanitas Gerak Muatan)',
      steps: [
        {
          label: 'Spontanitas',
          content:
            'Muatan (-) bergerak dari potensial tinggi (+150 V) ke rendah (-50 V) adalah **gerakan tak spontan** (melawan kecenderungan alami). Jadi medan melakukan usaha negatif ($-$ ), gaya luar positif ($+$).\nBesar $|W| = 3\\mu \\times 200 = 600\\mu = 6,0 \\times 10^{-4}\\text{ J}$.',
        },
      ],
      finalAnswer: 'Medan negatif, luar positif 6,0 × 10⁻⁴ J (Opsi A)',
    },
    audioNarrationQuestion:
      'Soal nomor sembilan belas. Titik P berpotensial plus seratus lima puluh Volt dan titik Q minus lima puluh Volt. Muatan minus tiga mikro Coulomb dipindahkan dari P ke Q. Berapakah usaha gaya medan listrik dan usaha gaya luar?',
    audioNarrationExplanation:
      'Beda potensial dari P ke Q adalah minus dua ratus Volt. Dikalikan muatan minus tiga mikro Coulomb menghasilkan perubahan energi potensial positif enam kali sepuluh pangkat minus empat Joule. Karena muatan negatif dipaksa menuju potensial lebih rendah melawan arah alami medan, gaya medan melakukan usaha negatif minus enam koma nol kali sepuluh pangkat minus empat Joule, sedangkan gaya luar melakukan usaha positif sebesar enam koma nol kali sepuluh pangkat minus empat Joule.',
    motivationQuote:
      'Tajam sekali! Membedakan usaha medan dan usaha agen eksternal adalah pembeda siswa biasa dengan juara olimpiade.',
  },

  // ==========================================
  // SOAL 20: Kapasitas Kapasitor Keping Sejajar Modifikasi
  // ==========================================
  {
    id: 'pg-20',
    originalNumber: 20,
    type: 'multiple_choice',
    category: 'Elektrostatika & Kapasitor',
    topic: 'Faktor yang Mempengaruhi Kapasitas Kapasitor Pelat Sejajar',
    storyContext:
      'Sebuah kapasitor keping sejajar mula-mula memiliki kapasitas C₀ = 10 μF saat ruang antarkepingnya berupa ruang hampa udara. Kapasitor tersebut kemudian dimodifikasi secara geometris dan material: luas penampang masing-masing keping diperbesar menjadi 3 kali lipat dari semula, jarak pemisah antarkeping dipersempit menjadi setengah (1/2) dari jarak semula, dan seluruh ruang antarkeping disisipkan bahan dielektrik dengan konstanta dielektrik κ = 4.',
    questionText:
      'Nilai kapasitas kapasitor setelah dilakukan modifikasi tersebut adalah...',
    stimulusType: 'none',
    options: [
      { id: 'pg-20-opt-a', text: '240 μF', isCorrect: true },
      { id: 'pg-20-opt-b', text: '120 μF', isCorrect: false },
      { id: 'pg-20-opt-c', text: '60 μF', isCorrect: false },
      { id: 'pg-20-opt-d', text: '180 μF', isCorrect: false },
      { id: 'pg-20-opt-e', text: '480 μF', isCorrect: false },
    ],
    slowMethod: {
      title: 'Metode Lengkap (Rumus Kapasitansi Keping Sejajar)',
      steps: [
        {
          label: 'Diketahui',
          content:
            'Kapasitas awal ruang hampa: $C_0 = 10\\ \\mu\\text{F}$.\nLuas penampang baru: $A\' = 3 A$.\nJarak pemisah baru: $d\' = \\frac{1}{2} d$.\nKonstanta dielektrik: $\\kappa = 4$.',
        },
        {
          label: 'Ditanyakan',
          content: 'Kapasitas baru kapasitor ($C\'$).',
        },
        {
          label: 'Rumus Kapasitansi Keping Sejajar',
          content:
            '$$C_0 = \\varepsilon_0 \\frac{A}{d}$$\n$$C\' = \\kappa \\varepsilon_0 \\frac{A\'}{d\'}$$',
        },
        {
          label: 'Substitusi Perubahan',
          content:
            '$$C\' = 4 \\cdot \\varepsilon_0 \\frac{3 A}{\\frac{1}{2} d} = 4 \\times \\frac{3}{\\frac{1}{2}} \\left(\\varepsilon_0 \\frac{A}{d}\\right)$$\n$$C\' = 4 \\times 6 \\times C_0 = 24 \\times C_0$$\n$$C\' = 24 \\times 10\\ \\mu\\text{F} = 240\\ \\mu\\text{F}$$',
        },
        {
          label: 'Kesimpulan',
          content:
            'Kapasitas baru kapasitor adalah 240 μF. Pilihan yang tepat adalah A.',
        },
      ],
      finalAnswer: '240 μF',
    },
    fastMethod: {
      title: 'Metode Cepat (Perkalian Faktor Pengali)',
      steps: [
        {
          label: 'Faktor Pengali',
          content:
            'Pengali $= \\kappa \\times \\frac{\\text{faktor } A}{\\text{faktor } d} = 4 \\times \\frac{3}{1/2} = 4 \\times 6 = 24$.\nKapasitas baru $= 24 \\times 10\\ \\mu\\text{F} = 240\\ \\mu\\text{F}$.',
        },
      ],
      finalAnswer: '240 μF (Opsi A)',
    },
    audioNarrationQuestion:
      'Soal nomor dua puluh. Kapasitor keping sejajar sepuluh mikro Farad dimodifikasi: luas keping diperbesar tiga kali, jarak keping dijadikan setengahnya, dan disisipkan dielektrik berkonstanta empat. Berapakah kapasitas kapasitor sekarang?',
    audioNarrationExplanation:
      'Kapasitansi berbanding lurus dengan konstanta dielektrik dan luas pelat, serta berbanding terbalik dengan jarak pelat. Faktor pengali total adalah empat dikali tiga dibagi setengah, yang sama dengan dua puluh empat kali lipat. Dikalikan kapasitas awal sepuluh mikro Farad menghasilkan kapasitas baru sebesar dua ratus empat puluh mikro Farad.',
    motivationQuote:
      'Hebat! Trik faktor pengali membuat perhitungan fisika proporsional menjadi sangat cepat dan tepat.',
  },

  // ==========================================
  // SOAL 21: Efek Penarikan Keping pada Kapasitor Terisolasi
  // ==========================================
  {
    id: 'pg-21',
    originalNumber: 21,
    type: 'multiple_choice',
    category: 'Elektrostatika & Kapasitor',
    topic: 'Kapasitor Terisolasi (Muatan Konstan) & Penarikan Keping',
    storyContext:
      'Sebuah kapasitor keping sejajar dihubungkan ke sumber tegangan baterai hingga terisi muatan penuh, kemudian dilepaskan dari baterai sehingga kapasitor dalam kondisi terisolasi sempurna (muatan Q konstan). Dengan menggunakan pegangan berisolator, kedua keping kapasitor ditarik saling menjauh secara perlahan sehingga jarak antarkeping bertambah menjadi 3 kali semula (d\' = 3d).',
    questionText:
      'Berdasarkan hukum fisika elektrostatika, besaran-besaran fisis yang nilainya ikut bertambah menjadi 3 kali lipat dari nilai awalnya adalah...',
    stimulusType: 'none',
    options: [
      {
        id: 'pg-21-opt-a',
        text: 'Beda potensial antarkeping dan energi potensial elektrostatik yang tersimpan.',
        isCorrect: true,
      },
      {
        id: 'pg-21-opt-b',
        text: 'Kapasitas kapasitor dan kuat medan listrik antarkeping.',
        isCorrect: false,
      },
      {
        id: 'pg-21-opt-c',
        text: 'Muatan yang tersimpan pada keping dan beda potensial antarkeping.',
        isCorrect: false,
      },
      {
        id: 'pg-21-opt-d',
        text: 'Kuat medan listrik antarkeping dan energi potensial elektrostatik.',
        isCorrect: false,
      },
      {
        id: 'pg-21-opt-e',
        text: 'Hanya kapasitas kapasitor saja yang bertambah 3 kali lipat.',
        isCorrect: false,
      },
    ],
    slowMethod: {
      title: 'Metode Lengkap (Analisis Sistem Kapasitor Terisolasi)',
      steps: [
        {
          label: 'Kondisi Batas',
          content:
            'Kapasitor dilepaskan dari baterai: muatan terisolasi konstan ($Q\' = Q$). Jarak keping menjadi $d\' = 3d$.',
        },
        {
          label: 'Evaluasi Kapasitansi (C)',
          content:
            '$$C = \\frac{\\varepsilon_0 A}{d} \\implies C\' = \\frac{\\varepsilon_0 A}{3d} = \\frac{1}{3} C\\text{ (turun menjadi 1/3)}$$',
        },
        {
          label: 'Evaluasi Beda Potensial (V)',
          content:
            '$$V = \\frac{Q}{C} \\implies V\' = \\frac{Q}{C\'} = \\frac{Q}{\\frac{1}{3} C} = 3 \\left(\\frac{Q}{C}\\right) = 3V\\text{ (naik 3 kali lipat)}$$',
        },
        {
          label: 'Evaluasi Kuat Medan Listrik (E)',
          content:
            '$$E = \\frac{V}{d} = \\frac{3V}{3d} = \\frac{V}{d} = E\\text{ (konstan)}$$',
        },
        {
          label: 'Evaluasi Energi Potensial Elektrostatik (U)',
          content:
            '$$U = \\frac{Q^2}{2C} \\implies U\' = \\frac{Q^2}{2(\\frac{1}{3}C)} = 3 \\left(\\frac{Q^2}{2C}\\right) = 3U\\text{ (naik 3 kali lipat)}$$\n(Kenaikan energi ini berasal dari usaha luar yang dilakukan saat menarik kedua keping yang saling tarik-menarik).',
        },
        {
          label: 'Kesimpulan',
          content:
            'Besaran yang naik 3 kali lipat adalah beda potensial antarkeping ($V$) dan energi potensial elektrostatik ($U$). Pilihan tepat: A.',
        },
      ],
      finalAnswer: 'Beda potensial (V) dan Energi potensial (U)',
    },
    fastMethod: {
      title: 'Metode Cepat (Kaidah Q Konstan: V & U Sebanding d)',
      steps: [
        {
          label: 'Hubungan Langsung',
          content:
            'Saat $Q$ konstan: $V = E \\cdot d$ dan $E = \\frac{\\sigma}{\\varepsilon_0} = \\text{konstan}$.\nKarena $E$ konstan, maka $V \\propto d$ dan $U = \\frac{1}{2} Q V \\propto d$.\nKetika $d$ menjadi 3 kali lipat, maka $V$ dan $U$ otomatis menjadi 3 kali lipat.',
        },
      ],
      finalAnswer: 'V dan U naik 3 kali (Opsi A)',
    },
    audioNarrationQuestion:
      'Soal nomor dua puluh satu. Kapasitor yang sudah dimuati dilepas dari sumber sehingga muatannya konstan. Jika keping kapasitor dijauhkan menjadi tiga kali semula, besaran manakah yang ikut bertambah menjadi tiga kali lipat?',
    audioNarrationExplanation:
      'Karena muatan konstan dan medan listrik antarkeping tetap, beda potensial yang sama dengan medan dikali jarak akan naik sebanding dengan jarak, yaitu menjadi tiga kali lipat. Begitu pula energi potensial elektrostatik yang tersimpan, karena usaha luar dilakukan untuk memisahkan pelat yang saling tarik-menarik, energi yang tersimpan juga melonjak menjadi tiga kali lipat.',
    motivationQuote:
      'Luar biasa! Konsep konservasi muatan dan energi potensial elektrostatik terbukti telah kamu kuasai.',
  },

  // ==========================================
  // SOAL 22: Penyisipan Dielektrik Baterai Terhubung
  // ==========================================
  {
    id: 'pg-22',
    originalNumber: 22,
    type: 'multiple_choice',
    category: 'Elektrostatika & Kapasitor',
    topic: 'Kapasitor Terhubung Baterai & Efek Bahan Dielektrik',
    storyContext:
      'Sebuah kapasitor keping sejajar tetap terhubung secara kontinu dengan baterai bertegangan konstan V = 36 V. Mula-mula ruang antarkeping berisi udara. Kemudian, ke dalam ruang antarkeping disisipkan penuh lembaran dielektrik dengan konstanta dielektrik κ = 5.',
    questionText:
      'Berdasarkan kondisi baterai yang tetap terhubung, pernyataan yang benar mengenai perubahan muatan (Q) dan energi listrik yang tersimpan (U) adalah...',
    stimulusType: 'none',
    options: [
      {
        id: 'pg-22-opt-a',
        text: 'Muatan yang tersimpan naik 5 kali lipat, dan energi listrik yang tersimpan naik 5 kali lipat.',
        isCorrect: true,
      },
      {
        id: 'pg-22-opt-b',
        text: 'Muatan yang tersimpan tetap konstan, sedangkan energi yang tersimpan turun menjadi seperlima.',
        isCorrect: false,
      },
      {
        id: 'pg-22-opt-c',
        text: 'Muatan yang tersimpan naik 5 kali lipat, sedangkan energi yang tersimpan turun menjadi seperlima.',
        isCorrect: false,
      },
      {
        id: 'pg-22-opt-d',
        text: 'Beda potensial naik 5 kali lipat sehingga energi listrik yang tersimpan naik 25 kali lipat.',
        isCorrect: false,
      },
      {
        id: 'pg-22-opt-e',
        text: 'Muatan dan energi yang tersimpan tidak berubah karena tegangan baterai dijaga konstan.',
        isCorrect: false,
      },
    ],
    slowMethod: {
      title: 'Metode Lengkap (Kondisi Tegangan Konstan)',
      steps: [
        {
          label: 'Kondisi Batas',
          content:
            'Baterai tetap terhubung, artinya beda potensial antarkeping terkunci konstan pada $V = 36\\text{ V}$. Disisipkan dielektrik $\\kappa = 5$.',
        },
        {
          label: 'Perubahan Kapasitansi',
          content:
            '$$C\' = \\kappa \\cdot C_0 = 5 C_0$$',
        },
        {
          label: 'Perubahan Muatan (Q)',
          content:
            '$$Q = C \\cdot V \\implies Q\' = C\' \\cdot V = (5 C_0) \\cdot V = 5 (C_0 V) = 5 Q_0$$\n(Muatan mengalir tambahan dari kutub baterai ke keping kapasitor sehingga naik 5 kali lipat).',
        },
        {
          label: 'Perubahan Energi (U)',
          content:
            'Karena $V$ konstan, gunakan rumus $U = \\frac{1}{2} C V^2$:\n$$U\' = \\frac{1}{2} C\' V^2 = \\frac{1}{2} (5 C_0) V^2 = 5 \\left(\\frac{1}{2} C_0 V^2\\right) = 5 U_0$$\nEnergi listrik tersimpan naik 5 kali lipat.',
        },
        {
          label: 'Kesimpulan',
          content:
            'Muatan naik 5 kali lipat dan energi listrik tersimpan naik 5 kali lipat. Pilihan tepat: A.',
        },
      ],
      finalAnswer: 'Muatan naik 5x, Energi naik 5x',
    },
    fastMethod: {
      title: 'Metode Cepat (V Konstan: Q dan U Proporsional C)',
      steps: [
        {
          label: 'Hubungan Proporsional',
          content:
            'Saat $V$ konstan: $Q \\propto C$ dan $U \\propto C$.\nKarena $C$ naik $\\kappa = 5$ kali lipat, maka $Q$ dan $U$ sama-sama naik 5 kali lipat.',
        },
      ],
      finalAnswer: 'Keduanya naik 5 kali (Opsi A)',
    },
    audioNarrationQuestion:
      'Soal nomor dua puluh dua. Kapasitor keping sejajar tetap terhubung pada baterai tiga puluh enam Volt. Jika disisipkan bahan dielektrik dengan konstanta lima, bagaimanakah perubahan muatan dan energi listrik yang tersimpan?',
    audioNarrationExplanation:
      'Karena terhubung pada baterai, tegangan dijaga konstan tiga puluh enam Volt. Penyisipan dielektrik berkonstanta lima menaikkan kapasitas kapasitor lima kali lipat. Akibatnya muatan yang ditarik dari baterai naik lima kali lipat, dan energi elektrostatik yang tersimpan juga naik lima kali lipat.',
    motivationQuote:
      'Bagus sekali! Membedakan kasus baterai terhubung vs baterai dilepas adalah inti elektrostatika kapasitor.',
  },

  // ==========================================
  // SOAL 23: Energi Lampu Kilat Kamera (Flash Xenon)
  // ==========================================
  {
    id: 'pg-23',
    originalNumber: 23,
    type: 'multiple_choice',
    category: 'Elektrostatika & Kapasitor',
    topic: 'Energi Disimpan Kapasitor & Daya Pelepasan Kilat (Flash)',
    storyContext:
      'Sirkuit elektronik lampu kilat (blitz xenon) pada kamera profesional dilengkapi kapasitor penyimpan energi berkapasitas C = 500 μF. Kapasitor tersebut dimuati oleh inverter tegangan hingga beda potensialnya mencapai V = 400 V. Saat tombol pemotretan ditekan, seluruh energi yang tersimpan dilepaskan ke dalam tabung gas xenon dalam denyut waktu kilat yang sangat singkat, yaitu selama Δt = 2,5 milisekon (2,5 ms).',
    questionText:
      'Besar energi elektrostatik yang tersimpan di dalam kapasitor sebelum ditembakkan serta daya rata-rata pulsa kilatan cahaya yang dihasilkan berturut-turut adalah...',
    stimulusType: 'none',
    options: [
      { id: 'pg-23-opt-a', text: '40 Joule dan 16 kW', isCorrect: true },
      { id: 'pg-23-opt-b', text: '80 Joule dan 32 kW', isCorrect: false },
      { id: 'pg-23-opt-c', text: '40 Joule dan 8 kW', isCorrect: false },
      { id: 'pg-23-opt-d', text: '20 Joule dan 10 kW', isCorrect: false },
      { id: 'pg-23-opt-e', text: '100 Joule dan 40 kW', isCorrect: false },
    ],
    slowMethod: {
      title: 'Metode Lengkap (Energi Kapasitor & Laju Pelepasan Daya)',
      steps: [
        {
          label: 'Diketahui',
          content:
            'Kapasitas: $C = 500\\ \\mu\\text{F} = 500 \\times 10^{-6}\\text{ F} = 5 \\times 10^{-4}\\text{ F}$.\nTegangan pengisian: $V = 400\\text{ V}$.\nDurasi pelepasan kilat: $\\Delta t = 2,5\\text{ ms} = 2,5 \\times 10^{-3}\\text{ s}$.',
        },
        {
          label: 'Ditanyakan',
          content: 'Energi elektrostatik tersimpan ($W$) dan daya rata-rata pelepasan ($P$).',
        },
        {
          label: 'Perhitungan Energi Elektrostatik (W)',
          content:
            '$$W = \\frac{1}{2} C V^2 = \\frac{1}{2} \\times (500 \\times 10^{-6}\\text{ F}) \\times (400\\text{ V})^2$$\n$$W = 250 \\times 10^{-6} \\times 160.000 = 40,0\\text{ Joule}$$',
        },
        {
          label: 'Perhitungan Daya Rata-Rata Pulsa (P)',
          content:
            '$$P = \\frac{W}{\\Delta t} = \\frac{40\\text{ Joule}}{2,5 \\times 10^{-3}\\text{ sekon}} = \\frac{40}{0,0025} = 16.000\\text{ Watt} = 16\\text{ kW}$$',
        },
        {
          label: 'Kesimpulan',
          content:
            'Energi tersimpan adalah 40 Joule dan daya rata-rata kilatan lampu adalah 16 kW (16.000 W). Pilihan tepat: A.',
        },
      ],
      finalAnswer: '40 Joule dan 16 kW',
    },
    fastMethod: {
      title: 'Metode Cepat (Hitung Cepat Satuan)',
      steps: [
        {
          label: 'Energi',
          content:
            '$W = 0,5 \\times (0,5\\text{ mF}) \\times 160.000 = 40\\text{ J}$.',
        },
        {
          label: 'Daya',
          content:
            '$P = 40 / 0,0025 = 40 \\times 400 = 16.000\\text{ W} = 16\\text{ kW}$.',
        },
      ],
      finalAnswer: '40 J dan 16 kW (Opsi A)',
    },
    audioNarrationQuestion:
      'Soal nomor dua puluh tiga. Kapasitor blitz kamera lima ratus mikro Farad dimuati hingga empat ratus Volt. Muatan dilepaskan ke tabung xenon dalam dua koma lima milisekon. Berapakah energi tersimpan dan daya rata-rata pulsa kilatannya?',
    audioNarrationExplanation:
      'Energi tersimpan dihitung dari setengah dikali kapasitas lima ratus mikro Farad dikali kuadrat tegangan empat ratus Volt, menghasilkan empat puluh Joule. Daya rata-rata adalah energi empat puluh Joule dibagi waktu pelepasan yang sangat singkat dua koma lima kali sepuluh pangkat minus tiga detik, menghasilkan enam belas ribu Watt atau enam belas kilowatt.',
    motivationQuote:
      'Hebat! Kapasitor dapat menghasilkan daya pulsa raksasa karena kemampuannya melepas energi dalam waktu super singkat.',
  },

  // ==========================================
  // SOAL 24: Rangkaian Kapasitor Campuran (Gambar 7)
  // ==========================================
  {
    id: 'pg-24',
    originalNumber: 24,
    type: 'multiple_choice',
    category: 'Elektrostatika & Kapasitor',
    topic: 'Muatan Total & Beda Potensial pada Rangkaian Gabungan Kapasitor',
    storyContext:
      'Perhatikan susunan rangkaian kapasitor gabungan seri-paralel pada Gambar 7 yang dihubungkan dengan sumber tegangan baterai V = 24 Volt. Nilai masing-masing kapasitor adalah C₁ = 8 μF, C₂ = 8 μF, C₃ = 6 μF, dan C₄ = 10 μF.',
    questionText:
      'Berdasarkan Gambar 7, muatan listrik total yang ditarik dari sumber tegangan (Q_total) serta beda potensial yang melintasi kapasitor C₁ berturut-turut adalah...',
    stimulusType: 'circuit',
    stimulusTitle: 'Gambar 7: Rangkaian Kapasitor Gabungan Seri-Paralel',
    stimulusSvgType: 'gambar-7-kapasitor-campuran',
    stimulusData: {
      V: '24 Volt',
      C1: '8 μF',
      C2: '8 μF',
      C3: '6 μF',
      C4: '10 μF',
    },
    options: [
      { id: 'pg-24-opt-a', text: '120 μC dan 6,0 Volt', isCorrect: true },
      { id: 'pg-24-opt-b', text: '120 μC dan 12,0 Volt', isCorrect: false },
      { id: 'pg-24-opt-c', text: '240 μC dan 6,0 Volt', isCorrect: false },
      { id: 'pg-24-opt-d', text: '96 μC dan 8,0 Volt', isCorrect: false },
      { id: 'pg-24-opt-e', text: '180 μC dan 4,0 Volt', isCorrect: false },
    ],
    slowMethod: {
      title: 'Metode Lengkap (Penyederhanaan Blok Ekuivalen Bertahap)',
      steps: [
        {
          label: 'Kapasitas Cabang Seri C1 dan C2',
          content:
            'Kapasitor $C_1 = 8\\ \\mu\\text{F}$ dan $C_2 = 8\\ \\mu\\text{F}$ terhubung seri:\n$$\\frac{1}{C_{12}} = \\frac{1}{8} + \\frac{1}{8} = \\frac{2}{8} \\implies C_{12} = 4\\ \\mu\\text{F}$$',
        },
        {
          label: 'Kapasitas Blok Paralel (C12 // C3)',
          content:
            'Cabang $C_{12}$ paralel dengan $C_3 = 6\\ \\mu\\text{F}$:\n$$C_p = C_{12} + C_3 = 4\\ \\mu\\text{F} + 6\\ \\mu\\text{F} = 10\\ \\mu\\text{F}$$',
        },
        {
          label: 'Kapasitas Total Ekuivalen Sirkuit',
          content:
            'Blok paralel $C_p = 10\\ \\mu\\text{F}$ terhubung seri dengan $C_4 = 10\\ \\mu\\text{F}$:\n$$C_{\\text{total}} = \\frac{C_p \\times C_4}{C_p + C_4} = \\frac{10 \\times 10}{10 + 10} = 5\\ \\mu\\text{F}$$',
        },
        {
          label: 'Muatan Total Rangkaian (Q_total)',
          content:
            '$$Q_{\\text{total}} = C_{\\text{total}} \\times V = 5\\ \\mu\\text{F} \\times 24\\text{ V} = 120\\ \\mu\\text{C}$$',
        },
        {
          label: 'Beda Potensial pada Kapasitor C1',
          content:
            'Karena $C_p = 10\\ \\mu\\text{F}$ dan $C_4 = 10\\ \\mu\\text{F}$ bernilai sama dan terhubung seri ke sumber $24\\text{ V}$, maka tegangan terbagi sama besar:\n$$V_p = V_4 = \\frac{24\\text{ V}}{2} = 12\\text{ Volt}$$\nBeda potensial melintasi cabang atas ($C_1$ dan $C_2$) adalah $V_p = 12\\text{ Volt}$.\nKarena $C_1$ dan $C_2$ identik ($8\\ \\mu\\text{F}$ masing-masing) dan tersambung seri, tegangan $12\\text{ V}$ terbagi rata:\n$$V_1 = \\frac{12\\text{ V}}{2} = 6,0\\text{ Volt}$$',
        },
        {
          label: 'Kesimpulan',
          content:
            'Muatan total adalah 120 μC dan tegangan pada C₁ adalah 6,0 Volt. Pilihan yang tepat adalah A.',
        },
      ],
      finalAnswer: '120 μC dan 6,0 Volt',
    },
    fastMethod: {
      title: 'Metode Cepat (Pembagian Tegangan Simetris)',
      steps: [
        {
          label: 'Kapasitas Total',
          content:
            '$(8\\text{ seri }8) = 4\\ \\mu\\text{F}$.\nParalel dengan 6: $4 + 6 = 10\\ \\mu\\text{F}$.\nSeri dengan 10: $10\\text{ seri }10 = 5\\ \\mu\\text{F}$.\n$Q_{\\text{tot}} = 5 \\times 24 = 120\\ \\mu\\text{C}$.',
        },
        {
          label: 'Beda Potensial C1',
          content:
            'Tegangan pada blok paralel $= 24 / 2 = 12\\text{ V}$. Karena $C_1 = C_2$, maka $V_1 = 12 / 2 = 6\\text{ V}$.',
        },
      ],
      finalAnswer: '120 μC dan 6,0 V (Opsi A)',
    },
    audioNarrationQuestion:
      'Soal nomor dua puluh empat. Berdasarkan rangkaian Gambar tujuh, kapasitor C satu delapan mikro Farad, C dua delapan mikro Farad, C tiga enam mikro Farad, dan C empat sepuluh mikro Farad dihubungkan ke sumber dua puluh empat Volt. Tentukan muatan total dan tegangan pada kapasitor C satu.',
    audioNarrationExplanation:
      'C satu dan C dua seri menghasilkan empat mikro Farad. Diparalel dengan C tiga enam mikro Farad menghasilkan sepuluh mikro Farad. Diseri dengan C empat sepuluh mikro Farad menghasilkan kapasitas total lima mikro Farad. Muatan total adalah lima mikro Farad dikali dua puluh empat Volt, yaitu seratus dua puluh mikro Coulomb. Tegangan blok paralel adalah dua belas Volt, yang terbagi rata pada C satu dan C dua sehingga tegangan pada C satu adalah enam Volt.',
    motivationQuote:
      'Keren! Penyederhanaan sirkuit kapasitor bertahap membuat persoalan rumit menjadi sangat mudah dipahami.',
  },

  // ==========================================
  // SOAL 25: Berbagi Muatan & Energi Terdisipasi
  // ==========================================
  {
    id: 'pg-25',
    originalNumber: 25,
    type: 'multiple_choice',
    category: 'Elektrostatika & Kapasitor',
    topic: 'Penyatuan Kapasitor (Charge Sharing) & Disipasi Energi',
    storyContext:
      'Sebuah kapasitor C₁ = 6 μF mula-mula dimuati dengan menghubungkannya ke sumber tegangan 50 V hingga terisi penuh, lalu dilepaskan dari sumber tegangan. Kapasitor bermuatan tersebut kemudian dihubungkan secara paralel dengan kapasitor lain C₂ = 4 μF yang mula-mula kosong tidak bermuatan (kutub positif dihubungkan ke kutub positif).',
    questionText:
      'Beda potensial akhir bersama pada kedua kapasitor serta jumlah energi elektrostatik yang terdisipasi (hilang menjadi panas dan radiasi) selama proses penyatuan muatan tersebut berturut-turut adalah...',
    stimulusType: 'none',
    options: [
      {
        id: 'pg-25-opt-a',
        text: '30 V dan 3,0 × 10⁻³ Joule',
        isCorrect: true,
      },
      {
        id: 'pg-25-opt-b',
        text: '30 V dan 7,5 × 10⁻³ Joule',
        isCorrect: false,
      },
      {
        id: 'pg-25-opt-c',
        text: '25 V dan 3,0 × 10⁻³ Joule',
        isCorrect: false,
      },
      {
        id: 'pg-25-opt-d',
        text: '50 V dan 4,5 × 10⁻³ Joule',
        isCorrect: false,
      },
      {
        id: 'pg-25-opt-e',
        text: '20 V dan 1,5 × 10⁻³ Joule',
        isCorrect: false,
      },
    ],
    slowMethod: {
      title: 'Metode Lengkap (Kekekalan Muatan & Selisih Energi)',
      steps: [
        {
          label: 'Keadaan Awal',
          content:
            'Muatan awal pada $C_1 = 6\\ \\mu\\text{F}$:\n$$Q_1 = C_1 \\cdot V_1 = 6\\ \\mu\\text{F} \\times 50\\text{ V} = 300\\ \\mu\\text{C}$$\nKapasitor $C_2 = 4\\ \\mu\\text{F}$ mula-mula kosong ($Q_2 = 0$).\nEnergi total awal:\n$$E_{\\text{awal}} = \\frac{1}{2} C_1 V_1^2 = \\frac{1}{2} \\times (6 \\times 10^{-6}\\text{ F}) \\times (50\\text{ V})^2$$\n$$E_{\\text{awal}} = 3 \\times 10^{-6} \\times 2.500 = 7,5 \\times 10^{-3}\\text{ Joule}$$',
        },
        {
          label: 'Beda Potensial Akhir Bersama (V\')',
          content:
            'Menurut hukum kekekalan muatan, muatan total awal sama dengan muatan total akhir:\n$$Q_{\\text{total}} = Q_1 = 300\\ \\mu\\text{C}$$\nKapasitas paralel total: $C_p = C_1 + C_2 = 6\\ \\mu\\text{F} + 4\\ \\mu\\text{F} = 10\\ \\mu\\text{F}$.\n$$V\' = \\frac{Q_{\\text{total}}}{C_p} = \\frac{300\\ \\mu\\text{C}}{10\\ \\mu\\text{F}} = 30\\text{ Volt}$$',
        },
        {
          label: 'Energi Total Akhir',
          content:
            '$$E_{\\text{akhir}} = \\frac{1}{2} C_p (V\')^2 = \\frac{1}{2} \\times (10 \\times 10^{-6}\\text{ F}) \\times (30\\text{ V})^2$$\n$$E_{\\text{akhir}} = 5 \\times 10^{-6} \\times 900 = 4,5 \\times 10^{-3}\\text{ Joule}$$',
        },
        {
          label: 'Energi yang Terdisipasi (Hilang)',
          content:
            '$$\\Delta E = E_{\\text{awal}} - E_{\\text{akhir}} = 7,5 \\times 10^{-3}\\text{ J} - 4,5 \\times 10^{-3}\\text{ J} = 3,0 \\times 10^{-3}\\text{ Joule}$$',
        },
        {
          label: 'Kesimpulan',
          content:
            'Beda potensial bersama adalah 30 V dan energi yang terdisipasi adalah 3,0 × 10⁻³ Joule. Pilihan tepat: A.',
        },
      ],
      finalAnswer: '30 V dan 3,0 × 10⁻³ Joule',
    },
    fastMethod: {
      title: 'Metode Cepat (Rumus Langsung Energi Terdisipasi)',
      steps: [
        {
          label: 'Tegangan Akhir',
          content:
            '$$V\' = \\frac{C_1 V_1}{C_1 + C_2} = \\frac{6 \\times 50}{10} = 30\\text{ V}.$$',
        },
        {
          label: 'Rumus Cepat Disipasi',
          content:
            '$$\\Delta E = \\frac{1}{2} \\frac{C_1 C_2}{C_1 + C_2} V_1^2 = \\frac{1}{2} \\times \\frac{6 \\times 4}{10} \\times 10^{-6} \\times 2.500$$\n$$\\Delta E = 1,2 \\times 10^{-6} \\times 2.500 = 3,0 \\times 10^{-3}\\text{ J}.$$',
        },
      ],
      finalAnswer: '30 V dan 3,0 × 10⁻³ J (Opsi A)',
    },
    audioNarrationQuestion:
      'Soal nomor dua puluh lima. Kapasitor enam mikro Farad dimuati hingga lima puluh Volt lalu dihubungkan paralel dengan kapasitor empat mikro Farad yang kosong. Tentukan beda potensial bersama dan energi yang terdisipasi selama proses penggabungan.',
    audioNarrationExplanation:
      'Muatan awal sebesar tiga ratus mikro Coulomb dibagi ke kapasitas total sepuluh mikro Farad menghasilkan tegangan bersama sebesar tiga puluh Volt. Energi awal adalah tujuh koma lima milijoule, sedangkan energi akhir setelah penggabungan menjadi empat koma lima milijoule. Selisih energi sebesar tiga koma nol kali sepuluh pangkat minus tiga Joule hilang sebagai kalor pada kawat penghantar dan radiasi gelombang elektromagnetik.',
    motivationQuote:
      'Luar biasa! Menguasai disipasi energi pada penyatuan kapasitor menunjukkan kedalaman pemahaman termodinamika elektrostatika.',
  },

  // ==========================================
  // SOAL 26: Kapasitor Dua Lapisan Dielektrik Berlapis
  // ==========================================
  {
    id: 'pg-26',
    originalNumber: 26,
    type: 'multiple_choice',
    category: 'Elektrostatika & Kapasitor',
    topic: 'Kapasitor dengan Dua Lapisan Dielektrik Bertingkat',
    storyContext:
      'Sebuah kapasitor keping sejajar dengan jarak pisah antarkeping d memiliki kapasitas C₀ saat berisi ruang hampa. Di antara kedua keping tersebut kemudian dimasukkan dua lapisan bahan dielektrik berbeda secara bertingkat: lapisan pertama memiliki konstanta dielektrik κ₁ = 3 dengan ketebalan d₁ = d/2, dan lapisan kedua memiliki konstanta dielektrik κ₂ = 6 dengan ketebalan d₂ = d/2. Kedua lapisan menutupi seluruh luas penampang keping A.',
    questionText:
      'Kapasitas kapasitor yang tersusun atas dua lapisan dielektrik tersebut dinyatakan dalam C₀ adalah...',
    stimulusType: 'none',
    options: [
      { id: 'pg-26-opt-a', text: '4,0 C₀', isCorrect: true },
      { id: 'pg-26-opt-b', text: '4,5 C₀', isCorrect: false },
      { id: 'pg-26-opt-c', text: '2,0 C₀', isCorrect: false },
      { id: 'pg-26-opt-d', text: '9,0 C₀', isCorrect: false },
      { id: 'pg-26-opt-e', text: '3,0 C₀', isCorrect: false },
    ],
    slowMethod: {
      title: 'Metode Lengkap (Model Dua Kapasitor Seri)',
      steps: [
        {
          label: 'Pemodelan Fisika',
          content:
            'Karena kedua lapisan dielektrik disusun membagi ketebalan celah $d$ secara bertingkat ($d_1 = d/2$ dan $d_2 = d/2$), sistem ini ekuivalen dengan dua kapasitor yang terhubung secara **seri**.',
        },
        {
          label: 'Kapasitansi Masing-Masing Lapisan',
          content:
            '$$C_1 = \\kappa_1 \\varepsilon_0 \\frac{A}{d_1} = 3 \\varepsilon_0 \\frac{A}{d/2} = 6 \\left(\\varepsilon_0 \\frac{A}{d}\\right) = 6 C_0$$\n$$C_2 = \\kappa_2 \\varepsilon_0 \\frac{A}{d_2} = 6 \\varepsilon_0 \\frac{A}{d/2} = 12 \\left(\\varepsilon_0 \\frac{A}{d}\\right) = 12 C_0$$',
        },
        {
          label: 'Hubungan Seri',
          content:
            '$$\\frac{1}{C_{\\text{total}}} = \\frac{1}{C_1} + \\frac{1}{C_2} = \\frac{1}{6 C_0} + \\frac{1}{12 C_0} = \\frac{2 + 1}{12 C_0} = \\frac{3}{12 C_0} = \\frac{1}{4 C_0}$$\n$$C_{\\text{total}} = 4,0 C_0$$',
        },
        {
          label: 'Kesimpulan',
          content:
            'Kapasitas kapasitor setelah disisipkan kedua dielektrik adalah 4,0 C₀. Pilihan yang tepat adalah A.',
        },
      ],
      finalAnswer: '4,0 C₀',
    },
    fastMethod: {
      title: 'Metode Cepat (Rata-rata Harmonik Dielektrik Seri)',
      steps: [
        {
          label: 'Konstanta Dielektrik Efektif Seri',
          content:
            'Untuk ketebalan sama ($d/2$): $\\kappa_{\\text{eff}} = \\frac{2 \\kappa_1 \\kappa_2}{\\kappa_1 + \\kappa_2} = \\frac{2 \\times 3 \\times 6}{3 + 6} = \\frac{36}{9} = 4,0$.\nMaka $C = 4,0 C_0$.',
        },
      ],
      finalAnswer: '4,0 C₀ (Opsi A)',
    },
    audioNarrationQuestion:
      'Soal nomor dua puluh enam. Kapasitor keping sejajar diisi dua lapisan dielektrik bertingkat dengan ketebalan masing-masing setengah d. Lapisan pertama berkonstanta tiga dan lapisan kedua berkonstanta enam. Berapakah kapasitas kapasitor sekarang dinyatakan dalam C nol?',
    audioNarrationExplanation:
      'Penyusunan lapisan dielektrik secara bertingkat pada arah tebal ekuivalen dengan dua kapasitor dirangkai seri. Konstanta dielektrik efektif untuk dua lapisan berketebalan sama adalah dua dikali tiga dikali enam dibagi tiga ditambah enam, yang sama dengan tiga puluh enam dibagi sembilan, yaitu empat koma nol. Maka kapasitas kapasitor baru bernilai empat koma nol C nol.',
    motivationQuote:
      'Hebat! Pemodelan dielektrik seri dan paralel adalah keterampilan penting dalam rekayasa material semikonduktor.',
  },

  // ==========================================
  // SOAL 27: Asal-Usul Tekanan Gas Ideal (Teori Kinetik Gas)
  // ==========================================
  {
    id: 'pg-27',
    originalNumber: 27,
    type: 'multiple_choice',
    category: 'Termodinamika & Teori Kinetik Gas',
    topic: 'Asal-Usul Tekanan Gas Ideal Berdasarkan Teori Kinetik',
    storyContext:
      'Dalam bejana tertutup bervolume tetap V, triliunan partikel gas ideal bergerak acak ke segala arah dengan kecepatan tinggi dan saling bertumbukan lenting sempurna serta bertumbukan dengan dinding bejana. Menurut Teori Kinetik Gas dan Hukum Gerak Newton, timbulnya besaran makroskopis tekanan gas (P) pada dinding wadah dapat dijelaskan secara mikroskopis.',
    questionText:
      'Pernyataan mikroskopis yang paling tepat mengenai penyebab timbulnya tekanan gas pada dinding bejana menurut Teori Kinetik Gas adalah...',
    stimulusType: 'none',
    options: [
      {
        id: 'pg-27-opt-a',
        text: 'Tekanan timbul dari laju transfer momentum rata-rata molekul gas per satuan luas dinding akibat tumbukan lenting sempurna.',
        isCorrect: true,
      },
      {
        id: 'pg-27-opt-b',
        text: 'Tekanan timbul akibat adanya gaya gravitasi antarmolekul gas yang saling menarik dan menekan ke arah dasar bejana.',
        isCorrect: false,
      },
      {
        id: 'pg-27-opt-c',
        text: 'Tekanan terjadi karena molekul gas saling tolak-menolak akibat gaya elektrostatik antarelektron kulit atom gas.',
        isCorrect: false,
      },
      {
        id: 'pg-27-opt-d',
        text: 'Tekanan timbul karena suhu molekul gas berkurang secara terus-menerus ketika menabrak permukaan dinding bejana.',
        isCorrect: false,
      },
      {
        id: 'pg-27-opt-e',
        text: 'Tekanan timbul semata-mata dari gesekan viskositas antarlapisan molekul gas yang mengalir di sepanjang dinding.',
        isCorrect: false,
      },
    ],
    slowMethod: {
      title: 'Metode Lengkap (Penurunan Mikroskopis Tekanan Gas dari Hukum Newton)',
      steps: [
        {
          label: 'Model Teori Kinetik Gas',
          content:
            'Tinjau sebuah molekul bermassa $m$ bergerak dengan komponen kecepatan $v_x$ menabrak dinding tegak lurus sumbu-x secara lenting sempurna.\nKecepatan sebelum tumbukan: $+v_x$.\nKecepatan setelah tumbukan: $-v_x$.\nPerubahan momentum molekul: $\\Delta p = (-m v_x) - (m v_x) = -2 m v_x$.',
        },
        {
          label: 'Gaya pada Dinding (Hukum II dan III Newton)',
          content:
            'Berdasarkan Hukum III Newton, momentum yang ditransfer ke dinding adalah $\\Delta p_{\\text{dinding}} = +2 m v_x$.\nGaya rata-rata yang dialami dinding adalah laju perubahan momentum terhadap waktu ($F = \\frac{\\Delta p}{\\Delta t}$).',
        },
        {
          label: 'Definisi Tekanan (P)',
          content:
            'Tekanan makroskopis didefinisikan sebagai gaya rata-rata per satuan luas penampang dinding bejana:\n$$P = \\frac{F_{\\text{rata-rata}}}{A} = \\frac{1}{A} \\sum \\frac{\\Delta p}{\\Delta t}$$\nSecara statistik untuk $N$ molekul yang bergerak isotropik ke segala arah, diperoleh persamaan fundamental Teori Kinetik Gas:\n$$P = \\frac{1}{3} \\frac{N m \\overline{v^2}}{V}$$',
        },
        {
          label: 'Kesimpulan',
          content:
            'Tekanan gas timbul dari laju transfer momentum rata-rata molekul per satuan luas dinding akibat tumbukan lenting sempurna. Pilihan tepat: A.',
        },
      ],
      finalAnswer: 'Tekanan timbul dari laju transfer momentum rata-rata molekul',
    },
    fastMethod: {
      title: 'Metode Cepat (Konsep Esensial Tekanan Mikroskopis)',
      steps: [
        {
          label: 'Kata Kunci',
          content:
            'Tekanan gas ideal = gaya per luas = (laju perubahan momentum akibat tumbukan lenting sempurna) dibagi luas dinding. Tidak ada gaya tarik/tolak antarmolekul pada gas ideal.',
        },
      ],
      finalAnswer: 'Laju transfer momentum per satuan luas (Opsi A)',
    },
    audioNarrationQuestion:
      'Soal nomor dua puluh tujuh. Berdasarkan Teori Kinetik Gas dan Hukum Gerak Newton, apakah penjelasan mikroskopis yang paling tepat mengenai penyebab timbulnya tekanan gas pada dinding bejana?',
    audioNarrationExplanation:
      'Setiap kali molekul gas menumbuk dinding secara lenting sempurna, arah geraknya berbalik sehingga terjadi perubahan momentum. Laju transfer momentum rata-rata dari triliunan tumbukan molekul ini per satuan luas dinding menghasilkan gaya dorong makroskopis yang kita ukur sebagai tekanan gas.',
    motivationQuote:
      'Sangat filosofis dan mendalam! Teori kinetik gas menjembatani dunia mikroskopis atom dengan besaran makroskopis termodinamika.',
  },

  // ==========================================
  // SOAL 28: Perbandingan Kecepatan Efektif (v_rms) Gas
  // ==========================================
  {
    id: 'pg-28',
    originalNumber: 28,
    type: 'multiple_choice',
    category: 'Termodinamika & Teori Kinetik Gas',
    topic: 'Kecepatan Efektif (Root Mean Square) Molekul Gas Berbeda',
    storyContext:
      'Dua wadah gas tertutup masing-masing berisi gas Hidrogen murni (H₂, massa molar M_r = 2 g/mol) dan gas Oksigen murni (O₂, massa molar M_r = 32 g/mol). Kedua gas berada dalam kesetimbangan termal pada temperatur ruangan yang sama, yaitu 27 °C (300 K).',
    questionText:
      'Perbandingan kecepatan efektif (v_rms) molekul gas Hidrogen terhadap gas Oksigen ($v_{\\text{rms, } H_2} : v_{\\text{rms, } O_2}$) pada temperatur tersebut adalah...',
    stimulusType: 'none',
    options: [
      { id: 'pg-28-opt-a', text: '4 : 1', isCorrect: true },
      { id: 'pg-28-opt-b', text: '16 : 1', isCorrect: false },
      { id: 'pg-28-opt-c', text: '1 : 4', isCorrect: false },
      { id: 'pg-28-opt-d', text: '2 : 1', isCorrect: false },
      { id: 'pg-28-opt-e', text: '1 : 1', isCorrect: false },
    ],
    slowMethod: {
      title: 'Metode Lengkap (Penurunan Persamaan v_rms dari Suhu Mutlak)',
      steps: [
        {
          label: 'Diketahui',
          content:
            'Gas 1: Hidrogen ($H_2$), $M_1 = 2\\text{ g/mol} = 2 \\times 10^{-3}\\text{ kg/mol}$.\nGas 2: Oksigen ($O_2$), $M_2 = 32\\text{ g/mol} = 32 \\times 10^{-3}\\text{ kg/mol}$.\nTemperatur kedua gas sama: $T_1 = T_2 = 300\\text{ K}$.',
        },
        {
          label: 'Ditanyakan',
          content: 'Perbandingan kecepatan efektif ($v_{\\text{rms, } H_2} : v_{\\text{rms, } O_2}$).',
        },
        {
          label: 'Rumus Kecepatan Efektif (v_rms)',
          content:
            '$$v_{\\text{rms}} = \\sqrt{\\frac{3 R T}{M}}$$',
        },
        {
          label: 'Perbandingan Rasio',
          content:
            'Karena konstanta gas $R$ dan temperatur mutlak $T$ sama:\n$$\\frac{v_{\\text{rms, } H_2}}{v_{\\text{rms, } O_2}} = \\frac{\\sqrt{\\frac{3RT}{M_1}}}{\\sqrt{\\frac{3RT}{M_2}}} = \\sqrt{\\frac{M_2}{M_1}}$$\n$$\\frac{v_{\\text{rms, } H_2}}{v_{\\text{rms, } O_2}} = \\sqrt{\\frac{32}{2}} = \\sqrt{16} = 4$$\nMaka perbandingannya adalah $4 : 1$.',
        },
        {
          label: 'Kesimpulan',
          content:
            'Molekul gas Hidrogen bergerak rata-rata 4 kali lebih cepat daripada molekul gas Oksigen pada suhu yang sama. Pilihan tepat: A.',
        },
      ],
      finalAnswer: '4 : 1',
    },
    fastMethod: {
      title: 'Metode Cepat (Akar Terbalik Massa Molar)',
      steps: [
        {
          label: 'Rasio Cepat',
          content:
            '$$v \\propto \\frac{1}{\\sqrt{M}} \\implies \\frac{v_1}{v_2} = \\sqrt{\\frac{32}{2}} = \\sqrt{16} = 4 : 1.$$',
        },
      ],
      finalAnswer: '4 : 1 (Opsi A)',
    },
    audioNarrationQuestion:
      'Soal nomor dua puluh delapan. Gas Hidrogen dengan massa molar dua gram per mol dan gas Oksigen dengan massa molar tiga puluh dua gram per mol berada pada suhu yang sama. Berapakah perbandingan kecepatan efektif molekul Hidrogen terhadap Oksigen?',
    audioNarrationExplanation:
      'Pada temperatur yang sama, kecepatan efektif molekul gas berbanding terbalik dengan akar kuadrat massa molarnya. Membagi tiga puluh dua dengan dua menghasilkan enam belas. Akar kuadrat dari enam belas adalah empat. Jadi molekul Hidrogen yang lebih ringan bergerak empat kali lebih cepat dibanding molekul Oksigen, dengan rasio empat berbanding satu.',
    motivationQuote:
      'Mantap! Inilah sebabnya gas hidrogen dan helium sangat mudah lepas dari gravitasi atmosfer bumi dibandingkan oksigen.',
  },

  // ==========================================
  // SOAL 29: Grafik Ek terhadap Suhu Mutlak T (Gambar 8)
  // ==========================================
  {
    id: 'pg-29',
    originalNumber: 29,
    type: 'multiple_choice',
    category: 'Termodinamika & Teori Kinetik Gas',
    topic: 'Kenaikan Energi Kinetik & Kecepatan Efektif Gas Monoatomik',
    storyContext:
      'Grafik pada Gambar 8 menampilkan hubungan linear antara energi kinetik translasi rata-rata partikel gas monoatomik terhadap suhu mutlaknya (T). Gas monoatomik tersebut dipanaskan di dalam tabung kaku tertutup sehingga suhu mutlaknya dinaikkan dari T₁ = 250 K menjadi T₂ = 1.000 K.',
    questionText:
      'Berdasarkan Gambar 8 dan hukum Teori Kinetik Gas, perubahan nilai energi kinetik translasi rata-rata partikel gas (Ek) serta kecepatan efektifnya (v_rms) berturut-turut adalah...',
    stimulusType: 'graph',
    stimulusTitle: 'Gambar 8: Grafik Hubungan Energi Kinetik Rata-Rata (Ek) terhadap Suhu Mutlak (T)',
    stimulusSvgType: 'gambar-8-grafik-ek-t',
    options: [
      {
        id: 'pg-29-opt-a',
        text: '4 kali lipat dan 2 kali lipat dari nilai awal.',
        isCorrect: true,
      },
      {
        id: 'pg-29-opt-b',
        text: '2 kali lipat dan 4 kali lipat dari nilai awal.',
        isCorrect: false,
      },
      {
        id: 'pg-29-opt-c',
        text: '4 kali lipat dan 16 kali lipat dari nilai awal.',
        isCorrect: false,
      },
      {
        id: 'pg-29-opt-d',
        text: '16 kali lipat dan 4 kali lipat dari nilai awal.',
        isCorrect: false,
      },
      {
        id: 'pg-29-opt-e',
        text: '2 kali lipat dan 2 kali lipat dari nilai awal.',
        isCorrect: false,
      },
    ],
    slowMethod: {
      title: 'Metode Lengkap (Hubungan Ek dan v_rms terhadap Suhu Mutlak)',
      steps: [
        {
          label: 'Diketahui',
          content:
            'Suhu mutlak awal: $T_1 = 250\\text{ K}$.\nSuhu mutlak akhir: $T_2 = 1.000\\text{ K}$.\nRasio kenaikan suhu mutlak: $\\frac{T_2}{T_1} = \\frac{1.000}{250} = 4$.',
        },
        {
          label: 'Analisis Energi Kinetik Rata-Rata (Ek)',
          content:
            'Persamaan energi kinetik gas monoatomik:\n$$\\overline{E_k} = \\frac{3}{2} k_B T$$\nKarena $k_B$ adalah tetapan Boltzmann, energi kinetik berbanding lurus langsung dengan suhu mutlak ($E_k \\propto T$):\n$$\\frac{E_{k2}}{E_{k1}} = \\frac{T_2}{T_1} = 4\\text{ kali lipat}$$',
        },
        {
          label: 'Analisis Kecepatan Efektif (v_rms)',
          content:
            'Hubungan energi kinetik dengan kecepatan:\n$$\\overline{E_k} = \\frac{1}{2} m v_{\\text{rms}}^2 \\implies v_{\\text{rms}} = \\sqrt{\\frac{2 \\overline{E_k}}{m}} = \\sqrt{\\frac{3 k_B T}{m}}$$\nKecepatan efektif berbanding lurus dengan akar kuadrat suhu mutlak ($v_{\\text{rms}} \\propto \\sqrt{T}$):\n$$\\frac{v_{\\text{rms2}}}{v_{\\text{rms1}}} = \\sqrt{\\frac{T_2}{T_1}} = \\sqrt{4} = 2\\text{ kali lipat}$$',
        },
        {
          label: 'Kesimpulan',
          content:
            'Energi kinetik bertambah menjadi 4 kali lipat dan kecepatan efektifnya bertambah menjadi 2 kali lipat dari semula. Pilihan tepat: A.',
        },
      ],
      finalAnswer: 'Ek naik 4 kali lipat, v_rms naik 2 kali lipat',
    },
    fastMethod: {
      title: 'Metode Cepat (Proporsionalitas Linear vs Akar)',
      steps: [
        {
          label: 'Hubungan',
          content:
            'Suhu naik 4 kali:\n- $E_k \\propto T \\implies 4\\text{ kali lipat}$.\n- $v_{\\text{rms}} \\propto \\sqrt{T} \\implies \\sqrt{4} = 2\\text{ kali lipat}$.',
        },
      ],
      finalAnswer: '4 kali dan 2 kali (Opsi A)',
    },
    audioNarrationQuestion:
      'Soal nomor dua puluh sembilan. Berdasarkan Gambar delapan, gas monoatomik dipanaskan sehingga suhu mutlaknya naik dari dua ratus lima puluh Kelvin menjadi seribu Kelvin. Bagaimanakah kelipatan perubahan energi kinetik rata-rata dan kecepatan efektif molekul gas?',
    audioNarrationExplanation:
      'Suhu mutlak gas naik empat kali lipat dari dua ratus lima puluh menjadi seribu Kelvin. Karena energi kinetik rata-rata partikel berbanding lurus dengan suhu mutlak, energi kinetik bertambah empat kali lipat. Sementara itu kecepatan efektif berbanding lurus dengan akar suhu mutlak, sehingga kecepatan efektif bertambah akar empat, yaitu dua kali lipat.',
    motivationQuote:
      'Hebat! Memahami perbedaan antara besaran berpangkat satu dan akar kuadrat adalah kunci analisis fisika tingkat lanjut.',
  },

  // ==========================================
  // SOAL 30: Silinder Piston Bebas (Gambar 9)
  // ==========================================
  {
    id: 'pg-30',
    originalNumber: 30,
    type: 'multiple_choice',
    category: 'Termodinamika & Teori Kinetik Gas',
    topic: 'Proses Isobarik Piston Bebas & Perubahan Energi Dalam',
    storyContext:
      'Sejumlah gas ideal terkurung di dalam silinder yang dilengkapi piston bebas tanpa massa dan dapat bergerak tanpa gesekan seperti tampak pada Gambar 9. Permukaan luar piston terpapar langsung oleh tekanan atmosfer luar konstan P₀. Gas di dalam silinder kemudian dipanaskan secara perlahan sehingga suhu mutlaknya dinaikkan dari T₁ menjadi 3T₁.',
    questionText:
      'Berdasarkan kondisi mekanik dan termodinamika pada Gambar 9, kondisi tekanan gas (P), volume gas (V), dan energi dalam gas (U) setelah pemanasan adalah...',
    stimulusType: 'diagram',
    stimulusTitle: 'Gambar 9: Silinder Berpiston Bebas Tanpa Gesekan Bertekanan Luar Konstan P₀',
    stimulusSvgType: 'gambar-9-silinder-piston',
    options: [
      {
        id: 'pg-30-opt-a',
        text: 'P tetap (P = P₀), V bertambah menjadi 3 kali lipat, dan U meningkat menjadi 3 kali lipat.',
        isCorrect: true,
      },
      {
        id: 'pg-30-opt-b',
        text: 'P bertambah menjadi 3 kali lipat, V tetap konstan, dan U meningkat menjadi 3 kali lipat.',
        isCorrect: false,
      },
      {
        id: 'pg-30-opt-c',
        text: 'P tetap (P = P₀), V bertambah menjadi 9 kali lipat, dan U meningkat menjadi 9 kali lipat.',
        isCorrect: false,
      },
      {
        id: 'pg-30-opt-d',
        text: 'P, V, dan U seluruhnya tetap konstan karena piston bebas menyesuaikan diri.',
        isCorrect: false,
      },
      {
        id: 'pg-30-opt-e',
        text: 'P turun menjadi sepertiga, V bertambah menjadi 3 kali lipat, dan U tetap konstan.',
        isCorrect: false,
      },
    ],
    slowMethod: {
      title: 'Metode Lengkap (Analisis Kesetimbangan Gaya Mekanik & Hukum Termodinamika)',
      steps: [
        {
          label: 'Kondisi Tekanan (Piston Bebas)',
          content:
            'Piston tanpa gesekan berada dalam kesetimbangan mekanik:\n$$\\sum F = 0 \\implies P_{\\text{gas}} \\cdot A = P_0 \\cdot A \\implies P_{\\text{gas}} = P_0$$\nKarena tekanan luar $P_0$ atmosfer konstan dan piston bebas bergerak, maka tekanan gas di dalam selalu konstan ($P = P_0 = \\text{konstan}$). Ini adalah **proses isobarik**.',
        },
        {
          label: 'Kondisi Volume (Hukum Charles / Gas Ideal)',
          content:
            'Persamaan gas ideal pada tekanan isobarik ($P = \\text{konstan}$):\n$$\\frac{V_1}{T_1} = \\frac{V_2}{T_2}$$\nKarena suhu mutlak naik menjadi $T_2 = 3 T_1$:\n$$V_2 = V_1 \\left(\\frac{T_2}{T_1}\\right) = V_1 \\left(\\frac{3 T_1}{T_1}\\right) = 3 V_1$$\nVolume gas bertambah menjadi 3 kali lipat semula (gas memuai mendorong piston).',
        },
        {
          label: 'Kondisi Energi Dalam (U)',
          content:
            'Energi dalam gas ideal monoatomik:\n$$U = \\frac{3}{2} n R T$$\nKarena energi dalam hanya bergantung pada suhu mutlak ($U \\propto T$):\n$$U_2 = U_1 \\left(\\frac{T_2}{T_1}\\right) = 3 U_1$$\nEnergi dalam meningkat menjadi 3 kali lipat semula.',
        },
        {
          label: 'Kesimpulan',
          content:
            'Tekanan tetap $P_0$, volume membesar 3 kali, dan energi dalam meningkat 3 kali. Pilihan tepat: A.',
        },
      ],
      finalAnswer: 'P tetap P₀, V jadi 3x, U jadi 3x',
    },
    fastMethod: {
      title: 'Metode Cepat (Konsep Piston Bebas = Isobarik)',
      steps: [
        {
          label: 'Kaidah Cepat',
          content:
            'Piston bebas bergerak = Isobarik ($P$ konstan). Saat suhu $T$ naik 3x, maka volume $V$ naik 3x (Gay-Lussac/Charles) dan energi dalam $U$ naik 3x ($U \\propto T$).',
        },
      ],
      finalAnswer: 'P tetap, V naik 3x, U naik 3x (Opsi A)',
    },
    audioNarrationQuestion:
      'Soal nomor tiga puluh. Berdasarkan Gambar sembilan, silinder berpiston bebas tanpa gesekan terpapar tekanan luar P nol. Jika gas dipanaskan sehingga suhu mutlaknya naik menjadi tiga T satu, bagaimanakah keadaan tekanan, volume, dan energi dalam gas?',
    audioNarrationExplanation:
      'Karena piston dapat bergerak bebas tanpa gesekan, tekanan gas selalu seimbang dengan tekanan luar konstan P nol, sehingga proses berlangsung secara isobarik. Sesuai Hukum Charles, volume gas memuai sebanding dengan suhu mutlak menjadi tiga kali lipat. Energi dalam gas ideal yang hanya bergantung pada suhu mutlak juga meningkat menjadi tiga kali lipat.',
    motivationQuote:
      'Alhamdulillah! Tiga puluh soal pilihan ganda telah berhasil diselesaikan dengan penguasaan konsep fisika yang luar biasa!',
  },
];
