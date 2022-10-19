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

// define function with one argument
const middle = function(array) {
  let output = [];
  if (array.length < 3) {
    return [];
  } else if (array.length % 2 !== 0) {
    output.push(array[(array.length - 1) / 2]);
    return output;
  } else if (array.length % 2 === 0) {
    output.push(array[(array.length / 2) - 1]);
    output.push(array[array.length / 2]);
    return output;
  }
}
// Tests for middle
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);