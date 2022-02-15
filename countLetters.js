// Takes in a string an returns the count of each letter in the string
const countLetters = function(inputStr) {
  let results = {};

  for(const char of inputStr) {
    if (char !== " ") {
      if (results[char]) {
        results[char]++;
      } else {
        results[char] = 1;
      }
    }
  }

  return results;
};

module.exports = countLetters;
