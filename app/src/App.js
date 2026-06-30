import { useState } from 'react';
import './App.css';
import Navbar   from './components/Navbar';
import Hero     from './components/Hero';
import OurStory from './components/OurStory';
import Products from './components/Products';
import Reviews  from './components/Reviews';
import VisitUs  from './components/VisitUs';
import Footer   from './components/Footer';

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="App">
      <Navbar cartCount={cartCount} />
      <Hero />
      <OurStory />
      <Products onAddToCart={() => setCartCount(c => c + 1)} />
      <Reviews />
      <VisitUs />
      <Footer />
    </div>
  );
}

export default App;
