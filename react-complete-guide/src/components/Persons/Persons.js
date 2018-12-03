import React, { Component } from 'react';
import Person from './Person/Person';

// oneline notation to return something
class Persons extends Component {
  render() {
    return this.props.persons.map((person, index) => {
      return <Person
        name={person.name}
        age={person.age}
        // event with specific index on the element
        click={() => this.props.clicked(index)}
        // key property for react to track each and individual elements
        key={person.id}
        // update the state for the input field we typed
        changed={(event) => this.props.changed(event, person.id)}/>
    })
  }
}

export default Persons;
