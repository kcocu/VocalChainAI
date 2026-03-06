# VocalChainAI - 상세 개발 계획서

## 프로젝트 개요

**목적**: 장르/보컬 타입/분위기를 선택하면 Cubase 보컬 프로세싱 체인(EQ, 컴프레서, 디에서, 딜레이, 리버브 등)을 자동 생성해주는 웹 앱

**현재 상태**: v0.2 Phase 1 완료 (42개 조합 프리셋 매트릭스 + SVG EQ 시각화)

---

## Phase 1: 데이터 고도화 (현재 → v0.2)

### 1-1. EQ 프리셋 세분화

**현재**: 12개 EQ 프리셋 (장르별 기본)
**목표**: 24-30개로 확장

추가할 EQ 프리셋:
- `female_ballad_intimate` — 숨소리/위스퍼 보컬 특화 (Air 대역 강조, 저역 근접효과 보정)
- `male_ballad_deep` — 깊은 저음 보컬 (Chest resonance 강조)
- `female_edm_vocal_chop` — EDM 보컬 찹 특화 (미드-하이 강조, 극단적 HPF)
- `male_hiphop_trap` — 트랩 보컬 (오토튠 사용 전제, 특정 주파수 부스트)
- `female_jazz` — 재즈 보컬 (자연스러운 밸런스)
- `male_jazz` — 재즈 보컬
- `spoken_word` — 내레이션/팟캐스트 (명료도 최우선)
- `choir_backing` — 백킹 보컬/코러스 (메인 보컬과 겹치지 않게 EQ)

각 EQ 프리셋에 추가할 정보:
- `purpose`: 간단한 한글 설명 (왜 이 세팅인지)
- `cubaseEQ`: Cubase StudioEQ 기준 밴드 매핑 (Band 1-4 + LoCut)
- `reference`: 참고 곡/아티스트 (선택)

### 1-2. 컴프레서 세분화

**현재**: 4개 (gentle, medium, aggressive, parallel)
**목표**: 8-10개로 확장

추가할 컴프레서 프리셋:
- `serial_light` — 직렬 2단계 (가벼운 × 2), 자연스러운 레벨링
- `multiband_vocal` — 멀티밴드 컴프레서 (저역/중역/고역 독립 제어)
- `opto_smooth` — LA-2A 스타일 옵티컬 (R&B/Soul 부드러운 컴프)
- `fet_punchy` — 1176 스타일 FET (록/힙합 펀치감)
- `vca_transparent` — VCA 투명한 컴프레션 (팝/EDM)
- `vari_mu_warm` — Vari-Mu 따뜻한 컴프레션 (발라드/재즈)

각 프리셋에 추가할 정보:
- `type`: FET / Optical / VCA / Vari-Mu / Digital
- `plugin_recommendations`: 추천 플러그인 목록
- `gain_reduction_target`: 목표 게인 리덕션 (예: "3-6dB")

### 1-3. 디에서 확장

**현재**: male/female 2개
**목표**: 4-6개

추가:
- `female_bright` — 밝은 여성 보컬 (더 적극적인 디에싱)
- `male_hiphop` — 힙합 남성 (마이크 근접, 강한 치찰음)
- `sibilance_heavy` — 치찰음이 심한 경우 (광대역 디에싱)
- `gentle_preserve` — 에어 보존하면서 최소한의 디에싱

### 1-4. 딜레이 프리셋 확장 (EchoBoy 중심)

**현재**: 7개 EchoBoy 스타일
**목표**: 12-15개

추가할 EchoBoy 스타일:
- `ping_pong` — 핑퐁 딜레이 (스테레오 확장)
- `rhythmic_dotted` — 리듬감 있는 점음표 딜레이
- `chorus_delay` — 짧은 딜레이로 코러스 효과
- `filtered_sweep` — 필터 스윕 딜레이 (자동화 포인트 안내)
- `dual_delay` — 좌/우 다른 타임의 듀얼 딜레이

각 프리셋에 추가할 정보:
- `echoboy_mode`: EchoBoy 내 정확한 모드명
- `routing`: Insert / Send / 자동화 방법
- `automation_tip`: Cubase에서 자동화 설정 팁

### 1-5. 리버브 프리셋 확장

**현재**: 12개 (다양한 플러그인)
**목표**: 18-20개

추가할 리버브:
- `eventide_blackhole` — Eventide Blackhole (거대한 공간, 앰비언트)
- `audio_ease_altiverb` — Altiverb (컨볼루션, 실제 공간 IR)
- `exponential_phoenix` — PhoenixVerb (자연스러운 알고리즘)
- `soundtoys_superplate` — SuperPlate (다양한 플레이트)
- `waves_abbey_road_plates` — Abbey Road Plates
- `spring_reverb` — 스프링 리버브 (로파이/인디)

### 1-6. 새 카테고리 추가

**Pitch Correction (피치 보정)**:
```
{
  auto_tune_natural: { plugin: "Waves Tune Real-Time", speed: "Medium", note: "자연스러운 피치 보정" },
  auto_tune_effect: { plugin: "Antares Auto-Tune", retune: "0ms", note: "오토튠 이펙트" },
  melodyne_manual: { plugin: "Celemony Melodyne", mode: "Manual", note: "수동 정밀 피치 보정" },
}
```

**Vocal Doubling / Width (보컬 더블링)**:
```
{
  subtle_double: { plugin: "Waves Doubler / iZotope Vocal Doubler", detune: "5-10ct", delay: "10-20ms" },
  wide_stereo: { plugin: "Soundtoys MicroShift", style: "Style II", mix: "30-40%" },
  chorus_thicken: { plugin: "TAL Chorus-LX / Valhalla SpaceModulator", rate: "Low", mix: "20%" },
}
```

**Master Bus / Vocal Bus Processing**:
```
{
  bus_glue: { plugin: "SSL Bus Comp / Waves SSL G", ratio: "2:1", note: "보컬 버스 글루" },
  bus_eq: { plugin: "Pultec EQP-1A", boost_10k: "+2dB", note: "보컬 버스 마무리 EQ" },
  limiter: { plugin: "FabFilter Pro-L 2", ceiling: "-0.3dB", note: "보컬 리미터" },
}
```

---

## Phase 2: UI/UX 개선 (v0.3)

### 2-1. 인터랙티브 EQ 그래프

현재 SVG 기반 정적 그래프 → 인터랙티브하게 개선:
- 각 밴드 포인트를 드래그로 이동 가능
- 주파수/게인 값이 실시간으로 업데이트
- 밴드 타입 변경 (Bell ↔ Shelf ↔ HPF)
- 드래그 시 실제 EQ 커브가 수학적으로 정확하게 반영

기술: React + SVG 이벤트 핸들링 (라이브러리 없이)

### 2-2. 시그널 플로우 다이어그램 개선

현재: 단순 텍스트 플로우 (Input → EQ → Comp → ...)
개선:
- 각 노드를 클릭하면 해당 세팅으로 스크롤
- Insert vs Send 경로 시각적 분리
- 병렬 처리 경로 표시 (Parallel Comp, Send 효과)
- 드래그로 체인 순서 변경 가능 (고급)

### 2-3. 프리셋 비교 기능

- 2개 체인을 나란히 비교
- 차이점 하이라이트 (예: EQ 밴드 차이, 컴프레서 설정 차이)

### 2-4. 다크/라이트 모드

현재: 다크 모드만 → 라이트 모드 추가 (토글)

### 2-5. 반응형 모바일 최적화

현재: 기본 반응형 → 모바일에서도 편하게 사용 가능하도록 세밀한 조정

### 2-6. 즐겨찾기 / 히스토리

- LocalStorage 기반 즐겨찾기 저장
- 최근 생성한 체인 히스토리 (최대 10개)

---

## Phase 3: 고급 기능 (v0.4)

### 3-1. 커스텀 체인 빌더

프리셋 매트릭스 외에 사용자가 직접 체인을 구성:
- EQ 밴드를 수동으로 추가/제거/조정
- 컴프레서/딜레이/리버브를 드롭다운에서 선택
- 체인 순서를 드래그로 변경
- 커스텀 체인을 LocalStorage에 저장

### 3-2. A/B 비교 오디오 시뮬레이션 (Web Audio API)

실제 오디오 파일을 업로드하고 Web Audio API로 EQ/컴프 시뮬레이션:
- 파일 업로드 (WAV/MP3)
- BiquadFilterNode로 EQ 적용
- DynamicsCompressorNode로 기본 컴프 적용
- Dry/Wet 비교 재생
- **주의**: 브라우저 오디오 처리는 실제 플러그인과 다름 — "참고용" 명시

### 3-3. 내보내기 기능

생성된 체인을 다양한 형태로 내보내기:
- **PDF**: 깔끔한 레이아웃의 설정 시트
- **텍스트/마크다운**: 복사해서 노트에 붙여넣기
- **이미지**: EQ 그래프 + 설정값 포함된 PNG
- **JSON**: 데이터 백업/공유용

### 3-4. Cubase 연동 (실험적)

**조사 결과 요약:**
- `.trackpreset` — XML 기반, 스키마 비공개이지만 리버스 엔지니어링 가능
- `.fxchainpreset` — XML 기반, 플러그인 상태는 hex-encoded binary
- `.vstpreset` — 48바이트 헤더(VST3 + ClassID) + Comp/Info 청크, VST3 SDK 문서화됨
- **MIDI Remote API** — MIDI 하드웨어 컨트롤러 전용, HTTP/WebSocket 없음 → 외부 앱에서 값 푸시 불가
- **실현 가능한 접근**: StudioEQ .vstpreset 생성 (바이너리 리버스 엔지니어링 필요)
- **차선책**: .fxchainpreset XML 생성 (플러그인 UID + hex 상태 필요)
- **위험도 높음** — 별도 브랜치에서 실험, 충분한 테스트 후 머지

---

## Phase 4: 콘텐츠 & 교육 (v0.5)

### 4-1. 각 설정의 "왜" 설명

단순한 수치 나열이 아닌, 각 설정의 이유를 교육적으로 설명:
- "왜 HPF를 120Hz로 설정하는가?"
- "Presence 대역(2-5kHz)이 보컬에 중요한 이유"
- "컴프레서 Attack/Release가 보컬 톤에 미치는 영향"

구현: 각 파라미터 옆에 (?) 아이콘 → 호버/클릭으로 설명 표시

### 4-2. 레퍼런스 트랙 가이드

각 장르/분위기별 레퍼런스 트랙 추천:
- Pop Bright Female → Ariana Grande "Into You", Dua Lipa "Levitating"
- R&B Warm Male → The Weeknd "Blinding Lights", Frank Ocean "Thinkin Bout You"
- 등등

### 4-3. Cubase 설정 가이드

Cubase에서 실제로 설정하는 방법을 단계별로 안내:
- Channel Strip EQ 사용법
- Send 이펙트 라우팅 방법
- 프리/포스트 페이더 센드 차이
- FX 트랙 생성 및 설정

---

## 기술 스택

| 구분 | 기술 | 비고 |
|------|------|------|
| 프레임워크 | React 19 + Vite | 현재 사용 중 |
| 스타일링 | CSS Variables (Custom Properties) | 다크/라이트 테마 전환 |
| 그래프 | SVG (자체 구현) | 라이브러리 없이 |
| 오디오 | Web Audio API | Phase 3 (선택) |
| 내보내기 | html2canvas, jsPDF | Phase 3 |
| 배포 | Vercel | vercel.json 설정 완료 |
| 저장 | LocalStorage | 서버 불필요 |

---

## 파일 구조 (목표)

```
frontend/
  src/
    components/
      ChainSelector.jsx      ← 장르/보컬/분위기 선택
      ChainResult.jsx         ← 결과 전체 레이아웃
      EQDisplay.jsx           ← EQ 그래프 + 테이블
      PluginCard.jsx          ← 개별 플러그인 카드 (분리)
      SignalFlow.jsx           ← 시그널 플로우 다이어그램
      CompareView.jsx          ← A/B 비교 (Phase 2)
      CustomBuilder.jsx        ← 커스텀 빌더 (Phase 3)
      ExportPanel.jsx          ← 내보내기 (Phase 3)
      InfoTooltip.jsx          ← 교육용 툴팁 (Phase 4)
    data/
      chains.js               ← 메인 프리셋 매트릭스
      eq-presets.js            ← EQ 프리셋 (분리)
      comp-presets.js          ← 컴프레서 프리셋 (분리)
      delay-presets.js         ← 딜레이 프리셋 (분리)
      reverb-presets.js        ← 리버브 프리셋 (분리)
      saturation-presets.js    ← 새츄레이션 프리셋 (분리)
      pitch-presets.js         ← 피치 보정 프리셋 (Phase 1)
      doubling-presets.js      ← 더블링 프리셋 (Phase 1)
      explanations.js          ← 교육 콘텐츠 (Phase 4)
      references.js            ← 레퍼런스 트랙 (Phase 4)
    styles/
      index.css               ← 메인 스타일
      themes.css               ← 라이트/다크 테마 변수
    utils/
      eq-math.js              ← EQ 커브 수학 함수
      audio-engine.js          ← Web Audio API (Phase 3)
      export.js                ← 내보내기 유틸 (Phase 3)
    App.jsx
    main.jsx
```

---

## 우선순위 로드맵

### 즉시 (v0.2) — 데이터 고도화
1. EQ 프리셋 세분화 (24-30개)
2. 컴프레서 타입별 분류 + 추천 플러그인
3. 딜레이/리버브 프리셋 추가
4. 피치 보정 / 더블링 카테고리 추가
5. 데이터 파일 분리 (chains.js가 너무 커지기 전에)

### 단기 (v0.3) — UI 개선
1. 인터랙티브 EQ 그래프
2. 시그널 플로우 다이어그램 개선
3. 즐겨찾기 / 히스토리
4. 다크/라이트 모드

### 중기 (v0.4) — 고급 기능
1. 커스텀 체인 빌더
2. 내보내기 (PDF/텍스트/이미지)
3. Web Audio API 시뮬레이션 (실험적)
4. Cubase 연동 조사

### 장기 (v0.5) — 교육 콘텐츠
1. 파라미터 설명 툴팁
2. 레퍼런스 트랙 가이드
3. Cubase 설정 단계별 가이드

---

## 보컬 프로세싱 기본 지식

### 보컬 주파수 대역 가이드

| 대역 | 주파수 | 역할 | 일반 처리 |
|------|--------|------|----------|
| Sub | 20-80Hz | 럼블/진동 | HPF로 제거 |
| Low | 80-250Hz | 바디/웜스 | 근접효과 보정, 웜스 조절 |
| Low-Mid | 250-500Hz | Mud/Box | 보통 컷 (-2~-4dB) |
| Mid | 500Hz-2kHz | 내추럴 톤 | 신중하게 조절 |
| Upper-Mid | 2-5kHz | Presence | 보컬 핵심 대역, 부스트로 명료도 |
| High | 5-10kHz | Brilliance/Sibilance | 디에싱 영역 |
| Air | 10-20kHz | Air/Sparkle | HShelf 부스트로 공기감 |

### 컴프레서 타입별 특성

| 타입 | 특성 | 대표 플러그인 | 적합한 장르 |
|------|------|-------------|-----------|
| FET (1176) | 빠른 어택, 펀치감 | UAD 1176, Waves CLA-76 | 록, 힙합 |
| Optical (LA-2A) | 부드러운, 자연스러운 | UAD LA-2A, Waves CLA-2A | R&B, 발라드 |
| VCA | 투명한, 정확한 | SSL G Bus, API 2500 | 팝, EDM |
| Vari-Mu | 따뜻한, 글루 | Manley Vari-Mu, Waves Puigchild | 재즈, 발라드 |

### Cubase 보컬 시그널 체인 (권장 순서)

```
1. HPF (High Pass Filter) — 불필요한 저음 제거
2. Corrective EQ — 문제 주파수 제거 (Mud, Box, Harsh)
3. Compressor (1차) — 기본 다이나믹 컨트롤
4. De-Esser — 치찰음 제거
5. Tonal EQ — 원하는 톤 쉐이핑 (Presence, Air 부스트)
6. Compressor (2차, 선택) — 추가 레벨링
7. Saturation (선택) — 따뜻함/색감 추가
8. Send → Delay (EchoBoy) — 별도 FX 트랙
9. Send → Reverb — 별도 FX 트랙
```

### EchoBoy 딜레이 모드 가이드

| 모드 | 특성 | 적합한 용도 |
|------|------|-----------|
| Studio Tape | 깔끔한 테이프 (ATR-102 15ips) | 팝/발라드 기본 |
| EchoPlex | 따뜻한 아날로그 (EP-3 solid state) | R&B/Soul |
| Space Echo | 빈티지 더빙 (Roland RE-201) | 레게/인디 |
| DM-2 | 어두운 BBD 아날로그 (Boss DM-2) | 다크/무디 |
| Digital | 정확한 디지털 | EDM/정밀한 믹스 |
| Memory Man | EHX 아날로그 (약간 더티) | 인디/얼터너티브 |
| Master Tape | 고품질 테이프 (ATR-102 30ips) | 록/프로덕션 |
| Tube Tape | 진공관 테이프 새츄 | 빈티지/웜 |
| Saturated | 과도한 테이프 디스토션 | 이펙트/크리에이티브 |
| Binsonette | 드럼 머신 에코 | 실험적 |

**EchoBoy 에코 모드**: Single / Dual / Ping-Pong / Rhythm (16탭)
**핵심 컨트롤**: Time, Mix, Feedback, Width, Saturation, Wobble, Groove/Feel/Accent

### 장르별 리버브 디케이 퀵 레퍼런스

| 장르 | 디케이 | 리버브 타입 | 프리딜레이 | 특성 |
|------|--------|-----------|----------|------|
| Pop | 1.0-1.8s | Plate | 20-40ms | 밝고 부드러운 |
| R&B | 1.5-2.5s | Plate/Chamber | 25-50ms | 풍성하고 깔끔 |
| Hip-Hop | 0.5-1.2s | Room/Short Plate | 10-20ms | 타이트, 다음 단어 전에 끝남 |
| Rock | 1.2-2.5s | Hall/Plate | 20-40ms | 넓고 존재감 |
| Ballad | 2.0-5.0s | Hall/Large Plate | 40-80ms | 감성적, 긴 테일 |
| EDM | 0.8-1.5s | Plate/Room | 10-30ms | 짧고 깨끗, 사이드체인 덕킹 |
| Jazz | 1.5-3.0s | Chamber/Plate | 20-50ms | 따뜻한 빈티지 |

### Send 라우팅 핵심 팁

- 리버브/딜레이는 **항상 Send (AUX)로 라우팅** — 플러그인 100% Wet
- **포스트 페이더 Send** 권장 — 보컬 페이더 따라 자동 조절
- **리버브 리턴 채널에 EQ**: HPF 200-600Hz, LPF 6-10kHz (Abbey Road 테크닉)
- 프리딜레이: 20-50ms가 팝/R&B 보컬에 가장 범용

### 리버브 타입별 가이드

| 타입 | 특성 | 적합한 용도 |
|------|------|-----------|
| Plate | 밀도 높은, 부드러운 | 팝/R&B 보컬 (가장 범용) |
| Room | 자연스러운, 가까운 | 어쿠스틱/발라드 |
| Hall | 넓은, 웅장한 | 오케스트라/라이브 |
| Chamber | 자연스러운, 복잡한 | 클래식/재즈 |
| Spring | 로파이, 독특한 | 인디/로파이 |
| Shimmer | 피치 시프트, 드라마틱 | 앰비언트/포스트록 |

---

## 주의사항

1. **이 앱은 "레시피"를 제공** — 실제 플러그인을 제어하지 않음
2. **모든 수치는 출발점** — 실제 믹싱에서는 귀로 조절 필요
3. **마이크/룸/보컬리스트에 따라 달라짐** — 이 점을 UI에서 명시
4. **플러그인 소유 여부와 무관** — 설정값만 참고, 유사 플러그인으로 대체 가능

---

*작성: 2025-03-07 | VocalChainAI v0.1 기준*
