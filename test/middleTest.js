const assert = require('chai').assert;
const middle = require('../middle');
// Tests for middle
describe('#middle', () => {
  it("should return 'empty' if given an array with less than 3 elements", () => {
    assert.deepStrictEqual(middle([1, 2]), []);
  });
  it("should return [2] if given [1, 2, 3]", () => {
    assert.deepStrictEqual(middle([1, 2, 3]), [2]);
  });
  it("should return [3, 4] if given [1, 2, 3, 4, 5, 6]", () => {
    assert.deepStrictEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});