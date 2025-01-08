import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav/Nav';
import Landing from './Landing/Landing';
import Shirts from './Shirts/Shirts';
import Sweaters from './Sweaters/Sweaters';
import Footer from './Footer/Footer';
import About from './About/About';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartCount(cartCount + 1);
    setCartItems([...cartItems, item]);
  };

  return (
    <Router>
      <div className="App">
      <Nav cartCount={cartCount} cartItems={cartItems} setCartItems={setCartItems} />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="about" element={<About />} />
          <Route
            path="shirts"
            element={<Shirts onAddToCart={handleAddToCart} />} 
          />
          <Route path="sweaters" element={<Sweaters onAddToCart={handleAddToCart} />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;



