const assertArraysEqual = require("./assertArraysEqual");


const flatten = (array) => {
  let result = [];
  array.forEach((element) => {
    if (Array.isArray(element)) {
      result = result.concat(element);
    } else {
      result.push(element);
    }
  });
  return result;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);

module.exports = flatten;
