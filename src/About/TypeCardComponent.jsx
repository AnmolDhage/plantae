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
    <div className='container'>
      <div>
        <h1 className='TypeCardMainHeading'>What are you looking for?</h1>
      </div>
      <div className='TypeCardSubHeading'>
        <h1 className='TypeCardSubHeadingh1' >You name the Place and We got the Right Plant for it.</h1>
      </div>
      <div className='TypeCardList'>
        {CardDetails.map(CreateCard)}
      </div>
    </div>
  )
};

export default TypeCardComponent;