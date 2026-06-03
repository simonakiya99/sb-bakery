import { useLang } from '../context/LanguageContext'
import { translations } from '../i18n/translations'

function Footer() {
  const { lang } = useLang()
  const T = translations[lang]

  return (
    <>
      <footer id="contact" data-animate>
        <div className="footer-brand">
          <span className="footer-logo">La <span className="gold">Douceur</span></span>
          <p>{T.footer_desc}</p>
        </div>
        <div className="footer-col">
          <h4>{T.footer_nav_title}</h4>
          <ul>
            <li><a href="#galerij">{T.footer_nav_cakes}</a></li>
            <li><a href="#bestelling">{T.footer_nav_order}</a></li>
            <li><a href="#contact">{T.footer_nav_contact}</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>{T.footer_contact_title}</h4>
          <ul>
            <li><a href="#">info@ladouceur.nl</a></li>
            <li><a href="#">06 XX XX XX XX</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">WhatsApp</a></li>
          </ul>
        </div>
      </footer>
      <div className="footer-bottom">{T.footer_bottom}</div>
    </>
  )
}

export default Footer
