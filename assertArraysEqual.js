const eqArrays = require('./eqArrays');

// Start with defining a function
const assertArraysEqual = function(first, second) {
  if (eqArrays(first, second) === true) {
    console.log(`πΈπΈπΈ Assertation Passed: ${first} === ${second}`);
    return true;
  } else
    console.log(`πππ Assertation Failed: ${first} !== ${second}`);
    return false;
};

module.exports = assertArraysEqual;
