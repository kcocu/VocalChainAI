# VocalChainAI — 다음 세션 핸드오프

## 프로젝트 정보
- **레포**: https://github.com/kcocu/VocalChainAI (master 브랜치)
- **경로**: `C:\Users\82109\VocalChainAI`
- **기술**: React 19 + Vite, 순수 프론트엔드 (백엔드 없음)
- **배포**: Vercel (vercel.json 설정 완료)

## 완료된 작업

### v0.1 — 초기 버전 (5815dc4)
- React+Vite 프로젝트 세팅
- 프리셋 매트릭스 기반 체인 생성기 (Genre × VocalType × Mood)
- SVG EQ 커브 시각화 (EQDisplay.jsx)
- 시그널 플로우 다이어그램
- 다크 테마 UI

### v0.2 — Phase 1 데이터 고도화 (8a7bbd4) ← 현재
- **데이터 파일 분리**: chains.js → eq/comp/delay/reverb/effect-presets.js
- **EQ**: 12 → 20개 (Jazz, Trap, Whisper, Vocal Chop, Spoken Word, Choir 추가)
- **Compressor**: 4 → 10개 (FET/Optical/VCA/Vari-Mu/Multiband 타입별 + 추천 플러그인)
- **Delay**: 7 → 12개 (Ping Pong, Rhythmic, Master Tape, Chorus Delay 등)
- **Reverb**: 12 → 18개 (Blackhole, SuperPlate, Abbey Road, Spring 등)
- **De-Esser**: 2 → 6개
- **신규 카테고리**: Pitch Correction(3), Doubling(3), Saturation(4)
- **장르 Jazz 추가** → 총 42개 조합 (7×2×3)
- ChainResult 동적 스텝 + Pitch/Doubling 렌더링

### 리서치 완료 (별도 커밋 c4ccb15, 8a2a306)
- PLAN.md에 전체 로드맵 문서화
- EchoBoy 30+ 스타일 상세 조사
- 18개 리버브 플러그인 장르별 세팅
- Cubase 프리셋 형식 조사 (.trackpreset=XML, .vstpreset=바이너리, MIDI Remote API 한계)

## 다음 작업: Phase 2 — UI/UX 개선 (v0.3)

PLAN.md의 "Phase 2" 섹션 참고. 우선순위:

### 1. 인터랙티브 EQ 그래프
- 현재: 정적 SVG 폴리라인
- 목표: 밴드 포인트 드래그 → 주파수/게인 실시간 업데이트
- 기술: React SVG 이벤트 핸들링 (onMouseDown/Move/Up)
- 파일: `frontend/src/components/EQDisplay.jsx`

### 2. 시그널 플로우 다이어그램 개선
- Insert vs Send 경로 시각적 분리
- 노드 클릭 → 해당 섹션 스크롤
- 파일: `frontend/src/components/ChainResult.jsx`

### 3. 즐겨찾기 / 히스토리
- LocalStorage 기반
- 최근 10개 체인 히스토리
- 즐겨찾기 저장/불러오기

### 4. 다크/라이트 모드 토글
- CSS 변수 기반 테마 전환
- 파일: `frontend/src/styles/index.css`

## 파일 구조

```
frontend/
  src/
    App.jsx                    ← 메인 (상태관리: genre/vocalType/mood/chain)
    main.jsx                   ← 엔트리
    components/
      ChainSelector.jsx        ← 장르/보컬/분위기 버튼 선택
      ChainResult.jsx          ← 결과 (시그널 플로우 + 플러그인 카드들)
      EQDisplay.jsx            ← SVG EQ 그래프 + 밴드 테이블
    data/
      chains.js                ← 매트릭스 + generateChain() + 장르/보컬/분위기 상수
      eq-presets.js            ← EQ 프리셋 20개
      comp-presets.js          ← 컴프레서 프리셋 10개
      delay-presets.js         ← 딜레이 프리셋 12개 (EchoBoy)
      reverb-presets.js        ← 리버브 프리셋 18개
      effect-presets.js        ← De-Esser(6) + Saturation(4) + Pitch(3) + Doubling(3)
    styles/
      index.css                ← 다크 테마 CSS (CSS 변수 기반)
```

## 빌드/실행

```bash
cd frontend
npm install
npm run dev     # 개발 서버 (localhost:5173)
npm run build   # 프로덕션 빌드
```
