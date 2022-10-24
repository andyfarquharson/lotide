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

/*
console.log(assertArraysEqual("Lets see if this works","Let's see if this works"));
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
*/
const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (i = 0; i < sentence.length; i++) {
    if (i === ' ') {
      continue;
    }
    if (!results[sentence[i]]) {
      results[sentence[i]] = [i];
      // console.log()
    } else {
      results[sentence[i]].push(i);
    }
  }
  return results;
};


console.log(letterPositions("hello"));

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2]);
assertArraysEqual(letterPositions("hello").l, [3]);


