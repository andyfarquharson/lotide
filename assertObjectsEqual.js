const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`πΈπΈπΈ  Assertation Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`πππ Assertation Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;