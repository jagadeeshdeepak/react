import React from 'react';

const person = (props) => {
  //return <p>I'm a { Math.floor(Math.random() * 30) } old person</p>;
  // STATE cannot be defined here
  return (
    <div>
      <p onClick={props.click}>I'm {props.name} & {props.age} years old!</p>
      <p>{props.children}</p>
    </div>

  );
}

export default person;
