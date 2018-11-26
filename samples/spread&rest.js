// Spread or Rest is based on ... (three dots)

// SPREAD is USED to split array elememts or object properties
const oldArray = [1, 2, 3, 4, 5]
const newArray = [...oldArray, 1, 2];

console.log(newArray);

const person = {
  name: 'Max'
};

const newPerson = {
  ...person,
  age: 28
}

console.log(newPerson);

// REST is USED to merge a list of function arguments into an array
// get unlimited amount of arguments and form an array out of it
function sortArgs(...args) {
  return args.sort();
}

console.log(sortArgs(5, 4, 3, 2, 1));
