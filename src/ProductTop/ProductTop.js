import React from 'react'
import './ProductTop.css';
import bg from './bg1.gif';
import mb from './mobile.gif'
function ProductTop() {

  const isMobile = window.innerWidth <= 768; // Define the breakpoint for mobile view
  const bgMobile = {mb}; // Mobile background image
  const bgDesktop = {bg}; // Desktop background image

  return (
    <section class="Top hero" style={{
        backgroundImage: `url(${isMobile ? bgMobile : bgDesktop})`, 
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}>
        
      </section>
  )
}

export default ProductTop
