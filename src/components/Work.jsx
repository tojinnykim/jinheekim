import { useState, useEffect } from 'react'
import { projects } from '../data/projects'
import ProjectModal from './ProjectModal'
import styles from './Work.module.css'

const base = import.meta.env.BASE_URL

const CAT_LABEL = {
  brand: 'Brand',
  content: 'Content',
  growth: 'Performance',
}

function getFirstCat(category) {
  return Array.isArray(category) ? category[0] : category
}

function matchesFilter(project, filter) {
  if (filter === 'all') return true
  return Array.isArray(project.category)
    ? project.category.includes(filter)
    : project.category === filter
}

export default function Work({ filter = 'all' }) {
  const [selectedId, setSelectedId] = useState(null)

  const filtered = projects.filter(p => matchesFilter(p, filter))
  const selectedProject = projects.find(p => p.id === selectedId)

  useEffect(() => {
    document.body.style.overflow = selectedId ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selectedId])

  return (
    <section className={styles.work} id="work">
      <div className={styles.secLabel}>Projects</div>

      <div className={styles.grid}>
        {filtered.map(project => {
          const catId = getFirstCat(project.category)
          const catLabel = CAT_LABEL[catId] || catId
          return (
            <div
              key={project.id}
              className={styles.card}
              onClick={() => setSelectedId(project.id)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && setSelectedId(project.id)}
            >
              <div className={styles.cardImg}>
                <img
                  src={base + project.thumbnail.replace(/^\//, '')}
                  alt={project.title}
                />
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardMeta}>
                  <span className={styles.tag}>{catLabel}</span>
                  <span className={styles.client}>{project.client} · {project.period}</span>
                </div>
                <div className={styles.cardTitle}>{project.title}</div>
                {project.subtitle && (
                  <div className={styles.cardSub}>{project.subtitle}</div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedId(null)}
        />
      )}
    </section>
  )
}
