/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window Binding defaults to the window object unless you use strict, which will return undefined.
 * 2. Implicit Binding refers to what's left of the dot when a function is called
 * 3. New binding constructs a new object using the "new" keyword
 * 4. Explicit binding allows ut to tell the JavaScript engine to set "this" to a certain value, and can be used to invoke a function immediately
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
"use strict";
function pumpkin() {
  console.log(this.carve);
}

const carve = "🎃";
pumpkin();

// Principle 2

// code example for Implicit Binding

let myZombie = {
  name: "Frankenstein",
  says: "brains 🧠!",
  zombie: function() {
    console.log(this.says);
  }
};

myZombie.zombie();
// Principle 3

// code example for New Binding

function Vampire(saying) {
  this.thing = saying;
}

let thisVampire = new Vampire("I'm a vampire 🧛🏽‍");
console.log(`Dracula says "${thisVampire.thing}!"`);

// Principle 4

// code example for Explicit Binding
function skeleton() {
  console.log(this.joke);
}
let mySkeleton = {
  name: "Napoleon Bone-apart",
  joke: "What did the skeleton say before eating his dinner? Bone-appetite!"
};
skeleton.call(mySkeleton);
