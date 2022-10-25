const eqArrays = require('./eqArrays');

// Start with defining a function
const assertArraysEqual = function(first, second) {
  if (eqArrays(first, second) === true) {
    console.log(`🐸🐸🐸 Assertation Passed: ${first} === ${second}`);
    return true;
  } else
    console.log(`🍄🍄🍄 Assertation Failed: ${first} !== ${second}`);
    return false;
};

module.exports = assertArraysEqual;
