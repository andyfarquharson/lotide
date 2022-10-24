
// define function with one argument
const middle = function(array) {
  let output = [];
  if (array.length < 3) {
    return [];
  } else if (array.length % 2 !== 0) {
    output.push(array[(array.length - 1) / 2]);
    return output;
  } else if (array.length % 2 === 0) {
    output.push(array[(array.length / 2) - 1]);
    output.push(array[array.length / 2]);
    return output;
  }
}

module.exports = middle;