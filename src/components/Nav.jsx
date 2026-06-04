import styles from './Nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <a href="#top" className={styles.logo}>
        <img src="/images/profile.png" alt="김진희" className={styles.profileImg} />
      </a>
      <ul className={styles.links}>
        <li><a href="#about">소개</a></li>
        <li><a href="#work">프로젝트</a></li>
        <li><a href="#contact">연락</a></li>
      </ul>
    </nav>
  )
}
