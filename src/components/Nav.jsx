import { useState, useEffect } from 'react'
import { categories } from '../data/projects'
import styles from './Nav.module.css'

const base = import.meta.env.BASE_URL

const NAV_ITEMS = [
  { href: '#about', label: '소개', id: 'about' },
  { href: '#work', label: '프로젝트', id: 'work' },
  { href: '#contact', label: '연락', id: 'contact' },
]

const SUB_ITEMS = [
  { id: 'all', label: '전체' },
  ...categories,
]

export default function Nav({ dark, onToggle, filter = 'all', onFilterChange }) {
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
          <img
            src={base + 'images/profile.png'}
            alt="김진희"
            className={styles.avatar}
          />
          <div className={styles.name}>김진희</div>
          <div className={styles.role}>Brand Marketer · Seoul</div>
        </div>

        <nav className={styles.nav}>
          {NAV_ITEMS.map(item => (
            <div key={item.id}>
              <a
                href={item.href}
                className={`${styles.navLink} ${active === item.id ? styles.navActive : ''}`}
              >
                <span className={styles.dot} />
                {item.label}
              </a>
              {item.id === 'work' && (
                <div className={styles.subNav}>
                  {SUB_ITEMS.map(sub => (
                    <a
                      key={sub.id}
                      href="#work"
                      className={`${styles.subItem} ${filter === sub.id ? styles.subActive : ''}`}
                      onClick={e => {
                        e.preventDefault()
                        onFilterChange?.(sub.id)
                        document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
                      }}
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
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
