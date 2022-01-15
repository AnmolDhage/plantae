import React from 'react';
import Aboutsec1 from './Aboutsec1.jsx';
import Aboutsec2 from './Aboutsec2.jsx';
import Footer from './Footer.jsx';
import Faq from './Faq.jsx';
import AboutAllPlantCards from './AboutAllPlantCards';
import TypeCardComponent from './TypeCardComponent.jsx';

function About() {
  return(
    <div>
      <Aboutsec1 />
      <Aboutsec2 />
      <TypeCardComponent />
      <AboutAllPlantCards />
      <Faq />
      <Footer />
    </div>
  )
}

export default About;
