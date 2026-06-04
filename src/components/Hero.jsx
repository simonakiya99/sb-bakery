import { useLang } from '../context/LanguageContext'
import { translations } from '../i18n/translations'

function Hero() {
  const { lang } = useLang()
  const T = translations[lang]

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <section className="hero">
        <div className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=1600&q=90"
            alt="Luxe bruidstaart"
            className="hero-img"
          />
          <div className="hero-overlay" />
          <div className="hero-vignette" />
        </div>

        <div className="hero-content">
          <div className="hero-badge-line" />
          <div className="hero-badge">{T.hero_badge}</div>
          <h1 className="hero-title">
            {T.hero_title_line1}<br />
            {T.hero_title_line2} <em>{T.hero_title_em}</em><br />
            {T.hero_title_line3}
          </h1>
          <p className="hero-subtitle">{T.hero_subtitle}</p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => scrollTo('bestelling')}>
              {T.hero_btn_order}
            </button>
            <button className="btn-secondary" onClick={() => scrollTo('galerij')}>
              {T.hero_btn_gallery}
            </button>
          </div>
        </div>
      </section>

      <div className="stats-bar" data-animate>
        <div className="stat-item">
          <span className="stat-number">200+</span>
          <span className="stat-label">{T.stat_customers}</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">100%</span>
          <span className="stat-label">{T.stat_handmade}</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">{T.stat_halal_num}</span>
          <span className="stat-label">{T.stat_halal}</span>
        </div>
      </div>
    </>
  )
}

export default Hero
