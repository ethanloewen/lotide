const countOnly = require('../countOnly');
const { assert } = require('chai');

describe('#countOnly', () => {

  it('returns an object with the count of names', () => {
    const names = [
      "Karl"
    ]
    assert.deepEqual(countOnly(names, {Karl: true}), {Karl: 1});
  });

  it('only counts names that have the value true', () => {
    const names = [
      "Karl",
      "Salima"
    ]
    assert.strictEqual(countOnly(names, {Karl: true, Salima: false})["Salima"], undefined);
  });

});
