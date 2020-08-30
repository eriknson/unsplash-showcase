import React from 'react';

function Hero() {
  return (
    <>
      <div id="hero">
        <img
          src={require('../../assets/hero_background.jpg')}
          alt="The hero background texture."
        />
        <div className="hero-text">
          <h1>Textures & Patterns</h1>
          <span>
            <a href="#listview">See all images</a>
          </span>
        </div>
      </div>
    </>
  );
}
export default Hero;
