import React from 'react';

const person = (props) => {
  //return <p>I'm a { Math.floor(Math.random() * 30) } old person</p>;
  return <p>I'm {props.name} & {props.age} year old!</p>
}

export default person;
