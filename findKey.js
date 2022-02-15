// scans the object and returns the first key for which the callback returns a truthy value
const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }

  return undefined;
};

module.exports = findKey;