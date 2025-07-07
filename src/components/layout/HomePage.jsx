import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';

import Footer from './Footer';
import EventSection from './Events';

export default function HomePage() {
  return (
    <div>
      <Header/>
      <HeroSection/>
    <EventSection/>
      <Footer/>
    </div>
  );
}
