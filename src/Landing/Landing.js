import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';
import About from '../About/About';

function Landing() {
  const [visibleWordIndex, setVisibleWordIndex] = useState(-1); 

  useEffect(() => {
    const words = ["Un", "Holy", "War", "UnHolyWar"];
    let index = 0;

    const interval = setInterval(() => {
      setVisibleWordIndex(index);
      index++;
      if (index >= words.length) {
        clearInterval(interval);
      }
    }, 1000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="landing-container">
      
      <div className='landing-content'>
        <h1></h1>

        <Link to="/about" className="enter-btn">
          Enter
        </Link>
      </div>
    </div>
  );
}

export default Landing;
