// function that checks if two arrays are equal
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

// returns the middle element(s) in a new array
const middle = function(arr) {
  let outputArr = [];
  let length = arr.length;

  if (length < 3) {
    return outputArr;
  }

  if (length % 2 === 0) {
    outputArr.push(arr[(length / 2) - 1]);
    outputArr.push(arr[(length / 2)]);
  } else {
    outputArr.push(arr[(length - 1) / 2]);
  }

  return outputArr;
};


// testing
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
