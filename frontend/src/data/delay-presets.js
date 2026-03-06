// Delay Presets — EchoBoy (Soundtoys) 중심

export const DELAY_PRESETS = {
  // ─── Tape-Based ───
  studio_tape: {
    label: "Studio Tape",
    plugin: "EchoBoy (Soundtoys)",
    style: "Studio Tape", mode: "Single Echo",
    time: "1/4 note (sync)", feedback: "20%", mix: "15-20%",
    saturation: "Low", highcut: "6kHz", width: "50%",
    note: "깔끔한 테이프 딜레이 (ATR-102 15ips), 팝/발라드 기본",
  },
  master_tape: {
    label: "Master Tape (Hi-Fi)",
    plugin: "EchoBoy (Soundtoys)",
    style: "Master Tape", mode: "Single Echo",
    time: "1/4 note (sync)", feedback: "25%", mix: "15%",
    saturation: "Low-Medium", highcut: "8kHz", width: "50%",
    note: "고품질 테이프 (ATR-102 30ips), 록/프로덕션 — 원음에 가까운 리핏",
  },
  echoplex: {
    label: "EchoPlex (Warm Analog)",
    plugin: "EchoBoy (Soundtoys)",
    style: "EchoPlex", mode: "Single Echo",
    time: "1/4 Dotted", feedback: "25%", mix: "15%",
    saturation: "Medium", highcut: "4kHz", width: "50%",
    note: "따뜻한 EP-3 아날로그 딜레이, R&B/Soul에 적합",
  },

  // ─── Character ───
  slapback: {
    label: "Slapback",
    plugin: "EchoBoy (Soundtoys)",
    style: "Studio Tape", mode: "Single Echo",
    time: "80-120ms (free)", feedback: "0-5%", mix: "20-25%",
    saturation: "None", highcut: "8kHz", width: "0%",
    note: "짧은 슬랩백 — 보컬에 깊이 추가, 팝/록 기본 기법",
  },
  space_echo: {
    label: "Space Echo (Dub)",
    plugin: "EchoBoy (Soundtoys)",
    style: "Space Echo", mode: "Single Echo",
    time: "1/4 Dotted", feedback: "35%", mix: "20%",
    saturation: "High", highcut: "3kHz", width: "60%",
    note: "Roland RE-201 빈티지 스페이스 에코 — 어둡고 모듈레이션 풍부",
  },
  dm2_dark: {
    label: "DM-2 Dark",
    plugin: "EchoBoy (Soundtoys)",
    style: "DM-2", mode: "Single Echo",
    time: "1/4 note", feedback: "30%", mix: "18%",
    saturation: "Medium", highcut: "3kHz", width: "40%",
    note: "Boss DM-2 BBD — 어둡고 따뜻한 딜레이, 인디/얼터너티브",
  },
  memory_man: {
    label: "Memory Man (Dirty Analog)",
    plugin: "EchoBoy (Soundtoys)",
    style: "Memory Man", mode: "Single Echo",
    time: "1/4 note", feedback: "25%", mix: "15%",
    saturation: "Medium", highcut: "4kHz", width: "40%",
    note: "EHX Memory Man — 약간 더티한 아날로그, 인디/로파이",
  },

  // ─── Digital / Clean ───
  digital_clean: {
    label: "Digital Clean",
    plugin: "EchoBoy (Soundtoys)",
    style: "Digital", mode: "Single Echo",
    time: "1/8 note", feedback: "15%", mix: "12%",
    saturation: "None", highcut: "10kHz", width: "50%",
    note: "정확한 디지털 딜레이 — EDM/정밀한 믹스",
  },
  ping_pong: {
    label: "Ping Pong Stereo",
    plugin: "EchoBoy (Soundtoys)",
    style: "Digital", mode: "Ping-Pong",
    time: "Dotted 1/8", feedback: "35%", mix: "15%",
    saturation: "Low", highcut: "8kHz", width: "100%",
    note: "스테레오 핑퐁 — L/R 교차 바운스, EDM/팝 공간감",
  },

  // ─── Creative / Automation ───
  throw_delay: {
    label: "Throw Delay (자동화용)",
    plugin: "EchoBoy (Soundtoys)",
    style: "Studio Tape", mode: "Single Echo",
    time: "1/4 note", feedback: "25%", mix: "40-50%",
    saturation: "Low", highcut: "5kHz", width: "50%",
    note: "프레이즈 끝에 Send 자동화로 딜레이 Throw — HPF 400Hz, LPF 3kHz 리턴 EQ 권장",
  },
  rhythmic_dotted: {
    label: "Rhythmic Dotted",
    plugin: "EchoBoy (Soundtoys)",
    style: "EchoPlex", mode: "Dual Echo",
    time: "L: 1/4 Dotted / R: 1/8 Dotted", feedback: "30%", mix: "15%",
    saturation: "Low", highcut: "5kHz", width: "80%",
    note: "듀얼 딜레이 리듬감 — 점음표 좌/우 교차, 팝/인디",
  },
  chorus_delay: {
    label: "Chorus Delay (짧은 딜레이)",
    plugin: "EchoBoy (Soundtoys)",
    style: "Memory Man", mode: "Dual Echo",
    time: "15-25ms (free)", feedback: "10%", mix: "20%",
    saturation: "Low", highcut: "6kHz", width: "80%",
    wobble: "30%",
    note: "짧은 딜레이 + Wobble → 코러스 효과 — 보컬 두께 추가",
  },
};
