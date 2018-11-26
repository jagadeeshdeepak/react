import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  // this is an important property of a class
  // state is a special thing which is managed within the component
  // if something changes inside the state, then the dom is rerendered.
  state = {
    persons: [
      {name:'Deepak', age: '31'},
      {name:'Deeksha', age: '26'},
      {name:'Karthik', age: '31'},
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>I'm a React App</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>He loves learning new tech</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>She loves Skin Wars</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>He loves doing kelsa</Person>
      </div>
    );

    // This is how the above code is interpreted by jsx.
    // takes infinite args, but atleast 3
    // first arg, a component
    // second arg, config for the component
    // third arg, any amount of children like whats nested inside div
    //return React.createElement('div', null, React.createElement('h1', null, 'I\'m a react app!!'));
  }
}

export default App;
