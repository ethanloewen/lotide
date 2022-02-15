const map = require('../map');
const { assert } = require('chai');

describe('#map', () => {

  it('returns an array modified by the callback function', () => {
    const words = ["ground", "control", "to", "major", "tom"]
    assert.deepEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
  });

  it('returns the input when the callback does not change anything', () => {
    const input = ["test", "case"];
    assert.deepEqual(map(input, x => x), ['test', 'case']);
  });

  it('returns the length of each element when the callback gets their length', () => {
    const input = ["test", "case"];
    assert.deepEqual(map(input, x => x.length), [4, 4]);
  });

});