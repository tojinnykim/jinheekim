import { useState, useEffect } from 'react'
import { projects, categories } from '../data/projects'
import ProjectCard from './ProjectCard'
import ProjectModal from './ProjectModal'
import styles from './Work.module.css'

const ALL_TAB = { id: 'all', label: '전체' }
const allCategories = [ALL_TAB, ...categories]

export default function Work() {
  const [activeTab, setActiveTab] = useState('all')
  const [selectedId, setSelectedId] = useState(null)

  const filtered = activeTab === 'all'
    ? projects
    : projects.filter((p) => Array.isArray(p.category) ? p.category.includes(activeTab) : p.category === activeTab)

  const selectedProject = projects.find((p) => p.id === selectedId)

  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [selectedId])

  const handleTabChange = (id) => {
    setActiveTab(id)
    setSelectedId(null)
  }

  return (
    <section className={styles.work} id="work">
      <div className={styles.sectionLabel}>프로젝트</div>
      <div className={styles.tabs}>
        {allCategories.map((cat) => (
          <button
            key={cat.id}
            className={`${styles.tab} ${activeTab === cat.id ? styles.tabActive : ''}`}
            onClick={() => handleTabChange(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <div className={styles.grid}>
        {filtered.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            isSelected={selectedId === project.id}
            onSelect={() => setSelectedId(project.id)}
          />
        ))}
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
