const eqArrays = require('./eqArrays');

// Start with defining a function
const assertArraysEqual = function(first, second) {
  if (eqArrays(first, second) === true) {
    console.log(`🐸🐸🐸 Assertation Passed: ${first} === ${second}`);
  } else
    console.log(`🍄🍄🍄 Assertation Failed: ${first} !== ${second}`);
};

module.exports = assertArraysEqual;
