import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>I'm a React App</h1>
        <Person/>
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
