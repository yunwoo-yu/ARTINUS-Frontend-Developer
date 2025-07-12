# Artinus

알티너스 과제 제출 (유윤우)

## 개발환경

- **Node.js**: 20+ 버전 권장
- **Package Manager**: pnpm
- **Framework**: React 19.1.0
- **Build Tool**: Vite 7.0.3
- **TypeScript**: 5.8.3

### 주요 기술 스택

- **Frontend**: React 19.1.0, TypeScript
- **Routing**: React Router 7.6.3
- **State Management**: TanStack React Query 5.81.5
- **HTTP Client**: Axios 1.10.0
- **UI Components**: Lucide React (아이콘)
- **Date Handling**: Day.js 1.11.13
- **Styling**: Tailwind CSS 4.1.11

## 개발 내용

### 주요 기능

1. **상품 목록 페이지**

   - 상품 리스트 조회 및 표시
   - 반응형 레이아웃
   - 상품 이미지, 제목, 가격, 평점 표시

2. **상품 상세 페이지**
   - 상품 상세 정보 조회
   - 반응형 레이아웃
   - 사용자 리뷰 섹션

### 프로젝트 구조

```
src/
├── components/          # 공통 컴포넌트
├── features/           # 기능별 컴포넌트
│   ├── Detail/         # 상품 상세 관련
│   └── Products/       # 상품 목록 관련
├── pages/              # 페이지 컴포넌트
│   ├── DetailPage/
│   │   └── components/ # 상품 상세 페이지 컴포넌트
│   ├── HomePage/
│   │   └── components/ # 상품 목록 페이지 컴포넌트
│   ├── PageLayout.tsx
│   └── Routes.tsx
├── hooks/              # 커스텀 훅
├── utils/              # 유틸리티 함수
└── constants/          # 상수 정의
```

## 빌드 및 실행방법

### 설치

```bash
# pnpm 사용
pnpm install

```

### 개발 서버 실행

```bash
# pnpm 사용
pnpm dev
```

개발 서버가 실행되면 `http://localhost:5173`에서 애플리케이션을 확인할 수 있습니다.

### 빌드

```bash
# pnpm 사용
pnpm build
```

빌드된 파일은 `dist/` 폴더에 생성됩니다.

### 프리뷰

```bash
# pnpm 사용
pnpm preview
```

빌드된 애플리케이션을 로컬에서 미리 볼 수 있습니다.

## 개발 스크립트

- `dev`: 개발 서버 실행
- `build`: TypeScript 컴파일 후 Vite 빌드
- `preview`: 빌드된 애플리케이션 미리보기

## 배포 주소

https://yunwoo-yu.github.io/ARTINUS-Frontend-Developer/
