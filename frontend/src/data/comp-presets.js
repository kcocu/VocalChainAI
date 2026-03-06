// Compressor Presets — 타입별 분류 + 추천 플러그인

export const COMP_PRESETS = {
  // ─── Gentle / Natural ───
  gentle: {
    label: "Gentle Leveling",
    type: "VCA",
    ratio: "2:1", threshold: "-18dB", attack: "15ms", release: "100ms",
    knee: "Soft", makeupGain: "2-3dB",
    gainReduction: "2-4dB",
    plugins: ["SSL G Bus Comp", "Waves SSL G-Master"],
    note: "자연스러운 레벨 관리, 발라드/어쿠스틱",
  },
  opto_smooth: {
    label: "Optical Smooth (LA-2A)",
    type: "Optical",
    ratio: "자동 (프로그램 디펜던트)", threshold: "Peak Reduction 조절", attack: "10ms (자동)", release: "60ms-1s (자동)",
    knee: "Soft", makeupGain: "3-5dB",
    gainReduction: "3-6dB",
    plugins: ["UAD LA-2A", "Waves CLA-2A", "Analog Obsession LALA"],
    note: "부드러운 옵티컬 컴프레션, R&B/Soul/발라드에 최적",
  },

  // ─── Medium / Standard ───
  medium: {
    label: "Medium Control",
    type: "VCA",
    ratio: "3:1", threshold: "-15dB", attack: "10ms", release: "80ms",
    knee: "Medium", makeupGain: "3-4dB",
    gainReduction: "4-6dB",
    plugins: ["SSL G Bus Comp", "API 2500", "Waves SSL E-Channel"],
    note: "적당한 컴프레션으로 안정감, 팝/R&B",
  },
  vca_transparent: {
    label: "VCA Transparent",
    type: "VCA",
    ratio: "2.5:1", threshold: "-14dB", attack: "8ms", release: "60ms",
    knee: "Medium", makeupGain: "3-4dB",
    gainReduction: "3-5dB",
    plugins: ["FabFilter Pro-C 2", "Waves C1", "TDR Kotelnikov"],
    note: "투명한 다이나믹 컨트롤, 팝/EDM — 원음 색감 유지",
  },
  vari_mu_warm: {
    label: "Vari-Mu Warm",
    type: "Vari-Mu",
    ratio: "자동 (입력에 비례)", threshold: "Input Gain으로 조절", attack: "10-30ms", release: "100-300ms",
    knee: "Very Soft", makeupGain: "4-6dB",
    gainReduction: "3-6dB",
    plugins: ["UAD Manley Vari-Mu", "Waves Puigchild 670", "Klanghelm MJUC"],
    note: "따뜻한 글루 컴프레션, 재즈/발라드 — 하모닉스 추가",
  },

  // ─── Aggressive / Punchy ───
  aggressive: {
    label: "Aggressive Control",
    type: "FET",
    ratio: "4:1", threshold: "-12dB", attack: "5ms", release: "60ms",
    knee: "Hard", makeupGain: "4-6dB",
    gainReduction: "6-10dB",
    plugins: ["UAD 1176", "Waves CLA-76", "Analog Obsession FETish"],
    note: "강한 다이나믹 컨트롤, 록/힙합",
  },
  fet_punchy: {
    label: "FET Punchy (1176 All-Button)",
    type: "FET",
    ratio: "All (12:1+)", threshold: "-10dB", attack: "최대 (가장 느림)", release: "최대 (가장 빠름)",
    knee: "Hard", makeupGain: "6-8dB",
    gainReduction: "8-12dB",
    plugins: ["UAD 1176", "Waves CLA-76", "IK Multimedia Black 76"],
    note: "1176 올버튼 모드 — 극단적 펀치감, 록/인디 보컬",
  },

  // ─── Parallel / Special ───
  parallel: {
    label: "Parallel Compression",
    type: "FET",
    ratio: "8:1", threshold: "-20dB", attack: "1ms", release: "50ms",
    knee: "Hard", makeupGain: "6-8dB", mix: "30-40%",
    gainReduction: "10-15dB",
    plugins: ["UAD 1176", "FabFilter Pro-C 2 (Mix 노브)", "Waves CLA-76"],
    note: "원본과 섞어서 펀치감 추가 — Mix 노브 또는 별도 버스 사용",
  },
  serial_light: {
    label: "Serial 2-Stage (Light × 2)",
    type: "VCA + Optical",
    ratio: "2:1 → 2:1", threshold: "-16dB → -14dB", attack: "15ms → 10ms", release: "100ms → 80ms",
    knee: "Soft", makeupGain: "2dB + 2dB",
    gainReduction: "2-3dB × 2단",
    plugins: ["1st: LA-2A (레벨링) → 2nd: 1176 (톤 쉐이핑)", "또는 CLA-2A → CLA-76"],
    note: "가벼운 컴프 2번 — 자연스러운 결과, 프로 믹싱 표준 기법",
  },
  multiband_vocal: {
    label: "Multiband Vocal",
    type: "Multiband",
    ratio: "Low 2:1 / Mid 3:1 / High 2:1",
    threshold: "Low -18dB / Mid -15dB / High -16dB",
    attack: "10ms", release: "80ms",
    knee: "Medium", makeupGain: "밴드별 조절",
    gainReduction: "밴드별 3-6dB",
    plugins: ["FabFilter Pro-MB", "Waves C6", "TDR Nova (무료)"],
    note: "주파수 대역별 독립 컴프레션 — 치찰음/저역 별도 제어 가능",
  },
};
