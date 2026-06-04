import styles from './ProjectCard.module.css'

export default function ProjectCard({ project, isSelected, onSelect }) {
  return (
    <div
      className={`${styles.card} ${isSelected ? styles.selected : ''}`}
      onClick={onSelect}
    >
      <div className={styles.thumb}>
        <img src={project.thumbnail} alt={project.title} />
      </div>
      <div className={styles.body}>
        <div className={styles.client}>{project.client}</div>
        <div className={styles.title}>{project.title}</div>
        <div className={styles.period}>{project.period}</div>
        <div className={styles.more}>
          <span className={styles.dot}></span>
          자세히 보기
        </div>
      </div>
    </div>
  )
}
