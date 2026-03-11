import React from 'react';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import AboutPreview from '../components/AboutPreview';

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutPreview />
      <Highlights />
    </div>
  );
};

export default Home;
