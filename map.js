// Function that maps an array based on a callback function
const map = function(array, callback) {  
  results = [];
  for (const item of array) {
    results.push(callback(item));
  }

  return results;
};

module.exports = map;