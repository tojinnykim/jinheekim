import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import styles from './App.module.css'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Contact />
      </main>
      <footer className={styles.footer}>
        <span className={styles.name}>김진희 포트폴리오</span>
        <span className={styles.copy}>© 2026</span>
      </footer>
    </>
  )
}
