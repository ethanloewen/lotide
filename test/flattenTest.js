const flatten = require('../flatten');
const { assert } = require('chai');

describe('#flatten', () => {
  
  it('removes arrays nested 1 level deep', () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it('does not change flat arrays', () => {
    assert.deepEqual(flatten([1, 2, 3]), [1, 2, 3]);
  });

  it('flattens if all elements are arrays', () => {
    assert.deepEqual(flatten([[1], [2], [3], [4], [5], [6]]), [1, 2, 3, 4, 5, 6]);
  });

});