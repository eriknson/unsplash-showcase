import React from 'react';

function Hero() {
  return (
    <>
      <div className="hero">
        <img
          src={require('../../assets/hero_background.jpg')}
          alt="The hero background texture."
        />
        <div className="hero-text">
          <h1>Texture & Patterns</h1>
          <span>
            <a href="www.google.se">See all images</a>
          </span>
        </div>
      </div>
    </>
  );
}
export default Hero;
