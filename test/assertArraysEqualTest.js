const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe('#assertArraysEqual', () => {
  it("should return true if passed with [1, 2, 3] and [1, 2, 3]", () =>{
    assert.equal(assertArraysEqual([1, 2, 3], [1, 2, 3]), true);
  });
  it("should return false if passed with [1, 2, 3] and [3, 2, 1]", () => {
    assert.equal(assertArraysEqual([1, 2, 3], [3, 2, 1]), false);
  });
  it("should return true if passed with ['1', '2', '3'] and ['1', '2', '3']", () => {
    assert.equal(assertArraysEqual(['1', '2', '3'], ['1', '2', '3']), true);
  });
  it("should return false if passed with ['1', '2', '3'] and ['1', '2', 3]", () => {
    assert.equal(assertArraysEqual(["1", "2", "3"], ["1", "2", 3]), false);
  });
})
