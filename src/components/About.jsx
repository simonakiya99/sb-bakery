import { useLang } from '../context/LanguageContext'
import { translations } from '../i18n/translations'

function About() {
  const { lang } = useLang()
  const T = translations[lang]

  return (
    <section className="about-section" id="verhaal" data-animate>
      <div className="about-layout">
        <div className="about-image-col">
          <div className="about-img-frame">
            <img
              src="https://images.unsplash.com/photo-1542826438-bd32f43d626f?w=800&q=85"
              alt="La Douceur atelier"
              className="about-img"
              loading="lazy"
            />
            <div className="about-year-badge">
              <span className="about-year-num">2018</span>
              <span className="about-year-label">{T.about_year_label}</span>
            </div>
          </div>
        </div>

        <div className="about-content">
          <span className="section-tag">{T.about_tag}</span>
          <h2 className="section-title">
            {T.about_title_pre}<em>{T.about_title_em}</em>{T.about_title_post}
          </h2>
          <p className="about-text">{T.about_text1}</p>
          <p className="about-text">{T.about_text2}</p>
          <div className="about-values">
            <div className="about-value">
              <div className="about-value-icon">✦</div>
              <div className="about-value-body">
                <strong>{T.about_value1_title}</strong>
                <span>{T.about_value1_text}</span>
              </div>
            </div>
            <div className="about-value">
              <div className="about-value-icon">✦</div>
              <div className="about-value-body">
                <strong>{T.about_value2_title}</strong>
                <span>{T.about_value2_text}</span>
              </div>
            </div>
            <div className="about-value">
              <div className="about-value-icon">✦</div>
              <div className="about-value-body">
                <strong>{T.about_value3_title}</strong>
                <span>{T.about_value3_text}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
