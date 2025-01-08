import React from 'react';
import './About.css';
import top from './UN —HOLY—WAR.png'
function About() {
  return (
    <div className="about-page">
        <img src={top} className='about-top'/>
      
      <container className="about-container">
          <div className="about-row">
            <div className="left-column">
              <img src="https://i.ibb.co/sQKsxSB/2025-1.png" alt="" />
            </div>
            <div className="right-column">
              <h1>Unique<span> & Creative</span></h1>
              <p>
                UnHolyWarClothing is where religion meets fashion, creating a bold and
                unique expression of style. Every item in our collection is
                meticulously designed by the owner and our talented design team,
                ensuring each piece stands out with its individuality. We are committed
                to delivering premium quality by using only the finest materials in our
                products. UnHolyWarClothing isn’t just clothing—it’s a statement of
                identity, creativity, and purpose.
              </p>
            </div>
          </div>
        </container>

   <section class="blog" id="blog">
            <div class="box-container">
                <div class="box">
                    <img src="https://i.ibb.co/6ydZdSs/ds-img3.png" alt=""/>
                    <h3>Shirts</h3>
                  
                    <a href='/shirts' className='collection-btn'>Explore</a>
                </div>
                <div class="box">
                    <img src="https://i.ibb.co/184cz5g/new1.png" alt=""/>
                    <h3>Sweaters</h3>
                    
                    <a href='/sweaters' className='collection-btn'>Explore</a>
                </div>
                
            </div>
        </section>
  
        </div>
  );
}

export default About;
