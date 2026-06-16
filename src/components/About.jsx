import { career, education } from '../data/projects'
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
      <div className={styles.sectionLabel}>소개</div>

      <div className={styles.expGrid}>
        {expertise.map((e) => (
          <div key={e.num} className={styles.expBlock}>
            <div className={styles.expNum}>{e.num}</div>
            <div className={styles.expTitle}>{e.title}</div>
            <div className={styles.expDesc}>{e.desc}</div>
          </div>
        ))}
      </div>

      <div className={styles.twoCol}>
        <div>
          <div className={styles.colTitle}>경력</div>
          <ul className={styles.list}>
            {career.map((c) => (
              <li key={c.period} className={styles.row}>
                <span className={styles.period}>{c.period}</span>
                <span className={styles.company}>{c.company}</span>
                <span className={styles.role}>{c.role}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className={styles.colTitle}>학력</div>
          <ul className={styles.list}>
            {education.map((e) => (
              <li key={e.period} className={styles.row}>
                <span className={styles.period}>{e.period}</span>
                <span className={styles.company}>{e.school} · {e.location}</span>
                <span className={styles.role}>{e.degree}{e.note ? ` (${e.note})` : ''}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
