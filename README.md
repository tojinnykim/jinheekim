# Jinhee Kim — Portfolio

React + Vite 기반 포트폴리오 사이트입니다.

## 파일 구조

```
portfolio/
├── public/
│   └── images/          ← 프로젝트 이미지 (여기서 교체)
│       ├── obihiro.jpg
│       ├── children_safety.jpg
│       ├── rescue_dog.jpg
│       ├── francoispet.jpg
│       ├── haagendazs.jpg
│       ├── lufthansa.jpg
│       ├── cnp_panasonic.jpg
│       ├── lg_g3.jpg
│       ├── drmamma.jpg
│       ├── 24s.jpg
│       ├── british_council.jpg
│       └── panasonic.jpg
├── src/
│   ├── data/
│   │   └── projects.js  ← 텍스트 수정은 여기서
│   └── components/
└── index.html
```

## 이미지 교체 방법

`public/images/` 폴더의 파일을 같은 이름으로 덮어쓰면 됩니다.
파일명을 바꾸고 싶다면 `src/data/projects.js`에서 해당 프로젝트의 `image` 경로를 수정하세요.

## 텍스트 수정 방법

`src/data/projects.js` 파일 하나에서 모든 텍스트를 관리합니다:
- 프로젝트 제목, 클라이언트, KPI 배지
- Challenge / Strategy / Impact 내용
- 성과 숫자 배너
- 커리어 타임라인

## Lovable에서 실행

1. 이 폴더 전체를 GitHub에 업로드
2. Lovable에서 GitHub repository 연결
3. 자동으로 빌드 및 배포됩니다

## 로컬 실행

```bash
npm install
npm run dev
```
