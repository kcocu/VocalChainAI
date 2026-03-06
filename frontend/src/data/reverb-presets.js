// Reverb Presets — 다양한 플러그인, 장르별 세팅

export const REVERB_PRESETS = {
  // ─── Valhalla ───
  valhalla_vintage_plate: {
    label: "Vintage Plate",
    plugin: "Valhalla VintageVerb",
    type: "Plate", colorMode: "1980s",
    decay: "1.5s", predelay: "20ms", mix: "15-20%",
    damping: "Medium", modulation: "Low",
    eqTip: "리턴 EQ: HPF 200Hz, LPF 8kHz",
    note: "클래식 플레이트 리버브 — 팝 보컬의 기본, 밝고 부드러운",
  },
  valhalla_room: {
    label: "Natural Room",
    plugin: "Valhalla Room",
    type: "Room",
    decay: "0.8s", predelay: "10ms", mix: "10-15%",
    damping: "Low", modulation: "None",
    eqTip: "리턴 EQ: HPF 250Hz",
    note: "자연스러운 룸 느낌 — 어쿠스틱/발라드, 리얼리즘",
  },
  valhalla_shimmer: {
    label: "Shimmer Reverb",
    plugin: "Valhalla Shimmer",
    type: "Shimmer", pitchShift: "+12 semitones",
    decay: "3s", predelay: "30ms", mix: "10-15%",
    damping: "Low", modulation: "High", feedback: "0.5+",
    eqTip: "리턴 EQ: HPF 300Hz, LPF 6kHz",
    note: "옥타브 피치 시프트 리버브 — 드라마틱한 앰비언트, Eno/U2 스타일",
  },
  valhalla_vintage_dark: {
    label: "Vintage Dark Chamber",
    plugin: "Valhalla VintageVerb",
    type: "Chamber", colorMode: "1970s",
    decay: "2.0s", predelay: "15ms", mix: "15%",
    damping: "High", modulation: "Low",
    eqTip: "리턴 EQ: HPF 200Hz, LPF 5kHz",
    note: "다크 빈티지 챔버 — 1970s 모드의 노이즈/웜스, 로파이/인디",
  },

  // ─── FabFilter ───
  fabfilter_pro_r: {
    label: "Pro-R Vocal Plate",
    plugin: "FabFilter Pro-R 2",
    type: "Plate",
    decay: "1.2s", predelay: "15ms", mix: "15%",
    damping: "Medium-High", modulation: "Low",
    character: "30%", ducking: "On",
    eqTip: "내장 주파수별 디케이 조절 활용 — 저역 디케이 짧게",
    note: "주파수별 디케이 + 내장 덕킹 — 정밀한 모던 리버브",
  },

  // ─── Soundtoys ───
  soundtoys_little_plate: {
    label: "Little Plate",
    plugin: "Soundtoys Little Plate",
    type: "Plate",
    decay: "2s", predelay: "0ms", mix: "15-20%",
    damping: "Medium", modulation: "On (Mod 버튼)",
    eqTip: "내장 Low Cut 사용, 리턴 EQ: LPF 8kHz",
    note: "EMT 140 에뮬레이션 — 3개 노브만으로 풍성한 플레이트",
  },
  soundtoys_superplate: {
    label: "SuperPlate",
    plugin: "Soundtoys SuperPlate",
    type: "Plate",
    decay: "1.8s", predelay: "15ms", mix: "15%",
    damping: "Medium", modulation: "Medium",
    eqTip: "내장 EQ 활용",
    note: "5가지 플레이트 모델 — Little Plate의 확장판",
  },

  // ─── Lexicon ───
  lexicon_hall: {
    label: "Lexicon Hall",
    plugin: "Lexicon PCM Native Reverb",
    type: "Hall",
    decay: "2.5s", predelay: "30ms", mix: "12-15%",
    damping: "Medium", modulation: "Low",
    eqTip: "리턴 EQ: HPF 200Hz, LPF 7kHz",
    note: "클래식 Lexicon 홀 — 대형 공간감, 스무스한 테일",
  },
  lexicon_vocal_plate: {
    label: "Lexicon Vocal Plate",
    plugin: "Lexicon PCM Native Reverb",
    type: "Plate", preset: "Bright Vox",
    decay: "1.5s", predelay: "20ms", mix: "15%",
    damping: "Medium", modulation: "Low",
    eqTip: "리턴 EQ: HPF 250Hz",
    note: "Lexicon Vocal Plate — 보컬 특화 밝은 플레이트",
  },

  // ─── Waves ───
  waves_h_reverb: {
    label: "H-Reverb Ambient",
    plugin: "Waves H-Reverb",
    type: "Hall",
    decay: "2s", predelay: "25ms", mix: "15%",
    damping: "Medium", modulation: "Medium",
    ducking: "On", deesser: "On",
    eqTip: "내장 EQ/Comp/De-Esser 활용",
    note: "올인원 리버브 — 내장 덕킹+디에서로 보컬 명료도 유지 (Greg Wells 사용)",
  },
  waves_abbey_road_plates: {
    label: "Abbey Road Plates",
    plugin: "Waves Abbey Road Plates",
    type: "Plate",
    decay: "1.5s", predelay: "20ms", mix: "15%",
    damping: "Medium", modulation: "Low",
    eqTip: "내장 Bass/Treble 컨트롤 활용",
    note: "Abbey Road Studios EMT 140 — 클래식 플레이트 사운드",
  },

  // ─── UAD / Premium ───
  uad_capitol: {
    label: "Capitol Chambers",
    plugin: "UAD Capitol Chambers",
    type: "Chamber", chamber: "Chamber 2",
    decay: "1.8s", predelay: "15ms", mix: "15-20%",
    damping: "Low", modulation: "None",
    eqTip: "내장 Filter 올려서 Mud 제거, Treble 부스트",
    note: "Capitol Studios 챔버 — Al Schmitt 'The One' 프리셋 참고",
  },

  // ─── Eventide ───
  eventide_blackhole: {
    label: "Blackhole (Infinite Space)",
    plugin: "Eventide Blackhole",
    type: "Infinite",
    decay: "5s+", predelay: "30ms", mix: "10-15%",
    damping: "Low", modulation: "Medium", gravity: "Normal",
    eqTip: "리턴 EQ: HPF 300Hz, LPF 5kHz (필수!)",
    note: "거대한 공간, 앰비언트/포스트록 — 적은 양만 센드, Gravity로 역방향 가능",
  },

  // ─── Lo-Fi / Creative ───
  rc20_lofi: {
    label: "Lo-Fi Reverb",
    plugin: "RC-20 Retro Color (XLN Audio)",
    type: "Space",
    decay: "1.5s", predelay: "0ms", mix: "20-25%",
    damping: "High", modulation: "Medium",
    eqTip: "Magnitude 슬라이더로 전체 강도 조절",
    note: "6모듈 로파이 프로세서 (Space+Wobble+Magnetic) — 인디/힙합 빈티지 텍스처",
  },
  spring_reverb: {
    label: "Spring Reverb (Lo-Fi)",
    plugin: "Softube Spring Reverb / Valhalla Supermassive",
    type: "Spring",
    decay: "1.2s", predelay: "0ms", mix: "15-20%",
    damping: "Medium", modulation: "Low",
    eqTip: "리턴 EQ: HPF 300Hz, LPF 6kHz",
    note: "스프링 리버브 — 로파이/인디/서프록 특유의 Twang",
  },

  // ─── Others ───
  slate_plates: {
    label: "VerbSuite Plate",
    plugin: "Slate VerbSuite Classics",
    type: "Plate",
    decay: "1.5s", predelay: "20ms", mix: "15%",
    damping: "Medium", modulation: "Low",
    eqTip: "하드웨어 에뮬레이션별 다양한 프리셋 활용",
    note: "8가지 전설적 하드웨어 리버브 에뮬레이션",
  },
  native_instruments_raum: {
    label: "Raum Grind",
    plugin: "Native Instruments Raum",
    type: "Grind",
    decay: "2s", predelay: "20ms", mix: "12%",
    damping: "Medium", modulation: "Medium",
    eqTip: "내장 Freeze 기능으로 크리에이티브 효과",
    note: "독특한 텍스처 리버브 — 3가지 모드 (Grounded/Airy/Cosmic), 무료",
  },
  arturia_rev_plate: {
    label: "Rev PLATE-140",
    plugin: "Arturia Rev PLATE-140",
    type: "Plate",
    decay: "1.8s", predelay: "10ms", mix: "15%",
    damping: "Medium", modulation: "Low",
    eqTip: "내장 Pre-Plate EQ로 리버브 전 톤 쉐이핑",
    note: "EMT 140 회로 모델링 + 진공관 프리앰프 — 풍성한 플레이트",
  },
};
