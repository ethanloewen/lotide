const without = require('../without');
const { assert } = require('chai');

describe('#without', () => {

  it('returns an array with the correct items removed', () => {
    const arr1 = [1, 2, 3];
    const remove = [2];
    assert.deepEqual(without(arr1, remove), [1, 3]);
  });

  it('returns the input array if the second parameter is empty', () => {
    const arr1 = [1, 2, 3];
    const remove = [];
    assert.deepEqual(without(arr1, remove), [1, 2, 3]);
  });

  it('only removes items that exist in the first parameter', () => {
    const arr1 = [1, 2, 3];
    const remove = [1, 2, '3'];
    assert.deepEqual(without(arr1, remove), [3]);
  });

  it('returns an empty array if the first parameter is empty', () => {
    const arr1 = [];
    const remove = [1, 2, 3];
    assert.deepEqual(without(arr1, remove), []);
  });

});