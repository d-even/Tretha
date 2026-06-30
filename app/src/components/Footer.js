import logo from '../public/logo.png';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-top">
        {/* Brand */}
        <div>
          <img src={logo} alt="Tretha" className="footer-brand-logo" />
          <p className="footer-brand-desc">
            Tretha is a clean beauty brand rooted in nature and backed by science.
            Every product we make honours your skin and our planet.
          </p>
          <div className="footer-social">
            <a href="#!" aria-label="Instagram">&#9678;</a>
            <a href="#!" aria-label="Facebook">f</a>
            <a href="#!" aria-label="Pinterest">&#9670;</a>
            <a href="#!" aria-label="YouTube">&#9654;</a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <p className="footer-col-title">Quick Links</p>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#story">Our Story</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#!">Blog</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <p className="footer-col-title">Help & Support</p>
          <ul className="footer-links">
            <li><a href="#!">Track Your Order</a></li>
            <li><a href="#!">Returns & Exchanges</a></li>
            <li><a href="#!">Shipping Policy</a></li>
            <li><a href="#!">FAQ</a></li>
            <li><a href="#!">Contact Us</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <p className="footer-col-title">Stay in the Loop</p>
          <p>
            Get exclusive offers, skincare tips, and new launches delivered straight
            to your inbox.
          </p>
          <div className="newsletter-form">
            <input type="email" placeholder="Your email address" />
            <button type="button">Subscribe</button>
          </div>
          <div className="footer-certs">
            <span className="cert-badge">Cruelty Free</span>
            <span className="cert-badge">Vegan</span>
            <span className="cert-badge">Paraben Free</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          &copy; 2025 Tretha. All rights reserved.
        </p>
        <div className="footer-legal">
          <a href="#!">Privacy Policy</a>
          <a href="#!">Terms of Use</a>
          <a href="#!">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
