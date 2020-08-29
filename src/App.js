import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Description from './components/Description/Description';
import Carousel from './components/Carousel/Carousel';
import ListView from './components/ListView/ListView';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <Description />
      <Carousel />
      <ListView />
      <Footer />
    </div>
  );
}

export default App;
