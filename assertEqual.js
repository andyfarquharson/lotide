const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`πΈπΈπΈ Assertation Passed: ${actual} === ${expected}`);
    return;
  } 
    console.log(`πππ Assertation Failed: ${actual} !== ${expected}`);
};

module.exports = assertEqual;
