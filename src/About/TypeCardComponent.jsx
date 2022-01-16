import React from 'react';
import Card from './TypeCards';
import CardDetails from './CardDetails';

function CreateCard(CardDetails){
  return <Card
          img={CardDetails.img}
          title={CardDetails.title}
          content={CardDetails.content}
          />
}

function TypeCardComponent() {
  return (
    <section id='TypeCardComp' className='TypeCardComp'>
      <div className='c_container flex'>
        <h1 className='TypeCardMainHeading subHeader'>What are you looking for?</h1>
        <div className='TypeCardSubHeading'>
          <h1 className='TypeCardSubHeadingh1 paraFont' >You name the Place and We got the Right Plant for it.</h1>
        </div>
        <div className='CardHolder'>
          {CardDetails.map(CreateCard)}
        </div>
      </div>
    </section>
  )
};

export default TypeCardComponent;
