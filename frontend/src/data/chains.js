// Vocal processing chain preset matrix
// Structure: Genre × VocalType × Mood → complete signal chain

// ─── EQ Presets ───
const EQ_PRESETS = {
  female_pop_bright: {
    label: "Female Pop - Bright & Clear",
    bands: [
      { type: "HPF", freq: 120, gain: 0, q: 0.7 },
      { type: "Bell", freq: 250, gain: -3, q: 1.5, note: "탁한 대역 제거" },
      { type: "Bell", freq: 3500, gain: 3, q: 1.2, note: "Presence 강조" },
      { type: "Bell", freq: 6000, gain: 1.5, q: 1.0, note: "명료도" },
      { type: "HShelf", freq: 12000, gain: 2.5, q: 0.7, note: "Air 추가" },
    ],
  },
  female_pop_warm: {
    label: "Female Pop - Warm & Smooth",
    bands: [
      { type: "HPF", freq: 100, gain: 0, q: 0.7 },
      { type: "Bell", freq: 200, gain: 1.5, q: 1.0, note: "Warmth 강조" },
      { type: "Bell", freq: 400, gain: -2, q: 1.5, note: "Mud 제거" },
      { type: "Bell", freq: 3000, gain: 1.5, q: 1.5, note: "부드러운 Presence" },
      { type: "HShelf", freq: 10000, gain: 1, q: 0.7, note: "약간의 Air" },
    ],
  },
  female_rnb: {
    label: "Female R&B - Silky & Rich",
    bands: [
      { type: "HPF", freq: 90, gain: 0, q: 0.7 },
      { type: "Bell", freq: 180, gain: 2, q: 1.0, note: "저음 풍성함" },
      { type: "Bell", freq: 350, gain: -2.5, q: 1.5, note: "Mud 제거" },
      { type: "Bell", freq: 2500, gain: 2, q: 1.2, note: "부드러운 Presence" },
      { type: "HShelf", freq: 8000, gain: 1.5, q: 0.7, note: "Silky top" },
    ],
  },
  male_pop_bright: {
    label: "Male Pop - Bright & Forward",
    bands: [
      { type: "HPF", freq: 80, gain: 0, q: 0.7 },
      { type: "Bell", freq: 200, gain: -2, q: 1.5, note: "Boom 제거" },
      { type: "Bell", freq: 2500, gain: 3, q: 1.2, note: "Presence 강조" },
      { type: "Bell", freq: 5000, gain: 2, q: 1.0, note: "명료도" },
      { type: "HShelf", freq: 12000, gain: 2, q: 0.7, note: "Air" },
    ],
  },
  male_pop_warm: {
    label: "Male Pop - Warm & Full",
    bands: [
      { type: "HPF", freq: 70, gain: 0, q: 0.7 },
      { type: "Bell", freq: 150, gain: 1.5, q: 1.2, note: "Chest 강조" },
      { type: "Bell", freq: 300, gain: -2, q: 1.5, note: "Mud 제거" },
      { type: "Bell", freq: 3000, gain: 1.5, q: 1.5, note: "부드러운 Presence" },
      { type: "HShelf", freq: 10000, gain: 1, q: 0.7, note: "약간의 Air" },
    ],
  },
  male_rnb: {
    label: "Male R&B - Deep & Smooth",
    bands: [
      { type: "HPF", freq: 60, gain: 0, q: 0.7 },
      { type: "Bell", freq: 150, gain: 2, q: 1.0, note: "깊은 저음" },
      { type: "Bell", freq: 400, gain: -3, q: 1.5, note: "Mud 제거" },
      { type: "Bell", freq: 2000, gain: 2, q: 1.2, note: "부드러운 중역" },
      { type: "HShelf", freq: 8000, gain: 1, q: 0.7, note: "Silky" },
    ],
  },
  male_rock: {
    label: "Male Rock - Aggressive & Gritty",
    bands: [
      { type: "HPF", freq: 100, gain: 0, q: 0.7 },
      { type: "Bell", freq: 250, gain: -2, q: 1.5, note: "Mud 제거" },
      { type: "Bell", freq: 1500, gain: 2, q: 1.0, note: "거친 중역" },
      { type: "Bell", freq: 4000, gain: 3, q: 1.2, note: "날카로운 Presence" },
      { type: "HShelf", freq: 10000, gain: 1.5, q: 0.7, note: "밝은 Air" },
    ],
  },
  female_rock: {
    label: "Female Rock - Powerful & Cutting",
    bands: [
      { type: "HPF", freq: 110, gain: 0, q: 0.7 },
      { type: "Bell", freq: 300, gain: -2.5, q: 1.5, note: "Mud 제거" },
      { type: "Bell", freq: 2000, gain: 2, q: 1.0, note: "중역 파워" },
      { type: "Bell", freq: 5000, gain: 3, q: 1.2, note: "날카로운 Presence" },
      { type: "HShelf", freq: 12000, gain: 2, q: 0.7, note: "밝은 Air" },
    ],
  },
  hiphop_male: {
    label: "Male Hip-Hop - Punchy & Present",
    bands: [
      { type: "HPF", freq: 80, gain: 0, q: 0.7 },
      { type: "Bell", freq: 200, gain: -2, q: 1.5, note: "Boom 제거" },
      { type: "Bell", freq: 800, gain: -1, q: 1.0, note: "Box 제거" },
      { type: "Bell", freq: 3500, gain: 3.5, q: 1.2, note: "강한 Presence" },
      { type: "HShelf", freq: 10000, gain: 2, q: 0.7, note: "Air" },
    ],
  },
  hiphop_female: {
    label: "Female Hip-Hop - Sharp & Airy",
    bands: [
      { type: "HPF", freq: 110, gain: 0, q: 0.7 },
      { type: "Bell", freq: 300, gain: -2, q: 1.5, note: "Mud 제거" },
      { type: "Bell", freq: 4000, gain: 3, q: 1.2, note: "Sharp Presence" },
      { type: "Bell", freq: 7000, gain: 1.5, q: 1.0, note: "밝은 대역" },
      { type: "HShelf", freq: 14000, gain: 2.5, q: 0.7, note: "Air 강조" },
    ],
  },
  ballad: {
    label: "Ballad - Emotional & Intimate",
    bands: [
      { type: "HPF", freq: 80, gain: 0, q: 0.7 },
      { type: "Bell", freq: 200, gain: 1, q: 1.0, note: "따뜻한 저음" },
      { type: "Bell", freq: 400, gain: -2, q: 1.5, note: "Mud 제거" },
      { type: "Bell", freq: 2500, gain: 2, q: 1.5, note: "감성적 Presence" },
      { type: "HShelf", freq: 10000, gain: 1.5, q: 0.7, note: "공기감" },
    ],
  },
  edm: {
    label: "EDM/Electronic - Bright & Cutting",
    bands: [
      { type: "HPF", freq: 130, gain: 0, q: 0.7 },
      { type: "Bell", freq: 300, gain: -3, q: 1.5, note: "저음 정리" },
      { type: "Bell", freq: 2000, gain: -1, q: 1.0, note: "Harsh 제거" },
      { type: "Bell", freq: 4500, gain: 3.5, q: 1.2, note: "밝은 Presence" },
      { type: "HShelf", freq: 14000, gain: 3, q: 0.7, note: "초고역 Air" },
    ],
  },
};

// ─── Compressor Presets ───
const COMP_PRESETS = {
  gentle: {
    label: "Gentle (발라드/팝)",
    ratio: "2:1", threshold: "-18dB", attack: "15ms", release: "100ms",
    knee: "Soft", makeupGain: "2-3dB",
    note: "자연스러운 레벨 관리",
  },
  medium: {
    label: "Medium (팝/R&B)",
    ratio: "3:1", threshold: "-15dB", attack: "10ms", release: "80ms",
    knee: "Medium", makeupGain: "3-4dB",
    note: "적당한 컴프레션으로 안정감",
  },
  aggressive: {
    label: "Aggressive (록/힙합)",
    ratio: "4:1", threshold: "-12dB", attack: "5ms", release: "60ms",
    knee: "Hard", makeupGain: "4-6dB",
    note: "강한 다이나믹 컨트롤",
  },
  parallel: {
    label: "Parallel Compression",
    ratio: "8:1", threshold: "-20dB", attack: "1ms", release: "50ms",
    knee: "Hard", makeupGain: "6-8dB", mix: "30-40%",
    note: "원본과 섞어서 펀치감 추가",
  },
};

// ─── De-Esser Presets ───
const DEESSER_PRESETS = {
  female: { freq: "6-8kHz", threshold: "-20dB", range: "-6dB", note: "여성 치찰음 주파수 높음" },
  male: { freq: "4-6kHz", threshold: "-18dB", range: "-6dB", note: "남성 치찰음 주파수 낮음" },
};

// ─── Delay Presets (EchoBoy) ───
const DELAY_PRESETS = {
  studio_tape: {
    label: "Studio Tape",
    plugin: "EchoBoy (Soundtoys)",
    style: "Studio Tape",
    time: "1/4 note (sync)", feedback: "20%", mix: "15-20%",
    saturation: "Low", highcut: "6kHz",
    note: "깔끔한 테이프 딜레이, 팝/발라드에 적합",
  },
  memory_man: {
    label: "Memory Man (Analog)",
    plugin: "EchoBoy (Soundtoys)",
    style: "EchoPlex",
    time: "1/4 Dotted", feedback: "25%", mix: "15%",
    saturation: "Medium", highcut: "4kHz",
    note: "따뜻한 아날로그 딜레이, R&B/Soul에 적합",
  },
  slapback: {
    label: "Slapback",
    plugin: "EchoBoy (Soundtoys)",
    style: "Studio Tape",
    time: "80-120ms (free)", feedback: "0-5%", mix: "20-25%",
    saturation: "None", highcut: "8kHz",
    note: "짧은 슬랩백, 팝/록 보컬에 깊이 추가",
  },
  space_echo: {
    label: "Space Echo (Dub)",
    plugin: "EchoBoy (Soundtoys)",
    style: "Space Echo",
    time: "1/4 Dotted", feedback: "35%", mix: "20%",
    saturation: "High", highcut: "3kHz",
    note: "빈티지 스페이스 에코, 레게/더빙에 적합",
  },
  digital_clean: {
    label: "Digital Clean",
    plugin: "EchoBoy (Soundtoys)",
    style: "Digital",
    time: "1/8 note", feedback: "15%", mix: "12%",
    saturation: "None", highcut: "10kHz",
    note: "정확한 디지털 딜레이, EDM에 적합",
  },
  dm2_dark: {
    label: "DM-2 Dark",
    plugin: "EchoBoy (Soundtoys)",
    style: "DM-2",
    time: "1/4 note", feedback: "30%", mix: "18%",
    saturation: "Medium", highcut: "3kHz",
    note: "어둡고 따뜻한 딜레이, 인디/얼터너티브에 적합",
  },
  throw_delay: {
    label: "Throw Delay (자동화용)",
    plugin: "EchoBoy (Soundtoys)",
    style: "Studio Tape",
    time: "1/4 note", feedback: "25%", mix: "40-50%",
    saturation: "Low", highcut: "5kHz",
    note: "프레이즈 끝에 자동화로 딜레이 Throw",
  },
};

// ─── Reverb Presets (다양한 회사) ───
const REVERB_PRESETS = {
  valhalla_vintage_plate: {
    label: "Vintage Plate",
    plugin: "Valhalla VintageVerb",
    type: "Plate", decay: "1.5s", predelay: "20ms", mix: "15-20%",
    damping: "Medium", modulation: "Low",
    note: "클래식 플레이트 리버브, 팝 보컬의 기본",
  },
  valhalla_room: {
    label: "Natural Room",
    plugin: "Valhalla Room",
    type: "Room", decay: "0.8s", predelay: "10ms", mix: "10-15%",
    damping: "Low", modulation: "None",
    note: "자연스러운 룸 느낌, 어쿠스틱/발라드",
  },
  valhalla_shimmer: {
    label: "Shimmer Reverb",
    plugin: "Valhalla Shimmer",
    type: "Shimmer", decay: "3s", predelay: "30ms", mix: "10-15%",
    damping: "Low", modulation: "High",
    note: "옥타브 피치 시프트 리버브, 드라마틱한 효과",
  },
  fabfilter_pro_r: {
    label: "Pro-R Vocal Plate",
    plugin: "FabFilter Pro-R 2",
    type: "Plate", decay: "1.2s", predelay: "15ms", mix: "15%",
    damping: "Medium-High", modulation: "Low",
    note: "주파수별 디케이 조절, 정밀한 리버브",
  },
  soundtoys_little_plate: {
    label: "Little Plate",
    plugin: "Soundtoys Little Plate",
    type: "Plate", decay: "2s", predelay: "0ms", mix: "15-20%",
    damping: "Medium", modulation: "Medium",
    note: "EMT 140 에뮬레이션, 빈티지 플레이트",
  },
  lexicon_hall: {
    label: "Lexicon Hall",
    plugin: "Lexicon PCM Native Reverb",
    type: "Hall", decay: "2.5s", predelay: "30ms", mix: "12-15%",
    damping: "Medium", modulation: "Low",
    note: "클래식 Lexicon 홀, 대형 공간감",
  },
  waves_h_reverb: {
    label: "H-Reverb Ambient",
    plugin: "Waves H-Reverb",
    type: "Hall", decay: "2s", predelay: "25ms", mix: "15%",
    damping: "Medium", modulation: "Medium",
    note: "다용도 알고리즘 리버브",
  },
  uad_capitol: {
    label: "Capitol Chambers",
    plugin: "UAD Capitol Chambers",
    type: "Chamber", decay: "1.8s", predelay: "15ms", mix: "15-20%",
    damping: "Low", modulation: "None",
    note: "Capitol Studios 챔버 에뮬레이션",
  },
  rc20_lofi: {
    label: "Lo-Fi Reverb",
    plugin: "RC-20 Retro Color",
    type: "Space", decay: "1.5s", predelay: "0ms", mix: "20-25%",
    damping: "High", modulation: "Medium",
    note: "로파이/빈티지 공간감, 인디/힙합",
  },
  slate_plates: {
    label: "VerbSuite Plate",
    plugin: "Slate VerbSuite Classics",
    type: "Plate", decay: "1.5s", predelay: "20ms", mix: "15%",
    damping: "Medium", modulation: "Low",
    note: "하드웨어 플레이트 에뮬레이션",
  },
  native_instruments_raum: {
    label: "Raum Grind",
    plugin: "Native Instruments Raum",
    type: "Grind", decay: "2s", predelay: "20ms", mix: "12%",
    damping: "Medium", modulation: "Medium",
    note: "독특한 텍스처 리버브, 실험적",
  },
  arturia_rev_plate: {
    label: "Rev PLATE-140",
    plugin: "Arturia Rev PLATE-140",
    type: "Plate", decay: "1.8s", predelay: "10ms", mix: "15%",
    damping: "Medium", modulation: "Low",
    note: "EMT 140 모델링, 클래식 플레이트",
  },
};

// ─── Saturation / Color Presets ───
const SATURATION_PRESETS = {
  subtle_warmth: {
    label: "Subtle Warmth",
    plugin: "Soundtoys Decapitator / Saturn 2",
    drive: "Low (10-20%)", mix: "50-70%", tone: "Warm",
    note: "살짝 따뜻한 색감 추가",
  },
  tape_saturation: {
    label: "Tape Saturation",
    plugin: "Waves J37 / UAD Studer A800",
    drive: "Medium", mix: "100%", tone: "Warm",
    note: "테이프 새츄레이션, 빈티지 따뜻함",
  },
  aggressive_dist: {
    label: "Aggressive Distortion",
    plugin: "Soundtoys Decapitator",
    drive: "High (50-70%)", mix: "30-40%", tone: "Punchy",
    note: "거친 디스토션, 록/인디 보컬",
  },
};

// ─── Chain Generator ───
const CHAIN_MATRIX = {
  // [genre][vocalType][mood] → chain config
  pop: {
    female: {
      bright: {
        eq: "female_pop_bright",
        comp: "medium",
        deesser: "female",
        delay: "studio_tape",
        reverb: "valhalla_vintage_plate",
        saturation: null,
        extras: [],
      },
      warm: {
        eq: "female_pop_warm",
        comp: "gentle",
        deesser: "female",
        delay: "memory_man",
        reverb: "soundtoys_little_plate",
        saturation: "subtle_warmth",
        extras: [],
      },
      dark: {
        eq: "female_pop_warm",
        comp: "medium",
        deesser: "female",
        delay: "dm2_dark",
        reverb: "valhalla_room",
        saturation: "tape_saturation",
        extras: [],
      },
    },
    male: {
      bright: {
        eq: "male_pop_bright",
        comp: "medium",
        deesser: "male",
        delay: "studio_tape",
        reverb: "fabfilter_pro_r",
        saturation: null,
        extras: [],
      },
      warm: {
        eq: "male_pop_warm",
        comp: "gentle",
        deesser: "male",
        delay: "memory_man",
        reverb: "valhalla_vintage_plate",
        saturation: "subtle_warmth",
        extras: [],
      },
      dark: {
        eq: "male_pop_warm",
        comp: "medium",
        deesser: "male",
        delay: "dm2_dark",
        reverb: "uad_capitol",
        saturation: "tape_saturation",
        extras: [],
      },
    },
  },
  rnb: {
    female: {
      bright: { eq: "female_rnb", comp: "medium", deesser: "female", delay: "studio_tape", reverb: "fabfilter_pro_r", saturation: null, extras: [] },
      warm: { eq: "female_rnb", comp: "gentle", deesser: "female", delay: "memory_man", reverb: "soundtoys_little_plate", saturation: "subtle_warmth", extras: [] },
      dark: { eq: "female_rnb", comp: "medium", deesser: "female", delay: "space_echo", reverb: "lexicon_hall", saturation: "tape_saturation", extras: [] },
    },
    male: {
      bright: { eq: "male_rnb", comp: "medium", deesser: "male", delay: "studio_tape", reverb: "valhalla_vintage_plate", saturation: null, extras: [] },
      warm: { eq: "male_rnb", comp: "gentle", deesser: "male", delay: "memory_man", reverb: "uad_capitol", saturation: "subtle_warmth", extras: [] },
      dark: { eq: "male_rnb", comp: "medium", deesser: "male", delay: "dm2_dark", reverb: "rc20_lofi", saturation: "tape_saturation", extras: [] },
    },
  },
  hiphop: {
    female: {
      bright: { eq: "hiphop_female", comp: "aggressive", deesser: "female", delay: "digital_clean", reverb: "valhalla_vintage_plate", saturation: null, extras: [] },
      warm: { eq: "hiphop_female", comp: "aggressive", deesser: "female", delay: "slapback", reverb: "valhalla_room", saturation: "subtle_warmth", extras: [] },
      dark: { eq: "hiphop_female", comp: "parallel", deesser: "female", delay: "dm2_dark", reverb: "rc20_lofi", saturation: "tape_saturation", extras: [] },
    },
    male: {
      bright: { eq: "hiphop_male", comp: "aggressive", deesser: "male", delay: "digital_clean", reverb: "fabfilter_pro_r", saturation: null, extras: [] },
      warm: { eq: "hiphop_male", comp: "aggressive", deesser: "male", delay: "slapback", reverb: "slate_plates", saturation: "subtle_warmth", extras: [] },
      dark: { eq: "hiphop_male", comp: "parallel", deesser: "male", delay: "dm2_dark", reverb: "rc20_lofi", saturation: "aggressive_dist", extras: [] },
    },
  },
  rock: {
    female: {
      bright: { eq: "female_rock", comp: "aggressive", deesser: "female", delay: "slapback", reverb: "lexicon_hall", saturation: "subtle_warmth", extras: [] },
      warm: { eq: "female_rock", comp: "medium", deesser: "female", delay: "studio_tape", reverb: "valhalla_room", saturation: "tape_saturation", extras: [] },
      dark: { eq: "female_rock", comp: "aggressive", deesser: "female", delay: "space_echo", reverb: "uad_capitol", saturation: "aggressive_dist", extras: [] },
    },
    male: {
      bright: { eq: "male_rock", comp: "aggressive", deesser: "male", delay: "slapback", reverb: "lexicon_hall", saturation: "subtle_warmth", extras: [] },
      warm: { eq: "male_rock", comp: "medium", deesser: "male", delay: "studio_tape", reverb: "valhalla_vintage_plate", saturation: "tape_saturation", extras: [] },
      dark: { eq: "male_rock", comp: "aggressive", deesser: "male", delay: "dm2_dark", reverb: "native_instruments_raum", saturation: "aggressive_dist", extras: [] },
    },
  },
  ballad: {
    female: {
      bright: { eq: "female_pop_bright", comp: "gentle", deesser: "female", delay: "studio_tape", reverb: "valhalla_vintage_plate", saturation: null, extras: [] },
      warm: { eq: "ballad", comp: "gentle", deesser: "female", delay: "memory_man", reverb: "lexicon_hall", saturation: "subtle_warmth", extras: [] },
      dark: { eq: "ballad", comp: "gentle", deesser: "female", delay: "throw_delay", reverb: "valhalla_shimmer", saturation: "tape_saturation", extras: [] },
    },
    male: {
      bright: { eq: "male_pop_bright", comp: "gentle", deesser: "male", delay: "studio_tape", reverb: "fabfilter_pro_r", saturation: null, extras: [] },
      warm: { eq: "ballad", comp: "gentle", deesser: "male", delay: "memory_man", reverb: "uad_capitol", saturation: "subtle_warmth", extras: [] },
      dark: { eq: "ballad", comp: "gentle", deesser: "male", delay: "throw_delay", reverb: "arturia_rev_plate", saturation: "tape_saturation", extras: [] },
    },
  },
  edm: {
    female: {
      bright: { eq: "edm", comp: "aggressive", deesser: "female", delay: "digital_clean", reverb: "valhalla_shimmer", saturation: null, extras: [] },
      warm: { eq: "edm", comp: "medium", deesser: "female", delay: "studio_tape", reverb: "fabfilter_pro_r", saturation: "subtle_warmth", extras: [] },
      dark: { eq: "edm", comp: "aggressive", deesser: "female", delay: "dm2_dark", reverb: "native_instruments_raum", saturation: "tape_saturation", extras: [] },
    },
    male: {
      bright: { eq: "edm", comp: "aggressive", deesser: "male", delay: "digital_clean", reverb: "valhalla_shimmer", saturation: null, extras: [] },
      warm: { eq: "edm", comp: "medium", deesser: "male", delay: "studio_tape", reverb: "waves_h_reverb", saturation: "subtle_warmth", extras: [] },
      dark: { eq: "edm", comp: "aggressive", deesser: "male", delay: "dm2_dark", reverb: "native_instruments_raum", saturation: "aggressive_dist", extras: [] },
    },
  },
};

export function generateChain(genre, vocalType, mood) {
  const chain = CHAIN_MATRIX[genre]?.[vocalType]?.[mood];
  if (!chain) return null;

  return {
    eq: EQ_PRESETS[chain.eq],
    comp: COMP_PRESETS[chain.comp],
    deesser: DEESSER_PRESETS[chain.deesser],
    delay: DELAY_PRESETS[chain.delay],
    reverb: REVERB_PRESETS[chain.reverb],
    saturation: chain.saturation ? SATURATION_PRESETS[chain.saturation] : null,
  };
}

export const GENRES = [
  { id: "pop", label: "Pop" },
  { id: "rnb", label: "R&B / Soul" },
  { id: "hiphop", label: "Hip-Hop / Rap" },
  { id: "rock", label: "Rock / Indie" },
  { id: "ballad", label: "Ballad" },
  { id: "edm", label: "EDM / Electronic" },
];

export const VOCAL_TYPES = [
  { id: "female", label: "Female" },
  { id: "male", label: "Male" },
];

export const MOODS = [
  { id: "bright", label: "Bright / Clear" },
  { id: "warm", label: "Warm / Smooth" },
  { id: "dark", label: "Dark / Moody" },
];
