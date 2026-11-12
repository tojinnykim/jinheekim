import { career } from '../data/projects'
import styles from './About.module.css'

const expertise = [
  {
    num: '01',
    title: '통합 브랜드 캠페인 기획',
    desc: '메시지, 고객 접점, 미디어 채널을 연결해 인지도·참여·전환을 고려한 캠페인 설계',
  },
  {
    num: '02',
    title: '브랜드 콘텐츠 경험 설계',
    desc: '영상, 소셜, 기내, 매장, 이벤트 접점에서 소비자가 기억할 수 있는 브랜드 콘텐츠 구현',
  },
  {
    num: '03',
    title: '데이터 기반 성과 개선',
    desc: 'ROAS, CVR, CPA, CTR, CPC 등 핵심 지표를 바탕으로 효율 분석 및 개선 방향 도출',
  },
]

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.secLabel}>About</div>
      <h1 className={styles.heroLine}>브랜드와 사람 사이의<br />접점을 만듭니다.</h1>
      <p className={styles.heroBio}>
        소비자가 참여하고 기억하는 브랜드 경험을 만들어온 마케터입니다. 에이전시와 인하우스를 넘나들며 11년+의 경력을 쌓았고, 항공·럭셔리·뷰티·라이프스타일 분야에서 캠페인 기획부터 실행, 성과 측정까지 직접 리드해왔습니다.
      </p>

      <div className={styles.expGrid}>
        {expertise.map(e => (
          <div key={e.num}>
            <div className={styles.expNum}>{e.num}</div>
            <div className={styles.expTitle}>{e.title}</div>
            <div className={styles.expDesc}>{e.desc}</div>
          </div>
        ))}
      </div>

      <div className={styles.careerBlock}>
        {career.map(c => (
          <div key={c.period} className={styles.careerRow}>
            <span className={styles.careerPeriod}>{c.period}</span>
            <div>
              <div className={styles.careerCompany}>{c.company}</div>
              <div className={styles.careerRole}>{c.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
