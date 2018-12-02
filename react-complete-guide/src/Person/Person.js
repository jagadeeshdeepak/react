import React from 'react';
import "./Person.css";

const person = (props) => {
  //return <p>I'm a { Math.floor(Math.random() * 30) } old person</p>;
  // STATE cannot be defined here
  return (
    <div className="Person">
      <p onClick={props.click}>I'm {props.name} & {props.age} years old!</p>
      <p>{props.children}</p>
      <input onChange={props.changed}/>
    </div>

  );
}

export default person;
