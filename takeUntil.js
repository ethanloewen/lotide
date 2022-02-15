// Runs a callback funtion until a truthy value is hit
const takeUntil = function(array, callback) {
  let results = [];

  for (const item of array) {
    if (callback(item)) {
      break;
    }
    results.push(item);
  }

  return results;
};

module.exports = takeUntil;