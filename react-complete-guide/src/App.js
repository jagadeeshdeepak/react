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
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (name) => {
    //console.log('Was clicked!');
    //DONOT DO THIS: this.state.persons[0].name='Changed';
    // this is how the state should be changed setState is the method
    this.setState({
      persons: [
        {name: name, age: '35'},
        {name:'Deeksha', age: '26'},
        {name:'Shashi', age: '30'}
      ]
    });
  }

  changeNameHandler = (event) => {
    this.setState({
      persons: [
        {name:'Deeksha', age: '26'},
        {name:'Deepak', age: '31'},
        {name: event.target.value, age: '30'}
      ]
    });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons : !doesShow });
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if ( this.state.showPersons ) {
      persons = (
        <div>
          <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}/>

          <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind( this, 'Max' )}
          changed={this.changeNameHandler}>My Hobby is Snooker</Person>

          <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}/>
        </div>
      )
    }

    return (
      <div class="App">
        <h1>This is a react app</h1>
        <p>This is really working!!</p>
        <button
        style={style}
        onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
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
