// old function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertation Failed: ${actual} !== ${expected}`);
  }
};


// returns the first key that contains the given value
const findKeyByValue = function(object, value) {
  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  }

  return undefined;
};


// testing
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const favoriteSportsByName = {
  ralph: "hockey",
  sarah: "swimming",
  ethan: "volleyball",
  greg: "curling"
};

assertEqual(findKeyByValue(favoriteSportsByName, "hockey"), "ralph");
assertEqual(findKeyByValue(favoriteSportsByName, "volleyball"), "ethan");
assertEqual(findKeyByValue(favoriteSportsByName, "basketball"), undefined);