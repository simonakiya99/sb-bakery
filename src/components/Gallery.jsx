import { useState } from 'react'
import { useLang } from '../context/LanguageContext'
import { translations } from '../i18n/translations'

const cakes = [
  {
    id: 1,
    title: { nl: 'Romantische Bruidstaart', ti: 'ሮማንቲካዊ ናይ መርዓ ኬክ' },
    category: 'bruiloft',
    price: '€180',
    desc: {
      nl: 'Drielaags fondanttaart met gouden accenten en verse rozen.',
      ti: 'ሰለስተ ጽፍሒ ናይ ፎንዳን ኬክ ምስ ናይ ወርቂ ስፍሓትን ሓደሽቲ ጽጌረዳን።'
    },
    img: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&q=80'
  },
  {
    id: 2,
    title: { nl: 'Klassieke Witte Bruidstaart', ti: 'ክላሲካዊ ጻዕዳ ናይ መርዓ ኬክ' },
    category: 'bruiloft',
    price: '€220',
    desc: {
      nl: 'Elegante witte taart met parelmoer decoratie en suikerbloemen.',
      ti: 'ናይ ዕንቍ ሕብርን ናይ ሽኮር ዕምባባን ዘለዎ ጸጋዕ ጻዕዳ ኬክ።'
    },
    img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80'
  },
  {
    id: 3,
    title: { nl: 'Gouden Luxe Bruidstaart', ti: 'ናይ ወርቂ ሉኹስ ናይ መርዓ ኬክ' },
    category: 'bruiloft',
    price: '€250',
    desc: {
      nl: 'Vijflaagse taart met bladgoud en handgeschilderde details.',
      ti: 'ሓሙሽተ ጽፍሒ ዘለዎ ናይ ወርቂ ቅጠልን ብኢድ ዝተሳእለ ዝርዝርን ዘለዎ ኬክ።'
    },
    img: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&q=80'
  },
  {
    id: 4,
    title: { nl: 'Verjaardagstaart Roze', ti: 'ቀያሕ ናይ ልደት ኬክ' },
    category: 'verjaardag',
    price: '€65',
    desc: {
      nl: 'Vrolijke roze taart met sprinkles en gepersonaliseerde tekst.',
      ti: 'ሕብራዊ ናይ ልደት ኬክ ምስ ፍሉይ ጽሑፍ።'
    },
    img: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=600&q=80'
  },
  {
    id: 5,
    title: { nl: 'Chocolade Verjaardagstaart', ti: 'ናይ ቸኮሌት ልደት ኬክ' },
    category: 'verjaardag',
    price: '€70',
    desc: {
      nl: 'Rijke chocoladetaart met ganache en goudkleurige decoratie.',
      ti: 'ሃብታም ናይ ቸኮሌት ኬክ ምስ ናይ ወርቂ ሕብሪ ጌጋ።'
    },
    img: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&q=80'
  },
  {
    id: 6,
    title: { nl: 'Regenboog Verjaardagstaart', ti: 'ናይ ቀስተ ደበና ልደት ኬክ' },
    category: 'verjaardag',
    price: '€75',
    desc: {
      nl: 'Kleurrijke laagjestaart — perfect voor kinderverjaardagen.',
      ti: 'ሕብረ-ሕብሪ ናይ ጽፍሒ ኬክ — ንናይ ቆልዑ ልደት ፍጹም።'
    },
    img: 'https://images.unsplash.com/photo-1562777717-dc6984f65a63?w=600&q=80'
  },
  {
    id: 7,
    title: { nl: 'Glutenvrije Citroentaart', ti: 'ናይ ሎሚ ኬክ ብዘይ ግሉተን' },
    category: 'speciaal',
    price: '€75',
    desc: {
      nl: 'Frisse citroentaart, 100% glutenvrij en heerlijk luchtig.',
      ti: 'ሓደሽቲ ናይ ሎሚ ኬክ፣ 100% ካብ ግሉተን ናጻ።'
    },
    img: 'https://images.unsplash.com/photo-1519869325930-281384150729?w=600&q=80'
  },
  {
    id: 8,
    title: { nl: 'Vegan Chocoladetaart', ti: 'ቪጋን ናይ ቸኮሌት ኬክ' },
    category: 'speciaal',
    price: '€80',
    desc: {
      nl: 'Rijke vegan chocoladetaart zonder dierlijke producten.',
      ti: 'ሃብታም ቪጋን ናይ ቸኮሌት ኬክ ብዘይ ናይ እንስሳ ፍርያት።'
    },
    img: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&q=80'
  },
  {
    id: 9,
    title: { nl: 'Halal Aardbeientaart', ti: 'ሃላል ናይ ሓምሓም ኬክ' },
    category: 'speciaal',
    price: '€70',
    desc: {
      nl: 'Luchtige aardbeientaart met halal gecertificeerde ingrediënten.',
      ti: 'ሃሊ ናይ ሓምሓም ኬክ ምስ ሃላል ዝተረጋገጹ ረቛሒታት።'
    },
    img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80'
  }
]

function Gallery() {
  const [active, setActive] = useState('alle')
  const [hoveredId, setHoveredId] = useState(null)
  const { lang } = useLang()
  const T = translations[lang]

  const filters = [
    { key: 'alle', label: T.filter_all },
    { key: 'bruiloft', label: T.filter_wedding },
    { key: 'verjaardag', label: T.filter_birthday },
    { key: 'speciaal', label: T.filter_special },
  ]

  const filtered = active === 'alle' ? cakes : cakes.filter(c => c.category === active)

  const getCategoryTag = (category) => {
    if (category === 'bruiloft') return T.tag_wedding
    if (category === 'verjaardag') return T.tag_birthday
    return T.tag_special
  }

  const orderCake = (cake) => {
    const select = document.querySelector('.order-select')
    const textarea = document.querySelector('.order-textarea')
    if (select) {
      if (cake.category === 'bruiloft') select.value = T.option_wedding
      else if (cake.category === 'verjaardag') select.value = T.option_birthday
      else select.value = T.option_special
    }
    if (textarea) textarea.value = cake.title[lang]
    document.getElementById('bestelling')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="gallery-section" id="galerij" data-animate>
      <div className="section-header">
        <span className="section-tag">{T.gallery_tag}</span>
        <h2 className="section-title">{T.gallery_title_pre}<em>{T.gallery_title_em}</em></h2>
        <div className="divider"></div>
      </div>

      <div className="filter-buttons">
        {filters.map(f => (
          <button
            key={f.key}
            className={`filter-btn ${active === f.key ? 'active' : ''}`}
            onClick={() => setActive(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filtered.map(cake => (
          <div
            key={cake.id}
            className="gallery-card"
            onMouseEnter={() => setHoveredId(cake.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className="gallery-img-wrap">
              <img
                src={cake.img}
                alt={cake.title[lang]}
                loading="lazy"
                style={{
                  transform: hoveredId === cake.id ? 'scale(1.08)' : 'scale(1)',
                  transition: 'transform 0.6s ease'
                }}
              />
              <div className="gallery-overlay" style={{
                opacity: hoveredId === cake.id ? 1 : 0,
                transition: 'opacity 0.4s ease'
              }}>
                <button
                  className="btn-order-cake"
                  onClick={() => orderCake(cake)}
                  style={{
                    transform: hoveredId === cake.id ? 'translateY(0)' : 'translateY(10px)',
                    transition: 'all 0.4s ease'
                  }}
                >
                  {T.btn_order_cake}
                </button>
              </div>
            </div>
            <div className="gallery-card-body">
              <span className="cake-card-tag">{getCategoryTag(cake.category)}</span>
              <h3 className="gallery-card-title">{cake.title[lang]}</h3>
              <p className="gallery-card-desc">{cake.desc[lang]}</p>
              <span className="cake-card-price">{T.price_from} {cake.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery
