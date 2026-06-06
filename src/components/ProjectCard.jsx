import styles from './ProjectCard.module.css'

const base = import.meta.env.BASE_URL

export default function ProjectCard({ project, isSelected, onSelect }) {
  return (
    <div
      className={`${styles.card} ${isSelected ? styles.selected : ''}`}
      onClick={onSelect}
    >
      <div className={styles.thumb}>
        <img src={base + project.thumbnail.replace(/^\//, '')} alt={project.title} />
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
