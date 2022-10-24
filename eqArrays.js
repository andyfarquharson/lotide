// Start with defining a function
const eqArrays = function(first, second) {
  // If the lengths are equal then need to compare further
  if (first.length !== second.length) {
    return false;
  }
  // Loop through elements comparing them to each other
  for (const i of first) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;   
}

module.exports = eqArrays;
