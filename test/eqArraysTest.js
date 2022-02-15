const { assert } = require('chai');
const eqArrays = require('../eqArrays');

describe('#eqArrays', () => {

  it('returns true when the same array is given twice', () => {
    const arr1 = [1, 2 ,3];
    assert.strictEqual(eqArrays(arr1, arr1), true);
  });

  it('returns false when the arrays are different length', () => {
    const arr1 = [1, 2 ,3];
    const arr2 = [1, 2];
    assert.strictEqual(eqArrays(arr1, arr2), false);
  });

  it('returns false when the arrays have the same elements in a diff. order', () => {
    const arr1 = [1, 2 ,3];
    const arr2 = [3, 2, 1];
    assert.strictEqual(eqArrays(arr1, arr2), false);
  });

  it('returns true when both arrays are empty', () => {
    const arr1 = [];
    const arr2 = [];
    assert.strictEqual(eqArrays(arr1, arr2), true);
  });

});