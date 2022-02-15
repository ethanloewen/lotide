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
      if (!eqArrays(object1[key], object2[key])) {
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

module.exports = eqObjects;