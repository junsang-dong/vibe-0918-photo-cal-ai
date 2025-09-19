# 🍎 Cal AI - 음식 칼로리 추적기

Google의 Gemini AI를 사용하여 음식 사진을 분석하고 상세한 영양 정보를 제공하는 AI 기반 웹 애플리케이션입니다.

## ✨ 주요 기능

- 📸 **이미지 업로드**: 드래그 앤 드롭 또는 클릭으로 음식 사진 업로드
- 🤖 **AI 분석**: Google Gemini AI로 정확한 음식 인식
- 📊 **영양 정보**: 칼로리, 단백질, 탄수화물, 지방 등 상세 분석
- 🏥 **건강 점수**: AI가 생성하는 건강 등급 (1-10점)
- 📱 **반응형 디자인**: 데스크톱과 모바일에서 완벽하게 작동
- 🎨 **모던 UI**: Cal AI 앱에서 영감을 받은 아름다운 그라디언트 디자인

## 🚀 시작하기

### 필요 조건

- Node.js (v16 이상)
- npm 또는 yarn
- Google Gemini API 키

### 설치 방법

1. 저장소 클론:
```bash
git clone <your-repo-url>
cd vibe-0918-photo-cal-ai
```

2. 의존성 설치:
```bash
npm install
```

3. 환경 변수 설정:
루트 디렉토리에 `.env.local` 파일 생성:
```bash
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

4. Gemini API 키 발급:
- [Google AI Studio](https://aistudio.google.com/app/apikey) 방문
- 새 API 키 생성
- `.env.local` 파일에 복사하여 붙여넣기

5. 개발 서버 시작:
```bash
npm run dev
```

6. 브라우저에서 `http://localhost:5173` 접속

## 🛠️ 기술 스택

- **프론트엔드**: React 18 + Vite
- **AI**: Google Gemini AI (gemini-1.5-flash)
- **스타일링**: CSS3 최신 기능
- **패키지 매니저**: npm

## 📱 사용법

1. **사진 업로드**: "이미지 선택" 클릭 또는 음식 사진을 드래그 앤 드롭
2. **AI 분석**: Gemini AI가 음식을 분석할 때까지 대기
3. **결과 확인**: 상세한 영양 정보, 건강 점수, 성분 확인
4. **진행 추적**: 정보를 활용하여 건강한 식단 선택

## 🎯 지원 기능

- 음식 인식 및 식별
- 칼로리 추정
- 대량 영양소 분석 (단백질, 탄수화물, 지방)
- 미량 영양소 정보 (섬유질, 설탕)
- 성분 식별
- 알레르기 원료 감지
- 식사 유형 분류
- 건강 점수 평가

## 🔧 설정

이 앱은 다음 환경 변수를 사용합니다:

- `VITE_GEMINI_API_KEY`: Google Gemini API 키

## 📄 라이선스

이 프로젝트는 오픈 소스이며 [MIT License](LICENSE) 하에 제공됩니다.

## 🤝 기여하기

기여, 이슈 보고, 기능 요청을 환영합니다! 이슈 페이지를 확인해보세요.

## 📞 지원

질문이나 도움이 필요하시면 GitHub에서 이슈를 생성해주세요.

---

React와 Gemini AI로 ❤️을 담아 제작되었습니다