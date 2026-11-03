import { QuestionData } from '../types/physics';

export const QUESTIONS_PART_1: QuestionData[] = [
  // ==========================================
  // SOAL 1: Laju Hanyut & Muatan Listrik
  // ==========================================
  {
    id: 'pg-1',
    originalNumber: 1,
    type: 'multiple_choice',
    category: 'Listrik Dinamis',
    topic: 'Laju Hanyut Elektron & Arus Listrik',
    storyContext:
      'Dua kawat silinder tembaga P dan Q dengan kemurnian bahan identik disambungkan secara seri pada sebuah sirkuit tertutup. Kawat P berdiameter 3,0 mm, sedangkan kawat Q berdiameter 1,0 mm. Melalui kedua kawat mengalir arus searah konstan sebesar 1,8 A selama selang waktu 15 menit.',
    questionText:
      'Berdasarkan prinsip kontinuitas arus listrik dan model mikroskopis konduksi elektron, perbandingan laju hanyut (drift velocity) rata-rata elektron bebas dalam kawat P terhadap kawat Q ($v_P : v_Q$) serta muatan listrik total yang melintasi penampang kawat Q selama 15 menit berturut-turut adalah...',
    stimulusType: 'none',
    options: [
      { id: 'pg-1-opt-a', text: '1 : 9 dan 1.620 C', isCorrect: true },
      { id: 'pg-1-opt-b', text: '9 : 1 dan 1.620 C', isCorrect: false },
      { id: 'pg-1-opt-c', text: '1 : 3 dan 27 C', isCorrect: false },
      { id: 'pg-1-opt-d', text: '3 : 1 dan 162 C', isCorrect: false },
      { id: 'pg-1-opt-e', text: '1 : 9 dan 270 C', isCorrect: false },
    ],
    slowMethod: {
      title: 'Metode Lengkap (Prinsip Kontinuitas & Muatan Listrik)',
      steps: [
        {
          label: 'Diketahui',
          content:
            'Diameter kawat P: $d_P = 3,0\\text{ mm}$, diameter kawat Q: $d_Q = 1,0\\text{ mm}$. Arus listrik: $I = 1,8\\text{ A}$. Waktu alir: $t = 15\\text{ menit} = 900\\text{ sekon}$. Kedua kawat disambung seri dan terbuat dari bahan yang sama (kerapatan elektron $n$ identik).',
        },
        {
          label: 'Ditanyakan',
          content: 'Perbandingan laju hanyut ($v_P : v_Q$) dan muatan listrik total $Q$ pada kawat Q.',
        },
        {
          label: 'Konsep & Rumus Dasar',
          content:
            '1. Arus mikroskopis elektron: $I = n \\cdot e \\cdot A \\cdot v_d$.\n2. Rangkaian seri memenuhi hukum kekekalan muatan/kontinuitas arus: $I_P = I_Q$.\n3. Luas penampang kawat lingkaran: $A = \\frac{1}{4}\\pi d^2$.\n4. Muatan listrik total yang melintas: $Q = I \\cdot t$.',
        },
        {
          label: 'Perhitungan Laju Hanyut',
          content:
            'Karena arus sama:\n$$n \\cdot e \\cdot A_P \\cdot v_P = n \\cdot e \\cdot A_Q \\cdot v_Q$$\n$$\\frac{v_P}{v_Q} = \\frac{A_Q}{A_P} = \\left(\\frac{d_Q}{d_P}\\right)^2 = \\left(\\frac{1,0\\text{ mm}}{3,0\\text{ mm}}\\right)^2 = \\frac{1}{9}$$\nMaka rasio laju hanyut $v_P : v_Q = 1 : 9$.',
        },
        {
          label: 'Perhitungan Muatan Total',
          content:
            '$$Q = I \\cdot t = 1,8\\text{ A} \\times 900\\text{ s} = 1.620\\text{ C}$$',
        },
        {
          label: 'Kesimpulan',
          content:
            'Perbandingan laju hanyut adalah $1 : 9$ dan muatan listrik yang melintas adalah $1.620\\text{ C}$. Pilihan yang benar adalah A.',
        },
      ],
      finalAnswer: '1 : 9 dan 1.620 C',
    },
    fastMethod: {
      title: 'Metode Cepat (Perbandingan Kuadrat & Hitung Cepat)',
      steps: [
        {
          label: 'Trik Laju Hanyut',
          content:
            'Pada susunan seri, arus konstan. Hubungan laju hanyut berbanding terbalik dengan kuadrat diameter: $v \\propto \\frac{1}{d^2}$.\nDiameter kawat P adalah 3 kali kawat Q ($d_P = 3d_Q$), maka laju hanyut di kawat P adalah $\\frac{1}{3^2} = \\frac{1}{9}$ kali di Q ($v_P : v_Q = 1 : 9$).',
        },
        {
          label: 'Trik Muatan',
          content:
            '$Q = 1,8 \\times 900 = 1.620\\text{ C}$. Segera pilih jawaban dengan angka 1 : 9 dan 1.620 C.',
        },
      ],
      finalAnswer: '1 : 9 dan 1.620 C',
    },
    audioNarrationQuestion:
      'Soal nomor satu. Dua kawat tembaga P dan Q berdiameter tiga koma nol milimeter dan satu koma nol milimeter dirangkai seri. Arus mengalir konstan satu koma delapan Ampere selama lima belas menit. Tentukan perbandingan laju hanyut elektron kawat P terhadap Q serta muatan listrik totalnya.',
    audioNarrationExplanation:
      'Mari kita bahas bersama. Karena kawat dirangkai seri, arus listrik kawat P dan Q bernilai sama. Laju hanyut elektron berbanding terbalik dengan kuadrat diameter kawat. Karena diameter kawat P adalah tiga kali diameter kawat Q, laju hanyut elektron pada kawat P bernilai satu berbanding sembilan terhadap kawat Q. Sementara muatan total didapat dari arus satu koma delapan Ampere dikali sembilan ratus detik, yaitu seribu enam ratus dua puluh Coulomb.',
    motivationQuote:
      'Langkah pertama yang luar biasa! Memahami laju hanyut elektron adalah kunci menguasai listrik dinamis tingkat lanjut.',
  },

  // ==========================================
  // SOAL 2: Karakteristik Komponen Ohmik vs Non-Ohmik
  // ==========================================
  {
    id: 'pg-2',
    originalNumber: 2,
    type: 'multiple_choice',
    category: 'Listrik Dinamis',
    topic: 'Karakteristik Komponen Ohmik vs Non-Ohmik',
    storyContext:
      'Seorang peserta didik melakukan investigasi hubungan antara beda potensial (V) dan kuat arus (I) pada dua komponen berbeda: Kawat Konduktor X (paduan logam nikrom bersuhu konstan) dan Lampu Filamen Y (kawat tungsten). Data pengujian disajikan pada grafik V-I.',
    questionText:
      'Berdasarkan grafik V-I pada stimulus, kesimpulan fisis yang paling tepat mengenai karakteristik hambatan kedua komponen adalah...',
    stimulusType: 'graph',
    stimulusTitle: 'Gambar 1: Kurva Karakteristik V-I Konduktor X dan Lampu Filamen Y',
    stimulusSvgType: 'gambar-1-grafik-vi',
    options: [
      {
        id: 'pg-2-opt-a',
        text: 'Hambatan Konduktor X bersifat konstan sebesar 50 Ω (memenuhi hukum Ohm), sedangkan hambatan Lampu Filamen Y bertambah besar seiring peningkatan tegangan akibat efek pemanasan suhu filamen.',
        isCorrect: true,
      },
      {
        id: 'pg-2-opt-b',
        text: 'Hambatan Konduktor X meningkat tajam, sedangkan Lampu Filamen Y memiliki hambatan konstan sebesar 20 Ω pada seluruh rentang tegangan.',
        isCorrect: false,
      },
      {
        id: 'pg-2-opt-c',
        text: 'Kedua komponen sama-sama mematuhi hukum Ohm karena hubungan arus dan tegangan selalu berbanding lurus di setiap titik kerja.',
        isCorrect: false,
      },
      {
        id: 'pg-2-opt-d',
        text: 'Hambatan Lampu Filamen Y menurun ketika tegangan dinaikkan karena hambatan jenis tungsten mengecil terhadap kenaikan temperatur.',
        isCorrect: false,
      },
      {
        id: 'pg-2-opt-e',
        text: 'Konduktor X memiliki hambatan 100 Ω, sedangkan Lampu Filamen Y bersifat superkonduktor pada tegangan rendah.',
        isCorrect: false,
      },
    ],
    slowMethod: {
      title: 'Metode Lengkap (Analisis Gradien Grafik V-I)',
      steps: [
        {
          label: 'Diketahui',
          content:
            'Grafik menampilkan hubungan $V$ (Volt) terhadap $I$ (mA). Titik uji Konduktor X: pada saat $V = 10\\text{ V}$, arus $I = 200\\text{ mA} = 0,2\\text{ A}$. Kurva Konduktor X berupa garis lurus melalui titik pusat $(0,0)$. Kurva Lampu Filamen Y melengkung ke atas seiring kenaikan tegangan.',
        },
        {
          label: 'Ditanyakan',
          content: 'Karakteristik resistansi kedua komponen berdasarkan Hukum Ohm.',
        },
        {
          label: 'Konsep Hukum Ohm',
          content:
            'Menurut Hukum Ohm, bahan ohmik memiliki hambatan $R = \\frac{V}{I} = \\text{konstan}$. Pada grafik $V-I$, gradien garis $\\frac{V}{I}$ menyatakan hambatan komponen.',
        },
        {
          label: 'Analisis Komponen X',
          content:
            '$$R_X = \\frac{V}{I} = \\frac{10\\text{ V}}{0,2\\text{ A}} = 50\\ \\Omega$$\nKarena grafik berbentuk garis lurus linear sempurna, nilai hambatan $R_X$ konstan pada $50\\ \\Omega$ (komponen Ohmik).',
        },
        {
          label: 'Analisis Komponen Y',
          content:
            'Pada filamen wolfram/tungsten, kenaikan arus menyebabkan disipasi daya Joule ($P = I^2 R$) yang menaikkan temperatur kawat filamen. Hambatan jenis logam bertambah seiring kenaikan suhu menurut persamaan $R(T) = R_0 (1 + \\alpha \\Delta T)$. Akibatnya kurva $V$ terhadap $I$ melengkung ke atas (non-ohmik).',
        },
        {
          label: 'Kesimpulan',
          content:
            'Konduktor X ohmik dengan $R = 50\\ \\Omega$, sedangkan lampu filamen Y non-ohmik dengan hambatan yang meningkat karena suhu naik. Jawaban tepat: A.',
        },
      ],
      finalAnswer: 'Konduktor X ohmik 50 Ω, Lampu filamen Y hambatannya naik akibat suhu',
    },
    fastMethod: {
      title: 'Metode Cepat (Inspeksi Linearitas & Efek Termal)',
      steps: [
        {
          label: 'Inspeksi Garis Lurus',
          content:
            'Garis lurus = Ohmik. Nilai $R = \\frac{10\\text{ V}}{0,2\\text{ A}} = 50\\ \\Omega$. Ini langsung mengeliminasi opsi dengan nilai bukan 50 Ω.',
        },
        {
          label: 'Inspeksi Lengkungan',
          content:
            'Lampu filamen selalu memanas saat dialiri arus, dan hambatan kawat tungsten selalu bertambah saat memanas. Pilihan A langsung terbukti benar.',
        },
      ],
      finalAnswer: 'Opsi A benar secara ilmiah dan matematis',
    },
    audioNarrationQuestion:
      'Soal nomor dua. Berdasarkan grafik V terhadap I pada Gambar satu, tentukan kesimpulan fisis yang paling tepat mengenai karakteristik hambatan Konduktor X dan Lampu Filamen Y.',
    audioNarrationExplanation:
      'Perhatikan kurva grafik. Garis lurus pada Konduktor X menunjukkan sifat Ohmik dengan rasio tegangan terhadap arus selalu konstan, yaitu sepuluh Volt dibagi nol koma dua Ampere sama dengan lima puluh Ohm. Sebaliknya, kurva Lampu Filamen Y melengkung ke atas karena pemanasan filamen tungsten menaikkan hambatan jenis logam.',
    motivationQuote:
      'Pemahaman yang tajam! Membedakan komponen ohmik dan non-ohmik adalah fondasi analisis elektronika modern.',
  },

  // ==========================================
  // SOAL 3: Pembagi Tegangan & Sensor LDR
  // ==========================================
  {
    id: 'pg-3',
    originalNumber: 3,
    type: 'multiple_choice',
    category: 'Listrik Dinamis',
    topic: 'Sensor LDR & Rangkaian Pembagi Tegangan',
    storyContext:
      'Sebuah modul sensor cahaya otomatis lampu penerangan jalan menggunakan rangkaian pembagi tegangan (voltage divider) dengan sumber tegangan DC sebesar 24 V. Rangkaian terdiri atas resistor tetap R = 6 kΩ yang dipasang seri dengan sensor LDR. Sinyal output tegangan V_out diukur melintasi resistor tetap R. Pada siang hari terang benderang, hambatan LDR terukur sebesar 2 kΩ. Pada malam hari yang sangat gelap, hambatan LDR melonjak menjadi 42 kΩ.',
    questionText:
      'Perubahan nilai beda potensial output ($V_{\\text{out}}$) yang dideteksi oleh mikrokontroler dari kondisi siang hari ke malam hari adalah...',
    stimulusType: 'none',
    options: [
      {
        id: 'pg-3-opt-a',
        text: 'Beda potensial output V_out turun secara drastis dari 18,0 V (siang) menjadi 3,0 V (malam).',
        isCorrect: true,
      },
      {
        id: 'pg-3-opt-b',
        text: 'Beda potensial output V_out naik dari 6,0 V (siang) menjadi 21,0 V (malam).',
        isCorrect: false,
      },
      {
        id: 'pg-3-opt-c',
        text: 'Beda potensial output V_out turun dari 24,0 V (siang) menjadi 12,0 V (malam).',
        isCorrect: false,
      },
      {
        id: 'pg-3-opt-d',
        text: 'Beda potensial output V_out tetap konstan pada 18,0 V karena resistor tetap bernilai konstan.',
        isCorrect: false,
      },
      {
        id: 'pg-3-opt-e',
        text: 'Beda potensial output V_out turun dari 12,0 V (siang) menjadi 2,0 V (malam).',
        isCorrect: false,
      },
    ],
    slowMethod: {
      title: 'Metode Lengkap (Prinsip Pembagi Tegangan Dua Kondisi)',
      steps: [
        {
          label: 'Diketahui',
          content:
            'Tegangan sumber: $V = 24\\text{ V}$. Hambatan resistor tetap: $R = 6\\text{ k}\\Omega$. Hambatan LDR saat siang terang: $R_{\\text{siang}} = 2\\text{ k}\\Omega$. Hambatan LDR saat malam gelap: $R_{\\text{malam}} = 42\\text{ k}\\Omega$. Output diambil pada $R$.',
        },
        {
          label: 'Ditanyakan',
          content: 'Nilai $V_{\\text{out}}$ saat siang hari dan saat malam hari.',
        },
        {
          label: 'Rumus Pembagi Tegangan',
          content:
            'Rangkaian seri memiliki arus sama: $I = \\frac{V}{R + R_{\\text{LDR}}}$.\nTegangan output pada resistor tetap $R$:\n$$V_{\\text{out}} = I \\cdot R = \\frac{R}{R + R_{\\text{LDR}}} \\times V$$',
        },
        {
          label: 'Kondisi Siang Hari',
          content:
            '$$V_{\\text{out, siang}} = \\frac{6\\text{ k}\\Omega}{6\\text{ k}\\Omega + 2\\text{ k}\\Omega} \\times 24\\text{ V} = \\frac{6}{8} \\times 24\\text{ V} = 18,0\\text{ V}$$',
        },
        {
          label: 'Kondisi Malam Hari',
          content:
            '$$V_{\\text{out, malam}} = \\frac{6\\text{ k}\\Omega}{6\\text{ k}\\Omega + 42\\text{ k}\\Omega} \\times 24\\text{ V} = \\frac{6}{48} \\times 24\\text{ V} = \\frac{1}{8} \\times 24\\text{ V} = 3,0\\text{ V}$$',
        },
        {
          label: 'Kesimpulan',
          content:
            'Tegangan output $V_{\\text{out}}$ turun dari $18,0\\text{ V}$ pada siang hari menjadi $3,0\\text{ V}$ pada malam hari. Pilihan yang tepat adalah A.',
        },
      ],
      finalAnswer: 'Turun dari 18,0 V menjadi 3,0 V',
    },
    fastMethod: {
      title: 'Metode Cepat (Rasio Perbandingan Pembagi Tegangan)',
      steps: [
        {
          label: 'Rasio Siang',
          content:
            'Siang: Hambatan $R$ dan LDR adalah $6 : 2 = 3 : 1$. Bagian tegangan untuk $R$ adalah $\\frac{3}{3+1} \\times 24 = \\frac{3}{4} \\times 24 = 18\\text{ V}$.',
        },
        {
          label: 'Rasio Malam',
          content:
            'Malam: Hambatan $R$ dan LDR adalah $6 : 42 = 1 : 7$. Bagian tegangan untuk $R$ adalah $\\frac{1}{1+7} \\times 24 = \\frac{1}{8} \\times 24 = 3\\text{ V}$.',
        },
      ],
      finalAnswer: 'Turun dari 18,0 V ke 3,0 V (Opsi A)',
    },
    audioNarrationQuestion:
      'Soal nomor tiga. Modul sensor cahaya menggunakan pembagi tegangan dua puluh empat Volt dengan resistor enam kilo Ohm dan LDR. Siang hari hambatan LDR dua kilo Ohm, dan malam hari melonjak menjadi empat puluh dua kilo Ohm. Berapakah perubahan tegangan output pada resistor enam kilo Ohm?',
    audioNarrationExplanation:
      'Gunakan konsep pembagi tegangan. Saat siang hari, hambatan total adalah delapan kilo Ohm, sehingga tegangan output adalah enam per delapan dikali dua puluh empat Volt, yaitu delapan belas Volt. Saat malam hari, hambatan total menjadi empat puluh delapan kilo Ohm, sehingga tegangan output menjadi enam per empat puluh delapan dikali dua puluh empat Volt, yaitu tiga Volt. Tegangan turun dari delapan belas Volt menjadi tiga Volt.',
    motivationQuote:
      'Hebat! Pembagi tegangan dengan sensor resistif adalah prinsip dasar otomatisasi Smart City dan IoT.',
  },

  // ==========================================
  // SOAL 4: Beban Daya & Pengaman Listrik MCB
  // ==========================================
  {
    id: 'pg-4',
    originalNumber: 4,
    type: 'multiple_choice',
    category: 'Listrik Dinamis',
    topic: 'Daya Listrik & Pengaman Sirkuit MCB',
    storyContext:
      'Sebuah rumah berlangganan listrik PLN dengan tegangan jepit 220 V dan dilengkapi pengaman Miniature Circuit Breaker (MCB) berkapasitas nominal 6 A. Pada suatu pagi, penghuni rumah menyalakan peralatan listrik secara bersamaan: kulkas (220 W), penanak nasi (440 W), setrika listrik (880 W), dan teko pemanas air (440 W).',
    questionText:
      'Berdasarkan perhitungan daya dan arus listrik yang mengalir, peristiwa yang akan terjadi pada sistem proteksi instalasi listrik rumah tersebut adalah...',
    stimulusType: 'none',
    options: [
      {
        id: 'pg-4-opt-a',
        text: 'MCB akan trip (terputus) secara otomatis karena kuat arus beban total mencapai 9 A, melampaui kapasitas nominal pengaman 6 A.',
        isCorrect: true,
      },
      {
        id: 'pg-4-opt-b',
        text: 'MCB tetap tersambung normal karena kuat arus beban total hanya 4,5 A, masih di bawah batas aman pengaman.',
        isCorrect: false,
      },
      {
        id: 'pg-4-opt-c',
        text: 'MCB trip karena daya total beban listrik adalah 1.100 W, yang melebihi kapasitas daya maksimum PLN 880 W.',
        isCorrect: false,
      },
      {
        id: 'pg-4-opt-d',
        text: 'Tegangan rumah akan turun dari 220 V menjadi 110 V sehingga seluruh alat tetap menyala dengan separuh daya.',
        isCorrect: false,
      },
      {
        id: 'pg-4-opt-e',
        text: 'MCB tidak terpengaruh karena MCB hanya merespons korsleting (arus hubung singkat), bukan kelebihan beban daya.',
        isCorrect: false,
      },
    ],
    slowMethod: {
      title: 'Metode Lengkap (Penjumlahan Daya & Beban Arus)',
      steps: [
        {
          label: 'Diketahui',
          content:
            'Tegangan sumber: $V = 220\\text{ V}$. Kapasitas MCB: $I_{\\text{maks}} = 6\\text{ A}$. Beban aktif:\n- Kulkas: $P_1 = 220\\text{ W}$\n- Penanak nasi: $P_2 = 440\\text{ W}$\n- Setrika: $P_3 = 880\\text{ W}$\n- Teko air: $P_4 = 440\\text{ W}$',
        },
        {
          label: 'Ditanyakan',
          content: 'Kondisi sakelar MCB (trip atau tidak) beserta alasan fisisnya.',
        },
        {
          label: 'Perhitungan Daya Total',
          content:
            '$$P_{\\text{total}} = 220 + 440 + 880 + 440 = 1.980\\text{ W}$$',
        },
        {
          label: 'Perhitungan Arus Total',
          content:
            '$$I_{\\text{total}} = \\frac{P_{\\text{total}}}{V} = \\frac{1.980\\text{ W}}{220\\text{ V}} = 9,0\\text{ A}$$',
        },
        {
          label: 'Evaluasi Kapasitas MCB',
          content:
            'Kapasitas maksimum pengaman MCB adalah $6\\text{ A}$. Karena $I_{\\text{total}} = 9,0\\text{ A} > 6\\text{ A}$, terjadi kondisi kelebihan beban (overload). Bimetal di dalam MCB akan memuai dan memicu mekanisme pemutusan sirkuit secara otomatis (trip).',
        },
        {
          label: 'Kesimpulan',
          content:
            'MCB akan trip karena arus total mencapai 9 A, melebihi kapasitas pengaman 6 A. Pilihan tepat: A.',
        },
      ],
      finalAnswer: 'MCB trip karena arus total 9 A > 6 A',
    },
    fastMethod: {
      title: 'Metode Cepat (Kapasitas Daya Kritis)',
      steps: [
        {
          label: 'Daya Maksimum MCB',
          content:
            'Daya maksimal yang diizinkan MCB: $P_{\\text{maks}} = 6\\text{ A} \\times 220\\text{ V} = 1.320\\text{ W}$.',
        },
        {
          label: 'Bandingkan dengan Daya Beban',
          content:
            'Daya alat: $220 + 440 + 880 + 440 = 1.980\\text{ W}$. Karena $1.980\\text{ W} > 1.320\\text{ W}$, MCB pasti trip dengan arus $I = 1.980 / 220 = 9\\text{ A}$.',
        },
      ],
      finalAnswer: 'Trip pada 9 A (Opsi A)',
    },
    audioNarrationQuestion:
      'Soal nomor empat. Sebuah rumah bertengangan dua ratus dua puluh Volt memiliki pengaman MCB enam Ampere. Jika kulkas dua ratus dua puluh Watt, penanak nasi empat ratus empat puluh Watt, setrika delapan ratus delapan puluh Watt, dan teko empat ratus empat puluh Watt dinyalakan bersamaan, apa yang terjadi pada MCB?',
    audioNarrationExplanation:
      'Mari hitung daya totalnya. Dua ratus dua puluh ditambah empat ratus empat puluh ditambah delapan ratus delapan puluh ditambah empat ratus empat puluh menghasilkan seribu sembilan ratus delapan puluh Watt. Arus total yang mengalir adalah daya dibagi tegangan dua ratus dua puluh Volt, yang menghasilkan sembilan Ampere. Karena sembilan Ampere melampaui kapasitas MCB enam Ampere, maka MCB akan terputus atau trip otomatis akibat kelebihan beban.',
    motivationQuote:
      'Sangat aplikatif! Pemahaman proteksi kelistrikan menjaga rumah dan keluarga kita tetap aman dari bahaya kebakaran.',
  },

  // ==========================================
  // SOAL 5: Rangkaian Sakelar S & Bypass Hambatan
  // ==========================================
  {
    id: 'pg-5',
    originalNumber: 5,
    type: 'multiple_choice',
    category: 'Listrik Dinamis',
    topic: 'Analisis Rangkaian Campuran dengan Sakelar S',
    storyContext:
      'Perhatikan rangkaian listrik pada Gambar 2. Sumber tegangan ideal memiliki ggl ε = 36 V (hambatan dalam r = 0). Resistor dirangkai dengan nilai: R₁ = 6 Ω, R₂ = 4 Ω, R₄ = 8 Ω, dan R₃ = 12 Ω. Sebuah sakelar S dipasang sedemikian rupa sehingga ketika ditutup akan mem-bypass (hubung singkat) resistor R₄.',
    questionText:
      'Berdasarkan Gambar 2, perubahan kuat arus pada resistor R₁ serta daya total sirkuit ketika sakelar S ditutup dibandingkan dengan saat sakelar S terbuka adalah...',
    stimulusType: 'circuit',
    stimulusTitle: 'Gambar 2: Rangkaian Listrik Campuran dengan Sakelar Bypass S',
    stimulusSvgType: 'gambar-2-sakelar-s',
    stimulusData: {
      E: '36 V',
      R1: '6 Ω',
      R2: '4 Ω',
      R3: '12 Ω',
      R4: '8 Ω',
    },
    options: [
      {
        id: 'pg-5-opt-a',
        text: 'Arus pada R₁ meningkat dari 3 A menjadi 4 A, dan daya total sirkuit bertambah dari 108 W menjadi 144 W.',
        isCorrect: true,
      },
      {
        id: 'pg-5-opt-b',
        text: 'Arus pada R₁ turun dari 4 A menjadi 2 A, dan daya total sirkuit berkurang dari 144 W menjadi 72 W.',
        isCorrect: false,
      },
      {
        id: 'pg-5-opt-c',
        text: 'Arus pada R₁ tetap konstan pada 3 A karena R₁ terhubung langsung dengan sumber tegangan.',
        isCorrect: false,
      },
      {
        id: 'pg-5-opt-d',
        text: 'Arus pada R₁ meningkat dari 2 A menjadi 6 A, dan daya total sirkuit bertambah dari 72 W menjadi 216 W.',
        isCorrect: false,
      },
      {
        id: 'pg-5-opt-e',
        text: 'Arus pada R₁ turun dari 6 A menjadi 3 A karena hambatan pengganti sirkuit membesar setelah sakelar ditutup.',
        isCorrect: false,
      },
    ],
    slowMethod: {
      title: 'Metode Lengkap (Analisis Rangkaian Ekuivalen Dua Keadaan)',
      steps: [
        {
          label: 'Diketahui',
          content:
            '$\\varepsilon = 36\\text{ V}$, $R_1 = 6\\ \\Omega$, $R_2 = 4\\ \\Omega$, $R_4 = 8\\ \\Omega$, $R_3 = 12\\ \\Omega$. Rangkaian terdiri dari $R_1$ seri dengan rangkaian paralel yang berisi cabang atas ($R_2 + R_4$) dan cabang bawah ($R_3$).',
        },
        {
          label: 'Keadaan 1: Sakelar S Terbuka',
          content:
            'Cabang atas: $R_{\\text{atas}} = R_2 + R_4 = 4 + 8 = 12\\ \\Omega$.\nParalel dengan cabang bawah ($R_3 = 12\\ \\Omega$):\n$$R_p = \\frac{12 \\times 12}{12 + 12} = 6\\ \\Omega$$\nHambatan total sirkuit:\n$$R_{\\text{tot, 1}} = R_1 + R_p = 6 + 6 = 12\\ \\Omega$$\nArus utama pada $R_1$:\n$$I_1 = \\frac{\\varepsilon}{R_{\\text{tot, 1}}} = \\frac{36\\text{ V}}{12\\ \\Omega} = 3\\text{ A}$$\nDaya total sirkuit:\n$$P_1 = \\varepsilon \\cdot I_1 = 36\\text{ V} \\times 3\\text{ A} = 108\\text{ W}$$',
        },
        {
          label: 'Keadaan 2: Sakelar S Ditutup',
          content:
            'Sakelar S membuat kawat melompati $R_4$ sehingga $R_4$ ter-bypass (hambatannya menjadi 0 pada cabang atas).\nCabang atas sekarang hanya: $R_{\\text{atas}} = R_2 = 4\\ \\Omega$.\nParalel dengan cabang bawah ($R_3 = 12\\ \\Omega$):\n$$R_p = \\frac{4 \\times 12}{4 + 12} = \\frac{48}{16} = 3\\ \\Omega$$\nHambatan total sirkuit baru:\n$$R_{\\text{tot, 2}} = R_1 + R_p = 6 + 3 = 9\\ \\Omega$$\nArus utama pada $R_1$:\n$$I_1 = \\frac{\\varepsilon}{R_{\\text{tot, 2}}} = \\frac{36\\text{ V}}{9\\ \\Omega} = 4\\text{ A}$$\nDaya total sirkuit baru:\n$$P_2 = \\varepsilon \\cdot I_1 = 36\\text{ V} \\times 4\\text{ A} = 144\\text{ W}$$',
        },
        {
          label: 'Kesimpulan',
          content:
            'Arus pada $R_1$ naik dari $3\\text{ A}$ menjadi $4\\text{ A}$, dan daya total sirkuit naik dari $108\\text{ W}$ menjadi $144\\text{ W}$. Pilihan yang benar adalah A.',
        },
      ],
      finalAnswer: 'Arus naik 3 A -> 4 A, Daya naik 108 W -> 144 W',
    },
    fastMethod: {
      title: 'Metode Cepat (Hambatan Ekuivalen Cepat)',
      steps: [
        {
          label: 'Kondisi 1',
          content:
            'Cabang paralel: 12 Ω // 12 Ω = 6 Ω. Total $R = 6 + 6 = 12\\ \\Omega$. Maka $I = 36 / 12 = 3\\text{ A}$, Daya $P = 36 \\times 3 = 108\\text{ W}$.',
        },
        {
          label: 'Kondisi 2',
          content:
            'Bypass $R_4$: 4 Ω // 12 Ω = 3 Ω. Total $R = 6 + 3 = 9\\ \\Omega$. Maka $I = 36 / 9 = 4\\text{ A}$, Daya $P = 36 \\times 4 = 144\\text{ W}$.',
        },
      ],
      finalAnswer: 'Opsi A benar mutlak',
    },
    audioNarrationQuestion:
      'Soal nomor lima. Perhatikan Gambar dua. Sumber tegangan tiga puluh enam Volt dihubungkan dengan resistor R satu enam Ohm, R dua empat Ohm, R empat delapan Ohm, dan R tiga dua belas Ohm. Bagaimanakah perubahan arus pada R satu dan daya total sirkuit saat sakelar S ditutup?',
    audioNarrationExplanation:
      'Ketika sakelar S terbuka, cabang atas memiliki hambatan dua belas Ohm, yang paralel dengan R tiga dua belas Ohm menghasilkan enam Ohm. Hambatan total adalah dua belas Ohm, menghasilkan arus tiga Ampere dan daya seratus delapan Watt. Ketika sakelar S ditutup, R empat dihubung-singkat sehingga cabang atas menjadi empat Ohm, menghasilkan paralel tiga Ohm. Hambatan total turun menjadi sembilan Ohm, sehingga arus naik menjadi empat Ampere dan daya meningkat menjadi seratus empat puluh empat Watt.',
    motivationQuote:
      'Luar biasa! Analisis hubung singkat dan bypass sakelar melatih ketelitian logika analisis sirkuitmu.',
  },

  // ==========================================
  // SOAL 6: Hukum I Kirchhoff pada Titik Simpul
  // ==========================================
  {
    id: 'pg-6',
    originalNumber: 6,
    type: 'multiple_choice',
    category: 'Listrik Dinamis',
    topic: 'Hukum I Kirchhoff pada Titik Percabangan',
    storyContext:
      'Sebuah titik simpul X pada papan rangkaian elektronika dihubungkan oleh lima kawat penghantar berarus listrik. Data pembacaan amperemeter menunjukkan: kawat 1 mengalirkan arus 4,2 A menuju simpul X; kawat 2 mengalirkan arus 2,6 A meninggalkan simpul X; kawat 3 mengalirkan arus 1,9 A menuju simpul X; kawat 4 mengalirkan arus 5,0 A meninggalkan simpul X.',
    questionText:
      'Berdasarkan hukum kekekalan muatan listrik (Hukum I Kirchhoff), besar dan arah kuat arus listrik pada kawat ke-5 adalah...',
    stimulusType: 'none',
    options: [
      {
        id: 'pg-6-opt-a',
        text: '1,5 A dengan arah mengalir masuk menuju simpul X.',
        isCorrect: true,
      },
      {
        id: 'pg-6-opt-b',
        text: '1,5 A dengan arah mengalir keluar meninggalkan simpul X.',
        isCorrect: false,
      },
      {
        id: 'pg-6-opt-c',
        text: '3,3 A dengan arah mengalir masuk menuju simpul X.',
        isCorrect: false,
      },
      {
        id: 'pg-6-opt-d',
        text: '13,7 A dengan arah mengalir keluar meninggalkan simpul X.',
        isCorrect: false,
      },
      {
        id: 'pg-6-opt-e',
        text: '0,5 A dengan arah mengalir masuk menuju simpul X.',
        isCorrect: false,
      },
    ],
    slowMethod: {
      title: 'Metode Lengkap (Neraca Muatan Hukum I Kirchhoff)',
      steps: [
        {
          label: 'Diketahui',
          content:
            'Arus masuk simpul X:\n- $I_1 = 4,2\\text{ A}$ (masuk)\n- $I_3 = 1,9\\text{ A}$ (masuk)\nArus keluar simpul X:\n- $I_2 = 2,6\\text{ A}$ (keluar)\n- $I_4 = 5,0\\text{ A}$ (keluar)',
        },
        {
          label: 'Ditanyakan',
          content: 'Besar dan arah arus pada kawat ke-5 ($I_5$).',
        },
        {
          label: 'Hukum I Kirchhoff',
          content:
            'Jumlah arus yang masuk ke suatu titik simpul harus sama dengan jumlah arus yang keluar dari titik tersebut:\n$$\\sum I_{\\text{masuk}} = \\sum I_{\\text{keluar}}$$',
        },
        {
          label: 'Penjumlahan Tiap Arah',
          content:
            'Jumlah arus masuk yang sudah ada:\n$$\\sum I_{\\text{masuk, awal}} = I_1 + I_3 = 4,2\\text{ A} + 1,9\\text{ A} = 6,1\\text{ A}$$\nJumlah arus keluar yang sudah ada:\n$$\\sum I_{\\text{keluar, awal}} = I_2 + I_4 = 2,6\\text{ A} + 5,0\\text{ A} = 7,6\\text{ A}$$',
        },
        {
          label: 'Menentukan Arus Kawat 5',
          content:
            'Karena arus keluar ($7,6\\text{ A}$) lebih besar daripada arus masuk ($6,1\\text{ A}$), maka kawat ke-5 harus berarah **masuk** menuju simpul X agar seimbang:\n$$6,1\\text{ A} + I_5 = 7,6\\text{ A}$$\n$$I_5 = 7,6\\text{ A} - 6,1\\text{ A} = 1,5\\text{ A}\\text{ (masuk)}$$',
        },
        {
          label: 'Kesimpulan',
          content:
            'Kuat arus kawat ke-5 adalah 1,5 A berarah masuk menuju simpul X. Pilihan tepat: A.',
        },
      ],
      finalAnswer: '1,5 A masuk menuju simpul X',
    },
    fastMethod: {
      title: 'Metode Cepat (Keseimbangan Masuk = Keluar)',
      steps: [
        {
          label: 'Hitung Selisih',
          content:
            'Masuk: $4,2 + 1,9 = 6,1\\text{ A}$. Keluar: $2,6 + 5,0 = 7,6\\text{ A}$.\nSisi masuk kekurangan: $7,6 - 6,1 = 1,5\\text{ A}$. Jadi kawat 5 harus mengalir masuk sebesar 1,5 A.',
        },
      ],
      finalAnswer: '1,5 A masuk (Opsi A)',
    },
    audioNarrationQuestion:
      'Soal nomor enam. Pada suatu titik simpul X, kawat satu mengalirkan empat koma dua Ampere masuk, kawat dua dua koma enam Ampere keluar, kawat tiga satu koma sembilan Ampere masuk, dan kawat empat lima koma nol Ampere keluar. Berapakah nilai dan arah arus pada kawat kelima?',
    audioNarrationExplanation:
      'Menurut Hukum Satu Kirchhoff, total arus masuk harus seimbang dengan total arus keluar. Total arus keluar yang sudah diketahui adalah dua koma enam ditambah lima koma nol, yaitu tujuh koma enam Ampere. Sedangkan arus masuk baru empat koma dua ditambah satu koma sembilan, yaitu enam koma satu Ampere. Agar seimbang, kawat kelima harus mengalirkan arus masuk sebesar tujuh koma enam dikurangi enam koma satu, sama dengan satu koma lima Ampere.',
    motivationQuote:
      'Sempurna! Hukum I Kirchhoff adalah hukum kekekalan muatan yang tidak pernah gagal di alam semesta.',
  },

  // ==========================================
  // SOAL 7: Sirkuit Pengisian Aki (Charging) & Tegangan Jepit
  // ==========================================
  {
    id: 'pg-7',
    originalNumber: 7,
    type: 'multiple_choice',
    category: 'Listrik Dinamis',
    topic: 'Pengisian Aki (Charging) & Tegangan Terminal',
    storyContext:
      'Sebuah charger baterai bertegangan ggl ε₁ = 18,0 V dengan hambatan dalam r₁ = 0,5 Ω digunakan untuk mengisi ulang (recharging) sebuah akumulator mobil ber-ggl ε₂ = 12,0 V dengan hambatan dalam r₂ = 0,3 Ω. Untuk membatasi arus pengisian, dipasang sebuah resistor pembatas eksternal R = 2,2 Ω secara seri dalam rangkaian. Kutub positif charger dihubungkan ke kutub positif aki.',
    questionText:
      'Besar kuat arus pengisian yang mengalir ke dalam akumulator serta beda potensial (tegangan jepit) pada kedua kutub akumulator selama proses pengisian berlangsung berturut-turut adalah...',
    stimulusType: 'none',
    options: [
      { id: 'pg-7-opt-a', text: '2,0 A dan 12,6 V', isCorrect: true },
      { id: 'pg-7-opt-b', text: '2,0 A dan 11,4 V', isCorrect: false },
      { id: 'pg-7-opt-c', text: '10,0 A dan 15,0 V', isCorrect: false },
      { id: 'pg-7-opt-d', text: '2,5 A dan 12,8 V', isCorrect: false },
      { id: 'pg-7-opt-e', text: '1,5 A dan 12,5 V', isCorrect: false },
    ],
    slowMethod: {
      title: 'Metode Lengkap (Loop Pengisian Aki & Tegangan Terminal Pengisian)',
      steps: [
        {
          label: 'Diketahui',
          content:
            'Charger: $\\varepsilon_1 = 18,0\\text{ V}$, $r_1 = 0,5\\ \\Omega$.\nAki yang diisi: $\\varepsilon_2 = 12,0\\text{ V}$, $r_2 = 0,3\\ \\Omega$.\nResistor pembatas eksternal: $R = 2,2\\ \\Omega$.\nKutub positif charger dihubungkan ke kutub positif aki (proses pengisian / charging).',
        },
        {
          label: 'Ditanyakan',
          content: 'Kuat arus pengisian $I$ dan tegangan jepit aki $V_{\\text{jepit, aki}}$.',
        },
        {
          label: 'Prinsip Sirkuit Loop Tertutup',
          content:
            'Karena kedua sumber saling berhadapan kutubnya (berlawanan arah dorong ggl), ggl total penggerak arus adalah selisih keduanya:\n$$\\varepsilon_{\\text{net}} = \\varepsilon_1 - \\varepsilon_2$$\nHambatan total sirkuit:\n$$R_{\\text{total}} = R + r_1 + r_2$$',
        },
        {
          label: 'Perhitungan Kuat Arus',
          content:
            '$$I = \\frac{\\varepsilon_1 - \\varepsilon_2}{R + r_1 + r_2} = \\frac{18,0\\text{ V} - 12,0\\text{ V}}{2,2\\ \\Omega + 0,5\\ \\Omega + 0,3\\ \\Omega} = \\frac{6,0\\text{ V}}{3,0\\ \\Omega} = 2,0\\text{ A}$$',
        },
        {
          label: 'Perhitungan Tegangan Jepit Aki Saat Diisi',
          content:
            'Perhatikan bahwa aki sedang **menerima arus** (diisi), sehingga arus mengalir masuk ke kutub positif aki. Rumus tegangan terminal aki saat diisi adalah bertanda tambah (+):\n$$V_{\\text{jepit}} = \\varepsilon_2 + I \\cdot r_2$$\n$$V_{\\text{jepit}} = 12,0\\text{ V} + (2,0\\text{ A} \\times 0,3\\ \\Omega) = 12,0\\text{ V} + 0,6\\text{ V} = 12,6\\text{ V}$$',
        },
        {
          label: 'Kesimpulan',
          content:
            'Arus pengisian sebesar 2,0 A dan tegangan jepit pada kutub aki adalah 12,6 V. Pilihan tepat: A.',
        },
      ],
      finalAnswer: '2,0 A dan 12,6 V',
    },
    fastMethod: {
      title: 'Metode Cepat (GGL Bersih & Kaidah Charging (+))',
      steps: [
        {
          label: 'Hitung Arus Cepat',
          content:
            'Ggl bersih: $18 - 12 = 6\\text{ V}$. Hambatan total: $2,2 + 0,5 + 0,3 = 3\\ \\Omega$. Arus: $I = \\frac{6}{3} = 2,0\\text{ A}$.',
        },
        {
          label: 'Kaidah Tegangan Charging',
          content:
            'Ingat: saat aki discharging $V = \\varepsilon - Ir$; saat charging $V = \\varepsilon + Ir$. Maka $V = 12 + (2 \\times 0,3) = 12,6\\text{ V}$.',
        },
      ],
      finalAnswer: '2,0 A dan 12,6 V (Opsi A)',
    },
    audioNarrationQuestion:
      'Soal nomor tujuh. Charger delapan belas Volt dengan hambatan dalam nol koma lima Ohm mengisi aki dua belas Volt berhambatan nol koma tiga Ohm dengan resistor seri dua koma dua Ohm. Berapakah arus pengisian dan tegangan jepit aki?',
    audioNarrationExplanation:
      'Selisih ggl kedua sumber adalah delapan belas dikurangi dua belas, yaitu enam Volt. Hambatan total adalah dua koma dua ditambah nol koma lima ditambah nol koma tiga, yaitu tiga Ohm. Maka arus pengisian adalah enam dibagi tiga sama dengan dua Ampere. Karena aki sedang diisi, tegangan terminalnya adalah ggl ditambah penurunan tegangan internal, yaitu dua belas ditambah dua dikali nol koma tiga, menghasilkan dua belas koma enam Volt.',
    motivationQuote:
      'Mantap! Konsep charging aki ini sering diujikan dan krusial dalam pemahaman teknologi baterai kendaraan listrik.',
  },

  // ==========================================
  // SOAL 8: Sirkuit Dua Loop - Kuat Arus R2
  // ==========================================
  {
    id: 'pg-8',
    originalNumber: 8,
    type: 'multiple_choice',
    category: 'Listrik Dinamis',
    topic: 'Hukum II Kirchhoff Dua Loop (Arus Cabang Tengah)',
    storyContext:
      'Perhatikan sirkuit listrik dua loop pada Gambar 3. Parameter komponen adalah: ε₁ = 20 V, ε₂ = 8 V, R₁ = 4 Ω, R₂ = 2 Ω, dan R₃ = 4 Ω (hambatan dalam sumber diabaikan).',
    questionText:
      'Berdasarkan analisis Hukum II Kirchhoff pada Gambar 3, besar dan arah kuat arus listrik yang mengalir melalui resistor R₂ adalah...',
    stimulusType: 'circuit',
    stimulusTitle: 'Gambar 3: Rangkaian Listrik Majemuk Dua Loop',
    stimulusSvgType: 'gambar-3-dua-loop',
    stimulusData: {
      E1: '20 V',
      E2: '8 V',
      R1: '4 Ω',
      R2: '2 Ω',
      R3: '4 Ω',
    },
    options: [
      { id: 'pg-8-opt-a', text: '3,50 A dari titik A menuju B', isCorrect: true },
      { id: 'pg-8-opt-b', text: '3,50 A dari titik B menuju A', isCorrect: false },
      { id: 'pg-8-opt-c', text: '2,00 A dari titik A menuju B', isCorrect: false },
      { id: 'pg-8-opt-d', text: '1,75 A dari titik B menuju A', isCorrect: false },
      { id: 'pg-8-opt-e', text: '4,00 A dari titik A menuju B', isCorrect: false },
    ],
    slowMethod: {
      title: 'Metode Lengkap (Hukum Kirchhoff Loop I & Loop II)',
      steps: [
        {
          label: 'Diketahui',
          content:
            'Cabang kiri: $\\varepsilon_1 = 20\\text{ V}$, $R_1 = 4\\ \\Omega$, arus $I_1$ mengalir dari C ke A.\nCabang tengah: $R_2 = 2\\ \\Omega$, arus $I_2$ mengalir dari A ke B.\nCabang kanan: $\\varepsilon_2 = 8\\text{ V}$, $R_3 = 4\\ \\Omega$, arus $I_3$ mengalir dari E ke A.',
        },
        {
          label: 'Hukum I Kirchhoff di Simpul A',
          content:
            '$$I_1 + I_3 = I_2 \\implies I_3 = I_2 - I_1$$',
        },
        {
          label: 'Persamaan Loop I (Kiri: searah jarum jam A-B-D-C-A)',
          content:
            '$$\\sum \\varepsilon + \\sum I R = 0$$\n$$-\\varepsilon_1 + I_1 R_1 + I_2 R_2 = 0$$\n$$-20 + 4I_1 + 2I_2 = 0 \\implies 4I_1 + 2I_2 = 20 \\implies 2I_1 + I_2 = 10 \\quad \\text{--- (Pers. 1)}$$',
        },
        {
          label: 'Persamaan Loop II (Kanan: berlawanan arah jarum jam A-B-F-E-A)',
          content:
            '$$-\\varepsilon_2 + I_3 R_3 + I_2 R_2 = 0$$\n$$-8 + 4I_3 + 2I_2 = 0 \\implies 4I_3 + 2I_2 = 8 \\implies 2I_3 + I_2 = 4 \\quad \\text{--- (Pers. 2)}$$',
        },
        {
          label: 'Eliminasi & Substitusi',
          content:
            'Dari Pers. 1: $I_1 = \\frac{10 - I_2}{2}$.\nDari Pers. 2: $I_3 = \\frac{4 - I_2}{2}$.\nSubstitusikan ke hukum simpul $I_1 + I_3 = I_2$:\n$$\\frac{10 - I_2}{2} + \\frac{4 - I_2}{2} = I_2$$\n$$\\frac{14 - 2I_2}{2} = I_2 \\implies 7 - I_2 = I_2 \\implies 2I_2 = 7 \\implies I_2 = 3,50\\text{ A}$$',
        },
        {
          label: 'Kesimpulan',
          content:
            'Nilai $I_2$ bertanda positif (+3,50 A), artinya arah pemisalan dari titik A menuju titik B benar. Pilihan tepat: A.',
        },
      ],
      finalAnswer: '3,50 A dari A ke B',
    },
    fastMethod: {
      title: 'Metode Cepat (Analisis Potensial Simpul / Node Voltage)',
      steps: [
        {
          label: 'Tegangan Simpul A',
          content:
            'Jadikan simpul B sebagai ground ($V_B = 0$).\nKCL di simpul A:\n$$\\frac{V_A - 20}{4} + \\frac{V_A}{2} + \\frac{V_A - 8}{4} = 0$$\nKalikan 4 kedua ruas:\n$$(V_A - 20) + 2V_A + (V_A - 8) = 0$$\n$$4V_A = 28 \\implies V_A = 7,00\\text{ V}$$',
        },
        {
          label: 'Hitung Arus I2 Langsung',
          content:
            '$$I_2 = \\frac{V_A - V_B}{R_2} = \\frac{7,00 - 0}{2} = 3,50\\text{ A}\\text{ (mengalir dari A ke B)}$$',
        },
      ],
      finalAnswer: '3,50 A dari A menuju B (Opsi A)',
    },
    audioNarrationQuestion:
      'Soal nomor delapan. Berdasarkan sirkuit dua loop pada Gambar tiga dengan ggl dua puluh Volt dan delapan Volt, tentukan besar dan arah arus yang mengalir melalui resistor R dua di cabang tengah.',
    audioNarrationExplanation:
      'Kita dapat menyelesaikannya secara cepat dengan metode potensial simpul. Anggap titik B berpotensial nol Volt. Arus total yang keluar dari simpul A menghasilkan tegangan simpul A sebesar tujuh koma nol Volt. Maka arus pada resistor R dua adalah tujuh Volt dibagi dua Ohm, sama dengan tiga koma lima Ampere mengalir dari simpul A menuju simpul B.',
    motivationQuote:
      'Keren! Menguasai metode potensial simpul membuat soal dua loop terselesaikan dalam hitungan detik.',
  },

  // ==========================================
  // SOAL 9: Sirkuit Dua Loop - Beda Potensial V_AB
  // ==========================================
  {
    id: 'pg-9',
    originalNumber: 9,
    type: 'multiple_choice',
    category: 'Listrik Dinamis',
    topic: 'Beda Potensial Antar Titik Simpul (V_AB)',
    storyContext:
      'Melanjutkan analisis terhadap sirkuit listrik dua loop pada Gambar 3 (di mana ε₁ = 20 V, ε₂ = 8 V, R₁ = 4 Ω, R₂ = 2 Ω, dan R₃ = 4 Ω).',
    questionText:
      'Besar beda potensial listrik antara titik simpul A dan titik simpul B ($V_{AB} = V_A - V_B$) adalah...',
    stimulusType: 'circuit',
    stimulusTitle: 'Gambar 3: Rangkaian Listrik Majemuk Dua Loop',
    stimulusSvgType: 'gambar-3-dua-loop',
    stimulusData: {
      E1: '20 V',
      E2: '8 V',
      R1: '4 Ω',
      R2: '2 Ω',
      R3: '4 Ω',
    },
    options: [
      { id: 'pg-9-opt-a', text: '7,00 Volt', isCorrect: true },
      { id: 'pg-9-opt-b', text: '14,00 Volt', isCorrect: false },
      { id: 'pg-9-opt-c', text: '4,00 Volt', isCorrect: false },
      { id: 'pg-9-opt-d', text: '6,00 Volt', isCorrect: false },
      { id: 'pg-9-opt-e', text: '12,00 Volt', isCorrect: false },
    ],
    slowMethod: {
      title: 'Metode Lengkap (Beda Potensial Lintasan A ke B)',
      steps: [
        {
          label: 'Diketahui',
          content:
            'Dari hasil perhitungan Soal 8, kuat arus yang mengalir melalui resistor cabang tengah $R_2 = 2\\ \\Omega$ dari A ke B adalah $I_2 = 3,50\\text{ A}$.',
        },
        {
          label: 'Ditanyakan',
          content: 'Beda potensial $V_{AB} = V_A - V_B$.',
        },
        {
          label: 'Rumus Beda Potensial Antar Titik',
          content:
            'Pada cabang tanpa ggl (hanya resistor $R_2$):\n$$V_{AB} = V_A - V_B = I_2 \\cdot R_2$$',
        },
        {
          label: 'Perhitungan',
          content:
            '$$V_{AB} = 3,50\\text{ A} \\times 2,0\\ \\Omega = 7,00\\text{ Volt}$$',
        },
        {
          label: 'Verifikasi Lintasan Lain (Lewat Cabang Kiri)',
          content:
            'Arus kawat kiri: $I_1 = \\frac{10 - 3,5}{2} = 3,25\\text{ A}$ (dari C ke A).\nLintasan A-C-D-B:\n$$V_{AB} = -I_1 R_1 + \\varepsilon_1 = -(3,25 \\times 4) + 20 = -13 + 20 = 7,00\\text{ Volt}$$ (Terbukti konsisten sempurna!)',
        },
        {
          label: 'Kesimpulan',
          content:
            'Beda potensial antara titik A dan B adalah 7,00 Volt. Pilihan yang tepat adalah A.',
        },
      ],
      finalAnswer: '7,00 Volt',
    },
    fastMethod: {
      title: 'Metode Cepat (Hukum Ohm Cabang Tengah)',
      steps: [
        {
          label: 'Perkalian Langsung',
          content:
            'Karena cabang A ke B hanya berisi $R_2$, maka $V_{AB} = I_2 \\times R_2 = 3,5\\text{ A} \\times 2\\ \\Omega = 7\\text{ Volt}$.',
        },
      ],
      finalAnswer: '7,00 Volt (Opsi A)',
    },
    audioNarrationQuestion:
      'Soal nomor sembilan. Berdasarkan rangkaian Gambar tiga, berapakah besar beda potensial listrik antara titik simpul A dan titik simpul B?',
    audioNarrationExplanation:
      'Karena cabang tengah menghubungkan titik A dan titik B hanya melalui resistor R dua sebesar dua Ohm, beda potensial V A B langsung diperoleh dari perkalian kuat arus cabang tengah dikali hambatannya. Tiga koma lima Ampere dikali dua Ohm menghasilkan tujuh koma nol Volt.',
    motivationQuote:
      'Hebat! Menghubungkan hasil soal sebelumnya dengan cepat adalah strategi efisien dalam ujian evaluasi.',
  },

  // ==========================================
  // SOAL 10: Efisiensi Pemanas Listrik & Kalor
  // ==========================================
  {
    id: 'pg-10',
    originalNumber: 10,
    type: 'multiple_choice',
    category: 'Listrik Dinamis',
    topic: 'Efisiensi Energi Pemanas Listrik & Hukum Joule',
    storyContext:
      'Sebuah teko pemanas air listrik dengan spesifikasi daya 840 W digunakan untuk memanaskan air murni bermassa 0,8 kg yang suhu awalnya 20 °C hingga mencapai titik didih normal 100 °C. Proses pemanasan tersebut memerlukan waktu 400 sekon. Diketahui kalor jenis air adalah c = 4.200 J/(kg·°C).',
    questionText:
      'Berdasarkan hukum kekekalan energi dan efisiensi termal alat, persentase efisiensi teko pemanas air listrik tersebut adalah...',
    stimulusType: 'none',
    options: [
      { id: 'pg-10-opt-a', text: '80%', isCorrect: true },
      { id: 'pg-10-opt-b', text: '75%', isCorrect: false },
      { id: 'pg-10-opt-c', text: '85%', isCorrect: false },
      { id: 'pg-10-opt-d', text: '90%', isCorrect: false },
      { id: 'pg-10-opt-e', text: '65%', isCorrect: false },
    ],
    slowMethod: {
      title: 'Metode Lengkap (Kalor Berguna vs Energi Listrik Total)',
      steps: [
        {
          label: 'Diketahui',
          content:
            'Daya teko: $P = 840\\text{ W}$. Waktu pemanasan: $t = 400\\text{ s}$. Massa air: $m = 0,8\\text{ kg}$. Suhu awal: $T_1 = 20^\\circ\\text{C}$, suhu akhir: $T_2 = 100^\\circ\\text{C}$ (kenaikan suhu $\\Delta T = 100 - 20 = 80^\\circ\\text{C}$). Kalor jenis air: $c = 4.200\\text{ J/(kg}\\cdot^\\circ\\text{C)}$.',
        },
        {
          label: 'Ditanyakan',
          content: 'Efisiensi pemanas listrik ($\\eta$).',
        },
        {
          label: 'Rumus Dasar',
          content:
            '1. Energi kalor berguna untuk memanaskan air: $Q = m \\cdot c \\cdot \\Delta T$.\n2. Energi listrik total yang diserap teko: $W = P \\cdot t$.\n3. Efisiensi: $\\eta = \\frac{Q}{W} \\times 100\\%$.',
        },
        {
          label: 'Perhitungan Kalor Berguna (Q)',
          content:
            '$$Q = 0,8\\text{ kg} \\times 4.200\\text{ J/(kg}\\cdot^\\circ\\text{C)} \\times 80^\\circ\\text{C}$$\n$$Q = 3.360 \\times 80 = 268.800\\text{ Joule}$$',
        },
        {
          label: 'Perhitungan Energi Listrik (W)',
          content:
            '$$W = P \\cdot t = 840\\text{ W} \\times 400\\text{ s} = 336.000\\text{ Joule}$$',
        },
        {
          label: 'Perhitungan Efisiensi',
          content:
            '$$\\eta = \\frac{268.800\\text{ J}}{336.000\\text{ J}} \\times 100\\% = \\frac{2688}{3360} \\times 100\\% = 0,80 \\times 100\\% = 80\\%$$',
        },
        {
          label: 'Kesimpulan',
          content:
            'Efisiensi teko listrik tersebut adalah 80%. Sisa energi 20% hilang sebagai kalor ke wadah teko dan udara sekitar. Pilihan tepat: A.',
        },
      ],
      finalAnswer: '80%',
    },
    fastMethod: {
      title: 'Metode Cepat (Penyederhanaan Faktor Kali)',
      steps: [
        {
          label: 'Rasio Q / W',
          content:
            '$$\\eta = \\frac{m \\cdot c \\cdot \\Delta T}{P \\cdot t} = \\frac{0,8 \\times 4.200 \\times 80}{840 \\times 400}$$\nBagi 4.200 dengan 840 = 5.\n$$\\eta = \\frac{0,8 \\times 5 \\times 80}{400} = \\frac{4,0 \\times 80}{400} = \\frac{320}{400} = 0,80 = 80\\%$$',
        },
      ],
      finalAnswer: '80% (Opsi A)',
    },
    audioNarrationQuestion:
      'Soal nomor sepuluh. Teko listrik delapan ratus empat puluh Watt mendidihkan nol koma delapan kilogram air dari dua puluh derajat Celcius hingga seratus derajat Celcius dalam waktu empat ratus detik. Kalor jenis air empat ribu dua ratus Joule per kilogram derajat Celcius. Berapakah persentase efisiensi teko tersebut?',
    audioNarrationExplanation:
      'Kalor berguna untuk menaikkan suhu air dihitung dari massa dikali kalor jenis dikali perubahan suhu delapan puluh derajat, yang menghasilkan dua ratus enam puluh delapan ribu delapan ratus Joule. Energi listrik total yang terpakai adalah daya delapan ratus empat puluh Watt dikali empat ratus detik, yaitu tiga ratus tiga puluh enam ribu Joule. Membagi kalor berguna dengan energi listrik menghasilkan efisiensi tepat delapan puluh persen.',
    motivationQuote:
      'Bagus sekali! Analisis efisiensi energi adalah kompetensi utama insinyur dalam mendesain teknologi ramah lingkungan.',
  },

  // ==========================================
  // SOAL 11: Konsumsi Energi Listrik Rumah Tangga (Tabel 1)
  // ==========================================
  {
    id: 'pg-11',
    originalNumber: 11,
    type: 'multiple_choice',
    category: 'Listrik Dinamis',
    topic: 'Konsumsi Energi Listrik Bulanan (kWh)',
    storyContext:
      'Tabel 1 menyajikan daftar peralatan listrik yang digunakan sehari-hari pada sebuah rumah tinggal sederhana beserta daya nominal dan durasi pemakaian rata-rata per hari.',
    questionText:
      'Berdasarkan data pada Tabel 1, total konsumsi energi listrik yang terpakai oleh seluruh peralatan tersebut selama 1 bulan (diasumsikan 30 hari kalender) adalah...',
    stimulusType: 'table',
    stimulusTitle: 'Tabel 1: Inventaris Peralatan Listrik Rumah Tinggal',
    tableData: {
      caption: 'Tabel 1: Data Daya dan Pemakaian Peralatan Listrik Harian',
      headers: ['Nama Peralatan', 'Jumlah (Unit)', 'Daya per Unit (Watt)', 'Pemakaian Harian (Jam)'],
      rows: [
        ['Lampu LED Ruangan', 8, 10, 10],
        ['Lemari Es (Kulkas)', 1, 100, 24],
        ['Air Conditioner (AC)', 1, 500, 10],
        ['Pompa Air Otomatis', 1, 300, 2],
        ['Televisi Smart LED', 1, 100, 6],
      ],
    },
    options: [
      { id: 'pg-11-opt-a', text: '282,0 kWh', isCorrect: true },
      { id: 'pg-11-opt-b', text: '240,5 kWh', isCorrect: false },
      { id: 'pg-11-opt-c', text: '315,0 kWh', isCorrect: false },
      { id: 'pg-11-opt-d', text: '188,0 kWh', isCorrect: false },
      { id: 'pg-11-opt-e', text: '298,4 kWh', isCorrect: false },
    ],
    slowMethod: {
      title: 'Metode Lengkap (Akumulasi Energi per Komponen & Konversi kWh)',
      steps: [
        {
          label: 'Diketahui',
          content:
            'Data pemakaian harian:\n1. Lampu LED: $8 \\times 10\\text{ W} \\times 10\\text{ jam} = 800\\text{ Wh}$\n2. Lemari Es: $1 \\times 100\\text{ W} \\times 24\\text{ jam} = 2.400\\text{ Wh}$\n3. AC: $1 \\times 500\\text{ W} \\times 10\\text{ jam} = 5.000\\text{ Wh}$\n4. Pompa Air: $1 \\times 300\\text{ W} \\times 2\\text{ jam} = 600\\text{ Wh}$\n5. Televisi: $1 \\times 100\\text{ W} \\times 6\\text{ jam} = 600\\text{ Wh}$',
        },
        {
          label: 'Ditanyakan',
          content: 'Konsumsi energi listrik total dalam 1 bulan (30 hari) dalam satuan kWh.',
        },
        {
          label: 'Perhitungan Energi Harian (Wh)',
          content:
            '$$E_{\\text{hari}} = 800 + 2.400 + 5.000 + 600 + 600 = 9.400\\text{ Wh/hari}$$',
        },
        {
          label: 'Konversi ke kWh per Hari',
          content:
            '$$E_{\\text{hari}} = \\frac{9.400}{1.000} = 9,4\\text{ kWh/hari}$$',
        },
        {
          label: 'Perhitungan Energi Bulanan (30 hari)',
          content:
            '$$E_{\\text{bulan}} = 9,4\\text{ kWh/hari} \\times 30\\text{ hari} = 282,0\\text{ kWh}$$',
        },
        {
          label: 'Kesimpulan',
          content:
            'Total konsumsi energi listrik rumah tangga selama 30 hari adalah 282,0 kWh. Pilihan yang tepat adalah A.',
        },
      ],
      finalAnswer: '282,0 kWh',
    },
    fastMethod: {
      title: 'Metode Cepat (Penjumlahan Cepat & Kali 30)',
      steps: [
        {
          label: 'Hitung Harian',
          content:
            'LED (0,8) + Kulkas (2,4) + AC (5,0) + Pompa (0,6) + TV (0,6) = 9,4 kWh/hari.',
        },
        {
          label: 'Kali 30 Hari',
          content:
            '$9,4 \\times 30 = 282\\text{ kWh}$. Langsung pilih opsi A.',
        },
      ],
      finalAnswer: '282,0 kWh (Opsi A)',
    },
    audioNarrationQuestion:
      'Soal nomor sebelas. Berdasarkan data konsumsi daya pada Tabel satu, tentukan total energi listrik yang terpakai oleh seluruh peralatan rumah tangga tersebut selama tiga puluh hari dalam satuan kilowatt hour.',
    audioNarrationExplanation:
      'Mari jumlahkan energi harian tiap alat. Lampu menghasilkan delapan ratus Watt hour, kulkas dua ribu empat ratus, pendingin ruangan lima ribu, pompa air enam ratus, dan televisi enam ratus Watt hour. Total konsumsi harian adalah sembilan ribu empat ratus Watt hour atau sembilan koma empat kilowatt hour. Dikalikan tiga puluh hari kalender menghasilkan total konsumsi dua ratus delapan puluh dua kilowatt hour.',
    motivationQuote:
      'Mantap! Kemampuan membaca meteran dan menghitung kWh adalah bekal literasi finansial keluarga hemat energi.',
  },

  // ==========================================
  // SOAL 12: Analisis Biaya Listrik & Penghematan
  // ==========================================
  {
    id: 'pg-12',
    originalNumber: 12,
    type: 'multiple_choice',
    category: 'Listrik Dinamis',
    topic: 'Biaya Rekening Listrik & Strategi Penghematan',
    storyContext:
      'Berdasarkan profil konsumsi listrik pada Tabel 1 di Soal 11, rumah tersebut dikenakan tarif listrik PLN nonsubsidi untuk golongan R-1/TR 1.300 VA sebesar Rp1.444,70 per kWh. Untuk menekan pengeluaran bulanan, keluarga tersebut menerapkan efisiensi energi dengan mengurangi pemakaian AC dan lampu sehingga berhasil menghemat energi rata-rata 3,0 kWh per hari secara konsisten.',
    questionText:
      'Besar penghematan biaya tagihan listrik yang berhasil diperoleh keluarga tersebut dalam jangka waktu satu bulan (30 hari) adalah...',
    stimulusType: 'none',
    options: [
      { id: 'pg-12-opt-a', text: 'Rp130.023,00', isCorrect: true },
      { id: 'pg-12-opt-b', text: 'Rp144.470,00', isCorrect: false },
      { id: 'pg-12-opt-c', text: 'Rp115.576,00', isCorrect: false },
      { id: 'pg-12-opt-d', text: 'Rp173.364,00', isCorrect: false },
      { id: 'pg-12-opt-e', text: 'Rp98.240,00', isCorrect: false },
    ],
    slowMethod: {
      title: 'Metode Lengkap (Volume Penghematan kWh & Perkalian Tarif)',
      steps: [
        {
          label: 'Diketahui',
          content:
            'Penghematan energi harian: $\\Delta E_{\\text{hari}} = 3,0\\text{ kWh/hari}$.\nJumlah hari dalam sebulan: $t = 30\\text{ hari}$.\nTarif dasar listrik per kWh: $T = \\text{Rp}1.444,70 / \\text{kWh}$.',
        },
        {
          label: 'Ditanyakan',
          content: 'Besar penghematan biaya listrik bulanan ($\\Delta \\text{Biaya}$).',
        },
        {
          label: 'Perhitungan Total Penghematan Energi',
          content:
            '$$\\Delta E_{\\text{bulan}} = 3,0\\text{ kWh/hari} \\times 30\\text{ hari} = 90\\text{ kWh}$$',
        },
        {
          label: 'Perhitungan Penghematan Rupiah',
          content:
            '$$\\Delta \\text{Biaya} = \\Delta E_{\\text{bulan}} \\times \\text{Tarif}$$\n$$\\Delta \\text{Biaya} = 90\\text{ kWh} \\times \\text{Rp}1.444,70 / \\text{kWh} = \\text{Rp}130.023,00$$',
        },
        {
          label: 'Kesimpulan',
          content:
            'Penghematan biaya tagihan listrik selama 30 hari adalah sebesar Rp130.023,00. Pilihan yang tepat adalah A.',
        },
      ],
      finalAnswer: 'Rp130.023,00',
    },
    fastMethod: {
      title: 'Metode Cepat (Perkalian 90 × Tarif)',
      steps: [
        {
          label: 'Hitung Cepat',
          content:
            'Volume hemat = $3 \\times 30 = 90\\text{ kWh}$.\nBiaya hemat = $90 \\times 1.444,70 = 9 \\times 14.447,00 = \\text{Rp}130.023,00$.',
        },
      ],
      finalAnswer: 'Rp130.023,00 (Opsi A)',
    },
    audioNarrationQuestion:
      'Soal nomor dua belas. Dengan tarif listrik seribu empat ratus empat puluh empat koma tujuh puluh rupiah per kilowatt hour, berapakah penghematan tagihan listrik sebulan jika keluarga berhasil menghemat tiga koma nol kilowatt hour per hari selama tiga puluh hari?',
    audioNarrationExplanation:
      'Penghematan energi dalam tiga puluh hari adalah tiga kilowatt hour dikali tiga puluh hari, sama dengan sembilan puluh kilowatt hour. Mengalikan sembilan puluh kilowatt hour dengan tarif seribu empat ratus empat puluh empat koma tujuh puluh rupiah menghasilkan total penghematan sebesar seratus tiga puluh ribu dua puluh tiga rupiah.',
    motivationQuote:
      'Luar biasa! Efisiensi energi sekecil apa pun jika dilakukan konsisten memberikan dampak ekonomi dan ekologis yang besar.',
  },

  // ==========================================
  // SOAL 13: Penurunan Tegangan Saat Starter Mobil
  // ==========================================
  {
    id: 'pg-13',
    originalNumber: 13,
    type: 'multiple_choice',
    category: 'Listrik Dinamis',
    topic: 'Tegangan Jepit & Hambatan Dalam Sel Aki Starter',
    storyContext:
      'Sebuah aki mobil dalam kondisi prima memiliki ggl ε = 12,8 V dan hambatan dalam r = 0,04 Ω. Ketika pengemudi memutar kunci kontak untuk menyalakan motor starter mobil, motor starter menarik kuat arus listrik sesaat yang sangat besar yaitu sebesar 150 A.',
    questionText:
      'Besar tegangan jepit (terminal voltage) pada kutub-kutub aki mobil saat proses starting berlangsung beserta penjelasan fisis yang mendasarinya adalah...',
    stimulusType: 'none',
    options: [
      {
        id: 'pg-13-opt-a',
        text: '6,8 V karena terjadi penurunan tegangan (voltage drop) sebesar 6,0 V di dalam hambatan dalam baterai.',
        isCorrect: true,
      },
      {
        id: 'pg-13-opt-b',
        text: '12,8 V karena ggl baterai tidak pernah berubah meskipun arus yang ditarik beban sangat besar.',
        isCorrect: false,
      },
      {
        id: 'pg-13-opt-c',
        text: '18,8 V karena motor starter menghasilkan gaya gerak listrik induksi balik yang menjumlahkan tegangan.',
        isCorrect: false,
      },
      {
        id: 'pg-13-opt-d',
        text: '0,0 V karena terjadi hubung singkat sesaat pada kumparan motor starter.',
        isCorrect: false,
      },
      {
        id: 'pg-13-opt-e',
        text: '8,8 V karena hambatan dalam baterai hanya mampu menyerap tegangan sebesar 4,0 V.',
        isCorrect: false,
      },
    ],
    slowMethod: {
      title: 'Metode Lengkap (Penurunan Tegangan Internal Sumber Arus)',
      steps: [
        {
          label: 'Diketahui',
          content:
            'Ggl aki: $\\varepsilon = 12,8\\text{ V}$. Hambatan dalam: $r = 0,04\\ \\Omega$. Kuat arus starter: $I = 150\\text{ A}$.',
        },
        {
          label: 'Ditanyakan',
          content: 'Tegangan jepit terminal ($V_{\\text{jepit}}$) dan mekanisme fisisnya.',
        },
        {
          label: 'Rumus Tegangan Jepit',
          content:
            'Ketika baterai mengalirkan arus listrik ke beban luar (discharging), sebagian tegangan hilang di dalam baterai akibat hambatan dalam:\n$$V_{\\text{drop}} = I \\cdot r$$\n$$V_{\\text{jepit}} = \\varepsilon - I \\cdot r$$',
        },
        {
          label: 'Perhitungan Penurunan Tegangan',
          content:
            '$$V_{\\text{drop}} = 150\\text{ A} \\times 0,04\\ \\Omega = 6,0\\text{ Volt}$$',
        },
        {
          label: 'Perhitungan Tegangan Terminal',
          content:
            '$$V_{\\text{jepit}} = 12,8\\text{ V} - 6,0\\text{ V} = 6,8\\text{ Volt}$$',
        },
        {
          label: 'Kesimpulan',
          content:
            'Tegangan jepit aki merosot tajam menjadi 6,8 V akibat voltage drop 6,0 V pada resistansi dalam elektrolit aki. Hal inilah yang menyebabkan lampu dashboard mobil meredup sesaat saat starter dinyalakan. Pilihan tepat: A.',
        },
      ],
      finalAnswer: '6,8 V (voltage drop 6,0 V)',
    },
    fastMethod: {
      title: 'Metode Cepat (Hitung Cepat V = ε - Ir)',
      steps: [
        {
          label: 'Hitung Langsung',
          content:
            '$V_{\\text{drop}} = 150 \\times 0,04 = 6\\text{ V}$.\n$V_{\\text{jepit}} = 12,8 - 6 = 6,8\\text{ V}$.',
        },
      ],
      finalAnswer: '6,8 V (Opsi A)',
    },
    audioNarrationQuestion:
      'Soal nomor tiga belas. Aki mobil ber-ggl dua belas koma delapan Volt dan hambatan dalam nol koma nol empat Ohm mengalirkan arus starter seratus lima puluh Ampere. Berapakah tegangan jepit pada kutub aki saat starter menyala beserta alasannya?',
    audioNarrationExplanation:
      'Ketika arus besar seratus lima puluh Ampere ditarik oleh motor starter, terjadi penurunan tegangan di dalam hambatan dalam aki sebesar seratus lima puluh dikali nol koma nol empat, yaitu enam koma nol Volt. Akibatnya, tegangan jepit terminal yang keluar dari aki turun dari dua belas koma delapan menjadi enam koma delapan Volt. Inilah sebabnya lampu mobil tampak meredup sesaat.',
    motivationQuote:
      'Sangat mendalam! Fenomena voltage drop aki mobil adalah contoh nyata fisika bekerja di kehidupan sehari-hari.',
  },

  // ==========================================
  // SOAL 14: Jembatan Wheatstone Seimbang
  // ==========================================
  {
    id: 'pg-14',
    originalNumber: 14,
    type: 'multiple_choice',
    category: 'Listrik Dinamis',
    topic: 'Prinsip Keseimbangan Jembatan Wheatstone',
    storyContext:
      'Pada praktikum laboratorium Fisika untuk menentukan nilai hambatan resistor RX yang belum diketahui, digunakan rangkaian Jembatan Wheatstone seimbang. Rangkaian menggunakan resistor standar RA = 120 Ω, RB = 360 Ω, dan sebuah resistor variabel (dekade resistansi) RC. Ketika nilai RC diatur tepat pada 80 Ω, jarum galvanometer menunjukkan angka nol (IG = 0 A).',
    questionText:
      'Berdasarkan kondisi kesetimbangan Jembatan Wheatstone tersebut, nilai hambatan resistor RX yang diuji adalah...',
    stimulusType: 'none',
    options: [
      { id: 'pg-14-opt-a', text: '240 Ω', isCorrect: true },
      { id: 'pg-14-opt-b', text: '180 Ω', isCorrect: false },
      { id: 'pg-14-opt-c', text: '120 Ω', isCorrect: false },
      { id: 'pg-14-opt-d', text: '320 Ω', isCorrect: false },
      { id: 'pg-14-opt-e', text: '540 Ω', isCorrect: false },
    ],
    slowMethod: {
      title: 'Metode Lengkap (Prinsip Kesetimbangan Nol Galvanometer)',
      steps: [
        {
          label: 'Diketahui',
          content:
            'Hambatan lengan jembatan:\n$R_A = 120\\ \\Omega$, $R_B = 360\\ \\Omega$, $R_C = 80\\ \\Omega$.\nArus galvanometer: $I_G = 0\\text{ A}$ (jembatan seimbang sempurna).',
        },
        {
          label: 'Ditanyakan',
          content: 'Nilai hambatan yang dicari ($R_X$).',
        },
        {
          label: 'Syarat Jembatan Wheatstone Seimbang',
          content:
            'Ketika tidak ada arus yang melewati galvanometer ($I_G = 0$), beda potensial antarkedua simpul detektor bernilai nol. Perkalian silang lengan-lengan hambatan yang saling berhadapan bernilai sama:\n$$R_A \\cdot R_X = R_B \\cdot R_C$$',
        },
        {
          label: 'Perhitungan Nilai RX',
          content:
            '$$R_X = \\frac{R_B \\cdot R_C}{R_A} = \\frac{360\\ \\Omega \\times 80\\ \\Omega}{120\\ \\Omega}$$\nSederhanakan $\\frac{360}{120} = 3$:\n$$R_X = 3 \\times 80\\ \\Omega = 240\\ \\Omega$$',
        },
        {
          label: 'Kesimpulan',
          content:
            'Nilai hambatan resistor $R_X$ adalah $240\\ \\Omega$. Pilihan yang tepat adalah A.',
        },
      ],
      finalAnswer: '240 Ω',
    },
    fastMethod: {
      title: 'Metode Cepat (Rasio Perbandingan Lengan)',
      steps: [
        {
          label: 'Rasio Lengan',
          content:
            'Rasio $R_B : R_A = 360 : 120 = 3 : 1$.\nMaka $R_X$ harus bernilai 3 kali $R_C$:\n$$R_X = 3 \\times 80\\ \\Omega = 240\\ \\Omega$$',
        },
      ],
      finalAnswer: '240 Ω (Opsi A)',
    },
    audioNarrationQuestion:
      'Soal nomor empat belas. Pada jembatan Wheatstone seimbang, hambatan R A seratus dua puluh Ohm, R B tiga ratus enam puluh Ohm, dan resistor variabel R C bernilai delapan puluh Ohm saat jarum galvanometer nol. Berapakah nilai hambatan R X?',
    audioNarrationExplanation:
      'Pada jembatan Wheatstone yang seimbang, perkalian silang hambatan yang berhadapan adalah sama besar. Rasio R B terhadap R A adalah tiga ratus enam puluh berbanding seratus dua puluh, yaitu tiga kali lipat. Maka nilai R X adalah tiga kali lipat dari R C, yaitu tiga dikali delapan puluh Ohm sama dengan dua ratus empat puluh Ohm.',
    motivationQuote:
      'Luar biasa! Jembatan Wheatstone adalah teknik pengukuran hambatan paling presisi dalam sejarah metrologi kelistrikan.',
  },

  // ==========================================
  // SOAL 15: Gaya Coulomb & Transfer Muatan Konduktor
  // ==========================================
  {
    id: 'pg-15',
    originalNumber: 15,
    type: 'multiple_choice',
    category: 'Elektrostatika & Kapasitor',
    topic: 'Hukum Coulomb & Distribusi Muatan Bola Konduktor',
    storyContext:
      'Dua bola konduktor logam kecil identik berada di ruang hampa pada jarak pisah r. Mula-mula, bola pertama bermuatan q₁ = +10,0 μC dan bola kedua bermuatan q₂ = -2,0 μC, sehingga keduanya mengalami gaya elektrostatik tarik-menarik sebesar F. Kedua bola konduktor kemudian disentuhkan satu sama lain hingga terjadi kesetimbangan muatan, lalu dijauhkan kembali hingga jarak pisahnya menjadi 2r.',
    questionText:
      'Interaksi dan besar gaya elektrostatik yang bekerja antara kedua bola konduktor pada keadaan akhir dibandingkan dengan gaya mula-mula (F) adalah...',
    stimulusType: 'none',
    options: [
      { id: 'pg-15-opt-a', text: 'Tolak-menolak dengan besar (1/5) F', isCorrect: true },
      { id: 'pg-15-opt-b', text: 'Tarik-menarik dengan besar (4/5) F', isCorrect: false },
      { id: 'pg-15-opt-c', text: 'Tolak-menolak dengan besar (2/5) F', isCorrect: false },
      { id: 'pg-15-opt-d', text: 'Tarik-menarik dengan besar (1/4) F', isCorrect: false },
      { id: 'pg-15-opt-e', text: 'Tolak-menolak dengan besar (1/20) F', isCorrect: false },
    ],
    slowMethod: {
      title: 'Metode Lengkap (Hukum Kekekalan Muatan & Hukum Coulomb)',
      steps: [
        {
          label: 'Keadaan Mula-Mula',
          content:
            'Muatan awal: $q_1 = +10,0\\ \\mu\\text{C}$ dan $q_2 = -2,0\\ \\mu\\text{C}$. Jarak pisah: $r$.\nKarena berlawanan tanda, gaya bersifat tarik-menarik:\n$$F = k \\frac{|q_1 \\cdot q_2|}{r^2} = k \\frac{10 \\times 2}{r^2} = k \\frac{20}{r^2}$$',
        },
        {
          label: 'Proses Penyentuhan (Transfer Muatan)',
          content:
            'Karena kedua bola logam identik, muatan total akan terbagi dua secara merata saat disentuhkan:\n$$q_{\\text{total}} = q_1 + q_2 = +10,0\\ \\mu\\text{C} + (-2,0\\ \\mu\\text{C}) = +8,0\\ \\mu\\text{C}$$\nMuatan masing-masing bola setelah dipisahkan:\n$$q_1\' = q_2\' = \\frac{q_{\\text{total}}}{2} = \\frac{+8,0\\ \\mu\\text{C}}{2} = +4,0\\ \\mu\\text{C}$$',
        },
        {
          label: 'Keadaan Akhir pada Jarak 2r',
          content:
            'Kedua bola kini sama-sama bermuatan positif ($+4,0\\ \\mu\\text{C}$), sehingga gayanya bersifat **tolak-menolak**.\nJarak pisah baru: $r\' = 2r$.\n$$F\' = k \\frac{q_1\' \\cdot q_2\'}{(r\')^2} = k \\frac{4 \\times 4}{(2r)^2} = k \\frac{16}{4r^2} = k \\frac{4}{r^2}$$',
        },
        {
          label: 'Perbandingan Gaya F\' terhadap F',
          content:
            '$$\\frac{F\'}{F} = \\frac{k \\frac{4}{r^2}}{k \\frac{20}{r^2}} = \\frac{4}{20} = \\frac{1}{5} \\implies F\' = \\frac{1}{5} F$$',
        },
        {
          label: 'Kesimpulan',
          content:
            'Interaksi berubah menjadi tolak-menolak dengan besar (1/5) F. Pilihan yang tepat adalah A.',
        },
      ],
      finalAnswer: 'Tolak-menolak dengan besar (1/5) F',
    },
    fastMethod: {
      title: 'Metode Cepat (Perbandingan Produk Muatan / Jarak Kuadrat)',
      steps: [
        {
          label: 'Faktor Awal',
          content:
            'Awal: $|q_1 q_2| / r^2 = (10 \\times 2) / 1 = 20$.',
        },
        {
          label: 'Faktor Akhir',
          content:
            'Muatan baru: $(10 - 2)/2 = 4$. Akhir: $|q_1\' q_2\'| / (2)^2 = (4 \\times 4) / 4 = 16 / 4 = 4$.',
        },
        {
          label: 'Rasio',
          content:
            'Rasio $= \\frac{4}{20} = \\frac{1}{5}$. Muatan bertanda sama (keduanya +), jadi tolak-menolak.',
        },
      ],
      finalAnswer: 'Tolak-menolak (1/5) F (Opsi A)',
    },
    audioNarrationQuestion:
      'Soal nomor lima belas. Dua bola konduktor identik bermuatan plus sepuluh mikro Coulomb dan minus dua mikro Coulomb terpisah jarak r mengalami gaya tarik F. Jika kedua bola disentuhkan lalu dijauhkan menjadi dua r, bagaimanakah sifat dan besar gaya Coulomb sekarang?',
    audioNarrationExplanation:
      'Ketika kedua bola disentuhkan, muatan total plus delapan mikro Coulomb terbagi rata menjadi masing-masing plus empat mikro Coulomb. Karena kedua muatan kini positif sejenis, gayanya berubah menjadi tolak-menolak. Kuadrat muatan baru adalah enam belas, dibagi kuadrat jarak dua yang bernilai empat, menghasilkan empat. Dibandingkan perkalian awal sepuluh dikali dua yaitu dua puluh, rasionya adalah empat per dua puluh, atau seperlima F.',
    motivationQuote:
      'Hebat! Kamu telah menuntaskan seluruh 15 soal pertama dengan konsep Fisika yang sangat kokoh!',
  },
];
