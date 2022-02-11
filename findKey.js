const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertation Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertation Failed: ${actual} !== ${expected}`);
  }
};


// scans the object and returns the first key for which the callback returns a truthy value
const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }

  return undefined;
};

const obj1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}; // => "noma"

assertEqual(findKey(obj1, x => x.stars === 2), "noma");

const obj2 = {
  "Greg": { injury: "leg" },
  "Paula": { injury: "arm"},
  "Mark": { injury: "foot"}
};

assertEqual(findKey(obj2, x => x.injury === "head"), undefined);

const obj3 = {

};

assertEqual(findKey(obj3, x => x.injury === true), undefined);