const takeUntil = require('../takeUntil');
const { assert } = require('chai');

describe('#takeUntil', () => {

  it('returns all elements until the callback is truthy', () => {
    const arr1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    assert.deepEqual(takeUntil(arr1, x => x < 0), [1, 2, 5, 7, 2]);
  });

  it('returns all elements if the callback is never truthy', () => {
    const arr1 = [1, 2, 3];
    assert.deepEqual(takeUntil(arr1, x => x < 0), [1, 2, 3]);
  });

});