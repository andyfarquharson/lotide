const assertEqual = require('./assertEqual');

const tail = function(input) {
  let ans = input.slice(1);
  return ans;
};

module.exports = tail;

