import React from 'react';
import Person from './Person/Person';

// oneline notation to return something
const persons = (props) => (
  // map the list of persons instead of repetitive code
  // but for some we need events and for others we dont
  // pass an index and specify which index wants events tagged in specific class
  props.persons.map((person, index) => {
    return <Person
      name={person.name}
      age={person.age}
      // event with specific index on the element
      click={() => props.clicked(index)}
      // key property for react to track each and individual elements
      key={person.id}
      // update the state for the input field we typed
      changed={(event) => props.changed(event, person.id)}/>
  })
);

export default persons;
