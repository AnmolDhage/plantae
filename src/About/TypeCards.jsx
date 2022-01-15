import React from 'react';

function Card(props){
    return (
        <div className='TypeCard flex'>
          <img className='TypeCardImage' src={props.img} alt=""></img>
          <div className='TypeCardHeading subHeader'>
            <b>{props.title}</b>
          </div>
          <div className='TypeCardContent'>
              <p className='TypeCardContentP paraFont'>{props.content}</p>
          </div>
        </div>
      )
}

export default Card;
