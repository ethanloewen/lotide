const assertObjectsEqual = require('../assertObjectsEqual');

describe('#assertObjectsEqual', () => {

  it('passes for the same object twice', () => {
    const obj1 = {
      key1: '1',
      key2: '2',
      key3: '3'
    };
    assertObjectsEqual(obj1, obj1);
  });

  it('fails for 2 different objects', () => {
    const obj1 = {
      key1: '1',
      key2: '2',
      key3: '3'
    };
    const obj2 = {
      key1: '3',
      key2: '2',
      key3: '1'
    };
    assertObjectsEqual(obj1, obj2);
  });

});