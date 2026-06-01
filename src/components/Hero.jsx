function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <section className="hero">
        <div className="hero-left">
          <div className="hero-badge">Ambachtelijk · Met liefde gemaakt</div>
          <h1 className="hero-title">
            Elke taart,<br />
            een <em>verhaal</em><br />
            op zichzelf
          </h1>
          <p className="hero-subtitle">
            Handgemaakte luxe taarten voor uw meest bijzondere momenten.
            Van romantische bruidstaarten tot elegante verjaardagskreaties — elk stuk is uniek.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => scrollTo('bestelling')}>
              Taart bestellen
            </button>
            <button className="btn-secondary" onClick={() => scrollTo('galerij')}>
              Bekijk creaties →
            </button>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-ornament">✦</div>
          <div className="hero-visual">
            <img
              src="https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=800&q=90"
              alt="Luxe bruidstaart"
              className="hero-img"
            />
            <div className="hero-img-badge">
              <span className="hero-img-badge-num">200+</span>
              <span className="hero-img-badge-text">Blije klanten</span>
            </div>
          </div>
        </div>
      </section>

      <div className="stats-bar" data-animate>
        <div className="stat-item">
          <span className="stat-number">200+</span>
          <span className="stat-label">Blije klanten</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">5★</span>
          <span className="stat-label">Beoordeling</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">100%</span>
          <span className="stat-label">Handgemaakt</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">3+</span>
          <span className="stat-label">Keurmerken</span>
        </div>
      </div>
    </>
  )
}

export default Hero