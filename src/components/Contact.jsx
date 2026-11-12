import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.secLabel}>Contact</div>
      <p className={styles.heading}>새로운 프로젝트나 협업에 대해 이야기해요.</p>
      <a href="mailto:to.jinnykim@gmail.com" className={styles.emailLink}>
        to.jinnykim@gmail.com
      </a>
      <div className={styles.links}>
        <a
          href="https://linkedin.com/in/jinheekim128"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          LinkedIn →
        </a>
      </div>
    </section>
  )
}
