// let person = {
//     name: 'John',
//     age: 30,
//     gender: 'male',
//     greet: function() {
//         console.log('Hello, my name is ' + this.name);
//     }
// };

// person.greet(); // Output: Hello, my name is John

// const numbers = [1, 2, 3, 4, 5];
// const [first, ...rest] = numbers;
// console.log(first); // Output: 1
// console.log(rest); // Output: [2, 3, 4, 5]


// const person = {
//     name: 'John',
//     age: 30,
//     gender: 'male'
// };

// const { name, age, gender } = person;

// console.log(name); // Output: John
// console.log(age); // Output: 30
// console.log(gender); // Output: male

// const person = {
//     name: 'John',
//     age: 30
// };
// const { name, age, gender = 'male' } = person;
// console.log(name); // Output: John
// console.log(age); // Output: 30
// console.log(gender); // Output: male

//Object Oriented JavaScript 
// Object with a method
const person = {
  firstName: 'John',
  lastName: 'Doe',
  getFullName: function() {
    return this.firstName + ' ' + this.lastName;
  }
};

console.log(person.getFullName()); // Output: John Doe

