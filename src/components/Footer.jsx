function Footer() {
  return (
    <>
      <footer id="contact" data-animate>
        <div className="footer-brand">
          <span className="footer-logo">La <span className="gold">Douceur</span></span>
          <p>Ambachtelijke luxe taarten gemaakt met liefde en passie. Voor elk bijzonder moment in uw leven.</p>
        </div>
        <div className="footer-col">
          <h4>Navigatie</h4>
          <ul>
            <li><a href="#galerij">Onze taarten</a></li>
            <li><a href="#bestelling">Bestellen</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="#">info@ladouceur.nl</a></li>
            <li><a href="#">06 XX XX XX XX</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">WhatsApp bestellen</a></li>
          </ul>
        </div>
      </footer>
      <div className="footer-bottom">
        © 2024 La Douceur — Alle rechten voorbehouden
      </div>
    </>
  )
}

export default Footer