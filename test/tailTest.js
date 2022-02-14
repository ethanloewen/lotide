const { assert } = require('chai');
const tail = require('../tail');

describe('#tail', () => {

  it('has length 2 for ["one", "two", "three"]', () => {
    assert.strictEqual(tail(["one", "two", "three"]).length, 2);
  });

  it('returns ["two", "three"] for ["one", "two", "three"]', () => {
    assert.deepEqual(tail(["one", "two", "three"]), ["two", "three"]);
  });

  it('does not change the original array', () => {
    const original = ["Yo Yo", "Lighthouse", "Labs"];
    tail(original);
    assert.deepEqual(original, ["Yo Yo", "Lighthouse", "Labs"]);
  });

  it('returns [] for ["one"]', () => {
    assert.deepEqual(tail(["one"]), []);
  });

  it('returns [] for []', () => {
    assert.deepEqual(tail([]), []);
  });

});