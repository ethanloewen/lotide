const eqObjects = require('../eqObjects');
const { assert } = require('chai');

describe('#eqObjects', () => {

  it('returns true for { a: "1", b: "2" }, { b: "2", a: "1" }', () => {
    const obj1 = { a: "1", b: "2" };
    const obj2 = { b: "2", a: "1" };
    assert.deepEqual(eqObjects(obj1, obj2), true);
  });

  it('returns false when the objects are not the same length', () => {
    const obj1 = { a: "1", b: "2", c: "3" };
    const obj2 = { a: "1", b: "2" };
    assert.deepEqual(eqObjects(obj1, obj2), false);
  });

  it('returns true when the objects are the same and contain arrays', () => {
    const obj1 = { c: "1", d: ["2", 3] };
    const obj2 = { d: ["2", 3], c: "1" };
    assert.deepEqual(eqObjects(obj1, obj2), true);
  });

});