// Cubase 설정 단계별 가이드
export const CUBASE_GUIDE = {
  channelEQ: {
    title: "Channel Strip EQ 사용법",
    steps: [
      "보컬 트랙을 선택하고 좌측 Inspector에서 'Channel Strip' 섹션을 엽니다.",
      "'EQ' 탭을 클릭하면 4밴드 파라메트릭 EQ가 나타납니다.",
      "Band 1 (Low Cut): HPF로 설정하고 주파수를 80-130Hz로 설정합니다.",
      "Band 2: 문제 주파수를 찾아 좁은 Q로 컷합니다 (Mud: 200-400Hz).",
      "Band 3: Presence 대역 (2-5kHz)을 부스트합니다.",
      "Band 4 (High Shelf): Air 대역 (10kHz+)을 살짝 부스트합니다.",
      "EQ 그래프에서 직접 포인트를 드래그해도 됩니다.",
    ],
    tips: [
      "EQ 전/후를 비교하려면 EQ 섹션의 바이패스 버튼을 사용하세요.",
      "극단적인 부스트보다 불필요한 주파수를 컷하는 것이 더 자연스럽습니다.",
      "StudioEQ 플러그인을 Insert에 추가하면 더 정밀한 조절이 가능합니다.",
    ],
  },
  insertEffects: {
    title: "Insert 이펙트 추가하기",
    steps: [
      "보컬 트랙 Inspector에서 'Inserts' 섹션을 엽니다.",
      "빈 슬롯을 클릭하면 플러그인 목록이 나타납니다.",
      "권장 순서: EQ → Compressor → De-Esser → Saturation (Insert 슬롯 1-4)",
      "플러그인을 드래그해서 순서를 변경할 수 있습니다.",
      "각 플러그인의 바이패스 버튼으로 효과를 A/B 비교하세요.",
    ],
    tips: [
      "Insert는 프리페이더(기본)로 동작합니다 — 페이더 전에 처리됩니다.",
      "슬롯 7-8은 포스트페이더 Insert입니다 (리미터 등에 사용).",
      "과도한 Insert는 레이턴시를 유발할 수 있습니다 — 필요한 것만 사용하세요.",
    ],
  },
  sendRouting: {
    title: "Send 이펙트 라우팅 (딜레이/리버브)",
    steps: [
      "먼저 FX 트랙을 만듭니다: 프로젝트 메뉴 → 트랙 추가 → FX Channel Track.",
      "FX 트랙에 리버브(또는 딜레이) 플러그인을 Insert합니다.",
      "FX 트랙의 플러그인 Mix를 100% Wet으로 설정합니다.",
      "보컬 트랙 Inspector에서 'Sends' 섹션을 엽니다.",
      "빈 Send 슬롯에서 방금 만든 FX 트랙을 선택합니다.",
      "Send 레벨 페이더로 이펙트 양을 조절합니다 (보통 -12dB ~ -6dB 시작).",
      "Send 활성화 버튼(전원 아이콘)을 켭니다.",
    ],
    tips: [
      "Post-Fader Send (기본)를 사용하면 보컬 볼륨에 따라 이펙트도 자동 조절됩니다.",
      "리버브/딜레이는 반드시 Send로 보내세요 — Insert로 넣으면 Dry/Wet 밸런스 조절이 어렵습니다.",
      "FX 트랙 리턴에 EQ를 추가해 리버브의 저역(HPF 200Hz)과 고역(LPF 8kHz)을 정리하세요.",
      "여러 보컬 트랙이 같은 FX 트랙을 공유하면 일관된 공간감을 만들 수 있습니다.",
    ],
  },
  fxTrackSetup: {
    title: "FX 트랙 생성 및 설정",
    steps: [
      "프로젝트 → 트랙 추가 → FX Channel Track을 선택합니다.",
      "이름을 지정합니다 (예: 'Vocal Reverb', 'Vocal Delay').",
      "출력을 Stereo Out (또는 보컬 그룹 버스)으로 설정합니다.",
      "FX 트랙의 Insert 슬롯에 원하는 리버브/딜레이를 추가합니다.",
      "플러그인의 Mix/Dry-Wet을 100% Wet으로 설정합니다.",
      "FX 트랙의 페이더로 전체 이펙트 볼륨을 조절합니다.",
    ],
    tips: [
      "보컬용 FX 트랙은 보통 2개면 충분합니다 (1개 딜레이 + 1개 리버브).",
      "FX 트랙에 EQ를 추가해 리버브의 주파수를 정리하면 깨끗한 믹스를 만들 수 있습니다.",
      "FX 트랙도 오토메이션을 걸 수 있습니다 — 코러스에서 리버브를 더 키우는 등.",
    ],
  },
  prePostFader: {
    title: "프리/포스트 페이더 Send 차이",
    steps: [
      "Send 슬롯에서 우클릭 → 'Pre Fader' 또는 'Post Fader'를 선택합니다.",
      "Post Fader (기본 권장): 보컬 페이더를 내리면 이펙트도 함께 줄어듭니다.",
      "Pre Fader: 보컬 페이더와 독립적으로 이펙트가 유지됩니다.",
    ],
    tips: [
      "보컬 리버브/딜레이는 거의 항상 Post Fader가 자연스럽습니다.",
      "Pre Fader는 헤드폰 큐 믹스, 외부 이펙트 센드 등 특수한 경우에 사용합니다.",
      "페이더를 움직여보면서 Post/Pre의 차이를 직접 들어보세요.",
    ],
  },
};
