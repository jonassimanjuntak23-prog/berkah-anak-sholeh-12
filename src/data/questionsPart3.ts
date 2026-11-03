import { QuestionData } from '../types/physics';

export const QUESTIONS_PART_3: QuestionData[] = [
  // ==========================================
  // ESAI 1: Rangkaian Listrik Majemuk Dua Loop (Gambar 10)
  // ==========================================
  {
    id: 'esai-1',
    originalNumber: 1,
    type: 'essay',
    category: 'Listrik Dinamis',
    topic: 'Analisis Komprehensif Sirkuit Dua Loop Hukum Kirchhoff',
    storyContext:
      'Perhatikan sirkuit tertutup majemuk dua loop pada Gambar 10. Data teknis komponen yang terpasang adalah:\n- Sumber ggl cabang kiri: ε₁ = 24 V dengan hambatan dalam r₁ = 1 Ω\n- Sumber ggl cabang kanan: ε₂ = 12 V dengan hambatan dalam r₂ = 1 Ω\n- Resistor cabang kiri: R₁ = 7 Ω\n- Resistor cabang tengah: R₂ = 3 Ω\n- Resistor cabang kanan: R₃ = 5 Ω',
    questionText:
      'Berdasarkan konfigurasi sirkuit pada Gambar 10, selesaikan instruksi berikut secara sistematis:\na. Tuliskan persamaan Hukum I Kirchhoff pada titik percabangan B.\nb. Susunlah persamaan Hukum II Kirchhoff untuk Loop I (sebelah kiri) dan Loop II (sebelah kanan).\nc. Hitunglah kuat arus listrik yang mengalir pada masing-masing cabang kawat (I₁, I₂, dan I₃) serta tentukan besar beda potensial antara titik simpul B dan E ($V_{BE}$).',
    stimulusType: 'circuit',
    stimulusTitle: 'Gambar 10: Rangkaian Listrik Majemuk Dua Loop dengan Hambatan Dalam Sumber',
    stimulusSvgType: 'gambar-10-esai-dua-loop',
    stimulusData: {
      E1: '24 V',
      r1: '1 Ω',
      E2: '12 V',
      r2: '1 Ω',
      R1: '7 Ω',
      R2: '3 Ω',
      R3: '5 Ω',
    },
    essayRubric: [
      {
        criteria: 'Hukum I Kirchhoff di Simpul B',
        maxPoints: 20,
        description: 'Menuliskan persamaan arus masuk sama dengan arus keluar di titik B secara tepat (I₁ + I₃ = I₂).',
      },
      {
        criteria: 'Persamaan Loop I dan Loop II',
        maxPoints: 30,
        description: 'Menyusun persamaan loop tertutup ∑ε + ∑IR = 0 dengan menyertakan hambatan dalam r₁ dan r₂ secara benar.',
      },
      {
        criteria: 'Perhitungan Kuat Arus Cabang',
        maxPoints: 35,
        description: 'Melakukan eliminasi/substitusi aljabar dengan benar untuk memperoleh I₁ = 2,00 A, I₂ = 2,67 A, dan I₃ = 0,67 A.',
      },
      {
        criteria: 'Perhitungan Beda Potensial V_BE',
        maxPoints: 15,
        description: 'Menghitung V_BE = I₂ · R₂ = 8,00 Volt dengan tepat.',
      },
    ],
    slowMethod: {
      title: 'Metode Lengkap (Analisis Sistematis Hukum I & II Kirchhoff)',
      steps: [
        {
          label: 'Bagian a: Hukum I Kirchhoff di Titik Simpul B',
          content:
            'Tinjau arus $I_1$ mengalir dari cabang kiri masuk ke simpul B, $I_3$ mengalir dari cabang kanan masuk ke simpul B, dan $I_2$ mengalir keluar meninggalkan simpul B menuju E melalui cabang tengah:\n$$\\sum I_{\\text{masuk}} = \\sum I_{\\text{keluar}}$$\n$$I_1 + I_3 = I_2 \\quad \\text{--- (Persamaan 1)}$$',
        },
        {
          label: 'Bagian b: Hukum II Kirchhoff Loop I (Kiri: A-B-E-F-A)',
          content:
            'Arah loop searah jarum jam:\n$$\\sum \\varepsilon + \\sum I (R + r) = 0$$\n$$-\\varepsilon_1 + I_1 (R_1 + r_1) + I_2 R_2 = 0$$\n$$-24 + I_1 (7 + 1) + 3 I_2 = 0$$\n$$8 I_1 + 3 I_2 = 24 \\quad \\text{--- (Persamaan 2)}$$',
        },
        {
          label: 'Bagian b: Hukum II Kirchhoff Loop II (Kanan: C-B-E-D-C)',
          content:
            'Arah loop berlawanan arah jarum jam:\n$$\\sum \\varepsilon + \\sum I (R + r) = 0$$\n$$-\\varepsilon_2 + I_3 (R_3 + r_2) + I_2 R_2 = 0$$\n$$-12 + I_3 (5 + 1) + 3 I_2 = 0$$\n$$6 I_3 + 3 I_2 = 12$$\nBagi kedua ruas dengan 3:\n$$2 I_3 + I_2 = 4 \\quad \\text{--- (Persamaan 3)}$$',
        },
        {
          label: 'Bagian c: Eliminasi dan Nilai Arus Cabang',
          content:
            'Dari Pers. 2: $I_1 = \\frac{24 - 3I_2}{8}$.\nDari Pers. 3: $I_3 = \\frac{4 - I_2}{2} = \\frac{16 - 4I_2}{8}$.\nSubstitusi ke Pers. 1:\n$$\\frac{24 - 3I_2}{8} + \\frac{16 - 4I_2}{8} = I_2$$\n$$\\frac{40 - 7I_2}{8} = I_2 \\implies 40 - 7I_2 = 8I_2$$\n$$15 I_2 = 40 \\implies I_2 = \\frac{40}{15} = \\frac{8}{3}\\text{ A} \\approx 2,67\\text{ A}$$\n\nMenghitung $I_1$:\n$$I_1 = \\frac{24 - 3(\\frac{8}{3})}{8} = \\frac{24 - 8}{8} = \\frac{16}{8} = 2,00\\text{ A}$$\n\nMenghitung $I_3$:\n$$I_3 = \\frac{4 - \\frac{8}{3}}{2} = \\frac{\\frac{4}{3}}{2} = \\frac{2}{3}\\text{ A} \\approx 0,67\\text{ A}$$',
        },
        {
          label: 'Bagian c: Menghitung Beda Potensial V_BE',
          content:
            'Tegangan antara titik simpul B dan E:\n$$V_{BE} = I_2 \\cdot R_2 = \\left(\\frac{8}{3}\\text{ A}\\right) \\times 3\\ \\Omega = 8,00\\text{ Volt}$$',
        },
      ],
      finalAnswer: 'I₁ = 2,00 A; I₂ = 2,67 A; I₃ = 0,67 A; V_BE = 8,00 V',
    },
    fastMethod: {
      title: 'Metode Cepat (Analisis Potensial Simpul V_B / Nodal Analysis)',
      steps: [
        {
          label: 'Tentukan Tegangan Simpul B Langsung',
          content:
            'Pilih titik E sebagai acuan ground ($V_E = 0$).\nHukum arus Kirchhoff di simpul B:\n$$\\frac{V_B - 24}{8} + \\frac{V_B}{3} + \\frac{V_B - 12}{6} = 0$$\nKalikan seluruh persamaan dengan KPK penyebut yaitu 24:\n$$3(V_B - 24) + 8V_B + 4(V_B - 12) = 0$$\n$$(3V_B - 72) + 8V_B + (4V_B - 48) = 0$$\n$$15V_B - 120 = 0 \\implies 15V_B = 120 \\implies V_B = 8,00\\text{ Volt}$$',
        },
        {
          label: 'Arus Cabang Langsung',
          content:
            '$$V_{BE} = 8,00\\text{ V}$$\n$$I_2 = \\frac{8}{3}\\text{ A} \\approx 2,67\\text{ A}$$\n$$I_1 = \\frac{24 - 8}{8} = 2,00\\text{ A}$$\n$$I_3 = \\frac{12 - 8}{6} = \\frac{4}{6} = \\frac{2}{3}\\text{ A} \\approx 0,67\\text{ A}$$',
        },
      ],
      finalAnswer: 'V_BE = 8,00 V; I₁ = 2,00 A; I₂ = 2,67 A; I₃ = 0,67 A',
    },
    audioNarrationQuestion:
      'Soal esai nomor satu. Perhatikan Gambar sepuluh rangkaian dua loop dengan ggl dua puluh empat Volt dan dua belas Volt. Susunlah persamaan Kirchhoff di simpul B dan pada kedua loop, lalu tentukan kuat arus di ketiga cabang serta beda potensial V B E.',
    audioNarrationExplanation:
      'Pada simpul B berlaku arus I satu ditambah I tiga sama dengan I dua. Melalui metode potensial simpul dengan menjadikan titik E sebagai ground berpotensial nol, tegangan simpul B langsung diperoleh sebesar delapan koma nol Volt. Maka beda potensial V B E adalah delapan Volt, arus I dua adalah delapan per tiga Ampere, I satu dua Ampere, dan I tiga dua per tiga Ampere.',
    motivationQuote:
      'Luar biasa! Analisis sirkuit majemuk dua loop adalah mahakarya pemecahan masalah dalam Listrik Dinamis.',
  },

  // ==========================================
  // ESAI 2: Penghematan Energi Listrik Lampu LED
  // ==========================================
  {
    id: 'esai-2',
    originalNumber: 2,
    type: 'essay',
    category: 'Listrik Dinamis',
    topic: 'Kalkulasi Penghematan Energi & Ekonomi Konversi Lampu LED',
    storyContext:
      'Sebuah asrama sekolah memiliki 12 titik lampu penerangan ruangan yang awalnya menggunakan lampu pijar konvensional berdaya 75 W pada masing-masing titik. Lampu-lampu tersebut menyala rata-rata selama 5 jam per hari. Pihak sekolah memutuskan melakukan program konservasi energi dengan mengganti seluruh 12 titik lampu tersebut menggunakan lampu LED hemat energi berdaya 9 W yang menghasilkan fluks cahaya setara. Tarif listrik PLN yang berlaku adalah Rp1.444,70 per kWh, dan durasi analisis dihitung untuk 1 bulan (30 hari).',
    questionText:
      'Berdasarkan data operasional tersebut, hitunglah secara lengkap dan sistematis:\na. Total energi listrik yang dikonsumsi oleh 12 lampu pijar lama selama 1 bulan (dalam satuan kWh).\nb. Total energi listrik yang dikonsumsi setelah seluruh lampu diganti dengan lampu LED selama 1 bulan (dalam satuan kWh).\nc. Selisih penghematan energi listrik yang berhasil dicapai selama 1 bulan (dalam satuan kWh).\nd. Jumlah penghematan biaya tagihan listrik yang diperoleh sekolah dalam jangka waktu 1 bulan (dalam satuan Rupiah).',
    stimulusType: 'none',
    essayRubric: [
      {
        criteria: 'Konsumsi Energi Lampu Pijar',
        maxPoints: 25,
        description: 'Menghitung konsumsi 12 lampu pijar 75 W selama 150 jam = 135,0 kWh dengan benar.',
      },
      {
        criteria: 'Konsumsi Energi Lampu LED',
        maxPoints: 25,
        description: 'Menghitung konsumsi 12 lampu LED 9 W selama 150 jam = 16,2 kWh dengan benar.',
      },
      {
        criteria: 'Selisih Penghematan Energi',
        maxPoints: 25,
        description: 'Menghitung penghematan energi 135,0 - 16,2 = 118,8 kWh dengan benar.',
      },
      {
        criteria: 'Penghematan Biaya Finansial',
        maxPoints: 25,
        description: 'Mengalikan 118,8 kWh dengan tarif Rp1.444,70 = Rp171.630,36 dengan benar.',
      },
    ],
    slowMethod: {
      title: 'Metode Lengkap (Perhitungan Konsumsi & Penghematan Finansial)',
      steps: [
        {
          label: 'Data Operasional',
          content:
            '- Jumlah lampu: $N = 12\\text{ titik}$\n- Durasi harian: $t = 5\\text{ jam/hari}$\n- Total jam sebulan (30 hari): $T = 5 \\times 30 = 150\\text{ jam}$\n- Tarif listrik: $\\text{Tarif} = \\text{Rp}1.444,70 / \\text{kWh}$',
        },
        {
          label: 'Bagian a: Energi Listrik Lampu Pijar (1 Bulan)',
          content:
            'Daya total lampu pijar:\n$$P_{\\text{pijar}} = 12 \\times 75\\text{ W} = 900\\text{ W} = 0,90\\text{ kW}$$\nEnergi listrik bulanan:\n$$E_{\\text{pijar}} = P_{\\text{pijar}} \\times T = 0,90\\text{ kW} \\times 150\\text{ jam} = 135,0\\text{ kWh}$$',
        },
        {
          label: 'Bagian b: Energi Listrik Lampu LED (1 Bulan)',
          content:
            'Daya total lampu LED:\n$$P_{\\text{LED}} = 12 \\times 9\\text{ W} = 108\\text{ W} = 0,108\\text{ kW}$$\nEnergi listrik bulanan:\n$$E_{\\text{LED}} = P_{\\text{LED}} \\times T = 0,108\\text{ kW} \\times 150\\text{ jam} = 16,2\\text{ kWh}$$',
        },
        {
          label: 'Bagian c: Selisih Penghematan Energi (kWh)',
          content:
            '$$\\Delta E = E_{\\text{pijar}} - E_{\\text{LED}} = 135,0\\text{ kWh} - 16,2\\text{ kWh} = 118,8\\text{ kWh}$$',
        },
        {
          label: 'Bagian d: Penghematan Biaya Tagihan Listrik (Rupiah)',
          content:
            '$$\\Delta \\text{Biaya} = \\Delta E \\times \\text{Tarif}$$\n$$\\Delta \\text{Biaya} = 118,8\\text{ kWh} \\times \\text{Rp}1.444,70 / \\text{kWh} = \\text{Rp}171.630,36$$',
        },
      ],
      finalAnswer: 'Energi Pijar: 135,0 kWh; Energi LED: 16,2 kWh; Hemat: 118,8 kWh; Hemat Biaya: Rp171.630,36',
    },
    fastMethod: {
      title: 'Metode Cepat (Penurunan Daya Langsung)',
      steps: [
        {
          label: 'Selisih Daya Langsung',
          content:
            'Penurunan daya per titik: $75 - 9 = 66\\text{ W}$.\nPenurunan total daya: $12 \\times 66 = 792\\text{ W} = 0,792\\text{ kW}$.\nPenghematan kWh sebulan: $0,792\\text{ kW} \\times 150\\text{ jam} = 118,8\\text{ kWh}$.\nPenghematan biaya: $118,8 \\times 1.444,70 = \\text{Rp}171.630,36$.',
        },
      ],
      finalAnswer: 'Hemat: 118,8 kWh dan Rp171.630,36',
    },
    audioNarrationQuestion:
      'Soal esai nomor dua. Dua belas lampu pijar tujuh puluh lima Watt menyala lima jam per hari diganti lampu LED sembilan Watt selama tiga puluh hari. Dengan tarif seribu empat ratus empat puluh empat koma tujuh puluh rupiah per kilowatt hour, hitunglah konsumsi masing-masing lampu, penghematan energi, dan penghematan biaya listrik.',
    audioNarrationExplanation:
      'Dua belas lampu pijar mengonsumsi seratus tiga puluh lima kilowatt hour dalam sebulan, sedangkan lampu LED hanya mengonsumsi enam belas koma dua kilowatt hour. Selisih penghematan energi mencapai seratus delapan belas koma delapan kilowatt hour. Penghematan biaya tagihan listrik yang dinikmati sekolah adalah seratus delapan belas koma delapan dikali tarif, yaitu sebesar seratus tujuh puluh satu ribu enam ratus tiga puluh koma tiga puluh enam rupiah.',
    motivationQuote:
      'Sangat aplikatif! Analisis tekno-ekonomi seperti ini membuktikan bahwa efisiensi energi berdampak langsung pada keuangan institusi.',
  },

  // ==========================================
  // ESAI 3: Titik Medan Listrik Nol & Potensial Listrik (Gambar 11)
  // ==========================================
  {
    id: 'esai-3',
    originalNumber: 3,
    type: 'essay',
    category: 'Elektrostatika & Kapasitor',
    topic: 'Penentuan Posisi Kuat Medan Nol & Potensial Skalar',
    storyContext:
      'Dua buah muatan titik diletakkan pada sumbu-x di ruang hampa seperti disajikan pada Gambar 11. Muatan q₁ = +25 μC ditempatkan pada titik asal x₁ = 0, sedangkan muatan q₂ = -16 μC ditempatkan pada posisi x₂ = 10 cm. Sebuah titik P berada pada sumbu-x di mana kuat medan listrik total yang dihasilkan oleh kedua muatan bernilai nol (E_total = 0). Diketahui k = 9 × 10⁹ N·m²/C².',
    questionText:
      'Berdasarkan konfigurasi muatan pada Gambar 11:\na. Jelaskan secara fisis mengapa titik P tidak mungkin berada di antara kedua muatan (0 < x < 10 cm) maupun di sebelah kiri muatan q₁ (x < 0).\nb. Tentukan koordinat posisi titik P pada sumbu-x tempat kuat medan listrik total bernilai nol.\nc. Hitunglah besar potensial listrik total di titik P tersebut.',
    stimulusType: 'diagram',
    stimulusTitle: 'Gambar 11: Konfigurasi Dua Muatan Titik q₁ dan q₂ pada Garis Hubung Sumbu-x',
    stimulusSvgType: 'gambar-11-esai-dua-muatan',
    stimulusData: {
      q1: '+25 μC',
      q2: '-16 μC',
      d: '10 cm',
    },
    essayRubric: [
      {
        criteria: 'Analisis Fisis Posisi Titik Nol',
        maxPoints: 30,
        description: 'Menjelaskan arah vektor medan listrik di antara kedua muatan yang searah (ke kanan) dan di kiri q₁ (|E₁| > |E₂| selalu), sehingga titik nol wajib di sebelah kanan q₂.',
      },
      {
        criteria: 'Penentuan Koordinat Titik P',
        maxPoints: 40,
        description: 'Menyusun persamaan kesetaraan medan E₁ = E₂ dan menyelesaikan aljabar hingga diperoleh r = 40 cm dari q₂ atau koordinat x_P = 50 cm.',
      },
      {
        criteria: 'Perhitungan Potensial Listrik di Titik P',
        maxPoints: 30,
        description: 'Menghitung potensial skalar V_P = k(q₁/r₁ + q₂/r₂) dengan benar dan memperhatikan tanda aljabar muatan sehingga diperoleh +90 kV (+9,0 × 10⁴ V).',
      },
    ],
    slowMethod: {
      title: 'Metode Lengkap (Analisis Vektor Medan & Potensial Skalar)',
      steps: [
        {
          label: 'Bagian a: Analisis Fisis Daerah Keberadaan Titik Nol',
          content:
            '1. **Di antara kedua muatan ($0 < x < 10\\text{ cm}$):** Vektor medan $\\vec{E}_1$ dari muatan positif $q_1$ mengarah menjauh ke kanan ($+x$), sedangkan medan $\\vec{E}_2$ dari muatan negatif $q_2$ mengarah mendekat ke kanan ($+x$). Karena kedua vektor searah ke kanan, mereka saling memperkuat dan medan total tidak pernah nol ($E_{\\text{total}} \\neq 0$).\n2. **Di sebelah kiri $q_1$ ($x < 0$):** Muatan $|q_1| = 25\\ \\mu\\text{C}$ lebih besar dari $|q_2| = 16\\ \\mu\\text{C}$ dan titik ini lebih dekat ke $q_1$ ($r_1 < r_2$). Karena $E \\propto \\frac{q}{r^2}$, maka $|E_1|$ selalu lebih besar dari $|E_2|$, sehingga mustahil saling meniadakan.\n3. **Kesimpulan:** Titik medan nol harus terletak di **sebelah kanan muatan $q_2$** ($x > 10\\text{ cm}$) di mana jarak ke muatan kecil lebih dekat untuk mengimbangi muatan besar yang lebih jauh.',
        },
        {
          label: 'Bagian b: Perhitungan Koordinat Titik P',
          content:
            'Misalkan jarak titik P dari muatan $q_2$ adalah $r$ (sehingga $r_2 = r$ dan $r_1 = d + r = 10 + r$).\nSyarat medan nol: $E_1 = E_2$.\n$$k \\frac{|q_1|}{(10 + r)^2} = k \\frac{|q_2|}{r^2}$$\n$$\\frac{25}{(10 + r)^2} = \\frac{16}{r^2}$$\nTarik akar kedua ruas:\n$$\\frac{5}{10 + r} = \\frac{4}{r}$$\n$$5r = 4(10 + r) = 40 + 4r \\implies r = 40\\text{ cm}$$\nMaka koordinat titik P pada sumbu-x adalah:\n$$x_P = x_2 + r = 10\\text{ cm} + 40\\text{ cm} = 50\\text{ cm}$$',
        },
        {
          label: 'Bagian c: Perhitungan Potensial Listrik di Titik P',
          content:
            'Potensial listrik adalah besaran skalar (tanda muatan dimasukkan langsung):\nJarak ke $q_1$: $r_1 = 50\\text{ cm} = 0,50\\text{ m}$.\nJarak ke $q_2$: $r_2 = 40\\text{ cm} = 0,40\\text{ m}$.\n$$V_P = k \\left( \\frac{q_1}{r_1} + \\frac{q_2}{r_2} \\right)$$\n$$V_P = 9 \\times 10^9 \\left( \\frac{+25 \\times 10^{-6}\\text{ C}}{0,50\\text{ m}} + \\frac{-16 \\times 10^{-6}\\text{ C}}{0,40\\text{ m}} \\right)$$\n$$V_P = 9 \\times 10^9 \\left( 50 \\times 10^{-6} - 40 \\times 10^{-6} \\right)$$\n$$V_P = 9 \\times 10^9 \\times (10 \\times 10^{-6}) = 90.000\\text{ Volt} = +90\\text{ kV}$$',
        },
      ],
      finalAnswer: 'Koordinat titik P: x = 50 cm; Potensial listrik V_P = +90 kV (90.000 V)',
    },
    fastMethod: {
      title: 'Metode Cepat (Formula Titik Nol & Potensial Ringkas)',
      steps: [
        {
          label: 'Posisi Cepat',
          content:
            '$$r = \\frac{d}{\\sqrt{\\frac{|q_1|}{|q_2|}} - 1} = \\frac{10}{\\sqrt{\\frac{25}{16}} - 1} = \\frac{10}{\\frac{5}{4} - 1} = \\frac{10}{0,25} = 40\\text{ cm}$$\nKoordinat: $x_P = 10 + 40 = 50\\text{ cm}$.',
        },
        {
          label: 'Potensial Cepat',
          content:
            '$$V = 9 \\times 10^9 \\left(\\frac{25\\mu}{0,5} - \\frac{16\\mu}{0,4}\\right) = 9 \\times 10^9 (50\\mu - 40\\mu) = +90\\text{ kV}.$$',
        },
      ],
      finalAnswer: 'x = 50 cm dan V = +90 kV',
    },
    audioNarrationQuestion:
      'Soal esai nomor tiga. Berdasarkan Gambar sebelas, muatan q satu plus dua puluh lima mikro Coulomb berada di titik nol dan muatan q dua minus enam belas mikro Coulomb berada di sepuluh sentimeter. Analisis mengapa medan nol berada di kanan q dua, tentukan koordinatnya, dan hitung potensial listrik di titik tersebut.',
    audioNarrationExplanation:
      'Titik medan nol tidak mungkin di tengah karena medan kedua muatan searah ke kanan, dan tidak mungkin di kiri karena muatan q satu lebih besar sekaligus lebih dekat. Titik medan nol berada di kanan muatan q dua pada jarak empat puluh sentimeter, atau koordinat sumbu-x lima puluh sentimeter. Potensial listrik di titik tersebut adalah hasil penjumlahan skalar potensial kedua muatan yang menghasilkan positif sembilan puluh kilovolt.',
    motivationQuote:
      'Luar biasa! Mampu membedakan sifat medan listrik sebagai vektor dan potensial listrik sebagai skalar adalah tanda kematangan pemahaman fisika.',
  },

  // ==========================================
  // ESAI 4: Analisis Komparatif Kapasitor Dielektrik Kasus A vs B (Gambar 12)
  // ==========================================
  {
    id: 'esai-4',
    originalNumber: 4,
    type: 'essay',
    category: 'Elektrostatika & Kapasitor',
    topic: 'Komparasi Kapasitor Berdielektrik: Baterai Terhubung vs Dilepas',
    storyContext:
      'Sebuah kapasitor keping sejajar dengan dielektrik udara memiliki kapasitas mula-mula C₀ = 50 μF dan dimuati penuh oleh baterai bertegangan V₀ = 30 V. Selanjutnya dilakukan dua skenario eksperimen yang berbeda seperti diilustrasikan pada Gambar 12:\n- **Kasus A:** Baterai tetap terhubung, kemudian ruang antarkeping disisipkan penuh bahan dielektrik dengan konstanta dielektrik κ = 3,0.\n- **Kasus B:** Baterai dilepaskan terlebih dahulu (kapasitor terisolasi), kemudian ke dalam ruang antarkeping disisipkan penuh bahan dielektrik yang identik (κ = 3,0).',
    questionText:
      'Berdasarkan prinsip elektrostatika pada Gambar 12, tentukan nilai-nilai besaran fisis berikut untuk masing-masing skenario (Kasus A dan Kasus B):\na. Nilai kapasitas akhir kapasitor ($C_A$ dan $C_B$).\nb. Beda potensial akhir antarkeping kapasitor ($V_A$ dan $V_B$).\nc. Jumlah muatan listrik akhir yang tersimpan ($Q_A$ dan $Q_B$).\nd. Energi potensial elektrostatik akhir yang tersimpan ($U_A$ dan $U_B$).',
    stimulusType: 'diagram',
    stimulusTitle: 'Gambar 12: Komparasi Skenario Penyisipan Dielektrik pada Kapasitor',
    stimulusSvgType: 'gambar-12-esai-kapasitor-dielektrik',
    stimulusData: {
      kappa: '3,0',
      V0: '30 V',
    },
    essayRubric: [
      {
        criteria: 'Kapasitas Akhir Kasus A & B',
        maxPoints: 20,
        description: 'Menghitung C_A = C_B = κ · C₀ = 150 μF dengan tepat.',
      },
      {
        criteria: 'Beda Potensial Akhir',
        maxPoints: 25,
        description: 'Menentukan V_A = 30 V (baterai terhubung) dan V_B = V₀/κ = 10 V (muatan terisolasi) dengan tepat.',
      },
      {
        criteria: 'Muatan Listrik Akhir',
        maxPoints: 25,
        description: 'Menghitung Q_A = 4.500 μC (naik 3x) dan Q_B = 1.500 μC (konstan) dengan benar.',
      },
      {
        criteria: 'Energi Potensial Akhir',
        maxPoints: 30,
        description: 'Menghitung U_A = 0,0675 Joule (naik 3x) dan U_B = 0,0075 Joule (turun 1/3x) dengan langkah matematis yang lengkap.',
      },
    ],
    slowMethod: {
      title: 'Metode Lengkap (Analisis Sistematis Kondisi Batas Dua Skenario)',
      steps: [
        {
          label: 'Kondisi Awal (Sebelum Disisipkan Dielektrik)',
          content:
            '- Kapasitas awal: $C_0 = 50\\ \\mu\\text{F}$\n- Beda potensial awal: $V_0 = 30\\text{ V}$\n- Muatan awal: $Q_0 = C_0 V_0 = 50\\ \\mu\\text{F} \\times 30\\text{ V} = 1.500\\ \\mu\\text{C} = 1,5 \\times 10^{-3}\\text{ C}$\n- Energi awal: $U_0 = \\frac{1}{2} C_0 V_0^2 = \\frac{1}{2} \\times (50 \\times 10^{-6}) \\times (30)^2 = 0,0225\\text{ Joule} = 22,5\\text{ mJ}$',
        },
        {
          label: 'Kasus A: Baterai Tetap Terhubung (V Konstan)',
          content:
            '1. **Kapasitas:** $C_A = \\kappa \\cdot C_0 = 3,0 \\times 50\\ \\mu\\text{F} = 150\\ \\mu\\text{F}$\n2. **Tegangan:** Karena terhubung terus ke baterai, tegangan tetap: $V_A = V_0 = 30\\text{ V}$\n3. **Muatan:** $Q_A = C_A \\cdot V_A = 150\\ \\mu\\text{F} \\times 30\\text{ V} = 4.500\\ \\mu\\text{C}$ (muatan bertambah 3 kali lipat)\n4. **Energi:** $U_A = \\frac{1}{2} C_A V_A^2 = \\frac{1}{2} \\times (150 \\times 10^{-6}\\text{ F}) \\times (30\\text{ V})^2 = 0,0675\\text{ Joule}$ (energi naik 3 kali lipat)',
        },
        {
          label: 'Kasus B: Baterai Dilepaskan (Muatan Q Konstan)',
          content:
            '1. **Kapasitas:** $C_B = \\kappa \\cdot C_0 = 3,0 \\times 50\\ \\mu\\text{F} = 150\\ \\mu\\text{F}$\n2. **Muatan:** Karena terisolasi, muatan tidak bisa berpindah: $Q_B = Q_0 = 1.500\\ \\mu\\text{C}$\n3. **Tegangan:** $V_B = \\frac{Q_B}{C_B} = \\frac{1.500\\ \\mu\\text{C}}{150\\ \\mu\\text{F}} = 10\\text{ V}$ (tegangan turun menjadi sepertiga)\n4. **Energi:** $U_B = \\frac{Q_B^2}{2 C_B} = \\frac{(1,5 \\times 10^{-3}\\text{ C})^2}{2 \\times (150 \\times 10^{-6}\\text{ F})} = \\frac{2,25 \\times 10^{-6}}{300 \\times 10^{-6}} = 0,0075\\text{ Joule}$ (energi turun menjadi sepertiga)',
        },
      ],
      finalAnswer: 'Kasus A: C=150 μF, V=30 V, Q=4.500 μC, U=0,0675 J | Kasus B: C=150 μF, V=10 V, Q=1.500 μC, U=0,0075 J',
    },
    fastMethod: {
      title: 'Metode Cepat (Matriks Pengali κ)',
      steps: [
        {
          label: 'Kasus A (V Tetap)',
          content:
            '$C \\to \\times 3 = 150\\ \\mu\\text{F}$; $V = 30\\text{ V}$; $Q \\to \\times 3 = 4.500\\ \\mu\\text{C}$; $U \\to \\times 3 = 0,0675\\text{ J}$.',
        },
        {
          label: 'Kasus B (Q Tetap)',
          content:
            '$C \\to \\times 3 = 150\\ \\mu\\text{F}$; $Q = 1.500\\ \\mu\\text{C}$; $V \\to /3 = 10\\text{ V}$; $U \\to /3 = 0,0075\\text{ J}$.',
        },
      ],
      finalAnswer: 'Terselesaikan dalam 30 detik melalui faktor kelipatan κ',
    },
    audioNarrationQuestion:
      'Soal esai nomor empat. Kapasitor lima puluh mikro Farad dimuati baterai tiga puluh Volt. Kemudian disisipkan dielektrik berkonstanta tiga dalam dua kasus: Kasus A baterai tetap terhubung, dan Kasus B baterai dilepas. Hitunglah kapasitas, tegangan, muatan, dan energi tersimpan untuk kedua kasus.',
    audioNarrationExplanation:
      'Pada kedua kasus, kapasitas kapasitor meningkat tiga kali lipat menjadi seratus lima puluh mikro Farad. Pada Kasus A, tegangan tetap tiga puluh Volt sehingga muatan melonjak menjadi empat ribu lima ratus mikro Coulomb dan energi naik menjadi nol koma nol enam ratus tujuh puluh lima Joule. Pada Kasus B, muatan terisolasi konstan seribu lima ratus mikro Coulomb sehingga tegangan turun menjadi sepuluh Volt dan energi berkurang menjadi nol koma nol nol tujuh puluh lima Joule.',
    motivationQuote:
      'Hebat! Perbandingan dua kasus kapasitor ini adalah pertanyaan klasik esai dengan bobot nilai tertinggi dalam evaluasi fisika.',
  },

  // ==========================================
  // ESAI 5: Diagram P-V Proses Termodinamika Isobarik (Gambar 13)
  // ==========================================
  {
    id: 'esai-5',
    originalNumber: 5,
    type: 'essay',
    category: 'Termodinamika & Teori Kinetik Gas',
    topic: 'Usaha, Kalor, dan Energi Dalam pada Proses Isobarik',
    storyContext:
      'Sebanyak n = 3 mol gas ideal monoatomik mengalami proses pemuaian (ekspansi) secara isobarik pada tekanan konstan P₀ = 2,5 × 10⁵ Pa seperti ditunjukkan pada diagram P-V Gambar 13. Mula-mula gas berada pada keadaan 1 dengan volume V₁ = 5,0 Liter dan temperatur T₁ = 300 K. Gas kemudian menyerap kalor sehingga memuai mencapai volume akhir V₂ = 15,0 Liter pada keadaan 2. (Gunakan 1 Liter = 10⁻³ m³).',
    questionText:
      'Berdasarkan diagram P-V pada Gambar 13 dan Hukum I Termodinamika, hitunglah secara bertahap:\na. Temperatur akhir gas pada keadaan 2 ($T_2$).\nb. Usaha luar yang dilakukan oleh gas selama proses pemuaian ($W$).\nc. Perubahan energi dalam gas ideal monoatomik selama proses pemanasan ($\\Delta U$).\nd. Jumlah kalor total yang diserap oleh gas dari lingkungan ($Q$).',
    stimulusType: 'diagram',
    stimulusTitle: 'Gambar 13: Diagram P-V Pemuaian Gas Ideal Monoatomik secara Isobarik',
    stimulusSvgType: 'gambar-13-esai-diagram-pv',
    stimulusData: {
      P0: '2,5',
      V1: '5,0',
      V2: '15,0',
      T1: '300 K',
      T2: '900 K',
    },
    essayRubric: [
      {
        criteria: 'Temperatur Akhir T₂',
        maxPoints: 20,
        description: 'Menerapkan Hukum Charles V₁/T₁ = V₂/T₂ hingga diperoleh T₂ = 900 K dengan tepat.',
      },
      {
        criteria: 'Usaha Luar W',
        maxPoints: 25,
        description: 'Menghitung W = P₀ · ΔV = 2,5 × 10⁵ Pa · 10 × 10⁻³ m³ = 2.500 Joule dengan konversi satuan yang benar.',
      },
      {
        criteria: 'Perubahan Energi Dalam ΔU',
        maxPoints: 25,
        description: 'Menghitung ΔU = (3/2) P₀ ΔV = 3.750 Joule untuk gas monoatomik dengan benar.',
      },
      {
        criteria: 'Kalor Total Q (Hukum I Termodinamika)',
        maxPoints: 30,
        description: 'Menghitung Q = W + ΔU = 2.500 + 3.750 = 6.250 Joule (atau via Q = (5/2) P₀ ΔV) dengan benar.',
      },
    ],
    slowMethod: {
      title: 'Metode Lengkap (Hukum Charles & Hukum I Termodinamika)',
      steps: [
        {
          label: 'Data Diketahui',
          content:
            '- Tekanan konstan: $P_0 = 2,5 \\times 10^5\\text{ Pa}$\n- Volume awal: $V_1 = 5,0\\text{ L} = 5,0 \\times 10^{-3}\\text{ m}^3$\n- Suhu awal: $T_1 = 300\\text{ K}$\n- Volume akhir: $V_2 = 15,0\\text{ L} = 15,0 \\times 10^{-3}\\text{ m}^3$\n- Perubahan volume: $\\Delta V = V_2 - V_1 = (15,0 - 5,0) \\times 10^{-3} = 10,0 \\times 10^{-3}\\text{ m}^3$',
        },
        {
          label: 'Bagian a: Menghitung Temperatur Akhir (T₂)',
          content:
            'Pada proses isobarik berlaku Hukum Charles:\n$$\\frac{V_1}{T_1} = \\frac{V_2}{T_2}$$\n$$T_2 = T_1 \\left(\\frac{V_2}{V_1}\\right) = 300\\text{ K} \\times \\left(\\frac{15,0\\text{ L}}{5,0\\text{ L}}\\right) = 300 \\times 3 = 900\\text{ Kelvin}$$',
        },
        {
          label: 'Bagian b: Menghitung Usaha Luar Gas (W)',
          content:
            'Usaha pada proses isobarik adalah luasan di bawah grafik P-V:\n$$W = P_0 \\cdot \\Delta V = (2,5 \\times 10^5\\text{ N/m}^2) \\times (10,0 \\times 10^{-3}\\text{ m}^3)$$\n$$W = 2.500\\text{ Joule}$$',
        },
        {
          label: 'Bagian c: Menghitung Perubahan Energi Dalam (ΔU)',
          content:
            'Untuk gas ideal monoatomik (derajat kebebasan $f = 3$):\n$$\\Delta U = \\frac{3}{2} n R \\Delta T = \\frac{3}{2} P_0 \\Delta V$$\n$$\\Delta U = \\frac{3}{2} \\times 2.500\\text{ Joule} = 3.750\\text{ Joule}$$',
        },
        {
          label: 'Bagian d: Menghitung Kalor yang Diserap (Q)',
          content:
            'Berdasarkan Hukum I Termodinamika ($Q = W + \\Delta U$):\n$$Q = 2.500\\text{ J} + 3.750\\text{ J} = 6.250\\text{ Joule}$$\n(Atau secara langsung menggunakan kapasitas kalor molar isobarik $C_p = \\frac{5}{2} R$ sehingga $Q = \\frac{5}{2} P_0 \\Delta V = \\frac{5}{2} \\times 2.500 = 6.250\\text{ Joule}$).',
        },
      ],
      finalAnswer: 'T₂ = 900 K; W = 2.500 J; ΔU = 3.750 J; Q = 6.250 J',
    },
    fastMethod: {
      title: 'Metode Cepat (Rasio Termodinamika Isobarik Monoatomik 2 : 3 : 5)',
      steps: [
        {
          label: 'Suhu Cepat',
          content:
            'Volume naik 3 kali ($5 \\to 15\\text{ L}$), maka suhu $T$ naik 3 kali: $T_2 = 300 \\times 3 = 900\\text{ K}$.',
        },
        {
          label: 'Rasio Emas Isobarik Monoatomik',
          content:
            'Pada gas monoatomik isobarik selalu berlaku perbandingan tetap:\n$$W : \\Delta U : Q = 2 : 3 : 5$$\n$$W = P \\Delta V = 2,5 \\times 10^5 \\times 0,01 = 2.500\\text{ J}$$\nMaka otomatis:\n$$\\Delta U = \\frac{3}{2} W = \\frac{3}{2} \\times 2.500 = 3.750\\text{ J}$$\n$$Q = \\frac{5}{2} W = \\frac{5}{2} \\times 2.500 = 6.250\\text{ J}$$',
        },
      ],
      finalAnswer: 'T₂ = 900 K; W = 2.500 J; ΔU = 3.750 J; Q = 6.250 J (Opsi Cepat)',
    },
    audioNarrationQuestion:
      'Soal esai nomor lima. Tiga mol gas monoatomik berekspansi isobarik pada tekanan dua koma lima kali sepuluh pangkat lima Pascal dari volume lima Liter dan suhu tiga ratus Kelvin menjadi lima belas Liter. Tentukan suhu akhir gas, usaha luar yang dilakukan, perubahan energi dalam, dan kalor total yang diserap.',
    audioNarrationExplanation:
      'Volume memuai tiga kali lipat sehingga menurut Hukum Charles suhu mutlak naik menjadi sembilan ratus Kelvin. Usaha luar yang dilakukan adalah tekanan dikali perubahan volume sepuluh liter, menghasilkan dua ribu lima ratus Joule. Menggunakan rasio emas gas monoatomik isobarik dua banding tiga banding lima, perubahan energi dalam adalah tiga ribu tujuh ratus lima puluh Joule dan kalor total yang diserap adalah enam ribu dua ratus lima puluh Joule.',
    motivationQuote:
      'Alhamdulillah! Seluruh 35 soal pilihan ganda dan esai telah berhasil diselesaikan dengan sempurna!',
  },
];
