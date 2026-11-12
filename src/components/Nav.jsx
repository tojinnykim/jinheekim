import { useState, useEffect } from 'react'
import styles from './Nav.module.css'

const NAV_ITEMS = [
  { href: '#about', label: '소개', id: 'about' },
  { href: '#work', label: '프로젝트', id: 'work' },
  { href: '#contact', label: '연락', id: 'contact' },
]

export default function Nav({ dark, onToggle }) {
  const [active, setActive] = useState('about')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      let current = 'about'
      NAV_ITEMS.forEach(({ id }) => {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 140) current = id
      })
      setActive(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <aside className={styles.sidebar}>
        <div className={styles.profile}>
          <div className={styles.name}>김진희</div>
          <div className={styles.role}>Brand Marketer · Seoul</div>
        </div>

        <nav className={styles.nav}>
          {NAV_ITEMS.map(item => (
            <a
              key={item.id}
              href={item.href}
              className={`${styles.navLink} ${active === item.id ? styles.navActive : ''}`}
            >
              <span className={styles.dot} />
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.footer}>
          <a
            href="https://linkedin.com/in/jinheekim128"
            target="_blank"
            rel="noreferrer"
            className={styles.footerLink}
          >
            LinkedIn →
          </a>
          <button className={styles.themeBtn} onClick={onToggle} aria-label="테마 전환">
            <span className={styles.themeIcon}>{dark ? '○' : '◐'}</span>
            <span>{dark ? 'Light mode' : 'Dark mode'}</span>
          </button>
        </div>
      </aside>

      {/* Mobile */}
      <div className={styles.mobBar}>
        <span className={styles.mobName}>김진희</span>
        <div className={styles.mobControls}>
          <button className={styles.themeBtn} onClick={onToggle} aria-label="테마 전환">
            <span className={styles.themeIcon}>{dark ? '○' : '◐'}</span>
          </button>
          <button
            className={styles.mobMenuBtn}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="메뉴"
          >
            {menuOpen ? '×' : '≡'}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className={styles.mobMenu}>
          {NAV_ITEMS.map(item => (
            <a
              key={item.id}
              href={item.href}
              className={styles.mobMenuItem}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
