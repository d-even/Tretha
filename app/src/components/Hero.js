import { useEffect, useState } from 'react';
import bg1 from '../public/bg1.jpg';
import bg2 from '../public/bg2.jpg';
import bg3 from '../public/bg3.jpg';

const slides = [
  {
    img: bg1,
    tagline: 'Pure. Natural. Radiant.',
    title: 'Skincare Born\nFrom Nature',
    sub: 'Discover formulas crafted from the finest botanicals, designed to reveal your skin\'s most luminous self.',
    btn: 'Explore Collection',
  },
  {
    img: bg2,
    tagline: 'Science Meets Serenity',
    title: 'Your Daily\nRitual, Elevated',
    sub: 'Every drop is a moment of self-care — gentle on skin, powerful in results, kind to the planet.',
    btn: 'Shop Bestsellers',
  },
  {
    img: bg3,
    tagline: 'Sustainably Sourced',
    title: 'Beauty With\nA Conscience',
    sub: 'We believe luxury and sustainability go hand in hand. Clean beauty that feels as good as it performs.',
    btn: 'Our Promise',
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive(prev => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="home">
      {slides.map((slide, i) => (
        <div key={i} className={`hero-slide${active === i ? ' active' : ''}`}>
          <img src={slide.img} alt={slide.tagline} />
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="hero-tagline">{slide.tagline}</p>
            <h1 className="hero-title">
              {slide.title.split('\n').map((line, j) => (
                <span key={j}>{line}<br /></span>
              ))}
            </h1>
            <p className="hero-sub">{slide.sub}</p>
            <a href="#products" className="hero-btn">{slide.btn}</a>
          </div>
        </div>
      ))}

      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot${active === i ? ' active' : ''}`}
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
