import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.inner}>
        <h1 className={styles.name}>
          김진희<span className={styles.dot}>·</span><span className={styles.sub}>브랜드 마케터</span>
        </h1>
        <p className={styles.bio}>
          브랜드의 서비스 접점·콘텐츠·파트너십을 소비자가 참여하고 기억하는 경험으로 전환해온 브랜드 마케터입니다. 에이전시와 인하우스를 아우르는 11년+ 경력으로, F&B·항공·라이프스타일 카테고리의 캠페인 기획부터 실행, 성과 연결까지 직접 리드해왔습니다.
        </p>
        <div className={styles.btns}>
          <a href="#work" className={styles.btnPrimary}>프로젝트 보기</a>
          <a href="#contact" className={styles.btnGhost}>연락하기</a>
        </div>
      </div>
    </section>
  )
}
