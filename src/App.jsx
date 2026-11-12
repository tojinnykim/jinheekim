import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import styles from './App.module.css'

export default function App() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <div className={styles.layout}>
      <Nav dark={dark} onToggle={() => setDark(d => !d)} />
      <main className={styles.main}>
        <About />
        <Work />
        <Contact />
      </main>
    </div>
  )
}
