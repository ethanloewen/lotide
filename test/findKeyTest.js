const findKey = require('../findKey');
const { assert } = require('chai');

describe('#findKey', () => {

  it('returns the first key for which the callback function is true', () => {
    const obj1 = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 }
    };
    assert.strictEqual(findKey(obj1, x => x.stars === 2), 'noma');
  });

  it('returns undefined if the callback is never satisfied', () => {
    const obj1 = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 }
    };
    assert.strictEqual(findKey(obj1, x => x.stars === 4), undefined);
  });

});