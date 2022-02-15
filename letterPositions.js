// retuns all of the indices in a string where each character is found
const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence.charAt(i);

    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
    }
  }

  return results;
};

module.exports = letterPositions;
