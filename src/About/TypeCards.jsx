import React from 'react';

function Card(props){
    return <div>
        <div className='TypeCard'>
            <div className='TypeCardImage'>
                <img src={props.img} alt=""></img>
            </div>
            <div className='TypeCardHeading'>
                <h1>{props.title}</h1>
            </div>
            <div className='TypeCardContent'>
                <p className='TypeCardContentP'>{props.content}</p>
            </div>
        </div>
    </div> 

}

export default Card;