// PROPERTIES are like variables attached to classes/bjects

// METHODS are like functions attached to classes/objects

// ES7 Stuff, use Babel to get it work for all browsers
class Human {
  gender = 'Female';

  printGender = () => {
    console.log(this.gender);
  }
}

class Person extends Human {
  name = 'Deepak';
  gender = 'Male';

  printDetails = () => {
    console.log(`this is ${this.name}, who is a ${this.gender}`);
  }
}

const person = new Person();
person.printDetails();
