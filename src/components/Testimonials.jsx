import { useLang } from '../context/LanguageContext'
import { translations } from '../i18n/translations'

const testimonials = [
  {
    nl: {
      text: 'De bruidstaart overtrof al onze verwachtingen. Onze gasten bleven erover praten — zo mooi en zo lekker!',
      name: 'Fatima & Yonas',
      occasion: 'Bruidspaar, Rotterdam',
    },
    ti: {
      text: 'ናይ መርዓ ኬክ ኩሎም ትጽቢትና ሓሊፉ። ኣጋይሽና ብዛዕብኡ ዝዛረቡ ነይሮም — ጽቡቕን ጥዑምን!',
      name: 'ፋቲማ & ዮናስ',
      occasion: 'ናይ መርዓ ጻዕዳ, ሮተርዳም',
    },
  },
  {
    nl: {
      text: 'Voor mijn dochters verjaardag bestelde ik een verrassingstaart. Ze was compleet sprakeloos van blijdschap. Dank je, La Douceur!',
      name: 'Lisa van den Berg',
      occasion: 'Verjaardagsfeest, Amsterdam',
    },
    ti: {
      text: 'ን ልደት ጓለይ ናይ ደስታ ኬክ ኣዚዘ። ካብ ሓጎስ ዘረባ ሲኢና! የቐንየልኪ La Douceur.',
      name: 'ሊሳ ቫን ደን ቤርጅ',
      occasion: 'ናይ ልደት ፌስታ, ኣምስተርዳም',
    },
  },
  {
    nl: {
      text: 'Eindelijk een halal én glutenvrije taart die er prachtig uitziet én heerlijk smaakt. Echt een aanrader voor iedereen!',
      name: 'Amina Tesfay',
      occasion: 'Familiefeest, Den Haag',
    },
    ti: {
      text: 'ናይ ሃላልን ካብ ግሉተን ናጻን ኬክ ምርካብ ኣጸቢቑ ሓጎሰና። ንኩሉ ዝምከር!',
      name: 'ኣሚና ተስፋይ',
      occasion: 'ናይ ቤተሰብ ፌስታ, ዲን ሃሽ',
    },
  },
]

function Testimonials() {
  const { lang } = useLang()
  const T = translations[lang]

  return (
    <section className="testimonials-section" data-animate>
      <div className="section-header">
        <span className="section-tag">{T.testimonials_tag}</span>
        <h2 className="section-title">
          {T.testimonials_title_pre}<em>{T.testimonials_title_em}</em>{T.testimonials_title_post}
        </h2>
        <div className="divider" />
      </div>

      <div className="testimonials-grid">
        {testimonials.map((t, i) => (
          <div key={i} className="testimonial-card">
            <div className="testimonial-stars">★★★★★</div>
            <p className="testimonial-quote">"{t[lang].text}"</p>
            <div className="testimonial-author">
              <span className="testimonial-name">{t[lang].name}</span>
              <span className="testimonial-occasion">{t[lang].occasion}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
