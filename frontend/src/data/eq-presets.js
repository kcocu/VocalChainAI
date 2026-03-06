// EQ Presets — 보컬 주파수 대역별 세팅
// 각 프리셋: 5밴드 파라메트릭 EQ (HPF + 3 Bell + HShelf)

export const EQ_PRESETS = {
  // ─── Female Pop ───
  female_pop_bright: {
    label: "Female Pop — Bright & Clear",
    bands: [
      { type: "HPF", freq: 120, gain: 0, q: 0.7 },
      { type: "Bell", freq: 250, gain: -3, q: 1.5, note: "탁한 대역 제거" },
      { type: "Bell", freq: 3500, gain: 3, q: 1.2, note: "Presence 강조" },
      { type: "Bell", freq: 6000, gain: 1.5, q: 1.0, note: "명료도" },
      { type: "HShelf", freq: 12000, gain: 2.5, q: 0.7, note: "Air 추가" },
    ],
  },
  female_pop_warm: {
    label: "Female Pop — Warm & Smooth",
    bands: [
      { type: "HPF", freq: 100, gain: 0, q: 0.7 },
      { type: "Bell", freq: 200, gain: 1.5, q: 1.0, note: "Warmth 강조" },
      { type: "Bell", freq: 400, gain: -2, q: 1.5, note: "Mud 제거" },
      { type: "Bell", freq: 3000, gain: 1.5, q: 1.5, note: "부드러운 Presence" },
      { type: "HShelf", freq: 10000, gain: 1, q: 0.7, note: "약간의 Air" },
    ],
  },

  // ─── Female R&B ───
  female_rnb: {
    label: "Female R&B — Silky & Rich",
    bands: [
      { type: "HPF", freq: 90, gain: 0, q: 0.7 },
      { type: "Bell", freq: 180, gain: 2, q: 1.0, note: "저음 풍성함" },
      { type: "Bell", freq: 350, gain: -2.5, q: 1.5, note: "Mud 제거" },
      { type: "Bell", freq: 2500, gain: 2, q: 1.2, note: "부드러운 Presence" },
      { type: "HShelf", freq: 8000, gain: 1.5, q: 0.7, note: "Silky top" },
    ],
  },

  // ─── Male Pop ───
  male_pop_bright: {
    label: "Male Pop — Bright & Forward",
    bands: [
      { type: "HPF", freq: 80, gain: 0, q: 0.7 },
      { type: "Bell", freq: 200, gain: -2, q: 1.5, note: "Boom 제거" },
      { type: "Bell", freq: 2500, gain: 3, q: 1.2, note: "Presence 강조" },
      { type: "Bell", freq: 5000, gain: 2, q: 1.0, note: "명료도" },
      { type: "HShelf", freq: 12000, gain: 2, q: 0.7, note: "Air" },
    ],
  },
  male_pop_warm: {
    label: "Male Pop — Warm & Full",
    bands: [
      { type: "HPF", freq: 70, gain: 0, q: 0.7 },
      { type: "Bell", freq: 150, gain: 1.5, q: 1.2, note: "Chest 강조" },
      { type: "Bell", freq: 300, gain: -2, q: 1.5, note: "Mud 제거" },
      { type: "Bell", freq: 3000, gain: 1.5, q: 1.5, note: "부드러운 Presence" },
      { type: "HShelf", freq: 10000, gain: 1, q: 0.7, note: "약간의 Air" },
    ],
  },

  // ─── Male R&B ───
  male_rnb: {
    label: "Male R&B — Deep & Smooth",
    bands: [
      { type: "HPF", freq: 60, gain: 0, q: 0.7 },
      { type: "Bell", freq: 150, gain: 2, q: 1.0, note: "깊은 저음" },
      { type: "Bell", freq: 400, gain: -3, q: 1.5, note: "Mud 제거" },
      { type: "Bell", freq: 2000, gain: 2, q: 1.2, note: "부드러운 중역" },
      { type: "HShelf", freq: 8000, gain: 1, q: 0.7, note: "Silky" },
    ],
  },

  // ─── Rock ───
  male_rock: {
    label: "Male Rock — Aggressive & Gritty",
    bands: [
      { type: "HPF", freq: 100, gain: 0, q: 0.7 },
      { type: "Bell", freq: 250, gain: -2, q: 1.5, note: "Mud 제거" },
      { type: "Bell", freq: 1500, gain: 2, q: 1.0, note: "거친 중역" },
      { type: "Bell", freq: 4000, gain: 3, q: 1.2, note: "날카로운 Presence" },
      { type: "HShelf", freq: 10000, gain: 1.5, q: 0.7, note: "밝은 Air" },
    ],
  },
  female_rock: {
    label: "Female Rock — Powerful & Cutting",
    bands: [
      { type: "HPF", freq: 110, gain: 0, q: 0.7 },
      { type: "Bell", freq: 300, gain: -2.5, q: 1.5, note: "Mud 제거" },
      { type: "Bell", freq: 2000, gain: 2, q: 1.0, note: "중역 파워" },
      { type: "Bell", freq: 5000, gain: 3, q: 1.2, note: "날카로운 Presence" },
      { type: "HShelf", freq: 12000, gain: 2, q: 0.7, note: "밝은 Air" },
    ],
  },

  // ─── Hip-Hop ───
  hiphop_male: {
    label: "Male Hip-Hop — Punchy & Present",
    bands: [
      { type: "HPF", freq: 80, gain: 0, q: 0.7 },
      { type: "Bell", freq: 200, gain: -2, q: 1.5, note: "Boom 제거" },
      { type: "Bell", freq: 800, gain: -1, q: 1.0, note: "Box 제거" },
      { type: "Bell", freq: 3500, gain: 3.5, q: 1.2, note: "강한 Presence" },
      { type: "HShelf", freq: 10000, gain: 2, q: 0.7, note: "Air" },
    ],
  },
  hiphop_female: {
    label: "Female Hip-Hop — Sharp & Airy",
    bands: [
      { type: "HPF", freq: 110, gain: 0, q: 0.7 },
      { type: "Bell", freq: 300, gain: -2, q: 1.5, note: "Mud 제거" },
      { type: "Bell", freq: 4000, gain: 3, q: 1.2, note: "Sharp Presence" },
      { type: "Bell", freq: 7000, gain: 1.5, q: 1.0, note: "밝은 대역" },
      { type: "HShelf", freq: 14000, gain: 2.5, q: 0.7, note: "Air 강조" },
    ],
  },
  hiphop_trap: {
    label: "Trap Vocal — Auto-Tune Ready",
    bands: [
      { type: "HPF", freq: 100, gain: 0, q: 0.7 },
      { type: "Bell", freq: 250, gain: -3, q: 1.5, note: "저역 정리 (808과 분리)" },
      { type: "Bell", freq: 1000, gain: -1.5, q: 1.0, note: "오토튠 인공감 완화" },
      { type: "Bell", freq: 4000, gain: 4, q: 1.2, note: "강한 Presence (마이크 앞으로)" },
      { type: "HShelf", freq: 12000, gain: 3, q: 0.7, note: "밝은 Air" },
    ],
  },

  // ─── Ballad ───
  ballad: {
    label: "Ballad — Emotional & Intimate",
    bands: [
      { type: "HPF", freq: 80, gain: 0, q: 0.7 },
      { type: "Bell", freq: 200, gain: 1, q: 1.0, note: "따뜻한 저음" },
      { type: "Bell", freq: 400, gain: -2, q: 1.5, note: "Mud 제거" },
      { type: "Bell", freq: 2500, gain: 2, q: 1.5, note: "감성적 Presence" },
      { type: "HShelf", freq: 10000, gain: 1.5, q: 0.7, note: "공기감" },
    ],
  },
  ballad_intimate: {
    label: "Ballad — Whisper & Breathy",
    bands: [
      { type: "HPF", freq: 60, gain: 0, q: 0.7 },
      { type: "Bell", freq: 150, gain: 2, q: 1.0, note: "근접효과 활용 (따뜻함)" },
      { type: "Bell", freq: 500, gain: -2.5, q: 1.5, note: "Mud 제거" },
      { type: "Bell", freq: 3000, gain: 1, q: 2.0, note: "섬세한 Presence" },
      { type: "HShelf", freq: 8000, gain: 3, q: 0.7, note: "숨소리/에어 강조" },
    ],
  },

  // ─── EDM ───
  edm: {
    label: "EDM/Electronic — Bright & Cutting",
    bands: [
      { type: "HPF", freq: 130, gain: 0, q: 0.7 },
      { type: "Bell", freq: 300, gain: -3, q: 1.5, note: "저음 정리" },
      { type: "Bell", freq: 2000, gain: -1, q: 1.0, note: "Harsh 제거" },
      { type: "Bell", freq: 4500, gain: 3.5, q: 1.2, note: "밝은 Presence" },
      { type: "HShelf", freq: 14000, gain: 3, q: 0.7, note: "초고역 Air" },
    ],
  },
  edm_vocal_chop: {
    label: "EDM Vocal Chop — Extreme Cut",
    bands: [
      { type: "HPF", freq: 200, gain: 0, q: 0.7 },
      { type: "Bell", freq: 500, gain: -4, q: 1.5, note: "극단적 저역 정리" },
      { type: "Bell", freq: 3000, gain: 4, q: 1.0, note: "미드-하이 강조" },
      { type: "Bell", freq: 6000, gain: 2, q: 1.2, note: "밝은 대역" },
      { type: "HShelf", freq: 14000, gain: 3, q: 0.7, note: "초고역 Air" },
    ],
  },

  // ─── Jazz ───
  jazz_female: {
    label: "Female Jazz — Natural & Warm",
    bands: [
      { type: "HPF", freq: 70, gain: 0, q: 0.7 },
      { type: "Bell", freq: 200, gain: 1, q: 1.0, note: "자연스러운 바디" },
      { type: "Bell", freq: 500, gain: -1.5, q: 1.5, note: "약간의 Mud 정리" },
      { type: "Bell", freq: 2500, gain: 1.5, q: 2.0, note: "부드러운 Presence" },
      { type: "HShelf", freq: 8000, gain: 1, q: 0.7, note: "자연스러운 Air" },
    ],
  },
  jazz_male: {
    label: "Male Jazz — Deep & Rich",
    bands: [
      { type: "HPF", freq: 50, gain: 0, q: 0.7 },
      { type: "Bell", freq: 120, gain: 1.5, q: 1.0, note: "깊은 바디" },
      { type: "Bell", freq: 400, gain: -2, q: 1.5, note: "Mud 정리" },
      { type: "Bell", freq: 2000, gain: 1.5, q: 2.0, note: "부드러운 중역" },
      { type: "HShelf", freq: 7000, gain: 1, q: 0.7, note: "자연스러운 탑엔드" },
    ],
  },

  // ─── Special ───
  spoken_word: {
    label: "Narration / Podcast — Clear & Present",
    bands: [
      { type: "HPF", freq: 80, gain: 0, q: 0.7 },
      { type: "Bell", freq: 250, gain: -3, q: 1.5, note: "근접효과 보정" },
      { type: "Bell", freq: 800, gain: -1, q: 1.0, note: "Box 제거" },
      { type: "Bell", freq: 3000, gain: 3, q: 1.2, note: "명료도 강조" },
      { type: "HShelf", freq: 10000, gain: 1.5, q: 0.7, note: "적당한 Air" },
    ],
  },
  choir_backing: {
    label: "Backing Vocal / Choir — Blend & Support",
    bands: [
      { type: "HPF", freq: 150, gain: 0, q: 0.7 },
      { type: "Bell", freq: 300, gain: -2, q: 1.5, note: "메인 보컬 영역 양보" },
      { type: "Bell", freq: 2000, gain: -1.5, q: 1.0, note: "Presence 줄임 (메인에 양보)" },
      { type: "Bell", freq: 5000, gain: 1, q: 1.2, note: "약간의 밝기" },
      { type: "HShelf", freq: 12000, gain: 2, q: 0.7, note: "Air로 공간감" },
    ],
  },
};
