// Function that checks if two arrays are equal
const eqArrays = function(arr1, arr2) {

  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

// an assertEqual function that works for arrays
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertation Failed: ${actual} !== ${expected}`);
  }
};

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

// Testing
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, 3]), [1, 2, 3]);
assertArraysEqual(flatten([[1, 2, 3, 4, 5, 6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([[1], [2], [3], [4], [5], [6]]), [1, 2, 3, 4, 5, 6]);