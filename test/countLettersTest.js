const countLetters = require('../countLetters');
const { assert } = require('chai');

describe('#countLetters', () => {

  it('returns the count of each letter', () => {
    assert.deepEqual(countLetters('test'), { t: 2, e: 1, s: 1 });
  });
  
});