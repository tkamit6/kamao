import React, { useState, useEffect } from 'react';
import '../../custom.css';

const ParallaxSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Adjust the threshold value to determine when the text becomes active
    const threshold = 400;
    setIsActive(scrollY > threshold);
  }, [scrollY]);

  return (
    <main className='md:block hidden'>
    <ul id="cads md:block hidden">
      <li className="car h-[70vh] md:block hidden" >
       
      </li>
      <li className="car h-[70vh] md:block hidden" >
        <div className="card__conten md:block hidden">
          
        </div>
      </li>
    </ul>
  </main>
  );
};

export default ParallaxSection;
