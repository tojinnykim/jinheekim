import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.grid}>
        <div className={styles.item}>
          <span className={styles.label}>이메일</span>
          <a href="mailto:to.jinnykim@gmail.com" className={styles.val}>to.jinnykim@gmail.com</a>
        </div>
        <div className={styles.item}>
          <span className={styles.label}>링크드인</span>
          <a href="https://linkedin.com/in/jinheekim128" className={styles.val} target="_blank" rel="noreferrer">
            linkedin.com/in/jinheekim128
          </a>
        </div>
      </div>
    </section>
  )
}
