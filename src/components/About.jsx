import { career, education } from '../data/projects'
import styles from './About.module.css'

const expertise = [
  {
    num: '01',
    title: '브랜드 캠페인 전략 수립·운영',
    desc: '브랜드 인지도·선호도 목표로 멀티채널 캠페인 기획·실행',
  },
  {
    num: '02',
    title: '콘텐츠·IP·아티스트 기반 브랜드 커뮤니케이션',
    desc: '아티스트·게임 IP·컬처/팬덤 행사를 브랜드 경험과 연결해 소비자 참여·확산 유도',
  },
  {
    num: '03',
    title: '서비스 접점 기반 브랜드 경험 설계 및 성과 관리',
    desc: '공항·기내·디지털 접점을 통합해 브랜드 메시지 구현 및 지표 기반 성과 최적화',
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
