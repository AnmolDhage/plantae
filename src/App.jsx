import React from 'react';
import './index.css';
import Accordian from './Components/acoordian/FrequentlyAskedQuestions.jsx'
import Quote from './Components/Quote.jsx'
import Search from './Components/Search.jsx'
import About from './About/About.jsx';
import Footer from './footer';

function App() {
  return (
    <div>
    <About />
    <Accordian />
    <Quote />
    <Search />
    <Footer />
    </div>
);
}

export default App;
