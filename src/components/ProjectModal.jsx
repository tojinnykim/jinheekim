import { useEffect } from 'react'
import styles from './ProjectModal.module.css'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  if (!project) return null

  return (
    <div className={styles.overlay} onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className={styles.modal}>

        {/* 헤더: 타이틀 + X 버튼 */}
        <div className={styles.header}>
          <div>
            <div className={styles.client}>{project.client} · {project.period}</div>
            <div className={styles.title}>{project.title}</div>
          </div>
          <button className={styles.close} onClick={onClose} aria-label="닫기">×</button>
        </div>

        <div className={styles.body}>
          {/* 왼쪽: 텍스트 */}
          <div className={styles.left}>
            {project.links && project.links.length > 0 && (
              <div className={styles.links}>
                {project.links.map((l, i) => (
                  <a key={i} href={l.url} target="_blank" rel="noreferrer" className={styles.link}>
                    {l.label} →
                  </a>
                ))}
              </div>
            )}
            <div className={styles.section}>
              <div className={styles.sectionLabel}>문제 인식</div>
              <ul className={styles.list}>
                {project.problem.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            </div>
            <div className={styles.section}>
              <div className={styles.sectionLabel}>해결 전략</div>
              <ul className={styles.list}>
                {project.strategy.map((s, i) => <li key={i}>{s}</li>)}
              </ul>
            </div>
            <div className={styles.section}>
              <div className={styles.sectionLabel}>결과 및 성과</div>
              <ul className={styles.list}>
                {project.impact.map((im, i) => <li key={i}>{im}</li>)}
              </ul>
            </div>
            {/* 기여도 배지: 결과 및 성과 하단 */}
            <div className={styles.contrib}>기여도 {project.contribution}%</div>
          </div>

          {/* 오른쪽: 이미지 세로 1열 */}
          <div className={styles.right}>
            {project.images.map((img, i) => (
              <div key={i} className={styles.imgSlot}>
                <img src={img} alt={`${project.title} 이미지 ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
