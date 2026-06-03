import { useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { useLang } from '../context/LanguageContext'
import { translations } from '../i18n/translations'
import { supabase } from '../lib/supabase'

const SERVICE_ID = 'service_pweecrd'
const TEMPLATE_ID = 'template_ohnue0q'
const PUBLIC_KEY = 'aH2UrdkRJjRtJE-Hr'

function Order() {
  const formRef = useRef()
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)
  const [taarten, setTaarten] = useState([])
  const { lang } = useLang()
  const T = translations[lang]

  useEffect(() => {
    supabase
      .from('taarten')
      .select('id, naam_nl, naam_ti')
      .eq('actief', true)
      .order('volgorde')
      .then(({ data }) => { if (data) setTaarten(data) })
  }, [])

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
          <h2>{T.order_title_pre}<em>{T.order_title_em}</em></h2>
          <p>{T.order_intro}</p>
          <ul className="order-steps">
            <li>
              <div className="step-num">1</div>
              <div className="step-text">{T.step1}</div>
            </li>
            <li>
              <div className="step-num">2</div>
              <div className="step-text">{T.step2}</div>
            </li>
            <li>
              <div className="step-num">3</div>
              <div className="step-text">{T.step3}</div>
            </li>
            <li>
              <div className="step-num">4</div>
              <div className="step-text">{T.step4}</div>
            </li>
          </ul>
        </div>

        <div className="order-form">
          <div className="form-title">{T.form_title}</div>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label>{T.label_firstname}</label>
                <input type="text" name="voornaam" placeholder={T.ph_firstname} required />
              </div>
              <div className="form-group">
                <label>{T.label_lastname}</label>
                <input type="text" name="achternaam" placeholder={T.ph_lastname} required />
              </div>
            </div>
            <div className="form-group">
              <label>{T.label_email}</label>
              <input type="email" name="email" placeholder={T.ph_email} required />
            </div>
            <div className="form-group">
              <label>{T.label_phone}</label>
              <input type="tel" name="telefoon" placeholder={T.ph_phone} required />
            </div>
            <div className="form-grid">
              <div className="form-group">
                <label>{T.label_type}</label>
                <select name="soort_taart" className="order-select" required>
                  {taarten.map(t => (
                    <option key={t.id} value={lang === 'nl' ? t.naam_nl : t.naam_ti}>
                      {lang === 'nl' ? t.naam_nl : t.naam_ti}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>{T.label_date}</label>
                <input type="date" name="datum" required />
              </div>
            </div>
            <div className="form-group">
              <label>{T.label_wishes}</label>
              <textarea
                name="wensen"
                className="order-textarea"
                placeholder={T.ph_wishes}
                required
              ></textarea>
            </div>

            {status === 'success' && <div className="form-success">{T.success_msg}</div>}
            {status === 'error' && <div className="form-error">{T.error_msg}</div>}

            <button type="submit" className="btn-form" disabled={loading}>
              {loading ? T.btn_sending : T.btn_submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Order
