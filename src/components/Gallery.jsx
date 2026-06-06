import { useState } from 'react'
import { translations } from '../i18n/translations'

const cakes = [
  {
    id: 1,
    title: { nl: 'Gouden Accent Taart', ti: 'ናይ ወርቂ ኣገልግሎት ቀንዲ' },
    category: 'speciaal',
    desc: {
      nl: 'Strakke taart met wit glazuur, gouden strepen en parelmoeren details.',
      ti: 'ጽሩይ ኬክ ብስንክ ንጥፍ ወርቂ ስግንዛብን ኣብ ናይ መርቀቕ ክብረታትን።'
    },
    img: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&q=80'
  },
  {
    id: 2,
    title: { nl: 'Hartvormige Verjaardagstaart', ti: 'ናይ ልደት ልቢ ቀንዲ' },
    category: 'verjaardag',
    desc: {
      nl: 'Romantische hartvormige taart met zachte crème en gouden tekst.',
      ti: 'ርእይቶ ልቢ ኬክ ብሓርነት ጥውቕ ባእኳን ንጥፍ ወርቂ ጽሑፍ።'
    },
    img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80'
  },
  {
    id: 3,
    title: { nl: 'Bride-to-Be Taart', ti: 'ናይ ሰርግ ሰብኣዊ ኬክ' },
    category: 'bruiloft',
    desc: {
      nl: 'Prachtige bruidstaart met elegante topper en subtiele parels.',
      ti: 'ጽቡቕ ናይ ሰርግ ኬክ ብርካታ ጌጋን ኣንጻር ብዝጥብ ፐርል።'
    },
    img: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&q=80'
  },
  {
    id: 4,
    title: { nl: 'Pastel Verjaardagscake', ti: 'ዕማዪ ልደት ኬክ' },
    category: 'verjaardag',
    desc: {
      nl: 'Dromerige taart met perzikroze bloemen en luxe gouden details.',
      ti: 'ሓርነታዊ ኬክ ብገርም ናይ ፓስተል አበባትን ወርቂ ኣብርገኛን።'
    },
    img: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=600&q=80'
  },
  {
    id: 5,
    title: { nl: 'Bloemen & Kersen Taart', ti: 'ናይ አበባን ቀለማዊ ኖርማል ኬክ' },
    category: 'speciaal',
    desc: {
      nl: 'Luxe taart met verse bloemen, kersen en een zachte crème afwerking.',
      ti: 'ክብረታዊ ኬክ ብንጽሕና አበባታትን ቀለማዊ ቀርሲን።'
    },
    img: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&q=80'
  },
  {
    id: 6,
    title: { nl: 'Roze Bloemencake', ti: 'ናይ አበባ ስግንዛ ኬክ' },
    category: 'speciaal',
    desc: {
      nl: 'Romantische tweelaagse creamcake met roze bloemdecoratie en een luxe finish.',
      ti: 'ሓርነታዊ ሁለት ደረጃ ኬክ ብሮዝ አበባታትን ፍቅሪ ልብን።'
    },
    img: 'https://images.unsplash.com/photo-1562777717-dc6984f65a63?w=600&q=80'
  },
  {
    id: 7,
    title: { nl: 'Jubileumtaart met Rozen', ti: 'ናይ 25 ኣመት ቀረጺ ኬክ' },
    category: 'speciaal',
    desc: {
      nl: 'Feestelijke taart met verse rozen, gouden cijfers en een elegante presentatie.',
      ti: 'እንቋዕ 25 ዓመት ኬክ ብሮዝን ወርቂ ቁጽሪን ንዕረፍቲ ዝተጣለወ።'
    },
    img: 'https://images.unsplash.com/photo-1519869325930-281384150729?w=600&q=80'
  },
  {
    id: 8,
    title: { nl: 'Chocolade Signature Cake', ti: 'ናይ ቸኮሌት ዘይምረኸት ኬክ' },
    category: 'speciaal',
    desc: {
      nl: 'Strakke chocoladecake met glanzende afwerking en modern bloemendecor.',
      ti: 'ዝጽበቀ ቸኮሌት ኬክ ብዝንብር ኣበባን ናይ እዋን ኣብርግኛን።'
    },
    img: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&q=80'
  },
  {
    id: 9,
    title: { nl: 'Jubileum Celebration Taart', ti: 'ናይ ምትእዛዛ ዕለት ኬክ' },
    category: 'speciaal',
    desc: {
      nl: 'Feestelijke taart met luxe rozen, parelaccenten en verfijnde details.',
      ti: 'እንቋዕ እዋን ኬክ ብሮዝን ፐርልን ዘውትር ኣገልግሎት።'
    },
    img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80'
  }
]

function Gallery({ lang }) {
  const [active, setActive] = useState('alle')
  const [hoveredId, setHoveredId] = useState(null)
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
    <section className="gallery-section hidden-by-default" id="galerij">
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
                src={`/gallery/gallery-${cake.id}.png`}
                alt={cake.title[lang]}
                loading="lazy"
                onError={(e) => { e.currentTarget.src = cake.img }}
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
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery
