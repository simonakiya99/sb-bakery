import { useState } from 'react'

const cakes = [
  {
    id: 1,
    title: "Romantische Bruidstaart",
    category: "bruiloft",
    price: "Vanaf €180",
    desc: "Drielaags fondanttaart met gouden accenten en verse rozen.",
    img: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&q=80"
  },
  {
    id: 2,
    title: "Klassieke Witte Bruidstaart",
    category: "bruiloft",
    price: "Vanaf €220",
    desc: "Elegante witte taart met parelmoer decoratie en suikerbloemen.",
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80"
  },
  {
    id: 3,
    title: "Gouden Luxe Bruidstaart",
    category: "bruiloft",
    price: "Vanaf €250",
    desc: "Vijflaagse taart met bladgoud en handgeschilderde details.",
    img: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=600&q=80"
  },
  {
    id: 4,
    title: "Verjaardagstaart Roze",
    category: "verjaardag",
    price: "Vanaf €65",
    desc: "Vrolijke roze taart met sprinkles en gepersonaliseerde tekst.",
    img: "https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=600&q=80"
  },
  {
    id: 5,
    title: "Chocolade Verjaardagstaart",
    category: "verjaardag",
    price: "Vanaf €70",
    desc: "Rijke chocoladetaart met ganache en goudkleurige decoratie.",
    img: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=600&q=80"
  },
  {
    id: 6,
    title: "Regenboog Verjaardagstaart",
    category: "verjaardag",
    price: "Vanaf €75",
    desc: "Kleurrijke laagjestaart — perfect voor kinderverjaardagen.",
    img: "https://images.unsplash.com/photo-1562777717-dc6984f65a63?w=600&q=80"
  },
  {
    id: 7,
    title: "Glutenvrije Citroentaart",
    category: "speciaal",
    price: "Vanaf €75",
    desc: "Frisse citroentaart, 100% glutenvrij en heerlijk luchtig.",
    img: "https://images.unsplash.com/photo-1519869325930-281384150729?w=600&q=80"
  },
  {
    id: 8,
    title: "Vegan Chocoladetaart",
    category: "speciaal",
    price: "Vanaf €80",
    desc: "Rijke vegan chocoladetaart zonder dierlijke producten.",
    img: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&q=80"
  },
  {
    id: 9,
    title: "Halal Aardbeientaart",
    category: "speciaal",
    price: "Vanaf €70",
    desc: "Luchtige aardbeientaart met halal gecertificeerde ingrediënten.",
    img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&q=80"
  }
]

const filters = [
  { key: 'alle', label: 'Alle taarten' },
  { key: 'bruiloft', label: 'Bruidstaarten' },
  { key: 'verjaardag', label: 'Verjaardagen' },
  { key: 'speciaal', label: 'Speciaal' },
]

function Gallery() {
  const [active, setActive] = useState('alle')
  const [hoveredId, setHoveredId] = useState(null)

  const filtered = active === 'alle'
    ? cakes
    : cakes.filter(c => c.category === active)

  const orderCake = (cake) => {
    const select = document.querySelector('.order-select')
    const textarea = document.querySelector('.order-textarea')
    if (select) {
      if (cake.category === 'bruiloft') select.value = 'Bruidstaart'
      else if (cake.category === 'verjaardag') select.value = 'Verjaardagstaart'
      else select.value = 'Speciale taart'
    }
    if (textarea) textarea.value = `Ik ben geïnteresseerd in: ${cake.title}`
    document.getElementById('bestelling')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="gallery-section" id="galerij" data-animate>
      <div className="section-header">
        <span className="section-tag">Onze creaties</span>
        <h2 className="section-title">Kies uw <em>droomtaart</em></h2>
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
                alt={cake.title}
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
                  Bestel deze taart
                </button>
              </div>
            </div>
            <div className="gallery-card-body">
              <span className="cake-card-tag">
                {cake.category === 'bruiloft' ? 'Bruiloft' : cake.category === 'verjaardag' ? 'Verjaardag' : 'Speciaal'}
              </span>
              <h3 className="gallery-card-title">{cake.title}</h3>
              <p className="gallery-card-desc">{cake.desc}</p>
              <span className="cake-card-price">{cake.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Gallery