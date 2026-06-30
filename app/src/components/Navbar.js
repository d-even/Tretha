import { useEffect, useState } from 'react';
import logo from '../public/logo.png';

export default function Navbar({ cartCount = 0 }) {
  const [scrolled,   setScrolled]   = useState(false);
  const [cartOpen,   setCartOpen]   = useState(false);
  const [signOpen,   setSignOpen]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [isLogin,    setIsLogin]    = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  /* close panels on outside click */
  useEffect(() => {
    if (!cartOpen && !signOpen) return;
    const close = (e) => {
      if (!e.target.closest('.nb-panel') && !e.target.closest('[data-panel-trigger]')) {
        setCartOpen(false);
        setSignOpen(false);
      }
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [cartOpen, signOpen]);

  const closeAll = () => {
    setMenuOpen(false);
    setCartOpen(false);
    setSignOpen(false);
  };

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        {/* Logo */}
        <a href="#home" className="navbar-logo" onClick={closeAll}>
          <img src={logo} alt="Tretha" />
          <span className="navbar-logo-text">Tretha</span>
        </a>

        {/* Desktop nav links */}
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#story">Our Story</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#reviews">Reviews</a></li>
          <li><a href="#visit">Visit Us</a></li>
        </ul>

        {/* Desktop action buttons */}
        <div className="nb-actions">
          <button
            className="nb-signup-btn"
            data-panel-trigger="sign"
            onClick={() => { setSignOpen(o => !o); setCartOpen(false); setMenuOpen(false); }}
          >
            Sign Up
          </button>

          <button
            className="nb-cart-btn"
            data-panel-trigger="cart"
            onClick={() => { setCartOpen(o => !o); setSignOpen(false); setMenuOpen(false); }}
            aria-label="Cart"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            <span>Cart</span>
            {cartCount > 0 && <span className="nb-badge">{cartCount}</span>}
          </button>
        </div>

        {/* Hamburger (mobile only) */}
        <button
          className={`nb-hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => { setMenuOpen(o => !o); setCartOpen(false); setSignOpen(false); }}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* ── Mobile fullscreen menu ── */}
      <div className={`nb-mobile-menu${menuOpen ? ' open' : ''}`}>
        <ul className="nb-mobile-links">
          {['Home', 'Our Story', 'Products', 'Reviews', 'Visit Us'].map((label, i) => {
            const hrefs = ['#home', '#story', '#products', '#reviews', '#visit'];
            return (
              <li key={i}>
                <a href={hrefs[i]} onClick={closeAll}>{label}</a>
              </li>
            );
          })}
        </ul>
        <div className="nb-mobile-actions">
          <button
            className="nb-signup-btn"
            onClick={() => { setMenuOpen(false); setSignOpen(true); }}
          >
            Sign Up
          </button>
          <button
            className="nb-cart-btn"
            onClick={() => { setMenuOpen(false); setCartOpen(true); }}
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            Cart {cartCount > 0 && `(${cartCount})`}
          </button>
        </div>
      </div>

      {/* ── Sign Up / Login panel ── */}
      {signOpen && (
        <div className="nb-panel nb-auth-panel">
          <div className="nb-auth-tabs">
            <button className={`nb-tab${isLogin ? ' active' : ''}`} onClick={() => setIsLogin(true)}>Login</button>
            <button className={`nb-tab${!isLogin ? ' active' : ''}`} onClick={() => setIsLogin(false)}>Sign Up</button>
          </div>
          {isLogin ? (
            <div className="nb-form">
              <p className="nb-panel-title">Welcome Back</p>
              <input className="nb-input" type="email" placeholder="Email address" />
              <input className="nb-input" type="password" placeholder="Password" />
              <button className="nb-submit">Sign In</button>
              <p className="nb-switch">New here? <button className="nb-switch-btn" onClick={() => setIsLogin(false)}>Create account</button></p>
            </div>
          ) : (
            <div className="nb-form">
              <p className="nb-panel-title">Create Account</p>
              <input className="nb-input" type="text" placeholder="Full name" />
              <input className="nb-input" type="email" placeholder="Email address" />
              <input className="nb-input" type="password" placeholder="Password" />
              <button className="nb-submit">Create Account</button>
              <p className="nb-switch">Already a member? <button className="nb-switch-btn" onClick={() => setIsLogin(true)}>Sign in</button></p>
            </div>
          )}
        </div>
      )}

      {/* ── Cart panel ── */}
      {cartOpen && (
        <div className="nb-panel nb-cart-panel">
          <p className="nb-panel-title">Your Bag</p>
          {cartCount === 0 ? (
            <div className="nb-cart-empty">
              <div className="nb-cart-icon">🛍️</div>
              <p>Your bag is empty</p>
              <a href="#products" className="nb-submit" onClick={closeAll}>Explore Products</a>
            </div>
          ) : (
            <div>
              <p className="nb-cart-count">{cartCount} item{cartCount > 1 ? 's' : ''} in your bag</p>
              <button className="nb-submit" style={{ marginTop: 20 }}>Proceed to Checkout</button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
