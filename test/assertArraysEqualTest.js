const assertArraysEqual = require('../assertArraysEqual');

// Checking that the messages print correctly
assertArraysEqual([1, 2, 3], [1, 2, 3]); //pass
assertArraysEqual([3, 2, 1], [1, 2, 3]); //fail