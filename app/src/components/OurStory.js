import { useEffect, useRef, useState } from 'react';
import img1 from '../public/1.png';
import img2 from '../public/2.png';
import img3 from '../public/3.png';

const steps = [
  {
    img: img1,
   
    title: 'We Discover',
    text: 'We journey to the heart of nature — sourcing the finest botanical ingredients from sustainable farms across the world, harvested at peak potency.',
    bg: 'linear-gradient(135deg, #3d5745 0%, #4a6752 60%, #5a7a62 100%)',
    accent: '#e3ce7e',
    textColor: '#ffffff',
    subColor: 'rgba(255,255,255,0.75)',
    ringColor: 'rgba(227,206,126,0.35)',
    glowColor: 'rgba(227,206,126,0.15)',
  },
  {
    img: img2,
   
    title: 'We Craft',
    text: 'Our expert formulators blend every ingredient with precision and love, creating potent formulas that honour both your skin and the earth.',
    bg: 'linear-gradient(135deg, #a08870 0%, #b9a384 60%, #c9b594 100%)',
    accent: '#4a6752',
    textColor: '#1e1e1e',
    subColor: 'rgba(30,30,30,0.68)',
    ringColor: 'rgba(74,103,82,0.3)',
    glowColor: 'rgba(74,103,82,0.12)',
  },
  {
    img: img3,

    title: 'We Deliver',
    text: 'Each product is bottled with intention — arriving at your door ready to transform your daily ritual into something sacred and deeply nourishing.',
    bg: 'linear-gradient(135deg, #a87889 0%, #c18f9d 60%, #d1a0ae 100%)',
    accent: '#e3ce7e',
    textColor: '#ffffff',
    subColor: 'rgba(255,255,255,0.75)',
    ringColor: 'rgba(227,206,126,0.3)',
    glowColor: 'rgba(227,206,126,0.12)',
  },
];

export default function OurStory() {
  const wrapperRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!wrapperRef.current) return;
      const rect     = wrapperRef.current.getBoundingClientRect();
      const wrapperH = wrapperRef.current.offsetHeight;
      const scrolled = -rect.top;
      const scrollable = wrapperH - window.innerHeight;
      if (scrollable <= 0) return;
      const progress = Math.max(0, Math.min(0.999, scrolled / scrollable));
      setActiveStep(Math.floor(progress * steps.length));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const s = steps[activeStep];

  return (
    <section className="os-wrapper" id="story" ref={wrapperRef}>
      <div className="os-sticky">

        {/* ══ TOP: white heading band ══ */}
        <div className="os-top">
          <span className="os-eyebrow">Our Story</span>
          <h2 className="os-heading">The journey behind every drop</h2>
          <div className="os-heading-rule" />
        </div>

        {/* ══ BOTTOM: colored content area ══ */}
        <div className="os-color-band" style={{ background: s.bg }}>
          {/* grain overlay */}
          <div className="os-noise" />

          {/* ghost watermark number */}
        

          <div className="os-body">

            {/* left — text */}
            <div className="os-text-col">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className={`os-text-slide${activeStep === i ? ' active' : ''}`}
                >
                  <h3 style={{ color: s.textColor }}>{step.title}</h3>
                  <div className="os-text-divider" style={{ background: s.accent }} />
                  <p style={{ color: s.subColor }}>{step.text}</p>
                </div>
              ))}
            </div>

            {/* right — circular image */}
            <div className="os-img-col">
              <div className="os-glow"    style={{ background: s.glowColor }} />
              <div className="os-ring os-ring-outer" style={{ borderColor: s.ringColor }} />
              <div className="os-ring os-ring-inner" style={{ borderColor: s.ringColor }} />

              {steps.map((step, i) => (
                <div
                  key={i}
                  className={`os-img-slot${activeStep === i ? ' active' : ''}`}
                >
                  <img src={step.img} alt={step.title} className="os-circle-img" />
                </div>
              ))}

            
            </div>
          </div>

        
        </div>

      </div>
    </section>
  );
}
