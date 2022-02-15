// Function that removes items from an array and return a new modified array
const without = function(source, itemsToRemove) {
  outputArr = [];

  for(const elm of source) {
    let keep = true;
    for (const item of itemsToRemove) {
      if (elm === item) {
        keep = false;
        break;
      }
    }
    if (keep) {
      outputArr.push(elm);
    }
  }

  return outputArr;
};

module.exports = without;