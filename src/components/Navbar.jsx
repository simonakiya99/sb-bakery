import { useState, useEffect } from 'react'
import { useLang } from '../context/LanguageContext'
import { translations } from '../i18n/translations'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, toggle } = useLang()
  const T = translations[lang]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo">
        La <span>Douceur</span>
      </div>
      <ul className="nav-links">
        <li><a onClick={() => scrollTo('galerij')}>{T.nav_taarten}</a></li>
        <li><a onClick={() => scrollTo('bestelling')}>{T.nav_bestellen}</a></li>
        <li><a onClick={() => scrollTo('contact')}>{T.nav_contact}</a></li>
      </ul>
      <div className="navbar-right desktop-only">
        <button className="nav-cta" onClick={() => scrollTo('bestelling')}>
          {T.nav_cta}
        </button>
        <div className="lang-switcher">
          <button className={`lang-btn ${lang === 'ti' ? 'active' : ''}`} onClick={() => lang !== 'ti' && toggle()}>TI</button>
          <button className={`lang-btn ${lang === 'nl' ? 'active' : ''}`} onClick={() => lang !== 'nl' && toggle()}>NL</button>
        </div>
      </div>
      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu openen"
      >
        <span />
        <span />
        <span />
      </button>

      {menuOpen && (
        <div className="mobile-menu">
          <ul>
            <li><a onClick={() => scrollTo('galerij')}>{T.nav_taarten}</a></li>
            <li><a onClick={() => scrollTo('bestelling')}>{T.nav_bestellen}</a></li>
            <li><a onClick={() => scrollTo('contact')}>{T.nav_contact}</a></li>
          </ul>
          <div className="mobile-menu-bottom">
            <button className="nav-cta" onClick={() => scrollTo('bestelling')}>
              {T.nav_cta}
            </button>
            <div className="lang-switcher">
              <button className={`lang-btn ${lang === 'ti' ? 'active' : ''}`} onClick={() => lang !== 'ti' && toggle()}>TI</button>
              <button className={`lang-btn ${lang === 'nl' ? 'active' : ''}`} onClick={() => lang !== 'nl' && toggle()}>NL</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
