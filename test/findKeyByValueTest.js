const findKeyByValue = require('../findKeyByValue');
const { assert } = require('chai');

describe('#findKeyByValue', () => {

  it('returns the first key that contains the given value', () => {
    const obj1 = {
      key1: 'value1',
      key2: 'value2',
      key3: 'value3'
    };
    assert.strictEqual(findKeyByValue(obj1, 'value3'), 'key3');
  });

  it('returns undefined if the given value does not exist', () => {
    const obj1 = {
      key1: 'value1',
      key2: 'value2',
      key3: 'value3'
    };
    assert.strictEqual(findKeyByValue(obj1, 'does not exist'), undefined);
  });

});