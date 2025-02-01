import React from 'react';
import './ProductTop.css';

function ProductTop() {
  const isMobile = window.innerWidth <= 768;  
  const bgMobile = 'https://i.imghippo.com/files/ni1282ms.gif'; 
  const bgDesktop = 'https://i.imghippo.com/files/Tj8637oE.gif'; 

  return (
    <section
      className="Top hero"
      style={{
        backgroundImage: `url(${isMobile ? bgMobile : bgDesktop})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      {/* Add your content here */}
    </section>
  );
}

export default ProductTop;
