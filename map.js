const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["Andy", "Farquharson", "33", "Electrician"];
const words3 = ["Error", "nevermind", "&"]
const results1 = (map(words, word => word[0]));
const results2 = (map(words2, word => word[0]));
const results3 = (map(words3, word => word[0]));
console.log(results1);

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

console.log(assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']))
console.log(assertArraysEqual(results2, ['A', 'F', '3', 'E']));;
console.log(assertArraysEqual(results3, ['E', 'n', '&']));