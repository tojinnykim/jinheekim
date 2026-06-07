import styles from './Hero.module.css'

const base = import.meta.env.BASE_URL

export default function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.inner}>
        <img src={base + 'images/jh.png'} alt="김진희" className={styles.profileImg} />
        <h1 className={styles.name}>
          김진희<span className={styles.dot}>·</span><span className={styles.sub}>브랜드 마케터</span>
        </h1>
        <p className={styles.bio}>
          소비자가 참여하고 기억하는 브랜드 경험을 만들어온 마케터입니다. 에이전시와 인하우스를 넘나들며 11년+의 경력을 쌓았고, 항공·럭셔리·뷰티·라이프스타일 분야에서 캠페인 기획부터 실행, 성과 측정까지 직접 리드해왔습니다.
        </p>
        <div className={styles.btns}>
          <a href="#work" className={styles.btnPrimary}>프로젝트 보기</a>
          <a href="#contact" className={styles.btnGhost}>연락하기</a>
        </div>
      </div>
    </section>
  )
}
