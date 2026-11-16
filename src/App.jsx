import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import styles from './App.module.css'

export default function App() {
  const [dark, setDark] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <div className={styles.layout}>
      <Nav
        dark={dark}
        onToggle={() => setDark(d => !d)}
        filter={activeFilter}
        onFilterChange={setActiveFilter}
      />
      <main className={styles.main}>
        <About />
        <Work filter={activeFilter} />
        <Contact />
      </main>
    </div>
  )
}
