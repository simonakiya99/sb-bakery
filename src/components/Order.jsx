import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const SERVICE_ID = 'service_pweecrd'
const TEMPLATE_ID = 'template_ohnue0q'
const PUBLIC_KEY = 'aH2UrdkRJjRtJE-Hr'

function Order() {
  const formRef = useRef()
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus('success')
        setLoading(false)
        formRef.current.reset()
      })
      .catch(() => {
        setStatus('error')
        setLoading(false)
      })
  }

  return (
    <section className="order-section" id="bestelling" data-animate>
      <div className="order-layout">
        <div className="order-info">
          <h2>Uw droomtaart <em>bestellen</em></h2>
          <p>Vul het formulier in en ik neem binnen 24 uur contact met u op om alle details te bespreken.</p>
          <ul className="order-steps">
            <li>
              <div className="step-num">1</div>
              <div className="step-text">Vul het formulier in met uw wensen en datum</div>
            </li>
            <li>
              <div className="step-num">2</div>
              <div className="step-text">U ontvangt een persoonlijk voorstel en offerte</div>
            </li>
            <li>
              <div className="step-num">3</div>
              <div className="step-text">Na bevestiging start het maakproces</div>
            </li>
            <li>
              <div className="step-num">4</div>
              <div className="step-text">Ophalen of bezorging op de afgesproken datum</div>
            </li>
          </ul>
        </div>

        <div className="order-form">
          <div className="form-title">Bestelformulier</div>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label>Voornaam</label>
                <input type="text" name="voornaam" placeholder="Sophie" required />
              </div>
              <div className="form-group">
                <label>Achternaam</label>
                <input type="text" name="achternaam" placeholder="van der Berg" required />
              </div>
            </div>
            <div className="form-group">
              <label>E-mailadres</label>
              <input type="email" name="email" placeholder="sophie@email.nl" required />
            </div>
            <div className="form-group">
              <label>Telefoonnummer</label>
              <input type="tel" name="telefoon" placeholder="06 12 34 56 78" required />
            </div>
            <div className="form-grid">
              <div className="form-group">
                <label>Soort taart</label>
                <select name="soort_taart" className="order-select" required>
                  <option>Bruidstaart</option>
                  <option>Verjaardagstaart</option>
                  <option>Speciale taart</option>
                  <option>Anders</option>
                </select>
              </div>
              <div className="form-group">
                <label>Gewenste datum</label>
                <input type="date" name="datum" required />
              </div>
            </div>
            <div className="form-group">
              <label>Uw wensen</label>
              <textarea
                name="wensen"
                className="order-textarea"
                placeholder="Vertel iets over uw gewenste taart: thema, smaken, aantal personen, speciale wensen..."
                required
              ></textarea>
            </div>

            {status === 'success' && (
              <div className="form-success">
                ✓ Bedankt! We nemen binnen 24 uur contact op.
              </div>
            )}

            {status === 'error' && (
              <div className="form-error">
                ✗ Er ging iets mis. Probeer het opnieuw.
              </div>
            )}

            <button type="submit" className="btn-form" disabled={loading}>
              {loading ? 'Versturen...' : 'Aanvraag versturen →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Order