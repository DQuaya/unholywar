import React from 'react';
import './ProductTop.css';
import mobileVideo from './mobile.mov';
import desktopVideo from './desktop.mov';

function ProductTop() {
  const isMobile = window.innerWidth <= 768;
  const selectedVideo = isMobile ? mobileVideo : desktopVideo;

  return (
    <section
      className="Top hero">

        <video
        className="background-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={selectedVideo} type="video/mp4" />
        Your browser does not support the video tag.
  
      </video>
    </section>
  );
}

export default ProductTop;
