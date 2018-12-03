import React, { Component } from 'react';
// now since we enabled css modules, we can import all styles from the css
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props) {
    // necessary to call super props
    super(props);
    console.log('[App.js] Inside constructor', props);

    // this is an important property of a class
    // state is a special thing which is managed within the component
    // if something changes inside the state, then the dom is rerendered.
    this.state = {
      persons: [
        {id: '1', name:'Deeksha', age: '26'},
        {id: '2', name:'Karthik', age: '31'},
        {id: '3', name:'Deepak', age: '31'},
      ],
      otherState: 'some other value',
      showPersons: false
    }
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount');
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

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // DONOT do this, you are mutating the reference of the object
    // const person = this.state.persons[personIndex];
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    // copy of the object, this wont copy the reference of prev obj
    const persons = [...this.state.persons];
    // update the updated person to the copy
    persons[personIndex] = person;

    // update the state with updated persons array
    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons : !doesShow });
  }

  deletePersonHandler = (index) => {
    // slice copies the array, here persons const has a new array with different reference
    // const persons = this.state.persons.slice();
    // spread is used to split the array elements, here we are splitting and creating a new one, alternative to slice
    const persons = [...this.state.persons];
    // splice 1 element using the index
    persons.splice(index, 1);
    // assign back the reference
    this.setState({persons: persons})
  }

  render() {
    console.log('[App.js] Inside render method');

    let persons = null;
    if ( this.state.showPersons ) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.changeNameHandler} />
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}/>
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
