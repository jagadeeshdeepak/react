import React, { Component } from 'react';
// import css modules to get every style in it
import classes from './Person.css';

class Person extends Component {

  constructor(props) {
    // necessary to call super props
    super(props);
    console.log('[Person.js] Inside constructor', props);
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount');
  }

  //return <p>I'm a { Math.floor(Math.random() * 30) } old person</p>;
  // STATE cannot be defined here
  render () {
    console.log('[Person.js] Inside render');

    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>I'm {this.props.name} & {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input onChange={this.props.changed}/>
      </div>
    );
  }
}

export default Person;
