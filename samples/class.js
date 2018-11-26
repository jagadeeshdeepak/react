// how to define a class
class Person1 {
  name = 'Deepak';
  call() {
    return 'This is a class';
  }
}

// how to define a class
class Person2 {
  constructor(name) {
    this.name = name;
  }

  printName() {
    return console.log(this.name);
  }
}

const person2 = new Person2('Deepak');
person2.printName();

// inheritance
class Human {
  constructor() {
    this.gender = 'Male';
  }

  printGender() {
    console.log(this.gender);
  }
}

class Person3 extends Human {
  constructor() {
    super();
    this.name = 'Deepak';
  }

  printDetails() {
    console.log(`This is ${this.name}, who is a ${this.gender}`)
  }
}

const person3 = new Person3();
person3.printDetails();
