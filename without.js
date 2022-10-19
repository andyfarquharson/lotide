const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🐸🐸🐸 Assertation Passed: ${actual} === ${expected}`);
  } else
    console.log(`🍄🍄🍄 Assertation Failed: ${actual} !== ${expected}`);
};
// Start with defining a function
const eqArrays = function(first, second) {

  // If the lengths are equal then need to compare further
  if (first.length !== second.length) {
    // Loop through elements comparing them to each other
    return false;
  }
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
};
const assertArraysEqual = function(first, second) {
  if (eqArrays(first, second) === true) {
    console.log(`🐸🐸🐸 Assertation Passed: ${first} === ${second}`);
  } else
    console.log(`🍄🍄🍄 Assertation Failed: ${first} !== ${second}`);
};

const without = function(array, remove) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < remove.length; j++) {
      if (array[i] === remove[j]) {
        array.splice(i, 1);
      }  
    }  
  }
  newArray = array;
  return newArray;
}


without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
without([1, 2, 3], []); // => [1, 2, 3]
without([], [3,2]); // => []

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

/*
console.log(assertArraysEqual("Lets see if this works","Let's see if this works"));
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
*/