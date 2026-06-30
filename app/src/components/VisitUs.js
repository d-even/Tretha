import locationImg from '../public/location.png';

export default function VisitUs() {
  return (
    <section className="visit-section" id="visit">
      {/* top label strip */}
      <div className="visit-strip">
        <span className="section-eyebrow">Find Us</span>
      </div>

      <div className="visit-inner">

        {/* ── Left — info ── */}
        <div className="visit-info">
          <h2 className="visit-title">Come Visit Us</h2>
          <p className="visit-tagline">
            Step into our world. Let our experts guide you to<br />
            your perfect skincare ritual — in person.
          </p>

          <div className="visit-details">
            <div className="visit-row">
              <div className="visit-icon-wrap">
                <span>📍</span>
              </div>
              <div>
                <p className="visit-label">Our Store</p>
                <p className="visit-val">12, Green Blossom Lane, Koregaon Park<br />Pune, Maharashtra — 411 001</p>
              </div>
            </div>

            <div className="visit-row">
              <div className="visit-icon-wrap">
                <span>🕐</span>
              </div>
              <div>
                <p className="visit-label">Store Hours</p>
                <p className="visit-val">Mon – Sat &nbsp;10:00 AM – 8:00 PM<br />Sunday &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11:00 AM – 6:00 PM</p>
              </div>
            </div>

            <div className="visit-row">
              <div className="visit-icon-wrap">
                <span>📞</span>
              </div>
              <div>
                <p className="visit-label">Get in Touch</p>
                <p className="visit-val">+91 98765 43210<br />hello@tretha.in</p>
              </div>
            </div>
          </div>

          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="visit-cta"
          >
            Get Directions →
          </a>
        </div>

        {/* ── Right — image ── */}
        <div className="visit-img-wrap">
          <img src={locationImg} alt="Store Location" className="visit-img" />
          <div className="visit-img-badge">
            <span className="badge-dot" />
            Open Today
          </div>
        </div>

      </div>
    </section>
  );
}
