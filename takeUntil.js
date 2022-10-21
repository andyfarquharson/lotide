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


const takeUntil = (array, callback) => {
  output = [];
  for (i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      array.splice(i);
    return array;
    }
  }
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

console.log(assertArraysEqual(results1, [1, 2, 5, 7, 2]));
console.log(assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]));