import { useState, useEffect } from 'react'
import { projects, categories } from '../data/projects'
import ProjectModal from './ProjectModal'
import styles from './Work.module.css'

const base = import.meta.env.BASE_URL

const ALL_TAB = { id: 'all', label: '전체' }
const allTabs = [ALL_TAB, ...categories]

const CAT_SHORT = {
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

export default function Work() {
  const [activeTab, setActiveTab] = useState('all')
  const [selectedId, setSelectedId] = useState(null)

  const filtered = projects.filter(p => matchesFilter(p, activeTab))
  const selectedProject = projects.find(p => p.id === selectedId)

  useEffect(() => {
    document.body.style.overflow = selectedId ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selectedId])

  return (
    <section className={styles.work} id="work">
      <div className={styles.secLabel}>Projects</div>

      <div className={styles.tabs}>
        {allTabs.map(tab => (
          <button
            key={tab.id}
            className={`${styles.tab} ${activeTab === tab.id ? styles.tabActive : ''}`}
            onClick={() => { setActiveTab(tab.id); setSelectedId(null) }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={styles.list}>
        {filtered.map(project => {
          const catId = getFirstCat(project.category)
          const catLabel = CAT_SHORT[catId] || catId
          return (
            <div
              key={project.id}
              className={styles.row}
              onClick={() => setSelectedId(project.id)}
              role="button"
              tabIndex={0}
              onKeyDown={e => e.key === 'Enter' && setSelectedId(project.id)}
            >
              <div className={styles.rowText}>
                <div className={styles.rowMeta}>
                  <span className={styles.tag}>{catLabel}</span>
                  <span className={styles.client}>{project.client} · {project.period}</span>
                </div>
                <div className={styles.rowTitle}>{project.title}</div>
              </div>
              <div className={styles.thumb}>
                <img
                  src={base + project.thumbnail.replace(/^\//, '')}
                  alt={project.title}
                />
              </div>
              <span className={styles.rowArrow}>→</span>
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
