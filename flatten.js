// Returns a flattened version of an array
const flatten = function(arr) {
  outputArr = []

  for(let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for(const y of arr[i]) {
        outputArr.push(y);
      }
    } else {
      outputArr.push(arr[i]);
    }
  }

  return outputArr;
};

module.exports = flatten;