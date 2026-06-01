import { useState, useEffect } from 'react'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

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
        <li><a onClick={() => scrollTo('galerij')}>Taarten</a></li>
        <li><a onClick={() => scrollTo('bestelling')}>Bestellen</a></li>
        <li><a onClick={() => scrollTo('contact')}>Contact</a></li>
      </ul>
      <button className="nav-cta desktop-only" onClick={() => scrollTo('bestelling')}>
        Bestel nu
      </button>
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
            <li><a onClick={() => scrollTo('galerij')}>Taarten</a></li>
            <li><a onClick={() => scrollTo('bestelling')}>Bestellen</a></li>
            <li><a onClick={() => scrollTo('contact')}>Contact</a></li>
          </ul>
          <button className="nav-cta" onClick={() => scrollTo('bestelling')}>
            Bestel nu
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar
