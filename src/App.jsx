import React, { useState } from 'react';
import {
  Navbar,
  Hero,
  Analytics,
  Newsletter,
  Cards,
  Footer,
} from './components';

const App = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  function handleMenuToggle() {
    setIsMenuOpened(!isMenuOpened);
  }

  return (
    <div>
      <Navbar isMenuOpened={isMenuOpened} handleMenuToggle={handleMenuToggle} />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;
