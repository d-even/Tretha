const reviews = [
  {
    stars: 5,
    text: 'The Radiant Glow Face Wash is unlike anything I\'ve tried. My skin feels clean yet never stripped — and the scent is absolutely divine. I\'m on my third bottle!',
    name: 'Priya M.',
    initial: 'P',
    date: 'June 2025',
  },
  {
    stars: 5,
    text: 'Youth Revival Serum has genuinely transformed my skin in 3 weeks. Fine lines I\'ve had for years look visibly softer. Worth every rupee.',
    name: 'Ananya K.',
    initial: 'A',
    date: 'May 2025',
  },
  {
    stars: 5,
    text: 'I switched to the Natural Glow Soap Bar after years of harsh cleansers and I cannot go back. So gentle, so moisturising. My eczema has improved too!',
    name: 'Sneha R.',
    initial: 'S',
    date: 'June 2025',
  },
  {
    stars: 5,
    text: 'Tretha\'s Nourishing Shampoo gave my hair volume I haven\'t had in years. No sulphates, no silicones — just pure goodness. Highly recommend!',
    name: 'Kavya D.',
    initial: 'K',
    date: 'April 2025',
  },
  {
    stars: 5,
    text: 'Packaging is stunning and the products live up to the beauty. Tretha feels like a brand that actually cares about what goes on your skin. Loyal customer now.',
    name: 'Meera J.',
    initial: 'M',
    date: 'June 2025',
  },
  {
    stars: 5,
    text: 'Finally a clean beauty brand that doesn\'t compromise on efficacy. The serum absorbed instantly, no sticky residue, and my glow is real! Thank you Tretha.',
    name: 'Divya N.',
    initial: 'D',
    date: 'May 2025',
  },
];

const doubled = [...reviews, ...reviews];

function Stars({ count }) {
  return (
    <div className="review-stars">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="reviews-section" id="reviews">
      <div className="section-header">
        <span className="section-eyebrow">What They Say</span>
        <h2 className="section-title">Loved by Real People</h2>
        <p className="section-sub">
          Over 10,000 happy customers and counting. Here\'s what they have to say
          about their Tretha journey.
        </p>
      </div>

      <div className="reviews-track-wrap">
        <div className="reviews-track">
          {doubled.map((r, i) => (
            <div key={i} className="review-card">
              <Stars count={r.stars} />
              <p className="review-text">{r.text}</p>
              <div className="review-author">
                <div className="review-avatar">{r.initial}</div>
                <div>
                  <p className="review-name">{r.name}</p>
                  <p className="review-date">{r.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="reviews-stat-row">
        <div>
          <p className="stat-number">10K+</p>
          <p className="stat-label">Happy Customers</p>
        </div>
        <div>
          <p className="stat-number">4.9★</p>
          <p className="stat-label">Average Rating</p>
        </div>
        <div>
          <p className="stat-number">100%</p>
          <p className="stat-label">Natural Ingredients</p>
        </div>
        <div>
          <p className="stat-number">0</p>
          <p className="stat-label">Harmful Chemicals</p>
        </div>
      </div>
    </section>
  );
}
