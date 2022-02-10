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

// Function that maps an array based on a callback function
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {  
  results = [];

  for (const item of array) {
    results.push(callback(item));
  }

  return results;
};

assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(words, word => word), ["ground", "control", "to", "major", "tom"]);
assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);