import React from 'react';
import {
  Navbar,
  Hero,
  Analytics,
  Newsletter,
  Cards,
  Footer,
} from './components';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;
