import React , { useState } from "react";
import { questions } from "./Questions.jsx";


function Accordian() {
  const [data, setData] = useState(questions); //state for maping through the questions.jsx

  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if(clicked === index) {
      //if clicked questionis already active then close it
      return setClicked(null);
    }

    setClicked(index);
  }

  return <div className="container-faq">
           <h1 className="FAQ subHeader">Frequently Asked Questions</h1>
           {
             data.map((qa, index) => {
               return <>
               <div className="question-item" onClick={() => toggle(index)} key={index}>
                 <span>{clicked === index ? <i className="fa fa-minus" aria-hidden="true"></i> : <i className="fa fa-plus" aria-hidden="true"></i>} </span>
                 <h2 className="paraFont">{qa.question}</h2>
               </div>
               {clicked === index ? (<p className="answer-item paraFont">{qa.answer}</p>) : null}
               </>;
             })
           }
  </div>;
}

export default Accordian;
