// // Define a superclass
// class Animal {
//     speak() {
//       console.log("Animal speaks");
//     }
//   }
  
//   // Define a subclass that extends Animal
//   class Dog extends Animal {
//     bark() {
//       console.log("Dog barks");
//     }
//   }
  
//   // Define another subclass that extends Animal
//   class Cat extends Animal {
//     meow() {
//       console.log("Cat meows");
//     }
//   }
  
//   // Create instances of subclasses
//   let dog = new Dog();
//   let cat = new Cat();
  
//   // Call methods inherited from the superclass
//   dog.speak(); // Output: Animal speaks
//   cat.speak(); // Output: Animal speaks
  
//   // Call methods specific to subclasses
//   dog.bark(); // Output: Dog barks
//   cat.meow(); // Output: Cat meows
  
// Define a superclass
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(this.name + " speaks");
    }
  }
  
  // Define a subclass that extends Animal
  class Dog extends Animal {
    constructor(name, breed) {
      super(name); // Call the constructor of the superclass
      this.breed = breed;
    }
  
    bark() {
      console.log(this.name + " (a " + this.breed + " breed) barks");
    }
  }
  
  // Create an instance of the Dog subclass
  let dog = new Dog("Buddy", "Labrador");
  
  // Call methods inherited from the superclass
  dog.speak(); // Output: Buddy speaks
  
  // Call methods specific to the subclass
  dog.bark(); // Output: Buddy (a Labrador breed) barks
  