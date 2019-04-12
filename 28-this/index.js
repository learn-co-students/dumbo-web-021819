console.log("WE GOOD")
// the keywork "this"
// Execution context
// this.console.log(this)
// window.console.log(this)
// console.log(this)


// Scenario 1: `this` get AUTOMATICALLY bound to the class/instance
// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
//
//   bark() {
//     console.log("what `this` is in the dog object: ", this)
//     return `WOOF! I'm ${this.name}! WOOF!!!`
//   }
//
//   static whatIsADog() {
//     console.log("what `this` is in the dog class: ", this)
//     return "A dog is a loving four legged (usually) animal."
//   }
//
// }



// Scenario 2: Functions
// function saySup() {
//   // console.log("what `this` is in the saySup function: ", this)
//   return `sup ${this.name}`
// }
// //
// // // saySup() => ????? window
// //
// const cat = {
//   name: "Cuddles",
//   speak: saySup
// }

// cat.speak() => ??????? cat obj



// Scenario 3: Arrow Functions
// const saySup = (anythingReally) => {
//   console.log("what `this` is in the saySup arrow function: ", this)
//   return `sup ${this.name}`
// }
// //
// // // saySup() => ????
// //
// const cat = {
//   name: "Cuddles",
//   speak: saySup
// }

// cat.speak() => ????



// Scenario 4: bind/call/apply


//
//
//
// // saySup() => ?????
// // ourBoundSaySup() => ?????
// const ourBoundSaySup = saySup.bind(window) ===>
// function ourBoundSaySup() {
//   console.log("what `this` is in the saySup function: ", window)
//   return `sup ${window.name}`
// }
//
//
// // cat.speak() => ???????
// const dog = {
//   name: "Roofus"
// }
//
// const ourDogBoundsaySup = saySup.bind(dog) ===>
// function ourDogBoundsaySup() {
//   console.log("what `this` is in the saySup function: ", dog)
//   return `sup ${dog.name}`
// }
// // ourDogBoundsaySup() => ???????
//
//
// const cat = {
//   name: "Cuddles",
//   speak: ourDogBoundsaySup
// }

// function saySup(age) {
//   console.log("what `this` is in the saySup function: ", this)
//   return `sup ${this.name}, is ${age} years old`
// }

// saySup.call(window, 19)







// .
