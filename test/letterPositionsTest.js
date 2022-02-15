const letterPositions = require('../letterPositions');
const { assert } = require('chai');

describe('#letterPositions', () => {

  it('returns an object with the indices of each character', () => {
    const str1 = 'hello world';
    const expected = {
      h: [0],
      e: [1],
      l: [2, 3, 9],
      o: [4, 7],
      w: [6],
      r: [8],
      d: [10]
    }
    assert.deepEqual(letterPositions(str1), expected);
  });

});