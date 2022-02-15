const eqArrays = require('./eqArrays');

// Checks if two objects are equal
const eqObjects = function(object1, object2) {

  const objectOneKeys = Object.keys(object1);
  const objectTwoKeys = Object.keys(object2);

  if (objectOneKeys.length !== objectTwoKeys.length) {
    return false;
  }

  for (const key of objectOneKeys) {

    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (eqArrays(object1[key], object2[key]) === false) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }

  return true;
};

// helps test functions that return objects
const assertObjectsEqual = function(actual, expected) {
  // import util library
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertation Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertation Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

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

assertObjectsEqual(obj1, obj1);
assertObjectsEqual(obj1, obj2);

