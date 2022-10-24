const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it("should return ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });
  it("should return [ 2, 3, 4, 5, 6] for input of [ 1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5, 6]), [ 2, 3, 4, 5, 6]);
  });
});