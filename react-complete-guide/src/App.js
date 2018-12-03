import React, { Component } from 'react';
// now since we enabled css modules, we can import all styles from the css
import classes from './App.css';
import Person from './Person/Person';

class App extends Component {
  // this is an important property of a class
  // state is a special thing which is managed within the component
  // if something changes inside the state, then the dom is rerendered.
  state = {
    persons: [
      {id: '1', name:'Deeksha', age: '26'},
      {id: '2', name:'Karthik', age: '31'},
      {id: '3', name:'Deepak', age: '31'},
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
          {
            // map the list of persons instead of repetitive code
            // but for some we need events and for others we dont
            // pass an index and specify which index wants events tagged in specific class
            this.state.persons.map((person, index) => {
              return <Person
              name={person.name}
              age={person.age}
              // event with specific index on the element
              click={() => this.deletePersonHandler(index)}
              // key property for react to track each and individual elements
              key={person.id}
              // update the state for the input field we typed
              changed={(event) => this.changeNameHandler(event, person.id)}/>
            })
          }
        </div>
      )
    }

    const assignedClasses = [];
    if ( this.state.persons.length <= 2 ) {
      assignedClasses.push( classes.red );
    }

    if ( this.state.persons.length <= 1 ) {
      assignedClasses.push( classes.bold );
    }

    return (
      <div className={classes.App}>
        <h1>This is a react app</h1>
        <p className={assignedClasses.join( ' ' )}>This is really working!!</p>
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
