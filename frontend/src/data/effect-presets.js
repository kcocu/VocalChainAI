// De-Esser, Saturation, Pitch Correction, Doubling, Vocal Bus presets

// ─── De-Esser ───
export const DEESSER_PRESETS = {
  female: {
    label: "Female Standard",
    freq: "6-8kHz", threshold: "-20dB", range: "-6dB",
    note: "여성 치찰음 주파수 높음",
  },
  female_bright: {
    label: "Female Bright (강한 디에싱)",
    freq: "7-9kHz", threshold: "-22dB", range: "-8dB",
    note: "밝은 여성 보컬 — 더 적극적인 치찰음 제거",
  },
  male: {
    label: "Male Standard",
    freq: "4-6kHz", threshold: "-18dB", range: "-6dB",
    note: "남성 치찰음 주파수 낮음",
  },
  male_hiphop: {
    label: "Male Hip-Hop (근접 마이킹)",
    freq: "5-7kHz", threshold: "-16dB", range: "-8dB",
    note: "마이크 근접 — 강한 치찰음 + 팝 노이즈 대응",
  },
  sibilance_heavy: {
    label: "Heavy Sibilance (광대역)",
    freq: "4-9kHz", threshold: "-15dB", range: "-10dB",
    note: "치찰음 심한 경우 — 넓은 밴드 적극 제거",
  },
  gentle_preserve: {
    label: "Gentle (Air 보존)",
    freq: "6-8kHz", threshold: "-24dB", range: "-3dB",
    note: "에어 보존하면서 최소한의 디에싱",
  },
};

// ─── Saturation / Color ───
export const SATURATION_PRESETS = {
  subtle_warmth: {
    label: "Subtle Warmth",
    plugin: "Soundtoys Decapitator / FabFilter Saturn 2",
    drive: "Low (10-20%)", mix: "50-70%", tone: "Warm",
    note: "살짝 따뜻한 색감 추가 — 대부분의 보컬에 적합",
  },
  tape_saturation: {
    label: "Tape Saturation",
    plugin: "Waves J37 / UAD Studer A800 / Softube Tape",
    drive: "Medium", mix: "100%", tone: "Warm",
    note: "테이프 새츄레이션 — 빈티지 따뜻함, 홀수 하모닉스",
  },
  aggressive_dist: {
    label: "Aggressive Distortion",
    plugin: "Soundtoys Decapitator",
    drive: "High (50-70%)", mix: "30-40%", tone: "Punchy",
    style: "A (American / 밝은) 또는 E (English / 어두운)",
    note: "거친 디스토션 — 록/인디 보컬, Dry/Wet 밸런스 중요",
  },
  tube_warmth: {
    label: "Tube Warmth",
    plugin: "Waves Abbey Road Saturator / UAD Neve Preamp",
    drive: "Low-Medium", mix: "100%", tone: "Smooth",
    note: "진공관 새츄레이션 — 짝수 하모닉스 추가, 부드러운 따뜻함",
  },
};

// ─── Pitch Correction ───
export const PITCH_PRESETS = {
  natural: {
    label: "Natural Correction",
    plugin: "Waves Tune Real-Time / Auto-Tune Access",
    retuneSpeed: "25-50ms", humanize: "On",
    note: "자연스러운 피치 보정 — 리스너가 감지하지 못하는 수준",
  },
  auto_tune_effect: {
    label: "Auto-Tune Effect (하드 튜닝)",
    plugin: "Antares Auto-Tune Pro",
    retuneSpeed: "0ms (최대 속도)", humanize: "Off",
    note: "T-Pain / Travis Scott 스타일 — 로봇 같은 피치 스냅",
  },
  melodyne_manual: {
    label: "Melodyne (수동 보정)",
    plugin: "Celemony Melodyne 5",
    mode: "Manual (노트별 편집)",
    note: "가장 정밀한 피치 보정 — ARA 통합으로 Cubase에서 직접 편집",
  },
};

// ─── Vocal Doubling / Width ───
export const DOUBLING_PRESETS = {
  subtle_double: {
    label: "Subtle Doubler",
    plugin: "Waves Doubler / iZotope Vocal Doubler (무료)",
    detune: "5-10 cents", delay: "10-20ms", mix: "30-40%",
    note: "미세한 피치/타임 차이로 더블링 효과 — 리드 보컬 두께 추가",
  },
  microshift: {
    label: "MicroShift (스테레오 확장)",
    plugin: "Soundtoys MicroShift",
    style: "Style II", detune: "Medium", delay: "Medium",
    mix: "30-40%", focus: "High (Air 대역)",
    note: "Eventide H3000 기반 — 백킹 보컬 스테레오 와이드닝에 최적",
  },
  chorus_thicken: {
    label: "Chorus Thicken",
    plugin: "TAL Chorus-LX (무료) / Valhalla SpaceModulator",
    rate: "0.3-0.5 Hz", depth: "4-5ms", mix: "15-20%",
    note: "느린 코러스로 보컬 두께 추가 — 과하면 blur 되므로 주의",
  },
};
