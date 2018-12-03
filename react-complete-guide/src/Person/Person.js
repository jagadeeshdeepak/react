import React from 'react';
// import css modules to get every style in it
import classes from './Person.css';

const person = (props) => {
  //return <p>I'm a { Math.floor(Math.random() * 30) } old person</p>;
  // STATE cannot be defined here
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>I'm {props.name} & {props.age} years old!</p>
      <p>{props.children}</p>
      <input onChange={props.changed}/>
    </div>

  );
}

export default person;
