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

module.exports = middle;


