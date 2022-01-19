import React from 'react';
import Accordian from './FrequentlyAskedQuestions.jsx';
import Quote from './Quote.jsx';
import Search from './Search.jsx';

function Faq() {
  return <>
    <section id="faq" className="faq">
      <div className="c_container">
        <Accordian />
        <Quote />
        <Search />
      </div>
    </section>
  </>
}

export default Faq;
