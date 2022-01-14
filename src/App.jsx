import React from 'react';
import About from './About/About.jsx';
import Footer from './About/Footer.jsx';
import Faq from './About/Faq.jsx';
import AboutAllPlantCards from './About/AboutAllPlantCards';
import TypeCardComponent from './About/TypeCardComponent.jsx';
function App() {
  return (
    <div>
      <About />
      <TypeCardComponent />
      <AboutAllPlantCards />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
