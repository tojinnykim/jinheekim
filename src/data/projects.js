export const categories = [
  { id: 'brand', label: '브랜드 캠페인' },
  { id: 'content', label: '콘텐츠·채널' },
  { id: 'growth', label: '디지털 퍼포먼스' },
]

export const projects = [
  {
    id: 'osaka',
    category: 'brand',
    client: '에어로케이항공',
    title: '청주~오사카 신규 취항 캠페인',
    period: '2025.01 – 2025.03',
    contribution: 80,
    thumbnail: '/images/thumbnail_0000s_0000_019.jpg',
    images: [
      '/images/project_imgs_0000s_0001_osaka1.jpg',
      '/images/project_imgs_0000s_0000_osaka2.jpg',
    ],
    links: [],
    problem: [],
    strategy: [],
    impact: [],
  },
  {
    id: 'obihiro',
    category: 'brand',
    client: '에어로케이항공',
    title: '청주~오비히로 신규 취항 캠페인',
    period: '2025.05 – 2025.07',
    contribution: 80,
    thumbnail: '/images/thumb_obihiro.jpg',
    images: [
      '/images/project_imgs_0000s_0025_obihiro1.jpg',
      '/images/project_imgs_0000s_0024_obihiro2.jpg',
    ],
    links: [
      { label: '캠페인 영상 보기', url: 'https://www.instagram.com/aero_k_airline/' },
      { label: 'Sound of Obihiro', url: 'https://www.instagram.com/aero_k_airline/' },
      { label: '시티 에디터 오비히로편', url: 'https://www.instagram.com/aero_k_airline/' },
    ],
    problem: [
      '홋카이도는 삿포로라는 고정 인식 속, 오비히로는 삿포로 인지도 대비 최하위권',
      '단순 노선 홍보로는 초기 수요 창출에 한계',
      '목적지를 새롭게 각인시킬 브랜드 캠페인 필요',
    ],
    strategy: [
      '"진짜 홋카이도는 오비히로" 메시지 축 수립 및 캠페인 방향 정의',
      '오비히로의 사람·자연·문화를 영상·기내 매거진·소셜·참여형 콘텐츠로 일관 전개, 목적지 인지·선호 형성',
      '캠페인 사이트·청주공항 팝업·Sound of Obihiro·시티 에디터 오비히로편 연계로 발견 경로 확장',
    ],
    impact: [
      '탑승률 목표(60%+) 초과 달성',
      '캠페인 영상 조회수 689,300회',
      '이벤트 참여자 18,198명',
      '캠페인 기간 신규 회원가입 증가',
    ],
  },
  {
    id: 'thama',
    category: 'brand',
    client: '에어로케이항공',
    title: 'Artist on Board with THAMA',
    period: '2024.09',
    contribution: 85,
    thumbnail: '/images/thumb_thama.jpg',
    images: [
      '/images/project_imgs_0000s_0021_thama1.jpg',
      '/images/project_imgs_0000s_0021_thama2.jpg',
    ],
    links: [
      { label: '인스타그램 콘텐츠 보기', url: 'https://www.instagram.com/aero_k_airline/' },
    ],
    problem: [
      '기내 시간이 이동·안내 중심으로만 인식 — 탑승객 체류 시간을 기억에 남는 콘텐츠 경험으로 확장 필요',
      '아티스트 협업을 단순 노출이 아닌 브랜드 경험으로 연결할 구조 필요',
    ],
    strategy: [
      '아티스트 타이틀곡 Mileage와 에어로케이의 이동·여행 브랜드 아이덴티티 연결 지점 발굴',
      '아티스트 음악·기내 안내방송·기내 리플릿을 하나의 탑승 경험으로 설계·제작',
      '탑승객이 기내에서 음악과 브랜드 메시지를 자연스럽게 경험하도록 접점 구성',
    ],
    impact: [
      '인스타그램 콘텐츠 조회수 40,000+ 달성',
      '기내 접점을 활용해 음악·아티스트·탑승 경험을 하나의 브랜드 경험으로 연결',
    ],
  },
  {
    id: 'children_safety',
    category: 'brand',
    client: '에어로케이항공',
    title: '어린이 항공 안전 캠페인',
    period: '2024.09 · 2025.06',
    contribution: 80,
    thumbnail: '/images/thumb_children_safety.jpg',
    images: [
      '/images/project_imgs_0000s_0019_children1.jpg',
      '/images/project_imgs_0000s_0019_children2.jpg',
    ],
    links: [
      { label: '소셜 콘텐츠 보기', url: 'https://www.instagram.com/aero_k_airline/' },
    ],
    problem: [
      '항공 안전 정보는 어린이 승객에게 실질적으로 전달되기 어려운 구조',
      '브랜드 호감도 제고와 안전 인식 확산을 동시에 달성할 방법 필요',
    ],
    strategy: [
      '안전 메시지를 어린이 눈높이 콘텐츠로 전환하는 방향으로 전략 수립',
      '현직 객실 승무원 경험 기반 어린이 항공 안전 도서 기획·제작',
      '전국 온·오프라인 서점 출시 및 전 노선 기내 전 좌석 탑재',
      '도서 출시 연계 소셜 콘텐츠·어린이 대상 강연 프로그램으로 확장',
    ],
    impact: [
      '국토교통부 장관 표창 수상(2024)',
      '초판 완판 후 2쇄 발행',
      '콘텐츠 영상 조회수 39,000+',
    ],
  },
  {
    id: 'rescue_dog',
    category: 'brand',
    client: '에어로케이항공',
    title: '유기견 입양 활성화 캠페인',
    period: '2023.12',
    contribution: 80,
    thumbnail: '/images/thumb_rescue_dog.jpg',
    images: [
      '/images/project_imgs_0000s_0017_181pets1.jpg',
      '/images/project_imgs_0000s_0017_181pets2.jpg',
    ],
    links: [
      { label: '캠페인 페이지 보기', url: 'https://www.instagram.com/aero_k_airline/' },
    ],
    problem: [
      '반려동물 동반 탑승객 증가 — 펫 친화 브랜드로서의 포지셔닝 강화 필요',
      '브랜드 관점에서 유기동물 입양 인식 개선 캠페인 필요성 대두',
    ],
    strategy: [
      '국내 최대 반려동물 입양 플랫폼 포인핸드와 협업, 실제 입양 가족의 이야기를 기내 180개 좌석 콘텐츠로 전달',
      '기내 좌석 헤드레스트·탑승권·안내방송 등 전 접점을 캠페인 미디어로 전환',
      '기부 연계 프로그램·반려동물 테마 기내 플레이리스트로 감성적 브랜드 경험 확장',
    ],
    impact: [
      '기내 전 접점 캠페인 미디어화 실현',
      '언론·소셜 자발적 확산',
      '펫 친화 브랜드 포지셔닝 강화',
    ],
  },
  {
    id: 'fandom',
    category: 'brand',
    client: '에어로케이항공',
    title: '팬덤 기반 이벤트 부스 운영',
    period: '2024.06 · 2024.11',
    contribution: 75,
    thumbnail: '/images/thumb_fandom.jpg',
    images: [
      '/images/project_imgs_0000s_0009_umf1.jpg',
      '/images/project_imgs_0000s_0008_umf2.jpg',
    ],
    links: [
      { label: '인스타그램 보기', url: 'https://www.instagram.com/aero_k_airline/' },
    ],
    problem: [
      '항공 이용 맥락 밖에서 브랜드 인지·호감 확장 필요',
      '페스티벌 관객·게임 팬덤별 참여 동기에 맞는 경험 설계 필요',
    ],
    strategy: [
      '행사별 관객 특성과 브랜드 접점 분석, 참여 구조 기획',
      'UMF KOREA: 페스티벌 에너지 기반 룰렛형 항공권 즉시 증정 부스 구성',
      '블루 아카이브 3주년: 게임 팬덤 몰입형 에어로케이 브랜드 부스 경험 설계',
      '협력사·유관부서·현장 인력 조율 및 현장 이슈 대응',
    ],
    impact: [
      'UMF KOREA 2024 부스 방문 5,000명+',
      '블루 아카이브 3주년 부스 방문 2,000명+',
      '항공 맥락 밖에서 자연스러운 오프라인 브랜드 접점 구현',
    ],
  },
  {
    id: 'city_editor',
    category: 'brand',
    client: '에어로케이항공',
    title: '시티 에디터 — 참여형 트래블 콘텐츠',
    period: '2024.06 · 2025.06',
    contribution: 80,
    thumbnail: '/images/thumb_city_editor.jpg',
    images: [
      '/images/project_imgs_0000s_0015_cityeditor1.jpg',
      '/images/project_imgs_0000s_0015_cityeditor2.jpg',
    ],
    links: [
      { label: '오비히로편 보기', url: 'https://www.instagram.com/aero_k_airline/' },
      { label: '도쿄편 보기', url: 'https://www.instagram.com/aero_k_airline/' },
    ],
    problem: [
      '브랜드 일방 소개만으로는 취항지 관심 확장에 한계',
      '실제 여행자의 시선으로 도시를 소개하는 참여형 구조 필요',
    ],
    strategy: [
      '프로그램 콘셉트·콘텐츠 프레임워크 설계 및 모집·운영 구조 기획',
      '오비히로편: JR 홋카이도 레일패스 협업, 뚜벅이 여행자 콘셉트 인플루언서 콘텐츠 발행',
      '도쿄편: 시티호퍼스 공동 주최·운영',
    ],
    impact: [
      '오비히로편 지원자 1,500명+',
      '도쿄편 응모 700명',
      '취항지 매력을 소비자 참여형 콘텐츠로 확장',
    ],
  },
  {
    id: 'pet_service',
    category: 'brand',
    client: '에어로케이항공',
    title: '펫 서비스 브랜딩 & 펫 캐리어 제작',
    period: '2023.09',
    contribution: 80,
    thumbnail: '/images/thumb_pet_service.jpg',
    images: [
      '/images/project_imgs_0000s_0013_petcarrier1.jpg',
      '/images/project_imgs_0000s_0013_petcarrier2.jpg',
    ],
    links: [],
    problem: [
      '반려동물 동반 탑승 수요 증가에 따라 펫 서비스 전반의 브랜드 경험 개선 필요',
      '기존 펫 정책·서비스가 브랜드 메시지와 연결되지 않아 차별화 한계 존재',
    ],
    strategy: [
      '펫 캐리어 콘셉트 기획·기내 테스트·출시 조율 수행',
      '항공사 최초 반려동물 허용 무게 10kg 개정(2024.02) 추진',
      '임직원 펫 용어 교육·대처법 훈련 연계로 내부 브랜딩 확장',
    ],
    impact: [
      '펫 서비스 정책 개정으로 반려동물 동반 브랜드 경험 확장',
      '펫 서비스 정책·콘텐츠·내부 브랜딩을 연결한 일관된 브랜드 경험 구현',
    ],
  },
  {
    id: 'family_day',
    category: 'brand',
    client: '에어로케이항공',
    title: '가정의 달 캠페인',
    period: '2025.05',
    contribution: 80,
    thumbnail: '/images/thumb_family_day.jpg',
    images: [
      '/images/project_imgs_0000s_0011_family1.jpg',
    ],
    links: [],
    problem: [
      '가정의 달을 계기로 임직원과 브랜드를 연결하는 내부 브랜딩 기회 필요',
      '기내 접점을 활용한 감성적 브랜드 경험 설계 필요',
    ],
    strategy: [
      '가정의 달 기념 임직원 가족 녹음 환영 인사 기내 방송 송출 기획·운영',
      '임직원 자녀 그림 기내 전 좌석 전시 기획·제작 조율',
    ],
    impact: [
      '기내 접점을 활용한 내부 브랜딩·감성 캠페인 실현',
      '임직원 참여 기반 브랜드 경험 구현',
    ],
  },
  {
    id: 'sound_obihiro',
    category: 'brand',
    client: '에어로케이항공',
    title: 'Sound of OBIHIRO / Aero K meets',
    period: '2023.06 · 2025.06',
    contribution: 80,
    thumbnail: '/images/thumb_sound_obihiro.jpg',
    images: [
      '/images/project_imgs_0000s_0023_soundofobihiro1.jpg',
      '/images/project_imgs_0000s_0023_soundofobihiro2.jpg',
    ],
    links: [
      { label: 'Sound of OBIHIRO 보기', url: 'https://www.instagram.com/aero_k_airline/' },
    ],
    problem: [
      '신규 취항지를 단순 판매 메시지가 아닌 콘텐츠 경험으로 전달할 방법 필요',
      '탑승 전후 관심으로 이어지는 목적지 스토리텔링 구조 필요',
    ],
    strategy: [
      '목적지 스토리텔링 콘텐츠 방향 설정 및 제작 파트너 협업',
      'Sound of OBIHIRO: 노천온천·자연 명소 배경 DJ 협업 영상 콘텐츠 기획',
      'Aero K meets 기내 브랜드 매거진: 취항지 지역의 사람·이야기를 담은 시리즈 기획·발행',
    ],
    impact: [
      'Sound of OBIHIRO 조회수 40,000+ 달성',
      '기내 매체·디지털 콘텐츠로 신규 취항지 스토리 전달',
      '목적지 마케팅을 브랜드 콘텐츠 경험으로 확장',
    ],
  },
  {
    id: 'francoispet',
    category: 'brand',
    client: '프랑소와펫',
    title: '오프라인 거점 확장 & 브랜드 경험 표준화',
    period: '2020.09 – 2022.07',
    contribution: 80,
    thumbnail: '/images/thumb_francoispet.jpg',
    images: [
      '/images/project_imgs_0000s_0010_francoispet1.jpg',
    ],
    links: [],
    problem: [
      '프리미엄 펫 시장 내 단순 품질 경쟁을 넘어 브랜드 감도로 차별화하는 전략 필요',
      '이종 산업 협업으로 하이엔드 고객과의 접점 확대 필요',
    ],
    strategy: [
      '백화점 입점·팝업 운영과 매장 가이드 정비로 오프라인 거점 3개에서 11개로 확장 및 브랜드 경험 표준화',
      '자체 브랜드 라인 Natural Gourmet 기획·출시, 제품 개발·SKU 확장·패키지 디자인 디렉팅',
    ],
    impact: [
      '오프라인 거점 3개에서 11개로 확장',
      '자체 브랜드 월 매출 지속 성장',
      '이종 산업 협업으로 하이엔드 고객 접점 확대',
    ],
  },
  {
    id: 'haagendazs',
    category: 'brand',
    client: '하겐다즈 코리아',
    title: '신제품 출시 기념 통합 캠페인',
    period: '2016.01 – 2016.02',
    contribution: 70,
    thumbnail: '/images/thumb_haagendazs.jpg',
    images: [
      '/images/project_imgs_0000s_0006_haggendazs1.jpg',
    ],
    links: [],
    problem: [
      '프리미엄 아이스크림 신제품 출시 시점에 브랜드 관심도와 참여를 빠르게 확대해야 하는 과제',
      '소셜 화제성과 오프라인 브랜드 경험을 함께 강화하는 전략 필요',
    ],
    strategy: [
      '신제품 출시 시즌 타이밍에 맞춰 소셜 화제성과 오프라인 경험을 동시에 확보하는 통합 캠페인 전략 수립',
      '네이버·페이스북·오프라인 팝업 연계 멀티채널 매체 전략 수립 및 예산 운영',
      '채널별 성과 모니터링·분석, 인사이트 도출 및 운영 반영',
    ],
    impact: [
      '팬 증가 목표 205% 초과 달성',
      '소셜 이벤트 참여자 6,729명',
    ],
  },
  {
    id: 'cnp_panasonic',
    category: 'content',
    client: 'CNP 차앤박·파나소닉 코리아',
    title: 'SNS 운영 및 콘텐츠 기획',
    period: '2016.07 – 2018.07',
    contribution: 70,
    thumbnail: '/images/thumb_cnp_panasonic.jpg',
    images: [],
    links: [],
    problem: [
      '브랜드 아이덴티티를 유지하면서 소셜 채널 인지도·참여도 동시 성장 필요',
      '단순 제품 정보 전달을 넘어 지속적인 채널 활성화 구조 구축 필요',
    ],
    strategy: [
      '브랜드별 타깃·포지셔닝 분석 기반 페이스북·인스타그램·블로그 멀티채널 운영',
      'CNP 차앤박: 뷰티 인플루언서·모델 활용 신제품 콘텐츠로 참여율 제고',
      '파나소닉: 시즌·라이프스타일 연계 콘텐츠로 채널 활성화',
    ],
    impact: [
      '파나소닉 인스타그램 팔로워 대폭 성장',
      'CNP 차앤박 팔로워 및 참여율 성장',
    ],
  },
  {
    id: 'lufthansa',
    category: 'content',
    client: '루프트한자 코리아',
    title: '브랜드 콘텐츠 기획 및 채널 운영',
    period: '2015.05 – 2016.07',
    contribution: 70,
    thumbnail: '/images/thumb_lufthansa.jpg',
    images: [
      '/images/project_imgs_0000s_0005_lufthansa1.jpg',
    ],
    links: [],
    problem: [
      '프리미엄 이미지를 유지하면서 디지털 채널 인지도·참여도 동시 성장 필요',
      'SNS와 트래블 매거진을 연계한 지속적 캠페인 허브 플랫폼 구축 필요',
    ],
    strategy: [
      '루프트한자 트래블 매거진 코리아 콘텐츠 기획·제작 (연간 34편 발행)',
      '신규 취항·신규 서비스 등 상품 중심 콘텐츠로 신뢰도 기반 채널 운영',
      '시즌 캠페인으로 소셜-매거진 연계 참여도 강화',
    ],
    impact: [
      '하반기 트래블 매거진 트래픽 대폭 성장',
      '페이스북 팔로워 증가',
    ],
  },
  {
    id: 'lg_g3',
    category: 'content',
    client: 'LG전자',
    title: 'LG G3 글로벌 유튜버 협업 캠페인',
    period: '2014.04 – 2014.07',
    contribution: 50,
    thumbnail: '/images/thumb_lg_g3.jpg',
    images: [
      '/images/project_imgs_0000s_0007_lgg31.jpg',
    ],
    links: [],
    problem: [
      '글로벌 스마트폰 시장에서 LG G3의 핵심 기능을 자연스럽게 전달하는 콘텐츠 필요',
      '카테고리별 글로벌 유튜버를 통한 콘텐츠 확산으로 글로벌 인지도 제고 목표',
    ],
    strategy: [
      '북미·유럽 주요 글로벌 유튜버(Dude Perfect, Mystery Guitar Man, Wong Fu Productions) 섭외·계약·커뮤니케이션 지원',
      '채널별 구독자 특성에 맞춘 소구 포인트·시나리오 기획 및 콘텐츠 품질 관리 참여',
    ],
    impact: [
      '글로벌 누적 조회수 75만+ 달성',
      '이종 산업 인플루언서로 타깃 접점 다변화 및 브랜드 친밀도 강화',
    ],
  },
  {
    id: '24s_maxmara',
    category: 'growth',
    client: '24S · MaxMara',
    title: '럭셔리 이커머스 디지털 광고 운영',
    period: '2019.06 – 2019.12',
    contribution: 70,
    thumbnail: '/images/thumb_24s_maxmara.jpg',
    images: [
      '/images/project_imgs_0000s_0003_24s1.jpg',
    ],
    links: [],
    problem: [
      '럭셔리 브랜드 감도를 유지하면서 실질적 구매 전환 성과 확보 필요',
      '멀티 채널 운영에서 채널별 효율 차이를 데이터 기반으로 최적화하는 구조 필요',
    ],
    strategy: [
      '24S: 네이버 브랜드검색 중심 매체 전략 수립, 고효율 키워드 발굴 및 입찰가 최적화',
      'MaxMara: 네이버·크리테오·유튜브 멀티 채널 운영, 시즌별 크리에이티브 교체 및 지면 최적화',
      '주간 ROAS·CVR·CPA 기반 성과 리포트 작성 및 예산 페이싱 조정',
    ],
    impact: [
      '24S: 클릭률 4배 개선, 브랜드 검색량 증가',
      'MaxMara: 패션 업계 평균 대비 CTR 최대 252% 초과, CPC 최대 54% 절감',
    ],
  },
  {
    id: 'british_council',
    category: 'growth',
    client: '주한영국문화원 어학원',
    title: '온·오프라인 통합 캠페인',
    period: '2018.07 – 2019.12',
    contribution: 70,
    thumbnail: '/images/thumb_british_council.jpg',
    images: [
      '/images/project_imgs_0000s_0002_british1.jpg',
    ],
    links: [],
    problem: [
      '무료 레벨 테스트 예약을 핵심 전환 지표로 설정',
      '브랜드 신뢰도를 유지하면서 광고 효율을 높여야 하는 과제',
    ],
    strategy: [
      '버스 쉘터·스크린도어 등 옥외광고와 디지털을 연계한 온·오프라인 통합 인지도 전략 수립',
      '지역 타깃 기반 디스플레이·검색 광고 병행, 단계별 최적화 실행',
      '브랜드 톤에 맞는 캠페인 페이지 및 소재 기획, 전환 유도 메시지·비주얼 방향 설정',
    ],
    impact: [
      '전환 목표 190% 초과 달성',
      '광고 비용 효율 대폭 개선',
    ],
  },
  {
    id: 'panasonic',
    category: 'growth',
    client: '파나소닉 코리아',
    title: '올림픽 시즌 연계 디지털 캠페인',
    period: '2017.11 – 2018.01',
    contribution: 70,
    thumbnail: '/images/thumb_panasonic.jpg',
    images: [
      '/images/project_imgs_0000s_0004_panasonic1.jpg',
    ],
    links: [],
    problem: [
      '글로벌 브랜드 정체성을 유지하면서 올림픽 시즌 이슈를 활용해 국내 디지털 접점 확대 필요',
      '자발적 참여와 바이럴 유도가 핵심 목표',
    ],
    strategy: [
      '성화봉송 D-100 타이밍을 활용한 대규모 참여형 캠페인 기획·운영',
      '네이버 타임보드 등 주요 지면 집행으로 대규모 노출 확보',
      '캠페인 기간 클릭·참여율 데이터 실시간 모니터링 및 개선안 도출',
    ],
    impact: [
      '예상 클릭 수 목표 초과 달성',
      '데이터 기반 다음 캠페인 개선안 수립',
    ],
  },
]

export const career = [
  { period: '2022.12 – 2025.12', company: '에어로케이항공', role: '브랜드전략팀 선임 매니저' },
  { period: '2020.09 – 2022.07', company: '프랑소와펫', role: '마케팅팀 매니저' },
  { period: '2018.07 – 2019.12', company: '아지앙스코리아', role: '마케팅2팀 대리' },
  { period: '2016.07 – 2018.07', company: '엘에이치', role: '마케팅4팀 대리' },
  { period: '2015.05 – 2016.07', company: '캠페인 유나이티드', role: '기획팀 주임' },
  { period: '2013.08 – 2015.01', company: '프로븐', role: '기획2팀 사원' },
]

export const education = [
  { period: '2020 – 2022', school: 'Academy of Art University', location: 'CA', degree: 'BFA, Advertising', note: '' },
  { period: '2011 – 2012', school: 'School of Visual Arts', location: 'NY', degree: 'Advertising Coursework', note: 'Transferred to AAU 2020' },
  { period: '2009 – 2011', school: 'County College of Morris', location: 'NJ', degree: 'Visual Arts Coursework', note: 'Transferred to SVA 2011' },
]
