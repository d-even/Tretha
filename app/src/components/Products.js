import facewash from '../public/facewash.jpg';
import serum from '../public/serum.jpg';
import shampoo from '../public/Shampoo.jpg';
import soap from '../public/soap.jpg';

const products = [
  {
    img: facewash,
    badge: 'Bestseller',
    category: 'Cleansing',
    name: 'Radiant Glow Face Wash',
    desc: 'Infused with green tea extract & aloe vera for a gentle deep cleanse that leaves skin luminous.',
    price: '₹ 649',
  },
  {
    img: serum,
    badge: 'New Arrival',
    category: 'Treatment',
    name: 'Youth Revival Serum',
    desc: 'Concentrated botanical actives target fine lines and restore your skin\'s natural plumpness.',
    price: '₹ 1,299',
  },
  {
    img: shampoo,
    badge: 'Natural',
    category: 'Hair Care',
    name: 'Nourishing Hair Shampoo',
    desc: 'Argan oil and rosemary strengthen each strand from root to tip for salon-worthy shine.',
    price: '₹ 549',
  },
  {
    img: soap,
    badge: 'Organic',
    category: 'Body Care',
    name: 'Natural Glow Soap Bar',
    desc: 'Cold-pressed with shea butter and lavender, this bar cleanses, moisturises and soothes daily.',
    price: '₹ 349',
  },
];

export default function Products() {
  return (
    <section className="products-section" id="products">
      <div className="section-header">
        <span className="section-eyebrow">Our Collection</span>
        <h2 className="section-title">Crafted for Your Skin</h2>
        <p className="section-sub">
          Each formula is a labour of love — clean ingredients, honest results,
          and packaging that respects the planet.
        </p>
      </div>

      <div className="products-grid">
        {products.map((p, i) => (
          <div key={i} className="product-card">
            <div className="product-img-wrap">
              <img src={p.img} alt={p.name} />
              {p.badge && <span className="product-badge">{p.badge}</span>}
              <button className="product-wishlist" aria-label="Add to wishlist">♡</button>
            </div>
            <div className="product-body">
              <p className="product-category">{p.category}</p>
              <h3 className="product-name">{p.name}</h3>
              <p className="product-desc">{p.desc}</p>
              <div className="product-footer">
                <span className="product-price">{p.price}</span>
                <button className="product-add-btn">Add to Bag</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="products-view-all">
        <button className="btn-outline">View All Products</button>
      </div>
    </section>
  );
}
